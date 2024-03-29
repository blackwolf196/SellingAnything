import { getDefaultPath } from '../../library/helpers/url_sync';
import actions, { getView } from './actions';
import { isServer } from '../../library/helpers/isServer';

export interface AppReducerInterface {
  collapsed: boolean;
  view: string | boolean;
  height: number | boolean;
  openDrawer: boolean;
  openKeys: string[];
  current: string[];
  type?: any;
}

const preKeys = getDefaultPath();
const initState: AppReducerInterface = {
  collapsed: !isServer && window.innerWidth <= 1220,
  view: !isServer && getView(window.innerWidth),
  height: !isServer && window.innerHeight,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys
};

const appReducer = (state = initState, action: AppReducerInterface) => {
  switch (action.type) {
    case actions.COLLPSE_CHANGE:
      return {
        ...state,
        collapsed: !state.collapsed
      };
    case actions.COLLPSE_OPEN_DRAWER:
      return {
        ...state,
        openDrawer: !state.openDrawer
      };
    case actions.TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return {
          ...state,
          collapsed: action.collapsed,
          view: action.view,
          height
        };
      }
      break;
    case actions.CHANGE_OPEN_KEYS:
      return {
        ...state,
        openKeys: action.openKeys
      };
    case actions.CHANGE_CURRENT:
      return {
        ...state,
        current: action.current
      };
    case actions.CLEAR_MENU:
      return {
        ...state,
        openKeys: [],
        current: []
      };
    default:
      return state;
  }
  return state;
};

export default appReducer;
