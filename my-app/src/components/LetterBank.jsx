import '../LetterBank.css';
import { useState, useEffect } from 'react';

function getrandomLetter() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let n = Math.floor(Math.random() * 26);
  return letters[n];
}

function LetterBank( { onLettersUpdate } ) {
  const [letterBank, setLetterBank] = useState([]);
  const hardletters = ["J", "X", "Q", "Z", "K", "V", "W"];

  useEffect(() => {
    let l = [];
    let numHardLetters = 0
    while (l.length < 3) {
      let letter = getrandomLetter();
      if (hardletters.includes(letter) && numHardLetters > 0 ) {
        continue
      }
      if (hardletters.includes(letter)) {
        numHardLetters++;
      }
      if (letter == "Q") {
        if (Math.random() > .7 ) {
          continue
        } 
      }
      if (!l.includes(letter)) {
        l.push(letter);
      }
    }
    setLetterBank(l);
    onLettersUpdate(l);
  }, [onLettersUpdate, setLetterBank]); 

  return (
    <div className='Letter-Bank' >
      Letter Bank:
      <ul className='horizontal-list' >
        {letterBank.map((letter, index) => (
          <li key={index}>{letter}</li>
        ))}
      </ul>
    </div>
  );
}

export default LetterBank;