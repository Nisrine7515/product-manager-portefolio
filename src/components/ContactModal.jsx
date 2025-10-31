import React, { useEffect, useRef } from "react";
import "../styles/modal.css";

export default function ContactModal({ open, onClose, onSubmitted }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (open && !dialogRef.current.open) dialogRef.current.showModal();
    if (!open && dialogRef.current.open) dialogRef.current.close();
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    console.log({ name, email, message });
    alert("Thank you for your message");
    onSubmitted?.();
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="contact-title"
      onCancel={onClose}
    >
      <form method="dialog" className="modal__closewrap">
        <button className="modal__close" aria-label="Close" onClick={onClose}>
          ×
        </button>
      </form>

      <h2 id="contact-title" className="modal__title">
        Contact me
      </h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form__row">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="form__row">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="form__row">
          <label className="form__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form__textarea"
            id="message"
            name="message"
            rows="5"
            required
          />
        </div>
        <div className="form__actions">
          <button type="submit" className="btn">
            Send
          </button>
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
}
