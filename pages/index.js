import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import features from '../data/sample'
import Author from '../data/author'

const PageData = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "Spatial Data on the Web",
  "headline": "Spatial Data on the Web",
  "about": "Best practices for publishing spatial data on the web",
  "description": "Best practice experiment",
  "author": Author,
  "speciality": {
    "@type": "Speciality",
    "name": "Linked Data"
  },
  "mentions": [
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "url": "https://json-ld.org/",
      "name": "JSON-LD",
      "description": "Learn more about JSON for Linking Data"
    },
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "url": "https://www.w3.org/TR/sdw-bp/#linked-data",
      "name": "SDW BP",
      "description": "The OGC and W3C have published a Working Group Note titled <em>Spatial Data on the Web Best Practices</em>"
    },
    {
      "@context": "http://schema.org",
      "@type": "DigitalDocument",
      "url": "https://www.morganclaypool.com/doi/pdf/10.2200/S00481ED1V01Y201302WBE005",
      "name": "A Programmable Web",
      "comment": "Not convinced by Linked Data? Try reading this unfinished work by Aaron Schwartz",
      "author": {
        "@type": "Person",
        "name": "Aaron Schwartz"
      }
    },
  ]
}

const Home = () => {
  return (<div>
    <Head title={PageData.name} jsonld={PageData}/>
    <header>
      <Nav />
      <section>
        <h1 className="title">{PageData.headline}</h1>
        <p className="description">{PageData.description}</p>
      </section>
    </header>
    <main>
      {PageData.mentions.map((mention, i) => (
        <Link key={`mention-${i}`} href={mention.url}>
          <a className="reading-notes">
            <h3>{mention.name} &rarr;</h3>
            <p dangerouslySetInnerHTML={{__html: mention.description || mention.comment}}></p>
          </a>
        </Link>
      ))}
      {features.map((feature, i) => (
        <Link key={`feature-${i}`} href={`/feature/${feature.id}`} as={`/feature/${feature.id}`}>
          <a className="features">
            <h3>{feature.properties.title} &rarr;</h3>
            <p dangerouslySetInnerHTML={{__html: feature.properties.description}}></p>
          </a>
        </Link>
      ))}
    </main>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      h1, h2, h3, h4, h5, h6 {
        margin: 0;
        width: 100%;
        padding-top: 30px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
        text-transform: capitalize;
      }
      main {
        max-width: 100%;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-flow: row wrap;
      }
      a {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        // flex-basis:calc(50% - 10px);
        margin-bottom: 10px;
      }
      a:hover {
        border-color: #067df7;
      }
      a h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      a p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .features {
        border-style: dotted;
      }
    `}</style>
  </div>)
}

export default Home
