import styles from './Logo.module.css'

export function Logo() {
    return <header className={styles.header}>
        <h1 className={styles.logo_title}><span>Rick</span> & <span>Morty</span></h1>
        <h2 className={styles.character}>Characters</h2>
    </header>
}