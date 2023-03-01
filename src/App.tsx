import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { PageContainer } from "./page_v1/PageContainer";
import { PageView } from "./page_v2/PageView";

function App() {
  const [showPage, setShowPage] = useState<boolean | string>(false);

  if (showPage) {
    return (
      <>
        {showPage === "v1" && <PageContainer />}
        {showPage === "v2" && <PageView />}
        <div className="card">
          <button onClick={() => setShowPage(false)}>Close the page</button>
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React compostion strategies</h1>
      <h2>Flattening the tree</h2>
      <div className="card">
        <button onClick={() => setShowPage("v1")}>Load the page</button>
        <br />
        <br />
        <button onClick={() => setShowPage("v2")}>Load the better page</button>
      </div>
    </div>
  );
}

export default App;
