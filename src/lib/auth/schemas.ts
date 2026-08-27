
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Ingresa un email válido"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Esto extrae el tipo TypeScript del esquema automáticamente
export type LoginFormValues = z.infer<typeof loginSchema>;