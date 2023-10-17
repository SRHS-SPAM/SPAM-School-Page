import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  const formattedDate = `${year}/${month}/${day};${hours}:${minutes}`;

  let image = session?.user?.image ?? "";
  let id = new ObjectId(req.query.postId);
  let data = {
    comment: req.query.comment,
    post: id,
    author: session.user.email,
    writer: session.user.name,
    parent: "",
    date: formattedDate,
    image: image ? image : "",
  };
  try {
    let db = (await connectDB).db("SRH-Community");
    let result = await db.collection("comment").insertOne(data);
    let postResult = await db
      .collection("post")
      .updateOne({ _id: id }, { $inc: { comment: 1 } });
    const uri =
      "/community/" +
      req.query.category +
      "/" +
      req.query.postId +
      "?name=" +
      encodeURIComponent(req.query.name);
    res.redirect(307, uri);
  } catch (error) {
    console.error(error);
  }
}
