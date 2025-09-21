#!/bin/bash

# Clean previous build
rm -rf dist/

# Install dependencies
npm install

# Build the project
npm run build

# Create _redirects file
echo '/* /index.html 200' > dist/_redirects
