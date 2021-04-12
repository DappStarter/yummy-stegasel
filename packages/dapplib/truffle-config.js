require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'just problem forget venture strong riot night umbrella inflict clock army gasp'; 
let testAccounts = [
"0x0f44574d1b11a8a9be545e1cfd77f338cf66d2c38fdc952a19bd638bdd425268",
"0x63efbe1d23da085b1c80c10d7d473338191b6c54dd12e5d5cdf94d3b5e441b67",
"0x36d1af76c03eb39782f35e66d71cbc06f4ae85e56db39d6041076eb363833d10",
"0x6b1d3301b6a9b82e8b0be841d9c8e7014355d5a64510ac8923ce89bedd2e434c",
"0xfa11d69ad00ac85d732a1710ad626aad5a62ae9dff33997a85610d3b063727d8",
"0x6e24b04b892e75ce0ca0e126fdc95ea7028c56ad9d21bbd38db061bec3d92222",
"0x5004270336323bc224fe8fac70da2035c8f39d16d02c090fe22f1735d5c6c233",
"0x8828f16e7363920e6a04541e0385ca27ee69216a85d6c876996714bc24a12b05",
"0xad3fabb4f348c40461b99dfc61f95f0913d463f0df4c15481499794689f7d027",
"0xf96d28075de05115e61c9dfebaa622d8367a01c4d2a176dba7397066f1d8a800"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

