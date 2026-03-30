import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Khalil Jammazi's portfolio website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-[hsl(var(--muted-foreground))] mb-12">Last updated: March 2025</p>

        <div className="space-y-10 text-[hsl(var(--foreground))]">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information I Collect</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              When you use the contact form on this website, I collect the information you provide: your
              name, email address, and the details of your message. I do not collect any data
              automatically beyond standard server logs (IP address, browser type, pages visited) which
              are retained for a maximum of 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How I Use Your Information</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              Information submitted via the contact form is used solely to respond to your inquiry. I do
              not sell, share, or rent your personal information to third parties. Your email address will
              not be added to any mailing list without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              This website uses a minimal cookie to store your preferred color theme (light or dark mode).
              This cookie does not track you across sites and contains no personally identifiable
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              This site is hosted on Vercel. Images may be served via Unsplash or jsDelivr CDN. These
              services have their own privacy policies. Contact form emails are delivered via Resend. I
              encourage you to review the privacy policies of these services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Data Retention</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              Contact form submissions are retained only as long as necessary to respond to your inquiry.
              You may request deletion of your data at any time by emailing{" "}
              <a
                href="mailto:khalil.jammazi366@gmail.com"
                className="text-[var(--secondary)] hover:underline"
              >
                khalil.jammazi366@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              For any privacy-related questions, please reach out at{" "}
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
