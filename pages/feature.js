import { withRouter } from 'next/router'
import Link from 'next/link'

import Nav from '../components/nav'
import Head from '../components/head'
import MapComponent from '../components/map'
import Glossary from '../components/glossary'

import { geojsonSerialiser } from '../utils/geojson-stringify'

import features from '../data/sample'

// const replacer = (name, val) => {
//   if (name === 'coordinates' && Array.isArray(val)) {
//     val = JSON.stringify(val)
//   }
//   return val
// }
//
// const replacerWrapper = (val) => val.replace(/\"\[/g, '[').replace(/\]\"/g,']')

const Feature = props => {
  console.log({props})
  const featureID = props.url.query.id
  const feature = features.filter(f => f.id == featureID)[0]
  if (!feature) {
    // TODO throw?
    // Parent component should check for existence
    // Server must throw 404
    return (<p>Feature does not exist</p>)
  }
  const jsonBlock = geojsonSerialiser(feature, 4)
  const semanticProperties = Object.keys(feature.properties)

  return (
    <>
      <Head title="Home" jsonld={feature}/>
      <header><Nav /></header>
      <main>
        <article>
          <h1>{feature.properties.title}</h1>
          <Glossary terms={[...Object.keys(feature.properties)]} thing={feature}/>
          <section style={{height: '300px', width: '100%'}}>
            <MapComponent zoom={2} feature={feature}/>
          </section>
          <details>
            <summary>Click to reveal the GeoJSON-LD</summary>
            <pre><code>{jsonBlock}</code></pre>
          </details>
        </article>
      </main>
    </>
  )
}

export default Feature
