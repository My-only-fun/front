import React, {useState} from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { getMyOnlyFunAdressContract } from "../../Web3Client";
import { useAccountAddress } from "../../hooks/accountAddress";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const Wallet: React.FC = () => {
  const { accountAddress } = useAccountAddress();
  const [message, setMessage] = useState('');


  const fetchBalance = () => {
    getMyOnlyFunAdressContract().then(contract => {
        setMessage(contract);
    });
  };
  

  return (
    <div className="flex flex-col items-center justify-center">
      <button className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800" onClick={fetchBalance} >Call Smart contract and getAddress</button>
      <p>{message}</p>
      {accountAddress !== 'undefined' ? (
        <span>
          Connected with <b>{accountAddress}</b>
        </span>
      ) : (
        <span>Not connected
          {/*<b>{contractAdress}</b>*/}
        </span>

      )}
      {/*<button*/}
      {/*  onClick={disconnect}*/}
      {/*  className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"*/}
      {/*>*/}
      {/*  Disconnect*/}
      {/*</button>*/}
    </div>
  );
};

export default Wallet;
