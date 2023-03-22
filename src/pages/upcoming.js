import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useSession, getSession } from "next-auth/react";
import axios from 'axios';
import UpComingMovies from '@/components/UpComingMovies';
import Footer from '@/components/Footer';


const Upcoming = ({upcomingMovieLists}) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Upcoming Movies - RDMovie</title>
      </Head>
      <Navbar />
      <div className='mt-24 flex flex-wrap space-x-4 justify-center'>
      {upcomingMovieLists.results.map((result) => (
            <UpComingMovies key={result.id} result={result} />
          ))}
      </div>

      <Footer />
      
    </div>
  )
}

export default Upcoming;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const request = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

  return {
    props: {
      session,
      upcomingMovieLists: request.data,
    }
  }
}