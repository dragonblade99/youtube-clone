import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VedioDetails from "./components/VedioDetails";
import VedioList from "./components/VedioList";

function App() {
  const [vedio, setVedio] = useState([]);
  const [selectedVedio, setSelectedVedio] = useState(null);

  useEffect(() => {
    handleSubmit("youtube");
  });

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAv1JLGD5aJfuejhFcOXBHSTNlDDRtSpts",
        q: searchTerm,
      },
    });
    setVedio(response.data.items);
    setSelectedVedio(response.data.items[0]);
  };
  const onVedioSelect = (vedio) => {
    setSelectedVedio(vedio);
  };
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VedioDetails vedio={selectedVedio} />
          </Grid>
          <Grid item xs={4}>
            <VedioList vedios={vedio} onVedioSelect={onVedioSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
