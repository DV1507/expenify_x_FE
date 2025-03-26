import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  // .min(3, { message: "Email must be at least 3 characters long" })
  // .max(10, { message: "Email is too long" })
  // .regex(/^[^@]+@[^@]+\.[^@]+$/, { message: "Invalid email format" })
  // .superRefine((email, ctx) => {
  //   const prohibitedChars = /[()<>[\]:;@\\,/" ]/;
  //   const [localPart] = email.split("@");
  //   if (
  //     prohibitedChars.test(localPart) ||
  //     localPart.startsWith(".") ||
  //     localPart.endsWith(".") ||
  //     localPart.includes("..")
  //   ) {
  //     ctx.addIssue({
  //       code: z.ZodIssueCode.custom,
  //       message: "Email ID contains prohibited characters",
  //     });
  //   }
  // }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const signupSchema = z
  .object({
    first_name: z
      .string({
        invalid_type_error: "Your first name must be a valid string.",
        required_error: "You must fill in this field.",
      })
      .min(2, "First name must be at least 2 characters.")
      .max(30, "First name must not exceed 30 characters."),

    last_name: z
      .string({
        invalid_type_error: "Your last name must be a valid string.",
        required_error: "You must fill in this field.",
      })
      .min(2, "Last name must be at least 2 characters.")
      .max(30, "Last name must not exceed 30 characters."),

    email: z
      .string({
        required_error:
          "You must fill in your email address to complete registration.",
      })
      .email({
        message: "Please provide a valid email address.",
      }),

    password: z
      .string({
        invalid_type_error: "Your password must contain at least 8 characters.",
        required_error: "You must fill in this field.",
      })
      .min(8, "Password must be at least 8 characters long."),

    confirmPassword: z.string({
      required_error: "You must fill in this field.",
    }),

    // privacyAccepted: z.literal(true, {
    //   errorMap: () => ({
    //     message: "You must accept the privacy policy.",
    //   }),
    // }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
