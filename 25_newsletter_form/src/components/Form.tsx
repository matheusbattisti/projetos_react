import { FormEvent, useState } from "react";
import { validate } from "../utils/validate";
import { User } from "../types/User";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(null);

    const data: User = {
      name,
      email,
      agree,
    };

    const validatedErrors = validate(data);

    if (Object.keys(validatedErrors).length > 0) {
      setErrors(validatedErrors);
      return;
    }

    console.log(data);

    setName("");
    setEmail("");
    setAgree(false);
    alert("Obrigado por se inscrever");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input
          className="rounded-lg focus:ring-0 focus:outline-none py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          type="text"
          id="name"
          value={name}
          placeholder="Insira seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && (
          <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          className="rounded-lg focus:ring-0 focus:outline-none py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          type="email"
          id="email"
          value={email}
          placeholder="Insira se melhor e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
        )}
      </div>

      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={agree}
            id="agree"
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
        {errors?.agree && (
          <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};
