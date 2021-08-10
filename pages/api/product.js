import products from '../../static/products.json'
import connectDb from '../../utils/connectDb'


connectDb()

//routes are simple functions
// req & res are javascript objects
export default (req, res) => {
    res.status(200).json(products)
    // pass products in from array like so
}
// for now importing json file directly, while backend is not setup