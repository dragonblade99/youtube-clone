import React from "react";

import { Grid } from "@material-ui/core";
import VedioItem from "./VedioItem";

function VedioList({ vedios, onVedioSelect }) {
  const listofvedios = vedios.map((vedio, id) => (
    <VedioItem onVedioSelect={onVedioSelect} key={id} vedio={vedio} />
  ));
  return (
    <Grid container spacing={10}>
      {listofvedios}
    </Grid>
  );
}

export default VedioList;
