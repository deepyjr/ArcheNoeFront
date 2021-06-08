import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => createStyles({
    root: {
      minWidth: 350,
      flexGrow: 1,
      marginTop: '10%',
    },
    paper: {
      height: 140,
      width: 100,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

function LandingPageCreateArches() {
    const classes = useStyles();

  const linkTable = [
    { name: `Nouvelle arche`, description: 'Créer une nouvelle arche.', link: '/NewArche' }, // link a remplir comme /chemin
    { name: `Nouvel utilisateur`, description: "Créer un nouveau profil utilisateur.", link: '' },
    { name: `Modifier une arche`, description: "Modifier une arche existante.", link: '' },
  ];

  const content = (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center" spacing={5}>
        {linkTable.map((value, index) => (
          <Grid key={index} item>
            <Card key={index} className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom variant="h5">
                  {value.name}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {value.description}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
              <Link to={value.link} >
                <Button size="small">Learn More</Button>
              </Link>
               
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

    return (
        <div>
            {content}
        </div>
    )
}

export default LandingPageCreateArches
