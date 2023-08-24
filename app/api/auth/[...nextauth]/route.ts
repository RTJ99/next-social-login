import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_API_KEY ?? "",
      clientSecret: process.env.TWITTER_API_KEY_SECRET ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };