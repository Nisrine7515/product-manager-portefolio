import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ContactModal from "./components/ContactModal.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home onContactClick={() => setIsContactOpen(true)} />}
        />
      </Routes>
      <Footer onContactClick={() => setIsContactOpen(true)} />

      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSubmitted={() => setIsContactOpen(false)}
      />
    </>
  );
}
