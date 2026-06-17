"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const topics = [
  "Forest Stewardship Plan",
  "Timber Appraisal or Sale",
  "Tree Planting",
  "Wildlife / Food Plots",
  "CRP Management",
  "Invasive Species Control",
  "Something else",
];

const labelClass =
  "mb-1.5 block text-xs font-bold uppercase tracking-[0.04em] text-[#5a5a4c]";
const inputClass =
  "w-full rounded-[4px] border border-[#d8d2c2] bg-[#faf9f4] px-[13px] py-3 text-[15px] outline-none transition-colors focus:border-forest";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  land: "",
  topic: topics[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const update =
    (key: keyof typeof emptyForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const result = await submitContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.topic,
        land: form.land,
        message: form.message,
      });
      if (result.success) {
        setStatus("sent");
        setForm(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-[6px] border border-card-line bg-white p-7 sm:p-9">
      <h2 className="mb-1.5 font-display text-[26px] font-bold">
        Request a free consultation
      </h2>
      <p className="mb-7 text-[14.5px] text-[#6a6a5a]">
        Tell us a little about your land and we&apos;ll be in touch.
      </p>

      {status === "sent" ? (
        <div className="rounded-[5px] border border-[#b9cda4] bg-[#eef3e8] p-7 text-center">
          <div className="mb-2 font-display text-[22px] font-bold text-forest">
            Thanks — we got it.
          </div>
          <p className="mb-4 text-[15px] text-bark-soft">
            Perry will reach out soon. Need an answer today? Call{" "}
            <strong>217-259-1500</strong>.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="cursor-pointer rounded-[3px] border-[1.5px] border-forest px-5 py-[11px] text-sm font-bold text-forest transition-colors hover:bg-forest hover:text-white"
          >
            Send another
          </button>
        </div>
      ) : (
        <form
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit();
        }}
      >
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={update("phone")}
                placeholder="(217) 000-0000"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="you@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="land" className={labelClass}>
                County / Acres
              </label>
              <input
                id="land"
                value={form.land}
                onChange={update("land")}
                placeholder="e.g. Effingham, 40 ac"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="topic" className={labelClass}>
              What can we help with?
            </label>
            <select
              id="topic"
              value={form.topic}
              onChange={update("topic")}
              className={inputClass}
            >
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="mb-[22px]">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us about your land and what you're hoping to do."
              className={`${inputClass} resize-y`}
            />
          </div>

          {status === "error" && (
            <p className="mb-4 text-sm font-medium text-red-700">
              Something went wrong. Please try again or call us at
              217-259-1500.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full cursor-pointer rounded-[4px] bg-forest py-[15px] text-[15px] font-bold text-white transition-[filter] hover:brightness-110 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Request"}
          </button>
          <p className="mt-3.5 text-center text-[12.5px] text-[#8a8a7a]">
            Prefer to talk? Call Perry at 217-259-1500.
          </p>
        </form>
      )}
    </div>
  );
}
