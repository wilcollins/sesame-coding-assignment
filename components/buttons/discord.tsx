import useConfig from "../hooks/useConfig";
import React from "react";

export function JoinDiscord() {
    const {discord} = useConfig()
    return (
        <a href={discord.joinUrl} target="_blank">
            <button type="button" className="btn btn-primary">Join Discord</button>
        </a>
    )
}
