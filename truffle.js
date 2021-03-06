var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "letter allow maze torch giggle cotton culture honey dream win opera egg"; // 12 word mnemonic
var provider = new HDWalletProvider(mnemonic, "https://kovan.infura.io/sv2WF26MzGmjjevuh9hX ");

module.exports = {

    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        kovan: {
            provider: function() {
                return provider;
            },
            network_id: "*"
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}


// var PrivateKeyProvider = require("truffle-privatekey-provider");
// var privateKey = "2948cdb483f925b8ac4516820277a142b3e75d5966fbae2c653b3afb84945fbe";
// var provider = new PrivateKeyProvider(privateKey, "https://kovan.infura.io/ZWef2NOidUm5XooBYqgl");
//
// module.exports = {
//     networks: {
//         development: {
//             host: "localhost",
//             port: 8545,
//             network_id: "*" // Match any network id
//         },
//         rinkeby: {
//             provider: provider,
//             // port: 8545,
//             // from: "0x00a1537d251a6a4c4effab76948899061fea47b9",
//             network_id: 42,
//             gas: 4500000,
//             gasPrice: 10000000000
//         }
//     },
//     solc: {
//         optimizer: {
//             enabled: true,
//             runs: 200
//         }
//     },
//     // https://truffle.readthedocs.io/en/beta/advanced/configuration/
//     mocha: {
//         bail: true
//     }
// };