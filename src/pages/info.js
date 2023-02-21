import Head from 'next/head'
import Link from 'next/link'

export default function Info() {
    return (
    <>
    <Head>
    <title>Higher Lower Info</title>
    <meta name="description" content="Info about higher lower game" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/faviconHL.svg" />
  </Head>
        <div className='Flex'>
            <h1>Info</h1>
            <div>
                All the data for this game was provided from <a href="https://www.kaggle.com/datasets/devrimtuner/list-of-films-that-most-frequently-use-the-word">this kaggle data set</a>
            </div>
            <div>
                The images for the movies were provided from <a href="https://serpdog.io/">Serpdog</a>
            </div>
            <div>
                This was a project for <a href="https://www.bcit.ca/">BCIT</a>
            </div>
            <Link href="/">
                Back to Home
            </Link>
        </div>
    </>
    )
    }