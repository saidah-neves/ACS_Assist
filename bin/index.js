#!/usr/bin/env node

//console.log( "Hello World!" );

//Grab provided args.
const [,, ...args] = process.argv

//Print hello world provided args.
console.log (`Hello World ${args}`)