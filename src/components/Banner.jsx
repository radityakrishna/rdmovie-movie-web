import Image from 'next/image';

function Banner({ result }) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original'

  return (
    <div>
      <div className='inset-0 md:h-[65vh] w-100% object-cover hidden md:block' >
        
        <Image src={`${BASE_IMG_URL}${result.backdrop_path}`} alt='banner' fill className='inset-0' />
      </div>
      <div className='inset-0 h-[95vh] w-100% object-cover md:hidden' >
        <Image src={`${BASE_IMG_URL}${result.poster_path}`} alt='banner' fill className='inset-0' />
      </div>
      
          
    </div>


  )
}

export default Banner