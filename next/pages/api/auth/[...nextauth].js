import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "556236386209-cjhb2bn5oblv25emhdfmti437jrv6an3.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GithubProvider({
      clientId: "e7d6d7dbd890450fb7fa",
      clientSecret: "1234a3e2ba6766d30d5e030ee58cd4c4caaecc8c",
    }),
    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드
      id: "credentials",
      name: "credentials",
      type: "credentials",
      credentials: {
        id: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        let db = (await connectDB).db("SRH-Community");
        let user = await db
          .collection("users")
          .findOne({ email: credentials.email });
        if (!user) {
          console.log("해당 이메일은 없음");
          return null;
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!pwcheck) {
          console.log("비번틀림");
          return null;
        }
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
  },

  callbacks: {
    //4. jwt 만들 때 실행되는 코드
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.email = user.email;
        token.user.name = user.name;
        token.user.image = user.image;
        token.user.grade = user.grade;
        token.user.class = user.class;
        token.user.number = user.number;
        token.user.tel = user.tel;
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  secret: "jh2668614",
  pages: {
    signIn: "/login",
  },

  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
