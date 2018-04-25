import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TransactionItem.css';
import FaHddO from 'react-icons/lib/fa/hdd-o';
const getElapsedTime=(datetime)=> {
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
const TransactionItem = ({txNumber,fromAddress,toAddress,createdAt,amount}) => {
  return (
    <div className={s.root}>
        

        <li className="list-group-item border-0 p-0">
          <div
            className={`${s.profilePost} ${s.colorOne}`}
            
          >
            <span
              className={s.profilePostNumb}
            >
              <FaHddO className={s.fa}/>
            </span>
              <div className={s.profilePostIn}>
                <h3
                  className={s.headingXS}
                  
                >
                 {" TX# "} 
                  <a
                    href="#"
                    className={s.hashTagFrontpage}
                    title="Transaction Hash"
                    
                  >
                    <font color="#3498db">
                      {txNumber}
                    </font>
                  </a>
                  <span
                    className={s.pullRight}
                    style={{ fontSize: 'small' }}
                  >
                    &gt; {getElapsedTime(createdAt)} &nbsp;
                  </span>
                </h3>
                <p
                  style={{
                    color: '#999',
                    marginBottom: 5 + 'px',
                    margin: '0 0 10px'
                  }}
                >
                  {" From "}
                  <a
                  
                    href={`/address/${toAddress}`}
                    className={s.addressTag}
                    
                  >
                    {fromAddress}
                  </a>
                  {" To "}
                  <a
                    href="#"
                    className={s.addressTag}
                    
                  >
                    {toAddress}
                  </a>
                </p>
                <p
                  
                >
                  {" Amount "} {amount}
                </p>
              </div>
            
          </div>
          </li>
          </div>
  );
}

export default withStyles(s)(TransactionItem);