import Carousel from "./components/Carousel";
import PaymentData from "./components/PaymentData";
import Products from "./components/Products";

import "./App.css";

function App() {
  const images = ["carousel1.png", "carousel2.png", "carousel3.png"];

  return <>
    <Carousel images={images} autoPlay={true} showButtons={true} />
    <PaymentData />
    <Products />
  </>;
}

export default App;
