const GeoJSONContext = {
  "geojson": "https://purl.org/geojson/vocab#",
  "purl": "http://purl.org/dc/terms/",
  "owl": "http://www.w3.org/2002/07/owl#",
  "Feature": "geojson:Feature",
  "FeatureCollection": "geojson:FeatureCollection",
  "GeometryCollection": "geojson:GeometryCollection",
  "LineString": "geojson:LineString",
  "MultiLineString": "geojson:MultiLineString",
  "MultiPoint": "geojson:MultiPoint",
  "MultiPolygon": "geojson:MultiPolygon",
  "Point": "geojson:Point",
  "Polygon": "geojson:Polygon",
  "bbox": {
    "@container": "@list",
    "@id": "geojson:bbox"
  },
  "coordinates": {
    "@container": "@list",
    "@id": "geojson:coordinates"
  },
  "features": {
    "@container": "@set",
    "@id": "geojson:features"
  },
  "geometry": "geojson:geometry",
  "id": "@id",
  "properties": "geojson:properties",
  "type": "@type",
  "description": "purl:description",
  "title": "purl:title",
  "created": "purl:created",
  "isReferencedBy": "purl:isReferencedBy",
  "sameAs": "owl:sameAs"
}

module.exports = [
  {
    "@context": GeoJSONContext,
    "type": "Feature",
    "id": "1",
    "geometry": {"type": "Point", "coordinates": [0.0, 0.0]},
    "properties": {
      "title": "Null Island",
      "description": "A fictional island in the Gulf of Guinea",
      "isReferencedBy": "https://twitter.com/nullislandbuoy",
      "sameAs": "https://en.wikipedia.org/wiki/Null_Island"
    }
  },
  {
    "@context": GeoJSONContext,
    "type": "Feature",
    "id": "sample-polygon",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
         [
           [100.0, 0.0],
           [101.0, 0.0],
           [101.0, 1.0],
           [100.0, 1.0],
           [100.0, 0.0]
         ]
       ]
     },
     "properties": {
       "title": "Sample Polygon",
       "description": "Polygon from RFC7946"
     }
   },
   {
     "@context": GeoJSONContext,
     "type": "Feature",
     "id": "sample-multipolygon",
     "geometry": {
       "type": "MultiPolygon",
       "coordinates": [
         [
           [
             [180.0, 40.0], [180.0, 50.0], [170.0, 50.0],
             [170.0, 40.0], [180.0, 40.0]
           ]
         ],
         [
           [
             [-170.0, 40.0], [-170.0, 50.0], [-180.0, 50.0],
             [-180.0, 40.0], [-170.0, 40.0]
           ]
         ]
       ]
     },
     "properties": {
       "title": "Sample MultiPolygon",
       "created": "2019-07-05",
       "description": "Antimerdian-straddling MultiPolygon from RFC7946"
     }
   }
]
