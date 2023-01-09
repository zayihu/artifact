const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require("path");

module.exports = {
  entry: {
    shared: ['react', 'react-dom', 'redux', 'react-redux'],
    background: {
      import: './src/background/index.ts'
    },
    sidebar: {
      import: './src/views/sidebar.tsx',
      dependOn: 'shared'
    },
    settings: {
      import: './src/views/settings.tsx',
      dependOn: 'shared'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Artifact - Sidebar',
      template: './src/static/template.html',
      filename: 'sidebar.html',
      chunks: ['shared', 'sidebar']
    }),
    new HtmlWebpackPlugin({
      title: 'Artifact - Settings',
      template: './src/static/template.html',
      filename: 'settings.html',
      chunks: ['shared', 'settings']
    }),
    new CopyPlugin({
      patterns: [
        './src/static/manifest.json',
        './src/static/logo.png'
      ]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: '[name].js'
  }
}
