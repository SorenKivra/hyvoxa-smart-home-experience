import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Accessibility Statement | Hyvoxa Home Automation";
const DESC =
  "Hyvoxa's commitment to an accessible website and to designing home automation systems usable by people of all ages and abilities.";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/accessibility" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: () => (
    <LegalPage
      title="Accessibility Statement"
      updated="1 July 2026"
      intro="Accessibility matters twice over in our work: this website should be usable by everyone, and so should the homes we automate. This statement sets out what we do about both."
      sections={[
        {
          heading: "1. Our commitment",
          paragraphs: [
            "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA across this website. Accessibility is treated as a design requirement rather than a retrofit, and is reviewed whenever we make substantial changes.",
          ],
        },
        {
          heading: "2. Measures taken on this website",
          bullets: [
            "Semantic HTML structure with a single main heading per page and a logical heading hierarchy.",
            "Colour combinations selected and tested to meet contrast requirements for body text and interface elements.",
            "Full keyboard navigation with visible focus indication on interactive elements.",
            "Descriptive alternative text on meaningful imagery, and decorative graphics hidden from assistive technology.",
            "Motion and animation honour the operating system's reduced-motion preference and are disabled when it is enabled.",
            "Responsive layouts that remain usable at 200% zoom and on small screens without horizontal scrolling.",
            "No contact form, so no timed or complex form interactions to complete; email is accepted in any format.",
          ],
        },
        {
          heading: "3. Accessible home design",
          paragraphs: [
            "Automation can transform independence at home, and we design with that in mind. Voice control, large-format keypads with tactile engraving, automated door and shading control, motion-activated night pathways and simplified single-button scenes all reduce the physical and cognitive effort of operating a house.",
            "If accessibility is a priority for your project, tell us at the enquiry stage. It changes how we specify interfaces, mounting heights, lighting levels and automation rules from the very first drawing.",
          ],
        },
        {
          heading: "4. Known limitations",
          paragraphs: [
            "Some embedded third-party content may not fully meet our accessibility standard, because we do not control how it is built. Where we identify such content we seek an accessible alternative or provide the same information in another format.",
          ],
        },
        {
          heading: "5. Feedback and assistance",
          paragraphs: [
            "If you encounter a barrier on this website, or need information from it in an alternative format such as large print or plain text, email hyvoxa@gmail.com describing the page and the difficulty. We aim to respond within five working days and to provide the requested information in an accessible form.",
          ],
        },
        {
          heading: "6. Ongoing review",
          paragraphs: [
            "This statement is reviewed at least annually and whenever significant changes are made to the website. The date at the top of this page records the most recent review.",
          ],
        },
      ]}
    />
  ),
});
