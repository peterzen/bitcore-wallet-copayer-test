var BWC = require('bitcore-wallet-client');

var client = new BWC({
    verbose: false,
    // baseUrl: 'https://insight-dev.prioritylane.net/bws/api'
    baseUrl: 'https://bws.decred.org/bws/api'
});

var walletName = 'testwallet',
    copayerName = 'alice',
    m = 2,
    n = 3,
    opts = {
        network: 'dcrdtestnet',
        singleAddress: undefined,
        walletPrivKey: undefined
    };


client.createWallet(walletName, copayerName, m, n, opts, function (err, secret) {

    console.log('createWallet', err, secret);

    // 4gFHrtUTNz9pqTkicBe7AP2k2M3zLDkpkysZ6ohSi64xCiq9MERWRdt6W12PWgEv6NjWV4V3QjZ7KT
    //                                                     secret has wrong length ^
    //
    // YGs7UXUjncBAxNTLi6DVzCAES8TTzppJMPjx5FGMEkMtFW2TChdQTFizviVEMT4yFtQvThLppxmT
    // (secret generated on https://wallet.decred.org

    try {

        client.joinWallet(secret, 'bob', {}, function () {
            console.log('joinWallet', arguments);
        });
    }

    catch(err){
        console.log(err);
    }

});


