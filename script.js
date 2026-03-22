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
    "nav.about": "About us",
    "nav.demand": "Workers",
    "nav.supply": "Coworkings",
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
    "index.hero.ctaDemand": "For Workers",
    "index.hero.ctaSupply": "For Venues",
    "index.hero.ctaEnterprise": "For Enterprise",
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
    "demand.hero.title": "Work with the right people.",
    "demand.hero.text":
      "See who's working where before you leave. Choose based on people, not just the space.",
    "demand.hero.subOne": "Access coworkings across the city.",
    "demand.hero.subTwo": "See who's there in real time.",
    "demand.hero.subThree": "Make better decisions every day.",
    "demand.hero.ctaPrimary": "Join waitlist",
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
    "demand.product.title": "See the room before you go.",
    "demand.product.detailLabel": "Space detail",
    "demand.product.checkinLabel": "Check in",
    "demand.product.back": "Back",
    "demand.product.liveNow": "7 here now",
    "demand.product.peopleNow": "Who's there now",
    "demand.product.checkinTitle": "Check in",
    "demand.product.checkinText":
      "Confirm where you'll work and make yourself visible.",
    "demand.product.peopleThere": "7 people there",
    "demand.product.duration": "Duration",
    "demand.product.halfDay": "Half day",
    "demand.product.fullDay": "Full day",
    "demand.product.visible": "Visible to others",
    "demand.product.visibleText": "People can see you're there",
    "demand.product.cta": "I'll work here",
    "demand.flex.eyebrow": "The problem",
    "demand.flex.title": "Too many days working alone.",
    "demand.flex.bodyOne":
      "Remote work gave you freedom. But it also took something away: the energy of being around the right people.",
    "demand.flex.bodyTwo":
      "Today, many freelancers spend their days alone — at home, in cafés, or in coworkings where they know no one. Surrounded by people, but not by their people.",
    "demand.problem.eyebrow": "Choose better",
    "demand.problem.title": "Choose who, not just where.",
    "demand.problem.oldLabel": "Without Here",
    "demand.problem.one.title": "You pick a coworking.",
    "demand.problem.two.title": "You hope it's good.",
    "demand.problem.three.title": "You know no one.",
    "demand.problem.four.title": "Another day alone.",
    "demand.problem.newLabel": "With Here",
    "demand.problem.newOne": "You see where interesting people are.",
    "demand.problem.newTwo": "You choose based on that.",
    "demand.problem.newThree": "You arrive with context.",
    "demand.problem.newFour": "A good day of work.",
    "demand.insight.one": "",
    "demand.insight.two": "",
    "demand.solution.eyebrow": "What you see",
    "demand.solution.title": "What you see before you arrive.",
    "demand.solution.one.title": "Who's in each space",
    "demand.solution.one.text":
      "Real-time visibility into who is checked in at coworkings near you.",
    "demand.solution.two.title": "People in your field",
    "demand.solution.two.text":
      "Designers, developers, creators, and consultants — filter by what matters to you.",
    "demand.solution.three.title": "The decision is yours",
    "demand.solution.three.text":
      "Go or don't go. But always with real information.",
    "demand.how.eyebrow": "How it works",
    "demand.how.title": "How it works",
    "demand.how.one.title": "See who's there",
    "demand.how.one.text":
      "Check real-time activity at spaces near you.",
    "demand.how.two.title": "Choose where to go",
    "demand.how.two.text":
      "Pick the space with the people you care about today.",
    "demand.how.three.title": "Show up",
    "demand.how.three.text":
      "Walk in and get to work. Connections happen naturally.",
    "demand.social.eyebrow": "What people say",
    "demand.social.title": "What people say",
    "demand.social.one.quote":
      "“I went because I knew who was there. Best work day in months.”",
    "demand.social.one.meta": "Alex M. · Product Designer",
    "demand.social.two.quote":
      "“Completely different energy from a normal coworking day.”",
    "demand.social.two.meta": "Sara K. · Frontend Developer",
    "demand.waitlist.eyebrow": "Join early",
    "demand.waitlist.title": "The best days aren't planned.",
    "demand.waitlist.text":
      "Work from anywhere. Just not with anyone.",
    "demand.form.emailLabel": "Email",
    "demand.form.roleLabel": "What do you do?",
    "demand.form.roleOne": "Designer",
    "demand.form.roleTwo": "Developer",
    "demand.form.roleThree": "Creator",
    "demand.form.roleFour": "Remote worker",
    "demand.form.roleFive": "Freelancer",
    "demand.form.emailPlaceholder": "Your email",
    "demand.form.button": "Join the waitlist",
    "demand.form.note":
      "No spam. We'll let you know when here. is available in your city.",
    "supply.hero.title": "Fill your coworking with the right people.",
    "supply.hero.text":
      "here. coordinates groups of professionals to converge at your space. Not random traffic — intentional presence.",
    "supply.hero.ctaPrimary": "Partner with here.",
    "supply.hero.ctaSecondary": "Talk to us",
    "supply.problem.title": "Empty seats are not your biggest problem.",
    "supply.problem.one.title": "Unpredictable occupancy",
    "supply.problem.one.text":
      "Some days fill naturally. Others stay dead for no clear reason. You can't plan around something you can't control.",
    "supply.problem.two.title": "Low-energy days",
    "supply.problem.two.text":
      "A space can look full and still feel flat. Density matters more than headcount.",
    "supply.problem.three.title": "The wrong mix",
    "supply.problem.three.text":
      "You can fill seats. But you can't control who shows up — or whether they come back.",
    "supply.problem.statementOne": "The value of your space is not the space.",
    "supply.problem.statementTwo": "It's the people inside it.",
    "supply.solution.title": "We don't bring traffic. We bring density.",
    "supply.solution.one.title": "Professionals who choose with intention",
    "supply.solution.one.text":
      "Designers, developers, creators, and consultants who come to your space because they know who else will be there.",
    "supply.solution.two.title": "Coordinated presence",
    "supply.solution.two.text":
      "Not discovery — coordination. We help groups converge at your space at the same time.",
    "supply.solution.three.title": "Days that create habit",
    "supply.solution.three.text":
      "A good day at your space is the best reason for someone to come back. And come back again.",
    "supply.features.title": "What changes when you're on here.",
    "supply.features.one.title": "More consistent occupancy",
    "supply.features.one.text":
      "Fewer dead days. More predictable flow across the week.",
    "supply.features.two.title": "Higher quality users",
    "supply.features.two.text":
      "People who respect the space and return — not just whoever wants the cheapest desk.",
    "supply.features.three.title": "Better room energy",
    "supply.features.three.text":
      "The room feels different when the right people overlap.",
    "supply.features.four.title": "More repeat visits",
    "supply.features.four.text":
      "Good days create habit. People choose your space again.",
    "supply.diff.title": "Not traffic. Momentum.",
    "supply.diff.others": "Others",
    "supply.diff.otherOne": "Marketplaces bring random visitors.",
    "supply.diff.otherTwo": "Marketing creates one-time spikes.",
    "supply.diff.otherThree": "Events generate temporary activity.",
    "supply.diff.here": "here.",
    "supply.diff.hereOne": "here. builds recurring, coordinated presence.",
    "supply.diff.hereTwo":
      "Users choose your space because they know who'll be there.",
    "supply.diff.hereThree": "Good days generate repeat behavior.",
    "supply.diff.foot": "Become a space people choose — not just find.",
    "supply.mock.title": "How your space shows up on here.",
    "supply.mock.text":
      "Users see who's at your space before deciding whether to go. That's what sets you apart from any other channel.",
    "supply.how.title": "How it works",
    "supply.how.one.title": "Your space joins here.",
    "supply.how.one.text":
      "We add your coworking to the network and make it visible to the right users.",
    "supply.how.two.title": "Users see who's working there",
    "supply.how.two.text":
      "They understand the room before deciding where to go.",
    "supply.how.three.title": "They choose your space",
    "supply.how.three.text":
      "They come because the mix of people makes sense for their day.",
    "supply.how.four.title": "Groups form and come back",
    "supply.how.four.text": "Good days create habit. Momentum builds.",
    "supply.fit.title": "here. is for you if…",
    "supply.fit.one.title":
      "You want consistent flow, not occasional spikes.",
    "supply.fit.two.title":
      "You care about who walks in, not just how many.",
    "supply.fit.three.title":
      "You have unused capacity mid-week that you don't know how to activate.",
    "supply.fit.four.title":
      "You want people to choose you for what happens inside, not just location or price.",
    "supply.waitlist.title": "Your space's best days are ahead.",
    "supply.waitlist.text":
      "Join here. and become a space people genuinely choose.",
    "supply.form.nameLabel": "Workspace name",
    "supply.form.namePlaceholder": "Workspace name",
    "supply.form.emailLabel": "Your email",
    "supply.form.emailPlaceholder": "Your email",
    "supply.form.buttonPrimary": "Partner with here.",
    "supply.form.buttonSecondary": "Talk to us",
    "supply.form.note":
      "No commitment. We'll get back to you within 48 hours.",
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
    "nav.about": "Nosotros",
    "nav.demand": "Workers",
    "nav.supply": "Coworkings",
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
    "index.hero.ctaDemand": "Para Workers",
    "index.hero.ctaSupply": "Para Venues",
    "index.hero.ctaEnterprise": "Para Enterprise",
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
    "demand.hero.title": "Trabaja con la gente correcta.",
    "demand.hero.text":
      "Mira quién está en cada coworking antes de salir. Elige basándote en las personas, no solo en el espacio.",
    "demand.hero.subOne": "Accede a coworkings en tu ciudad.",
    "demand.hero.subTwo": "Ve quién está en tiempo real.",
    "demand.hero.subThree": "Elige mejor cada día.",
    "demand.hero.ctaPrimary": "Únete a la lista",
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
    "demand.product.title": "Mira la sala antes de ir.",
    "demand.product.detailLabel": "Detalle del espacio",
    "demand.product.checkinLabel": "Check in",
    "demand.product.back": "Volver",
    "demand.product.liveNow": "7 aquí ahora",
    "demand.product.peopleNow": "Quién está ahora",
    "demand.product.checkinTitle": "Check in",
    "demand.product.checkinText":
      "Confirma dónde vas a trabajar y hazte visible.",
    "demand.product.peopleThere": "7 personas ahí",
    "demand.product.duration": "Duración",
    "demand.product.halfDay": "Medio día",
    "demand.product.fullDay": "Día completo",
    "demand.product.visible": "Visible para otros",
    "demand.product.visibleText": "La gente puede ver que estás ahí",
    "demand.product.cta": "Trabajaré aquí",
    "demand.flex.eyebrow": "El problema",
    "demand.flex.title": "Demasiados días trabajando solo.",
    "demand.flex.bodyOne":
      "El trabajo remoto te dio libertad. Pero también te quitó algo: la energía de estar rodeado de las personas correctas.",
    "demand.flex.bodyTwo":
      "Hoy muchos freelancers pasan sus días solos — en casa, en cafeterías, o en coworkings donde no conocen a nadie. Están rodeados de gente, pero no de su gente.",
    "demand.problem.eyebrow": "Elegir mejor",
    "demand.problem.title": "Elige con quién, no solo dónde.",
    "demand.problem.oldLabel": "Sin Here",
    "demand.problem.one.title": "Eliges un coworking.",
    "demand.problem.two.title": "Esperas que esté bien.",
    "demand.problem.three.title": "No conoces a nadie.",
    "demand.problem.four.title": "Otro día solo.",
    "demand.problem.newLabel": "Con Here",
    "demand.problem.newOne": "Ves dónde hay gente interesante.",
    "demand.problem.newTwo": "Eliges basándote en eso.",
    "demand.problem.newThree": "Llegas con contexto.",
    "demand.problem.newFour": "Un buen día de trabajo.",
    "demand.insight.one": "",
    "demand.insight.two": "",
    "demand.solution.eyebrow": "Lo que ves",
    "demand.solution.title": "Lo que ves antes de llegar.",
    "demand.solution.one.title": "Quién está en cada espacio",
    "demand.solution.one.text":
      "Visibilidad en tiempo real de quién hay en los coworkings cerca de ti.",
    "demand.solution.two.title": "Gente de tu campo",
    "demand.solution.two.text":
      "Diseñadores, devs, creativos y consultores — filtra por lo que te importa.",
    "demand.solution.three.title": "La decisión es tuya",
    "demand.solution.three.text":
      "Ir o no ir. Pero siempre con información real.",
    "demand.how.eyebrow": "Cómo funciona",
    "demand.how.title": "Cómo funciona",
    "demand.how.one.title": "Ve quién está",
    "demand.how.one.text":
      "Consulta la actividad en tiempo real en espacios cerca de ti.",
    "demand.how.two.title": "Elige adónde ir",
    "demand.how.two.text":
      "Escoge el espacio con las personas que te interesan hoy.",
    "demand.how.three.title": "Aparece",
    "demand.how.three.text":
      "Entra y trabaja. Las conexiones ocurren solas.",
    "demand.social.eyebrow": "Lo que dice la gente",
    "demand.social.title": "Lo que dice la gente",
    "demand.social.one.quote":
      "“Fui porque sabía quién estaba allí. El mejor día de trabajo en meses.”",
    "demand.social.one.meta": "Alex M. · Product Designer",
    "demand.social.two.quote":
      "“Una energía completamente distinta a un día normal de coworking.”",
    "demand.social.two.meta": "Sara K. · Frontend Developer",
    "demand.waitlist.eyebrow": "Únete pronto",
    "demand.waitlist.title": "Los mejores días no se planean.",
    "demand.waitlist.text":
      "Trabaja desde cualquier sitio. Pero no con cualquiera.",
    "demand.form.emailLabel": "Email",
    "demand.form.roleLabel": "¿A qué te dedicas?",
    "demand.form.roleOne": "Diseñador/a",
    "demand.form.roleTwo": "Developer",
    "demand.form.roleThree": "Creator",
    "demand.form.roleFour": "Remote worker",
    "demand.form.roleFive": "Freelancer",
    "demand.form.emailPlaceholder": "Tu email",
    "demand.form.button": "Únete a la lista",
    "demand.form.note":
      "Sin spam. Te avisamos cuando here. esté disponible en tu ciudad.",
    "supply.hero.title": "Llena tu coworking con la gente correcta.",
    "supply.hero.text":
      "here. coordina grupos de profesionales para que coincidan en tu espacio. No tráfico aleatorio — presencia con intención.",
    "supply.hero.ctaPrimary": "Asociarme con here.",
    "supply.hero.ctaSecondary": "Hablar con el equipo",
    "supply.problem.title": "El problema no son las sillas vacías.",
    "supply.problem.one.title": "Ocupación impredecible",
    "supply.problem.one.text":
      "Algunos días se llenan solos. Otros están muertos sin razón aparente. No puedes planificar sobre algo que no controlas.",
    "supply.problem.two.title": "Días sin energía",
    "supply.problem.two.text":
      "Un espacio puede estar lleno y aun así sentirse vacío. La densidad importa más que el número de personas.",
    "supply.problem.three.title": "La mezcla equivocada",
    "supply.problem.three.text":
      "Puedes llenar sillas. Pero no puedes controlar quién aparece ni si la gente vuelve.",
    "supply.problem.statementOne": "El valor de tu espacio no es el espacio.",
    "supply.problem.statementTwo": "Son las personas dentro.",
    "supply.solution.title": "No traemos tráfico. Traemos densidad.",
    "supply.solution.one.title": "Profesionales que eligen con intención",
    "supply.solution.one.text":
      "Diseñadores, devs, creativos y consultores que deciden ir a tu espacio porque saben quién más va a estar.",
    "supply.solution.two.title": "Presencia coordinada",
    "supply.solution.two.text":
      "No es descubrimiento — es coordinación. Ayudamos a que grupos coincidan en tu espacio al mismo tiempo.",
    "supply.solution.three.title": "Días que generan hábito",
    "supply.solution.three.text":
      "Un buen día en tu espacio es el mejor argumento para que alguien vuelva. Y vuelva a volver.",
    "supply.features.title": "Qué cambia cuando estás en here.",
    "supply.features.one.title": "Ocupación más consistente",
    "supply.features.one.text":
      "Menos días muertos. Más flujo predecible a lo largo de la semana.",
    "supply.features.two.title": "Usuarios de mayor calidad",
    "supply.features.two.text":
      "Gente que cuida el espacio y repite — no solo quien busca el desk más barato.",
    "supply.features.three.title": "Mejor energía en la sala",
    "supply.features.three.text":
      "La sala se siente diferente cuando la gente correcta coincide.",
    "supply.features.four.title": "Más visitas recurrentes",
    "supply.features.four.text":
      "Los buenos días crean hábito. La gente elige tu espacio de nuevo.",
    "supply.diff.title": "No es tráfico. Es momentum.",
    "supply.diff.others": "Otros",
    "supply.diff.otherOne": "Los marketplaces traen visitas aleatorias.",
    "supply.diff.otherTwo": "El marketing genera picos puntuales.",
    "supply.diff.otherThree": "Los eventos crean actividad temporal.",
    "supply.diff.here": "here.",
    "supply.diff.hereOne": "here. construye presencia recurrente y coordinada.",
    "supply.diff.hereTwo":
      "Los usuarios eligen tu espacio porque saben quién estará.",
    "supply.diff.hereThree": "Los buenos días generan repetición.",
    "supply.diff.foot":
      "Conviértete en un espacio que la gente elige — no solo que encuentra.",
    "supply.mock.title": "Así aparece tu espacio en here.",
    "supply.mock.text":
      "Los usuarios ven quién está en tu espacio antes de decidir si van. Eso es lo que te diferencia de cualquier otro canal.",
    "supply.how.title": "Cómo funciona",
    "supply.how.one.title": "Tu espacio entra en here.",
    "supply.how.one.text":
      "Añadimos tu coworking a la red y lo hacemos visible para los usuarios correctos.",
    "supply.how.two.title": "Los usuarios ven quién está",
    "supply.how.two.text":
      "Entienden cómo es la sala antes de decidir adónde van.",
    "supply.how.three.title": "Eligen tu espacio",
    "supply.how.three.text":
      "Vienen porque la mezcla de personas tiene sentido para su día.",
    "supply.how.four.title": "Forman grupos y repiten",
    "supply.how.four.text":
      "Los buenos días crean hábito. El momentum se acumula.",
    "supply.fit.title": "here. es para ti si…",
    "supply.fit.one.title":
      "Quieres flujo consistente, no picos puntuales.",
    "supply.fit.two.title":
      "Te importa la calidad de quien entra, no solo el número.",
    "supply.fit.three.title":
      "Tienes capacidad libre entre semana que no sabes cómo activar.",
    "supply.fit.four.title":
      "Quieres que la gente te elija por lo que pasa dentro, no solo por ubicación o precio.",
    "supply.waitlist.title": "Los mejores días de tu espacio están por venir.",
    "supply.waitlist.text":
      "Entra en here. y conviértete en un espacio que la gente elige de verdad.",
    "supply.form.nameLabel": "Nombre de tu espacio",
    "supply.form.namePlaceholder": "Nombre de tu espacio",
    "supply.form.emailLabel": "Tu email",
    "supply.form.emailPlaceholder": "Tu email",
    "supply.form.buttonPrimary": "Asociarme con here.",
    "supply.form.buttonSecondary": "Hablar con el equipo",
    "supply.form.note":
      "Sin compromisos. Te contactamos en menos de 48 horas.",
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
  const clipDurationMs = 1000;
  let hasPlayed = false;
  let stopTimer = null;

  audio.preload = "auto";
  audio.volume = 0.32;

  const detachListeners = () => {
    window.removeEventListener("pointerdown", handleFirstInteraction);
    window.removeEventListener("keydown", handleFirstInteraction);
    window.removeEventListener("touchstart", handleFirstInteraction);
  };

  const stopClip = () => {
    audio.pause();
    audio.currentTime = 0;
    stopTimer = null;
  };

  const scheduleStop = () => {
    if (stopTimer !== null) {
      window.clearTimeout(stopTimer);
    }

    stopTimer = window.setTimeout(stopClip, clipDurationMs);
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
        if (stopTimer !== null) {
          window.clearTimeout(stopTimer);
          stopTimer = null;
        }
      });
      playAttempt.then(() => {
        scheduleStop();
      });
    } else {
      scheduleStop();
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
        scheduleStop();
      })
      .catch(() => {
        stopClip();
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
