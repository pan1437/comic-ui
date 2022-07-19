import { Message } from './message';
import React from 'react';
import ReactDOM from 'react-dom';

const messageWrapper = 'comic-message-wrapper';

type MessageFCOptions = {
  type: 'success' | 'warning' | 'info' | 'error';
  content: React.ReactNode;
};
export function message({ type, content }: MessageFCOptions) {
  // 全局message容器
  if (!document.querySelector(`.${messageWrapper}`)) {
    // 不存在需要创建
    const wrapper = document.createElement('div');
    wrapper.classList.add(messageWrapper);
    document.body.appendChild(wrapper);
  }
  const wrapper = document.querySelector(`.${messageWrapper}`);

  const container = document.createElement('div');
  const component = React.createElement(Message, {
    type,
    content,
    exitedCallback: () => {
      ReactDOM.unmountComponentAtNode(container);
      container.remove();
    },
  });
  wrapper!.appendChild(container);
  ReactDOM.render(component, container);
}
// time close time
message.info = (options: Omit<MessageFCOptions, 'type'>) => {
  message({
    type: 'info',
    ...options,
  });
};
message.error = (options: Omit<MessageFCOptions, 'type'>) => {
  message({
    type: 'error',
    ...options,
  });
};
message.warning = (options: Omit<MessageFCOptions, 'type'>) => {
  message({
    type: 'warning',
    ...options,
  });
};
message.success = (options: Omit<MessageFCOptions, 'type'>) => {
  message({
    type: 'success',
    ...options,
  });
};
