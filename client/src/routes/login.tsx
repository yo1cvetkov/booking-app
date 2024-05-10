import { createFileRoute } from "@tanstack/react-router";

const Login = () => {
  return (
    <form>
      <div>
        <input />
      </div>
    </form>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
});
