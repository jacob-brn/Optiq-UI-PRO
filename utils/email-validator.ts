import { z } from "zod";

const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address");

export function validateEmail(email: string) {
  try {
    emailSchema.parse(email);
    return {
      isValid: true,
      message: "Email is valid",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        message: error.errors[0].message,
      };
    }
    return {
      isValid: false,
      message: "Invalid email",
    };
  }
}
