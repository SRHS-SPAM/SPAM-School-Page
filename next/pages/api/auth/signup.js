import { connectDB } from "@/util/database";
import bcrypt from "bcryptjs";

export default async function Singup(req, res) {
  try {
    let hash = await bcrypt.hash(req.query.password, 10);
    req.query.password = hash;

    const filter = { email: req.query.email };
    const updateDoc = {
      $set: {
        password: req.query.password,
        tel: req.query.tel,
        name: req.query.name,
        grade: req.query.grade,
        class: req.query.class,
        number: req.query.number,
      },
    };
    const option = { upsert: true };

    const db = (await connectDB).db("SRH-Community");
    let result = await db
      .collection("users")
      .updateOne(filter, updateDoc, option);
    res.redirect(307, "/login");
  } catch (error) {
    console.log(error);
  }
}
