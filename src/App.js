import { useEffect, useState } from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Playground from "./components/Playground";

const App = () => {
    const [wordToGuess, setWordToGuess] = useState(null);

    useEffect(() => {
        const fetchWord = async () => {
            const response = await fetch(
                "https://wordle-api-kappa.vercel.app/answer"
            );
            const data = await response.json();
            setWordToGuess(data);
        };

        fetchWord();
    }, []);
    console.log(wordToGuess);
    return (
        <div>
            <Header />
            <Background>
                <Playground correctWord={wordToGuess?.word} />
            </Background>
        </div>
    );
};

export default App;
