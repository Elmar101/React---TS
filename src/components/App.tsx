import React from 'react';
import pizzas from "../static-data/pizzas.json"
import Pizza from './Pizza';
const App = () => {
    return (
        <ul>{ pizzas.map(  pizza =><Pizza key={pizza.id} pizza = {pizza} />  ) } </ul>
    )
}

export default App;