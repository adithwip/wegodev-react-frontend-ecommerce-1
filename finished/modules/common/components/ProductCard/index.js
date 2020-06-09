import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import PromoLabel from '@common/components/PromoLabel';
import ProductRating from '@common/components/ProductRating';

import { currencyFormatter } from '@utils/currency';

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
  },
  image: {
    height: 140,
  },
  cardContent: {
    padding: 8,
    paddingTop: 16,
  },
  relative: {
    position: 'relative'
  },
  promoLabel: {
    position: 'absolute',
    bottom: 6,
    left: 4,
  },
  price: {
    lineHeight: 'normal',
  }
});

const ProductCard = ({ img, title, promoLabel, price, rating, sold, productID }) => {
  const classes = useStyles();

  return (
    <Link href="/product/[id]" as={`/product/${productID}`}>
      <Card className={classes.card}>
        <div className={classes.relative}>
          <CardMedia
            className={classes.image}
            image={img}
            title={title}
          />
          <div className={classes.promoLabel}>
            <PromoLabel promoLabel={promoLabel} />
          </div>
        </div>
        <CardContent className={classes.cardContent}>
          <Grid container direction="column">
            <Typography gutterBottom variant="subtitle2" component="h2">
              {title}
            </Typography>
            <Typography variant="overline" className={classes.price}>
              {currencyFormatter(price)}
            </Typography>
            <ProductRating rating={rating} sold={sold} />
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  promoLabel: PropTypes.array,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  sold: PropTypes.number,
  productID: PropTypes.number.isRequired,
}

export default ProductCard;