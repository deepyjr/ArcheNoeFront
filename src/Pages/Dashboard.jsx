import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WidgetsWithTable from "../Components/Widgets/WidgetsWithTable";
import Widgets from "../Components/Widgets/Widgets";
import Table from "../Components/Table/Table";

export default function Dashboard() {
  const useStyles = makeStyles((theme) => ({
    container: {
      justifyContent: "space-evenly",
      display: "flex",
      flexDirection: "row",
      marginTop: "5vh",
      flexWrap: "wrap",
    },
    containerMapAndChart: {
      paddingRight: "15px",
    },
    containerGraph: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Widgets></Widgets>
      <WidgetsWithTable></WidgetsWithTable>
    </div>
  );
}
