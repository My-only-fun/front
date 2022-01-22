import { useState } from 'react';

function getAccountAddress(): string {
    const accountAddressString = localStorage.getItem('connected_wallet');
    if (accountAddressString) {
        return accountAddressString;
    }
    return '';
}

function useAccountAddress() {
    function setAccountAddress(userWallet: string) {
        localStorage.setItem('connected_wallet', userWallet);
    }
    const [accountAddress] = useState(getAccountAddress());

    return {
        setAccountAddress,
        accountAddress,
    };
}

export { getAccountAddress, useAccountAddress };