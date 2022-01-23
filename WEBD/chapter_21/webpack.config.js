const path = require('path');

module.exports = {              // We export an object from this file
    mode: 'development',        // mode can be 'development', 'production', etc.
    entry: './src/index.js',    // Species where we want webpack to look for the js source file
    output: {           // defines the properties of the output file
        path: path.resolve(__dirname, 'dist'),  // path to directory we want the output file to point to
        // '__dirname' gets the current directory of this 'webpack.config.js' file
        // and then we tell it to go to the 'dist' folder/directory from here
        filename: 'bundle.js'   // Specify a 'file name' for the output file
    },
    watch: true // When we run 'webpack', it's going to watch our file 'index.js' and everytime we
    // make a change, it's going to bundle the new code into the bundle.js file

    //? So, when we run webpack, it'll take the source file('index.js') and any imports inside this
    //? file; bundle them together;  and it will spit it out inside the 'dist' folder into a file
    //? called bundle.js
};

//TODO: Now that we have the config file set up. Next we want to run a webpack to do all of this
//TODO: bundling. And for that, we'll make a custom script in our 'package.json' file.
//TODO: called 'build', under the 'scripts' section, below 'test'.