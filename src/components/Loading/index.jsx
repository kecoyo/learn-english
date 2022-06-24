import React from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd';

import './index.less';

const destroyFns = [];

class Loading extends React.PureComponent {
  render() {
    return (
      <div className="loading">
        <Spin tip="Loading..." size="large" {...this.props} />
      </div>
    );
  }
}

Loading.showLoading = (config) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const currentConfig = { ...config };

  const destroy = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    for (let i = 0; i < destroyFns.length; i += 1) {
      const fn = destroyFns[i];
      if (fn === destroy) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  };

  const render = (props) => {
    ReactDOM.render(<Loading {...props} />, div);
  };

  render(currentConfig);
  destroyFns.push(destroy);
};

Loading.hideLoading = () => {
  // document.body.style.overflow = null;
  while (destroyFns.length) {
    const destroy = destroyFns.pop();
    if (destroy) {
      destroy();
    }
  }
};

export default Loading;
