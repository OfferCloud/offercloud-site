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

    window.location.href = `mailto:hello@offercloud.app?subject=${encodeMailto(subject)}&body=${encodeMailto(body)}`;
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

      <div className="relative flex h-full w-full sm:mx-auto sm:max-w-3xl sm:items-center sm:px-6 sm:py-10">
        <div className="h-full w-full overflow-y-auto overscroll-contain border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50 sm:h-auto sm:max-h-[calc(100vh-5rem)] sm:rounded-[2.5rem] sm:border-white/10">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-white/10 bg-zinc-950/90 px-8 py-6 backdrop-blur">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Kontakt
              </p>
              <h2
                id={titleId}
                className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Napisz do nas
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Wyślemy wiadomość z Twojej poczty do{" "}
                <span className="font-medium text-white">
                  hello@offercloud.app
                </span>
                .
              </p>
            </div>

            <button
              type="button"
              onClick={close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-zinc-200 transition hover:bg-white/10"
              aria-label="Zamknij"
            >
              ✕
            </button>
          </div>

          <form
            aria-labelledby={titleId}
            className="grid gap-5 px-8 py-8 md:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Imię i nazwisko
              <input
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50"
                placeholder="Jan Kowalski"
                autoComplete="name"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50"
                placeholder="jan@firma.pl"
                autoComplete="email"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Numer telefonu
              <input
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50"
                placeholder="+48 600 000 000"
                autoComplete="tel"
                inputMode="tel"
              />
            </label>

            <label className="md:col-span-2 flex flex-col gap-2 text-sm text-zinc-300">
              Wiadomość
              <textarea
                required
                rows={7}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="rounded-3xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50"
                placeholder="Napisz, czego potrzebujesz."
              />
            </label>

            <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-zinc-400">
                Po kliknięciu otworzy się Twój klient poczty z gotową
                wiadomością.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
              >
                Wyślij wiadomość
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
