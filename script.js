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
    "nav.demand": "Workers",
    "nav.supply": "Supply",
    "nav.enterprise": "Enterprise",
    "meta.index.title": "here. | Coordinate Presence",
    "meta.index.description":
      "here. is the people-first coordination layer that turns flexible work into repeatable, high-density in-person sessions.",
    "meta.demand.title": "here. | Workers",
    "meta.demand.description":
      "here. shows workers who is at each coworking so they can choose where to go based on people, not guesswork.",
    "meta.supply.title": "here. | Supply",
    "meta.supply.description":
      "here. partners with workspace venues to turn flexible supply into recurring, high-density sessions with lightweight commitments.",
    "meta.enterprise.title": "here. | Enterprise",
    "meta.enterprise.description":
      "here. gives companies a way to show up inside recurring role-based work sessions where high-signal independent talent already gathers.",
    "index.hero.eyebrow": "People-first coordination layer",
    "index.hero.title": "Coordinate presence. Build real-world density.",
    "index.hero.text":
      "here. makes who is working where visible so independent professionals can converge on the right people in the same place, same time. We turn flexible work into repeatable, high-density sessions without owning real estate.",
    "index.hero.ctaDemand": "For demand",
    "index.hero.ctaSupply": "For supply",
    "index.hero.ctaEnterprise": "For enterprise",
    "index.card.today": "now",
    "index.card.title": "Commitment-first MVP.",
    "index.card.text":
      "Scheduled presence and RSVP first. Real-time density next.",
    "index.statement.one": "See who's Here. Join them.",
    "index.statement.two": "Don't work alone. Be Here.",
    "index.problem.eyebrow": "Three pillars",
    "index.problem.title":
      "A city-by-city model built on presence, sessions, and partner venues.",
    "index.problem.one.title": "Make relevant people visible in real time",
    "index.problem.one.text":
      "Turn workspace choice into people-first coordination across physical workspaces.",
    "index.problem.two.title": "Create recurring density through sessions and hosts",
    "index.problem.two.text":
      "Lightweight commitments and repeatable rituals make attendance more reliable.",
    "index.problem.three.title": "Stay asset-light through supply partnerships",
    "index.problem.three.text":
      "Work with existing venues, day-access pricing, and scale one city and one cohort at a time.",
    "index.solution.eyebrow": "Positioning",
    "index.solution.title": "Flexible work becomes defensible when density becomes repeatable.",
    "index.solution.text":
      "The wedge is not everyone in one city. It is one role community, 3–5 partner venues, and weekly Here Sessions that reliably reach critical mass before broader expansion.",
    "index.solution.quote":
      "“Coordinate presence. Build density. Create value.”",
    "index.market.eyebrow": "Proof points",
    "index.market.title":
      "The tailwinds are already here.",
    "index.market.one.title": "55% demand signal",
    "index.market.one.text":
      "55% of global occupiers already use flexible office solutions.",
    "index.market.two.title": "21% flex allocation",
    "index.market.two.text":
      "Europe flex allocation grew from 12% in 2024 to 21% in 2025.",
    "index.market.three.title": "€19–€40 day access",
    "index.market.three.text":
      "Partner-friendly day pricing means low-friction supply already exists.",
    "index.market.four.title": "What to track",
    "index.market.four.text":
      "Density, retention, and RSVP-to-arrival reliability tell you if the coordination loop is working.",
    "index.gtm.eyebrow": "Go-to-market and KPIs",
    "index.gtm.one.title": "Wedge by cohort",
    "index.gtm.one.text":
      "Launch one role community and win density before expanding.",
    "index.gtm.two.title": "Ritualize demand",
    "index.gtm.two.text":
      "Run weekly Here Sessions across 3–5 partner venues.",
    "index.gtm.three.title": "Track reliability",
    "index.gtm.three.text":
      "Watch attendees per session, repeat rate, and RSVP-to-arrival.",
    "index.split.eyebrow": "Audience paths",
    "index.split.title": "Three entry points into the same coordination engine.",
    "index.split.demand.label": "Workers",
    "index.split.demand.title": "Sell repeatable work sessions",
    "index.split.demand.text":
      "For independent professionals who want to stop choosing workdays blindly.",
    "index.split.supply.label": "Supply",
    "index.split.supply.title": "Sell recurring density",
    "index.split.supply.text":
      "For venue partners who want predictable sessions, not random foot traffic.",
    "index.split.enterprise.label": "Enterprise",
    "index.split.enterprise.title": "Sell sponsored presence",
    "index.split.enterprise.text":
      "For companies that want visibility inside high-signal role communities.",
    "demand.hero.eyebrow": "Workers page",
    "demand.hero.title": "Work from different coworkings — with the right people.",
    "demand.hero.text":
      "See who's working, where and move freely.",
    "demand.hero.subOne": "Access great coworkings.",
    "demand.hero.subTwo": "Know who's there.",
    "demand.hero.subThree": "Choose better.",
    "demand.hero.ctaPrimary": "Move between coworkings. Find your people.",
    "demand.hero.ctaSecondary": "Your office is the city. Choose better.",
    "demand.card.title": "Spaces near you",
    "demand.card.today": "Today",
    "demand.card.placeOne": "The Workshop",
    "demand.card.metaOne": "Kreuzberg",
    "demand.card.countOne": "7",
    "demand.card.tagOne": "5 designers",
    "demand.card.tagTwo": "2 developers",
    "demand.card.placeTwo": "Cafe Desk",
    "demand.card.metaTwo": "Mitte",
    "demand.card.countTwo": "1",
    "demand.card.tagThree": "1 person",
    "demand.card.placeThree": "CoBase",
    "demand.card.metaThree": "Friedrichshain",
    "demand.card.countThree": "3",
    "demand.card.tagFour": "3 marketers",
    "demand.flex.eyebrow": "A better default",
    "demand.flex.title": "Stop going to the same place every day",
    "demand.flex.oldLabel": "You don't need",
    "demand.flex.oldOne": "one coworking",
    "demand.flex.oldTwo": "one routine",
    "demand.flex.newLabel": "You need",
    "demand.flex.newOne": "flexibility",
    "demand.flex.newTwo": "variety",
    "demand.flex.newThree": "the right people",
    "demand.flex.foot": "Here gives you all three.",
    "demand.problem.eyebrow": "Product narrative",
    "demand.problem.title": "From habit to intentional choice.",
    "demand.problem.oldLabel": "Without Here",
    "demand.problem.one.title": "you pick a coworking",
    "demand.problem.two.title": "you hope it's good",
    "demand.problem.newLabel": "With Here",
    "demand.problem.newOne": "you see where interesting people are",
    "demand.problem.newTwo": "you choose",
    "demand.problem.newThree": "you go",
    "demand.problem.foot": "Big shift: from habit to intentional choice.",
    "demand.insight.one": "Your office is the city.",
    "demand.insight.two": "Choose better.",
    "demand.solution.eyebrow": "The solution",
    "demand.solution.title": "With Here you can:",
    "demand.solution.one.title": "See who's working in each space",
    "demand.solution.one.text":
      "Real-time visibility into who is checked in at coworkings near you.",
    "demand.solution.two.title": "Find people doing similar work",
    "demand.solution.two.text":
      "Look for designers, developers, creators, and freelancers before you decide.",
    "demand.solution.three.title": "Choose where to go based on that",
    "demand.solution.three.text":
      "Make the decision based on people, not just on space.",
    "demand.how.eyebrow": "How it works",
    "demand.how.one.title": "See who's working",
    "demand.how.one.text":
      "Check real-time activity at spaces near you.",
    "demand.how.two.title": "Choose where to go",
    "demand.how.two.text":
      "Pick the space with the right people today.",
    "demand.how.three.title": "Show up",
    "demand.how.three.text":
      "Walk in and start working with your people.",
    "demand.social.eyebrow": "What people say",
    "demand.social.one.quote":
      "“I went because I knew who was there. Best work day in months.”",
    "demand.social.one.meta": "Alex M. · Product Designer",
    "demand.social.two.quote":
      "“Completely different energy from a normal coworking day.”",
    "demand.social.two.meta": "Sara K. · Frontend Developer",
    "demand.waitlist.eyebrow": "Join early",
    "demand.waitlist.title": "Different place. Better people. Better day.",
    "demand.waitlist.text":
      "Work from anywhere. Not with anyone.",
    "demand.form.emailLabel": "Email",
    "demand.form.roleLabel": "What best describes your work?",
    "demand.form.roleOne": "Designer",
    "demand.form.roleTwo": "Developer",
    "demand.form.roleThree": "Creator",
    "demand.form.roleFour": "Remote worker",
    "demand.form.roleFive": "Freelancer",
    "demand.form.emailPlaceholder": "name@email.com",
    "demand.form.button": "Join the waitlist",
    "supply.hero.eyebrow": "Supply landing page",
    "supply.hero.title": "Turn flexible space into repeatable density.",
    "supply.hero.text":
      "here. partners with workspace supply to run recurring high-signal sessions that bring the right people into the same venue at the same time. Asset-light for us, partner-friendly for you.",
    "supply.hero.ctaPrimary": "Become a partner",
    "supply.hero.ctaSecondary": "See the value",
    "supply.metrics.label": "What partner venues gain",
    "supply.metrics.one.label": "Occupancy",
    "supply.metrics.one.value": "up",
    "supply.metrics.two.label": "Session reliability",
    "supply.metrics.two.value": "better",
    "supply.metrics.three.label": "Density",
    "supply.metrics.three.value": "repeatable",
    "supply.metrics.note": "Sessions, hosts, and RSVP commitments make traffic more predictable.",
    "supply.statement.one": "Do not just sell day access.",
    "supply.statement.two": "Sell reliable density.",
    "supply.value.eyebrow": "Why venues join",
    "supply.value.title": "Here makes flexible demand easier to coordinate and easier to trust.",
    "supply.value.one.title": "Fill specific time windows with committed attendees",
    "supply.value.one.text":
      "Weekly sessions let you coordinate around real commitments instead of hoping walk-in traffic appears.",
    "supply.value.two.title": "Use recurring rituals to create better traffic patterns",
    "supply.value.two.text":
      "The same rooms, the same cohorts, and the same cadence improve reliability.",
    "supply.value.three.title": "Make the room feel better for everyone already inside",
    "supply.value.three.text":
      "Density is valuable because atmosphere improves when the right people converge.",
    "supply.pitch.eyebrow": "How the model works",
    "supply.pitch.title": "Partner with supply. Stay asset-light. Scale city by city.",
    "supply.pitch.one": "Start with 3–5 partner venues.",
    "supply.pitch.two": "Use session hosts and lightweight RSVP commitments.",
    "supply.pitch.three": "Work with day-access pricing already accepted by the market.",
    "supply.pitch.four": "Expand venue count only after one cohort reliably hits density.",
    "supply.pitch.quote": "“Partner with workspace supply; stay asset-light.”",
    "supply.profile.eyebrow": "Best early venues",
    "supply.profile.title":
      "Boutique coworkings with flexible inventory and appetite for community.",
    "supply.profile.one.title": "Central neighborhoods",
    "supply.profile.one.text":
      "Walkable locations make repeat attendance and convergence easier.",
    "supply.profile.two.title": "Day access already offered",
    "supply.profile.two.text":
      "Low-friction pricing makes partner onboarding easier from the start.",
    "supply.profile.three.title": "Room to absorb weekly session peaks",
    "supply.profile.three.text":
      "The model works best where weekly density can become a visible ritual.",
    "supply.profile.four.title": "Operators who care about atmosphere",
    "supply.profile.four.text":
      "The best partners value who enters the room, not just how many people do.",
    "supply.market.eyebrow": "Market context",
    "supply.market.one": "Typical day access",
    "supply.market.two.title": "Low friction",
    "supply.market.two": "Supply already exists and pricing is familiar.",
    "supply.market.three.title": "Partner-friendly",
    "supply.market.three": "No real estate ownership required to scale the model.",
    "supply.form.eyebrow": "Partner with us",
    "supply.form.title": "Bring Here Sessions into your venue.",
    "supply.form.text":
      "For operators who want recurring density, better atmosphere, and a stronger reason for the right people to show up together.",
    "supply.form.nameLabel": "Workspace name",
    "supply.form.namePlaceholder": "Your coworking space",
    "supply.form.neighborhoodLabel": "Neighborhood",
    "supply.form.neighborhoodPlaceholder": "Lavapiés, Malasaña, Tetuán...",
    "supply.form.emailLabel": "Email",
    "supply.form.emailPlaceholder": "team@workspace.com",
    "supply.form.button": "Request partner info",
    "enterprise.hero.eyebrow": "Enterprise landing page",
    "enterprise.hero.title": "Show up inside high-signal work sessions.",
    "enterprise.hero.text":
      "here. gives teams and employers a way to appear inside recurring role-based sessions where independent professionals already gather. Better signal than cold outreach, more trust than generic job posts.",
    "enterprise.hero.ctaPrimary": "Request the pack",
    "enterprise.hero.ctaSecondary": "See what’s included",
    "enterprise.metrics.label": "What enterprise gets",
    "enterprise.metrics.one.label": "Contextual visibility",
    "enterprise.metrics.one.value": "stronger",
    "enterprise.metrics.two.label": "Role-based access",
    "enterprise.metrics.two.value": "targeted",
    "enterprise.metrics.three.label": "Trust",
    "enterprise.metrics.three.value": "higher",
    "enterprise.metrics.note":
      "Presence inside real sessions creates better brand memory than static listings.",
    "enterprise.statement.one": "Reach people in the workday.",
    "enterprise.statement.two": "Not after it.",
    "enterprise.value.eyebrow": "Why this matters",
    "enterprise.value.title":
      "High-signal communities are built through recurring presence, not one-off campaigns.",
    "enterprise.value.one.title": "Show up where product, design, and builder cohorts already meet",
    "enterprise.value.one.text":
      "Visibility works better when it appears inside a room people already trust.",
    "enterprise.value.two.title":
      "Support sessions without trying to own the community",
    "enterprise.value.two.text":
      "The value is adjacency, sponsorship, and relevance rather than interruption.",
    "enterprise.value.three.title": "Stay close to talent and collaborators as habits form",
    "enterprise.value.three.text":
      "Repeated presence creates signal that generic recruiting channels cannot.",
    "enterprise.offer.eyebrow": "The offer",
    "enterprise.offer.title":
      "A lighter-weight enterprise offer built around presence.",
    "enterprise.offer.one":
      "Sponsored Here Sessions for specific role cohorts.",
    "enterprise.offer.two":
      "Contextual employer visibility inside recurring work rituals.",
    "enterprise.offer.three":
      "Access to high-signal communities by role and city.",
    "enterprise.offer.four":
      "A future path into hiring packs once density is established.",
    "enterprise.offer.quote":
      "“Create value where real-world density already exists.”",
    "enterprise.buy.eyebrow": "What enterprises buy",
    "enterprise.buy.title": "A better route into flexible talent networks.",
    "enterprise.buy.one.title": "Brand presence inside trusted sessions",
    "enterprise.buy.one.text":
      "Appear where professionals are already choosing where and with whom to work.",
    "enterprise.buy.two.title": "Role-specific access without broad noisy spend",
    "enterprise.buy.two.text":
      "Start with the cohorts that matter most, then expand as density compounds.",
    "enterprise.buy.three.title": "Repeated signal instead of one-off campaigns",
    "enterprise.buy.three.text":
      "Repetition inside recurring sessions makes the brand feel more credible.",
    "enterprise.buy.four.title": "A path toward future hiring products",
    "enterprise.buy.four.text":
      "Start with presence and sponsorship, then layer in hiring access as the network matures.",
    "enterprise.fit.eyebrow": "Best fit",
    "enterprise.fit.one.title": "Remote-first",
    "enterprise.fit.one.text": "Teams building around distributed work habits",
    "enterprise.fit.two.title": "Design-forward",
    "enterprise.fit.two.text": "Brands that care how they show up in communities",
    "enterprise.fit.three.title": "Selective",
    "enterprise.fit.three.text": "Teams that value quality, trust, and adjacency over volume",
    "enterprise.form.eyebrow": "Request enterprise info",
    "enterprise.form.title": "Get the enterprise pack.",
    "enterprise.form.text":
      "For companies that want sponsored presence inside recurring role-based sessions before broader hiring products arrive.",
    "enterprise.form.companyLabel": "Company",
    "enterprise.form.companyPlaceholder": "Company name",
    "enterprise.form.focusLabel": "Hiring focus",
    "enterprise.form.focusOne": "Product and design",
    "enterprise.form.focusTwo": "Engineering",
    "enterprise.form.focusThree": "Marketing and content",
    "enterprise.form.focusFour": "Cross-functional remote hiring",
    "enterprise.form.emailLabel": "Work email",
    "enterprise.form.emailPlaceholder": "name@company.com",
    "enterprise.form.button": "Talk to us",
  },
  es: {
    "nav.demand": "Workers",
    "nav.supply": "Oferta",
    "nav.enterprise": "Enterprise",
    "meta.index.title": "here. | Coordina presencia",
    "meta.index.description":
      "here. es la capa de coordinación centrada en personas que convierte el trabajo flexible en sesiones presenciales repetibles y densas.",
    "meta.demand.title": "here. | Workers",
    "meta.demand.description":
      "here. muestra a los workers quién está en cada coworking para que puedan decidir adónde ir según las personas, no a ciegas.",
    "meta.supply.title": "here. | Oferta",
    "meta.supply.description":
      "here. se asocia con venues y coworkings para convertir oferta flexible en sesiones recurrentes de alta densidad con compromisos ligeros.",
    "meta.enterprise.title": "here. | Enterprise",
    "meta.enterprise.description":
      "here. da a las empresas una forma de aparecer dentro de sesiones de trabajo recurrentes donde ya se reúne talento independiente de alta señal.",
    "index.hero.eyebrow": "Capa de coordinación centrada en personas",
    "index.hero.title": "Coordina presencia. Construye densidad real.",
    "index.hero.text":
      "here. hace visible quién va a trabajar dónde para que profesionales independientes converjan con la gente correcta, en el mismo lugar y al mismo tiempo. Convertimos trabajo flexible en sesiones repetibles de alta densidad sin poseer real estate.",
    "index.hero.ctaDemand": "Para demanda",
    "index.hero.ctaSupply": "Para oferta",
    "index.hero.ctaEnterprise": "Para enterprise",
    "index.card.today": "ahora",
    "index.card.title": "MVP commitment-first.",
    "index.card.text":
      "Presencia programada y RSVP primero. Densidad en tiempo real después.",
    "index.statement.one": "Mira quién está Here. Súmate.",
    "index.statement.two": "No trabajes sola. Be Here.",
    "index.problem.eyebrow": "Tres pilares",
    "index.problem.title":
      "Un modelo city-by-city construido sobre presencia, sesiones y venues partners.",
    "index.problem.one.title": "Haz visible a la gente relevante en tiempo real",
    "index.problem.one.text":
      "Convierte la elección del workspace en coordinación centrada en personas.",
    "index.problem.two.title": "Crea densidad recurrente con sesiones y hosts",
    "index.problem.two.text":
      "Compromisos ligeros y rituales repetibles hacen la asistencia más fiable.",
    "index.problem.three.title": "Mantente asset-light gracias a partners de supply",
    "index.problem.three.text":
      "Trabaja con venues existentes, precios de day access y escala por ciudad y cohorte.",
    "index.solution.eyebrow": "Posicionamiento",
    "index.solution.title": "El trabajo flexible se vuelve defensible cuando la densidad es repetible.",
    "index.solution.text":
      "La cuña no es toda la ciudad a la vez. Es una comunidad de rol, 3–5 venues partners y Here Sessions semanales que alcanzan masa crítica de forma fiable antes de expandirse.",
    "index.solution.quote":
      "“Coordina presencia. Construye densidad. Crea valor.”",
    "index.market.eyebrow": "Pruebas",
    "index.market.title":
      "Los tailwinds ya existen.",
    "index.market.one.title": "55% señal de demanda",
    "index.market.one.text":
      "El 55% de los occupiers globales ya usa soluciones de oficina flexible.",
    "index.market.two.title": "21% asignación flex",
    "index.market.two.text":
      "La asignación flex en Europa pasó del 12% en 2024 al 21% en 2025.",
    "index.market.three.title": "€19–€40 day access",
    "index.market.three.text":
      "Ya existe supply con precios partner-friendly y baja fricción.",
    "index.market.four.title": "Qué medir",
    "index.market.four.text":
      "Densidad, retención y conversión de RSVP a llegada muestran si el loop funciona.",
    "index.gtm.eyebrow": "Go-to-market y KPIs",
    "index.gtm.one.title": "Entrar por cohorte",
    "index.gtm.one.text":
      "Lanza una comunidad de rol y gana densidad antes de expandirte.",
    "index.gtm.two.title": "Ritualiza la demanda",
    "index.gtm.two.text":
      "Corre Here Sessions semanales en 3–5 venues partners.",
    "index.gtm.three.title": "Mide fiabilidad",
    "index.gtm.three.text":
      "Observa asistentes por sesión, repetición y conversión de RSVP a llegada.",
    "index.split.eyebrow": "Entradas por audiencia",
    "index.split.title": "Tres puertas de entrada al mismo motor de coordinación.",
    "index.split.demand.label": "Workers",
    "index.split.demand.title": "Vender sesiones de trabajo repetibles",
    "index.split.demand.text":
      "Para profesionales independientes que quieren dejar de elegir sus días a ciegas.",
    "index.split.supply.label": "Oferta",
    "index.split.supply.title": "Vender densidad recurrente",
    "index.split.supply.text":
      "Para venues que quieren sesiones predecibles, no solo tráfico aleatorio.",
    "index.split.enterprise.label": "Enterprise",
    "index.split.enterprise.title": "Vender presencia patrocinada",
    "index.split.enterprise.text":
      "Para empresas que quieren visibilidad dentro de comunidades de rol de alta señal.",
    "demand.hero.eyebrow": "Página Workers",
    "demand.hero.title": "Trabaja desde distintos coworkings, con la gente correcta.",
    "demand.hero.text":
      "Mira quién está trabajando, dónde, y muévete con libertad.",
    "demand.hero.subOne": "Accede a great coworkings.",
    "demand.hero.subTwo": "Sabe quién está allí.",
    "demand.hero.subThree": "Elige mejor.",
    "demand.hero.ctaPrimary": "Muévete entre coworkings. Encuentra a tu gente.",
    "demand.hero.ctaSecondary": "Tu oficina es la ciudad. Elige mejor.",
    "demand.card.title": "Espacios cerca de ti",
    "demand.card.today": "Hoy",
    "demand.card.placeOne": "The Workshop",
    "demand.card.metaOne": "Kreuzberg",
    "demand.card.countOne": "7",
    "demand.card.tagOne": "5 diseñadores",
    "demand.card.tagTwo": "2 developers",
    "demand.card.placeTwo": "Cafe Desk",
    "demand.card.metaTwo": "Mitte",
    "demand.card.countTwo": "1",
    "demand.card.tagThree": "1 persona",
    "demand.card.placeThree": "CoBase",
    "demand.card.metaThree": "Friedrichshain",
    "demand.card.countThree": "3",
    "demand.card.tagFour": "3 marketers",
    "demand.flex.eyebrow": "Un mejor default",
    "demand.flex.title": "Deja de ir al mismo sitio todos los días",
    "demand.flex.oldLabel": "No necesitas",
    "demand.flex.oldOne": "un coworking",
    "demand.flex.oldTwo": "una rutina",
    "demand.flex.newLabel": "Necesitas",
    "demand.flex.newOne": "flexibilidad",
    "demand.flex.newTwo": "variedad",
    "demand.flex.newThree": "la gente correcta",
    "demand.flex.foot": "Here te da las tres.",
    "demand.problem.eyebrow": "Narrativa de producto",
    "demand.problem.title": "Del hábito a una elección intencional.",
    "demand.problem.oldLabel": "Sin Here",
    "demand.problem.one.title": "eliges un coworking",
    "demand.problem.two.title": "esperas que esté bien",
    "demand.problem.newLabel": "Con Here",
    "demand.problem.newOne": "ves dónde está la gente interesante",
    "demand.problem.newTwo": "eliges",
    "demand.problem.newThree": "vas",
    "demand.problem.foot": "Gran cambio: del hábito a la elección intencional.",
    "demand.insight.one": "Tu oficina es la ciudad.",
    "demand.insight.two": "Elige mejor.",
    "demand.solution.eyebrow": "La solución",
    "demand.solution.title": "Con Here puedes:",
    "demand.solution.one.title": "Ver quién está trabajando en cada espacio",
    "demand.solution.one.text":
      "Visibilidad en tiempo real de quién está en coworkings cerca de ti.",
    "demand.solution.two.title": "Encontrar gente que hace un trabajo parecido",
    "demand.solution.two.text":
      "Busca diseñadores, developers, creators y freelancers antes de decidir.",
    "demand.solution.three.title": "Elegir adónde ir en función de eso",
    "demand.solution.three.text":
      "Toma la decisión por las personas, no solo por el espacio.",
    "demand.how.eyebrow": "Cómo funciona",
    "demand.how.one.title": "Mira quién trabaja",
    "demand.how.one.text":
      "Consulta la actividad en tiempo real en espacios cerca de ti.",
    "demand.how.two.title": "Elige adónde ir",
    "demand.how.two.text":
      "Escoge el espacio con la gente correcta para hoy.",
    "demand.how.three.title": "Aparece",
    "demand.how.three.text":
      "Llega y ponte a trabajar con tu gente.",
    "demand.social.eyebrow": "Lo que dice la gente",
    "demand.social.one.quote":
      "“Fui porque sabía quién estaba allí. El mejor día de trabajo en meses.”",
    "demand.social.one.meta": "Alex M. · Product Designer",
    "demand.social.two.quote":
      "“Una energía completamente distinta a un día normal de coworking.”",
    "demand.social.two.meta": "Sara K. · Frontend Developer",
    "demand.waitlist.eyebrow": "Únete pronto",
    "demand.waitlist.title": "Sitio distinto. Mejor gente. Mejor día.",
    "demand.waitlist.text":
      "Trabaja desde cualquier lugar. No con cualquiera.",
    "demand.form.emailLabel": "Email",
    "demand.form.roleLabel": "¿Qué describe mejor tu trabajo?",
    "demand.form.roleOne": "Diseñador/a",
    "demand.form.roleTwo": "Developer",
    "demand.form.roleThree": "Creator",
    "demand.form.roleFour": "Remote worker",
    "demand.form.roleFive": "Freelancer",
    "demand.form.emailPlaceholder": "nombre@email.com",
    "demand.form.button": "Únete a la lista",
    "supply.hero.eyebrow": "Landing de oferta",
    "supply.hero.title": "Convierte espacio flexible en densidad repetible.",
    "supply.hero.text":
      "here. se asocia con workspace supply para correr sesiones recurrentes de alta señal que llevan a la gente correcta al mismo venue al mismo tiempo. Asset-light para nosotros, partner-friendly para ti.",
    "supply.hero.ctaPrimary": "Hazte partner",
    "supply.hero.ctaSecondary": "Ver el valor",
    "supply.metrics.label": "Lo que gana el venue partner",
    "supply.metrics.one.label": "Ocupación",
    "supply.metrics.one.value": "sube",
    "supply.metrics.two.label": "Fiabilidad de sesión",
    "supply.metrics.two.value": "mejor",
    "supply.metrics.three.label": "Densidad",
    "supply.metrics.three.value": "repetible",
    "supply.metrics.note": "Sesiones, hosts y compromisos RSVP hacen el tráfico más predecible.",
    "supply.statement.one": "No vendas solo day access.",
    "supply.statement.two": "Vende densidad fiable.",
    "supply.value.eyebrow": "Por qué se unen los venues",
    "supply.value.title": "Here hace que la demanda flexible sea más coordinable y más confiable.",
    "supply.value.one.title": "Llena franjas concretas con asistentes comprometidos",
    "supply.value.one.text":
      "Las sesiones semanales permiten coordinar alrededor de compromisos reales en vez de esperar walk-ins aleatorios.",
    "supply.value.two.title": "Usa rituales recurrentes para crear mejores patrones de tráfico",
    "supply.value.two.text":
      "Las mismas salas, las mismas cohortes y la misma cadencia mejoran la fiabilidad.",
    "supply.value.three.title": "Haz que la sala se sienta mejor para quien ya está dentro",
    "supply.value.three.text":
      "La densidad vale porque la atmósfera mejora cuando converge la gente correcta.",
    "supply.pitch.eyebrow": "Cómo funciona el modelo",
    "supply.pitch.title": "Asóciate con supply. Mantente asset-light. Escala ciudad por ciudad.",
    "supply.pitch.one": "Empieza con 3–5 venues partners.",
    "supply.pitch.two": "Usa session hosts y compromisos RSVP ligeros.",
    "supply.pitch.three": "Trabaja con precios de day access que el mercado ya acepta.",
    "supply.pitch.four": "Expande venues solo cuando una cohorte ya golpea densidad de forma fiable.",
    "supply.pitch.quote": "“Asóciate con workspace supply; mantente asset-light.”",
    "supply.profile.eyebrow": "Mejores venues iniciales",
    "supply.profile.title":
      "Coworkings boutique con inventario flexible y ganas de construir comunidad.",
    "supply.profile.one.title": "Barrios centrales",
    "supply.profile.one.text":
      "Ubicaciones caminables facilitan asistencia repetida y convergencia.",
    "supply.profile.two.title": "Day access ya ofrecido",
    "supply.profile.two.text":
      "El pricing low-friction hace el onboarding del partner más simple.",
    "supply.profile.three.title": "Capacidad para absorber picos semanales",
    "supply.profile.three.text":
      "El modelo funciona mejor donde la densidad semanal puede volverse un ritual visible.",
    "supply.profile.four.title": "Operadores que cuidan la atmósfera",
    "supply.profile.four.text":
      "Los mejores partners valoran quién entra a la sala, no solo cuántas personas.",
    "supply.market.eyebrow": "Contexto de mercado",
    "supply.market.one": "Day access típico",
    "supply.market.two.title": "Baja fricción",
    "supply.market.two": "La oferta ya existe y el pricing es familiar.",
    "supply.market.three.title": "Partner-friendly",
    "supply.market.three": "No hace falta poseer real estate para escalar el modelo.",
    "supply.form.eyebrow": "Hazte partner",
    "supply.form.title": "Lleva Here Sessions a tu venue.",
    "supply.form.text":
      "Para operadores que quieren densidad recurrente, mejor atmósfera y una razón más fuerte para que la gente correcta aparezca junta.",
    "supply.form.nameLabel": "Nombre del espacio",
    "supply.form.namePlaceholder": "Tu coworking",
    "supply.form.neighborhoodLabel": "Barrio",
    "supply.form.neighborhoodPlaceholder": "Lavapiés, Malasaña, Tetuán...",
    "supply.form.emailLabel": "Email",
    "supply.form.emailPlaceholder": "team@workspace.com",
    "supply.form.button": "Solicitar info para partners",
    "enterprise.hero.eyebrow": "Landing enterprise",
    "enterprise.hero.title": "Aparece dentro de sesiones de trabajo de alta señal.",
    "enterprise.hero.text":
      "here. da a equipos y empleadores una forma de aparecer dentro de sesiones recurrentes por rol donde ya se reúne talento independiente. Más señal que el cold outreach, más confianza que un job post genérico.",
    "enterprise.hero.ctaPrimary": "Solicitar el pack",
    "enterprise.hero.ctaSecondary": "Ver qué incluye",
    "enterprise.metrics.label": "Lo que obtiene enterprise",
    "enterprise.metrics.one.label": "Visibilidad contextual",
    "enterprise.metrics.one.value": "mejor",
    "enterprise.metrics.two.label": "Acceso por rol",
    "enterprise.metrics.two.value": "más preciso",
    "enterprise.metrics.three.label": "Confianza",
    "enterprise.metrics.three.value": "mayor",
    "enterprise.metrics.note":
      "La presencia dentro de sesiones reales crea mejor memoria de marca que una listing estática.",
    "enterprise.statement.one": "Llega a la gente dentro del workday.",
    "enterprise.statement.two": "No después.",
    "enterprise.value.eyebrow": "Por qué importa",
    "enterprise.value.title":
      "Las comunidades de alta señal se construyen con presencia recurrente, no con campañas sueltas.",
    "enterprise.value.one.title": "Aparece donde ya se reúnen cohortes de producto, diseño y builders",
    "enterprise.value.one.text":
      "La visibilidad funciona mejor cuando aparece dentro de una sala que la gente ya confía.",
    "enterprise.value.two.title": "Apoya sesiones sin intentar poseer la comunidad",
    "enterprise.value.two.text":
      "El valor está en la cercanía, el sponsorship y la relevancia, no en la interrupción.",
    "enterprise.value.three.title": "Mantente cerca del talento mientras se forman hábitos",
    "enterprise.value.three.text":
      "La presencia repetida crea una señal que los canales genéricos de recruiting no pueden igualar.",
    "enterprise.offer.eyebrow": "La oferta",
    "enterprise.offer.title":
      "Una oferta enterprise más ligera construida alrededor de presencia.",
    "enterprise.offer.one":
      "Here Sessions patrocinadas para cohortes específicas por rol.",
    "enterprise.offer.two":
      "Visibilidad de employer brand dentro de rituales de trabajo recurrentes.",
    "enterprise.offer.three":
      "Acceso a comunidades de alta señal por rol y ciudad.",
    "enterprise.offer.four":
      "Un camino futuro hacia hiring packs cuando la densidad esté establecida.",
    "enterprise.offer.quote":
      "“Crea valor donde la densidad real ya existe.”",
    "enterprise.buy.eyebrow": "Lo que compran las empresas",
    "enterprise.buy.title": "Una mejor ruta hacia redes flexibles de talento.",
    "enterprise.buy.one.title": "Presencia de marca dentro de sesiones confiables",
    "enterprise.buy.one.text":
      "Aparece donde la gente ya está decidiendo dónde y con quién trabajar.",
    "enterprise.buy.two.title": "Acceso por rol sin gasto amplio y ruidoso",
    "enterprise.buy.two.text":
      "Empieza con las cohortes que más importan y expande cuando la densidad compone.",
    "enterprise.buy.three.title": "Señal repetida en vez de campañas sueltas",
    "enterprise.buy.three.text":
      "La repetición dentro de sesiones recurrentes hace que la marca se sienta más creíble.",
    "enterprise.buy.four.title": "Un camino hacia futuros productos de hiring",
    "enterprise.buy.four.text":
      "Empieza con presencia y sponsorship, luego añade acceso a hiring cuando la red madure.",
    "enterprise.fit.eyebrow": "Mejor encaje",
    "enterprise.fit.one.title": "Remote-first",
    "enterprise.fit.one.text": "Equipos construidos alrededor de hábitos remote-first",
    "enterprise.fit.two.title": "Design-forward",
    "enterprise.fit.two.text": "Marcas que cuidan cómo aparecen dentro de comunidades",
    "enterprise.fit.three.title": "Selectivas",
    "enterprise.fit.three.text": "Equipos que valoran calidad, confianza y cercanía sobre volumen",
    "enterprise.form.eyebrow": "Solicitar info enterprise",
    "enterprise.form.title": "Consigue el enterprise pack.",
    "enterprise.form.text":
      "Para empresas que quieren presencia patrocinada dentro de sesiones recurrentes por rol antes de productos de hiring más amplios.",
    "enterprise.form.companyLabel": "Empresa",
    "enterprise.form.companyPlaceholder": "Nombre de la empresa",
    "enterprise.form.focusLabel": "Foco de contratación",
    "enterprise.form.focusOne": "Producto y diseño",
    "enterprise.form.focusTwo": "Ingeniería",
    "enterprise.form.focusThree": "Marketing y contenido",
    "enterprise.form.focusFour": "Contratación remota cross-functional",
    "enterprise.form.emailLabel": "Email de trabajo",
    "enterprise.form.emailPlaceholder": "nombre@empresa.com",
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

const setupOpeningSound = () => {
  const audio = new Audio("./opening-sound.mp3");
  let hasPlayed = false;

  audio.preload = "auto";
  audio.volume = 0.32;

  const detachListeners = () => {
    window.removeEventListener("pointerdown", handleFirstInteraction);
    window.removeEventListener("keydown", handleFirstInteraction);
    window.removeEventListener("touchstart", handleFirstInteraction);
  };

  const playSound = () => {
    if (hasPlayed) {
      return;
    }

    hasPlayed = true;
    audio.currentTime = 0;

    const playAttempt = audio.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {
        hasPlayed = false;
      });
    }
  };

  const handleFirstInteraction = () => {
    detachListeners();
    playSound();
  };

  const initialAttempt = audio.play();
  if (initialAttempt && typeof initialAttempt.then === "function") {
    initialAttempt
      .then(() => {
        hasPlayed = true;
      })
      .catch(() => {
        audio.pause();
        audio.currentTime = 0;
        window.addEventListener("pointerdown", handleFirstInteraction, {
          once: true,
        });
        window.addEventListener("keydown", handleFirstInteraction, {
          once: true,
        });
        window.addEventListener("touchstart", handleFirstInteraction, {
          once: true,
        });
      });
  } else {
    window.addEventListener("pointerdown", handleFirstInteraction, {
      once: true,
    });
    window.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });
    window.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });
  }
};

if (document.readyState === "complete") {
  setupLanguageSwitcher();
  setupOpeningSound();
} else {
  window.addEventListener(
    "load",
    () => {
      setupLanguageSwitcher();
      setupOpeningSound();
    },
    { once: true }
  );
}
