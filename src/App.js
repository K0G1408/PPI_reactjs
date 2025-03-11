import React, { useState } from "react";
import "./styles.css";

const quotes = [
    "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
    "No cuentes los días, haz que los días cuenten.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "Cree en ti y todo será posible.",
    "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso."
];

export default function App() {
    const [quote, setQuote] = useState("Haz clic en el botón para obtener una frase motivacional.");

    const getNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return ( <
        div className = "container" >
        <
        h1 > Frases Motivacionales < /h1> <
        p > { quote } < /p> <
        button onClick = { getNewQuote } > Nueva Frase < /button> < /
        div >
    );
}