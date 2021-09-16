import React from 'react'
import Grid from "@material-ui/core/Grid";
import TableStorageAll from '../Components/Table/TableStorageAll';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from "../Store/AuthContext";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardMaterial from "../Components/Card/CardMaterial";


const useStyles = makeStyles((theme) => ({
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
    },
    root: {
        height: "100vh",
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      CardMaterial: {
        display: "flex",
        flexDirection: "column",
        padding: " 10px 30px "
      },
      CardMaterialItem: {
        margin: "10px 0 0 0"
      },
    })

);

function Material() {
    const classes = useStyles();
    const { authDispatch } = React.useContext(AuthContext);
    const [material, setMaterial] = React.useState({
      id:'',
      name: '',
      description: '',
      quantité: "0",
      
    });
    const [materialContent, setMaterialContent] = React.useState([<div className={classes.CardMaterialItem}>
      <CardMaterial id='10' name="Material de Paris" quantité="12" description="Ceci est l'material de paris et je suis sa description"></CardMaterial>
    </div>]);
    const [submit, setSubmit] = React.useState(false);
  
    React.useEffect( ()=>{
      const newMaterial = () => {
        let materialExistante = [
          { name : material.name , description :material.description, quantité:material.quantité}
        ]
          materialExistante.map((value,id)=>{
           materialContent.push(<div key={id} className={classes.CardMaterialItem}>
            <CardMaterial name={value.name} quantité={value.quantité} description={value.description}></CardMaterial>
          </div>)
        })
      }
      if(submit){
        newMaterial()
          setSubmit(false)
      }
  
  
  }, [submit, material])
  
    return (
      <div>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Enregistrer un nouveau matériel
              </Typography>
              <form className={classes.form}
                onSubmit={e => {
                  e.preventDefault();
                  setSubmit(true);
                }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Entrez un nom de materiel"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={e => setMaterial({ ...material, name: e.target.value })}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="description"
                  type="description"
                  id="multiline-description"
                  autoComplete="description"
                  multiline
                  onChange={e => setMaterial({ ...material, description: e.target.value })}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="quantité"
                  label="quantité"
                  type="quantité"
                  id="quantité"
                  autoComplete="quantité"
                  onChange={e => setMaterial({ ...material, quantité: e.target.value })}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Nouvelle Material
                </Button>
  
              </form>
            </div>
          </Grid>
          <Grid className={classes.CardMaterial} item sm={3} md={7}>
            {materialContent}
          </Grid>
        </Grid>
      </div>
    )
}

export default Material
