import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            "https://api.escuelajs.co/api/v1/auth/login",
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );
          // Obtener datos del usuario
          const { data: user } = await axios.get(
            "https://api.escuelajs.co/api/v1/auth/profile",
            {
              headers: { Authorization: `Bearer ${data.access_token}` },
            }
          );

          return { ...user, access_token: data.access_token };
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        //Guardamos el token y el rol
        token.access_token = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Pasar datos del token a la sesión
      session.access_token = token.access_token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
});


