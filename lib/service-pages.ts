export type ServicePage = {
  slug: string
  title: string
  tagline: string
  introduction: string
  questionOne: string
  answerOne: string
  questionTwo: string
  answerTwo: string
  examples: string[]
  quoteDetails: string[]
}
export const servicePages: ServicePage[] = [
  {
    "slug": "land-clearing",
    "title": "Land Clearing",
    "tagline": "Clear unwanted vegetation and make property usable",
    "introduction": "Land clearing involves removing unwanted brush, trees, and other vegetation so a lot, ranch, homesite, or commercial tract can be accessed and prepared for its next use.",
    "questionOne": "What is included in a land clearing estimate?",
    "answerOne": "An estimate depends on acreage, vegetation density, terrain, equipment access, which trees should remain, and whether material needs to be hauled away.",
    "questionTwo": "How should I prepare for land clearing?",
    "answerTwo": "Identify property boundaries and utilities, mark trees to keep, and describe the intended future use of the land.",
    "examples": [
      "Residential lot and acreage clearing",
      "Ranch access and selective clearing",
      "Vegetation and debris handling"
    ],
    "quoteDetails": [
      "Approximate acreage and photos of the site",
      "Type and density of brush or trees",
      "Areas to preserve and desired finished condition"
    ]
  },
  {
    "slug": "dirt-work-grading",
    "title": "Dirt Work & Grading",
    "tagline": "Level and shape land for your next project",
    "introduction": "Dirt work and grading change the shape or elevation of soil to prepare pads, access routes, driveways and other usable areas. Drainage, soil condition, and final use determine the right approach.",
    "questionOne": "What affects grading costs?",
    "answerOne": "Slope, soil, cut-and-fill quantities, accessibility, compaction needs, and whether additional material or hauling is required all affect the scope.",
    "questionTwo": "Is grading the same as leveling?",
    "answerTwo": "Not always. Leveling aims for an even surface; grading can also shape slopes and direct water toward appropriate drainage paths.",
    "examples": [
      "Site leveling and rough grading",
      "Driveway and pad earthwork",
      "Drainage-oriented surface shaping"
    ],
    "quoteDetails": [
      "Where water currently flows",
      "Target elevations or builder specifications",
      "Whether fill or removal of soil is expected"
    ]
  },
  {
    "slug": "excavation",
    "title": "Excavation",
    "tagline": "Dig and prepare ground for site improvements",
    "introduction": "Excavation removes or relocates soil or rock for selected property improvements. Depth, soil conditions, underground utilities and safe equipment access must be evaluated before digging.",
    "questionOne": "What information helps with an excavation quote?",
    "answerOne": "Provide the excavation dimensions, intended purpose, site access, soil conditions if known, and any plans or utility information.",
    "questionTwo": "Can excavation begin before utilities are located?",
    "answerTwo": "Underground utilities must be identified and applicable utility-locate requirements followed before excavation begins.",
    "examples": [
      "Excavation for building and property projects",
      "Drainage and earthmoving work",
      "Removal or redistribution of excavated material"
    ],
    "quoteDetails": [
      "Approximate depth, width and length",
      "Site access and existing structures",
      "Known underground utilities and project plans"
    ]
  },
  {
    "slug": "hauling-services",
    "title": "Hauling Services",
    "tagline": "Move debris and material off your property",
    "introduction": "Hauling services address unwanted material left after clearing, excavation, demolition, or property cleanups. The type, quantity, weight and disposal requirements determine how a removal job is planned.",
    "questionOne": "What materials can be hauled away?",
    "answerOne": "The answer depends on the material, quantity, safety conditions and available disposal options. Send photos and a description to confirm what can be accepted.",
    "questionTwo": "What changes a hauling estimate?",
    "answerTwo": "Volume, weight, loading requirements, truck access, travel distance and disposal fees can all affect the quote.",
    "examples": [
      "Brush and cleared-site debris hauling",
      "Dirt and rock material hauling",
      "Jobsite cleanup and material removal"
    ],
    "quoteDetails": [
      "Photos of the material pile",
      "Approximate volume and type of material",
      "Whether loading equipment can access the site"
    ]
  },
  {
    "slug": "lot-preparation",
    "title": "Lot Preparation",
    "tagline": "Prepare a building site before construction starts",
    "introduction": "Lot preparation brings a property closer to construction-ready condition through the clearing, excavation, and rough grading appropriate to the project. Builder specifications and utility plans should guide the scope.",
    "questionOne": "What should be ready before lot preparation?",
    "answerOne": "Have the property boundaries, intended building location, access route and any builder plans available to review.",
    "questionTwo": "Does lot preparation include utility trenching?",
    "answerTwo": "Trenching may be discussed as part of the scope, subject to site conditions, plans, utility coordination and applicable requirements.",
    "examples": [
      "Homesite and building-area clearing",
      "Rough grading and access preparation",
      "Excavation and trenching scope review"
    ],
    "quoteDetails": [
      "Building or site plan, if available",
      "Desired pad and driveway locations",
      "Utility routes and drainage concerns"
    ]
  },
  {
    "slug": "fence-line-clearing",
    "title": "Fence Line Clearing",
    "tagline": "Open access along existing or planned boundaries",
    "introduction": "Fence line clearing removes brush and vegetation that block access, maintenance or installation along a known property boundary. Work width, vegetation and terrain influence equipment choices.",
    "questionOne": "How wide should a fence line be cleared?",
    "answerOne": "That depends on your fence type, maintenance access and available room. Discuss the intended working width before equipment arrives.",
    "questionTwo": "Should I mark the property line first?",
    "answerTwo": "Yes. Confirm the boundary and mark corners or survey points before clearing; a contractor should not guess where a property line runs.",
    "examples": [
      "Overgrown existing fence corridors",
      "New fence installation access",
      "Brush and small-vegetation removal along boundaries"
    ],
    "quoteDetails": [
      "Approximate fence-line length",
      "Desired clearing width and gate locations",
      "Survey markers, terrain and obstacles"
    ]
  },
  {
    "slug": "brush-removal",
    "title": "Brush Removal",
    "tagline": "Reclaim overgrown yards, lots and acreage",
    "introduction": "Brush removal focuses on shrubs, thickets, saplings and unwanted overgrowth. It may be a smaller, more selective project than a full land clearing job.",
    "questionOne": "Is brush removal different from land clearing?",
    "answerOne": "Brush removal focuses on vegetation, while land clearing may include a broader combination of trees, soil preparation, debris handling and access work.",
    "questionTwo": "Can brush be left on site?",
    "answerTwo": "Depending on the project, material may be mulched, staged or hauled away. Specify the desired finish when requesting a quote.",
    "examples": [
      "Overgrown yard and lot cleanup",
      "Cedar, mesquite and shrub removal discussions",
      "Access and fence corridor vegetation"
    ],
    "quoteDetails": [
      "Pictures showing density and height",
      "Whether mature trees should remain",
      "Preferred debris handling"
    ]
  },
  {
    "slug": "concrete-removal",
    "title": "Concrete Removal",
    "tagline": "Remove unwanted concrete before rebuilding",
    "introduction": "Concrete removal can involve breaking up and taking away old patios, driveways, slabs and other surfaces. Thickness, reinforcement, surrounding structures and truck access matter.",
    "questionOne": "How is concrete removal priced?",
    "answerOne": "The area and thickness of concrete, reinforcement, breaking and loading methods, access and disposal all affect the work.",
    "questionTwo": "Can you remove concrete near a house?",
    "answerTwo": "Proximity to foundations, buried utilities and other structures calls for a site-specific assessment before agreeing on a removal method.",
    "examples": [
      "Old driveway and patio removal",
      "Selected slab and walkway removal",
      "Broken concrete loading and hauling"
    ],
    "quoteDetails": [
      "Approximate surface area and thickness",
      "Photos showing access and nearby structures",
      "Known reinforcement or utility locations"
    ]
  },
  {
    "slug": "rock-removal",
    "title": "Rock Removal",
    "tagline": "Clear surface stone and rocky debris",
    "introduction": "Rock removal can make space easier to access, grade or maintain. The size of rock, whether it is loose or embedded, quantity and terrain determine the approach.",
    "questionOne": "Can embedded boulders be removed?",
    "answerOne": "Some rock requires excavation or specialized equipment. Share photos and measurements to confirm feasibility.",
    "questionTwo": "What determines rock removal cost?",
    "answerTwo": "Rock size, volume, excavation needs, loading access, hauling distance and final disposal or reuse affect the scope.",
    "examples": [
      "Loose surface-rock removal",
      "Rocky debris cleanup",
      "Material loading and hauling"
    ],
    "quoteDetails": [
      "Rock size and approximate quantity",
      "Whether rock is embedded in soil",
      "Where removed material should go"
    ]
  },
  {
    "slug": "junk-removal",
    "title": "Junk Removal",
    "tagline": "Clear unwanted items and accumulated debris",
    "introduction": "Junk removal helps property owners clear unwanted items from yards, garages, buildings and job sites. Materials need to be evaluated for safe handling and lawful disposal.",
    "questionOne": "What should I photograph for a junk removal estimate?",
    "answerOne": "Show the whole pile or room, the largest items and the access route, and identify any heavy or unusual materials.",
    "questionTwo": "Can hazardous waste go with ordinary junk?",
    "answerTwo": "Certain materials require specialized handling and may not be accepted. Disclose chemicals, fuels, batteries and other potentially hazardous items before scheduling.",
    "examples": [
      "Yard and property debris cleanup",
      "General unwanted-item removal",
      "Loading and hauling of accepted materials"
    ],
    "quoteDetails": [
      "Clear photos and estimated item volume",
      "Stairs, gates or access restrictions",
      "Any appliances, electronics or hazardous items"
    ]
  },
  {
    "slug": "hoarding-cleanouts",
    "title": "Hoarding Cleanouts",
    "tagline": "Plan a respectful, property-specific cleanout",
    "introduction": "Hoarding cleanouts require careful planning, privacy, safe access and decisions about which belongings should be retained. The job can be more complex than an ordinary junk pickup.",
    "questionOne": "How do I prepare for a hoarding cleanout?",
    "answerOne": "Identify items that must be kept, who can approve disposal, hazards that may be present and which areas need priority access.",
    "questionTwo": "Can every item be removed in one visit?",
    "answerTwo": "The timeline depends on volume, access, safety and sorting needs. A site-specific review is needed before estimating the work.",
    "examples": [
      "Cluttered home and outbuilding cleanouts",
      "Sorting and removal planning",
      "Removal of agreed-upon unwanted contents"
    ],
    "quoteDetails": [
      "Photos or a walkthrough of affected spaces",
      "Items that must be saved or documented",
      "Known biohazards, sharp objects or unsafe areas"
    ]
  },
  {
    "slug": "demolition",
    "title": "Demolition",
    "tagline": "Discuss removal of unwanted structures or site features",
    "introduction": "Demolition may involve taking down selected structures or improvements and handling resulting material. Permits, utilities, structural conditions, hazardous materials and equipment access must be reviewed before work is agreed.",
    "questionOne": "What do I need before a demolition estimate?",
    "answerOne": "Provide photos, dimensions, construction type, utility status and whether permits or inspections are required.",
    "questionTwo": "Is a demolition permit always required?",
    "answerTwo": "Requirements depend on the structure and jurisdiction. Check with the appropriate local authority before work starts.",
    "examples": [
      "Selected structure or site-feature demolition",
      "Demolition-debris handling and hauling",
      "Property access and cleanup planning"
    ],
    "quoteDetails": [
      "Structure dimensions and materials",
      "Utility disconnection and permit status",
      "Nearby buildings, fencing and access routes"
    ]
  }
]
export const serviceBySlug: Record<string, ServicePage> = Object.fromEntries(servicePages.map((service) => [service.slug, service]))
