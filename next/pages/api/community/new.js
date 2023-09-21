import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data;
    let session = await getServerSession(req, res, authOptions);

    console.log(req.body);
    data = {
      title: req.body.title,
      content: req.body.content,
      good: 0,
      comment: 0,
      date: "",
      views: 0,
      writer: session.user.name,
      author: session.user.email,
      theme: 1,
      bad: 0,
      number,
    };
    if (req.body.title == "") {
      res.status(500).json("please insert title");
    }
    res.json(data);
    // try {
    //   const db = (await connectDB).db("forum");
    //   let result = await db.collection("post").insertOne(req.body);
    //   res.redirect(302, "/list");
    // } catch (error) {
    //   res.status(500).json("error: database error");
    // }
  }
}
