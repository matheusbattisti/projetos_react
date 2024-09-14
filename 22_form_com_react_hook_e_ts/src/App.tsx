import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <div className="bg-zinc-100 min-h-screen w-full flex flex-col items-center gap-6 pt-8">
      <h1 className="font-bold text-3xl">React Hook Form Com TypeScript</h1>
      <Form />
    </div>
  );
};
