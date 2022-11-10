import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
    console.log(data);
    const cards = data.map((item) => {
        return <Card {...item} />;
    });
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <main className="App-main">{cards}</main>
        </div>
    );
}

export default App;
