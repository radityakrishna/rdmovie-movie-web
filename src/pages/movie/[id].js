import Head from 'next/head'
import axios from 'axios';
import Navbar from '@/components/Navbar';
import { useSession, getSession } from "next-auth/react";
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { RiMovie2Fill } from "react-icons/ri";
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import React from 'react'
import ReactPlayer from 'react-player'

function Movie({ result }) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';
  const { data: session } = useSession();
  const [over, setOver] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const index = result.videos.results.findIndex((element) => element.type === "Trailer");
  
  return (
    <div className='relative z-50'>
      <Head>
        <title>{result.original_title || result.original_name} - RDMovie</title>
      </Head>
      <Navbar />

      <div className='inset-0 md:h-[100vh] w-100% object-cover hidden md:block relative'>
        <Image alt="movie" src={`${BASE_IMG_URL}${result.backdrop_path}`} fill />
      </div>
      <div className='inset-0 h-[100vh] w-100% object-cover md:hidden relative' >
        <Image src={`${BASE_IMG_URL}${result.poster_path}`} alt='banner' fill />
      </div>
      <div className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-4 z-30 bg-black/80 py-3 px-3 md:px-6 max-h-[300px] md:max-w-[500px] md:max-h-[600px] lg:max-w-[800px] rounded-md'>
        <h1 className='text-3xl md:text-5xl'>{result.original_title}</h1>
        <div className='flex space-x-3'>
          <div className='w-[75px] h-[30px] bg-white text-mainTheme flex items-center justify-center space-x-1 rounded-sm hover:bg-slate-400 cursor-pointer'>
            <FaPlay color="#0C111B" size={16} />
            <span>Play</span>
          </div>
          <div onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)} className='w-[90px] h-[30px] hover:bg-yellowTheme hover:text-black bg-yellowTheme/40 cursor-pointer text-white flex items-center justify-center space-x-1 rounded-sm' onClick={() => setShowTrailer(true)}>
            <RiMovie2Fill size={18} style={over ? { color: "black" } : { color: "white" }} />
            <span>Trailer</span>
          </div>
        </div>
        <div>
          <h6 className='text-xs leading-5 md:text-sm lg:text-base'>
            {result.overview}
          </h6>
        </div>
      </div>

      {/*Trailer Overlay */}
      {showTrailer && (
        <div className='absolute inset-0 bg-black opacity-50 h-full w-full z-50' />
      )}

      <div className={`absolute md:top-12 lg:top-4 top-20 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-500 ${showTrailer ? 'opacity-100 z-50' : 'opacity-0'}`}>
        <div className='flex items-center justify-between bg-mainTheme text-white p-3.5'>
          <span className='font-semibold'>
            Trailer
          </span>
          <div className='cursor-pointer' onClick={() => setShowTrailer(false)}>
            <AiOutlineCloseCircle size={24} />
          </div>
        </div>
        <div className='relative pt-[56.25%]'>
          <ReactPlayer
          url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
          width='100%'
          height='100%'
          style={{position: 'absolute', top: '0', left: '0'}}
          controls={true}
          playing={showTrailer} />
        </div>
      </div>
    </div>
  )
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`).then((data) => (data));
  const session = await getSession(context);

  return {
    props: {
      result: request.data,
      session,
    }
  }
}

