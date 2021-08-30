import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import { makeStyles } from "@material-ui/core/styles";

const data = [
  {
    name: "Lion",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "Vache",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "Requins",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "Poules",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  }
];

const style = {
  top: 30,
  left: 350,
  lineHeight: "30px",
};

function CircleGraphs() {
  const useStyles = makeStyles((theme) => ({
    cardTitle: {
      color: "#3C4858",
      textAlign: "left",
      padding: "1em 0 0 1em !important",
    },
    cardSize: {
      height: "400px",
      width: "600px",
      marginLeft: "15px",
    },
    containerGraphAndText:{
      display:"flex",
      justifyContent:"center"
    }
  }));
  const classes = useStyles();
  return (
    <Card className={classes.cardSize}>
      <CardHeader color="warning" stats icon>
        <h3 className={classes.cardTitle}>
          <strong>Interactions par animaux</strong>
        </h3>
      </CardHeader>
      <div className={classes.containerGraphAndText}></div>
      <RadialBarChart
        width={600}
        height={400}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={20}
          width={250}
          height={250}
          layout="vertical"
          verticalAlign="bottom"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </Card>
  );
}

export default CircleGraphs;
