import {Map} from 'immutable';

export function clearToken() {
  localStorage.removeItem('id_token');
}

export function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    return new Map({idToken});
  } catch (err) {
    clearToken();
    return new Map();
  }
}

export function arrayEqual(array1, array2) {
  return array1.sort().toString() === array2.sort().toString();
}

export function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();
  const numberEnding = (number) => {
    return number > 1 ? 's' : '';
  };
  const number = (num) => (num > 9 ? '' + num : '0' + num);
  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);
    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }
    const days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
      if (days < 28) {
        return days + ' day' + numberEnding(days);
      } else {
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const month = months[givenTime.getUTCMonth()];
        const day = number(givenTime.getUTCDate());
        return `${day} ${month}`;
      }
    }
    const hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }
    const minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }
    return 'a few seconds ago';
  };
  return getTime();
}

export function stringToInt(value, defValue = 0) {
  if (!value) {
    return 0;
  } else if (!isNaN(value)) {
    return parseInt(value, 10);
  }
  return defValue;
}

export function stringToPosetiveInt(value, defValue = 0) {
  const val = stringToInt(value, defValue);
  return val > -1 ? val : defValue;
}

export const changeFavicon = (src) => {
  const link = document.createElement('link');
  const oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
};

export const changeUrlFilter = (filter) => {
  let url = window.location.origin + window.location.pathname;
  let query_arr = [];
  let _arr = [];

  if (filter !== undefined && filter !== null) {
    let property;
    for (property in filter) {
      if (filter[property] !== undefined && filter[property] !== null && filter[property].toString().trim() !== '') {
        _arr.push({
          key: property,
          value: filter[property].toString().trim()
        });
      }
    }
  }

  if (_arr.length > 0) {
    _arr.forEach(item => {
      query_arr.push(item.key + '=' + item.value);
    })
  }

  query_arr.sort();
  if (query_arr.length) {
    url = url + '?' + query_arr.join('&');
  }
  window.history.replaceState(null, null, url);
};

export const getFilterData = (oldFilterData, onFilter, onOrder) => {
  // const DefaultPageSize = getDefaultPageSize();
  const DefaultPageSize = 10;
  let filterData = oldFilterData;
  if (onFilter) {
    let {value, property} = onFilter;
    filterData[property] = value;
    //reset paging
    filterData.PageNumber = '';
    if (filterData.PageSize) {
      filterData.PageNumber = 1;
    }
  } else {
    let {pagination, sorter} = onOrder;
    //paging --
    if (pagination !== {}) {
      let PageNumber = pagination.current;
      let PageSize = pagination.pageSize;
      let CurrentPageSize = DefaultPageSize;
      //get currentPageSize
      if (filterData.PageSize) {
        CurrentPageSize = filterData.PageSize;
      }
      //neu changePageSize -> reset PageNumber = 1
      if (PageSize !== CurrentPageSize) {
        PageNumber = 1;
      }
      filterData = {
        ...filterData,
        PageNumber,
        PageSize
      };
    }
    //order --
    if (sorter !== {}) {
      let OrderBy = '';
      let OrderValue = '';
      if (sorter.field && (sorter.order === "ascend" || sorter.order === "descend")) {
        OrderBy = sorter.field;
        OrderValue = sorter.order === "ascend" ? "asc" : "desc";
      }
      if (OrderValue !== "asc" && OrderValue !== "desc") {
        delete filterData.OrderBy;
        delete filterData.OrderValue;
      } else {
        filterData = {
          ...filterData,
          OrderBy,
          OrderValue,
        };
      }
    }
  }
  //xoa page info neu la default info: 1, DefaultPageSize
  filterData = {
    ...filterData,
    PageNumber: filterData.PageNumber ? parseInt(filterData.PageNumber) : 1,
    PageSize: filterData.PageSize ? parseInt(filterData.PageSize) : DefaultPageSize
  };
  if ((filterData.PageNumber === 1 && filterData.PageSize === DefaultPageSize) || !filterData.PageNumber) {
    delete filterData.PageNumber;
    delete filterData.PageSize;
  }
  return filterData;
};

export const getRoleByKey = (listRole, key) => {
  let role = {view: 0, add: 0, edit: 0, delete: 0};
  if (!listRole) {
    let roleStore = localStorage.getItem('role');
    listRole = JSON.parse(roleStore);
  }
  if (listRole && listRole[key]) {
    role = {...listRole[key]};
  }
  return role;
};

export const upperFirstLetter = (word) => {
  let newWord = word ? word.trim() : "";
  let text = newWord.split(' ');
  let res = [];
  for (let i = 0; i < text.length; i++) {
    let text2 = text[i].split('');
    text2[0] = text2[0] ? text2[0].toUpperCase() : "";
    text2 = text2.join('');
    res[res.length] = text2;
  }
  return res.join(' ');
};

