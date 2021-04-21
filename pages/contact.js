import React from "react";
import ContactForm from "@/components/contactform";
import Seo from "@/components/seo";
export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | James Perkins"
        description="Contact James Perkins about anything"
      />
      <ContactForm />
    </>
  );
}
