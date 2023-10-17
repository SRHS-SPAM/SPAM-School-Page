import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(req, res) {
  let date = new Date();
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let session = await getServerSession(req, res, authOptions);

  let formattedDate = `${year}/${month}/${day};${hours}:${minutes}`;

  try {
    let db = (await connectDB).db("SRH-Community");
    const lastDocument = await db
      .collection("post")
      .findOne({}, { sort: { number: -1 } });

    let data = {
      title: req.query.title,
      content: req.query.content,
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
      category: new ObjectId(req.query.category),
      liker: [],
    };

    let result = await db.collection("post").insertOne(data);
    res.redirect(307, "/community/" + req.query.category);
  } catch (error) {
    console.error(error);
  }
}
