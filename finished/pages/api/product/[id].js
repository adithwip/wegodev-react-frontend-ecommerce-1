import productsJSON from '@server/data/products'

export default (req, res) => {
  const productID = Number(req.query.id)
  const productList = productsJSON.list
  const productBasedOnID = productList.filter(prod => prod.id === productID)

  if (productBasedOnID.length > 0) {
    res.statusCode = 200
    res.json(productBasedOnID.pop())
  } else {
    res.statusCode = 404
    res.send('Not found - ID is not related to any products')
  }
}