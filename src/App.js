import Navbar from "./componets/navbar";
import FetchDataAPI from "./componets/fetchDataAPI";
import "./styles/app.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <FetchDataAPI />
      </div>

    </div>
  );
}

export default App;
