
import "./index.css"
import NavBar from "./components/NavBar1.js"
import { Movies } from "./components/Movies1.js"
import { WatchList } from "./components/WatchList.js"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Banner }from "./components/Banner-movie.js"
import { useEffect, useState } from "react"
function App() {
  let[watchlist,setWatchList]=useState([])

let addWatchToList=(movie)=>{
let newWatchList=[...watchlist,movie]
setWatchList(newWatchList)
localStorage.setItem("database",JSON.stringify(newWatchList))
console.log(newWatchList)
}
let removeFromWatchList=(movie)=>{
let filterWatchList=watchlist.filter((movies)=>{
  return movies.id !== movie.id
})
setWatchList(filterWatchList)
localStorage.setItem("database",JSON.stringify(filterWatchList))
}

useEffect(()=>{
  let newLocalStorage=localStorage.getItem("database")
  if(!newLocalStorage){
    return
  }
  setWatchList(JSON.parse(newLocalStorage))
},[])



  return (
    <>
      <BrowserRouter >
        <NavBar />  
        <Routes>
        <Route path="/" element={<>  <Banner /> <Movies watchlist={watchlist} addWatchToList={addWatchToList} removeFromWatchList={removeFromWatchList} /></>}/>
        <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchList={setWatchList} removeFromWatchList={removeFromWatchList} /> } />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
