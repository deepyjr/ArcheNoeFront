import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
});

function CardMaterial(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
             <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Quantité : {props.quantité}
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={'/Material/' + props.id} >
        <Button size="small">Learn More</Button>
      </Link>

      </CardActions>
    </Card>
        </div>
    )
}

export default CardMaterial
