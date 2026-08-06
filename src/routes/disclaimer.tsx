import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Disclaimer | Hyvoxa Home Automation";
const DESC =
  "Important limitations on the guidance, figures and technical information published on the Hyvoxa website, including energy savings and security claims.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/disclaimer" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <LegalPage
      title="Disclaimer"
      updated="1 July 2026"
      intro="We publish detailed technical guidance because we believe informed clients make better decisions. That guidance is general in nature and cannot account for the specifics of your property. Please read the limitations below before acting on anything you find here."
      sections={[
        {
          heading: "1. General information only",
          paragraphs: [
            "The content of this website, including blog articles, service descriptions and technical explanations, is provided for general information. It does not constitute professional advice for your particular property, electrical installation, insurance requirements or legal obligations.",
            "You should obtain a survey and a written proposal before making purchasing or construction decisions based on anything published here.",
          ],
        },
        {
          heading: "2. Performance figures and savings",
          paragraphs: [
            "Energy savings, reduction percentages, uptime targets and similar figures quoted on this site are drawn from our own project experience and are presented as typical ranges, not guarantees.",
            "Actual results depend on building fabric, occupancy patterns, climate, tariff structure, existing plant condition and how the system is used. Your outcome may be higher or lower than the figures shown.",
          ],
        },
        {
          heading: "3. Security systems",
          paragraphs: [
            "No security system prevents all crime. Cameras, sensors, locks and access control reduce risk, support deterrence and provide evidence, but they cannot guarantee the safety of persons or property.",
            "Automation systems supplied by Hyvoxa are not a substitute for statutory fire detection, life-safety systems, mandated alarm monitoring or the specific measures required by your insurer. Always confirm requirements with your insurance provider and local authority.",
          ],
        },
        {
          heading: "4. Electrical and building work",
          paragraphs: [
            "Descriptions of installation methods are provided to help you understand our process, not as instructions to follow. Electrical work should only be carried out by suitably qualified and certified persons in accordance with local regulations. Attempting such work yourself may be unlawful, unsafe and may invalidate insurance.",
          ],
        },
        {
          heading: "5. Third-party products and links",
          paragraphs: [
            "Where we reference product categories, standards or third-party platforms, we do so descriptively. We do not accept responsibility for the content, availability, pricing or performance of third-party websites, services or products.",
            "We do not publish paid placements or affiliate links, and manufacturers do not influence the editorial content of our blog.",
          ],
        },
        {
          heading: "6. Accuracy and currency",
          paragraphs: [
            "Technology in this field changes quickly. While we review our content periodically, we do not warrant that all information is complete, current or free from error at the time you read it. Articles reflect our view at the date of publication shown.",
          ],
        },
        {
          heading: "7. Imagery",
          paragraphs: [
            "Photographs and visualisations on this site are illustrative representations of the type of work we deliver and the environments our systems are designed for. They should not be interpreted as a guarantee of a specific finish, product, or result in your property.",
          ],
        },
        {
          heading: "8. Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, Hyvoxa accepts no liability for any loss or damage arising from reliance on information published on this website. Nothing in this disclaimer excludes liability for death or personal injury caused by negligence, for fraud, or for any liability that cannot lawfully be excluded.",
          ],
        },
        {
          heading: "9. Contact",
          paragraphs: [
            "If you believe anything published here is inaccurate or misleading, please tell us at hyvoxa@gmail.com and we will review it promptly.",
          ],
        },
      ]}
    />
  ),
});
