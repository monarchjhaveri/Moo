module.exports = {
 entry: './src/main.ts',
 output: {
   filename: './dist/bundle.js',
   path: '/'
 },
 module: {
   rules: [
     { test: /\.tsx?$/, loader: 'ts-loader' }
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 devtool: 'inline-source-map',
};