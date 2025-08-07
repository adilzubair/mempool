import mempoolJS from "@mempool/mempool.js";

const init = async () => {
  
  const { bitcoin: { addresses } } = mempoolJS({
    hostname: 'mempool.space'
  });

  const address = 'bc1qx85mcrg3cm38vksg4re035nujrldgpppqnurrg';
  const addressTxs = await addresses.getAddressTxs({ address });
  console.log(addressTxs);
          
};

init();