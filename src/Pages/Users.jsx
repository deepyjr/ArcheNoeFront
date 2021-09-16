import React from 'react'
import TableUsers from "../Components/Table/TableUsers"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    containerInfos: {
        textAlign: "left",
        margin: "35px"
    },
    containerGlobal: {
        margin: "15px 15px 0 15px"
    },
    image:{
        width:"500px",
    },
    containerImage:{
        display:"flex",
        alignSelf:"center"
    }
});

function Users() {
    const classes = useStyles();
    const [storage, setStorage] = React.useState([
        { Prénom: "Iron", Nom: "Man", Arche: "Paris", Localisation: "Caen", Salaire: "15 000€"},
        { Prénom: "Thor", Nom: "Tue", Arche: "Paris", Localisation: "Nice", Salaire: "10 000€"},
        { Prénom: "Hulk", Nom: "Kluh", Arche: "Paris", Localisation: "Lille", Salaire: "1 300€"},
        { Prénom: "Black", Nom: "Widow", Arche: "Paris", Localisation: "Le mans", Salaire: "1 300€"},
    ]);
    return (
        <div className={classes.containerGlobal}>
           <TableUsers data={storage} />
        </div>
    )
}

export default Users
