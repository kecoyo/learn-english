import React from 'react';

import './index.less';

import Page from '@/components/page';
import PlayIcon from '@/components/play-icon';
import SVG from '@/components/svg';
import Loading from '@/components/Loading';

const classPrefix = 'g-about';

class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Loading.showLoading();
  }

  render() {
    return (
      <Page className={classPrefix} title="About">
        <SVG src={require('@/images/arrow-up.svg')} />
      </Page>
    );
  }
}

export default Banner;
