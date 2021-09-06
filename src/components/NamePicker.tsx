// Define the shape of props.
type Baby = {
  id: number,
  name: string,
  sex: string
}

interface NamePickerProps { babiesArr: Baby[] }

function NamePicker(props: NamePickerProps): JSX.Element {
  console.log(props);

  const names = props.babiesArr.map((baby) => {
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