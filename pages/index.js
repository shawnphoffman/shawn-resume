// import { ThemeProvider } from 'styled-components'

import ActionBar from 'components/ActionBar'
import Divider from 'components/Divider'
import {
	Accomplishment,
	BulletedList,
	ColumnedLists,
	Company,
	ContactContainer,
	Document,
	DocumentWrapper,
	//
	EducationStint,
	NoPrint,
	PlainText,
	Position,
	PositionDate,
	PositionName,
	SectionHeader,
	//
	Stint,
	Title,
	TrainingDate,
} from 'components/StyledComponents'
import useDetectPrint from 'hooks/useDetectPrint'

export default function Resume() {
	// Detect print command to load light theme
	const { isPrinting } = useDetectPrint()

	return (
		<>
			<ActionBar />
			<DocumentWrapper>
				<Document>
					{/*  */}
					{/* Title */}
					<Title>Shawn Hoffman</Title>
					{/*  */}
					{/* Contact */}
					<ContactContainer>
						{isPrinting && (
							<>
								<div>{window.atob('c2hhd24ucC5ob2ZmbWFuQGdtYWlsLmNvbQ')}</div>
								<a href="https://shawn.party">https://shawn.party</a>
								<div>{window.atob('MzE3LjYwNC4wMzI1')}</div>
							</>
						)}
						<div></div>
					</ContactContainer>
					<Divider />
					{/*  */}
					{/* Focus / Objective */}
					{/* <SectionHeader>Focus</SectionHeader>
					<PlainText>
						Hard-working software development professional with specialized experience in front-end development, engineering management, and
						emotional awareness supported by years of hands-on experience seeking a challenging and rewarding opportunity with a
						forward-thinking and fast-paced company. With a diverse work history and a passion for new challenges, I can bring a unique
						perspective and valuable experience to any project that I undertake.
					</PlainText>
					<Divider /> */}
					{/*  */}
					{/* Skills */}
					{/* <SectionHeader>Areas of Skill and Knowledge</SectionHeader>
					<ColumnedLists>
						<BulletedList>
							<li>Highly effective interpersonal skills.</li>
							<li>Diverse work experience that is relevant and applicable.</li>
							<li>Detail and process-oriented with a focus on individuals.</li>
						</BulletedList>
						<BulletedList>
							<li>Capable of operating and adapting in constantly evolving and fast-paced business environments.</li>
							<li>Creative, resourceful, and full of innovative ideas.</li>
						</BulletedList>
					</ColumnedLists>
					<Divider /> */}
					{/*  */}
					{/* Relevant Employment */}
					<SectionHeader>Relevant Employment</SectionHeader>
					{/* Sabbatical */}
					{/* <Stint>
						<Company>Sabbatical</Company>
						<Position>
							<PositionDate>September 2022 - June 2023</PositionDate>
						</Position>
					</Stint> */}
					{/* Coinbase */}
					<Stint>
						<Company>Coinbase</Company>
						<Position>
							<PositionName>Senior Software Engineer</PositionName>
							<PositionDate>October 2020 - September 2022</PositionDate>
							<BulletedList>
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
							</BulletedList>
						</Position>
					</Stint>
					{/* DySi */}
					<Stint>
						<Company>Dynamic Signal</Company>
						<Position>
							<PositionName>Staff Software Engineer</PositionName>
							<PositionDate>July 2019 - June 2020</PositionDate>
							<BulletedList>
								<li>Focused attention on standing up new React web application to replace 8-year old management site monolith.</li>
								<li>Collaborated with lead front-end architect to rapidly develop groundwork alongside iterative design process.</li>
							</BulletedList>
						</Position>
						<Position>
							<PositionName>Manager of Front-End Engineering</PositionName>
							<PositionDate>May 2017 - July 2019</PositionDate>
							<BulletedList>
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
							</BulletedList>
						</Position>
						<Position>
							<PositionName>Senior Software Engineer</PositionName>
							<PositionDate>July 2015 - May 2017</PositionDate>
							<BulletedList>
								<li>Standardized public API development and created the user interface and tooling for generated API documentation.</li>
								<li>
									Founded the internal “Culture Committee”, focused on promoting positive company culture and inclusion across offices.
								</li>
							</BulletedList>
						</Position>
					</Stint>
					{/* ADESA */}
					<Stint>
						<Company>ADESA / AutoVIN</Company>
						<Position>
							<PositionName>Developer Consultant and Scrum Master</PositionName>
							<PositionDate>August 2012 - June 2015</PositionDate>

							<NoPrint>
								<BulletedList>
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
								</BulletedList>
							</NoPrint>
						</Position>
					</Stint>
					{/* Sogeti */}
					<Stint>
						<Company>Sogeti USA</Company>
						<Position>
							<PositionName>Senior Consultant / Software Engineer</PositionName>
							<PositionDate>June 2012 - June 2015</PositionDate>
							<NoPrint>
								<BulletedList>
									<li>
										Developed a range of full-stack systems including .NET web service offerings, customizable cloud-based enterprise
										systems, single page web applications, Oracle master-data systems, and existing system stabilization/modernization.
									</li>
								</BulletedList>
							</NoPrint>
						</Position>
					</Stint>
					<Divider />
					{/*  */}
					{/* Technical Experience */}
					<SectionHeader>Buzzword Experience</SectionHeader>
					<ColumnedLists>
						<BulletedList>
							<li>JavaScript / TypeScript / React / NextJS</li>
							<li>Webpack / Jest / Enzyme / Storybook</li>
							<li>C# / .NET Core / .NET Standard / MVC</li>
						</BulletedList>
						<BulletedList>
							<li>Postgres / MSSQL / PL-SQL / MySQL</li>
							<li>AWS / S3 / CloudFront / Azure / nginx</li>
							<li>REST / JWT / OAUTH / SOAP / Postman</li>
						</BulletedList>
						<BulletedList>
							<li>Node / Electron / Docker / Kubernetes</li>
							<li>ElasticSearch / Kibana / Logstash</li>
							<li>Git / TFVC / GitHub / TFS / ClearCase</li>
						</BulletedList>
					</ColumnedLists>
					<Divider />
					{/*  */}
					{/* Education */}
					<SectionHeader>Education and Certifications</SectionHeader>
					{/* Purdue */}
					<EducationStint>
						<Accomplishment>Purdue University</Accomplishment>
						<TrainingDate>May 2012</TrainingDate>
						<BulletedList>
							<li>Bachelors Degree from the School of Technology: Computer and Information Technology</li>
						</BulletedList>
					</EducationStint>
					{/* CSM */}
					<EducationStint>
						<Accomplishment>Certified Scrum Master</Accomplishment>
						<TrainingDate>September 2014</TrainingDate>
					</EducationStint>
					<Divider />
					{/*  */}

					{/* Fun */}
					<SectionHeader>Fun Stuff</SectionHeader>
					<Position>
						<PositionName>Sabbatical</PositionName>
						<PositionDate>October 2022 - July 2023</PositionDate>
						<BulletedList>
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
								Built a separate Star Wars Celebration companion website, making it easier to plan your convention with official and
								unofficial events.
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
						</BulletedList>
					</Position>
					{/*  */}

					{/* References */}
					{/* <NoPrint>
						<Divider />
						<SectionHeader>References</SectionHeader>
						<PlainText>Reaching out to references is encouraged and can be provided upon request.</PlainText>
						<BulletedList>
							<li>
								<a href="https://shawn.party/">Check out my personal website (https://shawn.party) for some of my other projects</a>
							</li>
						</BulletedList>
					</NoPrint> */}
				</Document>
			</DocumentWrapper>
			{/* </ThemeProvider> */}
		</>
	)
}
