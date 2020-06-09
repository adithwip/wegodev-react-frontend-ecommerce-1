import React from 'react';

import Layout from '@common/components/Layout';
import Container from '@material-ui/core/Container';

import ProductDetailCard from '@mobile/components/ProductDetailCard';

const ProductDetail = ({ product }) => {
  const {
    name,
    img,
    price,
    rating,
    sold,
    description,
  } = product;

  return (
    <Layout>
      <Container maxWidth="sm">
        <ProductDetailCard
          img={img}
          title={name}
          price={price}
          rating={rating}
          sold={sold}
          description={description}
        />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/products`);
  const products = await res.json();

  const paths = products.list.map(prod => `/product/${prod.id}`);

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:5000/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product }
  }
}

export default ProductDetail;