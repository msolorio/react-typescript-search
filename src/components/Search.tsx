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


interface SearchProps {
  searchVal: string,
  setSearchVal: (newSearchVal: string) => void
}


export default Search;