import React from 'react';
import CircleGraphs from '../Components/Graphs/CircleGraph';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import TableStockage from '../Components/Table/TableStorage';
import {
    useParams
} from "react-router-dom";

const useStyles = makeStyles({
    containerInfos: {
        textAlign: "left",
        margin: "35px"
    },
    containerGlobal: {
        width:"85vw",
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


function ArcheUnit() {
    let { id } = useParams();
    const classes = useStyles();
    const [storage, setStorage] = React.useState([
        { name: "cochons", Type_of_Object: "Animal", state: "Stocké", description: "description test pour 1 item ", pictures: "", quantity: 14 },
        { name: "embryons vaches ", Type_of_Object: "Embryons", state: "Stocké", description: "description test pour 1 item ", pictures: "", quantity: 4 },
        { name: "Table", Type_of_Object: "Material", state: "Stocké", description: "description test pour 1 item ", pictures: "", quantity: 1 }
    ]);
    return (
        <div>
            <Grid container>
                <Grid item xs={7} className={classes.containerInfos}>
                        <h2 className={classes.titreArche}> Nom : <strong>Arche de Paris</strong></h2>
                        <div className={classes.containerImage}>
                            <img className={classes.image} src="http://lesvoyagesduparisienheureux.fr/wp-content/uploads/2016/12/refuge-pour-animaux-santorin.jpg" alt=" image spa" />
                        </div>
                   
                    <p> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </Grid>
                <CircleGraphs></CircleGraphs>
            </Grid>
            <div className={classes.containerGlobal}>
                <TableStockage data={storage}></TableStockage>
            </div>
        </div>
    )
}

export default ArcheUnit
