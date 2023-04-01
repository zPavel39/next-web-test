import Image from "next/image"
import styles from "./Card.module.scss"

const Card = ({children, imageUrl, title, description, price}) => {
    
    return (
        <div className={styles.Card}>
            <Image src={imageUrl} />
            <div>
                <h2>{title}{children}</h2>
                <p>{description}</p>
                <span>{price}&#32;</span>
            </div>
        </div>
    )
}

export default Card