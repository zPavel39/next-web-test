import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getAllCardsDB } from '@/database/priceList'
import styles from '@/styles/Home.module.scss'
import Card from '@/components/ui/card/Card'


export default function Home() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardsDatabase = getAllCardsDB();
    setCards(cardsDatabase)
  }, [])

  return (
    <div className={styles.MainPage}>
      <h1 className>Самое Вкусное</h1>
      <ul>
        {cards.map((card) => {
          return (
            <li>
              <Card
                cardUrl={card.cardUrl}
                description={card.description}
                title={card.title}
                price={card.price}
                children={card.new ? <span>New!!!</span> : ''}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}