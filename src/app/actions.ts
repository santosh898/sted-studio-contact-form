"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import PocketBase from "pocketbase";
import defaultsDeep from "lodash/defaultsDeep";

const pb = new PocketBase("https://direction-trade.pockethost.io");

const FormSchema = z
  .object({
    name: z.string().min(3, "Name should at least be 3 characters"),
    message: z.string().min(2, "Message should at least be 2 characters"),
    email: z.string().email("Invalid email address").or(z.literal("")),
    phone: z
      .string()
      .min(10, "Phone number should at least be 10 characters")
      .or(z.literal("")),
    profession: z.enum(["student", "freelancer", "working-professional"], {
      errorMap: () => ({ message: "Please select a valid profession" }),
    }),
    affiliated_institution: z
      .string()
      .min(2, "Please enter a valid institution name"),
  })
  .superRefine((data, ctx) => {
    if (!data.email && !data.phone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one of email or phone must be present",
        path: ["email"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one of email or phone must be present",
        path: ["phone"],
      });
    }
  });

export async function submitContactForm(
  _prevState: Record<string, unknown>,
  formData: FormData
) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    phone: formData.get("phone"),
    profession: formData.get("profession"),
    affiliated_institution: formData.get("affiliated_institution"),
  };

  const validatedFields = FormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      data: defaultsDeep(data, {
        email: "",
        phone: "",
        name: "",
        message: "",
        profession: "",
        affiliated_institution: "",
      }),
    };
  }

  await pb.collection("contact_us_sted").create(validatedFields.data);

  redirect("/thank-you");
}
