import lighting from "@/assets/svc-lighting.jpg";
import security from "@/assets/svc-security.jpg";
import climate from "@/assets/svc-climate.jpg";
import theater from "@/assets/svc-theater.jpg";
import shades from "@/assets/svc-shades.jpg";
import integration from "@/assets/svc-integration.jpg";

export type Service = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  outcomes: { label: string; value: string }[];
  features: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "smart-lighting-design",
    name: "Smart Lighting Design",
    short: "Layered, tunable light that follows the rhythm of your day.",
    tagline: "Light that thinks",
    image: lighting,
    metaTitle: "Smart Lighting Installation & Design Services | Hyvoxa",
    metaDescription:
      "Smart lighting installation and lighting control system design: circadian tuning, flicker-free dimming and keypad scenes. Cut lighting energy use by ~38%.",
    intro: [
      "Lighting is the fastest way to feel the difference automation makes. Hyvoxa designs layered lighting schemes that combine architectural, task and accent light, then puts them on a control system that a guest can use without instruction.",
      "We start with a photometric plan of your home, choose fixtures with a matched colour rendering index, and program scenes that shift in warmth from a bright 4000K morning to a 2200K candle-warm evening. The result is a home that feels calmer, photographs better and quietly uses far less electricity.",
    ],
    outcomes: [
      { label: "Average energy reduction", value: "38%" },
      { label: "Switches removed per home", value: "24+" },
      { label: "Scenes programmed", value: "12–40" },
    ],
    features: [
      {
        title: "Circadian tuning",
        body: "Colour temperature and intensity track sunrise and sunset at your exact coordinates, supporting sleep quality and daytime alertness without you touching a thing.",
      },
      {
        title: "Keypad simplification",
        body: "Banks of light switches are replaced with a single engraved keypad per room, labelled in plain language: Welcome, Cook, Dine, Relax, Goodnight.",
      },
      {
        title: "Flicker-free dimming",
        body: "We specify drivers and load controllers matched to each fixture so dimming stays smooth from 100% to 0.1% with no buzz, strobing or colour shift.",
      },
      {
        title: "Exterior and landscape",
        body: "Façade grazing, path lighting and security floods on astronomical timers that make an occupied home look occupied, all season, without manual adjustment.",
      },
    ],
    process: [
      { title: "Lighting survey", body: "Room-by-room measurement of daylight, ceiling structure, existing circuits and how you actually use each space." },
      { title: "Photometric plan", body: "A drawing set showing fixture positions, beam angles, lumen levels and control zones before a single hole is drilled." },
      { title: "Installation", body: "Clean rough-in with our electrical partners, or retrofit work that respects finished plaster and joinery." },
      { title: "Scene programming", body: "We sit with you at dusk and tune every scene live until the house looks the way you want it to look." },
    ],
    faqs: [
      { q: "Can smart lighting be retrofitted without rewiring?", a: "In most homes, yes. We use load-side controllers and wireless dimming modules that fit behind existing switch plates, so you keep your walls intact. Full rewiring is only recommended during renovation." },
      { q: "Will the lights still work if the internet goes down?", a: "Always. Every Hyvoxa lighting system runs its logic locally on a wired processor. The internet is only used for remote access and updates." },
      { q: "How long does a typical lighting project take?", a: "A single-room upgrade takes a day. A whole-home retrofit of 15 to 25 zones usually runs three to five days on site plus one evening of scene tuning." },
    ],
  },
  {
    slug: "home-security-systems",
    name: "Home Security & Access",
    short: "Cameras, locks and sensors that work as one calm, verified system.",
    tagline: "Quiet protection",
    image: security,
    metaTitle: "Home Security System Installation & Access Control | Hyvoxa",
    metaDescription:
      "Professional home security system installation: AI-verified cameras, smart locks, intrusion sensors and access control, recorded locally and installed by our own engineers.",
    intro: [
      "Most security systems fail for one reason: too many false alerts. Hyvoxa designs verified security, where a notification only reaches your phone once two independent signals agree that something genuinely happened.",
      "We integrate cameras, door and window contacts, glass-break detectors, smart locks and driveway sensors into one interface with one app, one set of rules and one place to look. You stop managing devices and start trusting the system.",
    ],
    outcomes: [
      { label: "Reduction in false alerts", value: "92%" },
      { label: "Local video retention", value: "30 days" },
      { label: "Response to arm/disarm", value: "<1s" },
    ],
    features: [
      {
        title: "AI-verified cameras",
        body: "On-device person, vehicle and package classification means you are alerted about people, not passing headlights or moving branches.",
      },
      {
        title: "Local-first recording",
        body: "Footage is written to an on-site encrypted NVR first, with optional cloud mirroring. You own your video and there is no mandatory subscription to view it.",
      },
      {
        title: "Access control",
        body: "Coded, fingerprint or phone-based entry with per-person schedules for cleaners, dog walkers and guests, plus a full audit log of every entry.",
      },
      {
        title: "Away intelligence",
        body: "When the last person leaves, the house arms, locks, sets back the thermostat and begins a natural occupancy lighting pattern in the evening.",
      },
    ],
    process: [
      { title: "Risk walkthrough", body: "We map sightlines, entry points, blind spots and lighting conditions across your property boundary." },
      { title: "Coverage design", body: "Camera placement drawings with field-of-view overlays, plus sensor and lock schedules for every opening." },
      { title: "Secure installation", body: "Hardwired power and data where possible, network segmented onto its own VLAN, no default passwords, ever." },
      { title: "Handover & drills", body: "We train every adult in the household, run a live test of each alert path, and document the whole system for you." },
    ],
    faqs: [
      { q: "Do I need a monitoring subscription?", a: "No. The system is fully functional standalone with local recording and direct alerts. Professional monitoring is available if you want a third party to dispatch on your behalf." },
      { q: "Are the cameras private?", a: "Yes. Camera traffic is isolated on its own network segment with no outbound cloud connection unless you explicitly enable remote viewing, which is encrypted end to end." },
      { q: "Can you keep my existing alarm panel?", a: "Often we can. Many panels expose an integration module that lets us bring arming, zones and status into the wider Hyvoxa system without replacing hardware." },
    ],
  },
  {
    slug: "climate-and-energy-control",
    name: "Climate & Energy Control",
    short: "Room-by-room comfort that pays for itself in fuel savings.",
    tagline: "Comfort, measured",
    image: climate,
    metaTitle: "Smart Thermostat Installation & Home Energy Management | Hyvoxa",
    metaDescription:
      "Smart thermostat installation, true HVAC zoning and circuit-level energy monitoring. Balance every room, cut heating and cooling bills, and see where energy goes.",
    intro: [
      "One thermostat for an entire house is an average of everyone's discomfort. Hyvoxa installs zoned climate control that treats each room as its own environment, with sensors that measure temperature, humidity and air quality where you actually sit.",
      "Combined with live energy monitoring at the circuit level, you finally get an answer to the question every homeowner asks: what is actually costing me money? Most clients recover the cost of their climate work within three to five heating seasons.",
    ],
    outcomes: [
      { label: "Typical heating saving", value: "22–31%" },
      { label: "Zones per average home", value: "6–10" },
      { label: "Sensor accuracy", value: "±0.3°C" },
    ],
    features: [
      {
        title: "True zoning",
        body: "Motorised dampers, smart valves and per-zone sensors let the study run cool while the nursery stays warm, all from a single schedule.",
      },
      {
        title: "Air quality response",
        body: "CO₂, VOC and humidity sensors trigger ventilation automatically, so bedrooms stay under 1000 ppm overnight and bathrooms clear without a manual switch.",
      },
      {
        title: "Circuit-level energy insight",
        body: "Clamp monitoring on your distribution board shows consumption per appliance group, with monthly reports and anomaly alerts for failing equipment.",
      },
      {
        title: "Solar & battery orchestration",
        body: "If you generate power, we prioritise self-consumption: hot water, EV charging and cooling shift automatically to your cheapest, greenest hours.",
      },
    ],
    process: [
      { title: "Thermal assessment", body: "We log temperature and humidity across the home for a full week before proposing anything." },
      { title: "Zoning strategy", body: "A plan matching your heating or cooling plant to realistic zones, sized against actual measured loss." },
      { title: "Controls install", body: "Valves, dampers, sensors and a wired controller commissioned and balanced against real conditions." },
      { title: "Seasonal tuning", body: "We revisit at the change of season to retune schedules and confirm the savings you were promised." },
    ],
    faqs: [
      { q: "Does this work with my existing boiler or heat pump?", a: "Almost always. We interface with OpenTherm, Modbus and dry-contact plant, and we will tell you honestly before we quote if your equipment is a poor candidate." },
      { q: "How quickly do savings appear?", a: "Most households see a measurable drop within the first full billing cycle, with the largest gains in the second winter once seasonal tuning is complete." },
      { q: "Will I lose manual control?", a: "Never. Every zone keeps a physical dial or keypad. Automation is a floor of good behaviour, not a lock on the door." },
    ],
  },
  {
    slug: "home-cinema-and-audio",
    name: "Home Cinema & Multi-Room Audio",
    short: "Reference-grade sound and picture, engineered into the architecture.",
    tagline: "Engineered emotion",
    image: theater,
    metaTitle: "Home Theater Installation & Whole-Home Audio | Hyvoxa",
    metaDescription:
      "Home theater installation and whole-home audio: acoustically engineered cinema rooms, calibrated sound, invisible speakers and one-button control.",
    intro: [
      "A great cinema room is an acoustics project that happens to contain electronics. Hyvoxa models the room first — its modes, reflections and reverberation time — then selects the loudspeakers and projector that suit it, rather than the other way around.",
      "Beyond the cinema, multi-room audio puts music in every space through architectural speakers that disappear into the ceiling, controlled with one tap and calibrated so the kitchen sounds as good as the listening room.",
    ],
    outcomes: [
      { label: "Target reverberation", value: "0.28s" },
      { label: "Calibration points", value: "32" },
      { label: "Visible cables", value: "0" },
    ],
    features: [
      {
        title: "Acoustic modelling",
        body: "Room-mode analysis drives the treatment plan: bass traps, first-reflection absorption and diffusion sized and placed with intent, then hidden behind fabric.",
      },
      {
        title: "Immersive formats",
        body: "Dolby Atmos and DTS:X layouts built to specification, with height channels positioned by angle rather than convenience.",
      },
      {
        title: "Invisible distribution",
        body: "Amplification and sources live in a rack in the plant room. In the living spaces there is nothing to see but a speaker grille painted to your ceiling colour.",
      },
      {
        title: "One-button scenes",
        body: "Watch Film dims the lights, closes the shades, drops the screen, selects the input and sets the volume. One press, six seconds, every time.",
      },
    ],
    process: [
      { title: "Room analysis", body: "Measurement of dimensions, materials and existing response to establish what the space can realistically deliver." },
      { title: "System design", body: "Speaker, amplifier, projector and screen selection matched to seating distance, ambient light and your content." },
      { title: "Build & integration", body: "Treatment, risers, cabling and rack build coordinated with your builder or joiner." },
      { title: "Calibration", body: "Multi-point acoustic and colour calibration with a documented before-and-after measurement report." },
    ],
    faqs: [
      { q: "Do I need a dedicated room?", a: "No. We regularly build outstanding media rooms in multi-use living spaces using controlled ambient light, discreet treatment and a laser projector or large-format display." },
      { q: "Can you hide the speakers completely?", a: "Yes. Plaster-in architectural speakers finish flush with the ceiling and are invisible once painted, with only a minor performance trade-off in the low end." },
      { q: "Will it work with my streaming services?", a: "All of them. We integrate the major streaming platforms, physical media, gaming and broadcast into a single input list with no source-switching confusion." },
    ],
  },
  {
    slug: "motorised-shading",
    name: "Motorised Shading & Daylight",
    short: "Silent shades that manage heat, glare and privacy on their own.",
    tagline: "Daylight, directed",
    image: shades,
    metaTitle: "Motorized Shades & Blinds Installation | Smart Shading | Hyvoxa",
    metaDescription:
      "Motorized shades, blinds and drapes installed and automated: silent motors, sun-tracking glare control, lower cooling costs and protected interiors.",
    intro: [
      "Shading is the most underrated automation in a home. It controls solar heat gain before your cooling system has to fight it, protects timber and textiles from fading, and gives you privacy on a schedule rather than a chore.",
      "Hyvoxa specifies whisper-quiet lithium or hardwired motors, fabrics chosen for openness factor and colour, and tracking that follows the sun's true position at your address throughout the year.",
    ],
    outcomes: [
      { label: "Cooling load reduction", value: "up to 33%" },
      { label: "Motor noise", value: "under 32 dB" },
      { label: "UV fade protection", value: "95%" },
    ],
    features: [
      {
        title: "Solar tracking",
        body: "Shades move by sun azimuth and elevation, dropping only on the façades receiving direct load and lifting again as the sun passes.",
      },
      {
        title: "Fabric consultation",
        body: "We help you choose openness factor room by room: 5% for the study to kill glare, 1% blackout for bedrooms, sheer for the hall.",
      },
      {
        title: "Silent operation",
        body: "Motors selected for acoustic performance so a bedroom shade opening at sunrise does not wake the person under it.",
      },
      {
        title: "Aligned movement",
        body: "Multiple shades on the same elevation are synchronised to travel and stop together, which is the detail that makes a system look designed rather than assembled.",
      },
    ],
    process: [
      { title: "Aperture survey", body: "Every window measured, with a note of orientation, recess depth, glass type and existing treatment." },
      { title: "Fabric & hardware selection", body: "Samples viewed in your own light, at your own windows, before anything is ordered." },
      { title: "Installation", body: "Discreet pockets or slim brackets fitted precisely, with power routed out of sight." },
      { title: "Automation setup", body: "Sun rules, schedules and scene links programmed and refined over the first fortnight of use." },
    ],
    faqs: [
      { q: "Do motorised shades need mains power at every window?", a: "Not necessarily. Rechargeable lithium motors last nine to eighteen months per charge and are ideal for retrofit. Hardwired motors are preferred for new build and high-cycle windows." },
      { q: "Can they work with existing curtains?", a: "Yes, in many cases. Motorised curtain tracks can be fitted behind your existing pelmet and use your current drapes." },
      { q: "Are the shades noisy?", a: "The motors we specify sit around 32 dB, roughly the level of a quiet library. In bedrooms we also slow travel speed to reduce perceived noise further." },
    ],
  },
  {
    slug: "whole-home-integration",
    name: "Whole-Home Integration",
    short: "One infrastructure, one interface, one company responsible for it.",
    tagline: "The spine of the house",
    image: integration,
    metaTitle: "Smart Home Integration & Whole-Home Automation | Hyvoxa",
    metaDescription:
      "Smart home integration that unifies lighting, climate, security, shading and entertainment on one local-first network, with structured wiring and a single interface.",
    intro: [
      "A smart home built one gadget at a time becomes a maintenance burden. Whole-home integration is the opposite discipline: a single designed infrastructure — structured cabling, enterprise-grade networking and a local processor — that every subsystem plugs into.",
      "This is the work that decides whether your home still functions beautifully in year seven. Hyvoxa builds it to a documented standard, labels every cable, and hands you drawings you could give to any competent integrator in the future.",
    ],
    outcomes: [
      { label: "Uptime target", value: "99.9%" },
      { label: "Subsystems unified", value: "up to 9" },
      { label: "Documented cables", value: "100%" },
    ],
    features: [
      {
        title: "Structured cabling",
        body: "Cat6A to every zone, fibre between floors where distance demands it, terminated and tested with certificates handed to you on completion.",
      },
      {
        title: "Enterprise networking",
        body: "Wi-Fi 7 access points positioned by heat-map survey, VLAN segmentation for IoT, guest and family traffic, and a firewall configured properly.",
      },
      {
        title: "Local processing",
        body: "Automation logic runs on-premises. Cloud services are optional conveniences, never single points of failure.",
      },
      {
        title: "Lifetime support",
        body: "Remote diagnostics, proactive firmware management and a named engineer who already knows your system when you call.",
      },
    ],
    process: [
      { title: "Discovery", body: "A long conversation about how your household actually lives, followed by a review of drawings and site conditions." },
      { title: "Infrastructure design", body: "Cable schedules, rack elevations, network topology and a subsystem interface matrix, issued as a drawing pack." },
      { title: "First & second fix", body: "Coordinated with your builder at rough-in, then finished and commissioned as rooms complete." },
      { title: "Care plan", body: "Ongoing monitoring, seasonal reviews and priority response, with everything documented in your handover portal." },
    ],
    faqs: [
      { q: "Is it too late if my house is already built?", a: "No. We complete retrofit integration constantly using wireless mesh protocols, existing cable routes and careful surface work. New build simply gives us more options." },
      { q: "Am I locked into your company?", a: "Absolutely not. We use open, widely supported platforms and hand you full documentation and administrative credentials at completion." },
      { q: "What happens if a device manufacturer disappears?", a: "Because the controller is independent of any single manufacturer, we swap the device and remap it. Your scenes, names and habits stay exactly as they were." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
