/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import blocksData from '../../data/blocks.json';
import transactionsData from '../../data/transactions.json';
import BlocksList  from '../../components/BlocksList';
import TransactionsList  from '../../components/TransactionsList';

class Home extends React.Component {
	static propTypes = {
		news: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				link: PropTypes.string.isRequired,
				content: PropTypes.string
			})
		).isRequired
  };
  


	render() {
		/**
     * <div className={s.container}>
          <h1>React.js News</h1>
          {this.props.news.map(item => (
            <article key={item.link} className={s.newsItem}>
              <h1 className={s.newsTitle}>
                <a href={item.link}>{item.title}</a>
              </h1>
              <div
                className={s.newsDesc}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </article>
          ))}
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
     */
		return (
			<div className={s.root}>
				<div className={s.container}>

					<div className="row profile">
						<div className={s.profileBody}>

							<div className="row mb-sm-2" style={{ clear: 'both' }}>

								<div className="col-sm-6 mb-4">

									<div className={`${s.serviceBlockV3} ${s.serviceBlockBlue}`}>
										<i className="icon-globe" style={{ marginRight: 16+'px' }} />
										<span
											className={s.serviceHeading}
											rel="tooltip"
											data-placement="right"
											title=""
											data-original-title="View More"
										>
											<a href="/stat/supply">
												<font size="2" color="white">
													MARKET CAP OF $62.822 Billion
												</font>
											</a>
										</span>
										<h4 style={{ marginTop: 2, lineHeight:25+'px', fontSize:18+'px' }}>
											<font color="white">
												<font color="white">
													$634.69 @ 0.07094 BTC/ETH
													<font
														color="#0ADC00"
														rel="tooltip"
														data-placement="bottom"
														title=""
														data-original-title="USD/Eth change"
                            size="2"
													>
														(<b>+</b>4.21%)
													</font>
												</font>
											</font>
										</h4>
										<div style={{ marginBottom: 5, clear: 'both' }} />
										<div className="row" style={{ marginBottom: 20}} >
											<div className={`col-6 ${s.serviceIn}`}>
												<small>
													<a
														href="blocks"
														rel="tooltip"
														data-placement="right"
														title=""
														data-original-title="View List of Blocks"
													>
														<font color="white">
															Last Block
														</font>
													</a>
												</small>
												<h4 style={{ color: '#FFFFFF',     marginTop: 5+'px', textShadow: 'none', fontWeight: 400 }}>
													<span
														id="ContentPlaceHolder1_Label1"
														style={{ fontSize: 'Larger' }}
													>
														<a
															href="blocks"
															rel="tooltip"
															data-placement="bottom"
															title=""
															data-original-title="The latest block no"
														>
															<font size="4" color="white">
																5486660
															</font>
														</a>
													</span>
													<span
														className="hidden-xs"
														rel="tooltip"
														data-placement="right"
														title=""
														data-original-title="Avg Block Time of the latest 5000 blocks"
													>
														<font size="2"> (14.4s)</font>
													</span>
												</h4>
											</div>
											<div className={`col-6 text-right ${s.serviceIn}`}>
												<small>
													<a
														href="txs"
														rel="tooltip"
														data-placement="left"
														title=""
														data-original-title="View List of Transactions"
													>
														<font size="2" color="white">
															Transactions
														</font>
													</a>
												</small>
												<h4>
													<a
														href="/txs"
														rel="tooltip"
														data-placement="left"
														title=""
														data-original-title="Total Txns counter<br>(updated every 5 mins)"
													>
														<font size="4" color="white">
															208.00 M
														</font>
													</a>
													<span
														className="hidden-xs"
														rel="tooltip"
														data-placement="bottom"
														title=""
														data-original-title="Txns per sec"
													>
														<font size="2"> (9.4 TPS)</font>
													</span>
												</h4>
											</div>
										</div>
										<div className="row statistics">
											<div className={`col-6 ${s.serviceIn}`}>
												<small>
													<a
														href="/chart/hashrate"
														rel="tooltip"
														data-placement="right"
														title=""
														data-original-title="View HashRate Chart"
													>
														<font size="2" color="white">
															Hash Rate
														</font>
													</a>
												</small>
												<h4 className={s.headingXS}>
													<font size="4" color="white">
														<span
															rel="tooltip"
															data-placement="bottom"
															title=""
															data-original-title="Avg Hash Rate of the last 12 Hours"
														>
															252,926.43 GH/s
														</span>
                            &nbsp;
													</font>
												</h4>
											</div>
											<div className={`col-6 text-right ${s.serviceIn}`}>
												<small>
													<a
														href="/chart/difficulty"
														className=""
														rel="tooltip"
														data-placement="left"
														title=""
														data-original-title="View Difficulty Growth Chart"
													>
														<font size="2" color="white">
															Network Difficulty
														</font>
													</a>
												</small>

												<h4 className={s.headingXS}>
													<font size="4" color="white">
														<span
															className=""
															rel="tooltip"
															data-placement="bottom"
															title=""
															data-original-title="Average Difficulty"
														>
															3,145.56 TH
														</span>
													</font>
												</h4>
											</div>
										</div>
									</div>

								</div>{/*dashboardCardBlue*/}

								<div className="col-sm-6">
									<div
										className="tag-box tag-box-v2 box-shadow shadow-effect-1"
										style={{
											borderRightColor: '#3498db',
											borderRightStyle: 'solid',
											borderRightWidth: 2 + 'px',
											marginBottom: 0 + 'px',
											backgroundColor: '#FFFFFF'
										}}
									>
										<div
											id="containerchart"
											style={{ minWidth: 255 + 'px', height: 180 + 'px', margin: '0 auto' }}
											data-highcharts-chart="0"
										>
											<div
												className="highcharts-container"
												id="highcharts-0"
												style={{
													position: 'relative',
													overflow: 'hidden',
													width: 506 + 'px',
													height: 180 + 'px',
													textAlign: 'left',
													lineHeight: 'normal',
													zIndex: 0 + 'px',
													WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
													touchAction: 'none'
												}}
											>
												<svg />
											</div>
										</div>
									</div>
								</div> {/*chart*/}

							</div> {/*--End of top row--*/}


							<div className="row mb-sm-5" style={{ clear: 'both' }}>
                
                {/*BlocksList Col*/}
								<div className="col-sm-6 mb-4">
                  <BlocksList blocks={blocksData} />
								</div>{/*End of BlocksList Col*/}
								
                
                {/*TransactionsList Col*/}
								<div className="col-sm-6">
									<TransactionsList txs={transactionsData}/>

								</div>{/*End of TransactionsList Col*/}
              </div>{/*--End of bottom row--*/}

						</div>{/*--End of profile Body--*/}

					</div>{/*--End of page row--*/}
				</div>{/*--End of page container--*/}
			</div>/*--End of page root--*/
			
		);
	}
}

export default withStyles(s)(Home);
