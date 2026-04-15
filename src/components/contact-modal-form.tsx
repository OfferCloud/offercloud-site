"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { Building2, Mail, Send } from "lucide-react";

export type ContactModalFormData = {
  source?: string;
  subject?: string;
};

type ContactModalFormContextValue = {
  isOpen: boolean;
  data: ContactModalFormData | null;
  open: (data?: ContactModalFormData) => void;
  close: () => void;
};

const ContactModalFormContext =
  createContext<ContactModalFormContextValue | null>(null);

function encodeMailto(value: string) {
  return encodeURIComponent(value).replaceAll("%20", "+");
}

export function ContactModalFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ContactModalFormData | null>(null);

  const open = useCallback((next?: ContactModalFormData) => {
    setData(next ?? null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo<ContactModalFormContextValue>(
    () => ({ isOpen, data, open, close }),
    [isOpen, data, open, close],
  );

  return (
    <ContactModalFormContext.Provider value={value}>
      {children}
    </ContactModalFormContext.Provider>
  );
}

export function useContactModalForm() {
  const ctx = useContext(ContactModalFormContext);
  if (!ctx) {
    throw new Error(
      "useContactModalForm must be used within ContactModalFormProvider",
    );
  }
  return ctx;
}

type ContactCtaButtonProps = {
  className?: string;
  children: React.ReactNode;
  data?: ContactModalFormData;
};

export function ContactCtaButton({
  className,
  children,
  data,
}: ContactCtaButtonProps) {
  const { open } = useContactModalForm();

  return (
    <button type="button" className={className} onClick={() => open(data)}>
      {children}
    </button>
  );
}

export function ContactModalForm() {
  const { isOpen, data, close } = useContactModalForm();

  const formId = useId();
  const titleId = `${formId}-title`;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const subject = useMemo(
    () => data?.subject ?? "Kontakt z oferty",
    [data?.subject],
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) return;
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }, [isOpen]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Imię i nazwisko: ${fullName}`,
      `Email: ${email}`,
      `Telefon: ${phone}`,
      data?.source ? `Źródło: ${data.source}` : null,
      "",
      "Wiadomość:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:support@offercloud.pl?subject=${encodeMailto(subject)}&body=${encodeMailto(body)}`;
    close();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100">
      <button
        type="button"
        aria-label="Zamknij formularz kontaktowy"
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={close}
      />

      <div className="relative flex h-full w-full sm:mx-auto lg:max-w-[1080px] sm:items-center sm:px-6 sm:py-10">
        <div className="relative flex h-full w-full flex-col overflow-y-auto overscroll-contain bg-zinc-950 shadow-2xl shadow-black/50 sm:h-auto sm:max-h-[calc(100vh-5rem)] sm:rounded-[2.5rem] sm:border sm:border-white/10 md:flex-row md:overflow-hidden">
          
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-sm text-zinc-200 backdrop-blur transition hover:bg-white/10 sm:right-6 sm:top-6 lg:right-8 lg:top-8"
            aria-label="Zamknij"
          >
            ✕
          </button>

          {/* Formularz */}
          <div className="flex-1 p-8 pt-16 sm:p-10 lg:p-14 md:overflow-y-auto">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Kontakt
              </p>
              <h2
                id={titleId}
                className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                Napisz do nas
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-300">
                Opisz krótko, czego potrzebujesz, a my wygenerujemy
                gotową wiadomość z Twojej poczty do{" "}
                <span className="font-medium text-white">support@offercloud.pl</span>.
              </p>
            </div>

            <form
              aria-labelledby={titleId}
              className="mt-10 grid gap-6 sm:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col gap-2 text-sm text-zinc-300 sm:col-span-1">
                Imię i nazwisko
                <input
                  required
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50 focus:bg-white/10"
                  placeholder="Jan Kowalski"
                  autoComplete="name"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-zinc-300 sm:col-span-1">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50 focus:bg-white/10"
                  placeholder="jan@firma.pl"
                  autoComplete="email"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-zinc-300 sm:col-span-2">
                Numer telefonu
                <input
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50 focus:bg-white/10"
                  placeholder="+48 600 000 000"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-zinc-300 sm:col-span-2">
                Wiadomość
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50 focus:bg-white/10"
                  placeholder="Opisz, w czym możemy Ci pomóc..."
                />
              </label>

              <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-zinc-400">
                  Po kliknięciu otworzy się Twój klient poczty.
                </p>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
                >
                  Wyślij wiadomość
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Dane firmy */}
          <aside className="w-full shrink-0 border-t border-white/10 bg-white/4 p-8 sm:p-10 md:w-80 md:border-l md:border-t-0 md:overflow-y-auto lg:w-[420px] lg:p-14 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Siedziba
              </p>
              <div className="mt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                  <Building2 className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xl font-semibold text-white">
                  OfferCloud Sp. z o.o.
                </p>
                <address className="mt-4 not-italic text-sm leading-7 text-zinc-400">
                  ul. Bukszpanowa 4/3<br />
                  20-810 Lublin, Polska
                </address>
                <p className="mt-6 text-sm leading-7 text-zinc-400">
                  NIP: <span className="text-zinc-300">9462699513</span><br />
                  KRS: <span className="text-zinc-300">0000856744</span>
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold text-white">Wsparcie</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Masz pytania techniczne lub potrzebujesz pomocy z wdrożeniem?
              </p>
              <a
                href="mailto:support@offercloud.pl"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
              >
                <Mail className="h-4 w-4" />
                support@offercloud.pl
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
