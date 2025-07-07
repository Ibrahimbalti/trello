export default function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="mt-4 w-full flex gap-2 items-center justify-center uppercase text-sm text-gray-400"
      onClick={onClick}
    >
      Cancel
    </button>
  );
}
