import React from "react";
import ContactForm from "@/components/contactform";
import { NextSeo } from "next-seo";
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
          images: [
            {
              url:
                "https://res.cloudinary.com/dub20ptvt/image/upload/c_thumb,w_200,g_face/v1618489779/me_n7quph.jpg",
            },
          ],
          site_name: "James Perkins",
        }}
        twitter={{
          handle: "@james_r_perkins",
          cardType: "summary_large_image",
        }}
      />
      <ContactForm />
    </>
  );
}
