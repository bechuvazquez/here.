const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const translations = {
  en: {
    "nav.demand": "Demand",
    "nav.supply": "Supply",
    "nav.enterprise": "Enterprise",
    "meta.index.title": "here. | Presence For Work",
    "meta.index.description":
      "here. is the presence layer for work, helping freelancers choose where to work based on who is there and helping coworkings create better density.",
    "meta.demand.title": "here. | Demand",
    "meta.demand.description":
      "Work where people are. here. helps freelancers and remote workers choose where to work today based on who is there.",
    "meta.supply.title": "here. | Supply",
    "meta.supply.description":
      "Fill your space with the right people. here. helps coworking operators bring quality users into underused desks and low-density hours.",
    "meta.enterprise.title": "here. | Enterprise",
    "meta.enterprise.description":
      "here. helps enterprises hiring remotely build visibility with high-intent talent through curated presence, brand access, and recruiting packs.",
    "index.hero.eyebrow": "Presence for work",
    "index.hero.title": "Choose where to work by who is there.",
    "index.hero.text":
      "here. is a real-time presence layer for work. It helps independent professionals stop choosing a workspace blindly, and helps coworking spaces create the kind of density people actually want to walk into.",
    "index.hero.ctaDemand": "For demand",
    "index.hero.ctaSupply": "For supply",
    "index.hero.ctaEnterprise": "For enterprise",
    "index.card.today": "today",
    "index.card.title": "Not a coworking aggregator.",
    "index.card.text":
      "A shared layer that makes people visible in the context of work.",
    "index.statement.one": "Remote work made work flexible.",
    "index.statement.two": "It also made too many people work alone.",
    "index.problem.eyebrow": "The problem",
    "index.problem.title":
      "People do not just want a place to work. They want the right context.",
    "index.problem.one.title": "Coworkings provide space, not guaranteed relevance",
    "index.problem.one.text":
      "You can be surrounded by people and still feel alone because the people around you are random, unknown, or disconnected from your work.",
    "index.problem.two.title": "Networking events are disconnected from real work",
    "index.problem.two.text":
      "They create interaction, but often outside the moments where meaningful connection would naturally happen.",
    "index.problem.three.title": "Isolation becomes routine",
    "index.problem.three.text":
      "Home, cafes, and low-energy coworkings make solo work the default, even for people who perform better around others.",
    "index.solution.eyebrow": "The solution",
    "index.solution.title": "Make work presence visible in real time.",
    "index.solution.text":
      "Instead of choosing a space first and hoping the day feels right, people open here., see who is working where, and decide accordingly. That simple shift turns work from an isolated activity into a shared one.",
    "index.solution.quote":
      "“The winner will not aggregate supply. It will orchestrate human density in physical space.”",
    "index.market.eyebrow": "Market logic",
    "index.market.title":
      "There is demand for better workdays and supply with empty moments to fill.",
    "index.market.one.title": "Demand",
    "index.market.one.text":
      "In Madrid there is a large pool of relevant knowledge workers and freelancers, especially in product, design, tech, marketing, content, education, and independent professional services.",
    "index.market.two.title": "Behavior",
    "index.market.two.text":
      "Social contact is one of the clearest pain points in remote work, which aligns directly with the habit here. wants to own each morning.",
    "index.market.three.title": "Supply",
    "index.market.three.text":
      "Madrid has a fragmented coworking market with many boutique spaces, uneven occupancy, and recurring off-peak underutilization.",
    "index.market.four.title": "Fit",
    "index.market.four.text":
      "here. sits between both sides by helping users choose context and helping spaces create better density without extra operational load.",
    "index.split.eyebrow": "How it splits",
    "index.split.title": "One product. Three stories.",
    "index.split.demand.label": "Demand",
    "index.split.demand.title": "Sell the better workday",
    "index.split.demand.text":
      "For freelancers and remote workers who want to stop working alone.",
    "index.split.supply.label": "Supply",
    "index.split.supply.title": "Sell better density",
    "index.split.supply.text":
      "For coworking operators who want relevant traffic, not just more traffic.",
    "index.split.enterprise.label": "Enterprise",
    "index.split.enterprise.title": "Sell access to remote talent",
    "index.split.enterprise.text":
      "For companies hiring distributed teams and wanting a stronger presence in the freelance ecosystem.",
    "demand.hero.eyebrow": "Demand landing page",
    "demand.hero.title": "Work where people are.",
    "demand.hero.text":
      "here. helps freelancers and remote workers decide where to work today based on who is already there. No more random coworkings. No more forced networking. Just the right people, in the right place, at the right time.",
    "demand.hero.ctaPrimary": "Join the waitlist",
    "demand.hero.ctaSecondary": "See how it works",
    "demand.card.title": "Where should I work today?",
    "demand.card.placeOne": "Lavapiés",
    "demand.card.metaOne": "6 people here now",
    "demand.card.placeTwo": "Malasaña",
    "demand.card.metaTwo": "4 designers + 2 builders",
    "demand.card.placeThree": "Salamanca",
    "demand.card.metaThree": "Quiet room, strong focus energy",
    "demand.card.foot": "Choose a place for the people, not just the desk.",
    "demand.statement.one": "Stop picking your day blindly.",
    "demand.statement.two": "Start choosing it with context.",
    "demand.why.eyebrow": "Why people join",
    "demand.why.title": "A better workday starts with the right room.",
    "demand.why.one.title": "See real presence before you leave home",
    "demand.why.one.text":
      "Open the app and instantly understand where the energy is, who is around, and which place feels worth your time.",
    "demand.why.two.title": "Work near people you actually relate to",
    "demand.why.two.text":
      "Choose spaces because relevant people are there, not because the desk is technically available.",
    "demand.why.three.title": "Make solo days less frequent",
    "demand.why.three.text":
      "Build a rhythm around focus, energy, and ambient community instead of defaulting to isolation.",
    "demand.product.eyebrow": "The product",
    "demand.product.title":
      "The daily habit for people who do not want to work alone.",
    "demand.product.stepOne": "Open here. before you start.",
    "demand.product.stepTwo": "See who is working and where.",
    "demand.product.stepThree":
      "Choose the place that fits your people and your mood.",
    "demand.product.quote":
      "“Decide where to work today based on who’s there.”",
    "demand.benefits.eyebrow": "What you get",
    "demand.benefits.title":
      "Everything good about working with others, without the forced part.",
    "demand.benefits.one.title": "No more working alone",
    "demand.benefits.one.text":
      "Ambient community without the pressure of formal networking.",
    "demand.benefits.two.title": "Better focus and energy",
    "demand.benefits.two.text":
      "Shared momentum changes how the day feels and how much you get done.",
    "demand.benefits.three.title": "Relevant people around you",
    "demand.benefits.three.text":
      "Designers, builders, creators, and independent professionals in a context that already makes sense.",
    "demand.benefits.four.title": "Serendipity without randomness",
    "demand.benefits.four.text":
      "Better conversations happen when the environment is right and the timing is natural.",
    "demand.audience.eyebrow": "Initial audience",
    "demand.waitlist.eyebrow": "Join early",
    "demand.waitlist.title": "Find your people, every day.",
    "demand.waitlist.text":
      "Join the first group of users shaping a more social, more relevant, more intentional way to work.",
    "demand.form.emailLabel": "Email",
    "demand.form.roleLabel": "What best describes you?",
    "demand.form.roleOne": "Designer",
    "demand.form.roleTwo": "Builder",
    "demand.form.roleThree": "Marketer",
    "demand.form.roleFour": "Creator",
    "demand.form.roleFive": "Other independent professional",
    "demand.form.button": "Request access",
    "supply.hero.eyebrow": "Supply landing page",
    "supply.hero.title": "Fill your space with the right people.",
    "supply.hero.text":
      "here. helps coworking spaces turn underused desks into active community. We don’t just send traffic. We help create the right density at the right moments, with people who actually add to the atmosphere of the space.",
    "supply.hero.ctaPrimary": "Become a partner",
    "supply.hero.ctaSecondary": "See the value",
    "supply.metrics.label": "What here. optimizes",
    "supply.metrics.one.label": "Occupancy",
    "supply.metrics.one.value": "up",
    "supply.metrics.two.label": "Off-peak gaps",
    "supply.metrics.two.value": "down",
    "supply.metrics.three.label": "Community density",
    "supply.metrics.three.value": "stronger",
    "supply.metrics.note": "Space matters. But the feeling of the room matters more.",
    "supply.statement.one": "Do not just fill desks.",
    "supply.statement.two": "Fill the room with the right people.",
    "supply.value.eyebrow": "What partners get",
    "supply.value.title": "A stronger room, not just more foot traffic.",
    "supply.value.one.title": "Higher occupancy in softer moments",
    "supply.value.one.text":
      "here. helps direct quality users into mornings, midweek gaps, and other moments that usually feel underfilled.",
    "supply.value.two.title": "More predictable flow",
    "supply.value.two.text":
      "Instead of relying only on passive demand, spaces get a product that actively helps people decide to come in.",
    "supply.value.three.title": "Better community density",
    "supply.value.three.text":
      "The right users improve the feeling of the space for everyone else already inside it.",
    "supply.pitch.eyebrow": "The pitch",
    "supply.pitch.title": "We bring you relevant users when your space needs them most.",
    "supply.pitch.one": "Fill unused capacity with relevant users.",
    "supply.pitch.two": "Increase occupancy during low-density windows.",
    "supply.pitch.three": "Improve the social energy of the room.",
    "supply.pitch.four": "Bring recurring traffic without forcing a new behavior on staff.",
    "supply.pitch.quote": "“Turn empty desks into active community.”",
    "supply.profile.eyebrow": "Ideal partner profile",
    "supply.profile.title":
      "Especially strong for boutique coworkings that care about who enters.",
    "supply.profile.one.title": "10 to 40 desks",
    "supply.profile.one.text":
      "Smaller spaces where density changes the atmosphere immediately.",
    "supply.profile.two.title": "1 to 2 meeting rooms",
    "supply.profile.two.text":
      "Focused environments that benefit from a stronger daily rhythm.",
    "supply.profile.three.title": "Idle capacity in specific slots",
    "supply.profile.three.text":
      "Particularly mornings and midweek periods where demand softens.",
    "supply.profile.four.title": "Community-minded operators",
    "supply.profile.four.text":
      "Spaces that care about who comes in, not just how many people do.",
    "supply.market.eyebrow": "Market context",
    "supply.market.one": "Typical day pass",
    "supply.market.two": "Flexible desk / month",
    "supply.market.three": "Dedicated desk / month",
    "supply.form.eyebrow": "Partner with us",
    "supply.form.title": "Bring better density into the room.",
    "supply.form.text":
      "For operators who want stronger occupancy, stronger atmosphere, and stronger relevance without extra marketing lift.",
    "supply.form.nameLabel": "Workspace name",
    "supply.form.neighborhoodLabel": "Neighborhood",
    "supply.form.emailLabel": "Email",
    "supply.form.button": "Request partner info",
    "enterprise.hero.eyebrow": "Enterprise landing page",
    "enterprise.hero.title": "Hire remote talent where talent already gathers.",
    "enterprise.hero.text":
      "here. gives enterprises a B2B pack to reach high-signal remote professionals inside the places, routines, and communities where independent talent actually shows up. Less cold outreach. More qualified visibility.",
    "enterprise.hero.ctaPrimary": "Request the pack",
    "enterprise.hero.ctaSecondary": "See what’s included",
    "enterprise.metrics.label": "What the enterprise pack delivers",
    "enterprise.metrics.one.label": "Employer visibility",
    "enterprise.metrics.one.value": "stronger",
    "enterprise.metrics.two.label": "Remote talent access",
    "enterprise.metrics.two.value": "curated",
    "enterprise.metrics.three.label": "Hiring friction",
    "enterprise.metrics.three.value": "lower",
    "enterprise.metrics.note":
      "Show up where great remote professionals already spend their week.",
    "enterprise.statement.one": "Remote hiring is wide.",
    "enterprise.statement.two": "Great remote hiring still needs the right rooms.",
    "enterprise.value.eyebrow": "Why this works",
    "enterprise.value.title":
      "Remote candidates trust presence more than generic recruiting noise.",
    "enterprise.value.one.title": "Reach talent in context",
    "enterprise.value.one.text":
      "Your brand appears in an environment built for product, design, tech, marketing, and independent knowledge work.",
    "enterprise.value.two.title":
      "Attract people already open to opportunity",
    "enterprise.value.two.text":
      "The here. audience is composed of professionals who value relevant peers, flexible work, and new high-quality opportunities.",
    "enterprise.value.three.title": "Build signal, not just impressions",
    "enterprise.value.three.text":
      "Instead of only buying reach, you create repeated presence inside a trusted ecosystem of remote professionals.",
    "enterprise.offer.eyebrow": "The offer",
    "enterprise.offer.title":
      "A hiring pack for distributed teams that want better inbound.",
    "enterprise.offer.one":
      "Featured employer visibility inside the here. network.",
    "enterprise.offer.two":
      "Sponsored presence in relevant user journeys and work routines.",
    "enterprise.offer.three":
      "Access to curated talent clusters by discipline and geography.",
    "enterprise.offer.four":
      "Brand placement that connects hiring to real work environments.",
    "enterprise.offer.quote":
      "“Meet remote talent before you try to recruit them.”",
    "enterprise.buy.eyebrow": "What enterprises buy",
    "enterprise.buy.title": "A more credible path into remote communities.",
    "enterprise.buy.one.title": "Employer brand in the right environment",
    "enterprise.buy.one.text":
      "Position your company where top remote and freelance professionals already spend time making decisions about work.",
    "enterprise.buy.two.title": "Talent access by relevant discipline",
    "enterprise.buy.two.text":
      "Focus on the categories that matter most first: product, design, engineering, marketing, and content.",
    "enterprise.buy.three.title": "Ongoing presence, not one-off campaigns",
    "enterprise.buy.three.text":
      "Stay visible through a recurring layer of work-life visibility instead of relying only on job boards and outbound sourcing.",
    "enterprise.buy.four.title": "Better fit for remote-first teams",
    "enterprise.buy.four.text":
      "Speak directly to people who already operate well in flexible, distributed, self-directed work environments.",
    "enterprise.fit.eyebrow": "Best fit",
    "enterprise.fit.one.title": "Remote-first",
    "enterprise.fit.one.text": "Teams hiring across locations",
    "enterprise.fit.two.title": "Growth-stage",
    "enterprise.fit.two.text": "Companies needing repeat hiring motion",
    "enterprise.fit.three.title": "Selective",
    "enterprise.fit.three.text": "Brands that care about quality over volume",
    "enterprise.form.eyebrow": "Request enterprise info",
    "enterprise.form.title": "Put your hiring brand inside the workday.",
    "enterprise.form.text":
      "For enterprises hiring remote talent and looking for a more direct, more trusted, and more contextual way to get seen.",
    "enterprise.form.companyLabel": "Company",
    "enterprise.form.focusLabel": "Hiring focus",
    "enterprise.form.focusOne": "Product and design",
    "enterprise.form.focusTwo": "Engineering",
    "enterprise.form.focusThree": "Marketing and content",
    "enterprise.form.focusFour": "Cross-functional remote hiring",
    "enterprise.form.emailLabel": "Work email",
    "enterprise.form.button": "Talk to us",
  },
  es: {
    "nav.demand": "Demanda",
    "nav.supply": "Oferta",
    "nav.enterprise": "Enterprise",
    "meta.index.title": "here. | Presencia para trabajar",
    "meta.index.description":
      "here. es la capa de presencia para el trabajo: ayuda a freelancers a elegir dónde trabajar según quién está allí y a coworkings a crear mejor densidad.",
    "meta.demand.title": "here. | Demanda",
    "meta.demand.description":
      "Trabaja donde está la gente. here. ayuda a freelancers y profesionales remotos a elegir dónde trabajar hoy según quién está allí.",
    "meta.supply.title": "here. | Oferta",
    "meta.supply.description":
      "Llena tu espacio con la gente adecuada. here. ayuda a operadores de coworking a atraer usuarios de calidad a escritorios infrautilizados y horas de baja densidad.",
    "meta.enterprise.title": "here. | Enterprise",
    "meta.enterprise.description":
      "here. ayuda a empresas que contratan en remoto a ganar visibilidad frente a talento de alta intención mediante presencia curada, acceso de marca y packs de recruiting.",
    "index.hero.eyebrow": "Presencia para trabajar",
    "index.hero.title": "Elige dónde trabajar según quién está allí.",
    "index.hero.text":
      "here. es una capa de presencia en tiempo real para el trabajo. Ayuda a profesionales independientes a dejar de elegir un espacio a ciegas y a coworkings a crear la densidad que la gente realmente quiere encontrar.",
    "index.hero.ctaDemand": "Para demanda",
    "index.hero.ctaSupply": "Para oferta",
    "index.hero.ctaEnterprise": "Para enterprise",
    "index.card.today": "hoy",
    "index.card.title": "No es un agregador de coworkings.",
    "index.card.text":
      "Es una capa compartida que hace visible a la gente en el contexto del trabajo.",
    "index.statement.one": "El trabajo remoto hizo el trabajo flexible.",
    "index.statement.two": "También hizo que demasiada gente trabajara sola.",
    "index.problem.eyebrow": "El problema",
    "index.problem.title":
      "La gente no solo quiere un lugar para trabajar. Quiere el contexto adecuado.",
    "index.problem.one.title": "Los coworkings ofrecen espacio, no relevancia garantizada",
    "index.problem.one.text":
      "Puedes estar rodeado de gente y aun así sentirte solo porque las personas a tu alrededor son aleatorias, desconocidas o ajenas a tu trabajo.",
    "index.problem.two.title": "Los eventos de networking están desconectados del trabajo real",
    "index.problem.two.text":
      "Crean interacción, pero muchas veces fuera de los momentos en los que una conexión significativa ocurriría de forma natural.",
    "index.problem.three.title": "El aislamiento se vuelve rutina",
    "index.problem.three.text":
      "Casa, cafeterías y coworkings con poca energía convierten el trabajo en solitario en la opción por defecto, incluso para personas que rinden mejor acompañadas.",
    "index.solution.eyebrow": "La solución",
    "index.solution.title": "Hacer visible la presencia de trabajo en tiempo real.",
    "index.solution.text":
      "En lugar de elegir primero un espacio y esperar que el día salga bien, la gente abre here., ve quién está trabajando y dónde, y decide en función de eso. Ese pequeño cambio convierte el trabajo de una actividad aislada en una compartida.",
    "index.solution.quote":
      "“El ganador no agregará oferta. Orquestará densidad humana en el espacio físico.”",
    "index.market.eyebrow": "Lógica de mercado",
    "index.market.title":
      "Hay demanda de mejores días de trabajo y oferta con momentos vacíos por llenar.",
    "index.market.one.title": "Demanda",
    "index.market.one.text":
      "En Madrid existe un gran pool de knowledge workers y freelancers relevantes, especialmente en producto, diseño, tech, marketing, contenido, educación y servicios profesionales independientes.",
    "index.market.two.title": "Comportamiento",
    "index.market.two.text":
      "El contacto social es uno de los dolores más claros del trabajo remoto, y encaja directamente con el hábito matutino que here. quiere capturar.",
    "index.market.three.title": "Oferta",
    "index.market.three.text":
      "Madrid tiene un mercado fragmentado de coworkings con muchos espacios boutique, ocupación desigual y una infrautilización recurrente en horas valle.",
    "index.market.four.title": "Encaje",
    "index.market.four.text":
      "here. se sitúa entre ambos lados ayudando a los usuarios a elegir contexto y a los espacios a crear mejor densidad sin más carga operativa.",
    "index.split.eyebrow": "Cómo se divide",
    "index.split.title": "Un producto. Tres historias.",
    "index.split.demand.label": "Demanda",
    "index.split.demand.title": "Vender el mejor día de trabajo",
    "index.split.demand.text":
      "Para freelancers y profesionales remotos que quieren dejar de trabajar solos.",
    "index.split.supply.label": "Oferta",
    "index.split.supply.title": "Vender mejor densidad",
    "index.split.supply.text":
      "Para operadores de coworking que quieren tráfico relevante, no solo más tráfico.",
    "index.split.enterprise.label": "Enterprise",
    "index.split.enterprise.title": "Vender acceso a talento remoto",
    "index.split.enterprise.text":
      "Para empresas que contratan equipos distribuidos y quieren una presencia más fuerte en el ecosistema freelance.",
    "demand.hero.eyebrow": "Landing de demanda",
    "demand.hero.title": "Trabaja donde está la gente.",
    "demand.hero.text":
      "here. ayuda a freelancers y profesionales remotos a decidir dónde trabajar hoy según quién ya está allí. No más coworkings aleatorios. No más networking forzado. Solo la gente adecuada, en el lugar adecuado, en el momento adecuado.",
    "demand.hero.ctaPrimary": "Únete a la lista",
    "demand.hero.ctaSecondary": "Ver cómo funciona",
    "demand.card.title": "¿Dónde debería trabajar hoy?",
    "demand.card.placeOne": "Lavapiés",
    "demand.card.metaOne": "6 personas aquí ahora",
    "demand.card.placeTwo": "Malasaña",
    "demand.card.metaTwo": "4 diseñadores + 2 builders",
    "demand.card.placeThree": "Salamanca",
    "demand.card.metaThree": "Sala tranquila, fuerte energía de foco",
    "demand.card.foot": "Elige un lugar por la gente, no solo por el escritorio.",
    "demand.statement.one": "Deja de elegir tu día a ciegas.",
    "demand.statement.two": "Empieza a elegirlo con contexto.",
    "demand.why.eyebrow": "Por qué se apuntan",
    "demand.why.title": "Un mejor día de trabajo empieza con la sala correcta.",
    "demand.why.one.title": "Ve presencia real antes de salir de casa",
    "demand.why.one.text":
      "Abre la app y entiende al instante dónde está la energía, quién está alrededor y qué lugar realmente merece tu tiempo.",
    "demand.why.two.title": "Trabaja cerca de gente con la que sí conectas",
    "demand.why.two.text":
      "Elige espacios porque hay personas relevantes allí, no porque técnicamente haya una mesa libre.",
    "demand.why.three.title": "Haz que los días en solitario sean menos frecuentes",
    "demand.why.three.text":
      "Construye una rutina basada en foco, energía y comunidad ambiental en vez de caer por defecto en el aislamiento.",
    "demand.product.eyebrow": "El producto",
    "demand.product.title":
      "El hábito diario para quienes no quieren trabajar solos.",
    "demand.product.stepOne": "Abre here. antes de empezar.",
    "demand.product.stepTwo": "Mira quién está trabajando y dónde.",
    "demand.product.stepThree": "Elige el lugar que encaja con tu gente y tu mood.",
    "demand.product.quote":
      "“Decide dónde trabajar hoy según quién está allí.”",
    "demand.benefits.eyebrow": "Qué obtienes",
    "demand.benefits.title":
      "Todo lo bueno de trabajar con otros, sin la parte forzada.",
    "demand.benefits.one.title": "No más trabajar solo",
    "demand.benefits.one.text":
      "Comunidad ambiental sin la presión del networking formal.",
    "demand.benefits.two.title": "Mejor foco y energía",
    "demand.benefits.two.text":
      "El impulso compartido cambia cómo se siente el día y cuánto consigues hacer.",
    "demand.benefits.three.title": "Gente relevante a tu alrededor",
    "demand.benefits.three.text":
      "Diseñadores, builders, creadores y profesionales independientes en un contexto que ya tiene sentido.",
    "demand.benefits.four.title": "Serendipia sin aleatoriedad",
    "demand.benefits.four.text":
      "Las mejores conversaciones ocurren cuando el entorno es el correcto y el momento es natural.",
    "demand.audience.eyebrow": "Audiencia inicial",
    "demand.waitlist.eyebrow": "Únete pronto",
    "demand.waitlist.title": "Encuentra a tu gente, cada día.",
    "demand.waitlist.text":
      "Únete al primer grupo de usuarios que está dando forma a una manera más social, más relevante y más intencional de trabajar.",
    "demand.form.emailLabel": "Email",
    "demand.form.roleLabel": "¿Qué te describe mejor?",
    "demand.form.roleOne": "Diseñador/a",
    "demand.form.roleTwo": "Builder",
    "demand.form.roleThree": "Marketer",
    "demand.form.roleFour": "Creator",
    "demand.form.roleFive": "Otro profesional independiente",
    "demand.form.button": "Solicitar acceso",
    "supply.hero.eyebrow": "Landing de oferta",
    "supply.hero.title": "Llena tu espacio con la gente adecuada.",
    "supply.hero.text":
      "here. ayuda a los coworkings a convertir escritorios infrautilizados en comunidad activa. No solo enviamos tráfico. Ayudamos a crear la densidad adecuada en los momentos adecuados, con personas que realmente suman a la atmósfera del espacio.",
    "supply.hero.ctaPrimary": "Hazte partner",
    "supply.hero.ctaSecondary": "Ver el valor",
    "supply.metrics.label": "Lo que optimiza here.",
    "supply.metrics.one.label": "Ocupación",
    "supply.metrics.one.value": "sube",
    "supply.metrics.two.label": "Huecos en horas valle",
    "supply.metrics.two.value": "bajan",
    "supply.metrics.three.label": "Densidad de comunidad",
    "supply.metrics.three.value": "mejor",
    "supply.metrics.note": "El espacio importa. Pero la sensación de la sala importa más.",
    "supply.statement.one": "No llenes solo escritorios.",
    "supply.statement.two": "Llena la sala con la gente adecuada.",
    "supply.value.eyebrow": "Qué ganan los partners",
    "supply.value.title": "Una sala más fuerte, no solo más tráfico.",
    "supply.value.one.title": "Más ocupación en momentos flojos",
    "supply.value.one.text":
      "here. ayuda a dirigir usuarios de calidad hacia mañanas, huecos de mitad de semana y otros momentos que suelen sentirse vacíos.",
    "supply.value.two.title": "Flujo más predecible",
    "supply.value.two.text":
      "En lugar de depender solo de demanda pasiva, los espacios consiguen un producto que ayuda activamente a la gente a decidir ir.",
    "supply.value.three.title": "Mejor densidad de comunidad",
    "supply.value.three.text":
      "La gente adecuada mejora la sensación del espacio para todos los que ya están dentro.",
    "supply.pitch.eyebrow": "El pitch",
    "supply.pitch.title": "Llevamos usuarios relevantes cuando tu espacio más los necesita.",
    "supply.pitch.one": "Llena capacidad ociosa con usuarios relevantes.",
    "supply.pitch.two": "Aumenta la ocupación en franjas de baja densidad.",
    "supply.pitch.three": "Mejora la energía social de la sala.",
    "supply.pitch.four": "Genera tráfico recurrente sin forzar nuevos comportamientos al equipo.",
    "supply.pitch.quote": "“Convierte escritorios vacíos en comunidad activa.”",
    "supply.profile.eyebrow": "Perfil ideal de partner",
    "supply.profile.title":
      "Especialmente potente para coworkings boutique que cuidan quién entra.",
    "supply.profile.one.title": "10 a 40 escritorios",
    "supply.profile.one.text":
      "Espacios pequeños donde la densidad cambia la atmósfera de inmediato.",
    "supply.profile.two.title": "1 a 2 salas de reuniones",
    "supply.profile.two.text":
      "Entornos enfocados que se benefician de un ritmo diario más fuerte.",
    "supply.profile.three.title": "Capacidad ociosa en franjas concretas",
    "supply.profile.three.text":
      "Especialmente mañanas y periodos de mitad de semana donde la demanda baja.",
    "supply.profile.four.title": "Operadores orientados a comunidad",
    "supply.profile.four.text":
      "Espacios que se preocupan por quién entra, no solo por cuánta gente entra.",
    "supply.market.eyebrow": "Contexto de mercado",
    "supply.market.one": "Day pass típico",
    "supply.market.two": "Flexible desk / mes",
    "supply.market.three": "Dedicated desk / mes",
    "supply.form.eyebrow": "Hazte partner",
    "supply.form.title": "Lleva mejor densidad a la sala.",
    "supply.form.text":
      "Para operadores que quieren más ocupación, mejor atmósfera y más relevancia sin más esfuerzo de marketing.",
    "supply.form.nameLabel": "Nombre del espacio",
    "supply.form.neighborhoodLabel": "Barrio",
    "supply.form.emailLabel": "Email",
    "supply.form.button": "Solicitar info para partners",
    "enterprise.hero.eyebrow": "Landing enterprise",
    "enterprise.hero.title": "Contrata talento remoto donde el talento ya se reúne.",
    "enterprise.hero.text":
      "here. ofrece a las empresas un pack B2B para llegar a profesionales remotos de alta señal dentro de los lugares, rutinas y comunidades donde el talento independiente realmente aparece. Menos cold outreach. Más visibilidad cualificada.",
    "enterprise.hero.ctaPrimary": "Solicitar el pack",
    "enterprise.hero.ctaSecondary": "Ver qué incluye",
    "enterprise.metrics.label": "Lo que entrega el pack enterprise",
    "enterprise.metrics.one.label": "Visibilidad empleadora",
    "enterprise.metrics.one.value": "mejor",
    "enterprise.metrics.two.label": "Acceso a talento remoto",
    "enterprise.metrics.two.value": "curado",
    "enterprise.metrics.three.label": "Fricción de contratación",
    "enterprise.metrics.three.value": "menor",
    "enterprise.metrics.note":
      "Aparece donde grandes profesionales remotos ya pasan su semana.",
    "enterprise.statement.one": "La contratación remota es amplia.",
    "enterprise.statement.two": "La gran contratación remota aún necesita las salas correctas.",
    "enterprise.value.eyebrow": "Por qué funciona",
    "enterprise.value.title":
      "Los candidatos remotos confían más en la presencia que en el ruido genérico de recruiting.",
    "enterprise.value.one.title": "Llega al talento en contexto",
    "enterprise.value.one.text":
      "Tu marca aparece en un entorno construido para producto, diseño, tech, marketing y trabajo de conocimiento independiente.",
    "enterprise.value.two.title": "Atrae personas ya abiertas a oportunidades",
    "enterprise.value.two.text":
      "La audiencia de here. está compuesta por profesionales que valoran pares relevantes, trabajo flexible y nuevas oportunidades de calidad.",
    "enterprise.value.three.title": "Construye señal, no solo impresiones",
    "enterprise.value.three.text":
      "En vez de comprar solo alcance, generas presencia repetida dentro de un ecosistema confiable de profesionales remotos.",
    "enterprise.offer.eyebrow": "La oferta",
    "enterprise.offer.title":
      "Un pack de hiring para equipos distribuidos que quieren mejor inbound.",
    "enterprise.offer.one":
      "Visibilidad destacada de employer brand dentro de la red here.",
    "enterprise.offer.two":
      "Presencia patrocinada en user journeys y rutinas de trabajo relevantes.",
    "enterprise.offer.three":
      "Acceso a clusters de talento curados por disciplina y geografía.",
    "enterprise.offer.four":
      "Brand placement que conecta hiring con entornos de trabajo reales.",
    "enterprise.offer.quote":
      "“Conoce talento remoto antes de intentar reclutarlo.”",
    "enterprise.buy.eyebrow": "Lo que compran las empresas",
    "enterprise.buy.title": "Un camino más creíble hacia comunidades remotas.",
    "enterprise.buy.one.title": "Employer brand en el entorno correcto",
    "enterprise.buy.one.text":
      "Posiciona tu empresa donde profesionales remotos y freelance top ya pasan tiempo tomando decisiones sobre trabajo.",
    "enterprise.buy.two.title": "Acceso a talento por disciplina relevante",
    "enterprise.buy.two.text":
      "Empieza con las categorías que más importan: producto, diseño, ingeniería, marketing y contenido.",
    "enterprise.buy.three.title": "Presencia continua, no campañas aisladas",
    "enterprise.buy.three.text":
      "Mantente visible mediante una capa recurrente de visibilidad en la vida laboral en lugar de depender solo de job boards y outbound.",
    "enterprise.buy.four.title": "Mejor encaje para equipos remote-first",
    "enterprise.buy.four.text":
      "Habla directamente con personas que ya operan bien en entornos flexibles, distribuidos y autodirigidos.",
    "enterprise.fit.eyebrow": "Mejor encaje",
    "enterprise.fit.one.title": "Remote-first",
    "enterprise.fit.one.text": "Equipos que contratan en distintas ubicaciones",
    "enterprise.fit.two.title": "Growth-stage",
    "enterprise.fit.two.text": "Empresas que necesitan una máquina de hiring repetible",
    "enterprise.fit.three.title": "Selectivas",
    "enterprise.fit.three.text": "Marcas que priorizan calidad sobre volumen",
    "enterprise.form.eyebrow": "Solicitar info enterprise",
    "enterprise.form.title": "Pon tu marca empleadora dentro del workday.",
    "enterprise.form.text":
      "Para empresas que contratan talento remoto y buscan una forma más directa, más confiable y más contextual de hacerse visibles.",
    "enterprise.form.companyLabel": "Empresa",
    "enterprise.form.focusLabel": "Foco de contratación",
    "enterprise.form.focusOne": "Producto y diseño",
    "enterprise.form.focusTwo": "Ingeniería",
    "enterprise.form.focusThree": "Marketing y contenido",
    "enterprise.form.focusFour": "Contratación remota cross-functional",
    "enterprise.form.emailLabel": "Email de trabajo",
    "enterprise.form.button": "Hablar con nosotros",
  },
};

