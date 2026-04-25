"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

const LEAD_MODAL_EVENT = "open-lead-capture-modal";
const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener(LEAD_MODAL_EVENT, openModal);
    return () => window.removeEventListener(LEAD_MODAL_EVENT, openModal);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const isFormValid = useMemo(() => {
    const digits = onlyDigits(phone);
    return name.trim().length > 3 && isEmailValid(email) && digits.length >= 10;
  }, [name, email, phone]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4">
      <button
        aria-label="Fechar pop-up"
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative w-full max-w-lg rounded-2xl border border-[#EAB308]/40 bg-white p-6 md:p-8 shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-zinc-500 transition-colors hover:text-[#EAB308]"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-2xl font-black text-[#111111]">Quase la!</h3>
        <p className="mt-2 text-sm text-zinc-700">
          Preencha seus dados para continuar para o checkout.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="lead-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#111111]">
              Nome completo
            </label>
            <input
              id="lead-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="h-11 w-full rounded-lg border border-[#EAB308]/40 bg-white px-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-zinc-500 focus:border-[#EAB308]"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="lead-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#111111]">
              Email
            </label>
            <input
              id="lead-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-11 w-full rounded-lg border border-[#EAB308]/40 bg-white px-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-zinc-500 focus:border-[#EAB308]"
              placeholder="voce@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="lead-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#111111]">
              Telefone
            </label>
            <input
              id="lead-phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="h-11 w-full rounded-lg border border-[#EAB308]/40 bg-white px-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-zinc-500 focus:border-[#EAB308]"
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!isFormValid}
            onClick={(event) => {
              if (!isFormValid) event.preventDefault();
            }}
            className={`mt-2 inline-flex h-12 w-full items-center justify-center rounded-full px-5 text-sm font-black uppercase tracking-wide transition-colors ${
              isFormValid
                ? "bg-[#EAB308] text-[#111111] hover:bg-[#d4a107]"
                : "cursor-not-allowed border border-[#EAB308]/30 bg-white text-zinc-500"
            }`}
          >
            Ir para o checkout
          </a>
        </form>
      </div>
    </div>
  );
}

export function openLeadCaptureModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(LEAD_MODAL_EVENT));
  }
}
