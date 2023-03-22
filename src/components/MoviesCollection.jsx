import React from 'react'
import MovieThumbnail from './MovieThumbnail'

function MoviesCollection({ results, title, subtitle }) {

  return (
    <div className='relative flex flex-col space-y-5 mt-8 px-6 md:px-8 lg:px-12 w-100%'>
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold md:text-lg text-base'>{title}</h2>
        <h2 className='font-normal md:text-sm text-xs lg:mr-7 md:mr-2 hover:text-yellowTheme cursor-pointer'>{subtitle}</h2>
      </div>


        
        <div className='flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide w-100%'>
          {results.map((result) => (
            <MovieThumbnail key={result.id} result={result} />
          ))}
        </div>




    </div>
  )
}

export default MoviesCollection