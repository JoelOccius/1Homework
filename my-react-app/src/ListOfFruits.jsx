import { useState } from "react";

function ListOfFruits() {
    const fruits= ['apple' , 'orange', 'mango' , 'banana' , 'grape']

    return(
        <ul className="list-disc pl-6 text-lg">
            {fruits.map((fruit , index) => (
                <li key={index}>{fruit}</li>))}
        </ul>
    )
};
export default ListOfFruits;