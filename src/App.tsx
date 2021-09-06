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
  const initialBabyList: Baby[] = [];

  const [babyData, setBabyData] = useState(initialBabyList);
  const [searchVal, setSearchVal] = useState('');
  const [shortList, setShortList] = useState(initialBabyList);

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
      <NamePicker 
        babyData={babyData} 
        searchVal={searchVal} 
        shortList={shortList}
        setShortList={setShortList}
      />
    </div>
  );
}

export default App;
