import { useState, useEffect } from "react";

export default function Cards() {
    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }
    const [giphs, setGiphs] = useState([]);
    useEffect(() => {
        const url = "https://api.giphy.com/v1/gifs/trending?api_key=O7b1WBGxC5yDTbKcPKkLdJNROEzuitYy&limit=12&offset=0&rating=g&bundle=messaging_non_clips";
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setGiphs(data.data)
            console.log(data.data);
            
        });
    }, [])
    shuffle(giphs);
    
    return (
        <div className="cards-container">
             
         {giphs.map((giph) => (
            <div key={giph.id} className="card"><img src={giph.images.fixed_height.url} alt={giph.title} className="giph" /></div>
        ))} 
      
        </div>
    );
};