import React, { useEffect, useState } from 'react';
import genre2 from "./genre/genre2"

export const WatchList = ({ watchlist, setWatchList,removeFromWatchList }) => {
  const [search, setSearch] = useState("")
  const[genreList,setGenreList]=useState(["All Genre"])
  const[currentState,setCurrentState]=useState("All Genre")
  const searchBar = (e) => {
    setSearch(e.target.value)
  }
  let sortInc = () => {
    let newSort = watchlist.sort((movie1, movie2) => {
      return movie1.vote_average - movie2.vote_average
    })
    setWatchList([...newSort])

  }
  let sortDec = () => {
    let newSort = watchlist.sort((movie1, movie2) => {
      return movie2.vote_average - movie1.vote_average

    })
    setWatchList([...newSort])
  }
  useEffect(()=>{
   let ver=watchlist.map((movie)=>{
       return genre2[movie.genre_ids[0]]
   })
   ver=new Set(ver)
   setGenreList(["All Genre",...ver])
   console.log(ver) 
  },[watchlist])

  let handleClick=(genre)=>{
        setCurrentState(genre)
  }

  return ( <>
    <div className='flex justify-center flex-wrap m-5'>
  {genreList.map((genre) => {
    return (
      <div 
        key={genre}
        onClick={() => handleClick(genre)} 
        className={currentState === genre 
          ? 'bg-lime-400 rounded-xl  text-white  font-bold flex cursor-pointer justify-center items-center w-[100px] h-[50px] p-2px mx-5'
          : 'bg-slate-400/50  rounded-xl  text-white cursor-pointer font-bold flex justify-center items-center w-[100px] h-[50px] p-2px mx-5'
        }
      >
        {genre}
      </div>
    );
  })}
</div>

        




      <div className='flex justify-center my-2'>
        <input onChange={searchBar} type="text" className='bg-slate-200 p-2 h-[3rem] w-[20rem]' placeholder='Search movies' />
      </div>
      <div className='border border-gray-800 m-10 rounded-lg overflow-hidden'>
        <table className='w-full text-gray-600 text-center'>
          <thead className='border-b-2  bg-full'>
            <tr>
              <th>Name</th>
              <div className='flex justify-center'> <div onClick={sortInc} className='p-2 cursor-pointer'><i class="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDec} className='p-2 cursor-pointer'><i class="fa-solid fa-arrow-down"></i></div></div>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movie)=>{
             if(currentState==="All Genre"){
              return true;
             }else{
              return genre2[movie.genre_ids[0]]===currentState
             }
            }).filter((movie) => {
              return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movie) => {
              return <tr className='border-b '>
                <td className='px-4 py-2'>
                  <div className='flex  items-center px-2 py-3 '>
                    <img className="w-[20rem] h-[8rem] " src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Movie Poster" />
                    <div className='mx-40'>{movie.title}</div>
                  </div>
                </td>
                <td>{movie.vote_average}</td>
                <td>{movie.popularity}</td>
                <td>{genre2[movie.genre_ids[0]]}</td>
                <td onClick={()=>removeFromWatchList(movie)} className='text-red-900 hover:text-lime-800 px-4 cursor-pointer '>Delete</td>
              </tr>
            })}


          </tbody>
        </table>
      </div>
    
    </>
  );
}
