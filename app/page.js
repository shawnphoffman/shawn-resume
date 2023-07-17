import { memo } from 'react'

import ActionBar from 'components/ActionBar'
import Contact from 'components/Contact'
import Divider from 'components/Divider'

import styles from './Global.module.css'

const ResumePage = () => {
	return (
		<>
			<ActionBar />
			<div className={styles.documentWrapper}>
				<div className={styles.document}>
					{/*  */}
					{/* Title */}
					<h1 className={styles.title}>Shawn Hoffman</h1>
					{/*  */}
					{/* Contact */}
					<div className={styles.contactContainer}>
						<Contact />
					</div>
					<Divider />
					{/*  */}
					{/* Focus / Objective */}
					{/* <h2 className={styles.sectionHeader}>Focus</h2>
					<PlainText>
						Hard-working software development professional with specialized experience in front-end development, engineering management, and
						emotional awareness supported by years of hands-on experience seeking a challenging and rewarding opportunity with a
						forward-thinking and fast-paced company. With a diverse work history and a passion for new challenges, I can bring a unique
						perspective and valuable experience to any project that I undertake.
					</PlainText>
					<Divider /> */}
					{/*  */}
					{/* Skills */}
					{/* <h2 className={styles.sectionHeader}>Areas of Skill h2 Knowledge</div>
					<div className={styles.columnedLists}>
						<ul className={styles.bulletedList}>
							<li>Highly effective interpersonal skills.</li>
							<li>Diverse work experience that is relevant and applicable.</li>
							<li>Detail and process-oriented with a focus on individuals.</li>
						</ul>
						<ul className={styles.bulletedList}>
							<li>Capable of operating and adapting in constantly evolving and fast-paced business environments.</li>
							<li>Creative, resourceful, and full of innovative ideas.</li>
						</ul>
					</div>
					<Divider /> */}
					{/*  */}
					{/* Relevant Employment */}
					<h2 className={styles.sectionHeader}>Relevant Employment</h2>
					{/* Sabbatical */}
					{/* <div className={styles.stint}>
						<h3 className={styles.company}>Sabbatical</h3>
						<div className={styles.position}>
							<span className={styles.positionDate}>September 2022 - June 2023</span>
						</div>
					</div> */}
					{/* Coinbase */}
					<div className={styles.stint}>
						<h3 className={styles.company}>Coinbase</h3>
						<div className={styles.position}>
							<h4 className={styles.positionName}>Senior Software Engineer</h4>
							<span className={styles.positionDate}>October 2020 - September 2022</span>
							<ul className={styles.bulletedList}>
								<li>
									Led the front-end decomposition of Coinbase-wide login from Rails monolith to React application (
									<a href="https://login.coinbase.com">login.coinbase.com</a>).
								</li>
								<li>Converted mobile app native login to web-based login experience; reduced future duplicated and deployment times.</li>
								<li>Added registration and profile support for decentralized identity ENS names through Wallet browser extension.</li>
								<li>
									Mentored incoming software engineers on best practices, code quality, career coaching, and criteria for advancement.
								</li>
								<li>Worked extensively decomposing frontend out of legacy Rails monolith into their own modern applications.</li>
							</ul>
						</div>
					</div>
					{/* DySi */}
					<div className={styles.stint}>
						<h3 className={styles.company}>Dynamic Signal</h3>
						<div className={styles.position}>
							<h4 className={styles.positionName}>Staff Software Engineer</h4>
							<span className={styles.positionDate}>July 2019 - June 2020</span>
							<ul className={styles.bulletedList}>
								<li>Focused attention on standing up new React web application to replace 8-year old management site monolith.</li>
								<li>Collaborated with lead front-end architect to rapidly develop groundwork alongside iterative design process.</li>
							</ul>
						</div>
						<div className={styles.position}>
							<h4 className={styles.positionName}>Manager of Front-End Engineering</h4>
							<span className={styles.positionDate}>May 2017 - July 2019</span>
							<ul className={styles.bulletedList}>
								<li>Encouraged and grew team of engineers that maintained all front-end web applications and the platform’s public API.</li>
								<li>
									Championed and led major modernization project converting the member-facing site from .NET MVC &amp; Knockout to React.
								</li>
								<li>
									Created a desktop application and build tool in an effort to drive end user engagement and combat legacy browser usage.
								</li>
								<li>Applied best practices and an empathetic approach when creating a swim lane process that helped engineering scale.</li>
								<li>
									Architected, organized, and managed ambitious scripting engine project; making integrations quick and easy to deliver.
								</li>
								<li>Awarded company MVP Q4 2018 from individually submitted feedback and team nominations.</li>
								<li>
									Organized first internal hackathon from concept to execution, leading to multiple entries being added to the product.
								</li>
							</ul>
						</div>
						<div className={styles.position}>
							<h4 className={styles.positionName}>Senior Software Engineer</h4>
							<span className={styles.positionDate}>July 2015 - May 2017</span>
							<ul className={styles.bulletedList}>
								<li>Standardized public API development and created the user interface and tooling for generated API documentation.</li>
								<li>
									Founded the internal “Culture Committee”, focused on promoting positive company culture and inclusion across offices.
								</li>
							</ul>
						</div>
					</div>
					{/* ADESA */}
					<div className={styles.stint}>
						<h3 className={styles.company}>ADESA / AutoVIN</h3>
						<div className={styles.position}>
							<h4 className={styles.positionName}>Developer Consultant and Scrum Master</h4>
							<span className={styles.positionDate}>August 2012 - June 2015</span>

							<div className={styles.noPrint}>
								<ul className={styles.bulletedList}>
									<li>
										Designed enterprise web portal for creating and managing variable pricing engine across all auctions and business units.
									</li>
									<li>Upgraded business-critical web front-end from MVC 2 to MVC 5.2 and converted all content from ASP Forms to Razor.</li>
									<li>
										Refactored entire application from page-specific CSS to a globally consolidated LESS structure utilizing common
										variables.
									</li>
									<li>Developed workflow for efficient vehicle identification based on manufacturer build data and process improvement.</li>
									<li>Led development team in technical effort to utilize modern Azure capabilities as well as optimize web performance</li>
									<li>Implemented an enterprise-wide, customer-facing, industry-standard grading system for remarketed vehicles.</li>
									<li>Researched and documented architecture and design principles for inherited large-scale ExtJS web application.</li>
								</ul>
							</div>
						</div>
					</div>
					{/* Sogeti */}
					<div className={styles.stint}>
						<h3 className={styles.company}>Sogeti USA</h3>
						<div className={styles.position}>
							<h4 className={styles.positionName}>Senior Consultant / Software Engineer</h4>
							<span className={styles.positionDate}>June 2012 - June 2015</span>
							<div className={styles.noPrint}>
								<ul className={styles.bulletedList}>
									<li>
										Developed a range of full-stack systems including .NET web service offerings, customizable cloud-based enterprise
										systems, single page web applications, Oracle master-data systems, and existing system stabilization/modernization.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<Divider />
					{/*  */}
					{/* Technical Experience */}
					<h2 className={styles.sectionHeader}>Buzzword Experience</h2>
					<div className={styles.columnedLists}>
						<ul className={styles.bulletedList}>
							<li>JavaScript / TypeScript / React / NextJS</li>
							<li>Webpack / Jest / Enzyme / Storybook</li>
							<li>C# / .NET Core / .NET Standard / MVC</li>
						</ul>
						<ul className={styles.bulletedList}>
							<li>Postgres / MSSQL / PL-SQL / MySQL</li>
							<li>AWS / S3 / CloudFront / Azure / nginx</li>
							<li>REST / JWT / OAUTH / SOAP / Postman</li>
						</ul>
						<ul className={styles.bulletedList}>
							<li>Node / Electron / Docker / Kubernetes</li>
							<li>ElasticSearch / Kibana / Logstash</li>
							<li>Git / TFVC / GitHub / TFS / ClearCase</li>
						</ul>
					</div>
					<Divider />
					{/*  */}
					{/* Education */}
					<h2 className={styles.sectionHeader}>Education and Certifications</h2>
					{/* Purdue */}
					<div className={styles.educationStint}>
						<h3 className={styles.accomplishment}>Purdue University</h3>
						<span className={styles.trainingDate}>May 2012</span>
						<ul className={styles.bulletedList}>
							<li>Bachelors Degree from the School of Technology: Computer and Information Technology</li>
						</ul>
					</div>
					{/* CSM */}
					<div className={styles.educationStint}>
						<h3 className={styles.accomplishment}>Certified Scrum Master</h3>
						<span className={styles.trainingDate}>September 2014</span>
					</div>
					<Divider />
					{/*  */}

					{/* Fun */}
					<h2 className={styles.sectionHeader}>Fun Stuff</h2>
					<div className={styles.position}>
						<h4 className={styles.positionName}>Sabbatical</h4>
						<span className={styles.positionDate}>October 2022 - July 2023</span>
						<ul className={styles.bulletedList}>
							<li>Took a 4-week road trip across the country; visiting National Parks, family, friends, and amazing food.</li>
							<li>
								Focused a lot of my time as a 2023 PCT Trail Angel, supporting hikers with food, lodging, and &quot;trail magic&quot;.
							</li>
							<li>
								Created free LinkTree-alternative NextJS websites for some friend&apos;s podcasts (
								<a target="_blank" href="https://blueharvest.rocks" rel="noreferrer">
									Blue Harvest
								</a>{' '}
								&amp;{' '}
								<a target="_blank" href="https://jammedtransmissions.com" rel="noreferrer">
									Jammed Transmissions
								</a>
								).
							</li>
							<li>Started streaming games and model-building on Twitch, reaching Affiliate within 2 months.</li>
							<li>
								Built Star Wars Celebration companion website, making it easier to plan your trip with official and unofficial events.
							</li>
							<li>Developed nonsensical Twitch and Discord bots for some friends podcast and live-stream community.</li>
							<li>
								Put together a{' '}
								<a target="_blank" href="https://obs.shawn.party/" rel="noreferrer">
									handful of free web-based text helpers
								</a>{' '}
								for small-scale streamers to use in OBS.
							</li>
							<li>
								Refactored{' '}
								<a target="_blank" href="https://blog.shawn.party/" rel="noreferrer">
									my blog
								</a>{' '}
								to make it easier to document and share my never-ending side projects.
							</li>
						</ul>
					</div>
					{/*  */}

					{/* References */}
					{/* <div className={styles.noPrint}>
						<Divider />
						<h2 className={styles.sectionHeader}>References</h2>
						<PlainText>Reaching out to references is encouraged and can be provided upon request.</PlainText>
						<ul className={styles.bulletedList}>
							<li>
								<a href="https://shawn.party/">Check out my personal website (https://shawn.party) for some of my other projects</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			{/* </ThemeProvider> */}
		</>
	)
}

export default memo(ResumePage)
