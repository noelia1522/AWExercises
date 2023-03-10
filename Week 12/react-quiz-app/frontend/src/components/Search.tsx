import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Search.css";

export default function Search() {
  const [results, setResults] = useState([]);

  const handleSubmit = () => {};
  const handleChange = (e: any) => {
    e.preventDefault();
    setResults([]);

    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ searchQuery: e.target.value }),
    };
    fetch(`/search`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setLoading(false);
        setResults(data);
        console.log(results);
      });
  };

  console.log(results);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={results}
        sx={{ width: 300 }}
        onInputChange={handleChange}
        renderInput={(params) => {
          return <TextField {...params} label="My Movie" />;
        }}
      />
    </>
  );
  // // or use form, inpot and ul HTML tags.

  // <form className="search-container" onSubmit={handleSubmit}>
  //   <div className="input-container">
  //     <input type="text" value={queryText} onChange={handleChange}></input>
  //     <button type="submit"> Search </button>
  //   </div>
  //   <ul className="autocomplete">
  //     {results.map((result, index) => (
  //       <li key={index}>{result["label"]}</li>
  //     ))}
  //   </ul>
  // </form>
  //);
}
