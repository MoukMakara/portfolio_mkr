"use client";

import { useState } from "react";
import { CircleAlert, CircleCheck, Send } from "lucide-react";
import { site } from "@/data/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const emptyForm = { name: "", email: "", message: "" };

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email.trim())) errors.email = "Please enter a valid email address.";
  if (!message.trim()) errors.message = "Please enter a message.";
  else if (message.trim().length < 10) errors.message = "Your message should be at least 10 characters.";
  return errors;
}

function Field({ id, label, error, multiline = false, ...props }) {
  const Control = multiline ? "textarea" : "input";
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fg">
        {label}
      </label>
      <Control
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-xl border bg-fg/[0.02] px-4 py-3 text-sm text-fg placeholder:text-subtle transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 ${
          error
            ? "border-red-400/60 focus-visible:outline-red-400"
            : "border-line-strong hover:border-fg/20 focus-visible:outline-accent"
        } ${multiline ? "min-h-36 resize-y" : ""}`}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-300">
          <CircleAlert size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

// Frontend-only: on a valid submit it opens the visitor's email client with the message pre-filled.
export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setValues(emptyForm);
  }

  if (submitted) {
    return (
      <div role="status" className="flex h-full min-h-80 flex-col items-start justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/5 p-8">
        <CircleCheck size={28} className="text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-fg">Thanks for reaching out!</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Your email app should now be open with your message ready to send. If it didn&apos;t open, you can
          email me directly at{" "}
          <a href={`mailto:${site.email}`} className="text-fg underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Field
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>
      <Field
        id="message"
        label="Message"
        multiline
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell me about the role or project…"
        required
      />
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-ai px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-shadow hover:shadow-xl hover:shadow-accent/35 sm:w-auto"
      >
        <Send size={15} aria-hidden="true" />
        Send Message
      </button>
    </form>
  );
}
