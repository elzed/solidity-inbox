// To make some assertions about our deployed contract

const assert = require('assert');
const ganache = require('ganache-cli');

// Constructor function to make instances of the Web3 library
const Web3 = require('web3');

// Create an instance of Web3
// and tell it to connect to local test network
const web3 = new Web3(ganache.provider());