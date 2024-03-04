import { connectDB } from "@/util/database";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface res {
  email: string;
  password: string;
  name: string;
  grade: number;
  class: number;
  number: number;
}

export async function POST(request: Request) {
  const res = (await request.json()) as res;
  console.log(res);
  if (res) {
    try {
      let hash = await bcrypt.hash(res.password, 10);
      res.password = hash;

      const data: res = {
        email: res.email,
        password: res.password,
        name: res.name,
        grade: res.grade,
        class: res.class,
        number: res.number,
      };
      const db = (await connectDB).db("SPAM-School-Page-refactoring");
      let result = await db.collection("users").insertOne(res);
    } catch (error) {
      console.error(error);
      return new Response(`error: ${error}`, { status: 400 });
    }
  } else {
    return new Response("failed read body", { status: 404 });
  }
  return new Response("User has registered", { status: 200 });
}
