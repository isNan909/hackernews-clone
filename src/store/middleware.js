import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const isProd = process.env.REACT_APP_ENV === 'production';
const middlewareList = [];

middlewareList.push(thunk);
if (!isProd) {
  middlewareList.push(createLogger());
}

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;
