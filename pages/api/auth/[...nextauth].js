import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import {PrismaAdapter} from "@next-auth/prisma-adapter";

import {prisma} from "../../../prisma/db"

const config = require('../../../config.json');
export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: config.discord.clientId,
            clientSecret: config.discord.clientSecret,
            scope: "identify email guilds",
            authorization: {
                params: {
                    scope: "identify email guilds"
                }
            }
        }),
    ]
};
export default NextAuth(authOptions);
