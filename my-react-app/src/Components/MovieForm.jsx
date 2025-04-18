
/*import { useState } from "react";

import './MovieForm.css'

function MovieForm({onAddMovie}){
    //controler input pour la forme
    const [firstMovie, setFirstMovie] = useState ('');
    const [lastMovie, setLastMovie] = useState ('');
    const [watch, setWatch] = useState ('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!firstMovie.trim || !lastMovie.trim || !watch.trim) return;

        const newMovie = {
            id: Date.now(), firstMovie, lastMovie, watch,
        };

        onAddMovie = (newMovie); //call parent function student

        setFirstMovie('');
        setLastMovie('');
        setWatch('');
    };

    return(
        <form className="movie-form">
            <input type="text" placeholder="First Movie" value={firstMovie} 
            onChange={(e) => setFirstMovie(e.target.value)}/>

            <input type="text" placeholder="Last Movie" value={lastMovie} 
            onChange={(e) => setLastMovie(e.target.value)}/>

            <input type="text" placeholder="Watch" value={watch} 
            onChange={(e) => setWatch(e.target.value)}/>

            <button type="submit">+ Add Movie</button>
        </form>
    )
};
export default MovieForm;*/