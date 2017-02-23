# Code Challenge

##Getting Started
Follow the steps below in your terminal to view the completed application. 
This will create a "build" directory containing "bundle.js" to be served locally.
```
npm install
npm start
open http://localhost:5000
```

##Key Considerations

###React
Implemented with 4 components, 2 of which are functional stateless. My primary objectives were to seperate concerns among the components and keep them simple and legible. This was acheived by housing most of the logic in the root component (App.js), and passing the necessary information to children through props.

###CSS
I mostly heavily relied upon Flexbox, but also had some fun with transform, animation, and gradient. The CSS is scoped & bundled with the components so you will see the files imported in the components as modules from the "src/styles/" directory. This was probably overkill with such a small code base, but works great when specificity and/or scale is a concern. An additional webpack plugin would have let me bundle my CSS to a separate stylesheet, but it didn't seem necessary here.

###Webpack
I used webpack for three reasons. First, it provided a quick and comfortable development environment with hot module reloading. Second, it allowed me to compose straightforward CSS that would bundle to be compatable across browsers, and scope classes/ids directly to components. Lastly, I also use(d) the webpack dev server to host the build.
