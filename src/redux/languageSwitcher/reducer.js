import config, { getCurrentLanguage } from './config';

import actions from './actions';

const initState = {
  isActivated: false,
  language: getCurrentLanguage(config.defaultLanguage || 'english')
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ACTIVATE_LANG_MODAL:
      return {
        ...state,
        isActivated: !state.isActivated
      };
    case actions.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    default:
      return state;
  }
};

export default reducer;
