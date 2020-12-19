import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VedioDetails = ({ vedio }) => {
  if (!vedio) return <div>LOADING....</div>;

  const vedioSrc = `https://www.youtube.com/embed/${vedio.id.videoId}`;
  return (
    <div style={{ height: "100%" }}>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          height="100%"
          width="100%"
          title="vedio Player"
          src={vedioSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {vedio.snippet.title}-{vedio.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {vedio.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{vedio.snippet.description}</Typography>
      </Paper>
    </div>
  );
};

export default VedioDetails;
