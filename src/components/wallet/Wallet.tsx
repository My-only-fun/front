import React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWallet } from "../../hooks/wallet";
import web3 from "../../hooks/utils/web3";
import myonlyfun from "../../assets/config"

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const Wallet: React.FC = () => {
  const { active, account, activate, deactivate } = useWeb3React();
  const { wallet, setWallet } = useWallet();


  const address = async (e: any) => {
    e.preventDefault();

  const contractAddress = await myonlyfun.methods.getContractAddress().call();
  console.log(contractAddress);

  };
  
  async function connect() {
    try {
      await activate(injected);
      if (active && account) {
        setWallet(account);
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={address} />
      <button
        onClick={connect}
        className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
      >
        Connect to MetaMask
      </button>
      {active ? (
        <span>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span>Not connected
          {/*<b>{contractAdress}</b>*/}
        </span>

      )}
      <button
        onClick={disconnect}
        className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
      >
        Disconnect
      </button>
    </div>
  );
};

export default Wallet;
