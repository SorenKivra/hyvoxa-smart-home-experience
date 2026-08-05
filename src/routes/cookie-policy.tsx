import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Cookie Policy | Hyvoxa Home Automation";
const DESC =
  "What cookies and similar technologies the Hyvoxa website uses, why they are used, how long they last, and how you can control or remove them.";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/cookie-policy" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: () => (
    <LegalPage
      title="Cookie Policy"
      updated="1 July 2026"
      intro="This policy explains how the Hyvoxa website uses cookies and similar technologies such as local storage. We use very few of them, and none for advertising."
      sections={[
        {
          heading: "1. What cookies are",
          paragraphs: [
            "A cookie is a small text file placed on your device by a website. It allows the site to remember information between pages or between visits. Similar technologies, such as local storage and pixels, achieve comparable results and are covered by this policy.",
          ],
        },
        {
          heading: "2. Categories we use",
          bullets: [
            "Strictly necessary: required for the site to function, including security protections and load balancing. These cannot be switched off through our site because the site would not work without them.",
            "Preference: remember choices such as reduced-motion settings so your experience is consistent between visits.",
            "Analytics: aggregated, privacy-respecting measurement of which pages are read and how visitors reach the site, used to improve our content.",
          ],
        },
        {
          heading: "3. What we do not use",
          bullets: [
            "We do not use advertising or retargeting cookies.",
            "We do not sell or share cookie data with data brokers.",
            "We do not build cross-site behavioural profiles of visitors.",
            "We do not use fingerprinting techniques to identify individual devices.",
          ],
        },
        {
          heading: "4. Duration",
          paragraphs: [
            "Session cookies are deleted automatically when you close your browser. Persistent cookies remain for a defined period, typically no longer than twelve months for preference cookies and twenty-four months for analytics identifiers, after which they expire or are refreshed.",
          ],
        },
        {
          heading: "5. Third parties",
          paragraphs: [
            "Where content is embedded from another provider — for example a video player or a web font service — that provider may set its own cookies or record a request from your browser. We keep such embeds to a minimum, and any provider used is bound by its own privacy policy, which we encourage you to review.",
          ],
        },
        {
          heading: "6. Managing cookies",
          bullets: [
            "All major browsers allow you to view, block and delete cookies through their settings or privacy menu.",
            "You can normally set your browser to warn you before a cookie is stored, or to refuse third-party cookies entirely.",
            "Private or incognito browsing discards cookies at the end of each session.",
            "Blocking strictly necessary cookies may prevent parts of this site from working correctly.",
          ],
        },
        {
          heading: "7. Do Not Track and global privacy signals",
          paragraphs: [
            "Where your browser sends a Do Not Track or Global Privacy Control signal, we treat it as an objection to non-essential measurement and limit analytics collection accordingly.",
          ],
        },
        {
          heading: "8. Changes and contact",
          paragraphs: [
            "If our use of cookies changes, this page will be updated and the revision date at the top amended. Questions about cookies can be sent to hyvoxa@gmail.com.",
          ],
        },
      ]}
    />
  ),
});
