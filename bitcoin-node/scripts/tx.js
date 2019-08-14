#!/usr/bin/env node
const bsv = require('bsv')
const BitcoindRPC = require('bitcoind-rpc')

const {Transaction} = bsv
const network = 'regtest'

if (process.argv.length < 3) {
    console.error("Please supply args\n",
        "12 phrase seed\n",
        "chain type\n",
        "address index\n",
        'eg: ./tx.js "address_from" "address_to" 1.345262'
    )
}

const changeAddress = process.argv[2]
const toAddress = process.argv[3]
const amount = process.argv[4]

BitcoindRPC.generateToAddress()

/*
Transactions:  [{"hash":"52c73e49be3e07126b63d75e721aaf51923cd2329f7a353a74680c7b5a76f03e","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"017c01010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"7b34a447bbc9cb7a10f13b536e5faea5fc225bf6c682028e0c13fcbcd3a7abb2","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"017d01010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"63fa2144d815d368ea8178684fa70d85477199db4ae836de8b2e2879ac49935e","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"017e01010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"2446b2c9423813872c76c90e77427a34425db072154dc2e5abdfd2e629ddbbe9","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"017f01010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"2ad9feb32c08987fd878ca74b399a660d9a6ce54a39fc9ac0bc6b7b4fb3d185a","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"02800001010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"1aaaadc6a5156c13231e9d73425bef23f8dc571879eb2d3433a7d2dbf8bff5cb","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"02810001010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"ba77cdc1484c26a8846a07fccb66d6075f90873291c56c73564b2e59251f1ca6","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"02820001010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"8c01b00df443076733c889679dfb2b8f412e86c3f7b8440b625177bcab82daad","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"02830001010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"577d9098bba3cc82310d23bc207cff67223df5889f49251a28d923c747f53078","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"02840001010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
Transactions:  [{"hash":"80accf229a468883b65065b70fdab2bcbe5dc19f1738dadc86dbcb0b838f92f7","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"02850001010a2f4542323030302e302f"}],"outputs":[{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}],"nLockTime":0}]
               [{"hash":"1fb0a26b62fa5fdfc9daeeb5a755bfb54a961459503b797ee9c86c41f01b9b33","version":2,"inputs":[{"prevTxId":"0000000000000000000000000000000000000000000000000000000000000000","outputIndex":4294967295,"sequenceNumber":4294967295,"script":"02e90001010a2f4542323030302e302f"}],"outputs":[{"satoshis":2500000000,"script":"2102c1f2de9f9eb7da740c9a46b0d81306efd80ea8770095d7384723c57b2db173c8ac"}],"nLockTime":0}]
 */

const aTx = {
    hash: "80accf229a468883b65065b70fdab2bcbe5dc19f1738dadc86dbcb0b838f92f7",
    outputs: [{"satoshis":5000000000,"script":"76a91413f01a7701ce8c7057861f34a16c71d4c1ec19ac88ac"}]
}

const transaction = new Transaction()
transaction.from(utxo)
transaction.to(toAddress, amount)
transaction.change(changeAddress)
transaction.sign([keys])

BitcoindRPC.sendRawTransaction(transaction.serialize(), function (err, res) {
    if (err) {
        console.error('Tx error', err)
    } else {
        console.log(`Tx ${res.result} submitted to bsv`)
    }
});