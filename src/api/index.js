import {store} from '../redux/store';
import axios from "axios";
import auth_actions from "../redux/auth/actions";
import {clearToken} from '../library/helpers/utility';
import moment from "moment";
import {message} from "antd";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const user = () => {
  return store.getState().Auth;
};

const refreshToken = async () => {
  try {
    clearToken();
    store.dispatch({
      type: auth_actions.LOGOUT
    });
    history.replace('/signin');
  } catch (err) {
  }
};

const checkRefreshToken = () => {
  let refresh = 0;
  const userJsonCheck = localStorage.getItem('user');
  const userObjCheck = JSON.parse(userJsonCheck);
  if (userObjCheck.expires_at) {
    let expires_at = moment(userObjCheck.expires_at).format("YYYY-MM-DD HH:m:s");
    let today = moment().format("YYYY-MM-DD HH:m:s");
    if (today > expires_at) {
      refresh = 1;
    }
  } else {
    refresh = 1;
  }
  return refresh;
};

const getConfig = async (headers = {}) => {
  // Suspend request if we are in the middle of refreshing access token
  if (user().is_refreshing) {
    await new Promise((resolve, reject) => {
      store.subscribe(() => {
        if (!user().is_refreshing) {
          if (user().user) {
            resolve();
          } else {
            auth_actions.logout();
            reject('error');
          }
        }
      })
    })
  } else {
    if (!user().idToken) {
      auth_actions.logout();
    }
  }
  const user_data = user();

  if (user_data && user_data.user) {
    //check token expires
    const refresh = checkRefreshToken();
    if (refresh === 1) {
      await refreshToken();
    }
    // if(user_data.user.expires_at){
    //   let expires_at = moment(user_data.user.expires_at).format("YYYY-MM-DD");
    //   let today = moment().format("YYYY-MM-DD");
    //   if (today > expires_at) {
    //     await refreshToken();
    //   }
    // }

    if (!headers)
      headers = {};

    return {
      ...headers,
      'Authorization': `Bearer ${user_data.user.Token}`,
    };
  } else {
    //await refreshToken();
    auth_actions.logout();
  }
};

const callApi = (url, data = null, headers = {}, method = 'GET', responseType = 'json') => {
  if (!headers)
    headers = {};

  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
  let params = {};
  if (typeof data === 'object') {
    if (data instanceof FormData) {
      let key;
      for (key of data.keys()) {
        if (data.get(key) === 'null' || data.get(key) === 'undefined') {
          data.set(key, '');
        }
      }
      headers['Content-Type'] = 'multipart/form-data';
    } else {
      let prop_name;
      for (prop_name in data) {
        if (data[prop_name] === null || data[prop_name] === undefined) {
          data[prop_name] = '';
        }
      }
    }
  }

  if (!(method === 'PUT' || method === 'POST' || method === 'PATCH')) {
    params = data;
    data = {};
  }

  return axios({
    method,
    url,
    data,
    params,
    headers,
    responseType: responseType
  }).then(function (response) {
    // if(response.data.Status && response.data.Status === -1 && headers.Authorization){ //het han token
    //   clearToken();
    //   store.dispatch({type: auth_actions.LOGOUT});
    //   history.replace('/signin');
    // }
    return response || {};
  }).catch(function (error) {
    if (error.response) {
      const {status, statusText} = error.response;
      // The request was made and the server responded with a status code
      if (status === 401) {
        auth_actions.logout();
        message.error(statusText);
        return error.response;
      }
      // environment should not be used
      if (status === 403) {
        message.error(statusText);
        return error.response;
      }
      if (status <= 504 && status >= 500) {
        message.error(statusText);
        return error.response;
      }
      if (status >= 404 && status < 422) {
        message.error(statusText);
        return error.response;
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Api error', error.message);
    }
    //Error config
    console.log('Api default error', error.config);

  });
};

export const apiGet = async (url, params = null, headers = {}) => {
  return await callApi(url, params, headers, 'GET', 'json');
};

export const apiPost = async (url, params = null, headers = {}) => {
  return await callApi(url, params, headers, 'POST', 'json');
};

export const apiPut = async (url, params = null, headers = {}) => {
  return await callApi(url, params, headers, 'PUT', 'json');
};

export const apiPatch = async (url, params = null, headers = {}) => {
  return await callApi(url, params, headers, 'PATCH', 'json');
};

export const apiDelete = async (url, params = null, headers = {}) => {
  return await callApi(url, params, headers, 'DELETE', 'json');
};

function b64toBlob(dataURI) {
  let fileType = dataURI.split(";")[0].replace("data:", "");
  let byteString = atob(dataURI.split(',')[1]);
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {type: fileType}); //eg: image/jpg
}

export const apiGetUser = async (url, params = null, headers = {}) => {
  //check token expires
  const refresh = checkRefreshToken();
  if (refresh === 1) {
    await refreshToken();
    return apiGet(url); //need a result
  } else {
    const _headers = {
      ...headers,
      'Authorization': `Bearer ${params.Token}`,
    };
    return apiGet(url, {NguoiDungID: params.NguoiDungID}, _headers);
  }
};

export const apiGetAuth = async (url, params = null, headers = {}) => {
  const _headers = await getConfig(headers);
  return apiGet(url, params, _headers);
};

export const apiPostAuth = async (url, params = null, headers = {}) => {
  const _headers = await getConfig(headers);
  return apiPost(url, params, _headers);
};

export const apiPutAuth = async (url, params = null, headers = {}) => {
  const _headers = await getConfig(headers);
  return apiPut(url, params, _headers);
};

export const apiPatchAuth = async (url, params = null, headers = {}) => {
  const _headers = await getConfig(headers);
  return apiPatch(url, params, _headers);
};

export const apiPostPatchAuth = async (url, id = null, params = null, headers = {}) => {
  const _headers = await getConfig(headers);
  let _url = id ? url + '/' + id : url;
  if (id) {
    return apiPatchAuth(_url, params, _headers);
  } else {
    return apiPostAuth(_url, params, _headers);
  }
};

export const apiDeleteAuth = async (url, params = null, headers = {}) => {
  const _headers = await getConfig(headers);
  return apiDelete(url, params, _headers);
};

export const genFilterQuery = (filter) => {
  let filterArr = [];
  let filterQuery = '';
  if (filter && typeof (filter) === 'object') {
    let property;
    for (property in filter) {
      if (filter[property] !== undefined && filter[property] !== null && filter[property].toString().trim() !== '') {
        filterArr.push(`${property}(${filter[property]})`);
      }
    }
  }
  if (filterArr) {
    filterQuery = filterArr.join('.');
  }
  return filterQuery;
};
