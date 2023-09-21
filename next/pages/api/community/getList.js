import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Comment(req, res) {
  let id = req.query.id == undefined ? { category: new ObjectId(id) } : "";

  try {
    let db = (await connectDB).db("SRH-Community");
    let result = await db
      .collection("post")
      .find(id)
      .sort({ good: -1 })
      .toArray();
    result = result.map((a) => {
      a._id = a._id.toString();
      a.category = a.category.toString();
      return a;
    });

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
}
