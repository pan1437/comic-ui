import { Message } from './message';
import React from 'react';
import ReactDOM from 'react-dom';


export function message(type: 'success' | 'warning' | 'info' | 'error', content: React.ReactNode ) {
  const container = document.createElement('div');
  const component = React.createElement(Message, {
    type,
    content
  })
  ReactDOM.render(component, container)
  document.body.appendChild(container);

  // setTimeout(() => {
    // ReactDOM.unmountComponentAtNode(container)
    // container.remove();
  // }, 3000);
}
// time close time
message.info = (content: React.ReactNode, time?: Number) => {
  message('info', content);
} 