const applyTranslations = (language) => {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const [attribute, key] = element.dataset.i18nAttr.split(":");
    if (dictionary[key]) {
      element.setAttribute(attribute, dictionary[key]);
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
    button.setAttribute(
      "aria-pressed",
      button.dataset.lang === language ? "true" : "false"
    );
  });
};

const setupLanguageSwitcher = () => {
  const storedLanguage = localStorage.getItem("here-language") || "en";
  applyTranslations(storedLanguage);

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.lang;
      localStorage.setItem("here-language", language);
      applyTranslations(language);
    });
  });
};

const playIndexSound = () => {
  if (!document.body.classList.contains("index-page")) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  const context = new AudioContextClass();
  const now = context.currentTime;

  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.18, now + 0.03);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
  master.connect(context.destination);

  const oscA = context.createOscillator();
  oscA.type = "triangle";
  oscA.frequency.setValueAtTime(392, now);
  oscA.frequency.exponentialRampToValueAtTime(523.25, now + 0.22);

  const oscB = context.createOscillator();
  oscB.type = "sine";
  oscB.frequency.setValueAtTime(523.25, now + 0.08);
  oscB.frequency.exponentialRampToValueAtTime(659.25, now + 0.3);

  oscA.connect(master);
  oscB.connect(master);

  oscA.start(now);
  oscB.start(now + 0.08);
  oscA.stop(now + 0.55);
  oscB.stop(now + 0.55);
};

if (document.readyState === "complete") {
  setupLanguageSwitcher();
  playIndexSound();
} else {
  window.addEventListener(
    "load",
    () => {
      setupLanguageSwitcher();
      playIndexSound();
    },
    { once: true }
  );
}
