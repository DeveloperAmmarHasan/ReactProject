import { useEffect, useState } from 'react';

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center border border-red-500 
                 text-4xl font-bold w-24 h-24 cursor-pointer hover:bg-red-50 
                 transition-colors duration-200"
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState('');

  function handleClick(index) {
    const cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[index]) return;
    cpySquares[index] = isXTurn ? 'X' : 'O';
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of winningPatterns) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(''));
    setStatus('Next Player is X');
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== '')) {
      setStatus("It's a draw! Please restart the game.");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)} 🎉`);
    } else {
      setStatus(`Next Player: ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-6 min-w-full">
      <div className="grid grid-cols-3 gap-0">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <h1 className="text-xl font-semibold text-gray-700">{status}</h1>
      <button
        onClick={handleRestart}
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 
                   transition-colors duration-200"
      >
        Restart
      </button>
    </div>
  );
}
