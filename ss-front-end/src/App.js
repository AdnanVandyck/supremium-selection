import { useEffect, useState } from 'react'
import Gallery from './components/Gallery.js'
import SearchBar from './components/SearchBar'


function App() {

let [search, setSearch] = useState('')
let [message, setMessage] = useState('Search for your Supremium Selection')
let [data, setData] = useState([])

// useEffect(() => {
//   constfetchData = async () => {
//     document.title = `${search} Selections`
//     const response = await fetch()
//   }
// })


  return (
    <div className="App">
 <SearchBar />
 {message}
 <Gallery />
    </div>
  );
}

export default App;
