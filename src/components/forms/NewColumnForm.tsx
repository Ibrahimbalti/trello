"use client";

import { useMutation, useStorageRoot, useRoom } from "@liveblocks/react";
import { LiveObject } from "@liveblocks/core";
import { FormEvent } from "react";
import uniqid from "uniqid";
import { LiveList } from "@liveblocks/core";

export default function NewColumnForm() {
  const room = useRoom();
  const storage = useStorageRoot();

  const addColumn = useMutation(({ storage }, columnName: string) => {
    const columns = storage.get("columns");

    if (columns instanceof LiveList) {
      const newColumn = new LiveObject({
        name: columnName,
        id: uniqid.time(),
        index: 9999,
      });

      columns.push(newColumn);
      console.log("📛 Column name:", newColumn.get("name")); // <-- this line
    } else {
      console.warn("'columns' is not a LiveList");
    }
  }, []);

  function handleNewColumn(ev: FormEvent) {
    ev.preventDefault();
    const input = (ev.target as HTMLFormElement).querySelector("input");
    if (input && storage) {
      const columnName = input.value.trim();
      if (columnName) {
        addColumn(columnName);
        input.value = "";
      }
    }
  }

  // Optionally show loading UI
  if (!storage || !room) {
    return <div>Loading...</div>;
  }
  return (
    <form onSubmit={handleNewColumn} className="flex flex-col  gap-2 w-90">
      <label className="flex flex-col">
        <span className="text-gray-600 mb-1">Column name:</span>
        <input
          type="text"
          placeholder="new column name"
          className="border border-gray-300 rounded px-2 py-2 w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 "
      >
        Create column
      </button>
    </form>
  );
}
