import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Cards from './components/Cards';
import Scores from './components/Scores';

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function updateScore(newScore) {
        setScore(newScore);
        if (newScore > highScore) {
            setHighScore(newScore);
        }
    }

    return (
        <div className="app">
            <Title />
            <Scores score={score} highScore={highScore} />
            <Cards score={score} setScore={updateScore} />
        </div>
    );
}

export default App;
