#/bin/bash
mkdir $1
cd $1
cp ../.gitignore .

npm init -y
npm install react
npm install react-dom

npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin 

npm install webpack webpack-cli
npm install babel-loader

cp ../webpack.config.js .

mkdir app
cp ../index.js app/
cp ../index.html app/
cp ../index.css app/




