"use client";

import Image from "next/image";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full text-center py-20">
        <div className="flex justify-center mb-8">
          <Image src="/accent_logo.svg" alt="ACCENT Logo" width={48} height={48} className="h-12 w-auto select-none" />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-black">Děkujeme za vaši poptávku!</h1>
        <p className="text-lg text-neutral-700 mb-8">
          Vaše zpráva byla úspěšně odeslána. Ozveme se vám co nejdříve s individuální nabídkou na míru.
        </p>
        <a href="/" className="text-neutral-700 underline hover:text-black transition">Zpět na hlavní stránku</a>
      </div>
    </div>
  );
} 