import { useState } from 'react';

interface SearchProps {
  updateBabyData: (inputVal: string) => void
}

function Search(props: SearchProps): JSX.Element {
  const [searchVal, setSearchVal] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputVal: string = event.target.value;
    
    setSearchVal(inputVal);
    props.updateBabyData(inputVal);
  }



  return (
    <header>
        <input 
          autoFocus
          type="text" 
          placeholder="Type a name..." 
          value={searchVal}
          onChange={handleInputChange}
        />
    </header>
  );
}

export default Search;