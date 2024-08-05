#!/bin/bash
set -e

echo "Current directory: $(pwd)"
echo "Files in current directory:"
ls -la

echo "Node.js version:"
node --version

echo "NPM version:"
npm --version

echo "Installing dependencies..."
npm install

echo "Building the Docusaurus site..."
npm run build

echo "Files after build:"
ls -la

echo "Starting Docusaurus server..."
npm run serve -- --port $PORT --host 0.0.0.0