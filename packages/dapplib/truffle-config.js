require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember social install cricket bottom source'; 
let testAccounts = [
"0xe2ae8add5d463482a8ce7229b33cab694d61c2780d10445c9d2cb3b6b85eeeca",
"0x4b7bb1e92cbec344f0699867b4d5cdd0018df9dd6871f9289272afe73368b959",
"0xc8a197add1db887f2a38b487c20fe0b0c6ac2e80c4df53afa4c875171b26cc5a",
"0x2b989d10881d21529f8277a0605bf1898b62cd99d6b103297a775611f952e015",
"0x5e8cebe178a466e20dc37f879c4d9a166e4a7938e2f5706c78efbe3a83154f01",
"0x6f289c04dc3ab946b0f12ae2039a6b1024acafa83d58205987bbd9b2f3540c5f",
"0x3b7411cf6d06372c7c716064f95531952926c55a45585339523376b69c0b6869",
"0x3cb18ffa286418129606267f5e364cf1f13ef24e07bb4750713725a47ad41ccc",
"0x22213298c1c8a6a702187b2d37e6d1267c5fd3c37b2fef4d0f4dec339dda3b97",
"0x2d22e678967863576eccf024d05d3fedc53f7ac97b72d39ab89a26adddd1d43e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

