import { connectDB } from "@/util/database";
import bcrypt from "bcryptjs";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  console.log("asdadsdasd");

  const body: RequestBody = await request.json();

  const db = (await connectDB).db("SPAM-School-Page-refactoring");
  const user = await db.collection("users").findOne({ email: body.email });
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;

    return new Response(JSON.stringify(userWithoutPass));
  } else return new Response(JSON.stringify(null));
}
