import { z } from "zod";

export const formSchema = z
  .object({
    name: z
      .string()
      .nonempty("Campo obrigatório.")
      .min(3, "O número de mínimo de caracteres é 3."),
    lastname: z
      .string()
      .nonempty("Campo obrigatório.")
      .min(3, "O número de mínimo de caracteres é 3."),
    gender: z.string().refine((field) => field !== "select", {
      message: "Você precisa escolher um gênero.",
    }),
    email: z
      .string()
      .nonempty("Campo obrigatório.")
      .email("Utilize um e-mail válido."),
    password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres."),
    confirmpassword: z
      .string()
      .min(6, "A senha precisa ter no mínimo 6 caracteres."),
    agree: z.boolean().refine((field) => field === true, {
      message: "Você precisa concordar com os termos.",
    }),
  })
  .refine((field) => field.password === field.confirmpassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmpassword"],
  });

export type FormSchema = z.infer<typeof formSchema>;
