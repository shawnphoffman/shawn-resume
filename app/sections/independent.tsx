import styles from 'app/Global.module.css'
import PhotoBox from '@/components/PhotoBox'

import hoffstuffIcon from '@/images/hoffstuff-icon.png'
import gamingIcon from '@/images/gaming-icon.png'
import blueskyIcon from '@/images/bluesky-icon.png'
import miscIcon from '@/images/misc-icon.png'
import hoffstuff1 from '@/images/hoffstuff-1.png'
import hoffstuff2 from '@/images/hoffstuff-2.png'
import hoffstuff3 from '@/images/hoffstuff-3.png'
import hoffstuff4 from '@/images/hoffstuff-4.png'
import trashLight from '@/images/trash-light-1.jpg'
import Pills from '@/components/Pills'
import Link from 'next/link'
import CompanyIcon from '@/components/CompanyIcon'
import { faArrowUpRightFromSquare } from '@awesome.me/kit-94ef14ccff/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Independent() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Independent Projects</h2>
			{/* HoffStuff */}
			<div className={`${styles.stint} ${styles.noBreak}`}>
				<div className={styles.companyContainer}>
					<CompanyIcon image={hoffstuffIcon} alt="Wish Lists / HoffStuff" />
					<h3 className={styles.company}>
						Family Wish Lists <span className={styles.lowercase}>aka</span> &quot;HoffStuff&quot;
					</h3>
					<PhotoBox images={[hoffstuff1, hoffstuff2, hoffstuff3, hoffstuff4]} />
					<Pills pills={['NextJS', 'TypeScript', 'Supabase']} />
				</div>
				<div className={styles.position}>
					<ul className={styles.bulletedList}>
						<li>Web application for creating and sharing wish lists with family and friends built with NextJS and Supabase.</li>
						<li>User permissions make it possible to coordinate gifts and list managementwhile maintaining secrecy.</li>
						<li>Fetches product details and images from websites when a URL is provided, simplifying the adding process.</li>
						<li>Currently working towards open-sourcing the project and making it easy to self-host with Docker and BYO database.</li>
					</ul>
				</div>
			</div>
			{/* BlueSky */}
			<div className={`${styles.stint} ${styles.noPrint}`}>
				<div className={styles.companyContainer}>
					<CompanyIcon image={blueskyIcon} alt="Bluesky Projects" />
					<h3 className={styles.company}>Bluesky Projects</h3>
					{/* <PhotoBox images={[hoffstuff1, hoffstuff2, hoffstuff3, hoffstuff4]} /> */}
					<Pills pills={['atproto', 'WebSockets', 'Docker']} />
				</div>
				<div className={styles.position}>
					<ul className={styles.bulletedList}>
						<li>
							Built a custom{' '}
							<Link href="https://bsky.app/profile/dev.shawn.party/feed/star-wars" target="_blank" aria-label="Star Wars Bluesky Feed">
								Star Wars feed
							</Link>{' '}
							with some of the best Star Wars content promoting positivity and community.
							<Link href="https://feed.justshillin.com/" target="_blank" aria-label="Star Wars Bluesky Feed Client">
								<FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
							</Link>
						</li>
						<li>
							Host and maintain a custom Bluesky{' '}
							<Link href="https://bsky.app/profile/mod.shawn.party" target="_blank" aria-label="Spoiler Droid on Bluesky">
								moderation bot account
							</Link>{' '}
							and labeler to help identify potential spoiler content.
						</li>
					</ul>
				</div>
			</div>
			{/* Gaming */}
			<div className={`${styles.stint} ${styles.noPrint}`}>
				<div className={styles.companyContainer}>
					<CompanyIcon image={gamingIcon} alt="Video Game Companions" />
					<h3 className={styles.company}>Video Game Companions</h3>
					{/* <PhotoBox images={[hoffstuff1, hoffstuff2, hoffstuff3, hoffstuff4]} /> */}
					<Pills pills={['NextJS', 'TypeScript', 'Unreal']} />
				</div>
				<div className={styles.position}>
					<ul className={styles.bulletedList}>
						<li>
							<Link href="https://satisfactory-notebook.com/" target="_blank">
								Satisfactory Notebook
							</Link>
							: A game companion for those that prefer to print things out or just like a quick reference.
						</li>
						<li>
							<Link href="https://dyson-sphere-planner.com/" target="_blank">
								Dyson Sphere Planner
							</Link>
							: A companion for Dyson Sphere Program that allows you to easily reference and print recipes.
						</li>
					</ul>
				</div>
			</div>
			{/* Misc */}
			<div className={`${styles.stint} ${styles.noPrint}`}>
				<div className={styles.companyContainer}>
					<CompanyIcon image={miscIcon} alt="Misc Projects" />
					<h3 className={styles.company}>Misc Projects</h3>
					{/* <PhotoBox images={[hoffstuff1, hoffstuff2, hoffstuff3, hoffstuff4]} /> */}
					<Pills pills={['NextJS', 'TypeScript', 'RSS', 'MapBox', 'Adobe']} />
				</div>
				<div className={styles.position}>
					<ul className={styles.bulletedList}>
						<li>
							Podcast Landing Pages: Powered by NextJS and integrated blogs with Sanity Studio for some friend&apos;s podcasts -{' '}
							<Link target="_blank" href="https://myweirdfoot.com">
								High Potion
							</Link>{' '}
							/{' '}
							<Link target="_blank" href="https://blueharvest.rocks">
								Blue Harvest
							</Link>{' '}
							/{' '}
							<Link target="_blank" href="https://jammedtransmissions.com">
								Jammed Transmissions
							</Link>{' '}
							/{' '}
							<Link target="_blank" href="https://blueypodcast.com">
								Dinner with the Heelers
							</Link>{' '}
							/{' '}
							<Link target="_blank" href="https://scruffypod.com">
								Scruffy Lookin Podcasters
							</Link>{' '}
							.
						</li>
						<li>
							<Link href="https://2024.madison.rocks/" target="_blank">
								News Years Eras Letter
							</Link>
							: My take on Madison&apos;s New Years Letter, themed and inspired by the Eras Tour.
						</li>
						<li>
							<Link href="https://madison.rocks/" target="_blank">
								PCT Hike Tracker
							</Link>
							: Visualizing Madison&apos;s PCT adventure with links to bonus content like newsletters and photos.
						</li>
						<li>
							<Link href="https://swc.events/" target="_blank">
								Star Wars Celebration Events
							</Link>
							: A convention companion making it easy to plan your trip with official and unofficial events.
						</li>
						<li>
							<Link href="https://github.com/shawnphoffman/ae-photo-slideshow" target="_blank">
								After Effects Plugin
							</Link>
							: Allows you to use photo GPS data to fetch the city and state, add it and the date to a composition as a text layer, and
							batch process everything (with transitions) to an output composition. This was used to create multiple 600+ photo slideshows
							for long-distance hikers.
						</li>
						<li>
							<Link target="_blank" href="https://goober.house/">
								Tahoe Air Quality
							</Link>
							: Dead simple air quality indicator using data from a local air quality station and local APIs.
						</li>
						<li>
							Home Automations: The most popular being an outdoor light thats color helps you know what the next trash pickup is, powered by
							Home Assistant and a custom integration with the waste management website. Blue indicates that it is a recycling week and
							green is for yard waste. <PhotoBox images={[trashLight]} />
						</li>
						{/* <li>
							<Link target="_blank" href="https://obs.shawn.party/">
								OBS Text Helpers
							</Link>
							: Free animated text overlays for small-scale streamers to use in OBS.
						</li> */}
					</ul>
				</div>
			</div>
			{/* Sabbatical */}
			{/* <div className={styles.stint}>
				<h3 className={styles.company}>Sabbatical</h3>
				<div className={styles.position}>
					<span className={styles.positionDate}>October 2022 - September 2023</span>
					<ul className={styles.bulletedList}>
						<li>Took a 4-week road trip across the country; visiting National Parks, family, friends, and amazing food.</li>
						<li>Focused a lot of my time as a 2023 PCT Trail Angel, supporting hikers with food, lodging, and &quot;trail magic&quot;.</li>
						<li>
							Refactored{' '}
							<Link target="_blank" href="https://blog.shawn.party/">
								my blog
							</Link>{' '}
							to make it easier to document and share my never-ending side projects.
						</li>
						<li>Contributed to open-source projects like AudiobookShelf, Flexget, etc.</li>
						<li>Started live-streaming model-building and video games on Twitch, reaching Affiliate within 2 months.</li>
						<li>Developed nonsensical Twitch and Discord bots for some friends podcast and live-stream community.</li>
						<li>
							Custom-built my own stickless arcade fighting control out of laser-cut acrylic and off-the-shelf components. It is pretty cool
							and I look forward to challenging everyone in Street Fighter 6.
						</li>
					</ul>
				</div>
			</div> */}
		</>
	)
}
