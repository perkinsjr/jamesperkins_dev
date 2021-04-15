import React from "react";
import ContactForm from "@/components/contactform";
import {NextSeo} from "next-seo";
export default function Contact() {
  return (
    <>
    <NextSeo
    title="Contact Page"
    description="James'Contact Page "
    openGraph={{
      url: "https://jamesperkins.dev/contact",
      title: "Contact Page",
      description: "James' Contact Page",
      images: [{ url: "https://jamesperkins.dev/me.jpg" }],
      site_name: "James Perkins",
    }}
    twitter={{
      handle: "@james_r_perkins",
      cardType: "summary_large_image",
    }}
  />
  <ContactForm />
  </>);
}
