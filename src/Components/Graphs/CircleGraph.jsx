import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import { makeStyles } from "@material-ui/core/styles";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: 30,
  left: 350,
  lineHeight: "30px",
};

// GET https://graph.facebook.com/v9.0/{ig-user-id}/insights ?metric={metric} &period={period} &since={since} &until={until} &access_token={access-token} INSIGHT POUR LA REQUETE
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
          <strong>Age de mes abonnés</strong>
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
