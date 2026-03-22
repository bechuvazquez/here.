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
    "nav.about": "About",
    "nav.demand": "Independents",
    "nav.supply": "Partners",
    "nav.enterprise": "Enterprise",
    "meta.index.title":
      "hier. — You think better when you're around people who get what you do.",
    "meta.index.description":
      "hier. is a presence layer for independents and partner spaces. See who's working where, choose your room, think better.",
    "meta.index.descriptionEs":
      "hier. es una capa de presencia para independientes y espacios partner. Ve quién trabaja dónde, elige tu sala, piensa mejor.",
    "meta.index.ogDescription":
      "Every city used to have a place where the best in a craft gathered. hier. is bringing that back.",
    "meta.demand.title": "hier. | Independents",
    "meta.demand.description":
      "hier. shows independents who's at each coworking so they can choose where to go based on people like them, not guesswork.",
    "meta.supply.title": "hier. | Partners",
    "meta.supply.description":
      "hier. helps partners turn flexible supply into recurring, coordinated sessions with stronger room energy and repeat visits.",
    "meta.enterprise.title": "hier. | Enterprise",
    "meta.enterprise.description":
      "hier. gives companies a way to show up inside recurring role-based work sessions where high-signal independent talent already gathers.",
    "index.hero.lead":
      "Every city used to have a place where the best in a craft gathered.",
    "index.hero.text":
      "hier. brings that back. A presence layer for independents: see who's working where, choose your room, think better because of who's in it.",
    "index.hero.ctaDemand": "For independents →",
    "index.hero.ctaSupply": "For partners →",
    "index.hero.ctaEnterprise": "For companies →",
    "index.problem.quote":
      "Proximity was the oldest form of professional development. And it worked because it was honest. You didn't perform. You just showed up.",
    "index.problem.title":
      "Then work became flexible. And something got lost.",
    "index.problem.text":
      "Independents gained freedom. But they lost the thing offices provided without trying: a room full of people who get what you do. Not colleagues. Not clients. Just people working on similar things, close enough to make you better.",
    "index.solution.quote":
      "hier. is bringing that back. Not as an event. Not as a platform for connections. As a simple layer of information.",
    "index.solution.one.title": "Who is working where, today.",
    "index.solution.one.text":
      "Real-time presence across partner spaces in your city.",
    "index.solution.two.title": "Choose your room.",
    "index.solution.two.text":
      "Pick the space based on who's already there, not just where it is.",
    "index.solution.three.title": "Think better.",
    "index.solution.three.text":
      "The connections, collaborations, and reputation come on their own.",
    "index.proof.title": "The moment is now.",
    "index.proof.one.number": "55%",
    "index.proof.one.title": "of professionals already use flex spaces",
    "index.proof.one.text":
      "The demand is there. Coordination is missing.",
    "index.proof.two.number": "12% → 21%",
    "index.proof.two.title": "flex allocation across Europe in one year",
    "index.proof.two.text":
      "Flexible work isn't a trend. It's the standard.",
    "index.proof.three.number": "€15–40",
    "index.proof.three.title": "day passes already exist in Madrid",
    "index.proof.three.text":
      "Access is solved. Knowing who's there isn't.",
    "index.paths.quote": "Who is hier. for?",
    "index.paths.one.title": "I work independently",
    "index.paths.one.text": "Find your room. Work near people like you.",
    "index.paths.one.cta": "See how it works →",
    "index.paths.two.title": "I run a space",
    "index.paths.two.text": "Fill your room with people who click.",
    "index.paths.two.cta": "Become a partner →",
    "index.paths.three.title": "I have a remote team",
    "index.paths.three.text": "Same place, same day. No fixed office.",
    "index.paths.three.cta": "See how it works →",
    "index.closing.quote":
      "You think better when you're around people who get what you do.",
    "index.closing.cta": "Find your room →",
    "index.closing.notePrefix": "Or join as a partner.",
    "index.closing.noteLink": "Partners",
    "demand.hero.eyebrow": "Independents page",
    "demand.hero.title": "Work near people like you.",
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
      "Remote work gave you freedom. But it also took something away: the energy of being around people like you.",
    "demand.flex.bodyTwo":
      "Today, many independents spend their days alone — at home, in cafés, or in coworkings where they know no one. Surrounded by people, but not by their people.",
    "demand.problem.eyebrow": "Choose better",
    "demand.problem.title": "Choose who, not just where.",
    "demand.problem.oldLabel": "Without Hier",
    "demand.problem.one.title": "You pick a coworking.",
    "demand.problem.two.title": "You hope it's good.",
    "demand.problem.three.title": "You know no one.",
    "demand.problem.four.title": "Another day alone.",
    "demand.problem.newLabel": "With Hier",
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
    "demand.solution.two.title": "People like you",
    "demand.solution.two.text":
      "Designers, developers, creators, and other independents — filter by what matters to you.",
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
    "demand.form.roleFour": "Independent",
    "demand.form.roleFive": "Other independent",
    "demand.form.emailPlaceholder": "Your email",
    "demand.form.button": "Join the waitlist",
    "demand.form.note":
      "No spam. We'll let you know when hier. is available in your city.",
    "supply.hero.title": "Fill your space with people who click.",
    "supply.hero.text":
      "hier. helps make your room click. Not random traffic — coordinated presence.",
    "supply.hero.ctaPrimary": "Become a partner",
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
    "supply.solution.one.title": "People who fit",
    "supply.solution.one.text":
      "Designers, developers, creators, and independents who come to your space because they know who else will be there.",
    "supply.solution.two.title": "Coordinated presence",
    "supply.solution.two.text":
      "Not discovery — coordination. We help groups converge at your space at the same time.",
    "supply.solution.three.title": "When the room works",
    "supply.solution.three.text":
      "A good day at your space is the best reason for someone to come back. And come back again.",
    "supply.features.title": "What changes when you're on hier.",
    "supply.features.one.title": "More consistent occupancy",
    "supply.features.one.text":
      "Fewer dead days. More predictable flow across the week.",
    "supply.features.two.title": "People who stay and return",
    "supply.features.two.text":
      "People who respect the space and return, not just whoever wants the cheapest desk.",
    "supply.features.three.title": "Better room energy",
    "supply.features.three.text":
      "The room feels different when people who click overlap.",
    "supply.features.four.title": "More repeat visits",
    "supply.features.four.text":
      "Good days create habit. People choose your space again.",
    "supply.diff.title": "Not traffic. Momentum.",
    "supply.diff.others": "Others",
    "supply.diff.otherOne": "Marketplaces bring random visitors.",
    "supply.diff.otherTwo": "Marketing creates one-time spikes.",
    "supply.diff.otherThree": "Events generate temporary activity.",
    "supply.diff.here": "hier.",
    "supply.diff.hereOne": "hier. builds recurring, coordinated presence.",
    "supply.diff.hereTwo":
      "Users choose your space because they know who'll be there.",
    "supply.diff.hereThree": "Good days generate repeat behavior.",
    "supply.diff.foot": "Become a space people choose — not just find.",
    "supply.mock.title": "How your space shows up on hier.",
    "supply.mock.text":
      "Users see who's at your space before deciding whether to go. That's what sets you apart from any other channel.",
    "supply.how.title": "How it works",
    "supply.how.one.title": "Your space joins hier.",
    "supply.how.one.text":
      "We add your coworking to the network and make it visible to people who fit.",
    "supply.how.two.title": "Users see who's working there",
    "supply.how.two.text":
      "They understand the room before deciding where to go.",
    "supply.how.three.title": "They choose your space",
    "supply.how.three.text":
      "They come because the mix of people makes sense for their day.",
    "supply.how.four.title": "Groups form and come back",
    "supply.how.four.text": "Good days create habit. Momentum builds.",
    "supply.fit.title": "hier. is for you if…",
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
      "Join hier. and become a space people genuinely choose.",
    "supply.form.nameLabel": "Workspace name",
    "supply.form.namePlaceholder": "Workspace name",
    "supply.form.emailLabel": "Your email",
    "supply.form.emailPlaceholder": "Your email",
    "supply.form.buttonPrimary": "Become a partner",
    "supply.form.buttonSecondary": "Talk to us",
    "supply.form.note":
      "No commitment. We'll get back to you within 48 hours.",
    "enterprise.hero.eyebrow": "Enterprise landing page",
    "enterprise.hero.title": "Your team. Same place. Same day.",
    "enterprise.hero.text":
      "hier. coordinates where your team works. No fixed office. No rigidity. Just the days it makes sense to be together.",
    "enterprise.hero.ctaPrimary": "Talk to us",
    "enterprise.hero.ctaSecondary": "See how it works",
    "enterprise.metrics.label": "What you get",
    "enterprise.metrics.one.label":
      "Access to a coworking network in your city.",
    "enterprise.metrics.two.label":
      "Coordinate which days your team overlaps.",
    "enterprise.metrics.three.label": "No office lease. No fixed cost.",
    "enterprise.statement.one": "The energy of an office.",
    "enterprise.statement.two": "Without the office.",
    "enterprise.value.eyebrow": "Why this matters",
    "enterprise.value.title": "Hybrid work works. But something's missing.",
    "enterprise.value.one.title": "Your team works from anywhere",
    "enterprise.value.one.text":
      "Flexibility was the goal. You got there. But now everyone works from home, from their cafe, from their own coworking. Without crossing paths.",
    "enterprise.value.two.title": "Tools don't solve it",
    "enterprise.value.two.text":
      "Slack, Notion, Zoom. Everything works. But the energy of working together in the same room has no digital substitute.",
    "enterprise.value.three.title": "A fixed office doesn't either",
    "enterprise.value.three.text":
      "Going back to a Monday-to-Friday office isn't what anyone wants. There's something in between. Overlapping when it makes sense, where it makes sense.",
    "enterprise.offer.eyebrow": "How it works",
    "enterprise.offer.title": "Coordinate where your team works.",
    "enterprise.offer.one": "Coworking access for your whole team.",
    "enterprise.offer.two":
      "Coordinated presence, not mandatory attendance.",
    "enterprise.offer.three": "No office lease.",
    "enterprise.offer.one.title": "Coworking access for your whole team",
    "enterprise.offer.one.text":
      "Your team joins the hier. network and can work from any partner space in the city.",
    "enterprise.offer.two.title":
      "Coordinated presence, not mandatory attendance",
    "enterprise.offer.two.text":
      "hier. shows who's at each space. Your team decides to go when there's people. No forcing. No mandatory schedule.",
    "enterprise.offer.three.title": "No office lease",
    "enterprise.offer.three.text":
      "You pay for real usage. No long-term commitments. No empty square meters on Fridays.",
    "enterprise.buy.eyebrow": "What changes",
    "enterprise.buy.title": "What changes for your team.",
    "enterprise.buy.one.title": "Team days without forced planning",
    "enterprise.buy.one.text":
      "The team overlaps naturally when hier. shows who's around. No Doodle, no meetings to organize meetings.",
    "enterprise.buy.two.title": "Spaces that already work",
    "enterprise.buy.two.text":
      "Your team works in coworkings with good energy, good connectivity, and interesting people around.",
    "enterprise.buy.three.title": "Real visibility into usage",
    "enterprise.buy.three.text":
      "You know which days the team overlaps, which spaces they prefer, and how the habit evolves.",
    "enterprise.buy.four.title": "Flexible by design",
    "enterprise.buy.four.text":
      "More overlap during project sprints. Less in August. The space adapts to the team's rhythm.",
    "enterprise.how.title": "How it works for your company.",
    "enterprise.how.one.title": "Your company joins hier.",
    "enterprise.how.one.text":
      "We add your team to the network and set up access to spaces in your city.",
    "enterprise.how.two.title": "Your team sees who's where",
    "enterprise.how.two.text":
      "Everyone can see who from the team is working at which space each day.",
    "enterprise.how.three.title": "They overlap when it makes sense",
    "enterprise.how.three.text":
      "No obligation. Those who want to overlap, can. Coordination happens naturally.",
    "enterprise.how.four.title": "The habit forms on its own",
    "enterprise.how.four.text":
      "Good days create routine. The team starts choosing to overlap because it works.",
    "enterprise.fit.eyebrow": "Best fit",
    "enterprise.fit.title": "hier. is for your company if…",
    "enterprise.fit.one.title":
      "You have a remote or hybrid team and want more overlap, without going back to a fixed office.",
    "enterprise.fit.two.title":
      "You use coworkings but everyone goes to their own — without coordination.",
    "enterprise.fit.three.title":
      "You value team culture and feel it's diluting with distance.",
    "enterprise.fit.four.title":
      "You want real flexibility, not an office lease with a different name.",
    "enterprise.form.eyebrow": "Talk to us",
    "enterprise.form.title": "Your team's best days don't need an office.",
    "enterprise.form.text":
      "Leave your email and we'll explain how hier. can work for your team.",
    "enterprise.form.companyLabel": "Your company",
    "enterprise.form.companyPlaceholder": "Your company",
    "enterprise.form.emailLabel": "Your work email",
    "enterprise.form.emailPlaceholder": "name@company.com",
    "enterprise.form.button": "I want to know more",
    "enterprise.form.note":
      "No commitment. We'll get back to you within 48 hours.",
  },
  es: {
    "nav.about": "Nosotros",
    "nav.demand": "Independientes",
    "nav.supply": "Partners",
    "nav.enterprise": "Enterprise",
    "meta.index.title":
      "hier. — Piensas mejor cuando estás rodeado de gente que hace lo que tú haces.",
    "meta.index.description":
      "hier. es una capa de presencia para independientes y espacios partner. Ve quién trabaja dónde, elige tu sala, piensa mejor.",
    "meta.index.descriptionEs":
      "hier. es una capa de presencia para independientes y espacios partner. Ve quién trabaja dónde, elige tu sala, piensa mejor.",
    "meta.index.ogDescription":
      "Every city used to have a place where the best in a craft gathered. hier. is bringing that back.",
    "meta.demand.title": "hier. | Independientes",
    "meta.demand.description":
      "hier. muestra a los independientes quién está en cada coworking para que puedan decidir adónde ir según gente como ellos, no a ciegas.",
    "meta.supply.title": "hier. | Partners",
    "meta.supply.description":
      "hier. ayuda a los partners a convertir oferta flexible en sesiones recurrentes y coordinadas, con mejor energía en sala y más repetición.",
    "meta.enterprise.title": "hier. | Enterprise",
    "meta.enterprise.description":
      "hier. da a las empresas una forma de aparecer dentro de sesiones de trabajo recurrentes donde ya se reúne talento independiente de alta señal.",
    "index.hero.lead":
      "Cada ciudad tenía un lugar donde se juntaban los mejores en su oficio.",
    "index.hero.text":
      "hier. lo devuelve. Una capa de presencia para independientes: ve quién trabaja dónde, elige tu sala, piensa mejor por culpa de quién hay en ella.",
    "index.hero.ctaDemand": "Para independientes →",
    "index.hero.ctaSupply": "Para partners →",
    "index.hero.ctaEnterprise": "Para empresas →",
    "index.problem.quote":
      "La proximidad era la forma más antigua de desarrollo profesional. Y funcionaba porque era honesta. No se actuaba. Solo se aparecía.",
    "index.problem.title":
      "Después el trabajo se volvió flexible. Y algo se perdió.",
    "index.problem.text":
      "Los independientes ganaron libertad. Pero perdieron lo que las oficinas daban sin intentarlo: una sala llena de gente que entiende lo que haces. No compañeros. No clientes. Solo gente trabajando en cosas parecidas, lo suficientemente cerca como para hacerte mejor.",
    "index.solution.quote":
      "hier. lo devuelve. No como un evento. No como una plataforma de conexiones. Como una capa simple de información.",
    "index.solution.one.title": "Quién trabaja dónde, hoy.",
    "index.solution.one.text":
      "Presencia en tiempo real en los espacios partner de tu ciudad.",
    "index.solution.two.title": "Elige tu sala.",
    "index.solution.two.text":
      "Escoge el espacio según quién está, no solo según dónde está.",
    "index.solution.three.title": "Piensa mejor.",
    "index.solution.three.text":
      "Las conexiones, colaboraciones y reputación llegan solas.",
    "index.proof.title": "El momento es ahora.",
    "index.proof.one.number": "55%",
    "index.proof.one.title": "de profesionales ya usan espacios flex",
    "index.proof.one.text":
      "La demanda está. Falta la coordinación.",
    "index.proof.two.number": "12% → 21%",
    "index.proof.two.title": "de espacio flex en Europa en un año",
    "index.proof.two.text":
      "El trabajo flexible no es una tendencia. Es el estándar.",
    "index.proof.three.number": "€15–40",
    "index.proof.three.title": "day passes ya existen en Madrid",
    "index.proof.three.text":
      "El acceso está resuelto. Saber quién está, no.",
    "index.paths.quote": "¿Para quién es hier.?",
    "index.paths.one.title": "Trabajo de forma independiente",
    "index.paths.one.text": "Encuentra tu sala. Trabaja cerca de gente como tú.",
    "index.paths.one.cta": "Ver cómo funciona →",
    "index.paths.two.title": "Tengo un espacio",
    "index.paths.two.text": "Llena tu sala con gente que encaja.",
    "index.paths.two.cta": "Conviértete en partner →",
    "index.paths.three.title": "Tengo un equipo remoto",
    "index.paths.three.text": "Mismo sitio, mismo día. Sin oficina fija.",
    "index.paths.three.cta": "Ver cómo funciona →",
    "index.closing.quote":
      "Piensas mejor cuando estás rodeado de gente que hace lo que tú haces.",
    "index.closing.cta": "Encuentra tu sala →",
    "index.closing.notePrefix": "O únete como partner.",
    "index.closing.noteLink": "Partners",
    "demand.hero.eyebrow": "Página Independientes",
    "demand.hero.title": "Trabaja cerca de gente como tú.",
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
      "El trabajo remoto te dio libertad. Pero también te quitó algo: la energía de estar rodeado de gente como tú.",
    "demand.flex.bodyTwo":
      "Hoy muchos independientes pasan sus días solos — en casa, en cafeterías, o en coworkings donde no conocen a nadie. Están rodeados de gente, pero no de su gente.",
    "demand.problem.eyebrow": "Elegir mejor",
    "demand.problem.title": "Elige con quién, no solo dónde.",
    "demand.problem.oldLabel": "Sin Hier",
    "demand.problem.one.title": "Eliges un coworking.",
    "demand.problem.two.title": "Esperas que esté bien.",
    "demand.problem.three.title": "No conoces a nadie.",
    "demand.problem.four.title": "Otro día solo.",
    "demand.problem.newLabel": "Con Hier",
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
    "demand.solution.two.title": "Gente como tú",
    "demand.solution.two.text":
      "Diseñadores, devs, creativos y otros independientes — filtra por lo que te importa.",
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
    "demand.form.roleFour": "Independiente",
    "demand.form.roleFive": "Otro independiente",
    "demand.form.emailPlaceholder": "Tu email",
    "demand.form.button": "Únete a la lista",
    "demand.form.note":
      "Sin spam. Te avisamos cuando hier. esté disponible en tu ciudad.",
    "supply.hero.title": "Llena tu espacio con gente que encaja.",
    "supply.hero.text":
      "hier. hace que tu sala funcione. No tráfico aleatorio: presencia coordinada.",
    "supply.hero.ctaPrimary": "Conviértete en partner",
    "supply.hero.ctaSecondary": "Habla con nosotros",
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
    "supply.solution.one.title": "Gente que encaja",
    "supply.solution.one.text":
      "Diseñadores, devs, creativos e independientes que deciden ir a tu espacio porque saben quién más va a estar.",
    "supply.solution.two.title": "Presencia coordinada",
    "supply.solution.two.text":
      "No es descubrimiento — es coordinación. Ayudamos a que grupos coincidan en tu espacio al mismo tiempo.",
    "supply.solution.three.title": "Cuando la sala funciona",
    "supply.solution.three.text":
      "Un buen día en tu espacio es el mejor argumento para que alguien vuelva. Y vuelva a volver.",
    "supply.features.title": "Qué cambia cuando estás en hier.",
    "supply.features.one.title": "Ocupación más consistente",
    "supply.features.one.text":
      "Menos días muertos. Más flujo predecible a lo largo de la semana.",
    "supply.features.two.title": "Gente que repite",
    "supply.features.two.text":
      "Gente que cuida el espacio y repite — no solo quien busca el desk más barato.",
    "supply.features.three.title": "Mejor energía en la sala",
    "supply.features.three.text":
      "La sala se siente diferente cuando coincide gente que encaja.",
    "supply.features.four.title": "Más visitas recurrentes",
    "supply.features.four.text":
      "Los buenos días crean hábito. La gente elige tu espacio de nuevo.",
    "supply.diff.title": "No es tráfico. Es momentum.",
    "supply.diff.others": "Otros",
    "supply.diff.otherOne": "Los marketplaces traen visitas aleatorias.",
    "supply.diff.otherTwo": "El marketing genera picos puntuales.",
    "supply.diff.otherThree": "Los eventos crean actividad temporal.",
    "supply.diff.here": "hier.",
    "supply.diff.hereOne": "hier. construye presencia recurrente y coordinada.",
    "supply.diff.hereTwo":
      "Los usuarios eligen tu espacio porque saben quién estará.",
    "supply.diff.hereThree": "Los buenos días generan repetición.",
    "supply.diff.foot":
      "Conviértete en un espacio que la gente elige — no solo que encuentra.",
    "supply.mock.title": "Así aparece tu espacio en hier.",
    "supply.mock.text":
      "Los usuarios ven quién está en tu espacio antes de decidir si van. Eso es lo que te diferencia de cualquier otro canal.",
    "supply.how.title": "Cómo funciona",
    "supply.how.one.title": "Tu espacio entra en hier.",
    "supply.how.one.text":
      "Añadimos tu coworking a la red y lo hacemos visible para gente que encaja.",
    "supply.how.two.title": "Los usuarios ven quién está",
    "supply.how.two.text":
      "Entienden cómo es la sala antes de decidir adónde van.",
    "supply.how.three.title": "Eligen tu espacio",
    "supply.how.three.text":
      "Vienen porque la mezcla de personas tiene sentido para su día.",
    "supply.how.four.title": "Forman grupos y repiten",
    "supply.how.four.text":
      "Los buenos días crean hábito. El momentum se acumula.",
    "supply.fit.title": "hier. es para ti si…",
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
      "Entra en hier. y conviértete en un espacio que la gente elige de verdad.",
    "supply.form.nameLabel": "Nombre de tu espacio",
    "supply.form.namePlaceholder": "Nombre de tu espacio",
    "supply.form.emailLabel": "Tu email",
    "supply.form.emailPlaceholder": "Tu email",
    "supply.form.buttonPrimary": "Conviértete en partner",
    "supply.form.buttonSecondary": "Habla con nosotros",
    "supply.form.note":
      "Sin compromisos. Te contactamos en menos de 48 horas.",
    "enterprise.hero.eyebrow": "Landing enterprise",
    "enterprise.hero.title": "Tu equipo. Mismo sitio. Mismo día.",
    "enterprise.hero.text":
      "hier. coordina dónde trabaja tu equipo. Sin oficina fija. Sin rigidez. Solo los días que tiene sentido coincidir.",
    "enterprise.hero.ctaPrimary": "Habla con nosotros",
    "enterprise.hero.ctaSecondary": "Ver cómo funciona",
    "enterprise.metrics.label": "Lo que obtienes",
    "enterprise.metrics.one.label":
      "Acceso a una red de coworkings en tu ciudad.",
    "enterprise.metrics.two.label":
      "Coordina qué días coincide el equipo.",
    "enterprise.metrics.three.label":
      "Sin contrato de oficina. Sin coste fijo.",
    "enterprise.statement.one": "La energía de una oficina.",
    "enterprise.statement.two": "Sin la oficina.",
    "enterprise.value.eyebrow": "Por qué importa",
    "enterprise.value.title": "El trabajo híbrido funciona. Pero algo falla.",
    "enterprise.value.one.title": "Tu equipo trabaja desde cualquier sitio",
    "enterprise.value.one.text":
      "La flexibilidad era el objetivo. La conseguisteis. Pero ahora cada persona trabaja desde casa, desde su café, desde su propio coworking. Sin cruzarse.",
    "enterprise.value.two.title": "Las herramientas no lo resuelven",
    "enterprise.value.two.text":
      "Slack, Notion, Zoom. Todo funciona. Pero la energía de trabajar juntos en la misma sala no tiene sustituto digital.",
    "enterprise.value.three.title": "Una oficina fija tampoco",
    "enterprise.value.three.text":
      "Volver a una oficina de lunes a viernes no es lo que nadie quiere. Hay algo intermedio. Coincidir cuando tiene sentido, donde tiene sentido.",
    "enterprise.offer.eyebrow": "Cómo funciona",
    "enterprise.offer.title": "Coordina dónde trabaja tu equipo.",
    "enterprise.offer.one": "Acceso a coworkings para todo el equipo.",
    "enterprise.offer.two":
      "Presencia coordinada, no obligatoria.",
    "enterprise.offer.three": "Sin contrato de oficina.",
    "enterprise.offer.one.title":
      "Acceso a coworkings para todo el equipo",
    "enterprise.offer.one.text":
      "Tu equipo entra en la red de hier. y puede trabajar desde cualquier espacio asociado en la ciudad.",
    "enterprise.offer.two.title":
      "Presencia coordinada, no obligatoria",
    "enterprise.offer.two.text":
      "hier. muestra quién está en cada espacio. Tu equipo decide ir cuando hay gente. Sin obligar. Sin calendario forzado.",
    "enterprise.offer.three.title": "Sin contrato de oficina",
    "enterprise.offer.three.text":
      "Pagas por uso real. Sin compromisos de largo plazo. Sin metros cuadrados vacíos los viernes.",
    "enterprise.buy.eyebrow": "Qué cambia",
    "enterprise.buy.title": "Qué cambia para tu equipo.",
    "enterprise.buy.one.title": "Días de equipo sin planificación forzada",
    "enterprise.buy.one.text":
      "El equipo coincide de forma natural cuando hier. muestra que hay gente. Sin Doodle, sin reuniones para organizar reuniones.",
    "enterprise.buy.two.title": "Espacios que ya funcionan",
    "enterprise.buy.two.text":
      "Tu equipo trabaja en coworkings con buena energía, buena conexión y gente interesante alrededor.",
    "enterprise.buy.three.title": "Visibilidad real del uso",
    "enterprise.buy.three.text":
      "Sabes qué días coincide el equipo, qué espacios prefieren y cómo evoluciona el hábito.",
    "enterprise.buy.four.title": "Flexible por diseño",
    "enterprise.buy.four.text":
      "Más coincidencia en sprints. Menos en agosto. El espacio se adapta al ritmo del equipo.",
    "enterprise.how.title": "Cómo funciona para tu empresa.",
    "enterprise.how.one.title": "Tu empresa entra en hier.",
    "enterprise.how.one.text":
      "Añadimos tu equipo a la red y configuramos el acceso a los espacios de tu ciudad.",
    "enterprise.how.two.title": "Tu equipo ve quién está y dónde",
    "enterprise.how.two.text":
      "Cada persona puede ver quién del equipo va a trabajar a qué espacio cada día.",
    "enterprise.how.three.title": "Coinciden cuando tiene sentido",
    "enterprise.how.three.text":
      "Sin obligación. Quien quiere coincidir, puede. La coordinación ocurre sola.",
    "enterprise.how.four.title": "El hábito se forma solo",
    "enterprise.how.four.text":
      "Los buenos días crean rutina. El equipo empieza a elegir coincidir porque funciona.",
    "enterprise.fit.eyebrow": "Mejor encaje",
    "enterprise.fit.title": "hier. es para tu empresa si…",
    "enterprise.fit.one.title":
      "Tienes equipo remoto o híbrido y quieres que coincidan más, sin volver a una oficina fija.",
    "enterprise.fit.two.title":
      "Usas coworkings pero cada persona va al suyo, sin coordinación.",
    "enterprise.fit.three.title":
      "Valoras la cultura de equipo y sientes que se está diluyendo con la distancia.",
    "enterprise.fit.four.title":
      "Quieres flexibilidad real, no un contrato de oficina con otro nombre.",
    "enterprise.form.eyebrow": "Habla con nosotros",
    "enterprise.form.title":
      "Los mejores días de equipo no necesitan una oficina.",
    "enterprise.form.text":
      "Déjanos tu email y te contamos cómo hier. puede funcionar para tu equipo.",
    "enterprise.form.companyLabel": "Tu empresa",
    "enterprise.form.companyPlaceholder": "Tu empresa",
    "enterprise.form.emailLabel": "Tu email de trabajo",
    "enterprise.form.emailPlaceholder": "nombre@empresa.com",
    "enterprise.form.button": "Quiero saber más",
    "enterprise.form.note":
      "Sin compromisos. Te contactamos en menos de 48 horas.",
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
