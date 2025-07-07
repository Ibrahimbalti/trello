"use client";
import { deleteBoard, removeEmailFromBoard } from "@/app/actions/boardActions";

import { RoomAccesses } from "@liveblocks/node";
import { useRouter } from "next/navigation";

export default function EmailsAccessList({
  boardId,
  usersAccesses,
}: {
  boardId: string;
  usersAccesses: RoomAccesses;
}) {
  const router = useRouter();
  async function handleDelete(emailToDelete: string) {
    await removeEmailFromBoard(boardId, emailToDelete);
    router.refresh();
  }
  return (
    <div className="max-w-xs bg-red-50">
      {Object.keys(usersAccesses).map((email) => (
        <div
          key={email}
          className=" flex gap-2 my-4 items-center max-w-xs justify-between border rounded-lg pl-2"
        >
          {email}
          <button className="btn  p-1" onClick={() => handleDelete(email)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
