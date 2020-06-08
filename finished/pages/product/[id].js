import React from 'react';

import Layout from '@common/components/Layout';
import Container from '@material-ui/core/Container';

const ProductDetail = ({ product }) => {
  console.log(product);

  return (
    <Layout>
      <Container maxWidth="sm">
        <div>Hello</div>
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

  console.log("product ===>", product)

  return {
    props: { product }
  }
}

export default ProductDetail;