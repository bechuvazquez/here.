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
    "meta.index.title": "here. | Coordinate Presence",
    "meta.index.description":
      "here. is the people-first coordination layer that turns flexible work into repeatable, high-density in-person sessions.",
    "meta.demand.title": "here. | Demand",
    "meta.demand.description":
      "here. helps independent professionals join repeatable high-density work sessions through scheduled presence and lightweight RSVP.",
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
    "index.split.demand.label": "Demand",
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
    "demand.hero.eyebrow": "Demand landing page",
    "demand.hero.title": "See who's Here. Join them.",
    "demand.hero.text":
      "here. helps independent professionals stop choosing a workspace blindly. Join weekly Here Sessions, commit to a room, and work around the right people in the same place, same time.",
    "demand.hero.ctaPrimary": "Join the waitlist",
    "demand.hero.ctaSecondary": "See how it works",
    "demand.card.title": "This week's sessions",
    "demand.card.placeOne": "Lavapiés",
    "demand.card.metaOne": "Thursday product session · 6 RSVPs",
    "demand.card.placeTwo": "Malasaña",
    "demand.card.metaTwo": "Design + builder drop-in · host confirmed",
    "demand.card.placeThree": "Tomorrow",
    "demand.card.metaThree": "Commitment list opens at 18:00",
    "demand.card.foot": "Commit first. Show up. Repeat.",
    "demand.statement.one": "Don't work alone.",
    "demand.statement.two": "Be Here.",
    "demand.why.eyebrow": "Why it works",
    "demand.why.title": "Density gets better when commitment comes before real time.",
    "demand.why.one.title": "See who plans to show up",
    "demand.why.one.text":
      "Start with scheduled presence and RSVP so every session has intent before it has noise.",
    "demand.why.two.title": "Join role-based cohorts",
    "demand.why.two.text":
      "Launch around one community at a time and create relevance before scale.",
    "demand.why.three.title": "Return to recurring rituals",
    "demand.why.three.text":
      "Weekly sessions, hosts, and familiar rooms turn flexible work into habit.",
    "demand.product.eyebrow": "MVP flow",
    "demand.product.title":
      "Commitment-first product, real-world payoff.",
    "demand.product.stepOne": "Pick a Here Session or create your planned presence.",
    "demand.product.stepTwo": "RSVP to the room, time, and people that fit.",
    "demand.product.stepThree":
      "Arrive, work, and help the session reach critical mass.",
    "demand.product.quote":
      "“Work isn't about where. It's about who.”",
    "demand.benefits.eyebrow": "What users get",
    "demand.benefits.title":
      "Repeatable high-signal work sessions instead of random solo days.",
    "demand.benefits.one.title": "A higher chance the room actually feels alive",
    "demand.benefits.one.text":
      "RSVP and hosting make attendance feel more reliable from the start.",
    "demand.benefits.two.title": "Better focus through role-relevant density",
    "demand.benefits.two.text":
      "The room gets better when the cohort already makes sense.",
    "demand.benefits.three.title": "Low-friction connection without event energy",
    "demand.benefits.three.text":
      "Sessions are built around real work, not performative networking.",
    "demand.benefits.four.title": "A weekly ritual worth repeating",
    "demand.benefits.four.text":
      "The goal is not one good day. It is consistent sessions every week.",
    "demand.audience.eyebrow": "First wedge",
    "demand.audience.tagOne": "Product",
    "demand.audience.tagTwo": "Design",
    "demand.audience.tagThree": "Tech",
    "demand.audience.tagFour": "Marketing",
    "demand.audience.tagFive": "Content",
    "demand.audience.tagSix": "Creators",
    "demand.waitlist.eyebrow": "Join early",
    "demand.waitlist.title": "Join the first role cohort.",
    "demand.waitlist.text":
      "We are starting with small high-signal communities and recurring sessions in Madrid.",
    "demand.form.emailLabel": "Email",
    "demand.form.roleLabel": "What best describes you?",
    "demand.form.roleOne": "Designer",
    "demand.form.roleTwo": "Builder",
    "demand.form.roleThree": "Marketer",
    "demand.form.roleFour": "Creator",
    "demand.form.roleFive": "Other independent professional",
    "demand.form.emailPlaceholder": "name@email.com",
    "demand.form.button": "Request an invite",
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
    "nav.demand": "Demanda",
    "nav.supply": "Oferta",
    "nav.enterprise": "Enterprise",
    "meta.index.title": "here. | Coordina presencia",
    "meta.index.description":
      "here. es la capa de coordinación centrada en personas que convierte el trabajo flexible en sesiones presenciales repetibles y densas.",
    "meta.demand.title": "here. | Demanda",
    "meta.demand.description":
      "here. ayuda a profesionales independientes a sumarse a sesiones de trabajo repetibles y de alta densidad mediante presencia programada y RSVP ligero.",
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
    "index.split.demand.label": "Demanda",
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
    "demand.hero.eyebrow": "Landing de demanda",
    "demand.hero.title": "Mira quién está Here. Súmate.",
    "demand.hero.text":
      "here. ayuda a profesionales independientes a dejar de elegir workspace a ciegas. Súmate a Here Sessions semanales, comprométete con una sala y trabaja con la gente correcta en el mismo lugar y al mismo tiempo.",
    "demand.hero.ctaPrimary": "Únete a la lista",
    "demand.hero.ctaSecondary": "Ver cómo funciona",
    "demand.card.title": "Sesiones de esta semana",
    "demand.card.placeOne": "Lavapiés",
    "demand.card.metaOne": "Sesión de producto del jueves · 6 RSVPs",
    "demand.card.placeTwo": "Malasaña",
    "demand.card.metaTwo": "Drop-in de diseño + builders · host confirmado",
    "demand.card.placeThree": "Mañana",
    "demand.card.metaThree": "La lista de compromisos abre a las 18:00",
    "demand.card.foot": "Comprométete primero. Aparece. Repite.",
    "demand.statement.one": "No trabajes sola.",
    "demand.statement.two": "Be Here.",
    "demand.why.eyebrow": "Por qué funciona",
    "demand.why.title": "La densidad mejora cuando el compromiso llega antes que el tiempo real.",
    "demand.why.one.title": "Ve quién planea aparecer",
    "demand.why.one.text":
      "Empieza con presencia programada y RSVP para que cada sesión tenga intención antes que ruido.",
    "demand.why.two.title": "Únete a cohortes por rol",
    "demand.why.two.text":
      "Lanza una comunidad a la vez y crea relevancia antes que escala.",
    "demand.why.three.title": "Vuelve a rituales recurrentes",
    "demand.why.three.text":
      "Sesiones semanales, hosts y rooms familiares convierten trabajo flexible en hábito.",
    "demand.product.eyebrow": "Flujo MVP",
    "demand.product.title":
      "Producto commitment-first, payoff real en el mundo físico.",
    "demand.product.stepOne": "Elige una Here Session o crea tu presencia planificada.",
    "demand.product.stepTwo": "Haz RSVP al room, el horario y la gente que encajan.",
    "demand.product.stepThree": "Llega, trabaja y ayuda a que la sesión alcance masa crítica.",
    "demand.product.quote":
      "“El trabajo no va de dónde. Va de quién.”",
    "demand.benefits.eyebrow": "Lo que ganas",
    "demand.benefits.title":
      "Sesiones de trabajo de alta señal y repetibles en lugar de días solitarios al azar.",
    "demand.benefits.one.title": "Más probabilidad de que la sala realmente se sienta viva",
    "demand.benefits.one.text":
      "El RSVP y los hosts hacen que la asistencia se sienta más fiable desde el principio.",
    "demand.benefits.two.title": "Mejor foco gracias a densidad relevante por rol",
    "demand.benefits.two.text":
      "La sala mejora cuando la cohorte ya tiene sentido.",
    "demand.benefits.three.title": "Conexión low-friction sin energía de evento",
    "demand.benefits.three.text":
      "Las sesiones están construidas alrededor de trabajo real, no networking performativo.",
    "demand.benefits.four.title": "Un ritual semanal que merece repetirse",
    "demand.benefits.four.text":
      "La meta no es un buen día aislado. Es consistencia semanal.",
    "demand.audience.eyebrow": "Primera cuña",
    "demand.audience.tagOne": "Producto",
    "demand.audience.tagTwo": "Diseño",
    "demand.audience.tagThree": "Tech",
    "demand.audience.tagFour": "Marketing",
    "demand.audience.tagFive": "Contenido",
    "demand.audience.tagSix": "Creators",
    "demand.waitlist.eyebrow": "Únete pronto",
    "demand.waitlist.title": "Únete a la primera cohorte por rol.",
    "demand.waitlist.text":
      "Empezamos con comunidades pequeñas, de alta señal, y sesiones recurrentes en Madrid.",
    "demand.form.emailLabel": "Email",
    "demand.form.roleLabel": "¿Qué te describe mejor?",
    "demand.form.roleOne": "Diseñador/a",
    "demand.form.roleTwo": "Builder",
    "demand.form.roleThree": "Marketer",
    "demand.form.roleFour": "Creator",
    "demand.form.roleFive": "Otro profesional independiente",
    "demand.form.emailPlaceholder": "nombre@email.com",
    "demand.form.button": "Solicitar invitación",
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
