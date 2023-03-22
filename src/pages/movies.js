import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useSession, getSession } from "next-auth/react";
import axios from 'axios';
import Footer from '@/components/Footer';
import MoviesPage from '@/components/MoviesPage';

const Movies = ({movies}) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';
  const { data: session } = useSession();
  
  return (
    <div>
      <Head>
        <title>TV Shows - RDMovie</title>
      </Head>
      <Navbar />
      <div className='mt-24 flex flex-wrap space-x-4 justify-center'>
      {movies.results.map((result) => (
            <MoviesPage key={result.id} result={result} />
          ))}
      </div>
      <Footer />
    </div>
  )
}

export default Movies

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const request = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

  return {
    props: {
      session,
      movies: request.data,
    }
  }
}