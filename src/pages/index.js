import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Films from '../data/ListOfFilms.json'
import axios from 'axios'
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Link from 'next/link'


export default function Home() {

  const [firstMovie, setFirstMovie] = useState(null)
  const [secondMovie, setSecondMovie] = useState(null)
  const [firstMovieImage, setFirstMovieImage] = useState(null)
  const [secondMovieImage, setSecondMovieImage] = useState(null)

  const [lost, setLost] = useState(false)
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(false)


  useEffect(() => {
    const firstMovie = Films[Math.floor(Math.random() * Films.length)]
    const secondMovie = Films[Math.floor(Math.random() * Films.length)]
    setFirstMovie(firstMovie)
    setSecondMovie(secondMovie)
    console.log(firstMovie)
    console.log(secondMovie)
  }, [])

  // useEffect(() => {
  //   const getFirstMovieImage = async () => {
  //     axios.get(`https://api.serpdog.io/images?api_key=${process.env.SEARCH_API}&q=${firstMovie}}&gl=us`)
  //     .then(res => {
  //       console.log(res.data)
  //       setFirstMovieImage(res.data.image_results[0].image)
  //     })
  //   }
  //   getFirstMovieImage()
  // }, [firstMovie])

  // useEffect(() => {
  //   const getMovieImage = async () => {
  //     axios.get(`https://api.serpdog.io/images?api_key=${process.env.SEARCH_API}&q=${secondMovie}}&gl=us`)
  //     .then(res => {
  //       setSecondMovieImage(res.data.images[0].url)
  //     })
  //   }
  //   getMovieImage()
  // }, [secondMovie])


  const handleHigher = () => {
    if (firstMovie.Rank > secondMovie.Rank) {
      setCount(true)
      setScore(score + 1)
      setTimeout(() => {
        setCount(false)
      setFirstMovie(secondMovie)
      setSecondMovie(Films[Math.floor(Math.random() * Films.length)])
      }, 2000)
    } else {
      setCount(true)
      setTimeout(() => {
      setLost(true)
      }, 2000)
    }
  }

  const handleLower = () => {
    if (firstMovie.Rank < secondMovie.Rank) {
      setCount(true)
      setScore(score + 1)
      setTimeout(() => {
        setCount(false)
      setFirstMovie(secondMovie)
      setSecondMovie(Films[Math.floor(Math.random() * Films.length)])
      }, 2000)
    } else {
      setCount(true)
      setTimeout(() => {
      setLost(true)
      }, 2000)
    }
  }

  const GameReset = () => {
    setLost(false)
    setCount(false)
    setScore(0)
    const firstMovie = Films[Math.floor(Math.random() * Films.length)]
    const secondMovie = Films[Math.floor(Math.random() * Films.length)]
    setFirstMovie(firstMovie)
    setSecondMovie(secondMovie)
  }


return (
    <>
      <Head>
        <title>Higher Lower on Times a Movie says Fuck</title>
        <meta name="description" content="Higher Lower on movies that say fuck ranking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconHL.svg" />
      </Head>
      <main className="main">
        <div className='title'>
        <p className='higherTitle'>
          Higher
        </p>
        <p>
          or
        </p>
        <p className='lowerTitle'>
          Lower
        </p>
        </div>
        <>
          {lost && <div className='gameOver'><h2 >Game Over you got {score} correct</h2><button onClick={GameReset}>Play Again</button></div> || <h2 className='score'>Score: {score}</h2>}
        </>
        <div className="grid">
          <div className='Movies' id='firstMovie'>
          {firstMovie && (
          <>
            <h2>
              {firstMovie.Film}
            </h2>
            <h3>
              From: {firstMovie.Year}
            </h3>
            <h4>
              says fuck 
              <h2>{firstMovie.Count}</h2> 
              times
            </h4>
            <img href={firstMovieImage} />
          </>)}
          </div>

          <div className='Flex' id='VS' >
            <h2>VS</h2>
          </div>
          
          <div className='Movies' id='secondMovie'>
            {secondMovie && (<>
            {/* <Image src={secondMovie.Image} width={200} height={300} /> */}
              <h2>{secondMovie.Film}</h2>
              <h3>From: {secondMovie.Year}</h3>
              
              <div className='Flex'>
              {count && <CountUp
                end={secondMovie.Count}
                duration={1}
              >
                {({ countUpRef }) => (
                 <div> says it:
                  <h2 ref={countUpRef} />
              </div>
              )}
            </CountUp>}
                {secondMovie && !lost && <button className='higherButton' onClick={handleHigher}>Higher /\</button>}
                {secondMovie && !lost && <button className='lowerButton' onClick={handleLower}>Lower \/</button>}
                # of times 
              </div>
          </>)}
          </div>
        </div>
        <div className='footer'>
          <Link href={"/info"}>Info</Link>
          <p>Created by <Link href={"https://github.com/Roncyboy"}>Terrence</Link></p>
        </div>
      </main>
    </>
  )
}
