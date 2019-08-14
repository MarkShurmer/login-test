#!/usr/bin/env node
const bsv = require('bsv')
const Mnemonic = require('bsv/mnemonic')
const {Address} = bsv

const network = 'regtest'

const PATH_CHAIN = {
    EXTERNAL: 0, // receive
    CHANGE: 1,   // change
    FILE: 99     // bcat
}

const path = ({account, chain}) => `m/44'/236'/${account}'/${chain}`

const initRootKey = ({phrase, network}) => Mnemonic.fromString(phrase).toHDPrivateKey(null, network)

const address = ({rootKey, chain, index}) => {
    const parent = rootKey.deriveChild(path({account: '0', chain})) // m / purpose' / coin_type' / account' / chain / address_index
    const child = parent.deriveChild(index)
    return Address.fromPublicKey(child.publicKey, network).toString()
}

if (process.argv.length < 3) {
    console.error("Please supply args\n",
        "12 phrase seed\n",
        "chain type\n",
        "address index\n",
        'eg: ./address.js "account napkin ... finish" EXTERNAL 0'
    )
}

const phrase = process.argv[2]
const chain = PATH_CHAIN[process.argv[3]]
const index = parseInt(process.argv[4], 10)

const rootKey = initRootKey({phrase, network})

const a = address({rootKey, chain, index})

console.log(a)