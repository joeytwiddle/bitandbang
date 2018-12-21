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
  'name': chalk.white('Paul "Joey" Clark /'),
  'handle': chalk.yellow('joeytwiddle'),
  'work': chalk.white('Javascript Developer'),
  'twitter': chalk.cyan('https://twitter.com/joeytwiddle'),
  'dwitter': chalk.cyan('https://dwitter.com/u/joeytwiddle'),
  'github': chalk.cyan('https://github.com/joeytwiddle'),
  'linkedin': chalk.cyan('https://www.linkedin.com/in/pauljoeyclark'),
  'web': chalk.cyan('https://hwi.ath.cx'),
  'npx': chalk.white('npx joeytwiddle'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelDwitter': chalk.white.bold('   Dwitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
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

console.log(chalk.green(boxen(output, options)))
