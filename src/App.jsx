import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [data, setData] = useState([]);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toLowerCase());
  };

  const filterdItems = data.filter((item) => {
    return (
      item.name.common.toLowerCase().includes(text) ||
      item.region.toLowerCase().includes(text)
    );
  });

  const fetchData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const res = await axios.get(url);
    setData(res.data);
  };

  // console.log(typeof data.capital);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="main-container">
      <div className="search-box">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search country name or region "
        />
      </div>
      <p className="result-stat">About {filterdItems.length} results</p>
      <div className="country-card">
        {filterdItems.map((item) => {
          return (
            <div key={item.name.common}>
              <Card
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                image={item.flags.png}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
