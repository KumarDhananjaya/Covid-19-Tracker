import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Infobox.css";

function Infobox({ title, cases, total }) {
  return (
    <Card className="infobox">
      <CardContent>
        <Typography color="testSecondary">{title}</Typography>

        <h2 classname="infobox__cases">{cases}</h2>

        <Typography classname="infobox__total" color="testSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
