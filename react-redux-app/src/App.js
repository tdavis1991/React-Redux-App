import React from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  // useEffect(() => {
  //   axios.get('')
  //   .then(res => {
  //     console.log(res.data.results)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [])

 

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <CharacterList /> 
    </div>
  );
}

export default App;
