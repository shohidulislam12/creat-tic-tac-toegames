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
        if(squares[i] ||CalculateWinner(squares)){
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
    const winner=CalculateWinner(squares);
    let status;
    if(winner){
        status="winner :" +winner;
    }
    else {
        status ="next playet :" +(xIsNext?"X":"O");

    }
return (
    <>
    <div className='status' >{status}</div>
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
      

    </div>
    </>
)
}
function CalculateWinner(squares){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     
    ];
    for(let i=0;i<lines.length;i++){
        const[a,b,c]=lines[i]
        if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
        return squares[a]
        }
    }
    return null;
}