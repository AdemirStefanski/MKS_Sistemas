
import Home from "./components/Home/homeIndex";
import Footer from "./components/footer/footerIndex";
import Header from "./components/header/headerIndex";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {

  return (
    <ShoppingCartProvider>
      <div className="App" style={{ backgroundColor: "#f9f9f9"}}>
        <Header/>
        <div style={{ width: "100%", height: "100%", display: "flex", backgroundColor: "#f9f9f9", justifyContent: "center"}}>
          <Home />
        </div>
        <Footer />
      </div>
    
    </ShoppingCartProvider>
  );
}

export default App;
