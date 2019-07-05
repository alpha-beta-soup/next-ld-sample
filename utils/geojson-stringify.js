// Published as a gist: https://gist.github.com/alpha-beta-soup/e6af529ccedf0da0e52c191811e56f79

const replacerWrapper = val => val.replace(/\"\[/g, '[').replace(/\]\"/g,']')
const replacer = (name, val) => {
  console.log({name, val})
  if (name === 'coordinates' && Array.isArray(val)) {
    val = JSON.stringify(val)
  }
  return val
}
module.exports = {
  replacer, replacerWrapper,
  geojsonSerialiser: (geojson, space) => replacerWrapper(JSON.stringify(geojson, replacer, space))
}
