export default function Scores({ score, highScore }) {
    return (
        <div className="scores-container">
            <h2>Score: {score}</h2>
            <h2>High Score: {highScore}</h2>
        </div>
    );
}
