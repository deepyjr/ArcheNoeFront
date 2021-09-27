import React from "react";
import Table from "../Components/Table/Table";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
    containerGlobal:{
        margin:"15px 15px 0 15px"
    },
  actionBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  rootActions: {
    display: "flex",
    padding: "15px",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "10px",
    margin: "0 0 15px 0",
    backgroundColor: "white"
  },
  lineActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10px",
  },
  actionsComming: {
    display: "flex",
    flexDirection: "row",
  },
  chipInfos:{
      backgroundColor: "#FFDE59",
  }
}));

export default function Queue() {
  const classes = useStyles();
  const [refreshTable, setRefreshTable] = React.useState(true);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const getData = () => {
      axios({
        method: "GET",
        url: "http://localhost:5000/api/arch/GetAll",
      })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (refreshTable === true) {
      getData();
      setRefreshTable(false);
    }
  }, [refreshTable]);

  return (
    <div className={classes.containerGlobal}>
      {/* <div className={classes.actionBox}>
        <div className={classes.rootActions}>
          <div className={classes.lineActions}>
            <span style={{ marginRight: "15px" }}>Actions left</span>
            <Chip className={classes.chipInfos} style={{ marginRight: "15px" }} label="145 likes" size='small' icon={<FavoriteBorderOutlinedIcon style={{ color: 'black' }} />}/>
            <Chip className={classes.chipInfos} label="30 follows" icon={<PersonAddOutlinedIcon style={{ color: 'black' }} />} size='small'/>
          </div>
          <div className={classes.lineActions}>
            <span style={{ marginRight: "15px" }} >Action in comming</span>
            <Chip className={classes.chipInfos} style={{ marginRight: "15px" }} label="6 likes" size='small' icon={<FavoriteBorderOutlinedIcon style={{ color: 'black' }}/>} />
            <Chip className={classes.chipInfos} label="10 follows" icon={<PersonAddOutlinedIcon style={{ color: 'black' }}/>} size='small' />
          </div>
        </div>
      </div> */}
      <Table data={data}/>

    </div>
  );
}
