import './App.css';
import { Footer, Blog, Header, Possibility, WhatGPT3 } from "./containers";
import { Brand, Navbar,CTA } from "./components";
import Features from './containers/Features/Features';


function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features/>
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
