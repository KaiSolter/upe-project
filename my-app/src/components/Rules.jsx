import '../Rules.css'

function Rules() { 
    return (
    <div className="Rules" >
    <h2>Rules:</h2>
    <l> </l>
    <p> This is a word game </p>
    <p> Enter a word in English that countains all of the letters from the letter bank </p>
    <p> You may use as many additional letters as you'd like but you must use every given letter </p>
    <p> Proper nouns do not count</p>
    <p> You have 15 seconds per guess, if you cannot enter a valid answer before the timer reaches 0 you lose</p>
    <p>"J", "X", "Q", "Z", "K", "V", "W" are all considered hard letters, there is a maximun of 1 hard letter in each letter bank</p>
    <p>The letter Q has a further decreased probability</p>
    </div>
    )
}

export default Rules