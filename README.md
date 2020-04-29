# ACS_Assist

If you haven't done so first create your package.jon file using the steps list here:
https://docs.npmjs.com/creating-a-package-json-file

Once created take the following steps to configure the package to be able to run it at a command line

Open you terminal on macOS/Linux

Change your current directory to where you want to save your project or where you already have a project located (i.e user/username/Desktop). Enter the following commands to create a new folder for the project:
mkdir yourProject
cd YourProject

open the YourProject folder in a text editor

Under  YourProject create a new folder named bin

Add a new file to the bin folder and call it index.js

Open the index.js file in your text editor and copy the following code

#!/usr/bin/env node

//Grab provided args.
const [,, ...args] = process.argv

//Print hello world provided args.
console.log (`Hello World ${args}`)


Save the index.js file

Save the package.json file to YourProject in the root of the project in your text editor. Change the main value to bin/index.js. Add a new key for bin with the following text.

"bin": {
    "hello": "./bin/index.js"
  },

Your package.json file should now look similar to:
{
  "name": “yourPackageName,
  "version": "1.0.0",
  "description": "",
  "main": "bin/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": {
    "hello": "./bin/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yourRepo.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/……..”
  },
  "homepage": "https://github.com/………”
}

You can now run your code by entering the following from the command line.
node .