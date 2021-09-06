// Define the shape of props.
type Baby = {
  id: number,
  name: string,
  sex: string
}

interface NamePickerProps { babyData: Baby[], searchVal: string }

function NamePicker(props: NamePickerProps): JSX.Element {

  const searchResults: Baby[] = props.babyData.filter((baby) => {
    return baby.name.toLowerCase().includes(props.searchVal.toLowerCase());
  })

  const names: JSX.Element[] = searchResults.map((baby: Baby) => {
    return (
      <li className={baby.sex} key={baby.id}>
        <button>{baby.name}</button>
      </li>
    )
  })

  return (
    <div className="App">
      <ul>
        {names}
      </ul>
    </div>
  );
}

export default NamePicker;