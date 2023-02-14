import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.css";
import {prisma} from "../prisma/db";
import {getSession} from "next-auth/react";
import config from "../config.json";

import '../styles/Home.module.css'
import {Welcome} from "../components/welcome";

export default function Home(props) {
    const [walletAccount, setWalletAccount] = useState('')
    const [currentChain, setCurrentChain] = useState('')
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            window.ethereum.on('accountsChanged', (accounts) => {
                console.log('accountsChanged');
                setWalletAccount(accounts[0]);
            })
            window.ethereum.on('chainChanged', (chaindId) => {
                console.log('Chain ID changed: ', chaindId)
                setCurrentChain(chaindId)
            })
        } else {
            alert("Please install MetaMask to use this app!");
        }
    }, []);

    useEffect(() => {
        window.ethereum.request({method: 'eth_accounts'}).then((accounts) => {
            if (accounts.length > 0) {
                console.log(`You're connected to: ${accounts[0]}`);
                setWalletAccount(accounts[0])
                setIsConnected(true)
            } else {
                console.log("Metamask is not connected");
            }
        }).catch((err) => {
            console.error(err)
        });
    }, [])

    // Used to see if the wallet is currently connected to the application
    // If an account has been accessed with MetaMask, then the wallet is connected to the application.
    useEffect(() => {
        setIsConnected(walletAccount ? true : false)
    }, [walletAccount])


    return (
        <div className={`${styles.container} page-header`}
             style={{
                 backgroundImage: `url(${config.discord.serverImage})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}>
            <Welcome isConnected={isConnected}
                     walletAccount={walletAccount}
                     setWalletAccount={setWalletAccount}
                     code={props.code}/>
        </div>
    )
}

export const getServerSideProps = async function (ctx) {
    const defaultProps = {
        props: {
            code: null
        }
    }
    const session = await getSession(ctx);
    if (!session) {
        return defaultProps
    }
    const {user} = session;
    if (!user) {
        return defaultProps
    }
    const {name, email, image} = user;
    if (!user.email) {
        return defaultProps
    }
    const dbUser = await prisma.user.findUnique({where: {email}})
        .catch((err) => {

        })
    if (!dbUser) {
        return defaultProps
    }
    const coupon = await prisma.coupon.findUnique({where: {userId: dbUser.id}});
    if (!coupon) {
        return defaultProps
    }
    return {props: {code: coupon.code}}
}
