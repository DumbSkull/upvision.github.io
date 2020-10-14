import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Hero from "../components/hero"


const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Hero></Hero>
    {/* <h1>Hello World!</h1> */}
    {/* <p>This marks the start of the development on the website for UpVision.</p> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/about">about</Link>
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
