import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const VedioItem = ({ vedio, onVedioSelect }) => {
  return (
    <Grid xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVedioSelect(vedio)}
      >
        <img
          style={{ margin: "0px 10px 10px 0px" }}
          alt="thumbnail"
          src={vedio.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{vedio.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VedioItem;
