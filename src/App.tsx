import { useEffect, useState } from 'react';
import NamePicker from './components/NamePicker';
import Search from './components/Search';

type Baby = {
  id: number,
  name: string,
  sex: string
}

type apiData = {
  babyData: Baby[]
};

function App(): JSX.Element {
  const initialState: Baby[] = [];

  const [babyData, setBabyData] = useState(initialState);
  const [searchResults, setSearchResults] = useState(initialState);

  useEffect(() => {
    fetch('/babyData.json')
      .then(response => response.json())
      .then((data: apiData) => {
        setBabyData(data.babyData);
        setSearchResults(data.babyData);
      })
  }, []);

  const updateBabyData = (inputVal: string): void => {
    const searchResults: Baby[] = babyData.filter((baby) => {
      return baby.name.toLowerCase().includes(inputVal);
    })

    setSearchResults(searchResults);
  }

  return (
    <div className="App">
      <h1>React Hooks and TypeScript in the House!</h1>
      <Search updateBabyData={updateBabyData} />
      <NamePicker babiesArr={searchResults} />
    </div>
  );
}

export default App;
