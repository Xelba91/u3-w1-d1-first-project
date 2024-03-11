// import logo from "./logo.svg";
import ButtonComponent from "./components/ButtonComponent";
import "./App.css";
import ImageComponent from "./components/ImageComponent";
import H2prova from "./components/H2prova";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <H2prova class="ciao" titolo="Adotta anche tu un Cucciolo"></H2prova>
        <H2prova class="ciao2" titolo="Salva il pianeta"></H2prova>
        <ButtonComponent nome="Alessandro"></ButtonComponent>
        <ImageComponent src="https://placedog.net/500" alt="caneImg500px"></ImageComponent>
        <ButtonComponent titleColor="green" nome="Manuel"></ButtonComponent>
        <ImageComponent src="https://placedog.net/600" alt="caneImg600px"></ImageComponent>
        <ButtonComponent titleColor="grey" nome="Franco"></ButtonComponent>
        <ImageComponent src="https://placedog.net/400" alt="caneImg400px"></ImageComponent>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
