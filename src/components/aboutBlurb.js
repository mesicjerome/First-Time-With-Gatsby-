import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import { Link } from "gatsby"

const AboutBlurb = () => {
    const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Fujisan: file(relativePath: { eq: "Fujisan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                    <div className="content">
                        <h3>Japan is waiting for you</h3>
                        <p>
                            Est ullamco dolore in anim. Amet ad labore deserunt irure ex excepteur cupidatat cupidatat tempor. Duis ex ea duis aliqua nulla id anim qui ea elit. Nisi sint esse ea culpa. Est ut et quis mollit.
                        </p>
                        <div className="btn-row">
                            <Link to="/cities">Cities</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                        <Img fluid={data.flower.childImageSharp.fluid} />
                        </div>
                        <div className="bottom-left">
                        <Img fluid={data.Fujisan.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
        </div>
    )
    
}

export default AboutBlurb