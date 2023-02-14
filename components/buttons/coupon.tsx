import {signIn, signOut} from "next-auth/react";
import React from "react";

import styles from './Coupon.module.css'

export function Coupon({code}) {
    if (code) {
        return (
            <>
                <button type="button" className="btn btn-secondary" onClick={() => signOut()}>Sign Out</button>
                <div className={`alert alert-primary ${styles.coupon}`}>
                    Your Coupon Code is: {code}
                </div>
            </>
        )
    }
    return (
        <button className={"btn btn-secondary"}
                onClick={() => signIn(undefined, {callbackUrl: '/api/verify'})}>
            Verify
        </button>
    )
}
