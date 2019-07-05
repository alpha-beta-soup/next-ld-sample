import Link from 'next/link'

import Nav from '../components/nav'
import Head from '../components/head'
import ClientRender from '../components/client-render'
import PostalAddress from '../components/address'

import Author from '../data/author'

const getNavigatorLanguage = () => {
  // const navigator = window.navigator
  console.log({'getNavigatorLanguage': true})
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
  }
}

const data = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "JSON-LD experiment with Next.js",
  "headline": "SEO for SSR with JSON-LD",
  "description": "Adding structured data to a webpage is important for SEO. For environmental features to be discovered online, they need to adhere to SEO best practices. In certain situations, one such practice is server-side rendering (SSR) and JSON-LD. In obtaining the benefits of these best practices, we also don't want to give up on modern JavaScript practices that make web development so easy and delightful. This is an experiment to meet these supposedly competing demands.",
  "speciality": {
    "@type": "Speciality",
    "name": "Linked Data"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Semantic Web Developers"
  },
  "author": Author,
  "dateCreated": "2019-07-03",
  "isFamilyFriendly": true,
  "creativeWorkStatus": "Incomplete",
  "text": "The objective of this experiment is to demonstrate a simple example of a modern JavaScript application that uses server-side rendering, driven by JSON-LD, as a form of simultaenously human- and machine-crawlable catalogue or database. Linked Data principles are prized, but not at the expense of web developers. The aim is to convince, not dictate.To the maximum extent possible, the content of this application will be contained within JSON-LD documents, embedded into the HTML <code>head</code> and readable with a <strong>structured data plugin</strong> such as the <a href='https://addons.mozilla.org/en-US/firefox/addon/openlink-structured-data-sniff/'>OpenLink Structured Data Sniffer</a> for Firefox. Install the plugin if you haven't, and <strong>give it a try</strong>: not all of the interesting (meta)data in the JSON-LD document is visible to a human."
}

const About = () => (
  <>
    <Head title="About" jsonld={data}/>
    <header><Nav/></header>
    <main>
      <article>
        <section>
          <h1>{data.name}</h1>
          <h2>{data.headline}</h2>
          <aside className="bt bb">
            <p>Status: <tt>{data.creativeWorkStatus}</tt></p>
            <p>Audience: {data.audience.audienceType}</p>
            <p>Author: <a href={data.author.url}>{data.author.name}</a></p>
          </aside>
          <p>{data.description}</p>
          <p dangerouslySetInnerHTML={{__html: data.text}}></p>
        </section>
        <footer>
          {/* This is actually quite cool. The time can be included in the
              semantic time element, but also deferred to client render for a
              user's locale! Client, server, and bots are all happy!
          */}
          <time datetime={data.dateCreated}>
            <ClientRender>{new Date(data.dateCreated).toLocaleDateString(() => getNavigatorLanguage())}</ClientRender>
          </time>
          <PostalAddress address={data.author.address} preferredLang='mi'></PostalAddress>
        </footer>
      </article>
    </main>
    <style jsx>{`
      section {
        float: left;
        margin: 0 1.5%;
        width: 100%;
      }
      section p {
        text-align: justify;
      }
      aside {
        float: right;
        margin: 0 1.5%;
        width: 30%;
        padding: 10px;
        border-top: 1px solid;
        border-bottom: 1px solid;
      }
      footer {
        text-align: right;
        border-top: 1px solid grey;
        font-size: 9pt;
        float: right;
        width: 20%;
      }
    `}</style>
  </>
)

export default About
