import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import lighting from "@/assets/svc-lighting.jpg";
import theater from "@/assets/svc-theater.jpg";
import shades from "@/assets/svc-shades.jpg";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "smart-home-worth-it-2026",
    title: "Is a Smart Home Actually Worth It in 2026? An Honest Cost Breakdown",
    excerpt:
      "We break down what home automation really costs, where the money goes, and which upgrades return value fastest — with no vendor spin.",
    metaTitle: "Is a Smart Home Worth It in 2026? Real Costs & ROI | Hyvoxa",
    metaDescription:
      "An honest 2026 cost breakdown of home automation: what smart lighting, climate, security and integration cost, and which upgrades pay back fastest.",
    category: "Buying Guide",
    date: "2026-07-28",
    readTime: "9 min read",
    author: "Hyvoxa Design Team",
    image: blog3,
    body: [
      { type: "p", text: "Every week someone asks us the same question in a slightly different way: is this worth the money? It deserves a straight answer rather than a brochure, so here is how home automation spending actually behaves, based on the projects we deliver." },
      { type: "h2", text: "Where the money actually goes" },
      { type: "p", text: "In a typical whole-home project, hardware accounts for roughly 45% of the budget, labour 30%, design and programming 20%, and documentation and commissioning the remainder. Homeowners consistently underestimate the last two. Programming is where a collection of devices becomes a system that behaves predictably, and it is the single strongest predictor of whether you will still love the house in three years." },
      { type: "h2", text: "The four tiers of spend" },
      { type: "h3", text: "Tier one: single-room upgrade" },
      { type: "p", text: "Smart lighting control and shading in one important room, usually the main living space. This is the cheapest way to understand whether automation suits how you live, and it is fully expandable if we install the right controller from the start." },
      { type: "h3", text: "Tier two: comfort and safety core" },
      { type: "p", text: "Zoned climate control, verified security and lighting across the ground floor. This tier is where measurable financial return begins, because heating and cooling is the largest controllable line item in most household energy bills." },
      { type: "h3", text: "Tier three: whole-home integration" },
      { type: "p", text: "Structured cabling, a proper network, a local processor and every subsystem unified. The premium over tier two buys reliability and longevity rather than features." },
      { type: "h3", text: "Tier four: experience layer" },
      { type: "p", text: "Cinema, multi-room audio, wellness lighting and bespoke automation. Pure quality of life, and the part clients describe most fondly at handover." },
      { type: "h2", text: "What returns money, and what returns joy" },
      { type: "ul", items: [
        "Climate zoning and energy monitoring: typically 22–31% reduction in heating spend, the fastest financial payback of anything we install.",
        "Smart lighting: around 38% reduction in lighting energy, plus significant lamp-life extension from soft-start dimming.",
        "Motorised shading: up to 33% reduction in summer cooling load on sun-facing façades, and dramatically reduced fading of floors and furniture.",
        "Security and access: no direct saving, but frequently reduces insurance premiums and always reduces anxiety.",
        "Cinema and audio: no financial return whatsoever, and consistently the thing families use most.",
      ] },
      { type: "quote", text: "Buy infrastructure for the decade, buy devices for the year. Get that order wrong and you pay twice." },
      { type: "h2", text: "The three mistakes that waste the most money" },
      { type: "p", text: "First, buying devices before designing a system — you end up with five apps and no logic. Second, skipping the network. Nearly every automation complaint we are called in to fix turns out to be a networking problem wearing a costume. Third, underspending on programming, which leaves excellent hardware behaving badly." },
      { type: "h2", text: "So, is it worth it?" },
      { type: "p", text: "If you want a gadget, no. If you want your house to require less of your attention — fewer switches, fewer forgotten locks, fewer arguments about the thermostat, lower bills and a home that feels considered — then yes, decisively. The homes we revisit years later are not admired for their technology. They are admired because nothing about them feels like technology at all." },
    ],
  },
  {
    slug: "circadian-lighting-sleep",
    title: "Circadian Lighting: How Your Home's Light Is Shaping Your Sleep",
    excerpt:
      "The science behind tunable white light, and a practical schedule you can implement in any home to sleep deeper and wake sharper.",
    metaTitle: "Circadian Smart Lighting & Better Sleep: A Practical Guide | Hyvoxa",
    metaDescription:
      "How tunable white smart lighting supports your circadian rhythm, with a room-by-room colour temperature schedule you can apply in any home.",
    category: "Lighting",
    date: "2026-07-14",
    readTime: "7 min read",
    author: "Hyvoxa Design Team",
    image: lighting,
    body: [
      { type: "p", text: "Your body reads light as a clock. Specialised cells in the retina, sensitive mainly to blue wavelengths, tell the brain whether it is day or night — and modern homes send that clock the wrong signal almost every evening." },
      { type: "h2", text: "Why 2700K at 11pm is a problem" },
      { type: "p", text: "It is not only colour temperature that matters, but intensity and timing together. Bright, cool light after sunset suppresses melatonin release, delaying sleep onset by up to ninety minutes. The same light at 7am does the opposite: it anchors your rhythm and improves daytime alertness." },
      { type: "h2", text: "A schedule that works" },
      { type: "ul", items: [
        "06:30–09:00 — 4000K at 80% in kitchens and bathrooms. Bright, crisp, wake-promoting.",
        "09:00–16:00 — 3500K, dimmed to whatever daylight leaves unfinished. Let the sun do the work.",
        "16:00–19:00 — 3000K at 60%. The visual signal that the working part of the day is over.",
        "19:00–21:30 — 2400K at 35%. Warm, low and directed downward rather than overhead.",
        "21:30 onward — 2200K at 12%, with floor-level pathway lighting only for night movement.",
      ] },
      { type: "h2", text: "The details that separate good from excellent" },
      { type: "h3", text: "Beam direction beats brightness" },
      { type: "p", text: "Light entering the eye from above the horizontal is far more alerting than the same intensity reflected off a floor or wall. In the evening, lower the source, not just the level." },
      { type: "h3", text: "Colour rendering matters for mood" },
      { type: "p", text: "Specify fixtures at CRI 95 or above. Skin looks healthy, food looks appetising, and rooms feel warmer at lower intensity, which lets you dim further without the space feeling gloomy." },
      { type: "h3", text: "Automate it, or you will not do it" },
      { type: "p", text: "Nobody manually adjusts colour temperature five times a day. This only works when the schedule runs itself and drifts with the seasons at your latitude." },
      { type: "quote", text: "The best lighting system is the one you never think about, in a house that always looks right." },
      { type: "p", text: "If you are building or renovating, put tunable white in bedrooms, kitchens and any room used both morning and night. Everywhere else, warm dim is enough. It is a small specification decision at the drawing stage and an expensive one to add later." },
    ],
  },
  {
    slug: "smart-home-security-checklist",
    title: "The 12-Point Smart Home Security Checklist Most Installers Skip",
    excerpt:
      "Camera placement is the easy part. This is the network, privacy and process work that determines whether a system is genuinely secure.",
    metaTitle: "Smart Home Security Checklist: 12 Points Installers Skip | Hyvoxa",
    metaDescription:
      "A professional 12-point checklist for secure smart home installation, covering network segmentation, camera privacy, firmware policy and access auditing.",
    category: "Security",
    date: "2026-06-30",
    readTime: "8 min read",
    author: "Hyvoxa Design Team",
    image: blog1,
    body: [
      { type: "p", text: "A connected home expands your attack surface. Done properly, it is still far safer than an unmonitored house — but only if the installation follows a real security process rather than a product manual." },
      { type: "h2", text: "The checklist" },
      { type: "ul", items: [
        "1. Segment the network. IoT devices belong on their own VLAN with no route to laptops, phones or network storage.",
        "2. Eliminate default credentials on every device, including the ones with no obvious login.",
        "3. Disable UPnP on the router. It exists to open ports without asking you.",
        "4. Never port-forward a camera. Use an authenticated relay or VPN for remote viewing.",
        "5. Record locally first, with encryption at rest on the recorder.",
        "6. Establish a firmware policy: staged updates, tested before deployment, logged when applied.",
        "7. Use unique accounts per household member, never a single shared login.",
        "8. Audit access quarterly and revoke codes for cleaners, contractors and former guests.",
        "9. Place cameras to cover approaches, not interiors, and mark privacy zones in software.",
        "10. Provide a battery and cellular fallback so cutting power or broadband does not blind the system.",
        "11. Test every alert path physically at handover, not just in the app.",
        "12. Document the whole system and hand the documentation to the homeowner.",
      ] },
      { type: "h2", text: "Why verification matters more than coverage" },
      { type: "p", text: "A system that cries wolf gets ignored, then disarmed, then abandoned. We design around verified events: a motion signal plus a door contact, or a person classification plus a time-of-day rule. Fewer alerts, each one meaningful, is the entire objective." },
      { type: "h3", text: "Privacy is a design decision" },
      { type: "p", text: "Decide early who can view footage, for how long it is kept, and whether it leaves the property at all. Those three answers shape the hardware you should buy, and they are far harder to change afterwards." },
      { type: "quote", text: "Security you have to think about is security you will eventually stop using." },
      { type: "p", text: "Ask any installer to walk you through these twelve points before you sign. The answers will tell you more about the quality of your future system than any product specification sheet." },
    ],
  },
  {
    slug: "cut-energy-bills-automation",
    title: "Seven Automations That Cut Our Clients' Energy Bills the Most",
    excerpt:
      "Ranked by measured impact across real installations — the automation rules that consistently deliver the largest savings.",
    metaTitle: "7 Home Automations That Cut Energy Bills Most | Hyvoxa",
    metaDescription:
      "Seven measured home automation strategies that reduce energy bills: setback scheduling, solar shading, occupancy control, load shifting and more.",
    category: "Energy",
    date: "2026-06-11",
    readTime: "6 min read",
    author: "Hyvoxa Design Team",
    image: blog2,
    body: [
      { type: "p", text: "Energy savings from automation are real, but they are unevenly distributed. Some rules save a fortune, some save pennies, and a few popular ones save nothing at all. Here is what our monitoring data consistently shows." },
      { type: "h2", text: "1. Occupancy-driven setback" },
      { type: "p", text: "Heating or cooling empty rooms is the largest single waste in most homes. Presence-based setback, with a modest three-degree drop rather than a dramatic one, delivers the biggest measured saving of any rule we deploy." },
      { type: "h2", text: "2. Solar-tracked shading" },
      { type: "p", text: "Blocking heat before it enters the glass is far cheaper than removing it afterwards. On sun-facing façades this alone can cut summer cooling load by up to a third." },
      { type: "h2", text: "3. Hot water scheduling" },
      { type: "p", text: "Most cylinders are reheated on a schedule set years ago and never revisited. Matching heating to genuine usage patterns is quick to implement and immediately visible on the bill." },
      { type: "h2", text: "4. Load shifting to cheap tariff windows" },
      { type: "p", text: "Dishwashers, laundry, EV charging and water heating moved into off-peak hours changes nothing about your day and a great deal about your monthly cost." },
      { type: "h2", text: "5. Standby elimination" },
      { type: "p", text: "Media racks, office equipment and garage circuits left permanently energised are surprisingly expensive. A goodnight scene that powers down non-essential circuits removes that draw entirely." },
      { type: "h2", text: "6. Lighting occupancy and daylight harvesting" },
      { type: "p", text: "Corridors, utility rooms and garages should never be lit by human memory. Add daylight sensing near windows and the lighting bill drops again." },
      { type: "h2", text: "7. Anomaly alerting" },
      { type: "p", text: "Circuit-level monitoring catches the failing freezer, the stuck immersion heater and the pump running twenty-four hours a day. These faults would otherwise run for months unnoticed." },
      { type: "quote", text: "You cannot reduce what you cannot see. Monitoring is not a feature — it is the prerequisite." },
      { type: "p", text: "Start with monitoring, run it for one full month, then automate against what the data actually shows. Guessing is expensive." },
    ],
  },
  {
    slug: "home-cinema-room-planning",
    title: "Planning a Home Cinema: The Decisions You Must Make Before Buying",
    excerpt:
      "Seating distance, acoustics, light control and budget order — the planning choices that determine whether your cinema room sings or disappoints.",
    metaTitle: "Home Cinema Room Planning Guide | Hyvoxa Home Automation",
    metaDescription:
      "A professional guide to planning a home cinema room: acoustics, seating distance, screen sizing, light control and how to order your budget correctly.",
    category: "Cinema",
    date: "2026-05-22",
    readTime: "8 min read",
    author: "Hyvoxa Design Team",
    image: theater,
    body: [
      { type: "p", text: "The most common cinema-room regret is not the wrong projector. It is a beautifully specified system installed in a room that was never going to support it." },
      { type: "h2", text: "Decide the room's job first" },
      { type: "p", text: "A dedicated cinema optimises for one thing and can be treated aggressively. A media room shares duties with daily living and must compromise on treatment and ambient light. Both can be excellent; conflating them is what produces disappointment." },
      { type: "h2", text: "Acoustics before electronics" },
      { type: "p", text: "Room modes below 200Hz dominate what you hear, and no amount of amplifier quality corrects them. Budget for bass trapping, first-reflection absorption and a diffusive rear wall before you compare speaker brands." },
      { type: "h3", text: "Target numbers" },
      { type: "ul", items: [
        "Reverberation time around 0.25–0.35 seconds across the mid band.",
        "Seating at roughly 1.3 to 1.6 times screen width for a cinematic viewing angle.",
        "Front row no closer than one-fifth of room length from the screen wall.",
        "At least 30cm of clearance behind the rear seating row for rear-channel effect.",
      ] },
      { type: "h2", text: "Light control is not optional" },
      { type: "p", text: "Contrast is destroyed by reflected light long before it is destroyed by projector limitations. Dark matte surfaces, blackout shading and zero light from behind the seating do more for perceived picture quality than doubling projector spend." },
      { type: "h2", text: "Order your budget correctly" },
      { type: "p", text: "Room treatment, then loudspeakers, then amplification, then the display, then the seating, then the automation that ties it together. Reversing that order is the single most reliable way to spend a great deal and enjoy it less." },
      { type: "quote", text: "You are not buying equipment. You are buying the room's behaviour, and equipment is one component of it." },
      { type: "p", text: "Get these decisions right on paper and the build itself becomes straightforward. Get them wrong and you will spend the next two years trying to correct them with purchases." },
    ],
  },
  {
    slug: "motorised-blinds-guide",
    title: "Motorised Blinds: Battery or Hardwired, and Which Fabric to Choose",
    excerpt:
      "A clear, practical guide to specifying motorised shading — power options, openness factors and the automation rules that make them worth it.",
    metaTitle: "Motorised Blinds Guide: Battery vs Hardwired & Fabrics | Hyvoxa",
    metaDescription:
      "How to specify motorised blinds: battery versus hardwired motors, fabric openness factors by room, and the sun-tracking rules that deliver real value.",
    category: "Shading",
    date: "2026-05-05",
    readTime: "6 min read",
    author: "Hyvoxa Design Team",
    image: shades,
    body: [
      { type: "p", text: "Motorised shading is often the first automation clients fall in love with, because the benefit is visible on day one. Specifying it well comes down to three decisions." },
      { type: "h2", text: "Decision one: power" },
      { type: "p", text: "Rechargeable lithium motors are ideal for retrofit — no cabling, no plaster damage, and nine to eighteen months between charges depending on cycle count. Hardwired motors are preferable in new build, for high-cycle windows, for very large or heavy shades, and anywhere a ladder charge would be a nuisance." },
      { type: "h2", text: "Decision two: fabric openness" },
      { type: "ul", items: [
        "1% or blackout — bedrooms, media rooms, nurseries. Pair with side channels to kill light leak at the edges.",
        "3% — living rooms facing strong sun where you want glare control but keep a soft view out.",
        "5% — studies and kitchens. Comfortable screen work with the outside world still legible.",
        "10% — north-facing or shaded apertures where privacy matters more than heat.",
        "Sheer or dual-roller — halls and dining rooms that need both a daytime and a nighttime state.",
      ] },
      { type: "h2", text: "Decision three: the rules" },
      { type: "p", text: "Hardware is only half the value. The automation makes it worthwhile: sun-position tracking by façade, a wake sequence that opens bedroom shades gradually at your alarm time, a privacy rule at dusk, and a holiday pattern that varies slightly so the house never looks unoccupied." },
      { type: "h3", text: "The detail nobody mentions" },
      { type: "p", text: "Synchronise travel across shades on the same elevation. When four blinds start, move and stop together, the installation reads as architecture. When they stagger, it reads as gadgets. It costs nothing to program and it is the difference clients notice most." },
      { type: "quote", text: "Shading is the only automation that saves energy while you sleep and protects your interiors while you are out." },
      { type: "p", text: "Measure twice, sample fabrics in your own light, and never choose openness factor from a website swatch. Daylight at your window is the only accurate test." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
