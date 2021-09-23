import React from 'react'
import CircleGraphs from '../Components/Graphs/CircleGraph';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import TableStockageArche from '../Components/Table/TableStorageArche';
import {
    useParams
} from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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


function MaterialUnit() {

    let { id } = useParams();
    const classes = useStyles();
    const [storage, setStorage] = React.useState([
        { name: "cochons", Type_of_Object: "Animal", state: "Stocké", description: "description test pour 1 item ", pictures: "", quantity: 14 },
        { name: "embryons vaches ", Type_of_Object: "Embryons", state: "Stocké", description: "description test pour 1 item ", pictures: "", quantity: 4 },
        { name: "Table", Type_of_Object: "Material", state: "Stocké", description: "description test pour 1 item ", pictures: "", quantity: 1 }
    ]);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
         <div>
            <Grid container>
                <Grid item xs={7} className={classes.containerInfos}>
                        <h2 className={classes.titreArche}> Embryons de cochons </h2>
                        <div className={classes.containerImage}>
                            <img className={classes.image} src="https://www.dexeus.com/blog/wp-content/uploads/2019/08/shutterstock_723555214.jpg" alt=" image embryon" />
                        </div>
                   
                    <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p><strong>Arche :</strong> Arche de Paris</p>
                    <p><strong>Lieu :</strong> Paris</p>
                    <p><strong>Quantité :</strong> 12</p>
                    <h2>Effectuer un transport</h2>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default MaterialUnit