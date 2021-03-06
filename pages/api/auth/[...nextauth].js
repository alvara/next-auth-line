import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";

export default NextAuth({
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
    }),
  ],
});
