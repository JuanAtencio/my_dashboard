import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    name: string;
    email: string;
    role: string;
    avatar: string;
    access_token?: string;
  }

  interface Session {
    access_token?: string;
    user: {
      name?: string;
      email?: string;
      role: string;
      avatar?: string;
    };
  }

  interface JWT {
    access_token?: string;
    role?: string;
    avatar?: string;
    name?: string;
    email?: string;
  }
}
