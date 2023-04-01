import styles from './Button.module.scss';

const Button = ({ name, handleClick, style }) => {
    return (
        <>
            {style === 'Success' ?
                <button className={styles.success} onClick={() => handleClick({ name })}>
                    <span>{name}</span>
                </button>
                :
                style == 'Default' ?
                <button className={styles.default} onClick={() => handleClick({ name })}>
                    <span>{name}</span>
                </button>
                :
                <button className={styles.danger} onClick={() => handleClick({ name })}>
                    <span>{name}</span>
                </button>
            }
        </>
    )
}

export default Button