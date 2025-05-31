"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CustomQuotePage() {
  const [services, setServices] = useState<string[]>([]);
  const [hasBrandGuide, setHasBrandGuide] = useState<null | boolean>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const serviceOptions = [
    "Branding (logo, barevná paleta, typografie)",
    "Grafický design (šablony pro sociální sítě, příspěvky)",
    "Nastavení AI chatbotu a automatizace",
    "Integrace rezervačního systému",
    "Design webu nebo jeho obnova",
    "Nastavení / optimalizace Google Business",
    "Systém automatizace recenzí",
    "Tvorba a plánování obsahu pro sociální sítě",
    "Jiné (prosím specifikujte)"
  ];

  const handleServiceChange = (service: string) => {
    setServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add selected services as array
    formData.delete("services");
    services.forEach(service => formData.append("services", service));

    // Add brandGuide value
    if (hasBrandGuide !== null) {
      formData.set("brandGuide", hasBrandGuide ? "Ano" : "Ne");
    }

    try {
      const res = await fetch("https://formspree.io/f/xdkznjaw", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      if (res.ok) {
        router.push("/custom-quote/thank-you");
      } else {
        alert("Odeslání se nezdařilo. Zkuste to prosím znovu.");
      }
    } catch (err) {
      alert("Odeslání se nezdařilo. Zkuste to prosím znovu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-2xl mb-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center text-neutral-600 hover:text-black px-3 py-1 rounded-full"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Zpět
        </Button>
      </div>
      <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/90 backdrop-blur-sm rounded-3xl">
        <CardHeader className="text-center pt-10">
          <CardTitle className="text-3xl font-bold text-black mb-2 tracking-tighter">Formulář pro individuální nabídku</CardTitle>
          <p className="text-neutral-600 text-lg">Řekněte nám o vašem podnikání a potřebách</p>
        </CardHeader>
        <CardContent className="space-y-8 pb-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Základní informace</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName" className="text-black">Název firmy</Label>
                  <Input id="businessName" name="businessName" placeholder="Název vaší firmy" required className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div>
                  <Label htmlFor="contactName" className="text-black">Kontaktní osoba</Label>
                  <Input id="contactName" name="contactName" placeholder="Vaše jméno" required className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-black">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="vas@email.cz" required className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-black">Telefonní číslo</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+420..." className="bg-white text-black placeholder-neutral-500" />
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Detaily podnikání</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="typeOfBusiness" className="text-black">Typ podnikání</Label>
                  <Input id="typeOfBusiness" name="typeOfBusiness" placeholder="např. kadeřnictví, spa, atd." className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div>
                  <Label htmlFor="currentOnlinePresence" className="text-black">Současná online přítomnost</Label>
                  <Input id="currentOnlinePresence" name="currentOnlinePresence" placeholder="Stručně popište" className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div>
                  <Label htmlFor="websiteUrl" className="text-black">URL webu (pokud existuje)</Label>
                  <Input id="websiteUrl" name="websiteUrl" placeholder="https://vasweb.cz" className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div>
                  <Label htmlFor="instagram" className="text-black">Instagram účet</Label>
                  <Input id="instagram" name="instagram" placeholder="@vasucet" className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="otherSocials" className="text-black">Odkazy na další sociální sítě</Label>
                  <Input id="otherSocials" name="otherSocials" placeholder="Odkazy oddělené čárkou" className="bg-white text-black placeholder-neutral-500" />
                </div>
              </div>
            </div>

            {/* Services Interested In */}
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Zájem o služby</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {serviceOptions.map(option => (
                  <label key={option} className="flex items-center space-x-2 cursor-pointer">
                    <Checkbox
                      checked={services.includes(option)}
                      onCheckedChange={() => handleServiceChange(option)}
                      name="services"
                      value={option}
                    />
                    <span className="text-black text-base">{option.replace("Jiné (prosím specifikujte)", "Jiné")}</span>
                  </label>
                ))}
              </div>
              {services.includes("Jiné (prosím specifikujte)") && (
                <div className="mt-2">
                  <Input name="otherService" placeholder="Prosím specifikujte jinou službu" className="bg-white text-black placeholder-neutral-500" />
                </div>
              )}
            </div>

            {/* Project Scope & Goals */}
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Rozsah projektu a cíle</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="mainGoal" className="text-black">Jaký je váš hlavní cíl tohoto projektu?</Label>
                  <Textarea id="mainGoal" name="mainGoal" placeholder="např. přilákat více klientů, automatizovat rezervace, obnovit značku, atd." rows={2} className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div>
                  <Label htmlFor="budget" className="text-black">Předpokládaný rozpočet projektu</Label>
                  <Input id="budget" name="budget" placeholder="např. 500€-2000€ nebo nejisté" className="bg-white text-black placeholder-neutral-500" />
                </div>
                <div>
                  <Label className="text-black">Máte existující brandbook nebo brandové materiály?</Label>
                  <div className="flex items-center space-x-6 mt-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="brandGuide"
                        checked={hasBrandGuide === true}
                        onChange={() => setHasBrandGuide(true)}
                      />
                      <span className="text-black">Ano</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="brandGuide"
                        checked={hasBrandGuide === false}
                        onChange={() => setHasBrandGuide(false)}
                      />
                      <span className="text-black">Ne</span>
                    </label>
                  </div>
                  {hasBrandGuide === true && (
                    <div className="mt-2">
                      <Input name="brandGuideLink" placeholder="Nahrajte nebo sdílejte odkaz" className="bg-white text-black placeholder-neutral-500" />
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="timeline" className="text-black">Preferovaný časový harmonogram nebo termín</Label>
                  <Input id="timeline" name="timeline" placeholder="např. 2 týdny, 1 měsíc, co nejdříve" className="bg-white text-black placeholder-neutral-500" />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Další informace</h3>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Je něco dalšího, co bychom měli vědět o vašem podnikání nebo potřebách?"
                rows={3}
                className="bg-white text-black placeholder-neutral-500"
              />
            </div>

            <Button type="submit" className="w-full bg-conic-gradient-accent hover:animate-conic-rotate text-black rounded-full border-0 font-medium mt-6" disabled={isSubmitting}>
              {isSubmitting ? "Odesílání..." : "Odeslat požadavek"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 