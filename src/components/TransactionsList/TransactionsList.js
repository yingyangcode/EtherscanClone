import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TransactionsList.css';
import  TransactionItem  from '../TransactionItem';
import FaListAlt from 'react-icons/lib/fa/list-alt';



const TransactionsList = ({txs}) => {
  return (
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
    {/*TransactionsList Card Header*/}
    <div
      className={`card-header ${s.panelHeading } ${s.overflowH}`}
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
        <FaListAlt className={s.fa}/>
        Transactions
      </h2>
      <span
        style={{
          color: '#999999',
          fontSize: 11 + 'px',
          marginBottom: -20 + 'px',
          paddingBottom: 0 + 'px'
        }}
      />
      <a
        href="#"
        className="btn btn-dark btn-outline-dark btn-xs float-right"
        role="button"
      >
        View All
      </a>
    </div>{/*End of TransactionsList Card Header*/}

    {/*TransactionsList Card Body*/}
    <ul
      className="list-group p-0" style={{height: 580 + 'px', position: 'relative', overflowY: 'scroll'}}
    >
      
          {/*Transaction Item*/}
          {
            txs.map((tx, idx) =>{
              return (
                <TransactionItem 
                  key={idx}
                  {...tx}
                />
              )
            })
          }
          
        </ul>
        

      
      

    {/*End of TransactionsList Card Body*/}
  </div>

  </div>
  </div>
  );
}

export default withStyles(s)(TransactionsList);