export const formatDataTreeToFlat = (TreeData) => {
  const DataFlat = [];
  if (TreeData && TreeData.length) {
    TreeData.forEach(tree => {
      DataFlat.push(tree);
      const {Children} = tree;
      if (Children && Children.length) {
        const flatChildren = formatDataTreeToFlat(Children);
        DataFlat.push(...flatChildren);
      }
    })
  }
  return DataFlat;
};

// export const numToWord = function () {
//   let ty = "";
//   let t = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
//   const r = function (r, n) {
//     let o = "", a = Math.floor(r / 10), e = r % 10;
//     return a > 1 ? (o = " " + t[a] + " mươi", 1 === e && (o += " mốt")) : 1 === a ? (o = " mười", 1 === e && (o += " một")) : n && e > 0 && (o = " lẻ"), 5 === e && a >= 1 ? o += " lăm" : 4 === e && a >= 1 ? o += " tư" : (e > 1 || 1 === e && 0 === a) && (o += " " + t[e]), o
//   };
//   const n = function (n, o) {
//     var a = "", e = Math.floor(n / 100), n = n % 100;
//     return o || e > 0 ? (a = " " + t[e] + " trăm", a += r(n, !0)) : a = r(n, !1), a
//   };
//   const o = function (t, r) {
//     var o = "", a = Math.floor(t / 1e6), t = t % 1e6;
//     a > 0 && (o = n(a, r) + " triệu", r = !0);
//     var e = Math.floor(t / 1e3), t = t % 1e3;
//     return e > 0 && (o += n(e, r) + " nghìn", r = !0), t > 0 && (o += n(t, r)), o
//   };
//   return {
//     read: (r) => {
//       if (0 === r) return t[0];
//       var n = "", a = "";
//       do ty = r % 1e9, r = Math.floor(r / 1e9), n = r > 0 ? o(ty, !0) + a + n : o(ty, !1) + a + n, a = " tỷ"; while (r > 0);
//       return n.trim()
//     }
//   }
// }();

export const exportExcel = (rawHtml, exportName) => {
  let html, link, blob, url;
  let preHtml = `<html><head><meta charset='utf-8'></head><body>`;
  let postHtml = "</body></html>";
  html = preHtml + rawHtml + postHtml;
  blob = new Blob(['\ufeff', html], {
    type: 'application/vnd.ms-excel'
  });
  url = URL.createObjectURL(blob);
  link = document.createElement('A');
  link.href = url;
  link.download = `${exportName}.xls`;  // default name without extension
  document.body.appendChild(link);
  if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(blob, `${exportName}.xls`); // IE10-11
  else link.click();  // other browsers
  document.body.removeChild(link);
};

export const exportWord = (rawHtml, exportName, orientation = 'portrait') => {
  const css = (
    '@page divPrint' +
    '{size:595.3pt 841.9pt;' +
    //'mso-page-orientation:' + orientation + ' !important;' +
    'margin:2cm 2cm 2cm 2.5cm;' +
    'mso-header-margin:2cm;' +
    'mso-footer-margin:2cm;' +
    'mso-paper-source:0;}' +
    ' div.divPrint' +
    '{page:divPrint;} ' +
    '.page-break-before {page-break-before: always;} ' +
    '.page-break-after {page-break-after: always;}'
  );
  const preHtml = `<html><head><style charset='utf-8'>${css}</style></head><body>`;
  const postHtml = "</body></html>";
  const html = preHtml + rawHtml + postHtml;
  const blob = new Blob(['\ufeff', html], {type: 'application/msword'});
  const url = URL.createObjectURL(blob);
  let link = document.createElement('A');
  link.href = url;
  link.download = `${exportName}.doc`;  // default name without extension
  document.body.appendChild(link);
  if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(blob, `${exportName}.doc`); // IE10-11
  else link.click();  // other browsers
  document.body.removeChild(link);
};

export const getBase64Async = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export const FlatToTreeData = (FlatData) => {
  const TreeData = [];
  const expandedKeys = [];
  const findAllChidren = (ChaID) => {
    const children = FlatData.filter(item => item.ChaID === ChaID);
    children.forEach(child => {
      child.title = child.Ten;
      child.key = child.ID;
      child.children = findAllChidren(child.ID);
      if (child.children.length) {
        expandedKeys.push(child.ID.toString());
        child.isLeaf = false;
      } else {
        child.isLeaf = true;
      }
    });
    return children;
  };
  FlatData.forEach(item => {
    if (!item.ChaID) {
      //Parent
      const parentItem = {...item, title: item.Ten, key: item.ID};
      parentItem.children = findAllChidren(item.ID);
      if (parentItem.children.length) {
        expandedKeys.push(item.ID.toString());
        parentItem.isLeaf = false;
      } else {
        parentItem.isLeaf = true;
      }
      TreeData.push(parentItem);
    }
  });
  return {TreeData, expandedKeys};
};

export const getShorten = (text, length = 100) => {
  if (!text) return "";
  return text.length > length ? text.slice(0, length) + '...' : text;
};

export const printPDF = (html)=>{
  const iframe = document.createElement('iframe');
  iframe.src = html;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  // Use onload to make pdf preview work on firefox
  iframe.onload = () => {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  };
};

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));