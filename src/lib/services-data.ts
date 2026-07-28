import { ServiceDetail } from "@/types";

/**
 * The eight services, in display order. `slug` values are live indexed URLs —
 * renaming one needs a permanent redirect in next.config.ts (see
 * /services/food-plots → /services/food-plots-crp-seeding).
 */
export const servicesData: ServiceDetail[] = [
  {
    id: "1",
    n: "01",
    title: "Forest Stewardship Plans",
    slug: "forest-stewardship-plans",
    image: "/images/tree.jpg",
    blurb: "Long-term plans built around your land and your goals.",
    summary:
      "A written, long-term roadmap for your property built around your goals — timber income, wildlife, recreation, or just healthy woods. Plans can qualify your land for reduced property-tax assessment and cost-share programs.",
    tags: ["Property walk-through", "Tax-program eligibility", "Year-by-year plan"],
    hook: "The document that tells you what you've got, what it's worth, and what to do about it — for the next twenty years.",
    full: "A Forest Stewardship Plan is a comprehensive management strategy built to help you reach your objectives for your property while keeping it ecologically sound and productive. It's customized to the land you actually own and the goals you actually have — timber production, wildlife habitat, recreation, or conservation.",
    steps: [
      {
        title: "We walk it together",
        body: "Perry meets you on the property to talk through what you want out of it. Income? Deer? Somewhere the grandkids can hunt in 2050? That conversation sets everything else.",
      },
      {
        title: "Property assessment",
        body: "Species composition, soil types, water, existing habitat, disease and pest pressure, current use and any regulatory constraints. The honest inventory of what's out there.",
      },
      {
        title: "The plan gets written",
        body: "A real document you can hand to the county, a buyer, or your kids: management goals, resource inventory, recommendations, action plans and timelines, and how to monitor and adjust.",
      },
      {
        title: "Getting it done",
        body: "Once you approve it, we help you actually execute — coordinating activities, sourcing contractors, and making sure the work matches the plan.",
      },
      {
        title: "We stick around",
        body: "Ongoing support to check whether it's working and adjust the plan over time. Woods change. So should the plan.",
      },
    ],
    benefits: [
      {
        head: "Sustainable management",
        body: "Keeps the health and productivity of the land intact over the long term.",
      },
      {
        head: "Real economic return",
        body: "Maximizes what the land gives back — timber, recreation, or other uses.",
      },
      {
        head: "Compliance & funding",
        body: "Can qualify you for cost-share programs and reduced property-tax assessment.",
      },
      {
        head: "Wildlife & biodiversity",
        body: "Protects and improves habitat right alongside the timber work.",
      },
      {
        head: "Something to leave behind",
        body: "A well-managed woods keeps giving long after you're done managing it. That's the whole point.",
      },
    ],
  },
  {
    id: "2",
    n: "02",
    title: "Tree Planting",
    slug: "tree-planting",
    image: "/images/tree-planting.jpg",
    blurb: "Native Illinois hardwoods and conifers, planted to survive.",
    summary:
      "Reforestation and new stand establishment with native Illinois hardwoods and conifers. We handle site prep, species selection, planting, and early survival so your investment actually takes hold.",
    tags: ["Site preparation", "Native species", "Survival follow-up"],
    hook: "Anybody can stick a seedling in the ground. Getting it to still be there in five years is the job.",
    full: "Tree planting is the process of transplanting seedlings to restore, enhance, or create woodland. It's not just about how the place looks — it drives habitat restoration, biodiversity, and the long-term ecological health of the ground. We plant for timber production, erosion control, native species restoration, and wildlife habitat.",
    steps: [
      {
        title: "Site assessment and planning",
        body: "Soil type, climate, existing vegetation, and what the site actually needs. That determines the best species, the planting layout, and the right time of year to go in.",
      },
      {
        title: "Selection of species",
        body: "Chosen against your goals and the ecology of the site — growth rate, suitability to local conditions, pest and disease resistance, and what each species gives back.",
      },
      {
        title: "Preparing the site",
        body: "Clearing competing vegetation, improving soil conditions, and making sure drainage and moisture are right. Preparation is what gives new trees a real start.",
      },
      {
        title: "Planting",
        body: "Done methodically for high survival rates. Technique varies with terrain, species, and conditions — by hand or mechanized, depending on scale.",
      },
      {
        title: "Post-planting care",
        body: "The early years matter most: watering, mulching, protection from pests and disease, and thinning or pruning as the stand comes on.",
      },
      {
        title: "Monitoring",
        body: "Regular checks on health, growth, and survival, with adjustments to care where the stand needs it.",
      },
    ],
    benefits: [
      {
        head: "Environmental conservation",
        body: "Restores degraded ground, conserves soil, manages runoff, and sequesters carbon.",
      },
      {
        head: "Economic return",
        body: "Well-managed plantings pay back through timber, non-timber products, and land value.",
      },
      {
        head: "Habitat improvement",
        body: "Strategically planted trees create and improve habitat for a range of wildlife.",
      },
      {
        head: "Recreational value",
        body: "A well-planned planting makes the place better to be on, not just better on paper.",
      },
    ],
    feature: {
      title: "Planting with a mechanical tree planter",
      body: "Mechanical planters give uniform spacing and depth for every seedling, and cover large areas fast — a lot less time and labor than hand planting. Flat ground or rough, they're a reliable way to get a stand established and growing.",
    },
  },
  {
    id: "3",
    n: "03",
    title: "Wildlife Enhancement",
    slug: "wildlife-enhancement",
    image: "/images/deer-plot.jpg",
    blurb: "Habitat work for deer, turkey, and songbirds.",
    summary:
      "Practical habitat improvements that bring more deer, turkey, and songbirds to your land. From edge feathering to mast trees to water sources, we shape the property around the wildlife you want to see.",
    tags: ["Edge & cover work", "Mast trees", "Habitat planning"],
    hook: "You can't make deer appear. You can make your place the best forty acres around.",
    full: "Wildlife enhancement is strategic work to improve habitat conditions for specific species, increase biodiversity, and get the ecological balance of a property back where it should be. Food plots, nesting structures, controlled burns, restored water sources — whatever the ground actually needs.",
    steps: [
      {
        title: "Wildlife assessment",
        body: "What's using the property now, what they need, and where the room for improvement is. Vegetation types, water sources, terrain features.",
      },
      {
        title: "Goal setting",
        body: "We set clear, achievable targets with you — whether that's attracting specific game species or promoting native flora and fauna.",
      },
      {
        title: "Designing the plan",
        body: "Habitat modification, food plots, water management, and nesting or roosting structures — matched to the species you're after.",
      },
      {
        title: "Implementation",
        body: "Carried out with minimal disturbance to the land and the wildlife already using it, working with other specialists where it helps.",
      },
      {
        title: "Monitoring and adjustments",
        body: "We check how the new habitat is actually being used and adjust where it isn't performing.",
      },
    ],
    benefits: [
      {
        head: "Biodiversity",
        body: "Supports a wider range of species by giving them the habitat they need.",
      },
      {
        head: "Better hunting",
        body: "Improves hunting, bird-watching, and photography — real recreational value.",
      },
      {
        head: "Stewardship",
        body: "Shows a genuine commitment to responsible land management.",
      },
      {
        head: "Long-term land value",
        body: "Healthier ground is worth more, and appeals to more buyers if you ever sell.",
      },
    ],
  },
  {
    id: "4",
    n: "04",
    title: "Food Plots & CRP Seeding",
    slug: "food-plots-crp-seeding",
    image: "/images/tractor.jpg",
    blurb: "Seed mixes matched to your soil and your goals.",
    summary:
      "Seeding and food plots for both wildlife and conservation acres. We match seed mixes to your soil and your goals, and handle establishment from ground prep to drilling.",
    tags: ["Custom seed mixes", "Ground prep", "CRP-compliant"],
    hook: "Feed them and they stay. Simple as that — provided the mix is right for your dirt.",
    full: "Food plots are areas cultivated to grow specific vegetation that feeds wildlife, particularly deer, turkey, and waterfowl. They're central to wildlife management, and to anybody hunting or watching game on their own ground. We also handle CRP seeding — cool season grasses, waterways, native grasses, and pollinator programs — as part of a planting or on its own.",
    steps: [
      {
        title: "Site selection",
        body: "Soil quality, sunlight, proximity to natural corridors, and existing vegetation determine where a plot works and what it needs.",
      },
      {
        title: "Planning and design",
        body: "Plot size, annuals or perennials, and a layout that fits the land and the way wildlife already move through it.",
      },
      {
        title: "Soil prep and planting",
        body: "Liming, fertilizing, and tilling to get growing conditions right, with planting timed to the species and the local season.",
      },
      {
        title: "Maintenance",
        body: "Weed management, re-seeding, and additional fertilizing to keep the plot productive and attractive.",
      },
      {
        title: "Monitoring",
        body: "Checking use and plant health, and adjusting the mix or the management where it isn't working.",
      },
    ],
    benefits: [
      {
        head: "Nutrition wildlife lacks",
        body: "Provides what natural forage often can't, especially where populations are high.",
      },
      {
        head: "Better hunting",
        body: "Significantly improves the quantity and quality of wildlife on the property.",
      },
      {
        head: "Conservation",
        body: "Well-placed plots support robust, diverse animal populations.",
      },
      {
        head: "Good stewardship",
        body: "A proactive, sustainable approach to managing the ground you own.",
      },
    ],
    feature: {
      title: "CRP seeding programs",
      body: "Beyond wildlife plots we handle CRP seeding to program requirements: cool season grasses, waterway establishment, native grass plantings, and pollinator habitat. Whether you need plots incorporated into a CRP planting or a standalone project, we'll design and install the right thing for your property.",
    },
  },
  {
    id: "5",
    n: "05",
    title: "Timber Appraisals & Sales",
    slug: "timber-appraisals-sales",
    image: "/images/logging.jpg",
    blurb: "Know the number before you sign anything.",
    summary:
      "Know what your timber is worth before you sell. We appraise honestly and run the sale start to finish — marking, bidding, contracts — so you get fair value and your land is left in good shape.",
    tags: ["Independent appraisal", "Marked & bid", "Contract oversight"],
    hook: "The worst timber deals get signed by people who never found out what they had.",
    full: "Timber appraisal and sales means valuing standing timber — cruising it — to estimate market value, then selling it under the best conditions available. It matters if you want income from forested ground, want to manage your timber sustainably, and want to actually understand the financial side of what you own.",
    steps: [
      {
        title: "Inventory and assessment",
        body: "Measuring tree sizes, identifying species, and assessing health to gauge the volume and quality of what's standing.",
      },
      {
        title: "Valuation",
        body: "Current market data against species, size, quality, and accessibility — including local and regional demand for different wood products.",
      },
      {
        title: "Recommendations",
        body: "Whether to sell now or wait for better conditions, which parts of the woods to harvest, and what practices keep the stand productive after.",
      },
      {
        title: "Marketing and sale",
        body: "Taking it to mills, wood product companies, and contractors. We prepare bid documents, run the bidding, and negotiate terms.",
      },
      {
        title: "Harvest oversight",
        body: "Overseeing the harvest so it's done sustainably and to the agreed practices, minimizing impact and staying inside forestry standards.",
      },
      {
        title: "After the harvest",
        body: "Advice on reforestation, land rehabilitation, and the management that keeps the woods healthy going forward.",
      },
    ],
    benefits: [
      {
        head: "Fair market value",
        body: "Professional appraisal and sale management means you get what the timber is actually worth.",
      },
      {
        head: "Sustainable management",
        body: "The stand stays healthy — resources aren't depleted and the ground isn't wrecked.",
      },
      {
        head: "Regulatory compliance",
        body: "We know the local, state, and federal requirements and keep you clear of them.",
      },
      {
        head: "Market insight",
        body: "Timing matters. We tell you when to sell and when to hold.",
      },
    ],
  },
  {
    id: "6",
    n: "06",
    title: "Forest Stand Improvement",
    slug: "forest-stand-improvement",
    image: "/images/timber-stand.jpg",
    blurb: "Thin the junk so the good trees can run.",
    summary:
      "Targeted thinning and TSI that removes low-value, competing trees so your best timber grows faster and healthier. Good for wood value and good for wildlife.",
    tags: ["Thinning", "Crop-tree release", "TSI"],
    hook: "Every tree you take out is light, water, and room for a better one.",
    full: "Forest Stand Improvement — also called Timber Stand Improvement — is selectively removing trees to improve the health, growth rate, and quality of the ones that remain. It raises timber value, cuts competition for light, water, and nutrients, slows disease spread, and creates a more varied structure across the stand.",
    steps: [
      {
        title: "Assessment of the stand",
        body: "Density, health, species composition, and age distribution, with the underperforming and diseased trees identified.",
      },
      {
        title: "Planning and goals",
        body: "Better timber quality for future harvests, improved habitat, reduced fire risk, or overall stand health and resilience — usually some of each.",
      },
      {
        title: "Thinning plan",
        body: "Which trees come out and by what method: selective thinning, row thinning, or crown thinning, depending on the forest type.",
      },
      {
        title: "Implementation",
        body: "Carried out under supervision, to plan, with low-impact techniques and crews trained for it.",
      },
      {
        title: "Post-thinning management",
        body: "Monitoring the effect on health and growth, with pest management, fertilization, or further thinning where it's warranted.",
      },
    ],
    benefits: [
      {
        head: "Healthier, faster growth",
        body: "Less competition means more sunlight, water, and nutrients for the trees you keep.",
      },
      {
        head: "Higher timber value",
        body: "Concentrating resources on the best stems substantially raises what the next harvest is worth.",
      },
      {
        head: "Less disease and pests",
        body: "Better air circulation and lower humidity in the stand cut infestation risk.",
      },
      {
        head: "Better habitat",
        body: "Varied tree sizes and species make for more usable habitat.",
      },
    ],
    feature: {
      title: "Thinning trees",
      body: "Selective removal makes room for the remaining trees to thrive and promotes species diversity. It improves timber quality by encouraging larger, more valuable trees with straighter stems and fewer defects — sustainable management that pays off for wildlife and wood alike.",
    },
  },
  {
    id: "7",
    n: "07",
    title: "CRP Management",
    slug: "crp-management",
    image: "/images/crp-manage.jpg",
    blurb: "Mowing, burning, and upkeep — on schedule, in compliance.",
    summary:
      "Keep your Conservation Reserve Program acres in compliance and in good condition. We handle the required mid-contract management — mowing, prescribed burning, maintenance — on schedule.",
    tags: ["Mowing", "Prescribed burns", "Compliance upkeep"],
    hook: "Miss the mid-contract management and you can lose the payments. We keep the calendar.",
    full: "CRP mowing, clearing, and spraying are the management practices that maintain and improve land enrolled in the Conservation Reserve Program. They're what make sure the environmental benefit actually happens — controlling invasives, promoting desirable vegetation, and keeping habitat healthy — and what keeps you compliant with the FSA.",
    steps: [
      {
        title: "Management planning",
        body: "A review of your specific CRP contract: required practices, frequency, and the timing that keeps you compliant and meets the conservation goals.",
      },
      {
        title: "Site assessment",
        body: "Current conditions, invasive presence, status of desirable vegetation, and any problem areas like erosion or pest pressure.",
      },
      {
        title: "Mowing",
        body: "Timed to CRP guidelines — which protect nesting birds — to reduce woody vegetation, control invasives, and manage grass height and density.",
      },
      {
        title: "Clearing",
        body: "Removing unwanted trees, shrubs, and debris that crowd out beneficial plants or close in the open ground certain species need.",
      },
      {
        title: "Spraying",
        body: "Targeted at invasives and problem pests while minimizing impact on everything else, applied to best practice and program rules.",
      },
      {
        title: "Monitoring",
        body: "Checking the results and adjusting the practices to better meet the goals and requirements.",
      },
    ],
    benefits: [
      {
        head: "Keep your payments",
        body: "Compliance protects annual rental payments and cost-share. Non-compliance can cost you both.",
      },
      {
        head: "Environmental benefit",
        body: "Maintains soil conservation, water quality, and habitat — the point of the program.",
      },
      {
        head: "Invasive control",
        body: "Active management stops invasives from outcompeting natives and altering habitat.",
      },
      {
        head: "Plant diversity",
        body: "Regular mowing, clearing, and controlled spraying encourage a wider mix of species.",
      },
    ],
  },
  {
    id: "8",
    n: "08",
    title: "Invasive Species Control",
    slug: "invasive-species-control",
    image: "/images/drone.jpg",
    blurb: "Honeysuckle and autumn olive, hit by hand and by drone.",
    summary:
      "Take back your woods from bush honeysuckle, autumn olive, and the rest of the crowd that chokes out native growth. Targeted cutting and treatment — including drone application — that keeps them from coming back.",
    tags: ["Honeysuckle removal", "Autumn olive", "Drone spraying"],
    hook: "Honeysuckle doesn't negotiate. Neither do we.",
    full: "Invasive species control is the management and eradication of non-native species that threaten local ecosystems. Left alone they outcompete native flora and fauna, cut biodiversity, alter habitat, and break the ecological functions the woods depend on. Getting on top of them early is far cheaper than getting on top of them late.",
    steps: [
      {
        title: "Identification and assessment",
        body: "Accurately identifying what's present, how far it's gone, and what damage it's doing — sometimes with local wildlife experts or regional invasive databases.",
      },
      {
        title: "Strategy development",
        body: "A targeted control plan combining mechanical, chemical, and biological methods as the species and site require, with methods, tools, and a timeline.",
      },
      {
        title: "Implementation",
        body: "Mechanical control by cutting, mowing, or pulling; chemical control with herbicides formulated to spare natives; biological control where research and approval support it.",
      },
      {
        title: "Monitoring and maintenance",
        body: "Ongoing checks for reoccurrence, with follow-up treatments where anything comes back.",
      },
      {
        title: "Restoring natives",
        body: "Reseeding or replanting natives once the invasives are controlled, so the ground doesn't just get re-invaded.",
      },
    ],
    benefits: [
      {
        head: "Protect native species",
        body: "Invasives displace and eliminate natives, degrading the whole ecosystem.",
      },
      {
        head: "Keep ecosystem services",
        body: "Pollination, water filtration, and climate regulation all depend on healthy ground.",
      },
      {
        head: "Economic impact",
        body: "Invasives hurt agricultural productivity, forestry operations, and property values.",
      },
      {
        head: "Regulatory compliance",
        body: "In some areas you're legally required to manage invasives to stop spread onto neighboring land.",
      },
    ],
    feature: {
      title: "Invasive species control… with drones",
      body: "Drones are changing chemical control: GPS and sensors let us put herbicide exactly where it's needed and nowhere else. They reach terrain a ground crew would struggle with, cover large areas fast, and collect data as they go — so we can actually see whether the treatment worked.",
    },
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.slug === slug);
}
