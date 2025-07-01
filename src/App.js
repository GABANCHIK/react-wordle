import Background from "./components/UI/Background";
import Header from "./components/Header/Header";
import Playground from "./components/Game/Playground";

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
