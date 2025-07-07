import React from "react";

import { ReactSortable } from "react-sortablejs";
// import { useStorage } from "@liveblocks/react";
import { Card, useMutation, useStorage } from "@/app/liveblocks.config";
import NewCardForm from "./forms/NewCardForm";
import { shallow } from "@liveblocks/core";

type ColumnProps = {
  id: number | string;
  name: string;
};

export default function Column({ id, name }: ColumnProps) {
  const columnCards = useStorage<Card[]>((root) => {
    return root.cards
      .filter((card) => card.columnId === id)
      .map((c) => ({ ...c }))
      .sort((a, b) => a.index - b.index);
  }, shallow);

  const updateCard = useMutation(({ storage }, index, updateData) => {
    const card = storage.get("cards").get(index);
    if (card) {
      for (let key in updateData) {
        card?.set(key as keyof Card, updateData[key]);
      }
    }
  }, []);

  const updateColumn = useMutation(({ storage }, id, newName) => {
    const columns = storage.get("columns");
    columns.find((c) => c.toObject().id === id)?.set("name", newName);
  }, []);

  const setTasksOrderForColumn = useMutation(
    ({ storage }, sortedCards: Card[], newColumnId) => {
      const idsOfSortedCards = sortedCards.map((c) => c.id.toString());
      const allCards: Card[] = [
        ...storage.get("cards").map((c) => c.toObject()),
      ];
      idsOfSortedCards.forEach((sortedCardId, colIndex) => {
        const cardStorageIndex = allCards.findIndex(
          (c) => c.id.toString() === sortedCardId
        );
        updateCard(cardStorageIndex, {
          columnId: newColumnId,
          index: colIndex,
        });
      });
    },
    []
  );

  return (
    <div className="w-72 bg-white shadow-sm rounded-md p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      {columnCards && columnCards.length > 0 && (
        <>
          <ReactSortable
            list={columnCards}
            setList={(items) => setTasksOrderForColumn(items, id)}
            group="cards"
            className="min-h-12"
            ghostClass="opacity-40"
          >
            {columnCards.map((card) => (
              <div
                key={card.id} // ✅ Unique key here
                className="border border-gray-200 bg-gray-50 my-2 p-4 rounded-md shadow-sm"
              >
                <span>{card.name}</span>
              </div>
            ))}
          </ReactSortable>
        </>
      )}
      <NewCardForm columnId={id} />
    </div>
  );
}
