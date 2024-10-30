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
	return (
		<div class='wrapper'>
			<div class='desktop'>
				<DesktopIcons />
				<DesktopWindow title='portfolio.rtf'>
					<p align='center'>
						<img alt='WELCOME!' src={welcome} />
					</p>
					<br />
					<hr />
					<p>
						I'm <span class='flash'>{carreer.about.currentStatus}</span>, keep reading to find out more
						about me and if interested, send me a{' '}
						<a
							href={`https://wa.me/${carreer.about.contact.whatsapp}/`}
							target='_blank'
							rel='noopener noreferrer'
						>
							Whatsapp!
							<img alt='Phone' src={phone} width='60px' />
						</a>
						OR{' '}
						<a href={`mailto:${carreer.about.contact.email}?subject=Portfolio`}>
							<img alt='EMAIL ME' src={email} />
						</a>
						<br />
						<br />
						<p align='center'>
							<img height='20px' alt='Canada' src={canada} /> Currently based in Canada.{' '}
							<img height='20px' alt='Canada' src={canada} />
						</p>
						<br />
						<hr />
						<p align='center'>
							<img alt='IMPORTANT!' src={hand} />
						</p>
						<br />
						<h2>About</h2>
						<br />
						{carreer.about.summary.map((item, index) => (
							<p key={index}>{item}</p>
						))}
					</p>
					<br />
					<br />

					<table border='1' cellPadding='5'>
						{experience.map((item, index) => (
							<tr key={index} class='c23'>
								<td class='c18' colSpan='1' rowSpan='1'>
									<p class='c21'>
										<span class='c3'></span>
									</p>
									<p class='c13'>
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
												alt=''
												src={item.logoUrl}
												style={{
													width: '71.04px',
													height: '71.04px',
													marginLeft: '0.00px',
													marginTop: '0.00px',
													transform: 'rotate(0.00rad) translateZ(0px)',
													WebkitTransform: 'rotate(0.00rad) translateZ(0px)',
												}}
												title=''
											/>
										</span>
									</p>
								</td>
								<td class='c2' colSpan='1' rowSpan='1'>
									<h3 class='c4' id='h.6p8ky2ukc3uc'>
										<span class='c26 c20'>
											{index === 0 ? <img src={newGif} /> : ''}
											{item.title}
										</span>
									</h3>
									<p class='c11'>
										<span class='c16 c20'>{item.company}</span>
									</p>
									<p class='c11'>
										<span class='c6'>{item.date}</span>
									</p>
									<p class='c11'>
										<span class='c6'>{item.location}</span>
									</p>
									<p class='c1'>
										<span class='c6'></span>
									</p>
									<p class='c25'>
										<span class='c8'>
											{item.description.map((item, index) => (
												<p key={index}>{item}</p>
											))}
										</span>
									</p>
								</td>
							</tr>
						))}
					</table>
				</DesktopWindow>
				<WindowsNavbar />
			</div>
		</div>
	);
};

export default Portfolio;
