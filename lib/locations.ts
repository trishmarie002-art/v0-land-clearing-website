export type LocationPage = {
  city: string
  slug: string
  county: string
  intro: string
  localNeeds: string
  nearby: string[]
  focus: string[]
}

export const locations: LocationPage[] = [
  {
    city: "Helotes",
    slug: "land-clearing-helotes-tx",
    county: "Bexar County",
    intro: "Helotes combines established neighborhoods with larger tracts, ranch-style properties, and wooded acreage along the northwest side of San Antonio. Jay's Land Clearing Service & Dirt Work helps property owners open up usable space, remove dense brush, improve access, and prepare sites for construction or other improvements.",
    localNeeds: "Projects around Helotes often involve cedar and brush removal, fence-line access, driveway preparation, pad work, and selective clearing where owners want to keep mature trees while reclaiming overgrown areas.",
    nearby: ["San Antonio", "Leon Springs", "Boerne", "Somerset"],
    focus: ["Acreage and brush clearing", "Cedar and unwanted vegetation removal", "Driveway and pad preparation", "Grading and dirt work"]
  },
  {
    city: "Boerne",
    slug: "land-clearing-boerne-tx",
    county: "Kendall County",
    intro: "Boerne and the surrounding Hill Country continue to attract residential construction, ranch improvements, and acreage development. Our crew provides land clearing, dirt work, grading, excavation, and site preparation for properties that need safe access and a clean starting point.",
    localNeeds: "Hill Country terrain can require a careful approach to clearing and grading. We can remove unwanted brush, open fence lines and trails, prepare building areas, and shape rough ground for practical use while working around features the owner wants to preserve.",
    nearby: ["Leon Springs", "Helotes", "Bulverde", "Fair Oaks Ranch"],
    focus: ["Hill Country lot clearing", "Ranch and acreage cleanup", "Building pad preparation", "Access road and driveway work"]
  },
  {
    city: "Bulverde",
    slug: "land-clearing-bulverde-tx",
    county: "Comal County",
    intro: "Bulverde is known for wooded Hill Country properties, rural homesites, and larger lots north of San Antonio. Jay's Land Clearing Service & Dirt Work provides the heavy equipment and site work needed to turn overgrown land into usable property.",
    localNeeds: "Common needs include cedar and brush removal, selective lot clearing, home-site preparation, grading, fence-line clearing, and opening access through dense vegetation.",
    nearby: ["Boerne", "New Braunfels", "Garden Ridge", "San Antonio"],
    focus: ["Selective wooded-lot clearing", "Cedar and brush removal", "Home-site preparation", "Fence-line and access clearing"]
  },
  {
    city: "New Braunfels",
    slug: "land-clearing-new-braunfels-tx",
    county: "Comal County",
    intro: "New Braunfels has a mix of fast-growing neighborhoods, commercial development, rural acreage, and properties being prepared for new construction. We handle land clearing and dirt work for owners who need a site cleaned up, opened, graded, or made construction-ready.",
    localNeeds: "Whether the job is a residential lot, acreage outside the city, or a commercial tract, we can remove brush and unwanted vegetation, perform grading and excavation, and prepare access, pads, and work areas.",
    nearby: ["Bulverde", "Garden Ridge", "Cibolo", "Seguin"],
    focus: ["Residential lot clearing", "Commercial site preparation", "Grading and excavation", "Acreage cleanup"]
  },
  {
    city: "Seguin",
    slug: "land-clearing-seguin-tx",
    county: "Guadalupe County",
    intro: "Seguin has active residential, agricultural, and commercial property use, making dependable land preparation important for everything from homesites to larger acreage projects. Our services cover clearing, excavation, grading, dirt work, and hauling.",
    localNeeds: "Property owners commonly need brush removed, lots opened for construction, driveways improved, rough ground graded, or neglected acreage cleaned so it can be used again.",
    nearby: ["New Braunfels", "Cibolo", "La Vernia", "Stockdale"],
    focus: ["Homesite and lot clearing", "Pasture and acreage cleanup", "Dirt work and grading", "Debris and material hauling"]
  },
  {
    city: "Schertz",
    slug: "land-clearing-schertz-tx",
    county: "Guadalupe and Bexar Counties",
    intro: "Schertz sits in one of the busiest growth corridors northeast of San Antonio. Jay's Land Clearing Service & Dirt Work supports residential and commercial property preparation with clearing, grading, excavation, and dirt work.",
    localNeeds: "Projects may include clearing undeveloped lots, removing brush along property lines, preparing areas for additions or new construction, and grading sites for better access and drainage.",
    nearby: ["Cibolo", "Universal City", "Live Oak", "Garden Ridge"],
    focus: ["Residential lot clearing", "Commercial tract cleanup", "Site grading", "Construction preparation"]
  },
  {
    city: "Cibolo",
    slug: "land-clearing-cibolo-tx",
    county: "Guadalupe County",
    intro: "Cibolo continues to grow with new homes, businesses, and development on former rural tracts. We provide land clearing and dirt work for property owners who need a clean, workable site before construction or improvements begin.",
    localNeeds: "Our crew can clear brush, remove unwanted vegetation, open access, grade uneven ground, and prepare pads or work areas for residential and commercial projects.",
    nearby: ["Schertz", "New Braunfels", "Seguin", "Universal City"],
    focus: ["Lot and tract clearing", "Brush removal", "Pad and site preparation", "Grading and excavation"]
  },
  {
    city: "Garden Ridge",
    slug: "land-clearing-garden-ridge-tx",
    county: "Comal County",
    intro: "Garden Ridge features wooded residential properties and larger lots between San Antonio and New Braunfels. We help owners clear overgrown areas, improve access, and prepare land for new structures, driveways, and outdoor improvements.",
    localNeeds: "Selective clearing is often important in this area, especially when owners want to remove brush and undergrowth while keeping desirable mature trees and the natural character of the property.",
    nearby: ["Schertz", "Cibolo", "Bulverde", "New Braunfels"],
    focus: ["Selective brush clearing", "Wooded lot cleanup", "Driveway preparation", "Light grading and site work"]
  },
  {
    city: "Converse",
    slug: "land-clearing-converse-tx",
    county: "Bexar County",
    intro: "Converse properties range from established residential lots to undeveloped tracts along the growing east and northeast side of San Antonio. Our team provides efficient clearing, dirt work, excavation, and grading for projects of different sizes.",
    localNeeds: "We can clear construction areas, clean fence lines, remove brush and debris, shape rough ground, and prepare lots for homes, shops, driveways, or other improvements.",
    nearby: ["Universal City", "Schertz", "St. Hedwig", "San Antonio"],
    focus: ["Lot clearing", "Fence-line cleanup", "Grading and excavation", "Construction site preparation"]
  },
  {
    city: "Universal City",
    slug: "land-clearing-universal-city-tx",
    county: "Bexar County",
    intro: "Universal City is a developed community with ongoing infill, property improvements, and nearby growth. Jay's Land Clearing Service & Dirt Work can handle clearing and dirt work when a property needs more than basic landscaping.",
    localNeeds: "Our equipment is suited for removing thick brush, clearing unused sections of property, preparing building areas, and handling grading or excavation where access and site conditions allow.",
    nearby: ["Live Oak", "Schertz", "Converse", "Cibolo"],
    focus: ["Property cleanup", "Brush and small-tree clearing", "Grading", "Excavation and site prep"]
  },
  {
    city: "Live Oak",
    slug: "land-clearing-live-oak-tx",
    county: "Bexar County",
    intro: "Live Oak and the surrounding northeast San Antonio area include residential, commercial, and redevelopment projects that sometimes require heavy-duty site cleanup. We provide land clearing and dirt work for properties that need to be opened, leveled, or prepared.",
    localNeeds: "Jobs can include removing overgrowth from unused areas, cleaning fence lines, preparing lots for improvements, hauling debris, and grading areas that need a more usable surface.",
    nearby: ["Universal City", "Schertz", "Converse", "San Antonio"],
    focus: ["Brush cleanup", "Small-lot clearing", "Debris hauling", "Grading and site preparation"]
  },
  {
    city: "La Vernia",
    slug: "land-clearing-la-vernia-tx",
    county: "Wilson County",
    intro: "La Vernia is surrounded by rural homesites, ranch properties, and acreage where land clearing and dirt work are often necessary before building, fencing, or improving access. We provide full-service clearing and site preparation throughout the area.",
    localNeeds: "We frequently help with brush-heavy acreage, fence-line access, driveway and pad preparation, selective clearing around homesites, and grading rough areas for practical use.",
    nearby: ["St. Hedwig", "Adkins", "Floresville", "Seguin"],
    focus: ["Ranch and acreage clearing", "Fence-line clearing", "Driveway and pad work", "Brush removal"]
  },
  {
    city: "St. Hedwig",
    slug: "land-clearing-st-hedwig-tx",
    county: "Bexar County",
    intro: "St. Hedwig offers a rural setting close to San Antonio, with acreage, agricultural land, and homesites that often need clearing or dirt work. Our crew can take on brush removal, site preparation, grading, and excavation.",
    localNeeds: "Property owners may need overgrown areas opened, fence lines cleaned, building pads prepared, access routes improved, or rough ground reshaped before the next phase of a project.",
    nearby: ["Adkins", "La Vernia", "Converse", "San Antonio"],
    focus: ["Acreage clearing", "Fence-line work", "Site preparation", "Dirt work and grading"]
  },
  {
    city: "Adkins",
    slug: "land-clearing-adkins-tx",
    county: "Bexar County",
    intro: "Adkins is one of the rural communities east of San Antonio where larger properties and undeveloped tracts are common. Jay's Land Clearing Service & Dirt Work provides clearing and earthwork for residential, agricultural, and investment properties.",
    localNeeds: "We can remove thick brush, open access into acreage, prepare home or shop sites, clear fence lines, and handle grading and excavation for property improvements.",
    nearby: ["St. Hedwig", "China Grove", "La Vernia", "San Antonio"],
    focus: ["Heavy brush clearing", "Homesite preparation", "Access and fence-line clearing", "Excavation and grading"]
  },
  {
    city: "China Grove",
    slug: "land-clearing-china-grove-tx",
    county: "Bexar County",
    intro: "China Grove sits just east of San Antonio and includes rural residential properties, open land, and acreage that can quickly become difficult to manage when brush takes over. We provide clearing, grading, dirt work, and excavation to make the land useful again.",
    localNeeds: "Common projects include cleaning overgrown lots, preparing new building areas, opening fence lines and driveways, and grading rough or uneven sections of property.",
    nearby: ["Adkins", "Elmendorf", "St. Hedwig", "San Antonio"],
    focus: ["Brush and lot clearing", "Driveway preparation", "Grading", "Homesite and shop-pad work"]
  },
  {
    city: "Elmendorf",
    slug: "land-clearing-elmendorf-tx",
    county: "Bexar County",
    intro: "Elmendorf and southeast Bexar County include rural tracts, residential acreage, and properties being prepared for new uses. We offer dependable land clearing and dirt work to get those sites cleaned, opened, and ready.",
    localNeeds: "Our services can cover brush removal, lot cleanup, access clearing, dirt spreading, grading, excavation, and preparation for homes, shops, driveways, or fencing.",
    nearby: ["China Grove", "Von Ormy", "Somerset", "San Antonio"],
    focus: ["Rural lot clearing", "Brush removal", "Dirt work and spreading", "Excavation and site prep"]
  },
  {
    city: "Floresville",
    slug: "land-clearing-floresville-tx",
    county: "Wilson County",
    intro: "Floresville is surrounded by ranches, farms, residential acreage, and undeveloped land. Jay's Land Clearing Service & Dirt Work helps property owners clear vegetation, prepare sites, and handle the dirt work needed for construction and land improvements.",
    localNeeds: "Jobs in the Floresville area often involve acreage cleanup, fence-line clearing, driveway work, home and shop pad preparation, grading, excavation, and debris hauling.",
    nearby: ["La Vernia", "Poth", "Stockdale", "Elmendorf"],
    focus: ["Ranch and acreage clearing", "Home and shop pads", "Fence-line clearing", "Grading and excavation"]
  },
  {
    city: "Poth",
    slug: "land-clearing-poth-tx",
    county: "Wilson County",
    intro: "Poth is a rural South Texas community where land clearing and earthwork are often part of maintaining acreage, preparing homesites, and improving ranch or agricultural property. Our team provides equipment-based clearing and dirt work for projects large and small.",
    localNeeds: "We can reclaim overgrown areas, clear around fence lines, prepare driveways and pads, move and grade dirt, and clean up sites before construction or other improvements.",
    nearby: ["Floresville", "Pleasanton", "Jourdanton", "Stockdale"],
    focus: ["Acreage cleanup", "Brush clearing", "Driveway and pad preparation", "Dirt moving and grading"]
  },
  {
    city: "Somerset",
    slug: "land-clearing-somerset-tx",
    county: "Bexar County",
    intro: "Somerset and southwest Bexar County include rural homesites, ranch acreage, and open tracts where clearing and dirt work are frequently needed. We help owners prepare land for building, access, fencing, and general property improvement.",
    localNeeds: "Services can include heavy brush removal, lot and acreage clearing, excavation, grading, driveway preparation, and cleaning fence lines or easements.",
    nearby: ["Von Ormy", "Atascosa", "Lytle", "San Antonio"],
    focus: ["Rural land clearing", "Brush and mesquite removal", "Driveway preparation", "Grading and excavation"]
  },
  {
    city: "Von Ormy",
    slug: "land-clearing-von-ormy-tx",
    county: "Bexar County",
    intro: "Von Ormy is close to San Antonio but still has many rural tracts, larger lots, and properties being prepared for residential or commercial use. Jay's Land Clearing Service & Dirt Work can handle the clearing and site work needed to get a project moving.",
    localNeeds: "We can clear vegetation and debris, prepare building areas, improve access roads, spread and grade dirt, and perform excavation for site preparation.",
    nearby: ["Somerset", "Atascosa", "Lytle", "San Antonio"],
    focus: ["Lot and acreage clearing", "Access-road preparation", "Grading", "Excavation and site work"]
  },
  {
    city: "Atascosa",
    slug: "land-clearing-atascosa-tx",
    county: "Bexar County",
    intro: "Atascosa is a rural community southwest of San Antonio with acreage, farms, homesites, and undeveloped properties. Our land clearing and dirt work services help owners turn rough or overgrown ground into usable space.",
    localNeeds: "Projects often include clearing brush and mesquite, opening fence lines, preparing driveways and pads, grading, excavation, and hauling unwanted material from the site.",
    nearby: ["Von Ormy", "Somerset", "Lytle", "Poteet"],
    focus: ["Brush and mesquite clearing", "Fence-line access", "Driveway and pad work", "Grading and hauling"]
  },
  {
    city: "Poteet",
    slug: "land-clearing-poteet-tx",
    county: "Atascosa County",
    intro: "Poteet has agricultural land, ranch acreage, rural homesites, and undeveloped tracts where land clearing and dirt work are essential for maintenance and new projects. We provide reliable site preparation throughout the area.",
    localNeeds: "We can clear brush and mesquite, reclaim neglected acreage, prepare building pads and driveways, clean fence lines, grade uneven ground, and perform excavation as needed.",
    nearby: ["Atascosa", "Pleasanton", "Jourdanton", "Somerset"],
    focus: ["Ranch and acreage clearing", "Mesquite and brush removal", "Building-pad preparation", "Grading and excavation"]
  },
  {
    city: "Pleasanton",
    slug: "land-clearing-pleasanton-tx",
    county: "Atascosa County",
    intro: "Pleasanton serves as a hub for ranching, residential growth, and commercial activity south of San Antonio. Jay's Land Clearing Service & Dirt Work provides land preparation for owners who need clearing, grading, excavation, or dirt work.",
    localNeeds: "From acreage cleanup to construction preparation, we can remove brush, open access, prepare pads and driveways, grade sites, and haul material so the property is ready for its next use.",
    nearby: ["Poteet", "Jourdanton", "Poth", "Atascosa"],
    focus: ["Acreage and lot clearing", "Commercial site prep", "Driveway and pad work", "Dirt work and excavation"]
  },
  {
    city: "Jourdanton",
    slug: "land-clearing-jourdanton-tx",
    county: "Atascosa County",
    intro: "Jourdanton is surrounded by South Texas ranchland, rural homesites, and open acreage. Our crew handles the heavy clearing and dirt work needed to prepare these properties for construction, access, fencing, and ongoing use.",
    localNeeds: "We can remove dense vegetation, clean fence lines, prepare roads and building sites, move and grade dirt, excavate where necessary, and haul debris from the job.",
    nearby: ["Pleasanton", "Poteet", "Poth", "Devine"],
    focus: ["Ranch clearing", "Fence-line cleanup", "Road and pad preparation", "Grading and excavation"]
  },
  {
    city: "Lytle",
    slug: "land-clearing-lytle-tx",
    county: "Atascosa, Bexar, and Medina Counties",
    intro: "Lytle sits along the southwest growth corridor from San Antonio and includes residential acreage, ranch properties, and undeveloped tracts. We provide land clearing, dirt work, grading, and excavation for owners preparing land for new uses.",
    localNeeds: "Common projects include brush removal, homesite preparation, driveway and access work, grading, fence-line clearing, and cleaning acreage that has become overgrown.",
    nearby: ["Natalia", "Devine", "Atascosa", "Somerset"],
    focus: ["Homesite clearing", "Driveway preparation", "Brush and fence-line clearing", "Grading and excavation"]
  },
  {
    city: "Natalia",
    slug: "land-clearing-natalia-tx",
    county: "Medina County",
    intro: "Natalia offers a rural setting southwest of San Antonio with acreage, farms, and homesites that often require equipment-based clearing and site preparation. Jay's Land Clearing Service & Dirt Work can help get the land ready for construction or improvement.",
    localNeeds: "We handle brush removal, lot and acreage clearing, driveway and pad preparation, dirt spreading, grading, excavation, and cleanup around fence lines.",
    nearby: ["Lytle", "Devine", "Castroville", "Atascosa"],
    focus: ["Acreage clearing", "Brush removal", "Dirt spreading and grading", "Pad and driveway preparation"]
  },
  {
    city: "Devine",
    slug: "land-clearing-devine-tx",
    county: "Medina County",
    intro: "Devine is surrounded by agricultural property, ranchland, rural homesites, and open acreage. Our clearing and dirt work services help owners prepare these properties for building, access, fencing, and long-term use.",
    localNeeds: "We can reclaim overgrown acreage, remove brush and unwanted vegetation, prepare pads and driveways, grade rough ground, excavate, and haul debris or material.",
    nearby: ["Natalia", "Lytle", "Hondo", "Jourdanton"],
    focus: ["Ranch and farm clearing", "Homesite preparation", "Grading and dirt work", "Excavation and hauling"]
  },
  {
    city: "Castroville",
    slug: "land-clearing-castroville-tx",
    county: "Medina County",
    intro: "Castroville and eastern Medina County include growing residential areas, larger lots, rural acreage, and undeveloped property west of San Antonio. We provide land clearing and dirt work to prepare sites for homes, shops, driveways, and other improvements.",
    localNeeds: "Our crew can remove brush and unwanted vegetation, open access routes, grade lots, prepare pads, clean fence lines, and perform excavation for construction preparation.",
    nearby: ["San Antonio", "Lytle", "Natalia", "Hondo"],
    focus: ["Lot and acreage clearing", "Brush removal", "Driveway and pad preparation", "Grading and excavation"]
  },
  {
    city: "Hondo",
    slug: "land-clearing-hondo-tx",
    county: "Medina County",
    intro: "Hondo is surrounded by ranches, farms, rural homesites, and larger South Texas properties. Jay's Land Clearing Service & Dirt Work provides clearing, dirt work, excavation, and grading for property owners preparing land for practical use.",
    localNeeds: "Projects can include reclaiming brush-heavy acreage, opening ranch roads, clearing fence lines, preparing homesites and shop pads, grading, and moving dirt where needed.",
    nearby: ["Castroville", "Devine", "Natalia", "San Antonio"],
    focus: ["Ranch and acreage clearing", "Ranch-road preparation", "Fence-line clearing", "Dirt work and grading"]
  },
  {
    city: "Leon Springs",
    slug: "land-clearing-leon-springs-tx",
    county: "Bexar County",
    intro: "Leon Springs sits along the northwest edge of San Antonio where Hill Country terrain, larger properties, and continued development create demand for professional land preparation. We provide clearing, grading, excavation, and dirt work for residential and commercial projects.",
    localNeeds: "We can selectively clear brush, open access through wooded areas, prepare building pads and driveways, grade rough ground, and clean fence lines while working around features the owner wants to keep.",
    nearby: ["Boerne", "Helotes", "San Antonio", "Fair Oaks Ranch"],
    focus: ["Hill Country lot clearing", "Selective brush removal", "Driveway and pad work", "Grading and excavation"]
  }
]

export const locationBySlug = Object.fromEntries(
  locations.map((location) => [location.slug, location])
)
