// import products from '../../static/products.json'
import connectDb from '../../utils/connectDb'
import Product from '../../models/Product'

connectDb()

//routes are simple functions
// req & res are javascript objects
export default async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
    // pass products in from array like so
}
