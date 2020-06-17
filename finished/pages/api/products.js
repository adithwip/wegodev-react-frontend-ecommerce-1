import productsJSON from '@server/data/products'

export default (req, res) => {
  res.statusCode = 200
  res.json(productsJSON)
}