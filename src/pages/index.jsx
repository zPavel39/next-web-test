import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getAllCardsDB } from '@/database/priceList'
import styles from '@/styles/Home.module.scss'
import Card from '@/components/ui/card/Card'
import Button from '@/components/ui/Button/Button'


export default function Home() {
  //сколько отображать карточек
  const defaultCardsVisible = 6;
  const [cards, setCards] = useState([]);
  //страницы карточек
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const cardsDatabase = getAllCardsDB();
    setCards(cardsDatabase)
  }, [])

  const lastCard = currentPage * defaultCardsVisible
  const firstCard = lastCard - defaultCardsVisible
  const currentCards = cards.slice(firstCard, lastCard)

//обработка события смены страницы
  const handleClick = (arrow) => {
    const listNumber = [];
    for (let i = 1; i <= Math.ceil(cards.length / defaultCardsVisible); i++) {
      listNumber.push(i)
    }
    if (arrow.name === 'prev' && listNumber.includes(currentPage - 1)) {
      setCurrentPage(currentPage - 1)
    }
    if (arrow.name === 'next' && listNumber.includes(currentPage + 1)) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className={styles.MainPage}>
      <h1 className={styles.MainPage__title}>Самое Вкусное</h1>
      <div className={styles.MainPage__main}>
        <Button
          name={'prev'}
          style={'Default'}
          handleClick={handleClick}
        />
        <ul className={styles.MainPage__list}>
          {currentCards.map((card) => {
            return (
              <li className={styles.MainPage__card} key={card.id}>
                <Card
                  imageUrl={card.imageUrl}
                  description={card.description}
                  title={card.title}
                  price={card.price}
                  children={card.new ? <span>New!!!</span> : ''}
                />
              </li>
            )
          })}
        </ul>
        <Button
          name={'next'}
          style={'Danger'}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}