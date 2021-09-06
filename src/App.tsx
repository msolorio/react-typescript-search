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
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    fetch('/babyData.json')
      .then(response => response.json())
      .then((data: apiData) => {
        setBabyData(data.babyData);
      })
  }, []);

  return (
    <div className="App">
      <h1>React Hooks and TypeScript in the House!</h1>
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />
      <NamePicker babyData={babyData} searchVal={searchVal} />
    </div>
  );
}

export default App;
