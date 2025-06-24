import styles from './Cards.module.css'
import React from 'react'

export function Content({ results, handleCardClick }) {   

    const cards =  results && results.map((item) =>         
            <div className={styles.card} key={item.id} onClick={() => handleCardClick(item)}>
                <img src={item.image} alt={item.name} />
                <p className={styles.card_item}>Name: <br/><span className={styles.card_item_desc}>{item.name}</span></p>
                <p className={styles.card_item}><span className={styles.card_item_desc}>{item.gender}</span></p>
                <p className={styles.card_item}>Location: <br/><span className={styles.card_item_desc}>{item.location.name}</span></p>            
            </div>        
    )

    return <div className={styles.cards}>
        {cards}
    </div>
}