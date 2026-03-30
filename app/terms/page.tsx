import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Khalil Jammazi's portfolio website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-[hsl(var(--muted-foreground))] mb-12">Last updated: March 2025</p>

        <div className="space-y-10 text-[hsl(var(--foreground))]">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              By accessing and using this portfolio website, you accept and agree to be bound by these
              Terms of Service. If you do not agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Intellectual Property</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              All content on this website — including text, graphics, code samples, and design — is the
              property of Khalil Jammazi unless otherwise noted. You may not reproduce, distribute, or
              create derivative works without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Use of the Contact Form</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              The contact form on this site is intended for genuine project inquiries and professional
              communication. You agree not to use it for spam, harassment, or any unlawful purpose. I
              reserve the right to ignore or block submissions that violate this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Disclaimer of Warranties</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              This website is provided "as is" without warranties of any kind. I do not guarantee that
              the site will be error-free, uninterrupted, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              To the fullest extent permitted by law, Khalil Jammazi shall not be liable for any indirect,
              incidental, or consequential damages arising out of or in connection with your use of this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Changes to These Terms</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              I may update these Terms from time to time. Continued use of the site after any changes
              constitutes your acceptance of the new terms. The date at the top of this page reflects the
              most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Contact</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              Questions about these Terms? Email{" "}
              <a
                href="mailto:khalil.jammazi366@gmail.com"
                className="text-[var(--secondary)] hover:underline"
              >
                khalil.jammazi366@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
