import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import { makeStyles } from "@material-ui/core/styles";

function MapGraph({ setTooltipContent }) {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const rounded = (num) => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
  };
  const useStyles = makeStyles((theme) => ({
    cardTitle: {
      color: "#3C4858",
      textAlign: "left",
      padding: "1em 0 0 1em !important",
    },
    cardSize: {
      height: "400px",
      width: "1200px",
      marginLeft: "15px",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cardSize}>
        <CardHeader color="warning" stats icon>
          <h3 className={classes.cardTitle}>
            <strong>Origine de mes abonnés</strong>
          </h3>
        </CardHeader>
        <ComposableMap
          data-tip=""
          width="1000"
          height="450"
          projectionConfig={{ scale: 0 }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME, POP_EST } = geo.properties;
                      setTooltipContent(`${NAME} — ${rounded(POP_EST)}`); // ${rounded(POP_EST)}
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </Card>
    </div>
  );
}

export default memo(MapGraph);
