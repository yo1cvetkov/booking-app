import { createFileRoute } from "@tanstack/react-router";

const Index = () => {
  return (
    <header className="py-20 bg-blue-800">
      <div className="px-4 mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-white">Find your next stay</h1>
        <p className="mt-2 text-lg text-stone-200">Serach low prices on hotels, homes and much more...</p>
      </div>
    </header>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
