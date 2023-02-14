import React from "react";
import styles from './MetamaskAddress.module.css'

var truncate = function (fullStr, strLen, separator) {
    if (fullStr.length <= strLen) return fullStr;

    separator = separator || '...';

    var sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2);

    return fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars);
};

export function MetamaskAddress({walletAccount}) {
    if (!walletAccount) {
        return null
    }
    return (
        <div className={`${styles.metamaskAddress} alert alert-secondary`}>
            Connected as {truncate(walletAccount, 14, "...")}
        </div>
    )
}
