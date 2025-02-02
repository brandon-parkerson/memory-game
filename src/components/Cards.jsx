import { useState, useEffect } from "react";

export default function Cards() {
    const [giphs, setGiphs] = useState([]);
    useEffect(() => {
        const url = "https://api.giphy.com/v1/gifs/trending?api_key=hLSP2oSz2V1yhrEImK3W85XXG95Lxx46&limit=12&offset=0&rating=g&bundle=messaging_non_clips";
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setGiphs(data.data)
            console.log(data.data);
        });
    }, [])
    
    return (
        <div className="cards-container">
             
         {giphs.map((giph) => (
            <div key={giph.id} className="card"><img src={giph.images.fixed_height.url} alt={giph.title} className="giph" /></div>
        ))} 
      
        </div>
    );
};