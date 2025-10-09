import styles from 'app/Global.module.css'

export default function Independent() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Independent Projects</h2>
			{/* <div className={styles.stint}>
				<h3 className={styles.company}>Wish Lists / HoffStuff</h3>
				<div className={styles.position}>
					<ul className={styles.bulletedList}>
						<li>xxxx</li>
						<li>xxxx</li>
						<li>xxxx</li>
						<li>xxxx</li>
					</ul>
				</div>
			</div> */}
			{/* Sabbatical */}
			<div className={styles.stint}>
				<h3 className={styles.company}>Sabbatical</h3>
				<div className={styles.position}>
					<span className={styles.positionDate}>October 2022 - September 2023</span>
					<ul className={styles.bulletedList}>
						<li>
							<a href="https://2024.madison.rocks/" rel="noreferrer" target="_blank">
								Eras Tour Themed News Years Letter
							</a>
						</li>
						<li>
							<a href="https://madison.rocks/" rel="noreferrer" target="_blank">
								PCT Hike Tracker
							</a>
						</li>
						<li>Took a 4-week road trip across the country; visiting National Parks, family, friends, and amazing food.</li>
						<li>Focused a lot of my time as a 2023 PCT Trail Angel, supporting hikers with food, lodging, and &quot;trail magic&quot;.</li>
						<li>
							Created free NextJS websites for some friend&apos;s podcasts (
							<a target="_blank" href="https://blueharvest.rocks" rel="noreferrer">
								Blue Harvest
							</a>{' '}
							&amp;{' '}
							<a target="_blank" href="https://jammedtransmissions.com" rel="noreferrer">
								Jammed Transmissions
							</a>{' '}
							&amp;{' '}
							<a target="_blank" href="https://myweirdfoot.com" rel="noreferrer">
								High Potion
							</a>
							).
						</li>
						<li>
							Built a{' '}
							<a href="https://swc.events/" rel="noreferrer" target="_blank">
								Star Wars Celebration companion website
							</a>
							, making it easier to plan your trip with official and unofficial events.
						</li>
						<li>
							Deployed a{' '}
							<a href="https://bsky.app/profile/dev.shawn.party/feed/star-wars" rel="noreferrer" target="_blank">
								custom BlueSky feed
							</a>
							, promoting some of my favorite Star Wars and gaming content creators.
						</li>
						<li>
							Put together a{' '}
							<a target="_blank" href="https://obs.shawn.party/" rel="noreferrer">
								handful of free web-based text helpers
							</a>{' '}
							for small-scale streamers to use in OBS.
						</li>
						<li>
							Created a{' '}
							<a rel="noreferrer" href="https://github.com/shawnphoffman/ae-photo-slideshow" target="_blank">
								set of custom Adobe After Effects plugins
							</a>{' '}
							that allow you to use photo GPS data to fetch the city and state, add it and the date to a composition as a text layer, and
							batch process everything (with transitions) to an output composition. This was used to create multiple 600+ photo slideshows
							for PCT hikers.
						</li>
						<li>
							Refactored{' '}
							<a target="_blank" href="https://blog.shawn.party/" rel="noreferrer">
								my blog
							</a>{' '}
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
			</div>
		</>
	)
}
