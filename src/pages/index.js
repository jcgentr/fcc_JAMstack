import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello my name is Jared Gentry!</h1>
    <p>This is my first Gatsby site.</p>
    <p>I am ready to build something great.</p>
    <img src="https://media2.giphy.com/media/4kd7EL6lWaW9W/giphy.webp" alt="Bill Murray basketball assistance"></img>
    <br></br>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
