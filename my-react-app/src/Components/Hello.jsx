import React, {useEffect} from "react";

export default function Hello(){
    useEffect(() => {
        console.log('C est un composant')
    }, []);

    return <h1>Good morning!</h1>
}