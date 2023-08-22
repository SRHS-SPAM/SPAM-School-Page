import { connectDB } from "@/util/database";
import bcrypt from "bcryptjs";

export default async function Singup(req, res) {
  if (req.method == "POST") {
    try {
      let hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;

      const filter = { email: req.body.email };
      const updateDoc = {
        $set: {
          password: req.body.password,
          tel: req.body.tel,
          name: req.body.name,
          grade: req.body.grade,
          class: req.body.class,
          number: req.body.number,
        },
      };
      const option = { upsert: true };

      const db = (await connectDB).db("SRH-Community");
      let result = await db
        .collection("users")
        .updateOne(filter, updateDoc, option);
      res.status(200).json({ message: "가입 성공" });
    } catch (error) {
      console.log(error);
    }
  }
}
