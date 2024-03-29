import config, { getCurrentTheme } from './config';
import actions from './actions';

const initState = {
  isActivated: false,
  changeThemes: getCurrentTheme(
    'changeThemes',
    config.changeThemes.defaultTheme || 'themedefault'
  ),
  topbarTheme: getCurrentTheme(
    'topbarTheme',
    config.topbarTheme.defaultTheme || 'themedefault'
  ),
  sidebarTheme: getCurrentTheme(
    'sidebarTheme',
    config.sidebarTheme.defaultTheme || 'themedefault'
  ),
  layoutTheme: getCurrentTheme(
    'layoutTheme',
    config.layoutTheme.defaultTheme || 'themedefault'
  )
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SWITCH_ACTIVATION:
      return {
        ...state,
        isActivated: !state.isActivated
      };
    case actions.CHANGE_THEME:
      return {
        ...state,
        [action.attribute]: action.theme
      };
    default:
      return state;
  }
};

export default reducer;
