import inspirations from '../../data/inspirations';
import { useState } from 'react';
import './styles.css';


export default function InspirationGenerator( {children}: React.PropsWithChildren ) {
    const[index, setIndex] = useState(0);
const inspiration = inspirations[index];

const handleClick = () => {
    setIndex((prev) => (prev + 1) % inspirations.length);
}

    return <>
    <p>Sua frase motivacional é:</p>
    {inspiration.type === 'quote' && <p className="cursive">{inspiration.value}</p>}
    <p className='color1'>{inspiration.type === 'color' && <div style={{ backgroundColor: inspiration.value, width: '100px', height: '100px' }} />}</p>
    

    <button className='button' onClick={handleClick}>
        Me inspire novamente
    </button>

    {children}
    </>
            

}  