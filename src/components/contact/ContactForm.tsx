"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm } from "@/app/actions/contact";

/** The standing chips. A service detail page can add one via ?service=. */
const BASE_CHIPS = [
  "Stewardship plan",
  "Timber sale",
  "Wildlife / food plots",
  "CRP",
  "Invasives",
  "Not sure yet",
];

const labelClass =
  "mb-[7px] block font-display text-[11.5px] uppercase tracking-[0.16em] text-body";
const inputClass =
  "w-full rounded-lg border-[2.5px] border-ink bg-cream px-3.5 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-sand focus:border-rust";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  county: "",
  acres: "",
  notes: "",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  // "Ask about this" on a service page arrives as ?service=Tree+Planting.
  const referred = searchParams.get("service");

  const [form, setForm] = useState(emptyForm);
  const [picked, setPicked] = useState<string[]>(referred ? [referred] : []);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [sentName, setSentName] = useState("");

  // Referred services aren't in the standing set, so append any extras.
  const chips = [
    ...BASE_CHIPS,
    ...picked.filter((chip) => !BASE_CHIPS.includes(chip)),
  ];

  const update =
    (key: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const toggleChip = (label: string) =>
    setPicked((prev) =>
      prev.includes(label)
        ? prev.filter((x) => x !== label)
        : [...prev, label]
    );

  const reset = () => {
    setForm(emptyForm);
    setPicked([]);
    setStatus("idle");
  };

  const handleSubmit = async () => {
    setStatus("sending");
    const land = [form.county && `${form.county} County`, form.acres && `${form.acres} ac`]
      .filter(Boolean)
      .join(" · ");

    try {
      const result = await submitContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: picked.length ? picked.join(", ") : "Not specified",
        land,
        message: form.notes,
      });
      if (result.success) {
        setSentName(form.name);
        setStatus("sent");
        setForm(emptyForm);
        setPicked([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const firstName = sentName.split(" ")[0];

  return (
    <div className="rounded-2xl border-[3px] border-ink bg-cream-3 px-6 py-8 shadow-[0_7px_0_rgba(28,21,16,.28)] sm:px-[34px]">
      {status === "sent" ? (
        <div className="px-2 py-10 text-center">
          <div className="mb-3.5 font-slab text-[30px] leading-[1.1] text-moss sm:text-[34px]">
            GOT IT.
          </div>
          <p className="mx-auto mb-6 max-w-[420px] text-[16px] leading-[1.65] text-body sm:text-[17px]">
            Thanks{firstName ? ` ${firstName}` : ""} — Perry will get back to
            you, usually the same day. If it&apos;s urgent, calling is still
            faster.
          </p>
          <button
            onClick={reset}
            className="cursor-pointer rounded-lg border-[2.5px] border-ink px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-ink hover:text-cream"
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
          <h2 className="mb-1.5 font-slab text-[24px] sm:text-[26px]">
            Send a note
          </h2>
          <p className="mb-6 text-[14.5px] text-muted">
            The more you tell us about the property, the more useful the first
            call is.
          </p>

          <div className="mb-[18px] grid gap-[18px] sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Your name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Jane Landowner"
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

          <div className="mb-[18px]">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <fieldset className="mb-[18px]">
            <legend className="mb-2.5 font-display text-[11.5px] uppercase tracking-[0.16em] text-body">
              What are you after?
            </legend>
            <div className="flex flex-wrap gap-2.5">
              {chips.map((chip) => {
                const on = picked.includes(chip);
                return (
                  <button
                    key={chip}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleChip(chip)}
                    className={`cursor-pointer rounded-full border-2 border-ink px-4 py-2 font-display text-[13px] tracking-[0.06em] transition-colors ${
                      on ? "bg-moss text-parch-2" : "bg-cream-2 text-ink"
                    }`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mb-[18px] grid gap-[18px] sm:grid-cols-2">
            <div>
              <label htmlFor="county" className={labelClass}>
                County
              </label>
              <input
                id="county"
                value={form.county}
                onChange={update("county")}
                placeholder="Effingham"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="acres" className={labelClass}>
                Roughly how many acres?
              </label>
              <input
                id="acres"
                inputMode="numeric"
                value={form.acres}
                onChange={update("acres")}
                placeholder="40"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="notes" className={labelClass}>
              Tell us about it
            </label>
            <textarea
              id="notes"
              required
              value={form.notes}
              onChange={update("notes")}
              placeholder="Grandpa's timber ground, hasn't been touched in thirty years…"
              className={`${inputClass} min-h-[110px] resize-y`}
            />
          </div>

          {status === "error" && (
            <p className="mb-4 text-sm font-semibold text-rust-dark">
              Something went wrong. Please try again, or just call
              217-259-1500.
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="cursor-pointer rounded-lg bg-rust px-8 py-4 font-display text-base font-semibold uppercase tracking-[0.08em] text-cream shadow-[0_5px_0_var(--color-rust-deep)] transition-colors hover:bg-rust-hi disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send it over"}
            </button>
            <span className="text-[13.5px] text-sand">
              Or just call. Honestly, calling is faster.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
