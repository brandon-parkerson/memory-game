import { useState, useEffect } from "react";

export default function Cards({ score, setScore }) {
    function shuffle(array) {
        let newArray = [...array];
        let currentIndex = newArray.length;
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [newArray[currentIndex], newArray[randomIndex]] = [
                newArray[randomIndex], newArray[currentIndex]
            ];
        }
        return newArray;
    }

    const [giphs, setGiphs] = useState([]);
    const [picked, setPicked] = useState([]);

    useEffect(() => {
        const url = "https://api.giphy.com/v1/gifs/trending?api_key=O7b1WBGxC5yDTbKcPKkLdJNROEzuitYy&limit=12&offset=0&rating=g&bundle=messaging_non_clips";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setGiphs(shuffle(data.data)); // Shuffle once when fetching
            });
    }, []);

    function checkPicked(id) {
        if (picked.includes(id)) {
            setScore(0);
            setPicked([]);  // Reset picked array
        } else {
            setPicked([...picked, id]);  // Append new pick
            setScore(score + 1);
        }

        // Shuffle the gifs after every click
        setGiphs((prevGiphs) => shuffle(prevGiphs));
    }

    return (
        <>
            <div className="cards-container">
                {giphs.map((giph) => (
                    <div key={giph.id} className="card">
                        <img
                            src={giph.images.fixed_height.url}
                            alt={giph.title}
                            className="giph"
                            onClick={() => checkPicked(giph.id)}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
