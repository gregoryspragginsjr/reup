'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require('@frctl/fractal').create());

/* Set the title of the project */
fractal.set('project.title', 'Truth & Consequences Web Starter Pack');
fractal.set('project.author', 'Greg Spraggins');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/twig/components');

/*  Require the Twig adapter */
fractal.components.engine(require('@frctl/twig')());
fractal.components.set('ext', '.twig');

// /* Tell Fractal where the documentation pages will live */
// fractal.docs.set('path', __dirname + '/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/dist');

/* Builds a stand-alone static version of your fractal site at the root of the project */
fractal.web.set('builder.dest', __dirname + '/fractal');

/* Provide global context */
fractal.components.set('default.context', {
    in_component_library: true,
});

const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: {
        name: 'black',
        complement: '#66ffff',
        links: '#000000',
    },
    // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme);