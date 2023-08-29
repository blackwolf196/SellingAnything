import { store } from './store';
import authActions from '@iso/redux/auth/actions';
const boot = () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
  });
export default boot;
