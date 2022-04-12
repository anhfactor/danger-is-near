import React, { useState, createContext, useEffect, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import { login, logout, initializeContract, accountBalance, tokenBalance } from "../utils/near";
import environment from "../utils/config";



const AppContext = createContext(null);

export const AppProvider = (props) => {
    const [account, setAccount] = useState({accountId: undefined})
    const [networkId, setNetworkId] = useState('testnet');
    const [config, setConfig] = useState();
    const [balance, setBalance] = useState({"tokenBalance": 0, "nearBalance": 0});

    useEffect(() => {
        async function fetch() {
            await initializeContract()
            const acc = window.walletConnection.account()
            setAccount(acc);
        }
        fetch();
    },[])

    useEffect(()=> {
        async function fetch() {
            if (account.connection){
            setNetworkId(account.connection.networkId)
            setConfig(environment(networkId))
            if (account.accountId) {
                const token = await tokenBalance();
                const near  = await accountBalance();
                setBalance({"tokenBalance": token, "nearBalance": near});
            }
            }
        }
        fetch();
      },[account])


    return (
        <AppContext.Provider value={{ 
            account, config, balance, 
            login, logout
         }}>
        {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;