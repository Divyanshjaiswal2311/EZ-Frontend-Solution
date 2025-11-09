import React, { useState } from "react";

const endpoint = "https://vernanbackend.ezlab.in/api/contact-us/";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function validate() {
    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        const data = await res.json();
        setError(data?.message || "There was a problem submitting the form.");
      }
    } catch (err) {
      setError("Unable to connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="html-bg-main position-relative"
      style={{ minHeight: "100vh" }}
    >
      <div className="form-bg-blur-shape form-bg-blur-blue"></div>
      <div className="form-bg-blur-shape form-bg-blur-yellow"></div>
      <div className="form-bg-blur-shape form-bg-blur-pink"></div>
      <div
        className="container my-5"
        style={{ maxWidth: "950px", position: "relative", zIndex: 2 }}
      >
        <div
          className="card border-0 shadow-lg overflow-hidden contact-form-fg-card"
          style={{
            borderRadius: "1.4rem",
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(235,243,255,0.93))",
          }}
        >
          <div className="row g-0">
            <div
              className="col-lg-5 d-flex flex-column justify-content-center align-items-start text-white p-5"
              style={{
                background: "linear-gradient(145deg, #3854a5 30%, #4ba3fa 90%)",
                minHeight: "100%",
                borderTopLeftRadius: "1.4rem",
                borderBottomLeftRadius: "1.4rem",
              }}
            >
              <p className="mb-0" style={{ opacity: 0.95, lineHeight: 1.5 }}>
                Ready to unlock smarter business support? Fill the form and our
                experts will respond in minutes.
              </p>
            </div>
            <div className="col-lg-7 p-5 bg-white">
              {submitted ? (
                <div className="alert alert-success text-center mb-4">
                  ✅ Form Submitted Successfully!
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h4 className="fw-semibold mb-4 text-center text-primary">
                    Contact Us
                  </h4>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      id="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      disabled={loading}
                      required
                    />
                    <label htmlFor="name">
                      <i className="bi bi-person-fill me-2 text-primary"></i>
                      Your Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control shadow-sm"
                      id="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      disabled={loading}
                      required
                    />
                    <label htmlFor="email">
                      <i className="bi bi-envelope-fill me-2 text-primary"></i>
                      Your Email
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control shadow-sm"
                      id="phone"
                      placeholder="Your Phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      disabled={loading}
                      required
                    />
                    <label htmlFor="phone">
                      <i className="bi bi-telephone-fill me-2 text-primary"></i>
                      Your Phone
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control shadow-sm"
                      id="message"
                      placeholder="Message"
                      rows={4}
                      style={{ height: "130px", resize: "none" }}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      disabled={loading}
                      required
                    ></textarea>
                    <label htmlFor="message">
                      <i className="bi bi-chat-dots-fill me-2 text-primary"></i>
                      Your Message
                    </label>
                  </div>
                  {error && (
                    <div className="alert alert-danger py-2 mb-3">{error}</div>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 fs-5 rounded-pill shadow-sm"
                    disabled={loading}
                    style={{
                      background:
                        "linear-gradient(90deg, #3854a5, #4ba3fa 90%)",
                      border: "none",
                      transition: "0.3s ease-in-out",
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
