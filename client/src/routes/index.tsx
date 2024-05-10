import { createFileRoute } from "@tanstack/react-router";

const Index = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container px-4">
        <h1 className="text-4xl font-bold text-white">Find your next stay</h1>
        <p className="mt-2 text-lg text-stone-200">Serach low prices on hotels, homes and much more...</p>
      </div>
    </section>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
