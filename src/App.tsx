import './App.css'
import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Card from './Components/Card';


function App() {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);

  console.log(results);

  return (
    <div className='App'>
      <h1 className='title'>Urban Dictionary</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setResults={setResults}/>

      {results.length > 0 &&
        <h2 className='termHeader'>{searchTerm}</h2>
      }

      {results &&
        results.map(r => <Card key={r.defid} result={r} />)
      }
    </div>
  )
}

export default App
