"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";
import ContactForm from "@/components/ContactForm";

const initialState = {
  data: {
    name: "",
    email: "",
    message: "",
    phone: "",
    profession: "",
    affiliated_institution: "",
  },
  errors: {
    name: [],
    email: [],
    message: [],
    phone: [],
    profession: [],
    affiliated_institution: [],
  },
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black">
      <h1 className="text-3xl font-bold mb-8 text-white">Contact Us</h1>
      <ContactForm
        state={state}
        formAction={formAction}
        isPending={isPending}
      />
    </div>
  );
}
