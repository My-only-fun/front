import { useState } from 'react';

function getWallet(): string {
    const walletString = localStorage.getItem('connected_wallet');
    if (walletString) {
        return walletString;
    }
    return '';
}

function useWallet() {
    function setWallet(userWallet: string) {
        localStorage.setItem('connected_wallet', userWallet);
    }
    const [wallet] = useState(getWallet());

    return {
        setWallet,
        wallet,
    };
}

export { getWallet, useWallet };