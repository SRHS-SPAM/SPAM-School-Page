import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function mypage() {
  let session = await getServerSession(authOptions);
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          Name: {session.user.name} <br />
          Name: {session.user.image} <br />
        </>
      )}
    </>
  );
}
