import Image, { StaticImageData } from 'next/image'
import styles from './CompanyIcon.module.css'

function CompanyIcon({ image, alt }: { image: StaticImageData; alt: string }) {
	return <Image src={image} alt={alt} className={styles.companyIcon} />
}

export default CompanyIcon
