import { login } from './containers/LoginForm/reducer';
import gate from './containers/Gate/reducer';
import master from './pages/Master/reducer';
import { reducer as form } from 'redux-form/immutable';

export default { login, gate, form, ...master };
