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
	TrainingLocation,
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
								<div>{window.atob('MzE3LjYwNC4wMzI1')}</div>
							</>
						)}
						<div>
							<a href="https://linkedin.com/in/shawnphoffman">linkedin.com/in/shawnphoffman</a>
						</div>
					</ContactContainer>
					<Divider />
					{/*  */}
					{/* Focus / Objective */}
					<SectionHeader>Focus</SectionHeader>
					<PlainText>
						Hard-working software development professional with specialized experience in front-end development, engineering management, and
						emotional awareness supported by years of hands-on experience seeking a challenging and rewarding opportunity with a
						forward-thinking and fast-paced company. With a diverse work history and a passion for new challenges, I can bring a unique
						perspective and valuable experience to any project that I undertake.
					</PlainText>
					<Divider />
					{/*  */}
					{/* Skills */}
					<SectionHeader>Areas of Skill and Knowledge</SectionHeader>
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
					<Divider />
					{/*  */}
					{/* Relevant Employment */}
					<SectionHeader>Relevant Employment</SectionHeader>
					{/* Sabbatical */}
					<Stint>
						<Company>Sabbatical</Company>
						<Position>
							<PositionDate>September 2022 - June 2023</PositionDate>
						</Position>
					</Stint>
					{/* Coinbase */}
					<Stint>
						<Company>Coinbase</Company>
						<Position>
							<PositionName>Senior Software Engineer</PositionName>
							<PositionDate>October 2020 - September 2022</PositionDate>
							<BulletedList>
								<li>Led the front-end decomposition of Coinbase-wide login from Rails monolith to React application login.coinbase.com.</li>
								<li>
									Converted mobile application native login flows over to web-based login experience; reducing surfaces for future changes
									and deployment times.
								</li>
								<li>
									Mentored incoming software engineers on best practices, code quality, career coaching, and criteria for advancement.
								</li>
								<li>Added registration and wallet support for ENS names throughout custodial wallet browser extensions.</li>
								<li>
									Work extensively on mission-critical decomposition project, moving frontend applications out of legacy Rails monolith.
								</li>
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
								<li>
									Applied best practices and an empathetic approach when creating a swim lane process that will help engineering scale.
								</li>
								<li>
									Architected, organized, and managed ambitious scripting engine project; making integrations quicker and easier to deliver.
								</li>
								<li>Awarded company MVP Q4 2018 from individually submitted feedback and nominations.</li>
								<li>
									Organized first internal hackathon from concept to actual execution, leading to multiple entries being added to the
									product.
								</li>
							</BulletedList>
						</Position>
						<Position>
							<PositionName>Senior Software Engineer</PositionName>
							<PositionDate>July 2015 - May 2017</PositionDate>
							<BulletedList>
								<li>Standardized public API development and created the user interface and tooling for generated API documentation.</li>
								<li>
									Founded the internal “Culture Committee” that focuses on promoting positive company culture and inclusion across offices.
								</li>
							</BulletedList>
						</Position>
					</Stint>
					{/* ADESA */}
					<Stint>
						<Company>ADESA / AutoVIN (Consultant via Sogeti)</Company>
						<Position>
							<PositionName>Contract Developer and Scrum Master</PositionName>
							<PositionDate>August 2012 - June 2015</PositionDate>
							<BulletedList>
								<li>
									Designed enterprise web portal for creating and managing variable pricing engine across all auctions and business units.
								</li>
								<li>Upgraded business-critical web front-end from MVC 2 to MVC 5.2 and converted all content from ASP Forms to Razor.</li>
								<li>
									Refactored entire application from page-specific CSS to a globally consolidated LESS structure utilizing common variables.
								</li>
								<li>
									Developed unique workflow for efficient vehicle identification based on manufacturer build data and process improvement.
								</li>
								<li>Led development team in technical effort to utilize modern Azure capabilities as well as optimize web performance</li>
								<li>Implemented an enterprise-wide, customer-facing, industry-standard grading system for remarketed vehicles.</li>
								<li>Researched and documented architecture and design principles for inherited large-scale ExtJS web application.</li>
							</BulletedList>
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
					<SectionHeader>Technical Experience</SectionHeader>
					<ColumnedLists>
						<BulletedList>
							<li>JavaScript / TypeScript / React / ES6</li>
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
						<TrainingLocation>West Lafayette &amp; Kokomo</TrainingLocation>
						<TrainingDate>May 2012</TrainingDate>
						<BulletedList>
							<li>Bachelors Degree from the School of Technology: Computer and Information Technology</li>
						</BulletedList>
					</EducationStint>
					{/* CSM */}
					<EducationStint>
						<Accomplishment>Certified Scrum Master</Accomplishment>
						<TrainingLocation>Scrum Alliance</TrainingLocation>
						<TrainingDate>September 2014</TrainingDate>
					</EducationStint>
					{/*  */}
					{/* References */}
					<NoPrint>
						<Divider />
						<SectionHeader>References</SectionHeader>
						<PlainText>Reaching out to references is encouraged and can be provided upon request.</PlainText>
						<BulletedList>
							<li>
								<a href="https://shawn.party/">Check out my personal website (https://shawn.party) for some of my other projects</a>
							</li>
						</BulletedList>
					</NoPrint>
				</Document>
			</DocumentWrapper>
			{/* </ThemeProvider> */}
		</>
	)
}
