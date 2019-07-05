import React from 'react'
import NextHead from 'next/head'
import { string, object } from 'prop-types'

const Head = props => {
  const jsonld = props.jsonld ? JSON.stringify(props.jsonld) : null
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || ''}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://unpkg.com/marx-css/css/marx.min.css" />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
      {/* Leaflet */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
        integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
        crossorigin="">
      </script>
      <link href="themes/prism.css" rel="stylesheet" />
      <script src="prism.js"></script>
      {/* JSON-LD */}
      {jsonld && (
        <script type="application/ld+json">{jsonld}</script>
      )}
    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  jsonld: object
}

export default Head
