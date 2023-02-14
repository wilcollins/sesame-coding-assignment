import React from "react";

export function MetamaskLogin({setWalletAccount}) {
    // Connect the Wallet to the current selected account in MetaMask.
    // Will generate a login request for user if no account is currently connected to the application
    const handleConnectWallet = async () => {
        console.log('Connecting MetaMask...')

        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
        const account = accounts[0]

        console.log('Account: ', account)
        setWalletAccount(account)
    }
    return (
        <button className={"btn btn-primary"}
                type="button"
                onClick={handleConnectWallet}>Connect Wallet</button>
    )
}
