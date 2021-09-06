import { useState } from 'react';

interface SearchProps {
  searchVal: string,
  setSearchVal: (searchVal: string) => void
}


function Search(props: SearchProps): JSX.Element {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputVal: string = event.target.value;

    props.setSearchVal(inputVal);
  }


  return (
    <header>
        <input 
          autoFocus
          type="text" 
          placeholder="Type a name..." 
          value={props.searchVal}
          onChange={handleInputChange}
        />
    </header>
  );
}

export default Search;