// this file lets you configure what webpack does

var webpack = require('webpack');


module.exports = {
  entry : [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output : {
    path : __dirname,
    filename: './public/bundle.js'
  },
  resolve : {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Cover: 'app/components/Cover/Cover.jsx',
      Contact: 'app/components/Contact/Contact.jsx',
      Nav: 'app/components/Nav/Nav.jsx',
      Footer: 'app/components/Footer/Footer.jsx',
      Sketch: 'app/components/Sketch/Sketch.jsx',
      Adobe: 'app/components/Adobe/Adobe.jsx',
      Website: 'app/components/Website/Website.jsx',
      Corel: 'app/components/Corel/Corel.jsx',
      applicationStyles: 'app/styles/app.scss',

    },
    extensions: ['', '.js', '.jsx']
  },
  // because the entry file is jsx we require a loader to get it started
  // babe-loader takes our files pass them through react, get output and run them through es2015 as well
  // preset tells babel what to do
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        query : {
                presets: ['react', 'es2015']
                },
        test : /\.jsx?$/,
        exclude : /(node_modules | bower_components)/
      },
      {
       test: /\.png$/,
       loader: "url-loader?mimetype=image/png"
     }, {
       test: /\.jpg$/,
       loader: "url-loader?mimetype=image/jpg"
     }
    ]

  }
};
