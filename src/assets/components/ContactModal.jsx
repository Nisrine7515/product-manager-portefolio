import "./ContactModal.css";

export default function ContactModal({ open, onClose, onSubmit }) {
  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit ? onSubmit(e) : alert("Message send!");
    onClose();
  };

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Contact form</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name :
            <input type="text" name="name" required />
          </label>

          <label>
            Email :
            <input type="email" name="email" required />
          </label>

          <label>
            Message :
            <textarea name="message" required />
          </label>

          <div className="modal-buttons">
            <button type="submit">Send</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
