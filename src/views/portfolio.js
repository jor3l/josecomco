import { useState } from 'react';
import DesktopIcons from '../components/DesktopIcons';
import DesktopWindow from '../components/DesktopWindow';
import WindowsNavbar from '../components/WindowsNavbar';
import './portfolio.css';
import welcome from '../img/welcome4.gif';
import hand from '../img/haut_page.gif';
import newGif from '../img/new.gif';
import phone from '../img/phone.gif';
import email from '../img/email.gif';
import canada from '../img/canada.gif';
import carreer from '../data/carreer';
import experience from '../data/experience';

const Portfolio = () => {
	const [portfolioOpen, setPortfolioOpen] = useState(true);

	return (
		<div className='wrapper'>
			<div className='desktop'>
				<DesktopIcons onOpenPortfolio={() => setPortfolioOpen(true)} />
				{portfolioOpen && (
					<DesktopWindow title='portfolio.rtf' onClose={() => setPortfolioOpen(false)}>
						<p style={{ textAlign: 'center' }}>
							<img alt='WELCOME!' src={welcome} />
						</p>
						<br />
						<p style={{ textAlign: 'center' }}>
							<img height='20px' alt='Canada flag' src={canada} /> Currently based in Canada.{' '}
							<img height='20px' alt='Canada flag' src={canada} />
						</p>
						<br />
						<hr />
						<p style={{ textAlign: 'center' }}>
							<img alt='IMPORTANT!' src={hand} />
						</p>
						<br />
						<h2>About</h2>
						<br />
						{carreer.about.summary.map((item) => (
							<p key={item.substring(0, 40)}>{item}</p>
						))}
						<br />
						<br />

						<table border='1' cellPadding='5'>
							<tbody>
								{experience.map((item) => (
									<tr key={`${item.company}-${item.period}`} className='c23'>
										<td className='c18' colSpan='1' rowSpan='1'>
											<p className='c21'>
												<span className='c3'></span>
											</p>
											<p className='c13'>
												<span
													style={{
														overflow: 'hidden',
														display: 'inline-block',
														margin: '0.00px 0.00px',
														border: '0.00px solid #000000',
														transform: 'rotate(0.00rad) translateZ(0px)',
														WebkitTransform: 'rotate(0.00rad) translateZ(0px)',
														width: '71.04px',
														height: '71.04px',
													}}
												>
													<img
														alt={item.company}
														src={item.logoUrl}
														style={{
															width: '71.04px',
															height: '71.04px',
															marginLeft: '0.00px',
															marginTop: '0.00px',
															transform: 'rotate(0.00rad) translateZ(0px)',
															WebkitTransform: 'rotate(0.00rad) translateZ(0px)',
														}}
													/>
												</span>
											</p>
										</td>
										<td className='c2' colSpan='1' rowSpan='1'>
											<h3 className='c4'>
												<span className='c26 c20'>
													{item === experience[0] ? <img alt='new' src={newGif} /> : ''}
													{item.role}
												</span>
											</h3>
											<p className='c11'>
												<span className='c16 c20'>{item.company}</span>
											</p>
											<p className='c11'>
												<span className='c6'>{item.period}</span>
											</p>
											<p className='c11'>
												<span className='c6'>{item.location}</span>
											</p>
											<p className='c1'>
												<span className='c6'></span>
											</p>
											<p className='c25'>
												<span className='c8'>
													{item.description.map((desc) => (
														<p key={desc.substring(0, 40)}>{desc}</p>
													))}
												</span>
											</p>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</DesktopWindow>
				)}
				<WindowsNavbar />
			</div>
		</div>
	);
};

export default Portfolio;
