import React from "react";
import ContactForm from "@/components/contactform";
import Head from "next/head";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | James Perkins</title>
        <meta name="robots" content="follow, index" />
        <meta content="Contact James Perkins" name="description" />
        <meta property="og:url" content={`https://jamesperkins.dev/contact`} />
        <link rel="canonical" href={`https://jamesperkins.dev/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="James Perkins" />
        <meta property="og:description" content="Contact James Perkins" />
        <meta property="og:title" content="Contact | James Perkins" />
        <meta property="og:image" content="https://res.cloudinary.com/dub20ptvt/image/upload/c_thumb,w_200,g_face/v1618489779/me_n7quph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@james_r_perkins" />
        <meta name="twitter:title" content="Contact | James Perkins" />
        <meta name="twitter:description" content="Contact James Perkins" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dub20ptvt/image/upload/c_thumb,w_200,g_face/v1618489779/me_n7quph.jpg" />
      </Head>
      <ContactForm />
    </>
  );
}
