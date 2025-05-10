import * as z from "zod";

// Example common passwords list — extend as needed or fetch from backend
const commonPasswords = [
  "password",
  "12345678",
  "qwerty",
  "123456789",
  "123456",
  "111111",
  "123123",
  "abc123",
];

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .max(150, "Username must be 150 characters or fewer")
      .regex(/^[\w.@+-]+$/, "Username can only contain letters, digits and @/./+/-/_"),

    password: z
      .string()
      .min(8, "This password is too short. It must contain at least 8 characters.")
      .refine(
        (val) => !commonPasswords.includes(val),
        { message: "This password is too common." }
      )
      .refine(
        (val) => !/^\d+$/.test(val),
        { message: "This password is entirely numeric." }
      )
      .describe("writeOnly"),

    password2: z
      .string()
      .min(1, "Password confirmation is required")
      .describe("writeOnly"),

    email: z
      .string()
      .email("Invalid email address")
      .max(254, "Email must be 254 characters or fewer")
      .optional(),

    first_name: z
      .string()
      .max(150, "First name must be 150 characters or fewer")
      .optional(),

    last_name: z
      .string()
      .max(150, "Last name must be 150 characters or fewer")
      .optional(),

    phone_number: z
      .string()
      .max(15, "Phone number must be 15 characters or fewer")
      .optional(),

    user_type: z
      .enum(["client", "mentor", "admin"], {
        errorMap: () => ({ message: "Invalid user type" }),
      }),

    profile_picture: z
      .string()
      .nullable()
      .optional(),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords don't match",
    path: ["password2"],
  });
