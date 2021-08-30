import React from "react";
import { AuthContext } from "../Store/AuthContext";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardArche from "../Components/Card/CardArche";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  CardArche: {
    display: "flex",
    flexDirection: "column",
    padding: " 10px 30px "
  },
  CardArcheItem: {
    margin: "10px 0 0 0"
  },
}));


function NewArche() {
  const classes = useStyles();
  const { authDispatch } = React.useContext(AuthContext);
  const [arche, setArche] = React.useState({
    id:'',
    name: '',
    description: ''
    
  });
  const [archeContent, setArcheContent] = React.useState([<div className={classes.CardArcheItem}>
    <CardArche id='10' name="Arche de Paris" description="Ceci est l'arche de paris et je suis sa description"></CardArche>
  </div>]);
  const [submit, setSubmit] = React.useState(false);

  React.useEffect( ()=>{
    const newArche = () => {
      let archeExistante = [
        { name : arche.name , description :arche.description }
      ]
        archeExistante.map((value,id)=>{
         archeContent.push(<div key={id} className={classes.CardArcheItem}>
          <CardArche name={value.name} description={value.description}></CardArche>
        </div>)
      })
    }
    if(submit){
      newArche()
        setSubmit(false)
    }


}, [submit, arche])

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Enregistrer une nouvelle Arche
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
                label="Entrez un nom d'arche"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={e => setArche({ ...arche, name: e.target.value })}
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
                onChange={e => setArche({ ...arche, description: e.target.value })}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Nouvelle Arche
              </Button>

            </form>
          </div>
        </Grid>
        <Grid className={classes.CardArche} item sm={3} md={7}>
          {archeContent}
        </Grid>
      </Grid>
    </div>
  )
}

export default NewArche
