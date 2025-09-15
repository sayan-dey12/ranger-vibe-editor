import {NextAuthConfig} from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

export default{
  providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig