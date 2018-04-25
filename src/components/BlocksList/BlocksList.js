import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BlocksList.css';
import  BlockItem  from '../BlockItem';
import FaCubes from 'react-icons/lib/fa/cubes';


class BlocksList extends React.Component {
  render() {
    return (
      /*BlocksList Card*/
      <div className={s.root}>
      <div className={s.container}>
      <div
        className={`card ${s.panelProfile } ${s.noBg}`}
        style={{
          background: 'inherit',
          border: 0,
          marginBottom: 0,
          boxShadow: 'none'
        }}
      >
        {/*Card Header*/}
        <div
          className="card-header"
          style={{
            overflow: 'hidden',
            color: '#585f69',
            background: '#fff',
            padding: '7px 15px',
            borderBottom: 'solid 3px #f7f7f7'
          }}
        >
          <h2
            className={`card-title ${s.panelTitle} ${s.headingSM} float-left`}
            style={{
              textShadow: 'none',
              fontWeight: 400,
              lineHeight: 24 + 'px',
              fontSize: 16 + 'px',
              marginTop: 0,
              marginBottom: 0,
              color: 'inherit'
            }}
          >
          <FaCubes className={s.fa}/>
            Blocks
          </h2>
          <a
            href="#"
            className="btn btn-dark btn-outline-dark btn-xs float-right"
            role="button"
          >
            View All
          </a>
        </div>{/*--End of Card Header--*/}
        <ul className="list-group" style={{height: 580 + 'px', position: 'relative', overflowY: 'scroll'}}>
              {
                 this.props.blocks.map((block, index)=>{
                   return(
                    <BlockItem
                      key={index}
                      id={index}
                      blockNumber={block.blockNumber}
                      createdAt={block.createdAt}
                      minedBy={block.minedBy}
                      numTxs={block.numTxs}
                      txTime={block.txTime}
                      blockReward={block.blockReward}
                    />
                   )
                })
              }
        </ul>
        </div>
    </div>
  </div>
    );
  } 
}
  
    /*
    <div
      className={`p-0 ${s.mCustomScrollbar} ${s._mCS_1} ${s.mCS_autoHide}`}
      style={{ height: 580 + 'px', position: 'relative', overflow: 'visible' }}
    >
      <div
        className={`${s.mCustomScrollBox} ${s.mCS_minimal_dark} ${s.mCSB_vertical} ${s.mCSB_outside}`}
        tabIndex="0"
      >
        <div
          className={s.mCSB_container}
          style={{ position: 'relative', top: 0 + 'px', left: 0 + 'px' }}
          dir="ltr"
        >
          
        </div>  

      </div>
      <div 
        id="mCSB_1_scrollbar_vertical"
        className={`${s.mCSB_scrollTools} ${s.mCSB_1_scrollbar} ${s.mCS_minimal_dark} ${s.mCSB_scrollTools_vertical}`}
        style={{ display: 'block' }}
      >
        <div className={s.mCSB_draggerContainer}>
          <div
            id="mCSB_1_dragger_vertical"
            className={s.mCSB_dragger}
            style={{
              position: 'absolute',
              minHeight: 50 + 'px',
              display: 'block',
              height: 328 + 'px',
              maxHeight: 546 + 'px'
            }}
            onContextMenu={() => false}
          >
            <div
              className={s.mCSB_dragger_bar}
              style={{ lineHeight: 50 + 'px' }}
            />
          </div>
          <div className={s.mCSB_draggerRail} />
        </div>
      </div>


    </div>
    */
 



export default withStyles(s)(BlocksList);