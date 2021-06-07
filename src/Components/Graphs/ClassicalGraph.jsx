import { Grid } from "@material-ui/core";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card.js";

const data = [
  {
    name: "01 Décembre 2020",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "02 Décembre 2020",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "03 Décembre 2020",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "04 Décembre 2020",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "05 Décembre 2020",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "06 Décembre 2020",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "07 Décembre 2020",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function ClassicalGraph() {
  const useStyles = makeStyles((theme) => ({
    containerGraph: {
      paddingTop: "30px",
    },
    cardSize:{
        margin:"15px",
        width:"1800px"
    }
  }));
  const classes = useStyles();
  return (
      <Grid container justify="center" className={classes.containerGraph}>
        <AreaChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#CCC6AD" fill="#FFD940" />
        </AreaChart>
      </Grid>
  );
}

export default ClassicalGraph;
