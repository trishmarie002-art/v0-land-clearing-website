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
    slug: "land-clearing-services-dirt-work-helotes-tx",
    county: "Bexar County",
    intro: "Helotes combines established neighborhoods with larger tracts, ranch-style properties, and wooded acreage along the northwest side of San Antonio. Jay's Land Clearing Service & Dirt Work helps property owners open up usable space, remove dense brush, improve access, and prepare sites for construction or other improvements.",
    localNeeds: "Projects around Helotes often involve cedar and brush removal, fence-line access, driveway preparation, pad work, and selective clearing where owners want to keep mature trees while reclaiming overgrown areas.",
    nearby: ["San Antonio", "Leon Springs", "Boerne", "Somerset"],
    focus: ["Acreage and brush clearing", "Cedar and unwanted vegetation removal", "Driveway and pad preparation", "Grading and dirt work"]
  },
  {
    city: "Boerne",
    slug: "land-clearing-services-dirt-work-boerne-tx",
    county: "Kendall County",
    intro: "Boerne and the surrounding Hill Country continue to attract residential construction, ranch improvements, and acreage development. Our crew provides land clearing, dirt work, grading, excavation, and site preparation for properties that need safe access and a clean starting point.",
    localNeeds: "Hill Country terrain can require a careful approach to clearing and grading. We can remove unwanted brush, open fence lines and trails, prepare building areas, and shape rough ground for practical use while working around features the owner wants to preserve.",
    nearby: ["Leon Springs", "Helotes", "Bulverde", "Fair Oaks Ranch"],
    focus: ["Hill Country lot clearing", "Ranch and acreage cleanup", "Building pad preparation", "Access road and driveway work"]
  },
  {
    city: "Bulverde",
    slug: "land-clearing-services-dirt-work-bulverde-tx",
    county: "Comal County",
    intro: "Bulverde is known for wooded Hill Country properties, rural homesites, and larger lots north of San Antonio. Jay's Land Clearing Service & Dirt Work provides the heavy equipment and site work needed to turn overgrown land into usable property.",
    localNeeds: "Common needs include cedar and brush removal, selective lot clearing, home-site preparation, grading, fence-line clearing, and opening access through dense vegetation.",
    nearby: ["Boerne", "New Braunfels", "Garden Ridge", "San Antonio"],
    focus: ["Selective wooded-lot clearing", "Cedar and brush removal", "Home-site preparation", "Fence-line and access clearing"]
  },
  {
    city: "New Braunfels",
    slug: "land-clearing-services-dirt-work-new-braunfels-tx",
    county: "Comal County",
    intro: "New Braunfels has a mix of fast-growing neighborhoods, commercial development, rural acreage, and properties being prepared for new construction. We handle land clearing and dirt work for owners who need a site cleaned up, opened, graded, or made construction-ready.",
    localNeeds: "Whether the job is a residential lot, acreage outside the city, or a commercial tract, we can remove brush and unwanted vegetation, perform grading and excavation, and prepare access, pads, and work areas.",
    nearby: ["Bulverde", "Garden Ridge", "Cibolo", "Seguin"],
    focus: ["Residential lot clearing", "Commercial site preparation", "Grading and excavation", "Acreage cleanup"]
  },
  {
    city: "Seguin",
    slug: "land-clearing-services-dirt-work-seguin-tx",
    county: "Guadalupe County",
    intro: "Seguin has active residential, agricultural, and commercial property use, making dependable land preparation important for everything from homesites to larger acreage projects. Our services cover clearing, excavation, grading, dirt work, and hauling.",
    localNeeds: "Property owners commonly need brush removed, lots opened for construction, driveways improved, rough ground graded, or neglected acreage cleaned so it can be used again.",
    nearby: ["New Braunfels", "Cibolo", "La Vernia", "Stockdale"],
    focus: ["Homesite and lot clearing", "Pasture and acreage cleanup", "Dirt work and grading", "Debris and material hauling"]
  },
  {
    city: "Schertz",
    slug: "land-clearing-services-dirt-work-schertz-tx",
    county: "Guadalupe and Bexar Counties",
    intro: "Schertz sits in one of the busiest growth corridors northeast of San Antonio. Jay's Land Clearing Service & Dirt Work supports residential and commercial property preparation with clearing, grading, excavation, and dirt work.",
    localNeeds: "Projects may include clearing undeveloped lots, removing brush along property lines, preparing areas for additions or new construction, and grading sites for better access and drainage.",
    nearby: ["Cibolo", "Universal City", "Live Oak", "Garden Ridge"],
    focus: ["Residential lot clearing", "Commercial tract cleanup", "Site grading", "Construction preparation"]
  },
  {
    city: "Cibolo",
    slug: "land-clearing-services-dirt-work-cibolo-tx",
    county: "Guadalupe County",
    intro: "Cibolo continues to grow with new homes, businesses, and development on former rural tracts. We provide land clearing and dirt work for property owners who need a clean, workable site before construction or improvements begin.",
    localNeeds: "Our crew can clear brush, remove unwanted vegetation, open access, grade uneven ground, and prepare pads or work areas for residential and commercial projects.",
    nearby: ["Schertz", "New Braunfels", "Seguin", "Universal City"],
    focus: ["Lot and tract clearing", "Brush removal", "Pad and site preparation", "Grading and excavation"]
  },
  {
    city: "Garden Ridge",
    slug: "land-clearing-services-dirt-work-garden-ridge-tx",
    county: "Comal County",
    intro: "Garden Ridge features wooded residential properties and larger lots between San Antonio and New Braunfels. We help owners clear overgrown areas, improve access, and prepare land for new structures, driveways, and outdoor improvements.",
    localNeeds: "Selective clearing is often important in this area, especially when owners want to remove brush and undergrowth while keeping desirable mature trees and the natural character of the property.",
    nearby: ["Schertz", "Cibolo", "Bulverde", "New Braunfels"],
    focus: ["Selective brush clearing", "Wooded lot cleanup", "Driveway preparation", "Light grading and site work"]
  },
  {
    city: "Converse",
    slug: "land-clearing-services-dirt-work-converse-tx",
    county: "Bexar County",
    intro: "Converse properties range from established residential lots to undeveloped tracts along the growing east and northeast side of San Antonio. Our team provides efficient clearing, dirt work, excavation, and grading for projects of different sizes.",
    localNeeds: "We can clear construction areas, clean fence lines, remove brush and debris, shape rough ground, and prepare lots for homes, shops, driveways, or other improvements.",
    nearby: ["Universal City", "Schertz", "St. Hedwig", "San Antonio"],
    focus: ["Lot clearing", "Fence-line cleanup", "Grading and excavation", "Construction site preparation"]
  },
  {
    city: "Universal City",
    slug: "land-clearing-services-dirt-work-universal-city-tx",
    county: "Bexar County",
    intro: "Universal City is a developed community with ongoing infill, property improvements, and nearby growth. Jay's Land Clearing Service & Dirt Work can handle clearing and dirt work when a property needs more than basic landscaping.",
    localNeeds: "Our equipment is suited for removing thick brush, clearing unused sections of property, preparing building areas, and handling grading or excavation where access and site conditions allow.",
    nearby: ["Live Oak", "Schertz", "Converse", "Cibolo"],
    focus: ["Property cleanup", "Brush and small-tree clearing", "Grading", "Excavation and site prep"]
  },
  {
    city: "Live Oak",
    slug: "land-clearing-services-dirt-work-live-oak-tx",
    county: "Bexar County",
    intro: "Live Oak and the surrounding northeast San Antonio area include residential, commercial, and redevelopment projects that sometimes require heavy-duty site cleanup. We provide land clearing and dirt work for properties that need to be opened, leveled, or prepared.",
    localNeeds: "Jobs can include removing overgrowth from unused areas, cleaning fence lines, preparing lots for improvements, hauling debris, and grading areas that need a more usable surface.",
    nearby: ["Universal City", "Schertz", "Converse", "San Antonio"],
    focus: ["Brush cleanup", "Small-lot clearing", "Debris hauling", "Grading and site preparation"]
  },
  {
    city: "La Vernia",
    slug: "land-clearing-services-dirt-work-la-vernia-tx",
    county: "Wilson County",
    intro: "La Vernia is surrounded by rural homesites, ranch properties, and acreage where land clearing and dirt work are often necessary before building, fencing, or improving access. We provide full-service clearing and site preparation throughout the area.",
    localNeeds: "We frequently help with brush-heavy acreage, fence-line access, driveway and pad preparation, selective clearing around homesites, and grading rough areas for practical use.",
    nearby: ["St. Hedwig", "Adkins", "Floresville", "Seguin"],
    focus: ["Ranch and acreage clearing", "Fence-line clearing", "Driveway and pad work", "Brush removal"]
  },
  {
    city: "St. Hedwig",
    slug: "land-clearing-services-dirt-work-st-hedwig-tx",
    county: "Bexar County",
    intro: "St. Hedwig offers a rural setting close to San Antonio, with acreage, agricultural land, and homesites that often need clearing or dirt work. Our crew can take on brush removal, site preparation, grading, and excavation.",
    localNeeds: "Property owners may need overgrown areas opened, fence lines cleaned, building pads prepared, access routes improved, or rough ground reshaped before the next phase of a project.",
    nearby: ["Adkins", "La Vernia", "Converse", "San Antonio"],
    focus: ["Acreage clearing", "Fence-line work", "Site preparation", "Dirt work and grading"]
  },
  {
    city: "Adkins",
    slug: "land-clearing-services-dirt-work-adkins-tx",
    county: "Bexar County",
    intro: "Adkins is one of the rural communities east of San Antonio where larger properties and undeveloped tracts are common. Jay's Land Clearing Service & Dirt Work provides clearing and earthwork for residential, agricultural, and investment properties.",
    localNeeds: "We can remove thick brush, open access into acreage, prepare home or shop sites, clear fence lines, and handle grading and excavation for property improvements.",
    nearby: ["St. Hedwig", "China Grove", "La Vernia", "San Antonio"],
    focus: ["Heavy brush clearing", "Homesite preparation", "Access and fence-line clearing", "Excavation and grading"]
  },
  {
    city: "China Grove",
    slug: "land-clearing-services-dirt-work-china-grove-tx",
    county: "Bexar County",
    intro: "China Grove sits just east of San Antonio and includes rural residential properties, open land, and acreage that can quickly become difficult to manage when brush takes over. We provide clearing, grading, dirt work, and excavation to make the land useful again.",
    localNeeds: "Common projects include cleaning overgrown lots, preparing new building areas, opening fence lines and driveways, and grading rough or uneven sections of property.",
    nearby: ["Adkins", "Elmendorf", "St. Hedwig", "San Antonio"],
    focus: ["Brush and lot clearing", "Driveway preparation", "Grading", "Homesite and shop-pad work"]
  },
  {
    city: "Elmendorf",
    slug: "land-clearing-services-dirt-work-elmendorf-tx",
    county: "Bexar County",
    intro: "Elmendorf and southeast Bexar County include rural tracts, residential acreage, and properties being prepared for new uses. We offer dependable land clearing and dirt work to get those sites cleaned, opened, and ready.",
    localNeeds: "Our services can cover brush removal, lot cleanup, access clearing, dirt spreading, grading, excavation, and preparation for homes, shops, driveways, or fencing.",
    nearby: ["China Grove", "Von Ormy", "Somerset", "San Antonio"],
    focus: ["Rural lot clearing", "Brush removal", "Dirt work and spreading", "Excavation and site prep"]
  },
  {
    city: "Floresville",
    slug: "land-clearing-services-dirt-work-floresville-tx",
    county: "Wilson County",
    intro: "Floresville is surrounded by ranches, farms, residential acreage, and undeveloped land. Jay's Land Clearing Service & Dirt Work helps property owners clear vegetation, prepare sites, and handle the dirt work needed for construction and land improvements.",
    localNeeds: "Jobs in the Floresville area often involve acreage cleanup, fence-line clearing, driveway work, home and shop pad preparation, grading, excavation, and debris hauling.",
    nearby: ["La Vernia", "Poth", "Stockdale", "Elmendorf"],
    focus: ["Ranch and acreage clearing", "Home and shop pads", "Fence-line clearing", "Grading and excavation"]
  },
  {
    city: "Poth",
    slug: "land-clearing-services-dirt-work-poth-tx",
    county: "Wilson County",
    intro: "Poth is a rural South Texas community where land clearing and earthwork are often part of maintaining acreage, preparing homesites, and improving ranch or agricultural property. Our team provides equipment-based clearing and dirt work for projects large and small.",
    localNeeds: "We can reclaim overgrown areas, clear around fence lines, prepare driveways and pads, move and grade dirt, and clean up sites before construction or other improvements.",
    nearby: ["Floresville", "Pleasanton", "Jourdanton", "Stockdale"],
    focus: ["Acreage cleanup", "Brush clearing", "Driveway and pad preparation", "Dirt moving and grading"]
  },
  {
    city: "Somerset",
    slug: "land-clearing-services-dirt-work-somerset-tx",
    county: "Bexar County",
    intro: "Somerset and southwest Bexar County include rural homesites, ranch acreage, and open tracts where clearing and dirt work are frequently needed. We help owners prepare land for building, access, fencing, and general property improvement.",
    localNeeds: "Services can include heavy brush removal, lot and acreage clearing, excavation, grading, driveway preparation, and cleaning fence lines or easements.",
    nearby: ["Von Ormy", "Atascosa", "Lytle", "San Antonio"],
    focus: ["Rural land clearing", "Brush and mesquite removal", "Driveway preparation", "Grading and excavation"]
  },
  {
    city: "Von Ormy",
    slug: "land-clearing-services-dirt-work-von-ormy-tx",
    county: "Bexar County",
    intro: "Von Ormy is close to San Antonio but still has many rural tracts, larger lots, and properties being prepared for residential or commercial use. Jay's Land Clearing Service & Dirt Work can handle the clearing and site work needed to get a project moving.",
    localNeeds: "We can clear vegetation and debris, prepare building areas, improve access roads, spread and grade dirt, and perform excavation for site preparation.",
    nearby: ["Somerset", "Atascosa", "Lytle", "San Antonio"],
    focus: ["Lot and acreage clearing", "Access-road preparation", "Grading", "Excavation and site work"]
  },
  {
    city: "Atascosa",
    slug: "land-clearing-services-dirt-work-atascosa-tx",
    county: "Bexar County",
    intro: "Atascosa is a rural community southwest of San Antonio with acreage, farms, homesites, and undeveloped properties. Our land clearing and dirt work services help owners turn rough or overgrown ground into usable space.",
    localNeeds: "Projects often include clearing brush and mesquite, opening fence lines, preparing driveways and pads, grading, excavation, and hauling unwanted material from the site.",
    nearby: ["Von Ormy", "Somerset", "Lytle", "Poteet"],
    focus: ["Brush and mesquite clearing", "Fence-line access", "Driveway and pad work", "Grading and hauling"]
  },
  {
    city: "Poteet",
    slug: "land-clearing-services-dirt-work-poteet-tx",
    county: "Atascosa County",
    intro: "Poteet has agricultural land, ranch acreage, rural homesites, and undeveloped tracts where land clearing and dirt work are essential for maintenance and new projects. We provide reliable site preparation throughout the area.",
    localNeeds: "We can clear brush and mesquite, reclaim neglected acreage, prepare building pads and driveways, clean fence lines, grade uneven ground, and perform excavation as needed.",
    nearby: ["Atascosa", "Pleasanton", "Jourdanton", "Somerset"],
    focus: ["Ranch and acreage clearing", "Mesquite and brush removal", "Building-pad preparation", "Grading and excavation"]
  },
  {
    city: "Pleasanton",
    slug: "land-clearing-services-dirt-work-pleasanton-tx",
    county: "Atascosa County",
    intro: "Pleasanton serves as a hub for ranching, residential growth, and commercial activity south of San Antonio. Jay's Land Clearing Service & Dirt Work provides land preparation for owners who need clearing, grading, excavation, or dirt work.",
    localNeeds: "From acreage cleanup to construction preparation, we can remove brush, open access, prepare pads and driveways, grade sites, and haul material so the property is ready for its next use.",
    nearby: ["Poteet", "Jourdanton", "Poth", "Atascosa"],
    focus: ["Acreage and lot clearing", "Commercial site prep", "Driveway and pad work", "Dirt work and excavation"]
  },
  {
    city: "Jourdanton",
    slug: "land-clearing-services-dirt-work-jourdanton-tx",
    county: "Atascosa County",
    intro: "Jourdanton is surrounded by South Texas ranchland, rural homesites, and open acreage. Our crew handles the heavy clearing and dirt work needed to prepare these properties for construction, access, fencing, and ongoing use.",
    localNeeds: "We can remove dense vegetation, clean fence lines, prepare roads and building sites, move and grade dirt, excavate where necessary, and haul debris from the job.",
    nearby: ["Pleasanton", "Poteet", "Poth", "Devine"],
    focus: ["Ranch clearing", "Fence-line cleanup", "Road and pad preparation", "Grading and excavation"]
  },
  {
    city: "Lytle",
    slug: "land-clearing-services-dirt-work-lytle-tx",
    county: "Atascosa, Bexar, and Medina Counties",
    intro: "Lytle sits along the southwest growth corridor from San Antonio and includes residential acreage, ranch properties, and undeveloped tracts. We provide land clearing, dirt work, grading, and excavation for owners preparing land for new uses.",
    localNeeds: "Common projects include brush removal, homesite preparation, driveway and access work, grading, fence-line clearing, and cleaning acreage that has become overgrown.",
    nearby: ["Natalia", "Devine", "Atascosa", "Somerset"],
    focus: ["Homesite clearing", "Driveway preparation", "Brush and fence-line clearing", "Grading and excavation"]
  },
  {
    city: "Natalia",
    slug: "land-clearing-services-dirt-work-natalia-tx",
    county: "Medina County",
    intro: "Natalia offers a rural setting southwest of San Antonio with acreage, farms, and homesites that often require equipment-based clearing and site preparation. Jay's Land Clearing Service & Dirt Work can help get the land ready for construction or improvement.",
    localNeeds: "We handle brush removal, lot and acreage clearing, driveway and pad preparation, dirt spreading, grading, excavation, and cleanup around fence lines.",
    nearby: ["Lytle", "Devine", "Castroville", "Atascosa"],
    focus: ["Acreage clearing", "Brush removal", "Dirt spreading and grading", "Pad and driveway preparation"]
  },
  {
    city: "Devine",
    slug: "land-clearing-services-dirt-work-devine-tx",
    county: "Medina County",
    intro: "Devine is surrounded by agricultural property, ranchland, rural homesites, and open acreage. Our clearing and dirt work services help owners prepare these properties for building, access, fencing, and long-term use.",
    localNeeds: "We can reclaim overgrown acreage, remove brush and unwanted vegetation, prepare pads and driveways, grade rough ground, excavate, and haul debris or material.",
    nearby: ["Natalia", "Lytle", "Hondo", "Jourdanton"],
    focus: ["Ranch and farm clearing", "Homesite preparation", "Grading and dirt work", "Excavation and hauling"]
  },
  {
    city: "Castroville",
    slug: "land-clearing-services-dirt-work-castroville-tx",
    county: "Medina County",
    intro: "Castroville and eastern Medina County include growing residential areas, larger lots, rural acreage, and undeveloped property west of San Antonio. We provide land clearing and dirt work to prepare sites for homes, shops, driveways, and other improvements.",
    localNeeds: "Our crew can remove brush and unwanted vegetation, open access routes, grade lots, prepare pads, clean fence lines, and perform excavation for construction preparation.",
    nearby: ["San Antonio", "Lytle", "Natalia", "Hondo"],
    focus: ["Lot and acreage clearing", "Brush removal", "Driveway and pad preparation", "Grading and excavation"]
  },
  {
    city: "Hondo",
    slug: "land-clearing-services-dirt-work-hondo-tx",
    county: "Medina County",
    intro: "Hondo is surrounded by ranches, farms, rural homesites, and larger South Texas properties. Jay's Land Clearing Service & Dirt Work provides clearing, dirt work, excavation, and grading for property owners preparing land for practical use.",
    localNeeds: "Projects can include reclaiming brush-heavy acreage, opening ranch roads, clearing fence lines, preparing homesites and shop pads, grading, and moving dirt where needed.",
    nearby: ["Castroville", "Devine", "Natalia", "San Antonio"],
    focus: ["Ranch and acreage clearing", "Ranch-road preparation", "Fence-line clearing", "Dirt work and grading"]
  },
  {
    city: "Leon Springs",
    slug: "land-clearing-services-dirt-work-leon-springs-tx",
    county: "Bexar County",
    intro: "Leon Springs sits along the northwest edge of San Antonio where Hill Country terrain, larger properties, and continued development create demand for professional land preparation. We provide clearing, grading, excavation, and dirt work for residential and commercial projects.",
    localNeeds: "We can selectively clear brush, open access through wooded areas, prepare building pads and driveways, grade rough ground, and clean fence lines while working around features the owner wants to keep.",
    nearby: ["Boerne", "Helotes", "San Antonio", "Fair Oaks Ranch"],
    focus: ["Hill Country lot clearing", "Selective brush removal", "Driveway and pad work", "Grading and excavation"]
  },
  {
    city: "Spring Branch",
    slug: "land-clearing-services-dirt-work-spring-branch-tx",
    county: "Comal County",
    intro: "Spring Branch has wooded Hill Country acreage, rural homesites, and growing residential development north of San Antonio. Jay's Land Clearing Service & Dirt Work helps property owners reclaim overgrown land, open access, and prepare sites for construction and improvements.",
    localNeeds: "Projects in Spring Branch often involve cedar and brush removal, selective clearing around mature trees, driveway and pad preparation, grading, and opening access through dense vegetation.",
    nearby: ["Bulverde", "Canyon Lake", "Boerne", "New Braunfels"],
    focus: ["Cedar and brush clearing", "Hill Country lot clearing", "Driveway and pad preparation", "Grading and site work"]
  },
  {
    city: "Canyon Lake",
    slug: "land-clearing-services-dirt-work-canyon-lake-tx",
    county: "Comal County",
    intro: "Canyon Lake properties often combine steep Hill Country terrain, wooded lots, vacation homes, and larger acreage. We provide land clearing, dirt work, grading, and excavation for owners preparing sites for homes, access, fencing, and other improvements.",
    localNeeds: "Clearing around Canyon Lake commonly requires selective brush removal, cedar cleanup, access-road preparation, grading on rough ground, and careful site preparation around existing trees and structures.",
    nearby: ["Spring Branch", "Bulverde", "New Braunfels", "Garden Ridge"],
    focus: ["Wooded lot clearing", "Cedar and brush removal", "Access-road preparation", "Grading and excavation"]
  },
  {
    city: "Fair Oaks Ranch",
    slug: "land-clearing-services-dirt-work-fair-oaks-ranch-tx",
    county: "Bexar, Kendall, and Comal Counties",
    intro: "Fair Oaks Ranch sits in the Hill Country northwest of San Antonio and includes wooded residential properties, larger lots, and acreage near Boerne. Our team provides clearing and dirt work for property improvements, construction preparation, and access.",
    localNeeds: "Common projects include selective clearing, cedar and brush removal, driveway preparation, grading, fence-line cleanup, and opening usable space while preserving desirable trees.",
    nearby: ["Boerne", "Leon Springs", "Helotes", "Spring Branch"],
    focus: ["Selective land clearing", "Cedar and brush removal", "Driveway preparation", "Fence-line and grading work"]
  },
  {
    city: "Selma",
    slug: "land-clearing-services-dirt-work-selma-tx",
    county: "Bexar, Comal, and Guadalupe Counties",
    intro: "Selma is part of the fast-growing northeast San Antonio corridor with residential, commercial, and undeveloped tracts. Jay's Land Clearing Service & Dirt Work provides clearing, excavation, grading, and site preparation for property owners and builders.",
    localNeeds: "Projects can include clearing lots for new construction, removing brush and debris, preparing access, grading sites, and handling dirt work before residential or commercial improvements begin.",
    nearby: ["Schertz", "Live Oak", "Universal City", "Garden Ridge"],
    focus: ["Lot clearing", "Commercial site preparation", "Grading and excavation", "Brush and debris removal"]
  },
  {
    city: "Marion",
    slug: "land-clearing-services-dirt-work-marion-tx",
    county: "Guadalupe County",
    intro: "Marion is surrounded by rural acreage, farms, homesites, and growing residential development between San Antonio and Seguin. We provide land clearing and dirt work to prepare properties for building, access, fencing, and long-term use.",
    localNeeds: "Property owners in Marion often need brush clearing, acreage cleanup, driveway and pad preparation, grading, fence-line access, and excavation for new improvements.",
    nearby: ["Cibolo", "Schertz", "Seguin", "New Braunfels"],
    focus: ["Acreage and lot clearing", "Driveway and pad work", "Fence-line clearing", "Grading and excavation"]
  },
  {
    city: "Stockdale",
    slug: "land-clearing-services-dirt-work-stockdale-tx",
    county: "Wilson County",
    intro: "Stockdale is surrounded by ranches, farms, rural homesites, and South Texas acreage. Jay's Land Clearing Service & Dirt Work helps owners clear brush, improve access, prepare building sites, and handle the dirt work needed for property improvements.",
    localNeeds: "Common work includes mesquite and brush removal, fence-line clearing, ranch-road preparation, pad and driveway work, grading, and cleanup of overgrown acreage.",
    nearby: ["Floresville", "La Vernia", "Poth", "Seguin"],
    focus: ["Ranch and acreage clearing", "Brush and mesquite removal", "Ranch-road preparation", "Grading and pad work"]
  },
  {
    city: "Falls City",
    slug: "land-clearing-services-dirt-work-falls-city-tx",
    county: "Karnes County",
    intro: "Falls City and the surrounding rural area include ranchland, agricultural property, and homesites where dependable land clearing and dirt work are essential. We provide equipment-based clearing, grading, excavation, and site preparation for projects of different sizes.",
    localNeeds: "Projects often involve reclaiming overgrown acreage, clearing fence lines, opening ranch access, preparing driveways and pads, and grading rough ground before construction or fencing.",
    nearby: ["Poth", "Floresville", "Stockdale", "Pleasanton"],
    focus: ["Ranch clearing", "Fence-line cleanup", "Driveway and pad preparation", "Dirt work and grading"]
  },
  {
    city: "Bandera",
    slug: "land-clearing-services-dirt-work-bandera-tx",
    county: "Bandera County",
    intro: "Bandera is surrounded by rugged Hill Country ranches, wooded acreage, and rural homesites where professional land clearing can make difficult property usable again. We provide clearing, dirt work, grading, and excavation for landowners throughout the area.",
    localNeeds: "Bandera-area projects often require cedar and brush removal, ranch-road opening, fence-line clearing, homesite preparation, and grading on uneven Hill Country terrain.",
    nearby: ["Pipe Creek", "Boerne", "Helotes", "Hondo"],
    focus: ["Ranch and acreage clearing", "Cedar and brush removal", "Ranch-road preparation", "Homesite grading"]
  },
  {
    city: "Pipe Creek",
    slug: "land-clearing-services-dirt-work-pipe-creek-tx",
    county: "Bandera County",
    intro: "Pipe Creek sits between San Antonio and Bandera with wooded Hill Country acreage, ranch properties, and rural homesites. Jay's Land Clearing Service & Dirt Work helps owners clear dense vegetation, improve access, and prepare land for construction and other improvements.",
    localNeeds: "Common needs include cedar and brush clearing, opening driveways and ranch roads, fence-line cleanup, selective clearing around mature trees, and grading building areas.",
    nearby: ["Bandera", "Helotes", "Boerne", "Leon Springs"],
    focus: ["Cedar and brush clearing", "Ranch-road and driveway work", "Fence-line clearing", "Building-site preparation"]
  },
  {
    city: "Leon Valley",
    slug: "land-clearing-services-dirt-work-leon-valley-tx",
    county: "Bexar County",
    intro: "Leon Valley is surrounded by established development on San Antonio's northwest side, but property improvements, redevelopment, and larger lots can still require professional clearing and dirt work. We provide equipment-based site preparation when basic landscaping is not enough.",
    localNeeds: "Projects may include clearing overgrown sections, removing brush and debris, preparing areas for additions or new structures, grading, excavation, and improving access where site conditions allow.",
    nearby: ["Helotes", "Leon Springs", "San Antonio", "Fair Oaks Ranch"],
    focus: ["Property clearing", "Brush and debris removal", "Grading", "Excavation and site preparation"]
  },
  {
    city: "Blanco",
    slug: "land-clearing-services-dirt-work-blanco-tx",
    county: "Blanco County",
    intro: "Blanco includes Hill Country acreage along the US 281 corridor. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Blanco.",
    localNeeds: "Around Blanco, projects may involve cedar growth, ranch access routes and sloped homesites. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Johnson City","Spring Branch","Canyon Lake"],
    focus: ["Blanco brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Kendalia",
    slug: "land-clearing-services-dirt-work-kendalia-tx",
    county: "Kendall County",
    intro: "Kendalia includes rural Hill Country tracts between Boerne and Blanco. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Kendalia.",
    localNeeds: "Around Kendalia, projects may involve wooded acreage, fence corridors and challenging terrain. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Boerne","Bulverde","Spring Branch"],
    focus: ["Kendalia brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Comfort",
    slug: "land-clearing-services-dirt-work-comfort-tx",
    county: "Kendall County",
    intro: "Comfort includes Guadalupe River country and rural property west of Boerne. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Comfort.",
    localNeeds: "Around Comfort, projects may involve brushy pastures, ranch lanes and access to outbuildings. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Boerne","Fair Oaks Ranch","Bandera"],
    focus: ["Comfort brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Bergheim",
    slug: "land-clearing-services-dirt-work-bergheim-tx",
    county: "Kendall County",
    intro: "Bergheim includes wooded rural property near the US 281 corridor. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Bergheim.",
    localNeeds: "Around Bergheim, projects may involve rocky access drives, selective cedar thinning and shop pads. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Bulverde","Boerne","Spring Branch"],
    focus: ["Bergheim brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Lakehills",
    slug: "land-clearing-services-dirt-work-lakehills-tx",
    county: "Bandera County",
    intro: "Lakehills includes hillside neighborhoods and rural acreage near Medina Lake. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Lakehills.",
    localNeeds: "Around Lakehills, projects may involve steep driveway approaches, brush removal and erosion-conscious grading. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Pipe Creek","Bandera","Helotes"],
    focus: ["Lakehills brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Mico",
    slug: "land-clearing-services-dirt-work-mico-tx",
    county: "Medina County",
    intro: "Mico includes wooded acreage and hill roads near Medina Lake. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Mico.",
    localNeeds: "Around Mico, projects may involve selective clearing, rocky terrain and equipment access. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Lakehills","Castroville","Helotes"],
    focus: ["Mico brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Rio Medina",
    slug: "land-clearing-services-dirt-work-rio-medina-tx",
    county: "Medina County",
    intro: "Rio Medina includes rural residential properties and farmland west of San Antonio. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Rio Medina.",
    localNeeds: "Around Rio Medina, projects may involve field edges, lot cleanup and ranch driveway preparation. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Castroville","LaCoste","Lytle"],
    focus: ["Rio Medina brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "LaCoste",
    slug: "land-clearing-services-dirt-work-lacoste-tx",
    county: "Medina County",
    intro: "LaCoste includes farmland and homesites along the western San Antonio corridor. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for LaCoste.",
    localNeeds: "Around LaCoste, projects may involve building areas, access drives and rough grading. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Castroville","Lytle","Natalia"],
    focus: ["LaCoste brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Bigfoot",
    slug: "land-clearing-services-dirt-work-bigfoot-tx",
    county: "Frio County",
    intro: "Bigfoot includes ranchland and agricultural properties south of San Antonio. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Bigfoot.",
    localNeeds: "Around Bigfoot, projects may involve pasture brush, fence lines and rural road maintenance. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Moore","Devine","Poteet"],
    focus: ["Bigfoot brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Moore",
    slug: "land-clearing-services-dirt-work-moore-tx",
    county: "Frio County",
    intro: "Moore includes rural tracts and agricultural land along Interstate 35. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Moore.",
    localNeeds: "Around Moore, projects may involve entry roads, ranch clearing and equipment staging sites. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Bigfoot","Devine","Natalia"],
    focus: ["Moore brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Charlotte",
    slug: "land-clearing-services-dirt-work-charlotte-tx",
    county: "Atascosa County",
    intro: "Charlotte includes South Texas farmland and residential acreage. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Charlotte.",
    localNeeds: "Around Charlotte, projects may involve pasture access, mesquite removal and building pads. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Jourdanton","Christine","Poteet"],
    focus: ["Charlotte brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Christine",
    slug: "land-clearing-services-dirt-work-christine-tx",
    county: "Atascosa County",
    intro: "Christine includes quiet ranch and agricultural properties south of Pleasanton. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Christine.",
    localNeeds: "Around Christine, projects may involve overgrown fence corridors, ranch entries and dirt spreading. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Charlotte","Pleasanton","Jourdanton"],
    focus: ["Christine brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Sutherland Springs",
    slug: "land-clearing-services-dirt-work-sutherland-springs-tx",
    county: "Wilson County",
    intro: "Sutherland Springs includes country homesites and pastureland east of San Antonio. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Sutherland Springs.",
    localNeeds: "Around Sutherland Springs, projects may involve residential acreage cleanup, cedar and brush management and driveways. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["La Vernia","Stockdale","Floresville"],
    focus: ["Sutherland Springs brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Nixon",
    slug: "land-clearing-services-dirt-work-nixon-tx",
    county: "Gonzales and Wilson Counties",
    intro: "Nixon includes agricultural tracts and rural roads southeast of San Antonio. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Nixon.",
    localNeeds: "Around Nixon, projects may involve brush clearing around fence lines and future outbuilding locations. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Stockdale","Smiley","Seguin"],
    focus: ["Nixon brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Smiley",
    slug: "land-clearing-services-dirt-work-smiley-tx",
    county: "Gonzales County",
    intro: "Smiley includes rural land and pasture properties around southern Gonzales County. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Smiley.",
    localNeeds: "Around Smiley, projects may involve mesquite growth, ranch access and site clearing. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Nixon","Stockdale","Seguin"],
    focus: ["Smiley brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Kingsbury",
    slug: "land-clearing-services-dirt-work-kingsbury-tx",
    county: "Guadalupe County",
    intro: "Kingsbury includes open rural tracts between Seguin and Luling. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Kingsbury.",
    localNeeds: "Around Kingsbury, projects may involve driveway entrances, pasture cleanup and homesite preparation. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Seguin","Marion","Geronimo"],
    focus: ["Kingsbury brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "McQueeney",
    slug: "land-clearing-services-dirt-work-mcqueeney-tx",
    county: "Guadalupe County",
    intro: "McQueeney includes lakeside-adjacent residential lots and rural parcels. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for McQueeney.",
    localNeeds: "Around McQueeney, projects may involve selective brush clearing, tight access and lot preparation. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Seguin","New Braunfels","Marion"],
    focus: ["McQueeney brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Geronimo",
    slug: "land-clearing-services-dirt-work-geronimo-tx",
    county: "Guadalupe County",
    intro: "Geronimo includes rural homesites on the north side of Seguin. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Geronimo.",
    localNeeds: "Around Geronimo, projects may involve wooded lot preparation, drainage grading and driveway routes. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Seguin","New Braunfels","Kingsbury"],
    focus: ["Geronimo brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Sattler",
    slug: "land-clearing-services-dirt-work-sattler-tx",
    county: "Comal County",
    intro: "Sattler includes wooded properties around Canyon Lake and the Guadalupe River. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Sattler.",
    localNeeds: "Around Sattler, projects may involve hillside brush, tree preservation and limited-access site work. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Canyon Lake","Fischer","New Braunfels"],
    focus: ["Sattler brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  },
  {
    city: "Fischer",
    slug: "land-clearing-services-dirt-work-fischer-tx",
    county: "Comal County",
    intro: "Fischer includes rocky Hill Country acreage northwest of Canyon Lake. Property owners planning improvements may need vegetation removed, safe equipment access, rough grading, or a clear work area before a new home, barn, shop, or driveway can be prepared. Jay's Land Clearing Service & Dirt Work handles land clearing and earthwork projects in the greater San Antonio region; contact us to confirm scheduling and travel availability for Fischer.",
    localNeeds: "Around Fischer, projects may involve cedar removal, rocky driveways and building-site access. The correct scope depends on the actual vegetation, soil, slope, underground utilities, and the condition you want the site left in. We can discuss brush removal, excavation, material hauling, and grading as appropriate to the job.",
    nearby: ["Canyon Lake","Sattler","Spring Branch"],
    focus: ["Fischer brush and acreage clearing","Driveway and property access preparation","Grading and excavation for site projects","Fence-line cleanup and dirt work"]
  }
]

export const locationBySlug = Object.fromEntries(
  locations.map((location) => [location.slug, location])
)
