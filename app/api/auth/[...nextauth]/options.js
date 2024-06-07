import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log("github" + profile);
        let userRole = "Github User";
        if (profile.email == "alisherodilov519@gmail.com") {
          userRole = "admin";
        } else {
          return {
            ...profile,
            role: profile,
          };
        }
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("google" + profile);
        return {
          ...profile,
          id: profile.sub,
          role: profile,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLGE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user.role;
      return token;
    },
    async sessio({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
