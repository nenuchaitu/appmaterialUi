import Home from "./Components/Home";
import "./App.css";


const items = [
    {
        item_id: 1,
        item_name: "Idly",
        item_description: "made with rice",
        item_price: 10
    },
    {
        item_id: 2,
        item_name: "Dosa",
        item_description: "made with rice",
        item_price: 20
    }
]


const App = () => <div className="app-container"><Home items={items} /></div>;

export default App;