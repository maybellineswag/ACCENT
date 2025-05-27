"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function CustomQuotePage() {
  const [services, setServices] = useState<string[]>([]);
  const [hasBrandGuide, setHasBrandGuide] = useState<null | boolean>(null);

  const serviceOptions = [
    "Branding (logo, color palette, typography)",
    "Graphic Design (social media templates, posts)",
    "AI Chatbot Setup & Automation",
    "Booking System Integration",
    "Website Design or Refresh",
    "Google Business Setup / Optimization",
    "Review Automation System",
    "Social Media Content Creation & Scheduling",
    "Other (please specify)"
  ];

  const handleServiceChange = (service: string) => {
    setServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
      <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/90 backdrop-blur-sm rounded-3xl">
        <CardHeader className="text-center pt-10">
          <CardTitle className="text-3xl font-bold text-black mb-2 tracking-tighter">Custom Quote Request Form</CardTitle>
          <p className="text-neutral-600 text-lg">Tell us about your business and needs</p>
        </CardHeader>
        <CardContent className="space-y-8 pb-10">
          {/* Basic Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Basic Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessName" className="text-black">Business Name</Label>
                <Input id="businessName" name="businessName" placeholder="Your business name" required className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div>
                <Label htmlFor="contactName" className="text-black">Contact Name</Label>
                <Input id="contactName" name="contactName" placeholder="Your name" required className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div>
                <Label htmlFor="email" className="text-black">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@email.com" required className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-black">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+420..." className="bg-white text-black placeholder-neutral-500" />
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Business Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="typeOfBusiness" className="text-black">Type of Business</Label>
                <Input id="typeOfBusiness" name="typeOfBusiness" placeholder="e.g., beauty salon, spa, etc." className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div>
                <Label htmlFor="currentOnlinePresence" className="text-black">Current Online Presence</Label>
                <Input id="currentOnlinePresence" name="currentOnlinePresence" placeholder="Describe briefly" className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div>
                <Label htmlFor="websiteUrl" className="text-black">Website URL (if any)</Label>
                <Input id="websiteUrl" name="websiteUrl" placeholder="https://yourwebsite.com" className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div>
                <Label htmlFor="instagram" className="text-black">Instagram Handle</Label>
                <Input id="instagram" name="instagram" placeholder="@yourhandle" className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="otherSocials" className="text-black">Other social media links</Label>
                <Input id="otherSocials" name="otherSocials" placeholder="Links separated by comma" className="bg-white text-black placeholder-neutral-500" />
              </div>
            </div>
          </div>

          {/* Services Interested In */}
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Services Interested In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceOptions.map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox
                    checked={services.includes(option)}
                    onCheckedChange={() => handleServiceChange(option)}
                  />
                  <span className="text-black text-base">{option.replace("Other (please specify)", "Other")}</span>
                </label>
              ))}
            </div>
            {services.includes("Other (please specify)") && (
              <div className="mt-2">
                <Input name="otherService" placeholder="Please specify other service" className="bg-white text-black placeholder-neutral-500" />
              </div>
            )}
          </div>

          {/* Project Scope & Goals */}
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Project Scope & Goals</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="mainGoal" className="text-black">What is your main goal with this project?</Label>
                <Textarea id="mainGoal" name="mainGoal" placeholder="e.g., attract more clients, automate bookings, refresh brand, etc." rows={2} className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div>
                <Label htmlFor="budget" className="text-black">Estimated budget for this project</Label>
                <Input id="budget" name="budget" placeholder="e.g., €500-€2000 or unsure" className="bg-white text-black placeholder-neutral-500" />
              </div>
              <div>
                <Label className="text-black">Do you have an existing brand style guide or assets?</Label>
                <div className="flex items-center space-x-6 mt-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="brandGuide"
                      checked={hasBrandGuide === true}
                      onChange={() => setHasBrandGuide(true)}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="brandGuide"
                      checked={hasBrandGuide === false}
                      onChange={() => setHasBrandGuide(false)}
                    />
                    <span>No</span>
                  </label>
                </div>
                {hasBrandGuide === true && (
                  <div className="mt-2">
                    <Input name="brandGuideLink" placeholder="Upload or share a link" className="bg-white text-black placeholder-neutral-500" />
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="timeline" className="text-black">Preferred timeline or deadline</Label>
                <Input id="timeline" name="timeline" placeholder="e.g., 2 weeks, 1 month, ASAP" className="bg-white text-black placeholder-neutral-500" />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight text-black">Additional Info</h3>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Is there anything else you'd like us to know about your business or needs?"
              rows={3}
              className="bg-white text-black placeholder-neutral-500"
            />
          </div>

          <Button type="submit" className="w-full bg-conic-gradient-accent hover:animate-conic-rotate text-black rounded-full border-0 font-medium mt-6">
            Submit Request
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 