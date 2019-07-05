import React from 'react'
import { object, arrayOf, string } from 'prop-types'

const resolveToURI = (term, thing) => {
  const context = thing['@context']
  console.log({term, context})
  if (!(term in context)) {
    return undefined
  } else if (context[term].startsWith('http')) {
    return context[term]
  } else {
    const [prefix, fragment] = context[term].split(':')
    return context[prefix] + fragment
  }
}

const getTermLiteral = (term, thing) => {
  let termValue = term in thing ? thing.term : (thing.properties && term in thing.properties) ? thing.properties[term] : undefined
  if (termValue.startsWith('http')) {
    termValue = (<a href={termValue}>{termValue}</a>)
  }
  return termValue
}

// Renders selected terms from a Thing into a glossary
const Glossary = props => {
  const terms = props.terms || Object.keys(props.thing)

  return (
    <section><dl>
      {props.terms.map(term => {
        return (
          <section key={term}>
            <dt>
              <a href={resolveToURI(term, props.thing)}>{term}</a>
            </dt>
            <dd>{getTermLiteral(term, props.thing)}</dd>
          </section>
        )
      })}
    </dl></section>
  )
}

Glossary.propTypes = {
  terms: arrayOf(string),
  thing: object.isRequired
}

export default Glossary
