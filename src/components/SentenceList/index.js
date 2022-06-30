import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { ListView } from 'ljmui2';
import './index.less';

const classPrefix = 'g-sentence-list';

export default function SentenceList(props) {
  const onSoundClick = (e, text, lan) => {
    e.stopPropagation();
    props.onPlaySound(text, lan);
  };

  const renderItem = (item, index) => {
    return (
      <Accordion key={index}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className="text-nameen">
            {item.name_en}
            <VolumeUp className="icon-voice icon-voice1" onClick={(e) => onSoundClick(e, item.name_en, 'en')} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-namezh" variant="subtitle1" gutterBottom>
            {item.name_zh}
            <VolumeUp className="icon-voice icon-voice2" onClick={(e) => onSoundClick(e, item.name_zh, 'zh')} />
          </Typography>
          <Typography className="text-pinyin" variant="subtitle1" gutterBottom>
            {item.pinyin.join(' ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  return <ListView className={classPrefix} loadMore={props.loadMore} renderItem={renderItem} style={{ height: '100%', flex: 1 }} />;
}
