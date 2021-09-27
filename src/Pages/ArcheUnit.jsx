import React from 'react';
import CircleGraphs from '../Components/Graphs/CircleGraph';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import TableStockageArche from '../Components/Table/TableStorageArche';
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
        { name: "Cochons", Type_of_Object: "Animal", state: "Stocké", description: "Cochon BIO / Vente régionale et charcuterie locale", pictures: "", quantity: 14 },
        { name: "Embryons vaches ", Type_of_Object: "Embryons", state: "Stocké", description: "Embryons race Charolaise", pictures: "", quantity: 4 },
        { name: "Chaise", Type_of_Object: "Material", state: "Stocké", description: "Chaise de bureau bois acacia (Blanc / Marron)", pictures: "", quantity: 1 },
        { name: "Lumière 120 Lumens", Type_of_Object: "Material", state: "Stocké", description: "Lampe extérieure jour / nuit", pictures: "", quantity: 7 },
        { name: "Farine de Blé", Type_of_Object: "Nourriture", state: "Stocké", description: "Farine pour Bétail", pictures: "", quantity: 500 },
        { name: "Puces Radar", Type_of_Object: "Material", state: "Stocké", description: "Traqueur pour les oiseaux", pictures: "", quantity: 251 },
        { name: "Couteaux à Viande", Type_of_Object: "Outil", state: "Stocké", description: "Matériel de cuisine", pictures: "", quantity: 21 },
        { name: "Capsules Nutritives", Type_of_Object: "Nourritures", state: "Stocké", description: "Rations de secours pour bovins si manque de nourriture", pictures: "", quantity: 1200 },
        { name: "Panneaux de Verres", Type_of_Object: "Material", state: "Non disponible", description: "Panneaux interfaçant le contact Homme - Animal", pictures: "", quantity: 0 },
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
                <TableStockageArche data={storage.sort(() => .5 - Math.random()).slice(0,3)}></TableStockageArche>
            </div>
        </div>
    )
}

export default ArcheUnit
