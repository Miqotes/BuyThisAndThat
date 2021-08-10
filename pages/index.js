// making request from api
import React from 'react'
import axios from 'axios'

function Home({ products }) {
  console.log(products)
  // useEffect is for performing side effects, accepts 2 arguments - effect function & dependencies (specified withing array)
  // dependencies determine when the effect function is run
  // React.useEffect(() => {
  //   getProducts()
  // }, [])

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/product'
  //   const response = await axios.get(url)
  //   // await request, then place is response variable like above!
  //   console.log(response.data)
  // }

  //this was fetching from the client rather than the server
  return <>home</>;
}

Home.getInitialProps = async () => {
  //fetch data on the server by fetch request
  // return response data as an object
  // we're adding data to props and props is an object
  // note: this object will be merged with existing props
  const url = 'http://localhost:3000/api/products'
    const response = await axios.get(url)
    // returning new object!
    return { products: response.data }

// here I am fetching from the server!
}

export default Home;
