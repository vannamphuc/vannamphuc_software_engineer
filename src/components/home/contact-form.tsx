import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = async (event) => {
    if (!event) return;
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvgbewgw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to send form");
      }

      toast.success("Thanks for reaching out. I will reply soon.");
      form.reset();
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Name" htmlFor="contact-name">
        <Input id="contact-name" name="name" required placeholder="Your name" autoComplete="name" />
      </Field>

      <Field label="Email" htmlFor="contact-email">
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
        />
      </Field>

      <Field label="Subject" htmlFor="contact-subject">
        <Input id="contact-subject" name="subject" required placeholder="Subject" />
      </Field>

      <Field label="Message" htmlFor="contact-message">
        <Textarea
          id="contact-message"
          name="message"
          required
          placeholder="Write your message..."
          className="min-h-32"
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
