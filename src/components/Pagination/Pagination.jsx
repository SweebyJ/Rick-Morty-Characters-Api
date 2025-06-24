import styles from './Pagination.module.css'

export function Pagination({ pageNumber, setPageNumber, info }) {

    const prev = () => {
        if (pageNumber === 1) return;
        setPageNumber(x => x - 1)
    }
    const next = () => {
        if (pageNumber === info?.pages) return;
        setPageNumber(x => x + 1)
    }

    return <div className={styles.btn_container}>
        <button className={styles.btn} onClick={() => setPageNumber(1)}>start</button>
        <button className={styles.btn} onClick={prev}>Prev</button>
        <p className={styles.page_count}>{pageNumber}</p>
        <button className={styles.btn} onClick={next}>Next</button>
        <button className={styles.btn} onClick={() => setPageNumber(info.pages)}>end</button>
    </div>
}