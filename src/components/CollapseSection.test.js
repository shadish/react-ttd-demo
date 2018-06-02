import React from 'react';
import ReactDOM from 'react-dom';
import component from './CollapseSection';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

it('renders CollapseSection without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(rootReducer);
  ReactDOM.render(
  	<Provider store={store}>
  	<component />
  	</Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
