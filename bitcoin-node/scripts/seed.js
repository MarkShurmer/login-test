#!/usr/bin/env node
const Mnemonic = require('bsv/mnemonic')

const seed = () => {
    const m = Mnemonic.fromRandom()
    return m.phrase
}

const quantity =  (process.argv.length > 2) ? process.argv[2] : 1

for(let i = 0; i < quantity; i++) {
    console.log(seed())
}