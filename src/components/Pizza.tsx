import React from 'react';
interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface Props {
    pizza: Pizza
}

const Pizza:React.FC<Props> = ({ pizza }) => {
    return (
        <li>
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <i>{pizza.price}</i>
        </li>
    )
}
export default Pizza;