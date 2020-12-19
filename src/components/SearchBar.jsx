import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

function SearchBar(props) {
  const [searchTerm, setsearchTerm] = useState("");

  const handleChange = (event) => {
    setsearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    const { onFormSubmit } = props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="search..." onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default SearchBar;
