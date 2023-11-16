import "./App.css";
import "./animation.scss";

import {useState} from 'react';

import Boot from "./views/boot";
import Portfolio from "./views/portfolio";

function App() {
  const [step, setState] = useState(localStorage.startup ? parseInt(localStorage.startup) : 0);
  return (
    <div className="monitor">
      <section className="screen">
        <div className="content on">
          {step === 0 && <Boot onComplete={() => { setState(step + 1); localStorage.setItem('startup', 1)}} />}
          {step === 1 && <Portfolio />}
        </div>
      </section>
    </div>
  );
}

export default App;
