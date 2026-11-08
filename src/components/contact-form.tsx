"use client";

import { useState } from "react";
import { CaretDown, PaperPlaneTilt } from "@phosphor-icons/react";
import { company } from "@/content/company";

type FormState = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  interest: "Logistics",
  message: "",
};

const interests = [
  "Logistics",
  "Construction",
  "Both",
  "Something else",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [opening, setOpening] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setOpening(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (
      form.phone.trim().length > 0 &&
      !/^[+()0-9\s-]{7,20}$/.test(form.phone.trim())
    ) {
      nextErrors.phone = "Please check the phone number.";
    }

    if (form.message.trim().length < 12) {
      nextErrors.message = "Please add a little more detail (at least 12 characters).";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const subject = `New enquiry: ${form.interest} / ${form.name.trim()}`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Organisation: ${form.organisation.trim() || "Not provided"}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      `Interest: ${form.interest}`,
      "",
      form.message.trim(),
      "",
      "Sent from the Crest Solutions Ltd website.",
    ].join("\n");

    setOpening(true);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
    "New enquiry from the Crest website",
  )}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase"
          >
            Your name <span className="text-signal-deep">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`field mt-2 ${errors.name ? "field-error" : ""}`}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-[11px] text-signal-deep">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase"
          >
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            autoComplete="organization"
            value={form.organisation}
            onChange={(event) => update("organisation", event.target.value)}
            className="field mt-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase"
          >
            Email <span className="text-signal-deep">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`field mt-2 ${errors.email ? "field-error" : ""}`}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-[11px] text-signal-deep">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase"
          >
            Phone <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`field mt-2 ${errors.phone ? "field-error" : ""}`}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-[11px] text-signal-deep">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor="interest"
          className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase"
        >
          What do you need?
        </label>
        <div className="relative mt-2">
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={(event) => update("interest", event.target.value)}
            className="field appearance-none pr-8"
          >
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
          <CaretDown
            size={14}
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-muted"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase"
        >
          Brief <span className="text-signal-deep">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
          className={`field mt-2 resize-y ${errors.message ? "field-error" : ""}`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-[11px] text-signal-deep">
            {errors.message}
          </p>
        ) : (
          <p id="message-help" className="mt-1.5 font-mono text-[9px] text-muted">
            What needs to move, what needs to stand, and when.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary">
          <PaperPlaneTilt size={15} aria-hidden="true" />
          Prepare email
        </button>
        <p className="max-w-[38ch] font-mono text-[9px] leading-relaxed text-muted">
          This opens your email app with the message ready to send. Nothing is
          stored on this website.
        </p>
      </div>

      {opening ? (
        <div
          role="status"
          className="border-l-2 border-signal bg-paper-deep px-4 py-3 text-sm text-ink"
        >
          Your email app should open now. If it does not,{" "}
          <a
            href={mailto}
            className="underline decoration-signal decoration-1 underline-offset-4"
          >
            open the email manually
          </a>{" "}
          or write to{" "}
          <a
            href={`mailto:${company.email}`}
            className="underline decoration-signal decoration-1 underline-offset-4"
          >
            {company.email}
          </a>
          .
        </div>
      ) : null}
    </form>
  );
}
