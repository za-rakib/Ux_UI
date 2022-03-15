import './App.css';
import { Footer, Blog, Header, Possibility, WhatGPT3 } from "./containers";
import { Brand, Navbar,CTA } from "./components";


function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
