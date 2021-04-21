import React from "react";
import ContactForm from "@/components/contactform";
import Header from "@/components/header";
export default function Contact() {
  return (
    <>
      <Header
        title="Contact | James Perkins"
        description="Contact James Perkins about anything"
      />
      <ContactForm />
    </>
  );
}
