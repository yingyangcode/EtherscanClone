
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BlockItem.css';



class BlockItem extends React.Component {


  getElapsedTime(datetime) {
    let event = new Date(datetime);
    let now = new Date();
  
    let diffInSeconds = Math.abs(now - event) / 1000;
    let days = Math.floor(diffInSeconds / 60 / 60 / 24);
    let hours = Math.floor(diffInSeconds / 60 / 60 % 24);
    let minutes = Math.floor(diffInSeconds / 60 % 60);
    let seconds = Math.floor(diffInSeconds % 60);
    let milliseconds = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);
  
    if( seconds < 60 ) { return seconds + 'secs ago'; }
    else if(mins < 60 ) { return mins + 'mins ago'; }
    else if(hours < 24 ) { return hours + 'hours ago'; }
    else { return days + 'days ago';}
  }

  render() {
    const {blockNumber, createdAt, minedBy, numTxs, txTime, blockReward} = this.props;
    return (
      /*Block Item*/
      <div className={s.root}>
        

        <li className="profile list-group-item border-0 p-0 ">
          <div
            className={s.profileEvent}
          >
            <div
              className={ s.dateFormats}
              style={{    
                width: 135+'px',
                height: 65+'px',
                marginTop: 2+'px'}}
            >
              <span>
                <a href="" style={{ color: '#3498db' }}>
                  <font size="2" color="white">
                    Block {blockNumber}
                  </font>
                </a>
              </span>
              <small>> {this.getElapsedTime(createdAt)}</small>
            </div>
            <div className={s.overflowH}>
              Mined By
              <a
                href=""
                className={s.addressTag}
                style={{width: 132+'px'}}
              >
                <span>{minedBy}</span>
              </a>
              <p></p>
              <p>
                <a href="" title="Transactions in this Block">
                  <b>{numTxs} txns</b>
                </a>
                in {txTime}
              </p>
              <p>
                Block Reward
                <b>.</b>
                {blockReward}
              </p>
            </div>
          </div>{/*End of Block Item*/}
        </li>
     </div>
    );
  }
}

export default withStyles(s)(BlockItem);