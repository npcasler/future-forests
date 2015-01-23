#!/bin/bash

echo "Beginning build"

grunt --force
cp app/scripts/GoogleEarthStartup.js dist/scripts/

echo "Copying files to server"

scp -r dist dguaderr@192.81.135.213:/www/docs/

echo "Build process finished"
