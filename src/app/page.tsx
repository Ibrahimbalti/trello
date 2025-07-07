import Board from "@/components/Board";
import Boards from "@/components/Boards";
import LoginView from "@/components/views/LoginView";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <LoginView />;
  }

  return (
    <div>
      <h1 className="text-4xl">Your boards</h1>
      <Boards />
      <div className="pt-4">
        <Link className="btn primary" href={`/new-board`}>
          Create new board
        </Link>
      </div>
      {/* <Board /> */}
    </div>
  );
}
