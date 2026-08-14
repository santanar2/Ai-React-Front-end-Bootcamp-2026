import checkIcon from '../assets/check.png';
import uncheckedIcon from '../assets/nao-visto.jpg';

interface Props {
  name: string
  check: boolean
  onToggle: () => void
}

const Item: React.FC<Props> = ({ name, check, onToggle }) => {
  return (
    <div className="item" onClick={onToggle}>
      <span>
        <img
          className={check ? 'visto' : 'nao-visto'}
          src={check ? checkIcon : uncheckedIcon}
          alt={check ? 'Visto' : 'Não visto'}
        />
      </span>
      {check ? <del>{name}</del> : name}
    </div>
  )
}


export default Item;
