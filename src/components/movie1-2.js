import React from 'react'


export default function Movies2({ poster_path, name, addWatchToList, movie, removeFromWatchList, watchlist }) {
  function isContain(movie) {
    for (let i = 0; i <watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true
      }
    }
    return false
  }
  return (
    <div className='w-[200px] h-[60vh] bg-no-repeat bg-cover bg-center m-2 rounded-xl hover:scale-110 duration-1000 hover:cursor-pointer relative' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

      {isContain(movie) ? (<div onClick={() => { removeFromWatchList(movie) }}  className=' ml-40 mt-5 h-8 w-7 bg-cover rounded-lg flex justify-center items-center   bg-gray-900/90  '>&#10060;</div>) : (<div onClick={() => { addWatchToList(movie) }} className=' ml-40 mt-5 h-8 w-7 bg-cover rounded-lg flex justify-center items-center   bg-gray-900/90  '>&#128525;</div>
      )}
      <div className='absolute bottom-0 left-0 right-0 bg-zinc-700 bg-opacity-70 text-white text-center p-2 '>{name}</div>

    </div>
  )
}
