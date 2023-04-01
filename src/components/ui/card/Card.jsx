import Image from "next/image"
import styles from "./Card.module.scss"

const Card = ({children, imageUrl, title, description, price}) => {

    return (
        <div className={styles.card}>
            <Image className={styles.card__img} src={imageUrl} width={200} height={200} alt='menu' />
            <div className={styles.card__info}>
                <h2 className={styles.card__title}>{title}&nbsp;{children}</h2>
                <p className={styles.card__description}>{description}</p>
                <span className={styles.card__price}>{price}&#8381;</span>
            </div>
        </div>
    )
}

export default Card