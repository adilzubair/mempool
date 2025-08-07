import mempoolJS from "@mempool/mempool.js";

const init = async () => {
  
  const { bitcoin: { addresses } } = mempoolJS({
    hostname: 'mempool.space'
  });

  const address = 'bc1qx85mcrg3cm38vksg4re035nujrldgpppqnurrg';
  const addressTxsUtxo = await addresses.getAddressTxsUtxo({ address });
  console.log(addressTxsUtxo);

  const totalSats = addressTxsUtxo.reduce((sum, utxo) => sum + utxo.value, 0);
  console.log(`Total balance: ${totalSats / 1e8} BTC`);
          
};



init();