import MeatPanel from "../components/meat-panel/meat-panel";
import MeatInput from "../components/meat-input/meat-input";
import MeatDelivery from "../components/meat-delivery/meat-delivery";
import MeatDay from "../components/meat-day/meat-day";




function App() {
  return (
    <div className="App">
      <MeatPanel/>
      <MeatInput/>
      <MeatDelivery/>
      <MeatDay />
    </div>
  );
}

export default App;
