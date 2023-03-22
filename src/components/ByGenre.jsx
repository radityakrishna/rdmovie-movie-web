import Image from 'next/image';
import { AiFillStar, AiFillPlayCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';

function ByGenre({result}) {
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';
    const router = useRouter();
  return (
<div>
      <div className='md:w-[221px] w-[200px] md:h-[408px] h-[320px] group'>
        <div className='relative overflow-hidden'>
        <Image alt="upcoming movies" src={`${BASE_IMG_URL}${result.poster_path}`} width={190} height={231} className='rounded-md transform group-hover:scale-105 duration-300 overflow-hidden' />
        <div className='absolute w-[190px] h-full bg-black/90 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 overflow-hidden rounded-md'>
          <h2 className='text-base text-center mt-24'>{result.original_title || result.original_name}</h2>
          <div className='flex justify-center space-x-1 mt-2'>
            <AiFillStar size={18} color="#FED530" />
            <h4 className='text-sm py-[1px]'>{result.vote_average}</h4>
          </div>
          <div className='flex justify-center mt-6 cursor-pointer' onClick={() => router.push(`/movie/${result.id}`)}>
            <AiFillPlayCircle size={36} color="#FED530"  />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ByGenre