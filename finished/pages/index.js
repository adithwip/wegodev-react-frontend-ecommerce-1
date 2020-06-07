import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Layout from '@common/components/Layout';
import ProductCard from '@common/components/ProductCard';

const HomePage = () => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <div>This is inside a container</div>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={6}>
            <ProductCard />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default HomePage;