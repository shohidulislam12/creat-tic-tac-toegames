import { useState } from 'react';
import './squart.css'
function Square({value,onSquareClick}) {
    // const [value,setValue]=useState(null)
    // function handleClick(){
    //     setValue("X");
    
    // }
    // onClick={handleClick}
    return <button onClick={onSquareClick}  className="square">{value}</button>;
  }
export default function Board(){
    const [xIsNext, setXIsNext] = useState(true);
    const [squares,setSquare]=useState(Array(9).fill(null))
     function handleClick(i) {
        if(squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        
        setSquare(nextSquares)
        setXIsNext(!xIsNext)
        
    }
return (
    <div className='grid'>
       <Square onSquareClick={()=>handleClick(0)} value={squares[0]} />
       <Square onSquareClick={()=>handleClick(1)} value={squares[1]} />
       <Square onSquareClick={()=>handleClick(2)} value={squares[2]}  />
       <Square onSquareClick={()=>handleClick(3)} value={squares[3]}  />
       <Square onSquareClick={()=>handleClick(4)} value={squares[4]} />
       <Square onSquareClick={()=>handleClick(5)} value={squares[5]}  />
       <Square onSquareClick={()=>handleClick(6)} value={squares[6]}  />
       <Square onSquareClick={()=>handleClick(7)} value={squares[7]}  />
       <Square onSquareClick={()=>handleClick(8)} value={squares[8]} />
      
9
9       {/* <button className="square">2</button>
9       <button className="square">3</button>
9       <button className="square">4</button>
9       <button className="square">5</button>
9       <button className="square">6</button>
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button> */}
    </div>
)
}