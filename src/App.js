import Background from "./components/Background";
import Header from "./components/Header";
import Playground from "./components/Playground";

const App = () => {

    return (
        <div>
            <Header />
            <Background>
                <Playground />
            </Background>
        </div>
    );
};

export default App;
