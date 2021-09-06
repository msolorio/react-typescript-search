function ShortList(props: ShortListProps): JSX.Element {
  
  const handleNameClick = (babyId: number): void => {
    const updatedShortList: Baby[] = props.shortList.filter((baby: Baby) => {
      return baby.id !== babyId;
    });

    props.setShortList(updatedShortList);
  }

  const shortListJSX: JSX.Element[] = props.shortList.map((baby: Baby) => {
    return (
      <li className={baby.sex} key={baby.id}>
        <button onClick={() => handleNameClick(baby.id)}>
          {baby.name}
        </button>
      </li>
    );
  });

  return (
    <div>
      <h2>Favorite Picks:</h2>
      <ul>
        {shortListJSX}
      </ul>
    </div>
  )
}

interface ShortListProps {
  shortList: Baby[],
  setShortList: (newShortList: Baby[]) => void
}

type Baby = {
  id: number,
  name: string,
  sex: string
}

export default ShortList;