import React from 'react';
import PropTypes from 'prop-types';
import AppNavBar from '@/components/AppNavBar';
import SentenceList from '@/components/SentenceList';
import BottomNavigation from '@/components/BottomNavigation';
import './index.less';
import { apiGetSentenceList } from '@/apis';

const classPrefix = 'g-home';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      count: 0,
    };
  }

  componentDidMount() {}

  loadMore = async (page) => {
    const result = await apiGetSentenceList({ page });
    return result.data.map((item) => ({
      ...item,
      pinyin: JSON.parse(item.pinyin),
      pinyin_zh: JSON.parse(item.pinyin_zh),
    }));
  };

  onPlaySound = (name, lan) => {
    this.audio.setAttribute('src', `https://tts.youdao.com/fanyivoice?word=${encodeURIComponent(name)}&le=${lan}&keyfrom=speaker-target`);
    this.audio.play();
  };

  onSearch =

  render() {
    return (
      <div className={classPrefix}>
        <AppNavBar onSearch={} />
        <div className={`${classPrefix}-content`}>
          <SentenceList loadMore={this.loadMore} onPlaySound={this.onPlaySound} />
          <audio ref={(e) => (this.audio = e)} controls>
            <track kind="captions" />
          </audio>
        </div>
        {/* <BottomNavigation /> */}
      </div>
    );
  }
}

export default Home;
