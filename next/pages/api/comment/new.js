import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Comment(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method == "POST") {
    const date = new Date();

    const year = date.getFullYear().toString().slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);

    const formattedDate = `${day}/${month}/${year};${hours}:${minutes}`;
    req.body = JSON.parse(req.body);

    let image = session?.user?.image ?? "";
    let id = new ObjectId(req.body._id);
    let data = {
      comment: req.body.comment,
      post: id,
      author: session.user.email,
      writer: session.user.name,
      parent: "",
      date: formattedDate,
      image: image,
    };
    try {
      let db = (await connectDB).db("SRH-Community");
      let result = await db.collection("comment").insertOne(data);
      let postResult = await db
        .collection("post")
        .updateOne({ _id: id }, { $inc: { comment: 1 } });
      res.status(200).json("저장완료");
    } catch (error) {
      console.error(error);
    }
  }
}
