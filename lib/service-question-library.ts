export type ServiceQuestion = { question: string; answer: string }

/** Planning answers; not fixed quotes, project guarantees, or claims about completed jobs. */
export const serviceQuestionLibrary: Record<string, ServiceQuestion[]> = {
  "land-clearing": [
    {
      "question": "How much does it cost to clear five acres in South Texas?",
      "answer": "Five acres alone is not enough to price the job. A lightly overgrown pasture with wide equipment access differs substantially from dense cedar, mature trees, rocky slopes, or wet ground. Pricing also changes with stump removal, debris hauling, finish grading, disposal, and travel. Send an aerial view, ground photos, the approximate acreage to clear, and which trees you want to keep for a property-specific estimate."
    },
    {
      "question": "Does land clearing include removing stumps and roots?",
      "answer": "Not automatically. Cutting or mulching vegetation, extracting stumps, grubbing roots, and rough grading are different scopes of work. If you plan to build or grade the area afterward, state that early so the quote specifies how below-ground material will be treated."
    },
    {
      "question": "Is clearing five acres a one-day job?",
      "answer": "It can be faster or slower depending on equipment access, density, tree size, terrain, debris handling, and weather. Acreage is not a reliable standalone timeline. A realistic schedule follows a site review and a definition of the finished condition."
    },
    {
      "question": "What should stay untouched during clearing?",
      "answer": "Mark property limits, utility easements, desirable trees, water features, drainage paths, and any areas that must be protected. Confirm access and any restrictions before work begins, particularly where clearing could disturb neighboring property."
    }
  ],
  "dirt-work-grading": [
    {
      "question": "What determines the price of grading a driveway or building pad?",
      "answer": "The main variables are area, elevation change, soil and rock conditions, compaction requirements, equipment access, and how much material must be imported or hauled away. A rough level-up and a pad built to engineered specifications are not the same job."
    },
    {
      "question": "Can grading stop water from pooling near my house?",
      "answer": "Grading can sometimes redirect surface runoff, but the site needs evaluation first. Work near foundations should account for existing drainage, neighboring properties, soil movement, and where the water will go. A severe drainage issue may need a designed solution, not just extra dirt."
    },
    {
      "question": "What is cut and fill?",
      "answer": "Cut means removing soil from a high area; fill means placing soil in a low area. Balancing the two can limit imported or exported material, but the soil must be suitable for the planned use, and some projects require compaction testing."
    },
    {
      "question": "Do I need to know the finished elevation before grading?",
      "answer": "For a driveway or simple property improvement, a planned slope and drainage objective may be sufficient to start discussing the scope. For a building foundation or engineered pad, get the builder's elevations and specifications before earthwork begins."
    }
  ],
  "excavation": [
    {
      "question": "What should be checked before excavation starts in Texas?",
      "answer": "The excavation location, soil conditions, depth, access and underground utilities need review. Texas811 states that a locate request is required at least two business days before digging; see texas811.org for the current process. Private lines may require additional locating."
    },
    {
      "question": "Can excavation spoil be left on the property?",
      "answer": "Sometimes. Excavated soil may be reused for appropriate fill or stockpiled in an agreed area, but quality, drainage, space and whether it is suitable for compaction matter. Confirm placement and hauling requirements before quoting."
    },
    {
      "question": "Why might an excavation price change after seeing the ground?",
      "answer": "Unexpected rock, buried concrete, unsuitable soil, restricted truck access, water intrusion, or a change in depth can alter equipment and hauling needs. A quote should state assumptions and how unforeseen conditions are handled."
    },
    {
      "question": "Can excavation and grading be combined into one project?",
      "answer": "Often the work is planned together: excavation creates or lowers an area, while grading establishes the surrounding surface. The final scope depends on plans, utilities, access and the desired finished elevations."
    }
  ],
  "hauling-services": [
    {
      "question": "How is debris hauling usually estimated?",
      "answer": "A hauling estimate depends on material type, approximate volume and weight, loading time, truck access, travel and disposal fees. A compact pile of concrete can weigh much more than a similarly sized pile of brush."
    },
    {
      "question": "Do I have to pile everything at the curb?",
      "answer": "Not necessarily. Loading from the property may be possible if equipment or workers can access the material safely. Send photos of the pile, driveways, gates and any stairs or obstacles to assess the loading approach."
    },
    {
      "question": "What happens to mixed loads of dirt, rock, wood and junk?",
      "answer": "Different materials may need separate handling or disposal. Mixed loads can affect acceptance and pricing, so identify concrete, soil, vegetation, household waste, appliances and any hazardous items before scheduling."
    },
    {
      "question": "Should I request hauling separately from land clearing?",
      "answer": "Ask for both options when requesting a clearing estimate. Leaving vegetation on site, chipping or mulching it, and hauling it away lead to different scopes, timelines and costs."
    }
  ],
  "lot-preparation": [
    {
      "question": "What is the difference between clearing a lot and preparing it for construction?",
      "answer": "Clearing removes unwanted vegetation and obstacles. Construction lot preparation may also involve grading, excavation, access, debris removal and coordination with a builder's site plan. A cleared lot is not automatically ready for a foundation."
    },
    {
      "question": "What documents help with a homesite preparation quote?",
      "answer": "Share a survey or marked property boundaries, intended building footprint, driveway location, plans or builder requirements, and known utility routes. A preliminary drawing is useful for discussion, while final construction work may require approved plans."
    },
    {
      "question": "Who decides the drainage and pad elevation?",
      "answer": "That depends on the project and local requirements. Builders, designers or engineers may specify elevations, slopes and compaction requirements. Avoid guessing the finished pad elevation before confirming the intended design."
    },
    {
      "question": "Can a lot be prepared in stages?",
      "answer": "Yes. An owner may first open access and clear vegetation, then arrange grading or excavation closer to construction. Coordinating the stages can reduce rework and help keep equipment out of areas that should remain undisturbed."
    }
  ],
  "fence-line-clearing": [
    {
      "question": "How much space should be cleared for a fence installation?",
      "answer": "The clearing width depends on fence design, terrain, equipment, posts and long-term maintenance access. Agree on a specific width and total length before work begins rather than assuming the entire strip will be cleared."
    },
    {
      "question": "Do I need a survey before fence line clearing?",
      "answer": "If the boundary is uncertain, confirm it using a reliable survey or professional guidance. Clearing an assumed property line can create conflicts with neighboring landowners."
    },
    {
      "question": "Can the brush be cleared without removing mature trees?",
      "answer": "Selective clearing may be an option when equipment access and tree spacing allow it. Clearly mark trees to preserve and discuss root protection and the width needed for the fence crew."
    },
    {
      "question": "Does fence line clearing include digging fence-post holes?",
      "answer": "Vegetation clearing and post-hole work are different tasks. Ask for a written scope stating whether the project covers access clearing only or additional fence preparation. Ground disturbance also requires utility-locate planning."
    }
  ],
  "brush-removal": [
    {
      "question": "What is the difference between brush removal and forestry mulching?",
      "answer": "Brush removal can involve cutting, collecting and hauling vegetation; forestry mulching typically shreds vegetation and leaves processed material on site. The better choice depends on vegetation size, finish, erosion concerns and what you plan to do with the property."
    },
    {
      "question": "Will brush grow back after removal?",
      "answer": "Some species resprout from roots or seed. The method used, soil disturbance, and follow-up maintenance all affect regrowth. One clearing visit does not guarantee vegetation will never return."
    },
    {
      "question": "Can brush be removed around trees I want to keep?",
      "answer": "Often it can be approached selectively, but the crew needs to know which trees must remain. Access, root zones and density determine whether machinery or more targeted work is appropriate."
    },
    {
      "question": "Is brush removal priced per acre?",
      "answer": "Acreage is one factor, but density, vegetation height, terrain, obstacles, access, and debris handling can matter more. An open half-acre is not comparable to a half-acre of tightly packed cedar or mesquite."
    }
  ],
  "concrete-removal": [
    {
      "question": "How much does removing a concrete driveway or patio cost?",
      "answer": "Pricing usually depends on square footage, slab thickness, reinforcement such as rebar or mesh, how accessible the concrete is, how it must be broken and loaded, and hauling/disposal. A thick reinforced driveway can cost more to remove than a thin patio of the same area. Send approximate dimensions and photos for a quote."
    },
    {
      "question": "Can a concrete slab be removed without damaging nearby structures?",
      "answer": "Work adjacent to foundations, retaining walls or buried lines calls for a careful site review and method selection. No contractor should promise zero risk without inspecting the slab's connection to nearby structures."
    },
    {
      "question": "Does concrete removal include hauling it away?",
      "answer": "Only if hauling and disposal are included in the agreed scope. Ask whether the price covers breaking, loading, trucking, disposal fees and cleanup, and whether any base material remains."
    },
    {
      "question": "What should I check before an old slab is broken up?",
      "answer": "Identify utilities, drains, irrigation lines, nearby foundations and whether the slab is reinforced or post-tensioned. Concrete attached to structures or with unknown tensioning requires specialist assessment before cutting or demolition."
    }
  ],
  "rock-removal": [
    {
      "question": "Why does rock removal vary so much in cost?",
      "answer": "Loose surface rock can often be gathered and loaded, while embedded boulders may need excavation or specialized equipment. Size, quantity, location, access and off-site hauling all affect the job."
    },
    {
      "question": "Can removed rock be reused on my property?",
      "answer": "Sometimes rock can be used for appropriate landscaping or fill applications, but size and suitability depend on the intended use. Discuss whether to stockpile, relocate or haul it away."
    },
    {
      "question": "Can rock removal be included with land clearing or grading?",
      "answer": "Yes, these scopes may overlap. It is useful to identify rock before quoting because exposed bedrock and buried stone can change the equipment and grading approach."
    },
    {
      "question": "What photos help estimate a rocky property?",
      "answer": "Show several wide views, a close-up with an object for scale, access routes and whether the stones are loose or embedded. Measurements of the largest boulders and an estimated volume are especially helpful."
    }
  ],
  "junk-removal": [
    {
      "question": "How is junk removal priced for a garage or property cleanout?",
      "answer": "Volume and weight matter, along with loading labor, stairs, travel, access, sorting requirements and disposal charges. Photos of each area and large items are usually more useful than guessing a truckload count."
    },
    {
      "question": "Can all household waste go into one junk-removal load?",
      "answer": "Not necessarily. Paint, fuels, chemicals, batteries, some electronics, and other restricted materials may require separate handling. Identify questionable items before work starts rather than concealing them in a pile."
    },
    {
      "question": "Do I need to separate items before pickup?",
      "answer": "Separating 'keep,' 'donate,' and 'remove' items prevents accidental disposal and can speed the work. If you cannot sort everything, make that clear when requesting the scope."
    },
    {
      "question": "Can junk removal be combined with demolition debris cleanup?",
      "answer": "It may be possible, but demolition debris and household junk can have different handling and disposal requirements. Request a combined site review so materials and loading access are assessed correctly."
    }
  ],
  "hoarding-cleanouts": [
    {
      "question": "How much does a hoarding cleanout cost?",
      "answer": "There is no reliable flat price without reviewing the property. Volume, number of rooms, safe walking access, sorting time, heavy items, disposal requirements and potential hazards strongly affect labor and duration. A photo review or walk-through helps define a respectful, written scope."
    },
    {
      "question": "How can we protect important belongings during a cleanout?",
      "answer": "Identify documents, medication, cash, jewelry, photographs and sentimental belongings before removal begins. Agree on who has authority to approve disposal, and use clear keep/review/remove areas."
    },
    {
      "question": "What if the property contains mold, sharps or biohazards?",
      "answer": "Tell the contractor before any work. Dangerous materials and unsafe building conditions may require specialist assessment or remediation and may be outside an ordinary cleanout scope."
    },
    {
      "question": "Can a hoarding cleanout be completed discreetly?",
      "answer": "The planning process can account for privacy preferences and agreed access times. Discuss confidentiality expectations, neighbors, parking, the people authorized to enter and how possessions will be handled in advance."
    }
  ],
  "demolition": [
    {
      "question": "What should homeowners do before scheduling demolition?",
      "answer": "Confirm which structure or feature will be removed, who owns it, property boundaries, permit requirements, and the status of utilities. Structural demolition requires proper planning and assessment of collapse hazards; OSHA describes engineering-survey and utility precautions for applicable demolition operations."
    },
    {
      "question": "How much does shed or small-structure demolition cost?",
      "answer": "Dimensions alone do not determine the price. Construction material, condition, attachments, equipment access, foundations, demolition method, debris weight, disposal and permit requirements all influence the quote."
    },
    {
      "question": "Does demolition include concrete foundation removal?",
      "answer": "Not necessarily. Removing a shed or structure and breaking out its slab or footings are separate scope items. State whether the foundation, underground elements and final grading need to be included."
    },
    {
      "question": "What happens if asbestos, lead or unknown materials are found?",
      "answer": "Stop and have suspect materials assessed under applicable requirements. Handling or abatement may require qualified specialists; do not treat potentially hazardous materials as ordinary demolition debris."
    }
  ]
}
