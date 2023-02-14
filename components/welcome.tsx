import {MetamaskAddress} from "./metamask/MetamaskAddress";
import {MetamaskLogin} from "./metamask/MetamaskLogin";
import {JoinDiscord} from "./buttons/discord";
import {Coupon} from "./buttons/coupon";
import React from "react";
import config from "../config.json";

export function Welcome({code, isConnected, walletAccount, setWalletAccount}) {
    const metamaskLogin = (
        <MetamaskLogin setWalletAccount={setWalletAccount}/>
    )
    const metamaskAddress = (
        <MetamaskAddress walletAccount={walletAccount}/>
    )

    return (
        <>
            {
                isConnected ? metamaskAddress : null
            }
            <div className="jumbotron" style={{textAlign: "center"}}>
                <h1 className={"display-4"}>{config.discord.serverName}</h1>
                {isConnected ? null : metamaskLogin}
                <span style={{display: "inline-block"}}>
                    {isConnected ?
                        <><JoinDiscord/> <Coupon code={code}/> </>
                        : null
                    }
                </span>
            </div>
        </>
    )
}
