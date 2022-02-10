import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { MYONLYFUN_ABI, MYONLYFUN_ADDRESS } from "./abi/MyOnlyFunABI";

let selectedAccount: any;

// let erc20Contract: Contract;
let myOnlyFunContract: Contract;

let isInitialized = false;

function setAccountAddress(userWallet: string) {
  localStorage.setItem("connected_wallet", userWallet);
}

export const init = async () => {
  // @ts-ignore
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      // @ts-ignore
      .then((accounts) => {
        selectedAccount = accounts[0];
        setAccountAddress(selectedAccount);
        console.log(`Selected account is ${selectedAccount}`);
      })
      // @ts-ignore
      .catch((err) => {
        console.log(err);
        return;
      });

    // @ts-ignore
    window.ethereum.on("accountsChanged", function (accounts) {
      selectedAccount = accounts[0];
      setAccountAddress(selectedAccount);
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }

  const web3 = new Web3(provider);

  // const networkId = await web3.eth.net.getId();

  // nftContract = new web3.eth.Contract(
  // 	NFTContractBuild.abi,
  // 	NFTContractBuild.networks[networkId].address
  // );

  // const erc20Abi = [
  //     {
  //         constant: true,
  //         inputs: [
  //             {
  //                 name: '_owner',
  //                 type: 'address'
  //             }
  //         ],
  //         name: 'balanceOf',
  //         outputs: [
  //             {
  //                 name: 'balance',
  //                 type: 'uint256'
  //             }
  //         ],
  //         payable: false,
  //         stateMutability: 'view',
  //         type: 'function'
  //     }
  // ];
  //
  // erc20Contract = new web3.eth.Contract(
  //     // @ts-ignore
  //     erc20Abi,
  //     // Dai contract on Rinkeby
  //     '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea'
  // );

  myOnlyFunContract = new web3.eth.Contract(
    // @ts-ignore
    MYONLYFUN_ABI[0].abi,
    // MYONLYFUN contract on Rinkeby
    MYONLYFUN_ADDRESS
  );

  isInitialized = true;
};

const isInit = async () => {
  if (!isInitialized) {
    await init();
  }
};

export const getMyOnlyFunAddressContract = async () => {
  await isInit();

  return myOnlyFunContract.methods.getContractAddress().call();
};

export const createInfluencerToken = async (
  name: string,
  symbol: string,
  decimals: number,
  totalSupply: number
) => {
  await isInit();

  console.log(name, symbol, decimals, totalSupply);

  const response = myOnlyFunContract.methods
    .createAndDeployOnlyFunERC20(name, symbol, decimals, totalSupply)
    .send({
      from: await selectedAccount,
      gas: 1500000,
      gasPrice: '30000000000'
    });

  console.log(response);
  return response;
};

// export const getOwnBalance = async () => {
//     await isInit();
//
//     return erc20Contract.methods
//         .balanceOf(selectedAccount)
//         .call()
//         .then((balance: any) => {
//             return Web3.utils.fromWei(balance);
//         });
// };
