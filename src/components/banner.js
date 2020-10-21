import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      poulpe: file(relativePath: { eq: "poulpe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tower: file(relativePath: { eq: "tower.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street: file(relativePath: { eq: "street.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className='side-image left'>
                      <Img fluid={data.poulpe.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">
                        WELCOME TO JAPAN
                    </div>
                    <div className='main-image'>
                      <Img fluid={data.tower.childImageSharp.fluid} />
                    </div>
                    <div className='side-image right'>
                      <Img fluid={data.street.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                  <span>Scroll down</span>
                </div>
            </div>
            <div className="fixed-misc">Mesic Jerome</div>
        </div>
    )
    
}

export default Banner