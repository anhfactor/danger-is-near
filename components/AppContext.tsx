import React, { useState, createContext, useEffect } from 'react';
import { login, logout, initializeContract, accountBalance, tokenBalance } from "../utils/near";
import environment from "../utils/config";

const AppContext = createContext(null);

export const AppProvider = (props:any) => {
    const [account, setAccount] = useState({accountId: undefined})
    const [networkId, setNetworkId] = useState('testnet');
    const [config, setConfig] = useState();
    const [balance, setBalance] = useState({"tokenBalance": 0, "nearBalance": 0});

    useEffect(() => {
        async function fetch() {
            await initializeContract()
            // @ts-ignore
            const acc = window.walletConnection.account()
            setAccount(acc);
        }
        fetch();
    },[])

    useEffect(()=> {
        async function fetch() {
            // @ts-ignore
            if (account.connection){
            // @ts-ignore
            setNetworkId(account.connection.networkId)
            // @ts-ignore
            setConfig(environment(networkId))
            if (account.accountId) {
                const token = await tokenBalance();
                const near  = await accountBalance();
                // @ts-ignore
                setBalance({"tokenBalance": token, "nearBalance": near});
            }
            }
        }
        fetch();
      },[account])


    return (
        // @ts-ignore
        <AppContext.Provider value={{ 
            account, config, balance, 
            login, logout
         }}>
        {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;