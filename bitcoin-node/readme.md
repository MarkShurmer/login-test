# Script Commands

create a seed

    ./seed.js 


create many seeds

    ./seed.js 12
    
    
Create address from a seed

    ./address.js "account napkin cube property shiver proof interest movie math light strong finish" EXTERNAL 0
    ./address.js "endless inhale clarify soda regular option ride change diet vanish skirt noble" EXTERNAL 0


Fund wallet

    bitcoin-cli generatetoaddress 1 n3SRp56fa5RfogbwQmVa8yJ92yBiEUb1RP

                                    
Transaction (require getUTXOs from node)

    ./tx.js "n3SRp56fa5RfogbwQmVa8yJ92yBiEUb1RP" "mxnUcVd9WJHmacbXCKyuFw8MEzwre9vbcf" 1.336879
    
  
    bitcoin-cli gettransaction 0000000000000000000000000000000000000000000000000000000000000000

    bitcoin-cli gettxout e22ea7a36e68fb8b9d47f1e8180049111b1b59f46538f246d6f272433cf252af 0 true
    
    
    npm config set cafile ~/Desktop/root.crt --global
    
    bitcoin-cli generatetoaddress 1 mxnUcVd9WJHmacbXCKyuFw8MEzwre9vbcf
    
    
    bitcoin-cli gettxout 6b62736834d6393bbb834da8a905c384a65b6a1312b42de4305aaa32149a83b6 0 true


    docker-compose exec bsv bitcoin-cli generatetoaddress 1 mxnUcVd9WJHmacbXCKyuFw8MEzwre9vbcf
    
    
Demo script

User story:
As a blockchain user I want to get my UTXOs by address
So that I can do wallet tasks, for instance, check balance


Generate wallet and address offline (RDPROT-146)

    ./scripts/seed.js 1
    
    ./scripts/address.js "sauce noise slush penalty sweet diet purse fly casual same unusual patient" EXTERNAL 0


Start bsv and indexer services (RDPROT-146)

    docker-compose up -d
    

Fund wallet via address
    
    docker-compose exec bsv bitcoin-cli generatetoaddress 1 mkhEBbSqhAqWVL3yhBjrT7rCwQesYFmmrZ
    
   
Check UTXOs for address

    curl 'http://0.0.0.0:3050/api/utxo/mkhEBbSqhAqWVL3yhBjrT7rCwQesYFmmrZ' -H 'Accept: application/json' 
                               

With utxos a client can rebuild their wallet, check balance and make payments

