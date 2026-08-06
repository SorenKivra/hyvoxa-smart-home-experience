import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Privacy Policy | Hyvoxa Home Automation";
const DESC =
  "How Hyvoxa collects, uses, stores and protects personal data from website visitors, enquirers and clients, and the rights you hold over that data.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      updated="1 July 2026"
      intro="Hyvoxa (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what personal information we collect, why we collect it, how we use and protect it, and the choices available to you. It applies to this website and to the design, installation and support services we provide."
      sections={[
        {
          heading: "1. Who we are",
          paragraphs: [
            "Hyvoxa is a home automation design, installation and support practice. For the purposes of data protection law we act as the data controller for personal information collected through this website and through our client relationships.",
            "You can contact us about any privacy matter at hyvoxa@gmail.com. We aim to respond to all privacy enquiries within five working days and, in any case, within the statutory period that applies to your request.",
          ],
        },
        {
          heading: "2. Information we collect",
          paragraphs: [
            "We deliberately collect as little personal information as possible. We do not operate a contact form on this website, so the data we hold generally arrives because you chose to email us.",
          ],
          bullets: [
            "Information you send us directly: your name, email address, telephone number if you provide it, property address, and any details, photographs or drawings you include in your correspondence.",
            "Project information: survey notes, measurements, equipment schedules, network configuration and system documentation created while designing, installing or supporting your system.",
            "Technical information: your IP address, browser type, device type, operating system, referring page and pages viewed, collected in aggregate to keep the site secure and understand which content is useful.",
            "Support information: correspondence, diagnostic logs and service records generated when you contact us for help with a system we have installed.",
          ],
        },
        {
          heading: "3. Why we use your information",
          bullets: [
            "To respond to your enquiry and provide the information or quotation you requested.",
            "To perform a contract with you: designing, supplying, installing, commissioning and supporting your system.",
            "To meet our legal obligations, including tax, accounting, electrical safety and consumer protection requirements.",
            "For our legitimate interests in operating and improving our business, including maintaining service records, protecting our systems from misuse and understanding how our website is used.",
            "To send you occasional service updates or, where you have asked for them, articles from our blog. You can stop these at any time.",
          ],
        },
        {
          heading: "4. Legal bases for processing",
          paragraphs: [
            "Where data protection law requires a legal basis, we rely on one or more of the following: your consent, the performance of a contract with you, compliance with a legal obligation, or our legitimate interests where those interests are not overridden by your rights and freedoms.",
            "Where we rely on consent, you may withdraw it at any time by emailing hyvoxa@gmail.com. Withdrawal does not affect processing carried out before the withdrawal.",
          ],
        },
        {
          heading: "5. Sharing your information",
          paragraphs: [
            "We do not sell personal information, and we do not share it for advertising purposes. We share information only where it is necessary to deliver our service or where the law requires it.",
          ],
          bullets: [
            "Manufacturers and suppliers, where equipment registration, warranty processing or technical escalation requires it.",
            "Trusted subcontracted trades, such as electrical or building partners, limited to the information they need to complete their portion of work on your property.",
            "Professional advisers, including accountants, insurers and legal advisers, who are bound by confidentiality obligations.",
            "Regulators, law enforcement and courts where we are legally required to disclose information.",
          ],
        },
        {
          heading: "6. Security of client systems",
          paragraphs: [
            "Security work carries a special responsibility. Where we hold credentials, network configuration or camera access relating to a client property, that information is stored encrypted, access is restricted to named engineers assigned to your project, and access is logged.",
            "We do not retain live access to client systems after handover unless you have a support agreement that expressly includes remote diagnostics, and you can revoke that access yourself at any time.",
          ],
        },
        {
          heading: "7. How long we keep information",
          paragraphs: [
            "Enquiries that do not become projects are deleted within twenty-four months. Project records, drawings and commissioning documentation are retained for the life of the installed system plus a further seven years, because they are frequently needed for warranty, insurance and safety purposes. Financial records are retained for the period required by tax law.",
          ],
        },
        {
          heading: "8. Your rights",
          bullets: [
            "The right to be informed about how your data is used, which this policy provides.",
            "The right of access to a copy of the personal information we hold about you.",
            "The right to rectification of inaccurate or incomplete information.",
            "The right to erasure of your information where we have no continuing lawful reason to hold it.",
            "The right to restrict or object to certain processing, including any direct marketing.",
            "The right to data portability, where processing is based on consent or contract and carried out by automated means.",
            "The right to lodge a complaint with your local data protection supervisory authority.",
          ],
        },
        {
          heading: "9. International transfers",
          paragraphs: [
            "Some of the service providers we use to host this website or deliver email may process data outside your country of residence. Where that occurs, we take reasonable steps to ensure an appropriate level of protection, including relying on standard contractual clauses or equivalent safeguards.",
          ],
        },
        {
          heading: "10. Children",
          paragraphs: [
            "Our services are directed at adult property owners. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us and we will delete it.",
          ],
        },
        {
          heading: "11. Changes to this policy",
          paragraphs: [
            "We may update this policy to reflect changes in our practices or in the law. The date at the top of this page shows when it was last revised. Material changes affecting existing clients will be communicated directly.",
          ],
        },
        {
          heading: "12. Contact",
          paragraphs: [
            "For any question about this policy, or to exercise any of the rights described above, email hyvoxa@gmail.com with the subject line 'Privacy request'.",
          ],
        },
      ]}
    />
  ),
});
