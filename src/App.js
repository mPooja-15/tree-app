import { useEffect, useState } from "react";
import Tree from "./Tree";
import axios from "axios";
import "./App.css";

const base_url = `http://localhost:9000`;

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`${base_url}`)
      .then((data) => {
        setData(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Tree data={data} />
    </div>
  );
};

export default App;
