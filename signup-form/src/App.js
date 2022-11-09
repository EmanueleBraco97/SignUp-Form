import Form from "./components/Form";
import Article from "./components/Article";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <main className="main">
          <section className="container">
            <section className="section-left">
              <Article/>
            </section>
            <section className="section-right">
              <div className="abbonamento">
                <span>
                  <strong>Try it free 7 days</strong> then $20/mo. thereafter
                </span>
              </div>
              <Form />
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
