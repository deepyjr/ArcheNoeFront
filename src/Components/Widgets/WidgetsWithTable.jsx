import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ClassicalGraph from "../Graphs/ClassicalGraph";
import CustomButton from "../Button/CustomButton";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 15px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    marginRight:"10%",
  },
  cover: {
    position: "relative",
    width: "50%",
    zIndex: "10",
  },
  containerAdvices: {
    position: "absolute",
    zIndex: "950",
    width: "50%",
  },
  contentCard: {
    width: "84%",
    margin: "4% 8%",
  },
  cardTitle: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold",
  },
  titleLeft:{
    color: "white",
    fontSize: "30px",
    marginTop:"3%"
  }
}));

function WidgetsWithTable() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="./backgroundWidgetDashboard.jpg"
          title="Live from space album cover"
        />
        <div className={classes.containerAdvices}>
          <h2 className={classes.titleLeft}>Stratégie Recommandée</h2>
          <Card className={classes.contentCard}>
            <CardContent>
              <h3 className={classes.cardTitle}>Avancer l'arche de Montigny les cormeilles</h3>
              <p>Mettre à jour les informations sur les stocks disponibles pour cette arche.</p>
              <CustomButton
                color="#73ba9b"
                content="Add to queue"
              ></CustomButton>
            </CardContent>
          </Card>
          <Card className={classes.contentCard}>
            <CardContent>
              <h3 className={classes.cardTitle}>Avancer l'arche de Montigny les cormeilles</h3>
              <p>Contacter le propriétaire de cette arche afin de convenir d'un budget pour les stocks.</p>
              <CustomButton
                color="#73ba9b"
                content="Add to queue"
              ></CustomButton>
            </CardContent>
          </Card>
        </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <ClassicalGraph></ClassicalGraph>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default WidgetsWithTable;
