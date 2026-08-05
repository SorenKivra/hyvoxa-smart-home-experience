import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Terms of Service | Hyvoxa Home Automation";
const DESC =
  "The terms governing use of the Hyvoxa website and the supply of our home automation design, installation, programming and support services.";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/terms-of-service" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: () => (
    <LegalPage
      title="Terms of Service"
      updated="1 July 2026"
      intro="These terms govern your use of the Hyvoxa website and, where applicable, the supply of our services. By using this site you accept these terms. Where we agree a written proposal or contract with you, that document takes precedence over anything stated here."
      sections={[
        {
          heading: "1. About these terms",
          paragraphs: [
            "These terms form an agreement between you and Hyvoxa regarding your use of this website and any enquiry you make through it. They do not limit any statutory rights you have as a consumer.",
            "If you do not agree with these terms, please do not use the website.",
          ],
        },
        {
          heading: "2. Use of the website",
          bullets: [
            "You may view, download and print pages from this site for your own personal or internal business use.",
            "You may not republish, sell, rent, sub-licence or commercially exploit material from this site without our written permission.",
            "You may not use this site in any way that causes, or may cause, damage to the site or impairment of its availability.",
            "You may not use automated systems to extract data from this site for the purpose of building a competing service or dataset.",
            "You may not use this site in connection with any unlawful, fraudulent or harmful activity.",
          ],
        },
        {
          heading: "3. Enquiries and quotations",
          paragraphs: [
            "Information on this website, including descriptions of services and any indicative figures, is provided for general guidance and does not constitute a binding offer. Pricing, scope and timescales are confirmed only in a written proposal issued to you after a survey or consultation.",
            "Quotations remain valid for thirty days unless stated otherwise, and are subject to survey where a proposal has been prepared remotely. Where site conditions differ materially from those assumed, we will notify you in writing before proceeding with additional work.",
          ],
        },
        {
          heading: "4. Supply of services",
          bullets: [
            "We will perform our services with reasonable care and skill, and in accordance with applicable regulations and manufacturer requirements.",
            "You are responsible for providing safe access to the property, adequate power, and any permissions required from landlords, freeholders, management companies or planning authorities.",
            "Programme dates are estimates given in good faith and may be affected by third-party trades, supply chain delays or site readiness outside our control.",
            "Where existing infrastructure, wiring or building fabric is found to be unsuitable or unsafe, we will inform you and agree a revised approach before continuing.",
          ],
        },
        {
          heading: "5. Payment",
          paragraphs: [
            "Unless agreed otherwise in writing, projects are invoiced in stages: a deposit on acceptance, an equipment payment prior to procurement, and a final balance on completion of commissioning. Payment terms are stated on each invoice.",
            "Title to supplied equipment passes to you upon receipt of payment in full. Risk passes on delivery to the property. We reserve the right to charge statutory interest on overdue amounts.",
          ],
        },
        {
          heading: "6. Warranties and support",
          paragraphs: [
            "Our workmanship is warranted for twelve months from the date of practical completion. Equipment carries the warranty offered by its manufacturer, which we will administer on your behalf during the workmanship warranty period.",
            "Warranty does not cover damage caused by misuse, unauthorised modification, third-party alterations, power surges, water ingress, or changes made by other contractors to cabling or network infrastructure we installed.",
          ],
        },
        {
          heading: "7. Third-party services and platforms",
          paragraphs: [
            "Some functionality depends on third-party manufacturers, cloud platforms, streaming providers or internet service providers. We design systems to run their core logic locally to reduce this dependence, but we cannot guarantee the continued availability, pricing or feature set of any third-party service.",
            "Where a manufacturer discontinues a product or service, we will advise you on the most economical replacement path. Any resulting works are chargeable unless covered by warranty.",
          ],
        },
        {
          heading: "8. Cancellation",
          paragraphs: [
            "Consumers may have a statutory right to cancel within fourteen days of entering a contract concluded off-premises or at a distance. Where you request that work begins during that period and then cancel, we may charge for the work performed and for bespoke or specially ordered items.",
            "Cancellations after equipment has been procured are subject to supplier restocking terms, which we will pass on at cost and evidence to you.",
          ],
        },
        {
          heading: "9. Intellectual property",
          paragraphs: [
            "All content on this website, including text, imagery, layout and code, is owned by or licensed to Hyvoxa and is protected by intellectual property law.",
            "Design documentation prepared for your project — drawings, schedules and programming — is licensed to you for use in relation to the property for which it was prepared. You may share it with future contractors working on that property.",
          ],
        },
        {
          heading: "10. Limitation of liability",
          paragraphs: [
            "Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, for fraud, or for any liability that cannot lawfully be excluded.",
            "Subject to that, our total liability arising out of or in connection with a project is limited to the total contract value paid by you. We are not liable for indirect or consequential loss, loss of profit, loss of data, or loss arising from failure of third-party services.",
            "Automation systems are convenience and comfort systems. They are not a substitute for statutory fire detection, mandated intruder alarm monitoring, insurance, or physical security measures required by your insurer.",
          ],
        },
        {
          heading: "11. Governing law",
          paragraphs: [
            "These terms and any dispute arising from them are governed by the laws of the jurisdiction in which Hyvoxa is established, and the courts of that jurisdiction have non-exclusive jurisdiction, without affecting mandatory consumer protections available to you locally.",
          ],
        },
        {
          heading: "12. Contact",
          paragraphs: [
            "Questions about these terms should be sent to hyvoxa@gmail.com.",
          ],
        },
      ]}
    />
  ),
});
