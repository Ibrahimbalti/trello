"use server";

import { liveblocksClient } from "@/lib/liveblocksClient";
import { getUserEmail } from "@/lib/userClient";
import Link from "next/link";

export default async function Boards() {
  const email = await getUserEmail();
  const { data: rooms } = await liveblocksClient.getRooms({ userId: email });
  return (
    // <BoardsTiles boards={rooms} />
    <div className="my-4 grid md:grid-cols-4 gap-2">
      {rooms.length > 0 &&
        rooms.map((room) => (
          <Link
            className="bg-gray-200 p-4 rounded-md block"
            key={room.id}
            href={`/boards/${room.id}`}
          >
            {room.metadata.boardName}
          </Link>
        ))}
    </div>
  );
}
