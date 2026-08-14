interface Props {
    name: string;
    check?: boolean;
    count? : number;

}

const Item: React.FC<Props> =({ name, check, count }) => {

    //if ( check) {
     //   return (
      //      <div className="item"><span><img className="visto" src="./src/assets/check.png" alt="Check" /> </span><del>{name}</del></div>
     //   )
   // }
   // return (
        
     //       <div className="item"><span><img className="nao-visto" src="./src/assets/nao-visto.jpg" alt="Check" /> </span> {name}</div>
        
   // ) 

    return <div className="item">{check && "✓"} {count && count } {check ? <del>{name}</del> : name}</div>


};


export default Item;