import {getServerSession} from "next-auth/next"
import {authOptions} from "./auth/[...nextauth]"
import {prisma} from "../../prisma/db";
import crypto from "crypto";
import config from "../../config";

export default async (req, res) => {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
        // Signed in
        const {user} = session;
        const {name, email, image} = user;

        // Check if the user has joined the Discord server with ID "123456789"
        const account = await prisma.account.findFirst({
            where: {
                userId: user.id,
                provider: "discord",
            }
        })
        const guilds = await fetch("https://discord.com/api/users/@me/guilds", {
            headers: {
                Authorization: `Bearer ${account.access_token}`
            }
        }).then(res => res.json())
        const hasJoinedServer = guilds.some(guild => guild.id === config.discord.guildId);
        if (!hasJoinedServer) {
            res.status(401).json({error: "User has not joined the server"}).end()
            return
        }

        // check if the user has redeemed a code
        // return the code if so
        // create one if not
        const dbUser = await prisma.user.findUnique({where: {email}});
        var coupon = await prisma.coupon.findUnique({where: {userId: dbUser.id}});
        if (!coupon) {
            coupon = await prisma.coupon.create({
                data: {
                    userId: dbUser.id,
                    code: crypto.randomBytes(20).toString('hex')
                }
            })
        }

        res.redirect("/");
    } else {
        // Not Signed in
        res.status(401)
    }
    res.end()
}
