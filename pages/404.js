import React from 'react'

const ResourceMissing = props => {
  console.log({back: props.url.back})
  return (
    <main>
      <p>It seems that <tt>{props.url.query.url}</tt> is missing!</p>
      <button onClick={props.url.back}>Go back</button>
    </main>
  )
}

export default ResourceMissing
