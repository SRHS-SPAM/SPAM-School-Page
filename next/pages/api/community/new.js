import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data;
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let session = await getServerSession(req, res, authOptions);

    let formattedDate = `${year}/${month}/${day};${hours}:${minutes}`;

    if (req.body.title == "") {
      res.status(500).json("please insert title").redirect("/writing");
    }
    if (req.body.content == "") {
      res.status(500).json("please insert content").redirect("/writing");
    }
    if (req.body.category == "1") {
      res.status(500).json("please insert category").redirect("/writing");
    }

    try {
      let db = (await connectDB).db("SRH-Community");
      const lastDocument = await db
        .collection("post")
        .findOne({}, { sort: { number: -1 } });

      data = {
        title: req.body.title,
        content: req.body.content,
        good: 0,
        comment: 0,
        date: formattedDate,
        views: 0,
        writer: session.user.name,
        author: session.user.email,
        theme: 1,
        bad: 0,
        number: lastDocument ? lastDocument.number + 1 : 1,
        image: session.user.image,
        category: new ObjectId(req.body.category),
      };

      let result = await db.collection("post").insertOne(data);

      return res.status(200).redirect("/");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
