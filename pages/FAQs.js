import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/lpage/footer";
import Faqs from "../components/Faqs/Faqs";

export default function FaqsPage() {
  return (
    <>
      <Navbar />

      <>
        <Faqs />
      </>

      <Footer />
    </>
  );
}
