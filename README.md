## React filtering demo
Filtering JSON data using Ramda to maintain immutability and rendering with React.[Demo](https://meriad-demo.surge.sh)

### Example
For the following JSON data scheme:
```javascript
{
 name: "Adriana Lima",
 height: 1.60,
 eye_color: "blue",
 hair_color: "dark brown",
 thumb: "http://wallpaper.pickywallpapers.com/ipad2/thumbnail/adriana-lima-amazing-portrait.jpg"
}
```
we get a range from the input slider component as an array of the type: `[min, max]` which is set to the `height` prop of `state`. Then in the `render` method, we filter the the models array using the `withinBounds` function:
```javascript
withinBounds(models) {
 return R.filter(R.propSatisfies((h) => (h >= R.head(this.state.height)) && (h <= R.tail(this.state.height)), "height"))(models);
}
```
## Local Installation

Install [node.js](https://nodejs.org) or [io.js](https://iojs.org)
```
git clone https://github.com/sidjain26/react-filter-demo.git
cd react-filter-demo
npm install
npm start # Local development server with hot-reload
npm run build # Build to dist/
npm run serve # Serve from dist/
npm run deploy # Deploy dist/ to surge.sh
```
