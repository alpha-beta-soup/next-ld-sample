import React from 'react'
import { object } from 'prop-types'

// Renders a https://schema.org/PostalAddress

const parseName = (name, preferredLang = null) => {
  if (typeof name === 'string') return name
  console.log({name})
  if (name.length === 0) return undefined
  const langMatch = name.filter(n => n['@language'].startsWith(preferredLang))[0]
  if (langMatch) return langMatch['@value']
  return name[0]['@value'] // Return first one
}

const PostalAddress = props => {
  let { addressCountry, addressRegion, addressLocality, streetAddress, name} = props.address
  name = parseName(name, props.preferredLang)
  return (
    <address>
      {[name, streetAddress, addressLocality, addressRegion, addressCountry].map(component => {
        return component ? (<p>{component}</p>) : null
      })}
    </address>
  )
}

PostalAddress.propTypes = {
  address: object
}

export default PostalAddress
