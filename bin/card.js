#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.bold('Paul "Joey" Clark /'),
  'handle': chalk.green('joeytwiddle'),
  'work': chalk.bold('Javascript developer, FOSS enthusiast'),
  'twitter': chalk.blue.bold('https://twitter.com/joeytwiddle'),
  'dwitter': chalk.blue.bold('https://dwitter.com/u/joeytwiddle'),
  'github': chalk.blue.bold('https://github.com/joeytwiddle'),
  'linkedin': chalk.blue.bold('https://www.linkedin.com/in/pauljoeyclark'),
  'web': chalk.blue.bold('https://hwi.ath.cx'),
  'npx': chalk('npx joeytwiddle'),
  'labelWork': chalk('      Work:'),
  'labelTwitter': chalk('   Twitter:'),
  'labelDwitter': chalk('   Dwitter:'),
  'labelGitHub': chalk('    GitHub:'),
  'labelLinkedIn': chalk('  LinkedIn:'),
  'labelWeb': chalk('       Web:'),
  'labelCard': chalk('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var dwittering = `${data.labelDwitter}  ${data.dwitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
// var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + twittering + newline + dwittering + newline + githubing + newline + linkedining + newline + newline + carding

console.log(chalk(boxen(output, options)))
