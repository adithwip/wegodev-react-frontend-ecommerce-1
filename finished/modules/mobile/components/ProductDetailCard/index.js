import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ProductRating from '@common/components/ProductRating';

import { currencyFormatter } from '@utils/currency';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  rating: {
    textAlign: 'right',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

const ProductDetailCard = ({
  img,
  title,
  price,
  rating,
  sold,
  description
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <Typography variant="button" color="secondary">
              {currencyFormatter(price)}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <ProductRating rating={rating} sold={sold} alignRight />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="center" alignItems="center">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show Description"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="subtitle2">
            Description
          </Typography>
          <Typography paragraph variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

ProductDetailCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductDetailCard;