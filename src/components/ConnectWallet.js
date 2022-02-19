import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentAccount } from '../store/modules/web3';

function ConnectWallet() {
    const currentAccount = useSelector((state) => state.web3.currentAccount);
    const dispatch = useDispatch();

    const isWalletConnected = async () => {
        const { ethereum } = window;

        // if metamask is installed, check if it is already connected
        if (ethereum) {
            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if (accounts.length !== 0) {
                const account = accounts[0];

                dispatch(setCurrentAccount(account));
            } else {
                console.log("No authorized wallet found");
            }
        }
    }

    const connectWallet = async () => {
        const { ethereum } = window;

        // try to make connection to metamask
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            dispatch(setCurrentAccount(accounts[0]));
        } catch (error) {
            console.log(error);
        }
    }

    // when component is mounted
    useEffect(() => {
        isWalletConnected();
    });

    return (
        <span>
        {
            currentAccount === "" ?
                <li className="button" onClick={connectWallet}>Connect wallet</li> :
                <li className="button lightblue">{ currentAccount }</li>
        }
        </span>
    );
}

export default ConnectWallet;