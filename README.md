## About this project

Experimental feature catalogue using server-side React (Next.js + Express) and structured data (JSON-LD), including spatial data (GeoJSON-LD).

Feature data is currently embedded or at least referenced from `/data/` at render time. Once the front-end is stable, there will be a Dockerised backend to serve these features from a database.

This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

## Interesting parts

- `/components/client-render`: defers rendering of a very small number of components to the client. This is important for concerns such as respecting a client's locale when formatting dates.
- `/components/head`: among other responsibilities, allows components to put structure data (JSON-LD) into the `head` of their document.
- `component/map`: example of a server-side rendering of a (React-)Leaflet map. Maps in general might be better as fully client-side components. They are not easily parsed; their data is better served as structured data (e.g. GeoJSON-LD); and rendering the map on a server is expensive. Nevertheless, server-side rendering is possible, particularly since a map usually has no locale-sensitive presentation concerns.

## Aims

- To the maximum extent possible, the content of all pages must be driven by a structured data object.
- This object must also be embedded in the `<head>` of each page, and readable by structured data applications, such as browser plugins, and unrelated applications.
- Server-side rendering.

### Unsatisfied aims:

- Linking between spatial features using topological relationships.
- Dockerised database that is responsible for storing the application's data.
- Stand-alone, dockerised back-end API that this application depends on for content (as JSON-LD).

## How to use it

```bash
npm i
npm run dev
```
