import React from 'react'
import  Movies2  from './movie1-2'
import { useEffect } from 'react'
import axios from "axios" 
import { useState } from 'react'
import { Page } from './Page'

export const Movies = ({addWatchToList,removeFromWatchList,watchlist}) => {
  const[movies,setMovies]=useState([])
  const[pageNo,setPageNO]=useState(1)
  const handlePrevious=()=>{
    if(pageNo===1){
      setPageNO(1)
    }else{
    setPageNO(pageNo-1)
  }
  }
const handleNext=()=>{
  setPageNO(pageNo+1)
}

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=07b2d027fdeaa8dba02c0ca75251a564&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      console.log(res.data.results)
    })
  }, [pageNo])
  return (
    <div>
      <div className='text-2xl font-bold text-center p-10 bg-zinc-400'>
      Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-10 bg-zinc-400'>
     {movies.map((movie)=>{
      return <Movies2 movie={movie}  poster_path={movie.poster_path} name={movie.original_title} addWatchToList={addWatchToList} watchlist={watchlist} removeFromWatchList={removeFromWatchList} />
     })}
      
      </div>
      <Page pageNo={pageNo} handlePrevious={handlePrevious} handleNext={handleNext}  />
    </div>
  )
}
