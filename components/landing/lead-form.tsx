"use client";

import { ValidationError, useForm } from "@formspree/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LeadFormValues = {
  name: string;
  email: string;
  company: string;
  area: string;
  message: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

const initialValues: LeadFormValues = {
  name: "",
  email: "",
  company: "",
  area: "",
  message: "",
};

const areaOptions = [
  "Evidence zakázek v Excelu",
  "Poptávky a nabídky",
  "Realizace a stavy zakázek",
  "Předávání práce mezi lidmi",
  "Nevím, potřebuji poradit",
];

function validate(values: LeadFormValues) {
  const errors: LeadFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Vyplňte prosím jméno.";
  }

  if (!values.email.trim()) {
    errors.email = "Vyplňte prosím e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Zadejte platný e-mail.";
  }

  if (!values.company.trim()) {
    errors.company = "Vyplňte prosím firmu.";
  }

  if (!values.area.trim()) {
    errors.area = "Vyberte prosím oblast.";
  }

  return errors;
}

function inputClassName(hasError: boolean) {
  return [
    "w-full rounded-xl border px-4 py-3 text-base text-slate-900 transition outline-none",
    "placeholder:text-slate-400",
    hasError
      ? "border-rose-400 bg-rose-50 focus:border-rose-500"
      : "border-slate-300 bg-white focus:border-slate-900",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
  ].join(" ");
}

export function LeadForm() {
  const router = useRouter();
  const [state, handleFormspreeSubmit] = useForm("mnjokqvd");
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      router.push("/dekuji");
    }
  }, [router, state.succeeded]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      await handleFormspreeSubmit(event);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Odeslání se nepodařilo. Zkuste to prosím znovu.",
      );
    }
  }

  function setFieldValue(field: keyof LeadFormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  return (
    <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
          Jméno
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => setFieldValue("name", event.target.value)}
          className={inputClassName(Boolean(errors.name))}
          placeholder="Vaše jméno"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-sm text-rose-600">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => setFieldValue("email", event.target.value)}
          className={inputClassName(Boolean(errors.email))}
          placeholder="vas@email.cz"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-sm text-rose-600">
            {errors.email}
          </p>
        ) : null}
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-rose-600"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
          Firma
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => setFieldValue("company", event.target.value)}
          className={inputClassName(Boolean(errors.company))}
          placeholder="Název firmy"
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company ? (
          <p id="company-error" className="mt-2 text-sm text-rose-600">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="area" className="mb-2 block text-sm font-medium text-slate-700">
          Co dnes evidujete v Excelu?
        </label>
        <select
          id="area"
          name="area"
          value={values.area}
          onChange={(event) => setFieldValue("area", event.target.value)}
          className={inputClassName(Boolean(errors.area))}
          aria-invalid={Boolean(errors.area)}
          aria-describedby={errors.area ? "area-error" : undefined}
        >
          <option value="">Vyberte oblast</option>
          {areaOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.area ? (
          <p id="area-error" className="mt-2 text-sm text-rose-600">
            {errors.area}
          </p>
        ) : null}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Jak dnes evidence funguje? (volitelné)
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setFieldValue("message", event.target.value)}
          className={inputClassName(false)}
          placeholder="Například: zakázky máme v Excelu, nabídky v e-mailu a stav se dohledává ručně..."
        />
        <ValidationError
          prefix="Zpráva"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-rose-600"
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm leading-6 text-slate-500">
          Nezávazná konzultace (30 min)
          <br />
          Odesláním souhlasíte se zpracováním údajů za účelem zpětného kontaktování.
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          {state.submitting ? "Odesílám..." : "Domluvit krátkou konzultaci"}
        </button>
      </div>

      {submitError || state.errors?.getFormErrors().length ? (
        <p className="md:col-span-2 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {submitError || "Odeslání se nepodařilo. Zkuste to prosím znovu."}
        </p>
      ) : null}
    </form>
  );
}
