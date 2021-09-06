import ShortList from './ShortList';

function NamePicker(props: NamePickerProps): JSX.Element {

  const handleNameClick = (babyId: number): void => {
    const babyToAdd = props.babyData.find((baby) => baby.id === babyId);

    if (babyToAdd) {
      const shortList: Baby[] = [...props.shortList, babyToAdd];
  
      props.setShortList(shortList);
    }
  }


  const searchResults: Baby[] = props.babyData.filter((baby) => {
    return baby.name.toLowerCase().includes(props.searchVal.toLowerCase());
  });

  const names: JSX.Element[] = searchResults.map((baby: Baby) => {
    return (
      <li className={baby.sex} key={baby.id}>
        <button onClick={() => handleNameClick(baby.id)}>
          {baby.name}
        </button>
      </li>
    )
  });

  return (
    <div className="App">
      <ShortList 
        shortList={props.shortList} 
        setShortList={props.setShortList} 
      />
      <h2>All Names:</h2>
      <ul>{names}</ul>
    </div>
  );
}


type Baby = {
  id: number,
  name: string,
  sex: string
}

interface NamePickerProps {
  babyData: Baby[],
  searchVal: string,
  shortList: Baby[],
  setShortList: (newShortList: Baby[]) => void
}


export default NamePicker;