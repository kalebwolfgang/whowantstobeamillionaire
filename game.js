// Know Your Rights · CCJT: single-file ES module.
// Loaded by index.html via <script type="module" src="./game.js">.
// React comes from a CDN as a module, so this file stays readable and small.
import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

// Bind the two runtime handles the game code expects:
//   I  = React (for hooks: useState/useEffect/useRef/useMemo, and Fragment)
//   c  = jsx-style helpers built on React.createElement
//   qc = createRoot
const I = React;
// The automatic JSX runtime calls jsx(type, props, key). React.createElement
// takes key inside its props argument, so fold it back in and spread children.
function makeEl(type, props, key) {
  const { children, ...rest } = props || {};
  if (key !== undefined) rest.key = key;
  if (Array.isArray(children)) return React.createElement(type, rest, ...children);
  if (children === undefined) return React.createElement(type, rest);
  return React.createElement(type, rest, children);
}
const c = { jsx: makeEl, jsxs: makeEl, Fragment: React.Fragment };
const qc = createRoot;

/* ============================================================
   KNOW YOUR RIGHTS · CCJT
   Game code. Assumes React runtime is defined above as:
     I  = React
     c  = jsx runtime (c.jsx, c.jsxs, c.Fragment)
     qc = ReactDOM.createRoot
   ============================================================ */

const Wp = {
  easy: [
    {
      q: "A police officer starts asking you questions. What do you have to do to actually use your right to remain silent?",
      options: ["Say out loud that you're staying silent", "Just stop talking and say nothing", "Nod your head no", "Wait for the officer to stop asking"],
      correct: 0,
      hint: "A right you keep secret doesn't do much work. How would the officer know you're using it?",
      optionExplanations: [null, "This feels right, but courts have said just going quiet isn't enough to legally claim the right. Berghuis v. Thompkins held that silence alone doesn't count. You have to announce it.", "A nod can be missed, misread, or ignored. Say it in words so there's no confusion.", "Officers aren't required to stop asking on their own. You have to be the one to invoke your right."],
      principle: "Weird but true: silence alone doesn't legally count as invoking your right. In Berghuis v. Thompkins, someone was silent for hours during questioning, then spoke, and their statement got used against them. Saying the words out loud is what switches on the actual protection.",
      keyPhrase: { quote: "\"I'm going to stay silent.\"", gloss: "Say it out loud. Silence alone doesn't count as invoking your right." },
      scenario: { setup: "You're stopped on the street and an officer starts firing off questions.", lines: [{ label: "OFFICER", text: "Where were you tonight?" }, { label: "YOU", text: "I'm choosing to stay silent." }], note: "Repeat that same line every time a new question comes." }
    },
    {
      q: "Which sentence forces police to stop questioning you?",
      options: ["\"I want a lawyer.\"", "\"I don't really want to talk right now.\"", "\"Maybe I should get a lawyer?\"", "\"Do I need a lawyer?\""],
      correct: 0,
      hint: "The magic isn't being polite or unsure. It's being crystal clear. Which one leaves zero doubt?",
      optionExplanations: [null, "Soft and vague reads as reluctance, not a demand. It does NOT clearly invoke your right the way 'I want a lawyer' does.", "The word 'maybe' is the problem. Davis v. United States said an unsure statement doesn't require police to stop.", "Asking a question isn't a request. It doesn't trigger your right. State it, don't ask it."],
      principle: "The Supreme Court (Davis v. United States) said a wobbly request doesn't count. Cops can legally keep questioning after 'maybe' or 'do I?' Only a direct statement flips the switch.",
      keyPhrase: { quote: "\"I want a lawyer.\"", gloss: "Clear words. No 'maybe,' no question marks. That's the off switch." },
      scenario: { setup: "You're being questioned and the officer keeps pushing for a quick answer.", lines: [{ label: "OFFICER", text: "Just tell me what happened, quick." }, { label: "YOU", text: "I want a lawyer." }], note: "Once you say this clearly, questioning is supposed to stop until a lawyer is there." }
    },
    {
      q: "An officer asks, \"Mind if I search your bag?\" What can you do?",
      options: ["Say you don't consent to the search", "You have to open it because they asked", "Run so they can't check it", "Empty it out to prove you're innocent"],
      correct: 0,
      hint: "They're asking permission for a reason. What does that tell you about whether you have to say yes?",
      optionExplanations: [null, "A question isn't a command. Because they're asking, you generally don't have to say yes.", "Running can turn a small stop into a big one, and it's dangerous. Just calmly decline with words.", "Emptying your bag counts as consenting. Keep it closed and say you don't consent."],
      principle: "Once you consent, they can search whatever you agreed to. Saying no forces them to have a warrant or a real solid reason. Even if they search anyway, your objection matters in court later.",
      keyPhrase: { quote: "\"I don't consent to searches.\"", gloss: "Polite, clear, legal to say. Saying no is your right." },
      scenario: { setup: "An officer points at your backpack and asks to take a look inside.", lines: [{ label: "OFFICER", text: "Mind if I check your bag?" }, { label: "YOU", text: "I don't consent to a search." }], note: "If the search wasn't allowed, your objection helps a lawyer challenge it later." }
    },
    {
      q: "You're stopped on the sidewalk and not sure if you can go. What's the smartest question to ask?",
      options: ["\"Am I free to leave?\"", "\"Why are you always bothering me?\"", "\"What's your badge number?\"", "\"Can you just let me off this time?\""],
      correct: 0,
      hint: "You want one clean piece of information: are you being held, or not? Which question gets you that?",
      optionExplanations: [null, "That starts an argument instead of getting information. It doesn't tell you if you're being held.", "You can ask for a badge number, but it doesn't answer whether you're free to walk away.", "This treats you like you're guilty. You don't need to plead. You need to know if you can leave."],
      principle: "There are two legal situations: 'consensual encounter' (you can just walk) and 'detention' (you can't). This question forces the officer to tell you which one is happening. Now you know what to do next.",
      keyPhrase: { quote: "\"Am I free to leave?\"", gloss: "The question that tells you if you're being held or can walk away." },
      scenario: { setup: "It's late and you're walking home when an officer stops you.", lines: [{ label: "YOU", text: "Am I free to leave?" }, { label: "OFFICER SAYS YES", text: "Calmly walk away. You're done." }, { label: "OFFICER SAYS NO", text: "You're detained. Stay calm, stay silent, ask for a parent or lawyer." }], note: "One clean question tells you exactly which situation you're in." }
    },
    {
      q: "You're sure the police stopping you are wrong. What should you still NOT do?",
      options: ["Physically resist or pull away", "Ask if you're free to leave", "Say you want to stay silent", "Remember the officers' details for later"],
      correct: 0,
      hint: "Being right doesn't make it safe. Where's the place to actually win an unfair stop, the sidewalk, or later?",
      optionExplanations: [null, "Asking if you're free to leave is smart and safe. Do it.", "Saying you want to stay silent is what you SHOULD do, not avoid.", "Remembering details helps a lawyer challenge an unfair stop later. Do this."],
      principle: "There's a saying in criminal law: 'you might beat the rap but you can't beat the ride.' Resisting arrest is its own crime, even if the arrest itself was illegal. The place to fight an unfair stop is in court, not on the street.",
      keyPhrase: { quote: "Don't fight it. Fight it in court.", gloss: "Even if the stop is wrong, resisting can hurt you and add new charges." },
      scenario: { setup: "The stop feels completely unfair and you know they've got no reason.", lines: [{ label: "STAY CALM", text: "Keep hands visible. Don't run. Don't push back." }, { label: "REMEMBER", text: "Badge numbers. Patrol car numbers. What was said." }, { label: "LATER", text: "A lawyer challenges an unlawful stop in court." }], note: "You might beat the rap, but you can't beat the ride. Win it later." }
    }
  ],
  medium: [
    {
      q: "You get pulled over while driving. What are you actually required to hand the officer?",
      options: ["License, registration, and proof of insurance", "Your unlocked phone", "A written explanation of where you're going", "Nothing at all, you can refuse everything"],
      correct: 0,
      hint: "Think about the documents that come with the privilege of driving, not your personal messages or your travel plans.",
      optionExplanations: [null, "Your phone is private. Police generally need a warrant to search it (Riley v. California).", "You're not required to explain your travel. You can stay silent on that.", "Driving comes with a duty to show your three documents. The 'refuse everything' idea is a myth for drivers."],
      principle: "Driving is a licensed privilege, so the state can require you to prove you're allowed to be there. But your right to stay silent doesn't disappear behind the wheel. Docs are the deal; conversation isn't.",
      keyPhrase: { quote: "License, registration, insurance.", gloss: "Those three. Everything else, you can stay silent on." },
      scenario: { setup: "Red and blue lights flash behind you. You pull over and roll down the window.", lines: [{ label: "OFFICER", text: "License and registration, please." }, { label: "YOU", text: "[hands them over, keeps hands on the wheel]" }, { label: "OFFICER", text: "Where are you headed tonight?" }, { label: "YOU", text: "I'd rather not answer that." }], note: "Hand over the three documents. You can still decline to chat." }
    },
    {
      q: "Police arrest someone and want to look through their phone. What do they almost always need first?",
      options: ["A warrant", "The person's passcode, no matter what", "Just to ask nicely once", "Permission from the phone company"],
      correct: 0,
      hint: "Your phone holds your whole life. The Supreme Court treated it differently from the stuff in your pockets.",
      optionExplanations: [null, "Riley v. California means they generally need a warrant. Grabbing your passcode without one runs into your rights.", "A polite request doesn't give them access. Without your consent, they usually need a warrant.", "The phone company isn't the gatekeeper. The legal key is a warrant from a judge."],
      principle: "Your phone holds basically everything about your life. In Riley v. California (2014), the Supreme Court unanimously said police can't just scroll through it like they can check your pockets. Chief Justice Roberts literally wrote 'get a warrant.'",
      keyPhrase: { quote: "Get a warrant.", gloss: "The Supreme Court's answer in Riley v. California (2014) for searching a phone." },
      scenario: { setup: "You've been arrested and an officer is holding your locked phone.", lines: [{ label: "OFFICER", text: "Unlock your phone for me." }, { label: "YOU", text: "I don't consent to a search of my phone." }], note: "Even after arrest, they generally need a warrant to see what's on it." }
    },
    {
      q: "Can a principal search your backpack at school without a warrant?",
      options: ["Yes, if they have reasonable suspicion you broke a rule or law", "No, they always need a warrant like police", "Only if you say it's okay", "Only after calling your parents"],
      correct: 0,
      hint: "School is a special zone. The bar for staff is lower than for police on the street, but it's not zero.",
      optionExplanations: [null, "This is the myth T.L.O. corrected. Schools do NOT need a warrant. They search on reasonable suspicion, a lower standard.", "Your 'okay' isn't required if they have reasonable suspicion. You can still object, which matters later.", "There's no rule that a parent call must happen first. It can legally happen without it."],
      principle: "Schools use a lower bar called 'reasonable suspicion' (from New Jersey v. T.L.O.). They need a specific reason connected to a rule violation, not a hunch or a fishing expedition. Your rights don't disappear at school, they just adjust.",
      keyPhrase: { quote: "Schools use reasonable suspicion.", gloss: "Lower bar than police face on the street (New Jersey v. T.L.O.)." },
      scenario: { setup: "You're called into the office and the principal points at your backpack.", lines: [{ label: "PRINCIPAL", text: "Empty out your bag." }, { label: "YOU", text: "I don't consent to a search." }, { label: "WHAT HAPPENS", text: "They can still search if they have reasonable suspicion." }], note: "Your objection still protects you if it turns out they had no real suspicion." }
    },
    {
      q: "You see police arresting someone in a public park. Can you record it on your phone?",
      options: ["Yes, as long as you don't interfere", "No, recording police is illegal", "Only if the officers say yes first", "Only if you're a professional journalist"],
      correct: 0,
      hint: "Sunlight and accountability. Courts have repeatedly protected regular people doing this, with one common-sense limit.",
      optionExplanations: [null, "This is a widespread myth. Courts across the country have upheld the right to record police in public.", "You don't need their permission. The right doesn't depend on officers saying yes.", "The right isn't limited to the press. Courts have extended it to ordinary bystanders."],
      principle: "Federal courts across the country have ruled that filming government workers doing public duties in public is First Amendment protected. It's basically press freedom for regular people. Just don't physically get in the way.",
      keyPhrase: { quote: "You can record. Don't interfere.", gloss: "Public arrests, public streets, First Amendment protected." },
      scenario: { setup: "In a public park, you watch officers making an arrest.", lines: [{ label: "YOU CAN", text: "Stand back a safe distance and film on your phone." }, { label: "MICHIGAN", text: "One-party consent means audio is fine too, as an observer." }], note: "Keep your distance. Filming is protected; interfering is not." }
    },
    {
      q: "Which conversation at school gives you the LEAST legal protection about what you say?",
      options: ["Talking to a School Resource Officer (SRO)", "Talking to a school nurse about a scrape", "Talking to a friend at lunch", "Talking to a coach about practice"],
      correct: 0,
      hint: "One of these people carries a badge. What does that change about your words?",
      optionExplanations: [null, "A quick medical chat isn't police questioning. The SRO carries the badge and the legal risk.", "Talking to a friend isn't a government official questioning you. It's the SRO whose questions have consequences.", "A coach talking about practice isn't law enforcement. The SRO is."],
      principle: "SROs feel like part of the school but they're actually sworn police officers who can arrest you and file real charges. Anything you say to them can end up in court. The friendly setting is real; the legal reality isn't friendly.",
      keyPhrase: { quote: "SRO = police officer.", gloss: "Not a teacher, not a counselor. Same rights, same risks." },
      scenario: { setup: "The School Resource Officer waves you over to talk about a fight.", lines: [{ label: "SRO", text: "Come with me. Let's talk about that fight." }, { label: "YOU", text: "I want to talk to my parent or a lawyer first." }], note: "The first SRO program in the country started in Flint, Michigan, in the 1950s." }
    }
  ],
  hard: [
    {
      q: "After you clearly say \"I want a lawyer,\" what are police supposed to do?",
      options: ["Stop questioning you until a lawyer is there", "Ask you a few more questions first", "Only stop if you're actually under arrest", "Wait for you to prove you can afford one"],
      correct: 0,
      hint: "A clear request is a hard stop, not a pause. And whether you can pay isn't the point.",
      optionExplanations: [null, "A clear request means stop, not 'a few more.' Continuing after a clear invocation is what the rule forbids.", "The right kicks in during custodial questioning, not only at formal arrest.", "Money doesn't matter. If you can't afford one, one is appointed for free."],
      principle: "When you clearly invoke your right to a lawyer, questioning is supposed to stop until one arrives. If police keep questioning after that request, evidence they get could be thrown out. Your specific words are the legal switch.",
      keyPhrase: { quote: "Say it clearly. Questioning stops.", gloss: "The right doesn't depend on arrest, age, or ability to pay." },
      scenario: { setup: "You're in an interview room and you've just asked for a lawyer.", lines: [{ label: "YOU", text: "I want a lawyer." }, { label: "OFFICER", text: "[should stop questioning until a lawyer is present]" }, { label: "IF THEY DON'T STOP", text: "Stay silent. A lawyer can later challenge anything they got." }], note: "Your words are the switch. Ability to pay never matters." }
    },
    {
      q: "What's the real difference between being \"detained\" and being \"arrested\"?",
      options: ["Detention is a short stop on reasonable suspicion; arrest is being taken into custody on probable cause", "They're just two words for the same thing", "Detention means you're guilty; arrest means you're not", "Arrest is short and friendly; detention lasts for days"],
      correct: 0,
      hint: "Think about two dials: how strong the officer's reason is, and how far your freedom is taken.",
      optionExplanations: [null, "They're genuinely different. Different levels of proof and different levels of custody.", "Neither is a finding of guilt. Guilt is decided later in court.", "This is backwards. Detentions are short investigative stops; arrests are the bigger custody step."],
      principle: "A detention is a brief investigative stop that needs reasonable suspicion. An arrest is being taken into custody and needs probable cause, a higher bar. Different reasons required, different powers, but your rights work during both.",
      keyPhrase: { quote: "Detained = short stop. Arrested = custody.", gloss: "Different reasons required. Your rights work during both." },
      scenario: { setup: "An officer is holding you on the sidewalk and you're not sure how serious this is.", lines: [{ label: "DETAINED", text: "Officer needs reasonable suspicion. Held briefly." }, { label: "ARRESTED", text: "Officer needs probable cause. Taken into custody." }], note: "You can stay silent, refuse searches, and ask for a lawyer during either one." }
    },
    {
      q: "Police on the street usually need \"probable cause\" to search you. What lower standard lets a school official search a student?",
      options: ["Reasonable suspicion", "Absolute proof", "A signed confession", "A unanimous school board vote"],
      correct: 0,
      hint: "It's the same lower bar from the T.L.O. case: more than a random guess, less than courtroom-level certainty.",
      optionExplanations: [null, "That's higher than police need. Schools operate on a LOWER standard, not a higher one.", "A confession isn't a search standard. Reasonable suspicion is.", "No vote required. A single official with reasonable suspicion can search."],
      principle: "The Supreme Court decided (in T.L.O.) that schools sit somewhere between total freedom and total police search authority. Kids are stuck at school all day so the rules bend a bit, but not to zero. Reasonable suspicion is where they landed.",
      keyPhrase: { quote: "Reasonable suspicion.", gloss: "Specific facts, not a random hunch. Lower bar than probable cause." },
      scenario: { setup: "A school official wants to search you, and you're wondering what standard they even need.", lines: [{ label: "STREET (POLICE)", text: "Probable cause required. A solid reason." }, { label: "SCHOOL (STAFF)", text: "Reasonable suspicion required. Facts, but a lower bar." }], note: "New Jersey v. T.L.O. (1985) set the lower school standard." }
    },
    {
      q: "When are police actually required to read you the \"Miranda\" rights (right to remain silent, etc.)?",
      options: ["When you're in custody AND being questioned", "The moment they put handcuffs on anyone", "Only after you've been convicted", "Every single time they talk to any person"],
      correct: 0,
      hint: "It takes two things happening together, not just one. Cuffs alone aren't the trigger.",
      optionExplanations: [null, "Handcuffs alone don't trigger Miranda. It's the custody-plus-questioning combo.", "Miranda is about questioning before and during a case, not after conviction.", "Not every conversation triggers it. Only custodial questioning does."],
      principle: "Miranda comes from Miranda v. Arizona (1966). The warning protects you when police pressure could be too much: specifically when you're stuck in their custody AND they're asking incriminating questions. Both parts have to be true, or no Miranda needed.",
      keyPhrase: { quote: "Custody + questioning = Miranda.", gloss: "Both must happen at once. Handcuffs alone don't trigger it." },
      scenario: { setup: "You're wondering when those TV-style rights actually have to be read.", lines: [{ label: "CASUAL CHAT", text: "No Miranda required. Anything you volunteer can still count." }, { label: "IN CUSTODY + QUESTIONS", text: "Miranda required. This is where 'I want a lawyer' matters most." }], note: "In J.D.B. v. North Carolina, the Court said a kid's age counts too." }
    },
    {
      q: "In Michigan today, at what age is someone automatically treated as an adult in the criminal system for most crimes?",
      options: ["18", "16", "17", "21"],
      correct: 0,
      hint: "Michigan changed this recently, on October 1, 2021. It used to be a year younger.",
      optionExplanations: [null, "16 isn't the line. It's 18 as of the 2021 'Raise the Age' law.", "17 was the OLD rule. That's exactly what Michigan changed.", "21 is too high. That's for other laws (like alcohol). Adult criminal age is 18."],
      principle: "Juvenile court focuses on rehabilitation: counseling, education, second chances. Michigan raised the age to 18 in 2021 because science shows teen brains are still developing. Adult convictions follow you forever; juvenile records can often be sealed.",
      keyPhrase: { quote: "Michigan: 18 is adult.", gloss: "Raised from 17 on October 1, 2021." },
      scenario: { setup: "You want to know when the system starts treating you as a full adult in Michigan.", lines: [{ label: "BEFORE OCT 2021", text: "17-year-olds went straight to adult court." }, { label: "NOW", text: "17-year-olds go through juvenile court instead." }], note: "Juvenile court can seal your record. Adult court means a conviction that follows you." }
    }
  ],
  expert: []
};

const R = {
  presenter: "",
  logo: { path: "./ccjt-logo.svg", fallbackPath: "./ccjt-logo.png", alt: "CCJT", height: 40 },
  title: "KNOW YOUR RIGHTS",
  hero: {
    headline: "Fifteen questions about your rights.",
    headlineAccent: "How many can you get?",
    subtitle: "Real situations. What you can say, what you can refuse, what the law actually is. Three lifelines if you need help."
  },
  playLabel: "Play",
  walkthrough: [
    { key: "ladder", type: "ladder", title: "THE LADDER", body: "Each question is worth more than the last. Get all 15 right and you win it all." },
    { key: "questions", type: "questions", title: "THE QUESTIONS", body: "Four choices per question. Pick one, lock it in. Miss one and the game ends." },
    { key: "cards", type: "cards", title: "REVIEW CARDS", body: "After you answer, you find out if you were right, then three cards flip up one at a time: the law behind it, a phrase to remember, and how it plays out in real life. Take a few seconds with each one." },
    { key: "points", type: "points", title: "POINTS", body: "Each review card you read earns a point, up to three per question. Open the Lifelines button during a question to spend points buying back lifelines you have used, so reading pays off when you get stuck later." },
    { key: "fifty", type: "lifeline", lifelineKey: "fifty", title: "50/50", body: "Your lifelines live behind the Lifelines button on the question screen. The first, 50/50, crosses off two wrong answers, leaving the correct one and one other choice. Best when you can narrow it down to two guesses." },
    { key: "jury", type: "lifeline", lifelineKey: "poll", title: "JURY", body: "A panel of other students voted on this question. You see what percentage picked each answer. The crowd is usually right, but not always. Trust it more when the top answer is way ahead." },
    { key: "counsel", type: "lifeline", lifelineKey: "hint", title: "COUNSEL", body: "A lawyer gives you a hint about the question. It won't give away the answer, but it will point you in the right direction. Save this one for when you're truly stuck." },
    { key: "shop", type: "shop", title: "THE SHOP", body: "Spend points in the Lifelines shop. Buy back any lifeline you have used, or buy two extras: a Shield that survives one wrong answer, and a Skip that trades your question for another. When you win, you will see exactly what you used and what you had left." },
    { key: "ready", type: "ready", title: "LET'S GO", body: "Fifteen questions. Five lifelines in the shop. No do-overs." }
  ],
  walkthroughStepPrefix: "Step",
  walkthroughSkipLabel: "Skip walkthrough",
  walkthroughNextLabel: "Next",
  walkthroughPlayLabel: "Play",
  homeButton: "\u2190 Home",
  homeConfirm: { title: "Leave this game?", body: "Your progress will be lost.", leaveLabel: "Leave", stayLabel: "Keep playing" },
  lifelines: {
    fifty: { label: "50/50", shortDesc: "Two wrong answers get crossed off.", fullDesc: "Two of the wrong answers get crossed off, leaving you with the correct one and one other choice. Best when you can narrow it down to two guesses." },
    poll: { label: "JURY", shortDesc: "See how other students answered.", fullDesc: "A panel of other students voted on this same question. You see what percentage picked each answer. Trust it more when the top answer is way ahead.", inGameLabel: "Jury" },
    hint: { label: "COUNSEL", shortDesc: "A lawyer gives you a hint.", fullDesc: "A lawyer gives you a hint about the question. It won't give away the answer, but it will point you in the right direction.", inGameLabel: "Counsel" },
    shield: { label: "SHIELD", shortDesc: "Survive one wrong answer.", fullDesc: "Arm it now. The next time you lock in a wrong answer, the shield takes the hit instead of ending your game, crosses that wrong choice off, and lets you pick again." },
    skip: { label: "SKIP", shortDesc: "Trade this question for another.", fullDesc: "Swaps your current question for a different one of the same difficulty that you haven't seen yet this run." }
  },
  lifelineConfirm: {
    useLabel: "Use it",
    cancelLabel: "Cancel",
    remainingOne: "This is your last one.",
    remainingMany: (e) => `${e} lifelines left after this.`
  },
  q15Choice: { takePrize: "Take the prize", keepGoing: "Keep going" },
  endlessMode: { headerLabel: "BONUS", ladderLabel: "BONUS ROUND" },
  endScreens: {
    won: { headline: "YOU WON", sub: "Fifteen out of fifteen. You actually know this stuff." },
    gameoverLate: { headline: "SO CLOSE", sub: "Almost. Rights are worth getting right. Come back when you want another shot." },
    gameoverEarly: { headline: "GAME OVER", sub: "That's on us if you didn't know. Now you do. Play again when you're ready." },
    endlessEnd: { headline: "CHAMPION", sub: "You won the million and kept going. Not bad at all." },
    endlessChampion: { headline: "LEGEND", sub: "You answered every question in the entire deck. Genuinely legendary." },
    missedQuestionLabel: "The question you missed",
    playAgainLabel: "Play again",
    footerNote: "Each run pulls a fresh set of questions",
    bonusStreakLabel: "Bonus streak"
  },
  cardMeta: [
    { key: "info", label: "THE LAW", icon: "\u2696" },
    { key: "phrase", label: "REMEMBER THIS", icon: "\u201C \u201D" },
    { key: "reallife", label: "IN REAL LIFE", icon: "\uD83D\uDCAC" }
  ],
  verdictContinue: "See what it means \u2192",
  verdictContinueWrong: "Learn why \u2192",
  questions: Wp
};

const he = [
  { level: 1, prize: 100 }, { level: 2, prize: 200 }, { level: 3, prize: 300 },
  { level: 4, prize: 500 }, { level: 5, prize: 1e3 }, { level: 6, prize: 2e3 },
  { level: 7, prize: 4e3 }, { level: 8, prize: 8e3 }, { level: 9, prize: 16e3 },
  { level: 10, prize: 32e3 }, { level: 11, prize: 64e3 }, { level: 12, prize: 125e3 },
  { level: 13, prize: 25e4 }, { level: 14, prize: 5e5 }, { level: 15, prize: 1e6 }
];

const Yc = ["easy", "easy", "easy", "easy", "easy", "medium", "medium", "medium", "medium", "medium", "hard", "hard", "hard", "hard", "hard"];
const La = { skip: 4, hint: 6, poll: 10, fifty: 16, shield: 24 };
const Oa = (e) => e < 5 ? 1 : e < 10 ? 2 : 3;

const u = {
  bg: "#f4ede0", bgWarm: "#f8f1e3", surface: "#fbf6ec", surfaceHigh: "#ffffff",
  surfaceWarm: "#f0e5cf", outline: "#2a1f12", borderLight: "#d6c9b0",
  brand: "#b36d00", brandBright: "#d68618", brandDeep: "#8a5400",
  brandSoft: "#fde9c8", brandSofter: "#faf2dd", terra: "#c64a2e", terraSoft: "#f7d8cc",
  mustard: "#d4a834", mustardSoft: "#f6e8b8", text: "#2a1f12", textDim: "#5a4a35",
  textMuted: "#8a7a60", textOnDark: "#fbf6ec", red: "#9c361e", green: "#3d7a45",
  blue: "#3a5a8c", blueBg: "#dde6f2", cardBack: "#3a2a17"
};

const C = {
  display: "'Archivo Black', 'Helvetica Neue', Impact, sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'IBM Plex Mono', 'Courier New', monospace"
};

const U = {
  sm: `3px 3px 0 ${u.outline}`,
  md: `4px 4px 0 ${u.outline}`,
  lg: `6px 6px 0 ${u.outline}`,
  xl: `8px 8px 0 ${u.outline}`
};

class SfxEngine {
  constructor() { this.ctx = null; this.muted = false; this.master = null; }
  init(t) {
    if (this.ctx) return;
    this.ctx = t;
    this.master = t.createGain();
    this.master.gain.value = 1;
    this.master.connect(t.destination);
  }
  setMuted(t) { this.muted = t; if (this.master) this.master.gain.value = t ? 0 : 1; }
  duck(t = 0.25, n = 200) {
    if (!this.ctx || !this.master) return;
    const r = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(r);
    this.master.gain.setValueAtTime(this.master.gain.value, r);
    this.master.gain.linearRampToValueAtTime(this.muted ? 0 : t, r + n / 1e3);
  }
  unduck(t = 200) {
    if (!this.ctx || !this.master) return;
    const n = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(n);
    this.master.gain.linearRampToValueAtTime(this.muted ? 0 : 1, n + t / 1e3);
  }
  tone(t, n, r = "sine", o = 0.08, i = 0) {
    if (this.muted || !this.ctx) return;
    try {
      const l = this.ctx.currentTime + i;
      const s = this.ctx.createOscillator();
      const a = this.ctx.createGain();
      s.type = r;
      s.frequency.setValueAtTime(t, l);
      a.gain.setValueAtTime(0, l);
      a.gain.linearRampToValueAtTime(o, l + 0.012);
      a.gain.exponentialRampToValueAtTime(1e-4, l + n);
      s.connect(a); a.connect(this.master);
      s.start(l); s.stop(l + n + 0.05);
    } catch {}
  }
  // pitch glide helper for whooshes
  sweep(from, to, dur, type = "sine", vol = 0.05, delay = 0) {
    if (this.muted || !this.ctx) return;
    try {
      const t0 = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(from, t0);
      osc.frequency.exponentialRampToValueAtTime(Math.max(1, to), t0 + dur);
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(vol, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(1e-4, t0 + dur);
      osc.connect(g); g.connect(this.master);
      osc.start(t0); osc.stop(t0 + dur + 0.05);
    } catch {}
  }
  click() { this.tone(720, 0.05, "triangle", 0.045); }
  select() { this.tone(523, 0.12, "sine", 0.06); this.tone(784, 0.18, "sine", 0.05, 0.05); }
  lockIn(t = 1) {
    this.tone(110, 0.35, "triangle", 0.07);
    this.tone(110 * 1.5, 0.8 + (t - 1) * 0.7, "sine", 0.05, 0.1);
    this.tone(110 * 2, 1.2 + (t - 1) * 1.2, "sine", 0.035, 0.2);
  }
  correct(t = 1) {
    [523, 659, 784, 1046].forEach((r, o) => this.tone(r, 0.3 + t * 0.05, "sine", 0.07 + t * 0.005, o * 0.1));
    if (t >= 2) this.tone(1318, 0.55, "sine", 0.05, 0.45);
    if (t >= 3) this.tone(1568, 0.7, "sine", 0.04, 0.55);
  }
  wrong() {
    this.tone(220, 0.3, "triangle", 0.07);
    this.tone(165, 0.45, "triangle", 0.055, 0.18);
    this.tone(110, 0.65, "triangle", 0.04, 0.36);
  }
  reveal() { this.tone(80, 0.15, "triangle", 0.08); this.tone(130, 0.22, "sine", 0.045, 0.04); }
  win() { [523, 659, 784, 1046, 1318, 1568, 2093].forEach((t, n) => this.tone(t, 0.55, "sine", 0.1, n * 0.15)); }
  lifeline() { this.tone(880, 0.12, "sine", 0.05); this.tone(1175, 0.16, "sine", 0.04, 0.07); }
  modalOpen() { this.tone(660, 0.08, "sine", 0.035); }

  // ---- NEW REVEAL / PUZZLE SOUNDS ----
  // Card rotating on its axis: a short airy whoosh pitched up then settling
  cardFlip() {
    this.sweep(320, 620, 0.16, "sine", 0.04);
    this.sweep(180, 90, 0.18, "triangle", 0.025, 0.02);
  }
  // Neutral tick when returning to a card you've already seen (no reward)
  cardRevisit() { this.tone(440, 0.05, "triangle", 0.03); }
  // First-view point earned: bright ascending blip whose base pitch climbs
  // with each segment (0..3) so the four cards form a rising do-re-mi-fa
  cardPointEarn(seg = 0) {
    const scale = [523.25, 587.33, 659.25, 783.99]; // C D E G
    const base = scale[Math.max(0, Math.min(3, seg))];
    this.tone(base, 0.14, "sine", 0.07);
    this.tone(base * 1.5, 0.18, "sine", 0.05, 0.05);
  }
  // The +1 token landing on the puzzle segment: a little "clink" impact,
  // pitch also rises with the segment so building a piece sounds musical
  segmentClink(seg = 0) {
    const scale = [392, 440, 523.25, 587.33];
    const p = scale[Math.max(0, Math.min(3, seg))];
    this.tone(p, 0.08, "triangle", 0.06);
    this.tone(p * 2, 0.06, "sine", 0.03, 0.01);
  }
  // Piece completes (4th segment) + bonus: triumphant little chord flourish
  pieceComplete() {
    [523.25, 659.25, 783.99].forEach((f) => this.tone(f, 0.4, "sine", 0.07));
    this.tone(1046.5, 0.5, "sine", 0.05, 0.08);
    this.tone(1318.5, 0.6, "sine", 0.035, 0.16);
  }
  // Piece flies in and snaps into the mural slot: a solid chunk/lock
  pieceLock() {
    this.tone(160, 0.09, "square", 0.05);
    this.tone(90, 0.14, "triangle", 0.06, 0.02);
    this.tone(320, 0.06, "sine", 0.03, 0.0);
  }
  // Crossed a lifeline price threshold (can now afford one): subtle unlock chime
  lifelineThreshold() {
    this.tone(988, 0.1, "sine", 0.04);
    this.tone(1319, 0.14, "sine", 0.035, 0.06);
    this.tone(1760, 0.18, "sine", 0.025, 0.12);
  }
  // Spending points to buy a lifeline: a "cha-ching" confirmation
  purchase() {
    this.tone(784, 0.1, "square", 0.045);
    this.tone(1047, 0.14, "square", 0.04, 0.05);
    this.tone(1568, 0.22, "sine", 0.035, 0.1);
  }
  // Whole picture finished at Q15: biggest swell in the game
  finalPuzzle() {
    [392, 523.25, 659.25, 783.99, 1046.5, 1318.5, 1568, 2093].forEach((f, i) =>
      this.tone(f, 0.7, "sine", 0.09, i * 0.12));
  }
}

class MusicEngine {
  constructor() {
    this.ctx = null; this.muted = false; this.stage = 0; this.savedStage = 0;
    this.master = null; this.padOscs = null; this.lfo = null; this.scheduler = null;
    this.beat = 0; this.bpm = 70; this.bassStep = 0; this.arpStep = 0; this.noiseBuffer = null;
  }
  init(t) {
    if (this.ctx) return;
    this.ctx = t;
    this.master = t.createGain();
    this.master.gain.value = 0;
    this.master.connect(t.destination);
    try {
      const n = t.sampleRate;
      this.noiseBuffer = t.createBuffer(1, n * 0.5, n);
      const r = this.noiseBuffer.getChannelData(0);
      for (let o = 0; o < r.length; o++) r[o] = Math.random() * 2 - 1;
    } catch {}
  }
  setMuted(t) {
    if (t && !this.muted) { this.savedStage = this.stage; this.muted = t; this.stop(); }
    else if (!t && this.muted) {
      this.muted = t;
      const n = this.savedStage || 0;
      this.savedStage = 0;
      if (n > 0 && this.ctx) { this.start(); this.setStage(n); }
    } else this.muted = t;
  }
  start() {
    if (!this.ctx || this.muted || this.padOscs) return;
    const t = this.ctx.currentTime;
    this.createPad();
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(0, t);
    this.master.gain.linearRampToValueAtTime(0.5, t + 2);
    this.startScheduler();
  }
  createPad() {
    const t = this.ctx, n = t.currentTime;
    const r = t.createGain();
    r.gain.setValueAtTime(0, n);
    r.gain.linearRampToValueAtTime(1, n + 2);
    const o = t.createBiquadFilter();
    o.type = "lowpass"; o.frequency.value = 2400; o.Q.value = 0.6;
    r.connect(o); o.connect(this.master);
    const i = t.createOscillator();
    i.type = "sine"; i.frequency.value = 5.8;
    const l = t.createGain(); l.gain.value = 6;
    i.connect(l); i.start(n); this.lfo = i;
    const s = [{ root: 110, mix: 0.9 }, { root: 130.81, mix: 0.6 }, { root: 164.81, mix: 0.55 }, { root: 196, mix: 0.4 }];
    const a = [{ ratio: 0.5, gain: 0.05 }, { ratio: 1, gain: 0.06 }, { ratio: 1.5, gain: 0.025 }, { ratio: 2, gain: 0.035 }];
    this.padOscs = [];
    s.forEach((d) => {
      a.forEach((g) => {
        const y = t.createOscillator();
        y.type = "sine"; y.frequency.value = d.root * g.ratio;
        const m = t.createGain();
        m.gain.value = g.gain * d.mix * 0.4;
        l.connect(y.detune); y.connect(m); m.connect(r);
        y.start(n); this.padOscs.push(y);
      });
    });
  }
  startScheduler() {
    if (this.scheduler) return;
    this.beat = 0; this.bassStep = 0; this.arpStep = 0;
    const t = () => {
      if (!this.ctx || !this.padOscs) return;
      if (this.beat % 4 === 0 && this.stage >= 1) this.playWalkingBass();
      if (this.stage >= 3 && (this.beat % 16 === 0 || this.beat % 16 === 8)) this.playKick();
      if (this.stage >= 2 && (this.beat % 16 === 4 || this.beat % 16 === 12)) this.playBrushedSnare();
      if (this.stage >= 3 && this.beat % 2 === 0) this.playRide();
      if (this.stage >= 3) this.playArp();
      if (this.stage >= 3 && this.beat === 24) this.playHornStab();
      this.beat = (this.beat + 1) % 32;
    };
    const n = 60 / this.bpm / 4 * 1e3;
    this.scheduler = setInterval(t, n);
  }
  playWalkingBass() {
    if (!this.ctx || this.muted || !this.padOscs) return;
    try {
      const t = [55, 65.4, 82.4, 98, 55, 58.27, 65.4, 73.42];
      const n = t[this.bassStep % t.length]; this.bassStep++;
      const r = this.ctx.currentTime;
      const o = this.ctx.createOscillator();
      o.type = "triangle"; o.frequency.value = n;
      const i = this.ctx.createBiquadFilter();
      i.type = "lowpass"; i.frequency.value = 750;
      const l = this.ctx.createGain();
      l.gain.setValueAtTime(0, r);
      l.gain.linearRampToValueAtTime(0.085, r + 0.008);
      l.gain.exponentialRampToValueAtTime(0.04, r + 0.12);
      l.gain.exponentialRampToValueAtTime(0.001, r + 0.55);
      o.connect(i); i.connect(l); l.connect(this.master);
      o.start(r); o.stop(r + 0.65);
    } catch {}
  }
  playKick() {
    if (!this.ctx || this.muted) return;
    try {
      const t = this.ctx.currentTime;
      const n = this.ctx.createOscillator();
      n.type = "sine";
      n.frequency.setValueAtTime(150, t);
      n.frequency.exponentialRampToValueAtTime(40, t + 0.1);
      const r = this.ctx.createGain();
      r.gain.setValueAtTime(0, t);
      r.gain.linearRampToValueAtTime(0.16, t + 0.005);
      r.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
      n.connect(r); r.connect(this.master);
      n.start(t); n.stop(t + 0.18);
    } catch {}
  }
  playBrushedSnare() {
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    try {
      const t = this.ctx.currentTime;
      const n = this.ctx.createBufferSource();
      n.buffer = this.noiseBuffer;
      const r = this.ctx.createBiquadFilter();
      r.type = "bandpass"; r.frequency.value = 3200; r.Q.value = 0.7;
      const o = this.ctx.createGain();
      o.gain.setValueAtTime(0, t);
      o.gain.linearRampToValueAtTime(0.028, t + 0.005);
      o.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      n.connect(r); r.connect(o); o.connect(this.master);
      n.start(t); n.stop(t + 0.25);
    } catch {}
  }
  playRide() {
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    try {
      const t = this.ctx.currentTime;
      const n = this.ctx.createBufferSource();
      n.buffer = this.noiseBuffer;
      const r = this.ctx.createBiquadFilter();
      r.type = "bandpass"; r.frequency.value = 7800; r.Q.value = 4.5;
      const o = this.ctx.createGain();
      o.gain.setValueAtTime(0, t);
      o.gain.linearRampToValueAtTime(0.014, t + 0.002);
      o.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
      n.connect(r); r.connect(o); o.connect(this.master);
      n.start(t); n.stop(t + 0.1);
    } catch {}
  }
  playArp() {
    if (!this.ctx || this.muted) return;
    try {
      const t = [440, 523.25, 659.25, 880];
      const n = t[this.arpStep % t.length]; this.arpStep++;
      const r = this.ctx.currentTime;
      const o = this.ctx.createOscillator();
      o.type = "triangle"; o.frequency.value = n;
      const i = this.ctx.createBiquadFilter();
      i.type = "highpass"; i.frequency.value = 400;
      const l = this.ctx.createGain();
      l.gain.setValueAtTime(0, r);
      l.gain.linearRampToValueAtTime(0.02, r + 0.003);
      l.gain.exponentialRampToValueAtTime(0.001, r + 0.09);
      o.connect(i); i.connect(l); l.connect(this.master);
      o.start(r); o.stop(r + 0.12);
    } catch {}
  }
  playHornStab() {
    if (!this.ctx || this.muted) return;
    try {
      const t = this.ctx.currentTime;
      const n = [220, 261.63, 329.63];
      const r = this.ctx.createBiquadFilter();
      r.type = "lowpass";
      r.frequency.setValueAtTime(350, t);
      r.frequency.linearRampToValueAtTime(2400, t + 0.05);
      r.frequency.exponentialRampToValueAtTime(900, t + 0.4);
      r.Q.value = 1.5;
      const o = this.ctx.createGain();
      o.gain.setValueAtTime(0, t);
      o.gain.linearRampToValueAtTime(0.04, t + 0.04);
      o.gain.linearRampToValueAtTime(0.028, t + 0.1);
      o.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
      n.forEach((i) => {
        const l = this.ctx.createOscillator();
        l.type = "sawtooth"; l.frequency.value = i;
        l.connect(r); l.start(t); l.stop(t + 0.5);
      });
      r.connect(o); o.connect(this.master);
    } catch {}
  }
  setStage(t) {
    this.stage = t;
    if (!this.ctx) return;
    this.bpm = t === 1 ? 70 : t === 2 ? 90 : t === 3 ? 108 : 70;
    if (this.scheduler) {
      clearInterval(this.scheduler); this.scheduler = null;
      if (this.padOscs) this.startScheduler();
    }
    if (this.master) {
      const n = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(n);
      this.master.gain.linearRampToValueAtTime(this.muted || t === 0 ? 0 : 0.5 + (t - 1) * 0.08, n + 0.7);
    }
  }
  duck(t = 0.2, n = 250) {
    if (!this.ctx || !this.master) return;
    const r = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(r);
    this.master.gain.setValueAtTime(this.master.gain.value, r);
    this.master.gain.linearRampToValueAtTime(this.muted ? 0 : t, r + n / 1e3);
  }
  unduck(t = 400) {
    if (!this.ctx || !this.master) return;
    const n = this.ctx.currentTime;
    const r = this.muted ? 0 : 0.5 + Math.max(0, this.stage - 1) * 0.08;
    this.master.gain.cancelScheduledValues(n);
    this.master.gain.linearRampToValueAtTime(r, n + t / 1e3);
  }
  stop() {
    if (this.scheduler) { clearInterval(this.scheduler); this.scheduler = null; }
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      if (this.master) {
        this.master.gain.cancelScheduledValues(t);
        this.master.gain.linearRampToValueAtTime(0, t + 0.4);
      }
      if (this.padOscs) {
        this.padOscs.forEach((n) => { try { n.stop(t + 0.5); } catch {} });
        this.padOscs = null;
      }
      if (this.lfo) { try { this.lfo.stop(t + 0.5); } catch {} this.lfo = null; }
    } catch {}
    this.stage = 0;
  }
}

const Po = (e) => "$" + e.toLocaleString("en-US");
const bp = (e) => e >= 1e6 ? "$" + e / 1e6 + "M" : e >= 1e3 ? "$" + e / 1e3 + "K" : "$" + e;
const Yt = (e) => {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return t;
};
const Hp = () => {
  const e = { easy: Yt(R.questions.easy), medium: Yt(R.questions.medium), hard: Yt(R.questions.hard), expert: Yt(R.questions.expert) };
  const t = { easy: 0, medium: 0, hard: 0, expert: 0 };
  return Yc.map((n) => {
    const r = e[n][t[n]];
    t[n] += 1;
    return Qc({ ...r, difficulty: n });
  });
};
const Qc = (e) => {
  const t = Yt([0, 1, 2, 3]);
  const n = t.map((i) => e.options[i]);
  const r = t.indexOf(e.correct);
  const o = e.optionExplanations ? t.map((i) => e.optionExplanations[i]) : null;
  return { ...e, options: n, correct: r, optionExplanations: o };
};
const Up = (e) => {
  const t = new Set(e.map((i) => i.q));
  const n = [], r = [];
  ["easy", "medium", "hard", "expert"].forEach((i) => {
    (R.questions[i] || []).forEach((l) => {
      const s = { ...l, difficulty: i };
      if (t.has(l.q)) r.push(s); else n.push(s);
    });
  });
  const o = n.length > 0 ? n : r;
  return Yt(o.map((i) => Qc(i)));
};
const Vp = (e, t = [], n = "medium") => {
  // e = correct index, t = removed indices, n = difficulty
  // Build a plausible audience poll where the correct answer keeps the plurality.
  const base = { easy: 72, medium: 58, hard: 46, expert: 38 }[n] || 50;
  const result = [0, 0, 0, 0];
  const wrong = [0, 1, 2, 3].filter((v) => v !== e && !t.includes(v));

  if (wrong.length === 0) { result[e] = 100; t.forEach((v) => (result[v] = 0)); return result; }

  // correct answer's share; ensure it stays above an even split of the wrong pool
  let correctShare = base;
  const remaining = 100 - correctShare;
  // give each wrong answer a random weight, then normalize to the remaining pool
  const weights = wrong.map(() => 0.35 + Math.random());
  const wsum = weights.reduce((a, b) => a + b, 0);
  let assigned = 0;
  wrong.forEach((idx, k) => {
    let share = Math.round((weights[k] / wsum) * remaining);
    result[idx] = share;
    assigned += share;
  });
  // reconcile rounding into the correct answer so the total is exactly 100
  correctShare = 100 - assigned;
  result[e] = correctShare;

  // guarantee the correct answer is a strict plurality: if any wrong share ties or
  // exceeds it, shave the biggest offender(s) down and give it back to correct
  let guard = 0;
  while (guard++ < 8) {
    const maxWrong = Math.max(...wrong.map((i) => result[i]));
    if (result[e] > maxWrong) break;
    const bigIdx = wrong.find((i) => result[i] === maxWrong);
    const take = (maxWrong - result[e]) + 1 + Math.floor(Math.random() * 2);
    const shave = Math.min(take, result[bigIdx]);
    result[bigIdx] -= shave;
    result[e] += shave;
  }
  t.forEach((v) => (result[v] = 0));
  return result;
};

const STYLE_ID = "the-stand-styles";
const FONT_ID = "the-stand-fonts";
const CSS_TEXT = `
  @keyframes ts-fade-in { from { opacity:0; transform:translateY(8px);} to {opacity:1;transform:translateY(0);} }
  @keyframes ts-slide-up { from {opacity:0;transform:translateY(20px);} to {opacity:1;transform:translateY(0);} }
  @keyframes ts-pulse-next {
    0%,100% { transform:translate(0,0); box-shadow:${U.md}; }
    50% { transform:translate(-2px,-2px); box-shadow:6px 6px 0 ${u.outline}; }
  }
  @keyframes ts-blink { 0%,49%{opacity:1;} 50%,100%{opacity:0;} }
  @keyframes ts-tension-1 { 0%,100%{background:${u.brandSoft};} 50%{background:${u.brandSofter};} }
  @keyframes ts-tension-2 { 0%,100%{background:${u.brandSoft};transform:scale(1);} 50%{background:#f8d9a8;transform:scale(1.005);} }
  @keyframes ts-tension-3 { 0%,100%{background:${u.brandSoft};transform:scale(1);} 40%{background:#f5c97a;transform:scale(1.012);} 80%{background:#fde9c8;transform:scale(1);} }
  @keyframes ts-correct-pop { 0%{transform:scale(1);} 25%{transform:scale(1.04);} 60%{transform:scale(0.99);} 100%{transform:scale(1);} }
  @keyframes ts-wrong-shake-card { 0%,100%{transform:translateX(0);} 20%{transform:translateX(-7px);} 40%{transform:translateX(7px);} 60%{transform:translateX(-4px);} 80%{transform:translateX(4px);} }
  @keyframes ts-screen-shake { 0%,100%{transform:translate(0,0);} 15%{transform:translate(-3px,2px);} 30%{transform:translate(3px,-2px);} 45%{transform:translate(-2px,-3px);} 60%{transform:translate(2px,3px);} 75%{transform:translate(-2px,1px);} 90%{transform:translate(1px,-1px);} }
  @keyframes ts-confetti-fall { 0%{transform:translateY(-20vh) rotate(0deg);opacity:1;} 100%{transform:translateY(110vh) rotate(720deg);opacity:0;} }
  @keyframes ts-ladder-light { 0%,100%{background:${u.brand};} 50%{background:${u.brandBright};} }
  @keyframes ts-flash-warm { 0%{opacity:0;} 25%{opacity:0.55;} 100%{opacity:0;} }
  @keyframes ts-flash-red { 0%{opacity:0;} 25%{opacity:0.4;} 100%{opacity:0;} }
  @keyframes ts-dot-fill { 0%{transform:scale(0);} 70%{transform:scale(1.35);} 100%{transform:scale(1);} }
  @keyframes ts-streak-pop { 0%{transform:scale(1);} 30%{transform:scale(1.28);color:${u.terra};} 100%{transform:scale(1);} }
  @keyframes ts-modal-in { from {opacity:0;transform:scale(0.94) translateY(6px);} to {opacity:1;transform:scale(1) translateY(0);} }
  @keyframes ts-backdrop-in { from {opacity:0;} to {opacity:1;} }

  /* ---- comic reveal / flip / puzzle ---- */
  @keyframes ts-card-flip-in {
    0% { transform: rotateY(-180deg); }
    100% { transform: rotateY(0deg); }
  }
  @keyframes ts-card-slide-left { 0% { opacity:0; transform: translateX(40px); } 100% { opacity:1; transform: translateX(0); } }
  @keyframes ts-card-slide-right { 0% { opacity:0; transform: translateX(-40px); } 100% { opacity:1; transform: translateX(0); } }
  @keyframes ts-token-pop { 0% { transform: translate(-50%,-50%) scale(0.3); opacity:0; } 30% { transform: translate(-50%,-50%) scale(1.3); opacity:1; } 100% { transform: translate(-50%,-50%) scale(1); opacity:1; } }
  @keyframes ts-segment-impact { 0% { transform: scale(0.4); } 55% { transform: scale(1.35); } 100% { transform: scale(1); } }
  @keyframes ts-piece-celebrate {
    0% { transform: scale(1) rotate(0deg); box-shadow: ${U.sm}; }
    30% { transform: scale(1.22) rotate(-4deg); box-shadow: 0 0 22px ${u.brand}; }
    60% { transform: scale(1.12) rotate(3deg); box-shadow: 0 0 30px ${u.brandBright}; }
    100% { transform: scale(1) rotate(0deg); box-shadow: 0 0 12px ${u.brand}; }
  }
  @keyframes ts-pow-burst {
    0% { transform: scale(0.2) rotate(-12deg); opacity: 0; }
    45% { transform: scale(1.18) rotate(3deg); opacity: 1; }
    70% { transform: scale(0.94) rotate(-2deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
  @keyframes ts-bubble-in { 0% { opacity:0; transform: translateY(8px) scale(0.9);} 100%{opacity:1;transform:translateY(0) scale(1);} }
  @keyframes ts-phrase-in { 0% { opacity:0; transform: scale(0.7) rotate(-3deg);} 55%{transform:scale(1.06) rotate(1deg);} 100%{opacity:1;transform:scale(1) rotate(0deg);} }
  @keyframes ts-fly-token {
    0% { transform: translate(var(--fx0), var(--fy0)) scale(1); opacity:1; }
    75% { opacity:1; }
    100% { transform: translate(var(--fx1), var(--fy1)) scale(0.5); opacity:0; }
  }
  @keyframes ts-mural-pop { 0%{transform:scale(0.3);} 60%{transform:scale(1.4);} 100%{transform:scale(1);} }

  /* verdict screen: the big stamp lands hard */
  @keyframes ts-verdict-stamp {
    0% { transform: scale(2.6) rotate(-14deg); opacity: 0; }
    40% { transform: scale(0.86) rotate(-3deg); opacity: 1; }
    58% { transform: scale(1.08) rotate(-2deg); }
    100% { transform: scale(1) rotate(-2deg); opacity: 1; }
  }
  @keyframes ts-verdict-ring {
    0% { transform: scale(0.2); opacity: 0.9; }
    100% { transform: scale(2.4); opacity: 0; }
  }
  @keyframes ts-verdict-detail-in { 0% { opacity:0; transform: translateY(14px);} 100%{opacity:1;transform:translateY(0);} }

  /* the big flying token that arcs from the card up to the puzzle piece */
  @keyframes ts-bigtoken {
    0%   { offset-distance: 0%;   transform: scale(0.6); opacity: 0; }
    12%  { opacity: 1; transform: scale(1.25); }
    82%  { opacity: 1; transform: scale(1.1); }
    100% { offset-distance: 100%; transform: scale(0.4); opacity: 0; }
  }
  /* fallback arc for browsers without offset-path: straight rise + fade with a pop */
  @keyframes ts-bigtoken-fallback {
    0%   { transform: translate(-50%, 20px) scale(0.6); opacity: 0; }
    15%  { transform: translate(-50%, 0px) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%, -120px) scale(0.5); opacity: 0; }
  }
  /* heavier segment landing */
  @keyframes ts-segment-slam {
    0% { transform: scale(0); }
    40% { transform: scale(1.6); }
    62% { transform: scale(0.82); }
    100% { transform: scale(1); }
  }
  @keyframes ts-piece-shockwave {
    0% { transform: scale(0.6); opacity: 0.7; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  /* end-of-game mural assembly: each tile drops into place */
  @keyframes ts-tile-drop {
    0% { transform: translateY(-40px) scale(0.5) rotate(-8deg); opacity: 0; }
    60% { transform: translateY(4px) scale(1.08) rotate(2deg); opacity: 1; }
    100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
  }
  @keyframes ts-mural-finish-glow {
    0%,100% { box-shadow: 0 0 0 ${u.brand}; }
    50% { box-shadow: 0 0 40px ${u.brandBright}; }
  }
  /* dwell-timer sweep on the Next affordance */
  @keyframes ts-dwell-fill { 0% { width: 0%; } 100% { width: 100%; } }

  /* big +1 POINT burst when a card's read timer completes */
  @keyframes ts-point-burst {
    0%   { transform: translate(-50%, -50%) scale(0.3) rotate(-8deg); opacity: 0; }
    25%  { transform: translate(-50%, -50%) scale(1.25) rotate(3deg); opacity: 1; }
    45%  { transform: translate(-50%, -50%) scale(1.0) rotate(-1deg); opacity: 1; }
    75%  { transform: translate(-50%, -85%) scale(1.0); opacity: 1; }
    100% { transform: translate(-50%, -150%) scale(0.85); opacity: 0; }
  }
  @keyframes ts-pip-pop {
    0% { transform: scale(0.2); }
    55% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }
  @keyframes ts-points-banner-flash {
    0%,100% { background: ${u.brandSofter}; }
    50% { background: ${u.brandSoft}; }
  }

  /* Halftone dot texture used behind comic panels */
  .ts-halftone {
    background-image: radial-gradient(${u.borderLight} 1.4px, transparent 1.5px);
    background-size: 10px 10px;
  }

  /* ---- mobile ( <600px ) ---- */
  @media (max-width: 600px) {
    .ts-game-screen { padding:8px 10px 10px !important; gap:8px !important; height:100vh !important; height:100dvh !important; min-height:100vh !important; min-height:100dvh !important; max-height:100vh !important; max-height:100dvh !important; box-sizing:border-box !important; overflow:hidden !important; }
    .ts-game-main { gap:8px !important; flex:1 !important; min-height:0 !important; }
    .ts-answer-grid { grid-template-columns:1fr !important; gap:8px !important; }
    .ts-answer-btn { min-height:50px !important; padding:11px 14px !important; font-size:14.5px !important; }
    .ts-answer-btn-letter { width:30px !important; height:30px !important; min-width:30px !important; font-size:15px !important; }
    .ts-question-card { padding:16px 18px !important; }
    .ts-question-card p { font-size:16px !important; }
    .ts-hud { padding:8px 14px !important; min-width:0 !important; }
    .ts-hud-worth { font-size:22px !important; }
    .ts-progress-dots { gap:3px !important; }
    .ts-q-header { font-size:18px !important; }
    .ts-q-header-total { font-size:12px !important; }
    .ts-sound-btn { padding:6px 10px !important; font-size:10px !important; }
    .ts-walk-card { padding:26px 22px 24px !important; }
    .ts-walk-title { font-size:34px !important; }
    .ts-walk-answer-mini { grid-template-columns:1fr !important; max-width:220px !important; }
    .ts-walk-ladder-mini > div { min-width:160px !important; padding:7px 14px !important; gap:10px !important; }
    .ts-modal-card { padding:22px 22px 20px !important; max-width:100% !important; }
    .ts-modal-card h3 { font-size:22px !important; }
    .ts-end-screen { padding:40px 18px 60px !important; }
    .ts-end-headline { font-size:64px !important; }
    .ts-end-prize { padding:22px 20px !important; min-width:0 !important; width:100% !important; max-width:300px !important; box-sizing:border-box !important; }
    .ts-end-prize-amount { font-size:56px !important; }
    .ts-end-actions { flex-direction:column !important; align-items:stretch !important; width:100% !important; max-width:280px !important; }
    .ts-end-actions button { width:100% !important; }
    .ts-missed-card { padding:20px 20px !important; }
    .ts-start-screen { padding:40px 20px !important; }
    .ts-start-title { font-size:56px !important; text-shadow:4px 4px 0 ${u.brand} !important; }
    .ts-lifelines-row { gap:6px !important; flex-wrap:wrap !important; }
    .ts-lifeline-btn { min-width:64px !important; padding:8px 12px !important; font-size:14px !important; }
    .ts-action-bar { gap:10px !important; }
    .ts-action-bar-right { width:100% !important; justify-content:stretch !important; }
    .ts-action-bar-right button { flex:1 !important; width:100% !important; }
    .ts-top-bar { gap:8px !important; }
    /* comic reveal mobile */
    .ts-reveal-screen { padding:10px 12px 10px !important; height:100vh !important; height:100dvh !important; }
    .ts-comic-card { min-height:0 !important; }
    .ts-comic-header { font-size:26px !important; padding:12px 16px !important; }
    .ts-comic-body { padding:16px 16px !important; font-size:14px !important; }
    .ts-scenario-panels { grid-template-columns:1fr !important; }
    .ts-scenario-outcomes { grid-template-columns:1fr !important; }
    .ts-phrase-quote { font-size:26px !important; }
    .ts-pow { font-size:44px !important; }
  }
  @media (max-width: 380px) {
    .ts-start-title { font-size:48px !important; }
    .ts-end-headline { font-size:54px !important; }
    .ts-end-prize-amount { font-size:46px !important; }
    .ts-walk-title { font-size:30px !important; }
    .ts-lifeline-btn { min-width:58px !important; padding:7px 9px !important; font-size:13px !important; }
    .ts-answer-btn { min-height:46px !important; padding:10px 12px !important; }
    .ts-question-card { padding:14px 16px !important; }
    .ts-comic-header { font-size:22px !important; }
    .ts-phrase-quote { font-size:22px !important; }
  }
  @media (max-width: 920px) {
    .ts-ladder { display:none !important; }
    .ts-game-layout { flex-direction:column !important; }
  }
`;

const { useState, useEffect, useRef, useMemo } = I;

function App() {
  const [phase, setPhase] = useState("start"); // start|walkthrough|playing|locking|revealing|gameover|won
  const [walkStep, setWalkStep] = useState(0);
  const [deck, setDeck] = useState([]);
  const [level, setLevel] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [revealCorrect, setRevealCorrect] = useState(false);
  const [revealWrong, setRevealWrong] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [streak, setStreak] = useState(0);
  const [lifelines, setLifelines] = useState({ fifty: true, poll: true, hint: true, shield: false, skip: false });
  const [shieldArmed, setShieldArmed] = useState(false);
  const [usage, setUsage] = useState({ fifty: 0, poll: 0, hint: 0, shield: 0, skip: 0 });
  const [pointsSpent, setPointsSpent] = useState(0);
  const [removedAnswers, setRemovedAnswers] = useState([]);
  const [juryResults, setJuryResults] = useState(null);
  const [hintShown, setHintShown] = useState(false);
  const [pendingLifeline, setPendingLifeline] = useState(null);
  const [shopOpen, setShopOpen] = useState(false);
  const [homeConfirm, setHomeConfirm] = useState(false);
  const [skipConfirm, setSkipConfirm] = useState(false);
  const [skipConfirmed, setSkipConfirmed] = useState(false);
  const [points, setPoints] = useState(0);
  const [isEndless, setIsEndless] = useState(false);
  const [finalPrize, setFinalPrize] = useState(0);
  const [bestRun, setBestRun] = useState(0);
  const [muted, setMuted] = useState(false);
  const [screenFlash, setScreenFlash] = useState(null);
  const [screenShake, setScreenShake] = useState(false);

  const sfx = useRef(null);
  const music = useRef(null);
  const audioCtx = useRef(null);
  const prevAffordable = useRef(false);

  if (sfx.current === null) sfx.current = new SfxEngine();
  if (music.current === null) music.current = new MusicEngine();

  // inject fonts + styles once
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!document.getElementById(FONT_ID)) {
      const L = document.createElement("link");
      L.id = FONT_ID; L.rel = "stylesheet";
      L.href = "https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Caveat:wght@600;700&display=swap";
      document.head.appendChild(L);
    }
    if (!document.getElementById(STYLE_ID)) {
      const L = document.createElement("style");
      L.id = STYLE_ID; L.textContent = CSS_TEXT;
      document.head.appendChild(L);
    }
  }, []);

  useEffect(() => {
    sfx.current.setMuted(muted);
    music.current.setMuted(muted);
  }, [muted]);

  // threshold chime: fire when points cross into "can afford cheapest lifeline"
  useEffect(() => {
    const cheapest = Math.min(La.hint, La.poll, La.fifty);
    const canAfford = points >= cheapest;
    if (canAfford && !prevAffordable.current && phase !== "start" && points > 0) {
      sfx.current.lifelineThreshold();
    }
    prevAffordable.current = canAfford;
  }, [points, phase]);

  const initAudio = () => {
    if (audioCtx.current === null) {
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) audioCtx.current = new AC();
      } catch {}
    }
    if (audioCtx.current) {
      sfx.current.init(audioCtx.current);
      music.current.init(audioCtx.current);
    }
  };

  const resetState = () => {
    setDeck([]); setLevel(0); setSelected(null); setLocked(false);
    setRevealCorrect(false); setRevealWrong(false); setShowFloating(false);
    setStreak(0); setLifelines({ fifty: true, poll: true, hint: true, shield: false, skip: false });
    setShieldArmed(false); setUsage({ fifty: 0, poll: 0, hint: 0, shield: 0, skip: 0 }); setPointsSpent(0);
    setRemovedAnswers([]); setJuryResults(null); setHintShown(false);
    setPendingLifeline(null); setShopOpen(false); setHomeConfirm(false); setSkipConfirm(false);
    setPoints(0); setIsEndless(false); setFinalPrize(0);
  };

  const goWalkthrough = () => { initAudio(); sfx.current.click(); setWalkStep(0); setPhase("walkthrough"); };
  const playAgain = () => { initAudio(); sfx.current.click(); startGame(); };
  const startGame = () => {
    resetState();
    setDeck(Hp());
    setPhase("playing");
    setTimeout(() => { music.current.start(); music.current.setStage(1); }, 200);
  };

  const currentQ = deck[level];
  const rung = he[level] || { level: level + 1, prize: he[he.length - 1].prize };
  const difficulty = (currentQ && currentQ.difficulty) || Yc[level] || "hard";
  const stage = isEndless ? 3 : Oa(level);

  const enterEndless = () => {
    sfx.current.click();
    const extra = Up(deck);
    setFinalPrize(he[he.length - 1].prize);
    setBestRun((b) => Math.max(b, he[he.length - 1].prize));
    setDeck([...deck, ...extra]);
    setIsEndless(true);
    setLevel(15);
    setSelected(null); setLocked(false); setRevealCorrect(false); setRevealWrong(false);
    setShowFloating(false); setRemovedAnswers([]); setJuryResults(null); setHintShown(false);
    setPhase("playing");
  };

  const onSelect = (idx) => {
    if (phase !== "playing") return;
    if (removedAnswers.includes(idx)) return;
    sfx.current.select();
    setSelected(idx);
  };

  const onLockIn = () => {
    if (selected === null) return;
    const s = stage;
    sfx.current.lockIn(s);
    sfx.current.duck(0.4, 200);
    music.current.duck(s === 1 ? 0.18 : s === 2 ? 0.3 : 0.4, 200);
    setLocked(true);
    setPhase("locking");
    setTimeout(() => {
      sfx.current.unduck(150);
      sfx.current.reveal();
      if (selected === currentQ.correct) {
        setRevealCorrect(true); setShowFloating(true);
        setStreak((v) => v + 1);
        setScreenFlash("warm");
        setTimeout(() => setScreenFlash(null), 600);
        setTimeout(() => sfx.current.correct(s), 160);
        setPhase("revealing");
        music.current.unduck(800);
      } else if (shieldArmed) {
        // shield takes the hit: cross off this wrong choice, let them pick again
        setShieldArmed(false);
        setRemovedAnswers((prev) => prev.includes(selected) ? prev : [...prev, selected]);
        setSelected(null);
        setLocked(false);
        setScreenFlash("warm");
        setTimeout(() => setScreenFlash(null), 600);
        sfx.current.lifeline();
        setTimeout(() => sfx.current.select(), 180);
        setPhase("playing");
        music.current.unduck(600);
      } else {
        setRevealWrong(true);
        setScreenFlash("red");
        setScreenShake(true);
        setTimeout(() => setScreenFlash(null), 600);
        setTimeout(() => setScreenShake(false), 500);
        setTimeout(() => sfx.current.wrong(), 150);
        setFinalPrize(0);
        setPhase("revealing");
        music.current.duck(0.12, 400);
      }
    }, s === 1 ? 1500 : s === 2 ? 3000 : 5000);
  };

  const advance = () => {
    sfx.current.click();
    if (revealWrong) { music.current.stop(); setPhase("gameover"); return; }
    if (!isEndless && level === he.length - 1) {
      setFinalPrize(he[level].prize);
      setBestRun((v) => Math.max(v, he[level].prize));
      setPhase("winbig");
      music.current.duck(0.12, 400);
      return;
    }
    const next = level + 1;
    if (isEndless && next >= deck.length) {
      setPhase("won");
      setTimeout(() => sfx.current.win(), 200);
      setTimeout(() => music.current.stop(), 200);
      return;
    }
    const nextStage = isEndless ? 3 : Oa(next);
    setLevel(next);
    setSelected(null); setLocked(false); setRevealCorrect(false); setRevealWrong(false);
    setShowFloating(false); setRemovedAnswers([]); setJuryResults(null); setHintShown(false);
    if (nextStage !== stage) music.current.setStage(nextStage);
    setPhase("playing");
  };

  const openShop = () => { if (phase !== "playing") return; sfx.current.modalOpen(); setShopOpen(true); };
  const closeShop = () => { sfx.current.click(); setShopOpen(false); };
  const requestLifeline = (k) => { if (phase !== "playing") return; setShopOpen(false); sfx.current.modalOpen(); setPendingLifeline(k); };
  const cancelLifeline = () => { sfx.current.click(); setPendingLifeline(null); };

  // swap the current question for another of the same difficulty not in this run's deck.
  // returns true if a swap happened. with a thin bank this can be false; guarded in confirmLifeline.
  const skipQuestion = () => {
    const diff = (currentQ && currentQ.difficulty) || Yc[level] || "hard";
    const seenQs = new Set(deck.map((q) => q.q));
    const poolRaw = (R.questions[diff] || []).filter((q) => !seenQs.has(q.q));
    if (poolRaw.length === 0) return false;
    const picked = Qc({ ...Yt(poolRaw)[0], difficulty: diff });
    setDeck((prev) => { const copy = prev.slice(); copy[level] = picked; return copy; });
    setSelected(null); setRemovedAnswers([]); setJuryResults(null); setHintShown(false);
    return true;
  };
  // is a same-tier swap currently available? (used to avoid charging skip for a no-op)
  const canSkipNow = () => {
    const diff = (currentQ && currentQ.difficulty) || Yc[level] || "hard";
    const seenQs = new Set(deck.map((q) => q.q));
    return (R.questions[diff] || []).some((q) => !seenQs.has(q.q));
  };

  const applyLifeline = (k) => {
    if (k === "fifty") {
      sfx.current.lifeline();
      const wrong = [0, 1, 2, 3].filter((x) => x !== currentQ.correct);
      const toRemove = Yt(wrong).slice(0, 2);
      setRemovedAnswers(toRemove);
      if (selected !== null && toRemove.includes(selected)) setSelected(null);
    } else if (k === "poll") {
      sfx.current.lifeline();
      setJuryResults(Vp(currentQ.correct, removedAnswers, difficulty));
    } else if (k === "hint") {
      sfx.current.lifeline();
      setHintShown(true);
    } else if (k === "shield") {
      sfx.current.lifeline();
      setShieldArmed(true);
    } else if (k === "skip") {
      sfx.current.lifeline();
      skipQuestion();
    }
  };

  const confirmLifeline = () => {
    const k = pendingLifeline;
    setPendingLifeline(null);
    if (!k) return;
    // skip with nothing to swap to: don't charge, don't consume (thin-bank safety)
    if (k === "skip" && !canSkipNow()) { sfx.current.click(); return; }
    const bumpUsage = () => setUsage((s) => ({ ...s, [k]: s[k] + 1 }));
    if (lifelines[k]) {
      // free use of a starting lifeline (only fifty/poll/hint start available)
      applyLifeline(k);
      bumpUsage();
      setLifelines((s) => ({ ...s, [k]: false }));
    } else {
      const price = La[k];
      if (points >= price) {
        sfx.current.purchase();
        setPoints((p) => p - price);
        setPointsSpent((p) => p + price);
        applyLifeline(k);
        bumpUsage();
      }
    }
  };

  // ---- points earned from reading review cards (one per card, max 3 per question) ----
  const earnCardPoint = (seg) => {
    setPoints((p) => p + 1);
    sfx.current.cardPointEarn(seg);
  };

  const openSkipConfirm = () => {
    if (skipConfirmed) { doSkip(); return; }
    sfx.current.modalOpen();
    setSkipConfirm(true);
  };
  const cancelSkip = () => { sfx.current.click(); setSkipConfirm(false); };
  const doSkip = () => { sfx.current.click(); setSkipConfirm(false); setSkipConfirmed(true); advance(); };

  const askHome = () => {
    if (phase === "start" || phase === "gameover" || phase === "won" || phase === "winbig") return;
    sfx.current.modalOpen();
    setHomeConfirm(true);
  };
  const cancelHome = () => { sfx.current.click(); setHomeConfirm(false); };
  const confirmHome = () => { sfx.current.click(); setHomeConfirm(false); music.current.stop(); resetState(); setPhase("start"); };

  // after the big win celebration: take the money (end) or keep going (bonus round)
  const winTakeMoney = () => { sfx.current.click(); music.current.stop(); setPhase("won"); };
  const winKeepGoing = () => { sfx.current.click(); enterEndless(); };

  const walkNext = () => { sfx.current.click(); if (walkStep < R.walkthrough.length - 1) setWalkStep(walkStep + 1); else startGame(); };
  const walkSkip = () => { sfx.current.click(); startGame(); };

  if (phase === "start")
    return c.jsx(Shell, { muted, setMuted, children: c.jsx(StartScreen, { onPlay: goWalkthrough, bestRun }) });

  if (phase === "walkthrough")
    return c.jsx(Shell, { muted, setMuted, children: c.jsx(WalkScreen, { step: walkStep, total: R.walkthrough.length, screen: R.walkthrough[walkStep], onNext: walkNext, onSkip: walkSkip, isLast: walkStep === R.walkthrough.length - 1 }) });

  if (phase === "winbig")
    return c.jsx(Shell, { muted, setMuted, hideSoundButton: true, children: c.jsx(WinBigScreen, {
      prize: he[he.length - 1].prize, usage, pointsSpent, pointsLeft: points,
      sfx: sfx.current, onTakeMoney: winTakeMoney, onKeepGoing: winKeepGoing
    }) });

  if (phase === "gameover" || phase === "won") {
    const completedIdx = phase === "won" ? level : level - 1;
    return c.jsx(Shell, { muted, setMuted, children: c.jsx(EndScreen, {
      phase, missedAtLevel: phase === "gameover" ? level : null, finalPrize, bestRun, streak,
      isEndless, completedIdx, missedQuestion: phase === "gameover" ? currentQ : null,
      onPlayAgain: playAgain, onHome: () => { resetState(); setPhase("start"); }
    }) });
  }

  if (phase === "revealing") {
    return c.jsxs(Shell, { muted, setMuted, screenFlash, screenShake, hideSoundButton: true, children: [
      c.jsx(RevealScreen, {
        question: currentQ, level, isEndless, streak, rung,
        revealCorrect, selectedIdx: selected, muted, setMuted, points,
        onNext: advance, onEnterEndless: enterEndless, onHome: askHome,
        onEarnCardPoint: (seg) => earnCardPoint(seg),
        onFlipSound: () => sfx.current.cardFlip(),
        onRevisitSound: () => sfx.current.cardRevisit(),
        onSkipReview: openSkipConfirm
      }),
      homeConfirm && c.jsx(ConfirmModal, { title: R.homeConfirm.title, body: R.homeConfirm.body, primaryLabel: R.homeConfirm.leaveLabel, secondaryLabel: R.homeConfirm.stayLabel, primaryVariant: "danger", onPrimary: confirmHome, onSecondary: cancelHome }),
      skipConfirm && c.jsx(ConfirmModal, { title: "Skip the review?", body: "You'll miss the points from reading these cards.", primaryLabel: "Skip anyway", secondaryLabel: "Keep learning", primaryVariant: "danger", onPrimary: doSkip, onSecondary: cancelSkip })
    ] });
  }

  // playing or locking
  return c.jsxs(Shell, { muted, setMuted, screenFlash, screenShake, hideSoundButton: true, children: [
    c.jsx(QuestionScreen, {
      question: currentQ, level, rung, difficulty, stage, streak, selectedIdx: selected,
      locked, revealCorrect, revealWrong, showFloating, phase, removedAnswers, juryResults,
      hintShown, lifelines, muted, setMuted, isEndless, points, shieldArmed,
      onSelect, onLockIn, onNext: advance, onHome: askHome, onRequestLifeline: requestLifeline,
      onOpenShop: openShop, onEnterEndless: enterEndless
    }),
    shopOpen && c.jsx(ShopPanel, {
      lifelines, points, prices: La, shieldArmed,
      onPick: requestLifeline, onClose: closeShop
    }),
    pendingLifeline && c.jsx(LifelineModal, {
      lifelineKey: pendingLifeline,
      remainingAfter: Object.values(lifelines).filter(Boolean).length - 1,
      available: lifelines[pendingLifeline], points, price: La[pendingLifeline],
      onConfirm: confirmLifeline, onCancel: cancelLifeline
    }),
    homeConfirm && c.jsx(ConfirmModal, { title: R.homeConfirm.title, body: R.homeConfirm.body, primaryLabel: R.homeConfirm.leaveLabel, secondaryLabel: R.homeConfirm.stayLabel, primaryVariant: "accent", onPrimary: confirmHome, onSecondary: cancelHome })
  ] });
}

function Shell({ children, muted, setMuted, screenFlash, screenShake, hideSoundButton }) {
  return c.jsxs("div", {
    style: { fontFamily: C.body, minHeight: "100vh", width: "100%", background: `radial-gradient(ellipse at 50% -10%, ${u.bgWarm} 0%, ${u.bg} 70%)`, color: u.text, position: "relative", overflow: "hidden", fontSize: 16 },
    children: [
      c.jsx("div", { "aria-hidden": true, style: { position: "absolute", top: "60%", left: "-10%", width: "40%", height: "40%", background: `radial-gradient(ellipse, ${u.brandSofter} 0%, transparent 70%)`, filter: "blur(60px)", pointerEvents: "none" } }),
      c.jsx("div", { "aria-hidden": true, style: { position: "absolute", top: "50%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(ellipse, #f7e0d8 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" } }),
      screenFlash && c.jsx("div", { "aria-hidden": true, style: { position: "fixed", inset: 0, background: screenFlash === "warm" ? "#fde9c8" : "#f7d8cc", opacity: 0, pointerEvents: "none", zIndex: 100, animation: `${screenFlash === "warm" ? "ts-flash-warm" : "ts-flash-red"} 0.6s ease-out forwards` } }),
      !hideSoundButton && c.jsx("button", {
        onClick: () => setMuted((m) => !m), "aria-label": muted ? "Unmute sound" : "Mute sound",
        style: { position: "absolute", top: 18, right: 18, zIndex: 60, background: muted ? "transparent" : u.surface, border: `2px solid ${u.outline}`, color: muted ? u.textMuted : u.text, padding: "8px 14px", borderRadius: 6, cursor: "pointer", fontFamily: C.mono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700, boxShadow: muted ? "none" : U.sm },
        children: muted ? "\u266A OFF" : "\u266A ON"
      }),
      c.jsx("div", { style: { position: "relative", zIndex: 1, animation: screenShake ? "ts-screen-shake 0.5s" : "none" }, children })
    ]
  });
}

function Button({ onClick, children, variant = "primary", size = "md", disabled, style, ...rest }) {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);
  const pal = {
    primary: { bg: u.brand, color: u.textOnDark, border: u.outline },
    secondary: { bg: u.surface, color: u.text, border: u.outline },
    accent: { bg: u.terra, color: u.textOnDark, border: u.outline },
    danger: { bg: u.red, color: u.textOnDark, border: u.outline },
    ghost: { bg: "transparent", color: u.text, border: u.outline }
  }[variant] || { bg: u.brand, color: u.textOnDark, border: u.outline };
  const sz = {
    sm: { padding: "8px 14px", fontSize: 13, shadow: U.sm, shadowHover: "2px 2px 0 " + u.outline },
    md: { padding: "12px 24px", fontSize: 16, shadow: U.md, shadowHover: "3px 3px 0 " + u.outline },
    lg: { padding: "18px 50px", fontSize: 30, shadow: U.xl, shadowHover: "5px 5px 0 " + u.outline }
  }[size];
  let shadow = sz.shadow, transform = "translate(0, 0)";
  if (disabled) { shadow = "none"; transform = "translate(0, 0)"; }
  else if (pressed) { shadow = "none"; transform = `translate(${size === "lg" ? "8px" : size === "md" ? "4px" : "3px"}, ${size === "lg" ? "8px" : size === "md" ? "4px" : "3px"})`; }
  else if (hover) { shadow = sz.shadowHover; transform = `translate(${size === "lg" ? "3px" : "1px"}, ${size === "lg" ? "3px" : "1px"})`; }
  return c.jsx("button", {
    onClick, disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPressed(false); },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: { fontFamily: C.display, fontSize: sz.fontSize, letterSpacing: size === "lg" ? 3 : 1.5, padding: sz.padding, background: disabled ? u.surfaceWarm : pal.bg, color: disabled ? u.textMuted : pal.color, border: `2px solid ${pal.border}`, borderRadius: size === "lg" ? 12 : 8, cursor: disabled ? "not-allowed" : "pointer", textTransform: "uppercase", boxShadow: shadow, transform, transition: "transform 0.08s, box-shadow 0.08s", opacity: disabled ? 0.55 : 1, ...style },
    ...rest,
    children
  });
}

function StartScreen({ onPlay, bestRun }) {
  return c.jsxs("div", {
    className: "ts-start-screen",
    style: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", textAlign: "center" },
    children: [
      R.logo && c.jsx("img", { src: R.logo.path, alt: R.logo.alt, onError: (n) => { if (R.logo.fallbackPath && !n.currentTarget.dataset.triedFallback) { n.currentTarget.dataset.triedFallback = "1"; n.currentTarget.src = R.logo.fallbackPath; } else n.currentTarget.style.display = "none"; }, style: { height: R.logo.height, maxWidth: "80%", objectFit: "contain", marginBottom: 32 } }),
      R.presenter,
      c.jsx("h1", { className: "ts-start-title", style: { fontFamily: C.display, fontSize: "clamp(56px, 12vw, 140px)", lineHeight: 0.9, letterSpacing: "-0.01em", margin: 0, color: u.text, textShadow: `6px 6px 0 ${u.brand}`, maxWidth: "15ch" }, children: R.title }),
      c.jsxs("p", { style: { fontFamily: C.body, fontSize: 22, fontWeight: 700, color: u.text, maxWidth: 620, margin: "48px 0 12px", lineHeight: 1.4 }, children: [R.hero.headline, c.jsx("br", {}), c.jsx("span", { style: { color: u.brand }, children: R.hero.headlineAccent })] }),
      c.jsx("p", { style: { fontFamily: C.body, fontSize: 16, color: u.textDim, maxWidth: 560, margin: "0 0 44px", lineHeight: 1.65, fontWeight: 500 }, children: R.hero.subtitle }),
      c.jsx(Button, { onClick: onPlay, variant: "primary", size: "lg", children: R.playLabel }),
      bestRun > 0 && c.jsxs("div", { style: { marginTop: 32, fontFamily: C.mono, fontSize: 11, color: u.textMuted, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }, children: ["Best this session: ", c.jsx("span", { style: { color: u.brand, fontWeight: 700 }, children: Po(bestRun) })] })
    ]
  });
}

function WalkScreen({ step, total, screen, onNext, onSkip, isLast }) {
  return c.jsxs("div", {
    style: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" },
    children: [
      c.jsxs("div", {
        className: "ts-walk-card",
        style: { maxWidth: 640, width: "100%", minHeight: 620, background: u.surface, border: `2px solid ${u.outline}`, borderRadius: 14, boxShadow: U.lg, padding: "36px 40px 32px", textAlign: "center", animation: "ts-fade-in 0.35s ease-out", display: "flex", flexDirection: "column", boxSizing: "border-box" },
        children: [
          c.jsxs("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 3, color: u.textMuted, fontWeight: 700, textTransform: "uppercase", marginBottom: 20, flexShrink: 0 }, children: [R.walkthroughStepPrefix, " ", step + 1, " of ", total] }),
          c.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 0 }, children: [
            c.jsx("h2", { className: "ts-walk-title", style: { fontFamily: C.display, fontSize: "clamp(36px, 6vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.01em", margin: 0, color: u.text, textShadow: `4px 4px 0 ${u.brand}` }, children: screen.title }),
            c.jsx("div", { style: { margin: "32px 0 28px", display: "flex", justifyContent: "center" }, children: c.jsx(WalkArt, { screen }) }),
            c.jsx("p", { style: { fontFamily: C.body, fontSize: 16, color: u.textDim, lineHeight: 1.7, fontWeight: 500, margin: "0 auto", maxWidth: 500 }, children: screen.body })
          ] }),
          c.jsx("div", { style: { marginTop: 30, display: "flex", justifyContent: "center", flexShrink: 0 }, children: c.jsx(Button, { onClick: onNext, variant: "primary", size: "md", children: isLast ? R.walkthroughPlayLabel : R.walkthroughNextLabel }) })
        ]
      }),
      c.jsxs("button", { onClick: onSkip, "aria-hidden": isLast, tabIndex: isLast ? -1 : 0, style: { marginTop: 24, background: "none", border: "none", fontFamily: C.mono, fontSize: 12, letterSpacing: 1.5, color: u.textMuted, cursor: isLast ? "default" : "pointer", textTransform: "uppercase", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 4, visibility: isLast ? "hidden" : "visible", pointerEvents: isLast ? "none" : "auto" }, children: [R.walkthroughSkipLabel, " \u2192"] })
    ]
  });
}

function WalkArt({ screen }) {
  if (screen.type === "ladder") {
    const rows = [{ label: "Q15", prize: "$1M", highlight: true }, { label: "Q10", prize: "$32K" }, { label: "Q5", prize: "$1K" }, { label: "Q1", prize: "$100" }];
    return c.jsx("div", { className: "ts-walk-ladder-mini", style: { display: "inline-block", border: `2px solid ${u.outline}`, borderRadius: 8, background: u.surfaceHigh, overflow: "hidden", boxShadow: U.md }, children: rows.map((n, r) => c.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px", gap: 16, background: n.highlight ? u.brand : "transparent", color: n.highlight ? u.textOnDark : u.text, borderTop: r === 0 ? "none" : `1px solid ${u.borderLight}`, minWidth: 180 }, children: [c.jsx("span", { style: { fontFamily: C.mono, fontSize: 11, fontWeight: 700 }, children: n.label }), c.jsx("span", { style: { fontFamily: C.display, fontSize: 16 }, children: n.prize })] }, r)) });
  }
  if (screen.type === "questions")
    return c.jsx("div", { className: "ts-walk-answer-mini", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, maxWidth: 320 }, children: ["A", "B", "C", "D"].map((t) => c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, background: u.surfaceHigh, border: `2px solid ${u.outline}`, borderRadius: 8, padding: "10px 12px", boxShadow: U.sm }, children: [c.jsx("span", { style: { fontFamily: C.display, fontSize: 13, color: u.textOnDark, background: u.brand, border: `2px solid ${u.outline}`, borderRadius: 5, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }, children: t }), c.jsxs("span", { style: { fontFamily: C.body, fontSize: 12, color: u.textDim, fontWeight: 500 }, children: ["Choice ", t.toLowerCase()] })] }, t)) });
  if (screen.type === "cards")
    return c.jsx("div", { style: { display: "flex", gap: 8, perspective: 600 }, children: R.cardMeta.map((m, i) => c.jsx("div", { style: { width: 58, height: 78, background: i === 0 ? u.surfaceHigh : u.cardBack, border: `2px solid ${u.outline}`, borderRadius: 7, boxShadow: U.sm, display: "flex", alignItems: "center", justifyContent: "center", transform: `rotateY(${i === 0 ? 0 : -22}deg)`, color: i === 0 ? u.brand : u.brandSoft, fontFamily: C.display, fontSize: 20 }, children: i === 0 ? m.icon : "?" }, i)) });
  if (screen.type === "points")
    return c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      c.jsx("div", { style: { display: "flex", gap: 5 }, children: [0, 1, 2].map((n) => c.jsx("div", { style: { width: 16, height: 16, borderRadius: "50%", background: u.brand, border: `2px solid ${u.outline}` } }, n)) }),
      c.jsx("div", { style: { fontFamily: C.display, fontSize: 34, color: u.brand }, children: "3 PTS" })
    ] });
  if (screen.type === "lifeline") {
    const t = R.lifelines[screen.lifelineKey];
    return c.jsx("div", { style: { background: u.surface, border: `2px solid ${u.outline}`, padding: "14px 26px", borderRadius: 26, fontFamily: C.display, fontSize: 22, letterSpacing: 2, color: u.brand, boxShadow: U.md }, children: t.label });
  }
  if (screen.type === "shop")
    return c.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center" }, children: [
      c.jsx("div", { style: { background: "#e5f0e6", border: `2px solid ${u.green}`, padding: "12px 20px", borderRadius: 14, fontFamily: C.display, fontSize: 20, letterSpacing: 1, color: u.green, boxShadow: U.md }, children: "\uD83D\uDEE1 SHIELD" }),
      c.jsx("div", { style: { background: u.surface, border: `2px solid ${u.outline}`, padding: "12px 20px", borderRadius: 14, fontFamily: C.display, fontSize: 20, letterSpacing: 1, color: u.brand, boxShadow: U.md }, children: "\u21BB SKIP" })
    ] });
  if (screen.type === "ready")
    return c.jsx("div", { style: { fontFamily: C.display, fontSize: 44, color: u.terra, letterSpacing: 2, textShadow: `4px 4px 0 ${u.outline}` }, children: "\u2726 \u2726 \u2726" });
  return null;
}

function Backdrop({ children }) {
  return c.jsx("div", { style: { position: "fixed", inset: 0, background: "rgba(42, 31, 18, 0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 90, padding: 24, animation: "ts-backdrop-in 0.15s ease-out" }, children });
}

function ConfirmModal({ title, body, primaryLabel, secondaryLabel, primaryVariant = "primary", onPrimary, onSecondary, header }) {
  return c.jsx(Backdrop, { children: c.jsxs("div", {
    className: "ts-modal-card",
    style: { background: u.surfaceHigh, border: `2px solid ${u.outline}`, borderRadius: 14, boxShadow: U.lg, padding: "28px 32px 26px", maxWidth: 460, width: "100%", animation: "ts-modal-in 0.18s ease-out" },
    children: [
      header,
      c.jsx("h3", { style: { fontFamily: C.display, fontSize: 26, letterSpacing: 0, margin: header ? "10px 0 8px" : "0 0 8px", color: u.text, lineHeight: 1.15 }, children: title }),
      body && c.jsx("p", { style: { fontFamily: C.body, fontSize: 15, lineHeight: 1.65, color: u.textDim, fontWeight: 500, margin: "0 0 22px" }, children: body }),
      c.jsxs("div", { style: { display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }, children: [
        c.jsx(Button, { variant: "ghost", size: "sm", onClick: onSecondary, style: { fontSize: 14 }, children: secondaryLabel }),
        c.jsx(Button, { variant: primaryVariant, size: "sm", onClick: onPrimary, style: { fontSize: 14 }, children: primaryLabel })
      ] })
    ]
  }) });
}

function LifelineModal({ lifelineKey, remainingAfter, available, points, price, onConfirm, onCancel }) {
  const meta = R.lifelines[lifelineKey];
  const purchaseOnly = lifelineKey === "shield" || lifelineKey === "skip";
  const affordable = available || points >= price;
  const isBuy = !available;
  const header = c.jsx("div", { style: { display: "inline-block", background: u.brand, color: u.textOnDark, border: `2px solid ${u.outline}`, borderRadius: 8, padding: "6px 14px", fontFamily: C.display, fontSize: 16, letterSpacing: 2, boxShadow: U.sm }, children: meta.label });
  let remainingLine;
  if (!isBuy) {
    remainingLine = remainingAfter <= 0 ? R.lifelineConfirm.remainingOne : R.lifelineConfirm.remainingMany(remainingAfter);
  } else if (purchaseOnly) {
    remainingLine = affordable ? `Costs ${price} points. You have ${points}.` : `Costs ${price} points. You have only ${points}. Read more review cards to earn.`;
  } else {
    remainingLine = affordable ? `Already used. Buy again for ${price} points. You have ${points}.` : `Already used. Buy again for ${price} points. You have only ${points}. Read more review cards to earn.`;
  }
  const primaryLabel = isBuy ? `Buy for ${price} pts` : R.lifelineConfirm.useLabel;
  return c.jsx(ConfirmModal, {
    header,
    title: meta.shortDesc,
    body: c.jsxs(c.Fragment, { children: [
      c.jsx("span", { style: { display: "block", marginBottom: 12 }, children: meta.fullDesc }),
      c.jsx("span", { style: { fontFamily: C.mono, fontSize: 12, letterSpacing: 1.5, color: affordable ? u.textMuted : u.red, fontWeight: 700, textTransform: "uppercase" }, children: remainingLine })
    ] }),
    primaryLabel, secondaryLabel: R.lifelineConfirm.cancelLabel,
    primaryVariant: affordable ? "primary" : "secondary",
    onPrimary: affordable ? onConfirm : onCancel,
    onSecondary: onCancel
  });
}

function QuestionScreen(props) {
  const { question, level, rung, difficulty, stage, streak, selectedIdx, locked, revealCorrect,
    revealWrong, showFloating, phase, removedAnswers, juryResults, hintShown, lifelines, muted,
    setMuted, isEndless, points, shieldArmed, onSelect, onLockIn, onNext, onHome, onRequestLifeline,
    onOpenShop, onEnterEndless } = props;
  const bonusStreak = isEndless ? Math.max(0, streak - 15) : 0;
  return c.jsxs("div", {
    style: { maxWidth: 1280, margin: "0 auto", padding: "24px 24px 24px", display: "flex", gap: 28, alignItems: "flex-start", minHeight: "100vh", boxSizing: "border-box" },
    className: "ts-game-layout ts-game-screen",
    children: [
      c.jsxs("div", { className: "ts-game-main", style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }, children: [
        c.jsxs("div", { className: "ts-top-bar", style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }, children: [
          c.jsx(Button, { variant: "secondary", size: "sm", onClick: onHome, style: { fontSize: 12 }, children: R.homeButton }),
          c.jsxs("div", { className: "ts-hud", style: { flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, flexWrap: "wrap", padding: "14px 22px", background: u.surface, border: `2px solid ${u.outline}`, borderRadius: 10, boxShadow: U.md, minWidth: 260 }, children: [
            c.jsxs("div", { children: [
              c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 2, color: u.textMuted, marginBottom: 4, fontWeight: 700, textTransform: "uppercase" }, children: "Streak" }),
              c.jsx("div", { style: { fontFamily: C.display, fontSize: 22, letterSpacing: 0, color: streak > 0 ? u.terra : u.textMuted, lineHeight: 1, animation: streak > 0 ? "ts-streak-pop 0.5s ease-out" : "none" }, children: streak }, "streak-" + streak)
            ] }),
            c.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
              c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 2, color: u.textMuted, fontWeight: 700, textTransform: "uppercase" }, children: "Points" }),
              c.jsx("div", { style: { fontFamily: C.display, fontSize: 22, letterSpacing: 0, color: u.brand, lineHeight: 1 }, children: points }),
              c.jsx("div", { style: { fontFamily: C.mono, fontSize: 8, letterSpacing: 1, color: u.textMuted, fontWeight: 700 }, children: "SPEND ON LIFELINES" })
            ] }),
            c.jsxs("div", { style: { textAlign: "right" }, children: [
              c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 2, color: u.textMuted, fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }, children: "Worth" }),
              c.jsx("div", { className: "ts-hud-worth", style: { fontFamily: C.display, fontSize: "clamp(24px, 3.4vw, 34px)", color: u.brand, letterSpacing: "-0.01em", lineHeight: 1 }, children: Po(rung.prize) })
            ] })
          ] }),
          c.jsx("button", { onClick: () => setMuted((m) => !m), "aria-label": muted ? "Unmute sound" : "Mute sound", className: "ts-sound-btn", style: { background: muted ? "transparent" : u.surface, border: `2px solid ${u.outline}`, color: muted ? u.textMuted : u.text, padding: "8px 12px", borderRadius: 6, cursor: "pointer", fontFamily: C.mono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700, boxShadow: muted ? "none" : U.sm, flexShrink: 0, alignSelf: "stretch" }, children: muted ? "\u266A OFF" : "\u266A ON" })
        ] }),
        c.jsx(ProgressDots, { level, revealCorrect, revealWrong, isEndless }),
        c.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12, flexWrap: "wrap" }, children: [
          c.jsx("div", { className: "ts-q-header", style: { fontFamily: C.display, fontSize: 28, letterSpacing: "-0.01em", color: u.text, lineHeight: 1 }, children: isEndless
            ? c.jsxs(c.Fragment, { children: [R.endlessMode.headerLabel, " Q", String(level + 1).padStart(2, "0"), " ", c.jsxs("span", { className: "ts-q-header-total", style: { color: u.terra, fontSize: 18 }, children: ["\u00B7 STREAK ", bonusStreak] })] })
            : c.jsxs(c.Fragment, { children: ["QUESTION ", String(level + 1).padStart(2, "0"), " ", c.jsx("span", { className: "ts-q-header-total", style: { color: u.textMuted, fontSize: 18 }, children: "/ 15" })] }) }),
          c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 2, color: u.text, textTransform: "uppercase", fontWeight: 700, padding: "5px 12px", background: u.mustardSoft, border: `2px solid ${u.outline}`, borderRadius: 6, boxShadow: U.sm }, children: difficulty })
        ] }),
        c.jsxs("div", { className: "ts-question-card", style: { position: "relative", background: u.surfaceHigh, border: `2px solid ${u.outline}`, borderLeft: `8px solid ${u.brand}`, padding: "32px 36px", borderRadius: 10, animation: revealWrong ? "ts-wrong-shake-card 0.5s ease-out" : "ts-fade-in 0.4s ease-out", boxShadow: U.md }, children: [
          c.jsx("p", { style: { fontFamily: C.body, fontSize: "clamp(19px, 2.2vw, 24px)", lineHeight: 1.45, fontWeight: 600, margin: 0, color: u.text }, children: question.q }),
          hintShown && c.jsxs("div", { style: { marginTop: 22, padding: "14px 18px", background: u.blueBg, border: `2px solid ${u.blue}`, borderRadius: 6, fontFamily: C.body, fontSize: 14, color: u.blue, fontStyle: "italic", lineHeight: 1.6, animation: "ts-fade-in 0.4s", fontWeight: 500 }, children: [c.jsx("span", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 1.5, color: u.blue, fontWeight: 700, fontStyle: "normal", marginRight: 10, textTransform: "uppercase" }, children: R.lifelines.hint.inGameLabel }), question.hint] })
        ] }, "q-" + level),
        c.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }, className: "ts-answer-grid", children: question.options.map((opt, i) => c.jsx(AnswerButton, {
          letter: ["A", "B", "C", "D"][i], text: opt, selected: selectedIdx === i, locked,
          isCorrect: i === question.correct, isSelectedAnswer: selectedIdx === i, revealCorrect, revealWrong,
          removed: removedAnswers.includes(i), juryPct: juryResults ? juryResults[i] : null, stage, onClick: () => onSelect(i)
        }, i)) }),
        c.jsxs("div", { className: "ts-action-bar", style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }, children: [
          c.jsx("div", { className: "ts-lifelines-row", style: { display: "flex", gap: 10 }, children:
            c.jsx(ShopButton, { lifelines, points, shieldArmed, disabled: locked, onClick: onOpenShop })
          }),
          c.jsx("div", { className: "ts-action-bar-right", style: { display: "flex", gap: 12 }, children: c.jsx(Button, { variant: "primary", size: "md", disabled: selectedIdx === null || locked, onClick: onLockIn, children: "Lock It In" }) })
        ] })
      ] }),
      c.jsx(Ladder, { currentLevel: level, isEndless, bonusStreak }),
      revealCorrect && c.jsx(Confetti, { intensity: stage >= 3 ? "high" : stage >= 2 ? "med" : "low" })
    ]
  });
}

function ProgressDots({ level, revealCorrect, revealWrong, isEndless }) {
  return c.jsx("div", { className: "ts-progress-dots", style: { display: "flex", gap: 4, alignItems: "center" }, children: he.map((o, i) => {
    const done = isEndless || i < level;
    const current = !isEndless && i === level;
    const green = done || (current && revealCorrect);
    const red = current && revealWrong;
    return c.jsx("div", { style: { flex: 1 }, children: c.jsx("div", { style: { width: "100%", height: 6, borderRadius: 3, background: green ? u.green : red ? u.red : current ? u.brand : u.borderLight, border: `1px solid ${u.outline}`, animation: green ? "ts-dot-fill 0.4s ease-out" : "none", transition: "background 0.3s" } }, "dot-" + i + "-" + green + "-" + red) }, i);
  }) });
}

function AnswerButton(props) {
  const { letter, text, selected, locked, isCorrect, isSelectedAnswer, revealCorrect, revealWrong, removed, juryPct, stage, onClick } = props;
  let bg = u.surface, border = u.outline, color = u.text, anim = "", letterBg = u.brand, letterColor = u.textOnDark, shadow = U.md, transform = "translate(0, 0)";
  if (removed) { bg = "transparent"; color = u.textMuted; letterBg = u.borderLight; letterColor = u.textMuted; shadow = "none"; }
  else if (revealCorrect && isCorrect) { bg = u.green; color = u.textOnDark; letterBg = u.surface; letterColor = u.green; anim = "ts-correct-pop 0.8s ease-out"; }
  else if (revealWrong && isCorrect) { bg = u.green; color = u.textOnDark; letterBg = u.surface; letterColor = u.green; anim = "ts-correct-pop 0.9s ease-out"; }
  else if (revealWrong && isSelectedAnswer) { bg = u.red; color = u.textOnDark; letterBg = u.surface; letterColor = u.red; }
  else if (locked && selected) { bg = u.brandSoft; anim = `ts-tension-${stage} ${1.6 - stage * 0.1}s ease-in-out infinite`; shadow = "none"; transform = "translate(4px, 4px)"; }
  else if (selected) { bg = u.brandSoft; shadow = U.sm; transform = "translate(1px, 1px)"; }
  return c.jsxs("button", {
    onClick, disabled: removed || locked, className: "ts-answer-btn",
    style: { textAlign: "left", background: bg, color, border: `2px solid ${border}`, borderRadius: 10, padding: "16px 18px", cursor: removed || locked ? "default" : "pointer", fontFamily: C.body, fontSize: 15, fontWeight: 600, opacity: removed ? 0.4 : 1, textDecoration: removed ? "line-through" : "none", transition: "background 0.18s, box-shadow 0.12s, transform 0.12s, opacity 0.3s", animation: anim, position: "relative", minHeight: 68, display: "flex", alignItems: "center", gap: 14, lineHeight: 1.4, boxShadow: shadow, transform },
    onMouseEnter: (e) => { if (!removed && !locked && !selected) { e.currentTarget.style.boxShadow = "2px 2px 0 " + u.outline; e.currentTarget.style.transform = "translate(2px, 2px)"; } },
    onMouseLeave: (e) => { if (!removed && !locked && !selected) { e.currentTarget.style.boxShadow = U.md; e.currentTarget.style.transform = "translate(0, 0)"; } },
    children: [
      c.jsx("span", { className: "ts-answer-btn-letter", style: { fontFamily: C.display, fontSize: 18, color: letterColor, background: letterBg, border: `2px solid ${u.outline}`, borderRadius: 6, width: 36, height: 36, minWidth: 36, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", letterSpacing: 0, lineHeight: 1 }, children: letter }),
      c.jsx("span", { style: { flex: 1 }, children: text }),
      juryPct != null && !removed && c.jsxs("span", { style: { fontFamily: C.mono, fontSize: 12, color: color === u.textOnDark ? u.textOnDark : u.brand, fontWeight: 700, padding: "5px 10px", background: color === u.textOnDark ? "rgba(0,0,0,0.18)" : u.brandSoft, border: `2px solid ${color === u.textOnDark ? u.textOnDark : u.outline}`, borderRadius: 4, flexShrink: 0 }, children: [juryPct, "%"] })
    ]
  });
}

// The single action-bar button that opens the lifeline shop.
// Shows how many lifelines are ready and the current point balance.
function ShopButton({ lifelines, points, shieldArmed, disabled, onClick }) {
  const [hover, setHover] = useState(false);
  const ready = Object.values(lifelines).filter(Boolean).length;
  const off = disabled;
  const shadow = off ? "none" : hover ? "2px 2px 0 " + u.outline : U.md;
  const transform = off ? "none" : hover ? "translate(2px, 2px)" : "translate(0, 0)";
  return c.jsxs("button", {
    onClick: off ? undefined : onClick, disabled: off,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    className: "ts-lifeline-btn",
    style: { position: "relative", display: "flex", alignItems: "center", gap: 10, background: u.surface, border: `2px solid ${u.outline}`, padding: "9px 16px", borderRadius: 12, cursor: off ? "not-allowed" : "pointer", opacity: off ? 0.5 : 1, boxShadow: shadow, transform, transition: "box-shadow 0.1s, transform 0.1s" },
    children: [
      c.jsx("span", { style: { fontFamily: C.display, fontSize: 16, letterSpacing: 1.5, color: u.brand }, children: "LIFELINES" }),
      shieldArmed && c.jsx("span", { title: "Shield armed", style: { fontFamily: C.mono, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, color: u.green, background: "#e5f0e6", border: `2px solid ${u.green}`, borderRadius: 6, padding: "2px 6px" }, children: "\uD83D\uDEE1 ARMED" }),
      c.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        c.jsxs("span", { style: { fontFamily: C.mono, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, color: u.textMuted, textTransform: "uppercase" }, children: [ready, " ready"] }),
        c.jsx("span", { style: { width: 1, height: 16, background: u.borderLight } }),
        c.jsxs("span", { style: { fontFamily: C.mono, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, color: u.brand }, children: [points, " PTS"] })
      ] })
    ]
  });
}

// The shop panel: all five lifelines with use / buy / armed / locked states.
function ShopPanel({ lifelines, points, prices, shieldArmed, onPick, onClose }) {
  const order = ["fifty", "poll", "hint", "shield", "skip"];
  const purchaseOnly = { shield: true, skip: true }; // never start free; always cost points
  return c.jsx(Backdrop, { children: c.jsxs("div", {
    style: { background: u.surfaceHigh, border: `2px solid ${u.outline}`, borderRadius: 14, boxShadow: U.lg, padding: "22px 24px 20px", maxWidth: 480, width: "100%", maxHeight: "90vh", overflowY: "auto", animation: "ts-modal-in 0.18s ease-out" },
    children: [
      c.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }, children: [
        c.jsx("h3", { style: { fontFamily: C.display, fontSize: 26, letterSpacing: 0, margin: 0, color: u.text }, children: "LIFELINES" }),
        c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6, background: u.brandSoft, border: `2px solid ${u.outline}`, borderRadius: 20, padding: "5px 12px" }, children: [
          c.jsx("span", { style: { fontFamily: C.display, fontSize: 18, color: u.brand, lineHeight: 1 }, children: points }),
          c.jsx("span", { style: { fontFamily: C.mono, fontSize: 9, letterSpacing: 1.5, color: u.brandDeep, fontWeight: 700 }, children: "PTS" })
        ] })
      ] }),
      c.jsx("p", { style: { fontFamily: C.body, fontSize: 13, lineHeight: 1.5, color: u.textDim, fontWeight: 500, margin: "0 0 16px" }, children: "The first three come free once each. Buy any of them back, or buy a shield or skip, with points from reading review cards." }),
      c.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }, children: order.map((k) => {
        const meta = R.lifelines[k];
        const available = lifelines[k]; // free-use ready (only ever true for fifty/poll/hint)
        const price = prices[k];
        const affordable = points >= price;
        const armed = k === "shield" && shieldArmed;
        const buyable = !available && affordable && !armed;
        const clickable = available || buyable;
        let stateLabel, stateColor, actionText;
        if (armed) { stateLabel = "Armed \u00B7 protects your next answer"; stateColor = u.green; actionText = "ARMED"; }
        else if (available) { stateLabel = "Ready to use, free"; stateColor = u.green; actionText = "Use"; }
        else if (buyable) { stateLabel = purchaseOnly[k] ? `Buy for ${price} pts` : `Buy back for ${price} pts`; stateColor = u.brand; actionText = `Buy ${price}`; }
        else { stateLabel = `Need ${price} pts`; stateColor = u.textMuted; actionText = `${price} pts`; }
        return c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, background: armed ? "#e5f0e6" : available ? u.surface : buyable ? u.brandSofter : u.surfaceWarm, border: `2px solid ${armed ? u.green : clickable ? u.outline : u.borderLight}`, borderRadius: 10, padding: "11px 14px", opacity: (clickable || armed) ? 1 : 0.72 }, children: [
          c.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
            c.jsx("div", { style: { fontFamily: C.display, fontSize: 17, letterSpacing: 1, color: (clickable || armed) ? u.text : u.textMuted }, children: meta.label }),
            c.jsx("div", { style: { fontFamily: C.body, fontSize: 12.5, lineHeight: 1.4, color: u.textDim, fontWeight: 500, marginTop: 2 }, children: meta.shortDesc }),
            c.jsx("div", { style: { fontFamily: C.mono, fontSize: 9.5, letterSpacing: 0.5, fontWeight: 700, color: stateColor, textTransform: "uppercase", marginTop: 4 }, children: stateLabel })
          ] }),
          c.jsx("button", {
            onClick: clickable ? () => onPick(k) : undefined, disabled: !clickable,
            style: { flexShrink: 0, fontFamily: C.display, fontSize: 13, letterSpacing: 1, background: armed ? u.green : clickable ? u.brand : u.surfaceWarm, color: (armed || clickable) ? u.textOnDark : u.textMuted, border: `2px solid ${(armed || clickable) ? u.outline : u.borderLight}`, borderRadius: 8, padding: "9px 16px", cursor: clickable ? "pointer" : "default", textTransform: "uppercase", boxShadow: clickable ? U.sm : "none", minWidth: 72 },
            children: actionText
          })
        ] }, k);
      }) }),
      c.jsx("div", { style: { display: "flex", justifyContent: "flex-end" }, children: c.jsx(Button, { onClick: onClose, variant: "ghost", size: "sm", style: { fontSize: 14 }, children: "Close" }) })
    ]
  }) });
}

function Ladder({ currentLevel, isEndless, bonusStreak }) {
  return c.jsxs("aside", {
    className: "ts-ladder",
    style: { width: 240, flexShrink: 0, background: u.surface, border: `2px solid ${u.outline}`, borderRadius: 10, position: "sticky", top: 60, maxHeight: "calc(100vh - 80px)", overflowY: "auto", boxShadow: U.md },
    children: [
      c.jsx("div", { style: { fontFamily: C.display, fontSize: isEndless ? 16 : 20, letterSpacing: 0, color: u.text, padding: "14px 18px", borderBottom: `2px solid ${u.outline}`, background: isEndless ? u.terraSoft : u.brandSoft, textAlign: "center" }, children: isEndless
        ? c.jsxs(c.Fragment, { children: [R.endlessMode.ladderLabel, c.jsxs("div", { style: { fontFamily: C.display, fontSize: 26, color: u.terra, lineHeight: 1, marginTop: 4 }, children: ["STREAK ", bonusStreak] })] })
        : "THE LADDER" }),
      [...he].reverse().map((r) => {
        const idx = r.level - 1;
        const active = !isEndless && idx === currentLevel;
        const done = isEndless || idx < currentLevel;
        const grand = r.prize === 1e6;
        return c.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 16px", background: active ? u.brand : done ? u.brandSofter : "transparent", borderTop: `1px solid ${u.borderLight}`, animation: active ? "ts-ladder-light 1.6s ease-in-out infinite" : "none", position: "relative" }, children: [
          c.jsx("div", { style: { fontFamily: C.mono, fontSize: 11, fontWeight: 700, color: active ? u.textOnDark : done ? u.brand : u.textMuted, width: 22 }, children: String(r.level).padStart(2, "0") }),
          c.jsx("div", { style: { flex: 1, fontFamily: C.body, fontSize: 10, color: active ? u.textOnDark : u.textMuted, fontWeight: 700, letterSpacing: 1, paddingLeft: 8, textTransform: "uppercase" }, children: grand && !active && !done ? "GRAND PRIZE" : "" }),
          c.jsx("div", { style: { fontFamily: C.display, fontSize: 16, letterSpacing: 0, color: active ? u.textOnDark : done || grand ? u.brand : u.text }, children: bp(r.prize) })
        ] }, r.level);
      })
    ]
  });
}

function Confetti({ intensity = "med" }) {
  const count = { low: 35, med: 65, high: 115 }[intensity];
  const bits = useMemo(() => Array.from({ length: count }).map((o, i) => ({
    left: Math.random() * 100, delay: Math.random() * 0.5, duration: 2.2 + Math.random() * 2.4,
    color: [u.brand, u.brandBright, u.terra, u.mustard, u.brandDeep, u.green][i % 6],
    size: 5 + Math.random() * 9, rot: Math.random() * 360
  })), [count]);
  return c.jsx("div", { "aria-hidden": true, style: { position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 50 }, children: bits.map((o, i) => c.jsx("span", { style: { position: "absolute", left: o.left + "%", top: -20, width: o.size, height: o.size * 0.45, background: o.color, border: `1px solid ${u.outline}`, transform: `rotate(${o.rot}deg)`, animation: `ts-confetti-fall ${o.duration}s ease-in ${o.delay}s forwards` } }, i)) });
}

function RevealScreen(props) {
  const { question, level, isEndless, streak, rung, revealCorrect, selectedIdx, muted, setMuted,
    points, onNext, onEnterEndless, onHome, onEarnCardPoint,
    onFlipSound, onRevisitSound, onSkipReview } = props;

  // sub-flow: first the verdict beat, then the learning cards
  const [step, setStep] = useState("verdict"); // "verdict" | "cards"
  const [current, setCurrent] = useState(0);      // which card index 0..2 is showing
  const [seen, setSeen] = useState([false, false, false]);
  const [dir, setDir] = useState(1);
  const [firstView, setFirstView] = useState(true);
  const [dwellDone, setDwellDone] = useState(false); // has the current card met its read-time gate
  const [pointBurst, setPointBurst] = useState(0); // increments each time a point is earned (drives the +1 animation)
  const dwellTimer = useRef(null);
  const burstTimer = useRef(null);

  const CARD_COUNT = R.cardMeta.length; // 3
  const DWELL_MS = 2000;
  const scoring = revealCorrect; // only correct answers earn points
  const earnedCount = seen.filter(Boolean).length;
  const allEarned = scoring && earnedCount === CARD_COUNT;
  const isQ15Win = revealCorrect && level === he.length - 1 && !isEndless;
  const bonusStreak = isEndless ? Math.max(0, streak - 15) : 0;

  // begin the dwell gate for whichever card is showing
  const startDwell = () => {
    setDwellDone(false);
    if (dwellTimer.current) clearTimeout(dwellTimer.current);
    dwellTimer.current = setTimeout(() => setDwellDone(true), DWELL_MS);
  };

  // reveal a card (earn point on its dwell completion, not on tap).
  // side effects (parent setState, burst) are kept OUT of the setSeen updater to stay pure.
  const markSeenAndScore = (idx) => {
    if (seen[idx]) return;
    const copy = seen.slice();
    copy[idx] = true;
    const seenCount = copy.filter(Boolean).length;
    setSeen(copy);
    if (scoring) {
      onEarnCardPoint(seenCount - 1);
      setPointBurst((n) => n + 1); // trigger the visible +1 POINT burst
      if (burstTimer.current) clearTimeout(burstTimer.current);
      burstTimer.current = setTimeout(() => setPointBurst(0), 1200);
    }
  };

  // when a card's dwell completes, score it (if first view)
  useEffect(() => {
    if (step !== "cards") return;
    if (dwellDone && !seen[current]) markSeenAndScore(current);
  }, [dwellDone, step]); // eslint-disable-line

  // entering the cards step, or moving between cards, (re)start the dwell
  const enterCards = () => {
    if (onFlipSound) onFlipSound();
    setStep("cards");
    setCurrent(0);
    setFirstView(true);
    startDwell();
  };

  const go = (targetIdx) => {
    if (targetIdx < 0 || targetIdx > CARD_COUNT - 1) return;
    const wasSeen = seen[targetIdx];
    setDir(targetIdx > current ? 1 : -1);
    setFirstView(!wasSeen);
    setCurrent(targetIdx);
    if (!wasSeen) { if (onFlipSound) onFlipSound(); startDwell(); }
    else { if (onRevisitSound) onRevisitSound(); setDwellDone(true); }
  };

  useEffect(() => () => { if (dwellTimer.current) clearTimeout(dwellTimer.current); if (burstTimer.current) clearTimeout(burstTimer.current); }, []);

  const allSeen = seen.every(Boolean);
  const meta = R.cardMeta[current];
  const canAdvanceCard = seen[current] || dwellDone; // gate Next until read
  const yourLetter = selectedIdx != null ? ["A", "B", "C", "D"][selectedIdx] : null;
  const rightLetter = ["A", "B", "C", "D"][question.correct];

  // ---------- VERDICT STEP ----------
  if (step === "verdict") {
    return c.jsxs("div", {
      className: "ts-reveal-screen",
      style: { minHeight: "100vh", height: "100vh", maxHeight: "100vh", background: u.bg, display: "flex", flexDirection: "column", padding: "14px 18px 18px", boxSizing: "border-box", overflow: "hidden" },
      children: [
        c.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }, children: [
          c.jsx(Button, { onClick: onHome, variant: "secondary", size: "sm", style: { fontSize: 12 }, children: R.homeButton }),
          c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 2, color: u.textMuted, fontWeight: 700, textTransform: "uppercase" }, children: isEndless ? `Bonus Q${level + 1}` : `Question ${level + 1} of 15` }),
          c.jsx("button", { onClick: () => setMuted((m) => !m), "aria-label": muted ? "Unmute" : "Mute", className: "ts-sound-btn", style: { background: muted ? "transparent" : u.surface, border: `2px solid ${u.outline}`, color: muted ? u.textMuted : u.text, padding: "6px 10px", borderRadius: 6, cursor: "pointer", fontFamily: C.mono, fontSize: 10, letterSpacing: 1.5, fontWeight: 700 }, children: muted ? "OFF" : "ON" })
        ] }),

        c.jsxs("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, textAlign: "center", maxWidth: 560, margin: "0 auto", width: "100%" }, children: [
          // simple result label with a small colored bar, no big stamp
          c.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10, animation: "ts-fade-in 0.3s ease-out" }, children: [
            c.jsx("div", { style: { width: 54, height: 6, borderRadius: 3, background: revealCorrect ? u.green : u.red } }),
            c.jsx("div", { style: { fontFamily: C.display, fontSize: "clamp(38px, 8vw, 64px)", lineHeight: 1, letterSpacing: 1, color: revealCorrect ? u.green : u.red }, children: revealCorrect ? "CORRECT" : "NOT QUITE" })
          ] }),

          // your pick (only shown when wrong) and the correct answer
          c.jsxs("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 10, animation: "ts-fade-in 0.4s ease-out" }, children: [
            !revealCorrect && yourLetter != null && c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, background: u.surface, border: `2px solid ${u.borderLight}`, borderRadius: 10, padding: "12px 16px", textAlign: "left" }, children: [
              c.jsx("span", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 1.5, color: u.textMuted, fontWeight: 700, textTransform: "uppercase", flexShrink: 0 }, children: "You picked" }),
              c.jsxs("span", { style: { fontFamily: C.display, color: u.textMuted, fontSize: 17, flexShrink: 0 }, children: [yourLetter, "."] }),
              c.jsx("span", { style: { fontFamily: C.body, fontSize: 15, fontWeight: 600, color: u.textDim }, children: question.options[selectedIdx] })
            ] }),
            c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, background: u.brandSoft, border: `2px solid ${u.outline}`, borderRadius: 10, padding: "12px 16px", textAlign: "left" }, children: [
              c.jsx("span", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 1.5, color: u.brand, fontWeight: 700, textTransform: "uppercase", flexShrink: 0 }, children: revealCorrect ? "Your answer" : "Correct answer" }),
              c.jsxs("span", { style: { fontFamily: C.display, color: u.brand, fontSize: 17, flexShrink: 0 }, children: [rightLetter, "."] }),
              c.jsx("span", { style: { fontFamily: C.body, fontSize: 15, fontWeight: 600, color: u.text }, children: question.options[question.correct] })
            ] })
          ] })
        ] }),

        c.jsxs("div", { style: { flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }, children: [
          revealCorrect && c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, background: u.brandSofter, border: `2px solid ${u.outline}`, borderRadius: 20, padding: "7px 16px", fontFamily: C.mono, fontSize: 11, letterSpacing: 0.5, color: u.brandDeep, fontWeight: 700 }, children: [
            c.jsx("span", { style: { fontFamily: C.display, fontSize: 15, color: u.brand }, children: "\u2605\u2605\u2605" }),
            c.jsx("span", { children: "3 info cards ahead \u00B7 read each to earn a point" })
          ] }),
          c.jsx("button", { onClick: enterCards, style: { fontFamily: C.display, fontSize: 16, letterSpacing: 2, background: u.brand, color: u.textOnDark, border: `2px solid ${u.outline}`, padding: "13px 32px", borderRadius: 10, cursor: "pointer", textTransform: "uppercase", boxShadow: U.md }, children: revealCorrect ? R.verdictContinue : R.verdictContinueWrong })
        ] })
      ]
    });
  }

  // ---------- CARDS STEP ----------
  const finalBtn = isQ15Win
    ? c.jsx("button", { onClick: onNext, style: { fontFamily: C.display, fontSize: 15, letterSpacing: 2, background: u.brand, color: u.textOnDark, border: `2px solid ${u.outline}`, padding: "11px 26px", borderRadius: 8, cursor: "pointer", textTransform: "uppercase", boxShadow: U.md, animation: "ts-pulse-next 1.8s ease-in-out infinite" }, children: "See your result \u2192" })
    : c.jsx("button", { onClick: onNext, style: { fontFamily: C.display, fontSize: 15, letterSpacing: 2, background: revealCorrect ? u.brand : u.terra, color: u.textOnDark, border: `2px solid ${u.outline}`, padding: "11px 24px", borderRadius: 8, cursor: "pointer", textTransform: "uppercase", boxShadow: U.md, animation: "ts-pulse-next 1.8s ease-in-out infinite" }, children: revealCorrect ? "Next Question \u2192" : "See Final Result \u2192" });

  return c.jsxs("div", {
    className: "ts-reveal-screen",
    style: { minHeight: "100vh", height: "100vh", maxHeight: "100vh", background: u.bg, display: "flex", flexDirection: "column", padding: "14px 18px 12px", boxSizing: "border-box", overflow: "hidden" },
    children: [
      // top bar: home, question count, compact points readout, mute
      c.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexShrink: 0, marginBottom: 10 }, children: [
        c.jsx(Button, { onClick: onHome, variant: "secondary", size: "sm", style: { fontSize: 12 }, children: R.homeButton }),
        c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center" }, children: [
          c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 2, color: u.textMuted, fontWeight: 700, textTransform: "uppercase" }, children: isEndless ? `Bonus Q${level + 1}` : `Q ${String(level + 1).padStart(2, "0")} / 15` }),
          // slim points strip: 3 pips + total, only when this answer earns
          scoring
            ? c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, background: u.surfaceWarm, border: `2px solid ${u.borderLight}`, borderRadius: 16, padding: "4px 10px 4px 8px" }, children: [
                c.jsx("div", { style: { display: "flex", gap: 3 }, children: [0, 1, 2].map((r) => c.jsx("div", { style: { width: 9, height: 9, borderRadius: "50%", background: r < earnedCount ? u.brand : u.surface, border: `1.5px solid ${r < earnedCount ? u.brand : u.borderLight}`, animation: r === earnedCount - 1 ? "ts-pip-pop 0.4s ease-out" : "none" } }, r)) }),
                c.jsxs("div", { style: { fontFamily: C.mono, fontSize: 11, fontWeight: 700, letterSpacing: 0.5, color: u.brand }, children: [points, " PTS"] })
              ] })
            : c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 1, color: u.textMuted, fontWeight: 700, textTransform: "uppercase" }, children: "Review \u00B7 no points on a miss" })
        ] }),
        c.jsx("button", { onClick: () => setMuted((m) => !m), "aria-label": muted ? "Unmute" : "Mute", className: "ts-sound-btn", style: { background: muted ? "transparent" : u.surface, border: `2px solid ${u.outline}`, color: muted ? u.textMuted : u.text, padding: "6px 10px", borderRadius: 6, cursor: "pointer", fontFamily: C.mono, fontSize: 10, letterSpacing: 1.5, fontWeight: 700 }, children: muted ? "OFF" : "ON" })
      ] }),

      // the single comic card is now the hero of the screen (with the +1 POINT burst overlaid)
      c.jsxs("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", maxWidth: 760, margin: "0 auto", width: "100%", position: "relative" }, children: [
        c.jsx(ComicCard, {
          cardIndex: current, meta, dir, firstView, question, revealCorrect,
          selectedIdx, rightLetter
        }, "card-" + current + "-" + (firstView ? "f" : "s")),
        pointBurst > 0 && c.jsxs("div", { "aria-hidden": true, style: { position: "absolute", left: "50%", top: "42%", transform: "translate(-50%, -50%)", zIndex: 20, pointerEvents: "none", textAlign: "center", animation: "ts-point-burst 1.2s cubic-bezier(.2,.8,.2,1.1) forwards" }, children: [
          c.jsx("div", { style: { fontFamily: C.display, fontSize: "clamp(48px, 11vw, 92px)", color: u.brand, textShadow: `4px 4px 0 ${u.outline}`, lineHeight: 0.9 }, children: "+1" }),
          c.jsx("div", { style: { fontFamily: C.display, fontSize: "clamp(16px, 3.5vw, 26px)", letterSpacing: 3, color: u.brandDeep, marginTop: 2 }, children: allEarned ? "POINT \u00B7 ALL 3!" : "POINT" })
        ] })
      ] }),

      // dots + nav
      c.jsxs("div", { style: { flexShrink: 0, paddingTop: 8, display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }, children: [
        c.jsx("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: R.cardMeta.map((m, i) => c.jsx("button", {
          onClick: () => go(i), "aria-label": "Card " + (i + 1),
          style: { width: i === current ? 26 : 11, height: 11, borderRadius: 6, padding: 0, border: `2px solid ${u.outline}`, background: i === current ? u.brand : seen[i] ? u.brandSofter : u.surface, cursor: "pointer", transition: "width 0.2s, background 0.2s" }
        }, i)) }),

        c.jsxs("div", { style: { display: "flex", gap: 10, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }, children: [
          c.jsx(Button, { onClick: () => go(current - 1), variant: "ghost", size: "sm", disabled: current === 0, style: { fontSize: 13 }, children: "\u2039 Prev" }),
          current < CARD_COUNT - 1
            ? c.jsx(NextCardButton, { canAdvance: canAdvanceCard, scoring, onClick: () => go(current + 1) })
            : (allSeen ? finalBtn : c.jsx(NextCardButton, { canAdvance: canAdvanceCard, scoring, label: "Almost\u2026", onClick: () => {} }))
        ] }),

        !allSeen && c.jsx("button", { onClick: onSkipReview, style: { background: "transparent", border: "none", fontFamily: C.mono, fontSize: 11, letterSpacing: 2, color: u.textMuted, cursor: "pointer", textTransform: "uppercase", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3, padding: "2px 10px" }, children: scoring ? "Skip Review (no points) \u2192" : "Skip \u2192" })
      ] }),

      revealCorrect && c.jsx(Confetti, { intensity: "med" })
    ]
  });
}

// Next-card button that shows a filling dwell bar until the read gate clears
function NextCardButton({ canAdvance, onClick, label, scoring }) {
  return c.jsxs("button", {
    onClick: canAdvance ? onClick : undefined,
    disabled: !canAdvance,
    style: { position: "relative", overflow: "hidden", fontFamily: C.display, fontSize: 13, letterSpacing: 1.5, background: canAdvance ? u.surface : u.surfaceWarm, color: canAdvance ? u.text : u.textMuted, border: `2px solid ${u.outline}`, padding: "10px 22px", borderRadius: 8, cursor: canAdvance ? "pointer" : "default", textTransform: "uppercase", boxShadow: canAdvance ? U.sm : "none", minWidth: 140 },
    children: [
      !canAdvance && c.jsx("span", { "aria-hidden": true, style: { position: "absolute", left: 0, top: 0, bottom: 0, background: u.brandSofter, animation: "ts-dwell-fill 2s linear forwards", zIndex: 0 } }),
      c.jsx("span", { style: { position: "relative", zIndex: 1 }, children: canAdvance ? (label || "Next \u203A") : (scoring ? "Reading\u2026 +1 soon" : "Reading\u2026") })
    ]
  });
}

// Bold, self-explaining points banner shown above the review cards.
// Makes the "read 3 cards -> earn 3 points -> spend on lifelines" loop obvious.
// ---------- the single comic card, four faces ----------
function ComicCard({ cardIndex, meta, dir, firstView, question, revealCorrect, selectedIdx, rightLetter }) {
  // outer animation: flip on first view, slide on revisit
  const anim = firstView
    ? "ts-card-flip-in 0.5s cubic-bezier(.2,.7,.2,1) both"
    : (dir >= 0 ? "ts-card-slide-left 0.28s ease-out both" : "ts-card-slide-right 0.28s ease-out both");
  return c.jsx("div", { style: { flex: 1, minHeight: 0, perspective: 1400, display: "flex" }, children:
    c.jsxs("div", { className: "ts-comic-card", style: { flex: 1, display: "flex", flexDirection: "column", minHeight: 0, background: u.surfaceHigh, border: `3px solid ${u.outline}`, borderRadius: 12, boxShadow: U.lg, overflow: "hidden", transformStyle: "preserve-3d", animation: anim }, children: [
      // header band
      c.jsxs("div", { className: "ts-comic-header", style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 20px", background: u.brand, color: u.textOnDark, borderBottom: `3px solid ${u.outline}`, fontFamily: C.display, fontSize: "clamp(22px, 4vw, 30px)", letterSpacing: 1, flexShrink: 0 }, children: [
        c.jsx("span", { children: meta.label }),
        c.jsx("span", { style: { fontFamily: C.mono, fontSize: 12, letterSpacing: 1, opacity: 0.85, fontWeight: 700 }, children: `${cardIndex + 1} / ${R.cardMeta.length}` })
      ] }),
      // body: content is vertically centered so short scenarios don't leave a big void
      c.jsx("div", { className: "ts-comic-body ts-halftone", style: { flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 22px", background: u.surfaceHigh, display: "flex", flexDirection: "column", justifyContent: "center" }, children:
        c.jsx("div", { style: { width: "100%" }, children:
          meta.key === "info" ? c.jsx(FaceInfo, { question })
          : meta.key === "phrase" ? c.jsx(FacePhrase, { question })
          : c.jsx(FaceRealLife, { question })
        })
      })
    ] })
  });
}

function FaceVerdict({ question, revealCorrect, selectedIdx, rightLetter }) {
  const rightAnswer = question.options[question.correct];
  const yourLetter = selectedIdx != null ? ["A", "B", "C", "D"][selectedIdx] : null;
  const yourAnswer = selectedIdx != null ? question.options[selectedIdx] : null;
  const wrongExp = !revealCorrect && question.optionExplanations && selectedIdx != null ? question.optionExplanations[selectedIdx] : null;
  return c.jsxs("div", { children: [
    c.jsx("div", { style: { display: "flex", justifyContent: "center", marginBottom: 16 }, children: c.jsx("div", { style: { position: "relative", display: "inline-block", animation: "ts-pow-burst 0.6s cubic-bezier(.2,.8,.2,1.2) both" }, children: c.jsx("div", { className: "ts-pow", style: { fontFamily: C.display, fontSize: "clamp(34px, 7vw, 58px)", color: u.textOnDark, background: revealCorrect ? u.green : u.red, border: `3px solid ${u.outline}`, borderRadius: 10, padding: "8px 26px", letterSpacing: 2, transform: "rotate(-2deg)", boxShadow: U.md }, children: revealCorrect ? "CORRECT!" : "WRONG!" }) }) }),
    yourLetter && !revealCorrect && c.jsxs("div", { style: { fontFamily: C.body, fontSize: 15, marginBottom: 10, color: u.text, lineHeight: 1.45, background: u.terraSoft, border: `2px solid ${u.outline}`, borderRadius: 8, padding: "10px 14px" }, children: [
      c.jsx("span", { style: { color: u.red, fontSize: 10, letterSpacing: 1.5, fontFamily: C.mono, fontWeight: 700, textTransform: "uppercase", marginRight: 8 }, children: "You picked" }),
      c.jsxs("span", { style: { fontFamily: C.display, color: u.red, marginRight: 6 }, children: [yourLetter, "."] }), yourAnswer
    ] }),
    c.jsxs("div", { style: { fontFamily: C.body, fontSize: 16, color: u.text, lineHeight: 1.45, fontWeight: 600, background: u.brandSoft, border: `2px solid ${u.outline}`, borderRadius: 8, padding: "12px 16px" }, children: [
      c.jsx("span", { style: { color: u.brand, fontSize: 10, letterSpacing: 1.5, fontFamily: C.mono, fontWeight: 700, textTransform: "uppercase", marginRight: 8 }, children: "Correct" }),
      c.jsxs("span", { style: { fontFamily: C.display, color: u.brand, marginRight: 6 }, children: [rightLetter, "."] }), rightAnswer
    ] }),
    wrongExp && c.jsx("p", { style: { fontFamily: C.body, fontSize: 14, lineHeight: 1.55, color: u.textDim, margin: "12px 2px 0", fontWeight: 500 }, children: wrongExp })
  ] });
}

function FaceInfo({ question }) {
  return c.jsx("div", { style: { display: "flex", alignItems: "center", minHeight: "100%" }, children:
    c.jsx("div", { style: { background: u.mustardSoft, border: `2px solid ${u.outline}`, borderRadius: 8, padding: "18px 20px", boxShadow: U.sm }, children:
      c.jsx("p", { style: { fontFamily: C.body, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.6, color: u.text, margin: 0, fontWeight: 500 }, children: question.principle || "" })
    })
  });
}

function FacePhrase({ question }) {
  const kp = question.keyPhrase || { quote: "", gloss: "" };
  return c.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: "100%", gap: 16 }, children: [
    c.jsx("div", { className: "ts-phrase-quote", style: { fontFamily: C.display, fontSize: "clamp(28px, 5.5vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.01em", color: u.text, textShadow: `4px 4px 0 ${u.brandBright}`, animation: "ts-phrase-in 0.6s cubic-bezier(.2,.8,.2,1.2) both", maxWidth: "16ch" }, children: kp.quote }),
    kp.gloss && c.jsx("p", { style: { fontFamily: C.body, fontSize: 15, lineHeight: 1.55, color: u.textDim, margin: 0, fontWeight: 500, maxWidth: 460 }, children: kp.gloss })
  ] });
}

function FaceRealLife({ question }) {
  const sc = question.scenario || { lines: [] };
  const lines = sc.lines || [];
  // A "you" vs "officer/other" bubble layout with a scene-setter and split outcomes when present
  const outcomes = lines.filter((l) => /YES|NO/i.test(l.label));
  const exchange = lines.filter((l) => !/YES|NO/i.test(l.label));
  const isYou = (label) => /^YOU/i.test(label);
  return c.jsxs("div", { children: [
    sc.setup && c.jsx("div", { style: { fontFamily: C.body, fontStyle: "italic", fontWeight: 700, fontSize: 15, color: u.text, marginBottom: 14, lineHeight: 1.45, borderLeft: `4px solid ${u.brand}`, paddingLeft: 12 }, children: sc.setup }),
    c.jsx("div", { className: "ts-scenario-panels", style: { display: "grid", gridTemplateColumns: exchange.length > 1 ? "1fr 1fr" : "1fr", gap: 12, marginBottom: outcomes.length ? 14 : 0 }, children: exchange.map((l, i) => c.jsxs("div", { style: { background: u.surface, border: `2px solid ${u.outline}`, borderRadius: 10, padding: "12px 14px", boxShadow: U.sm, animation: `ts-bubble-in 0.4s ease-out ${i * 0.08}s both` }, children: [
      c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: [
        c.jsx("div", { style: { width: 30, height: 30, borderRadius: "50%", background: isYou(l.label) ? u.brandBright : u.blue, border: `2px solid ${u.outline}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }, children: isYou(l.label) ? "\uD83E\uDDD1" : "\uD83D\uDC6E" }),
        c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 1.2, color: u.textMuted, fontWeight: 700, textTransform: "uppercase" }, children: l.label })
      ] }),
      c.jsx("div", { style: { fontFamily: C.body, fontSize: 14.5, lineHeight: 1.4, color: u.text, fontWeight: 600, background: isYou(l.label) ? u.brandSoft : u.surfaceHigh, border: `2px solid ${u.outline}`, borderRadius: 8, padding: "8px 12px" }, children: l.text })
    ] }, i)) }),
    outcomes.length > 0 && c.jsx("div", { className: "ts-scenario-outcomes", style: { display: "grid", gridTemplateColumns: outcomes.length > 1 ? "1fr 1fr" : "1fr", gap: 10 }, children: outcomes.map((l, i) => {
      const yes = /YES/i.test(l.label);
      return c.jsxs("div", { style: { background: yes ? "#e5f0e6" : u.terraSoft, border: `2px solid ${yes ? u.green : u.terra}`, borderRadius: 8, padding: "10px 14px" }, children: [
        c.jsx("div", { style: { fontFamily: C.display, fontSize: 15, color: yes ? u.green : u.terra, marginBottom: 4, letterSpacing: 0.5 }, children: l.label }),
        c.jsx("div", { style: { fontFamily: C.body, fontSize: 13.5, lineHeight: 1.4, color: u.text, fontWeight: 500 }, children: l.text })
      ] }, i);
    }) }),
    sc.note && c.jsxs("p", { style: { fontFamily: C.body, fontSize: 13, lineHeight: 1.45, color: u.textDim, margin: "12px 0 0", fontStyle: "italic", fontWeight: 500 }, children: ["\u2192 ", sc.note] })
  ] });
}

// The big win moment. Fires on 15/15 regardless of what the player does next.
// A prize count rolls up to the full amount, then the run breakdown + choices appear.
function WinBigScreen({ prize, usage, pointsSpent, pointsLeft, sfx, onTakeMoney, onKeepGoing }) {
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    if (sfx) sfx.win();
    const steps = 42;
    const dur = 2200;
    for (let i = 1; i <= steps; i++) {
      timers.current.push(setTimeout(() => {
        // ease-out count so it decelerates into the final number
        const t = i / steps;
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * prize));
        if (i % 6 === 0 && sfx) sfx.tone(880 + i * 12, 0.08, "sine", 0.05);
        if (i === steps) {
          setDisplay(prize);
          setDone(true);
          if (sfx) { sfx.win(); setTimeout(() => sfx.correct(3), 250); }
        }
      }, Math.round((i / steps) * dur)));
    }
    return () => timers.current.forEach(clearTimeout);
  }, []); // eslint-disable-line

  return c.jsxs("div", {
    style: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center", gap: 18, position: "relative" },
    children: [
      c.jsx(Confetti, { intensity: "high" }),
      c.jsx("div", { style: { fontFamily: C.mono, fontSize: 13, letterSpacing: 4, color: u.brandDeep, fontWeight: 700, textTransform: "uppercase", animation: "ts-fade-in 0.5s" }, children: "Congratulations" }),
      c.jsx("h1", { style: { fontFamily: C.display, fontSize: "clamp(52px, 12vw, 128px)", lineHeight: 0.85, letterSpacing: "-0.02em", margin: 0, color: u.brand, textShadow: `6px 6px 0 ${u.outline}`, animation: "ts-verdict-stamp 0.7s cubic-bezier(.2,.8,.2,1.4) both" }, children: "YOU WON" }),
      c.jsx("div", { style: { fontFamily: C.display, fontSize: "clamp(44px, 10vw, 96px)", color: u.text, letterSpacing: "-0.02em", lineHeight: 1, textShadow: `4px 4px 0 ${u.mustard}`, animation: done ? "ts-streak-pop 0.5s ease-out" : "none" }, children: Po(display) }, "amt-" + done),
      done && c.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 18, animation: "ts-verdict-detail-in 0.5s ease-out both", marginTop: 4, width: "100%", maxWidth: 460 }, children: [
        c.jsx(RunBreakdown, { usage, pointsSpent, pointsLeft }),
        c.jsxs("div", { className: "ts-end-actions", style: { display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }, children: [
          c.jsx(Button, { onClick: onTakeMoney, variant: "primary", size: "md", children: R.q15Choice.takePrize }),
          c.jsx(Button, { onClick: onKeepGoing, variant: "secondary", size: "md", children: R.q15Choice.keepGoing })
        ] })
      ] })
    ]
  });
}

// The run scoreboard: which lifelines were used and how often, points spent, points left.
function RunBreakdown({ usage = {}, pointsSpent = 0, pointsLeft = 0 }) {
  const order = ["fifty", "poll", "hint", "shield", "skip"];
  const totalUses = order.reduce((n, k) => n + (usage[k] || 0), 0);
  return c.jsxs("div", { style: { width: "100%", background: u.surface, border: `2px solid ${u.outline}`, borderRadius: 12, padding: "18px 20px", boxShadow: U.md, textAlign: "left" }, children: [
    c.jsxs("div", { style: { fontFamily: C.mono, fontSize: 11, letterSpacing: 2, color: u.textMuted, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }, children: ["How you got there \u00B7 ", totalUses, totalUses === 1 ? " lifeline used" : " lifelines used"] }),
    c.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 7, marginBottom: 14 }, children: order.map((k) => {
      const n = usage[k] || 0;
      return c.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, opacity: n > 0 ? 1 : 0.5 }, children: [
        c.jsx("span", { style: { fontFamily: C.display, fontSize: 15, letterSpacing: 1, color: n > 0 ? u.text : u.textMuted }, children: R.lifelines[k].label }),
        c.jsx("span", { style: { fontFamily: C.mono, fontSize: 12, fontWeight: 700, color: n > 0 ? u.brand : u.textMuted }, children: n > 0 ? `\u00D7 ${n}` : "not used" })
      ] }, k);
    }) }),
    c.jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: 12, paddingTop: 12, borderTop: `2px solid ${u.borderLight}` }, children: [
      c.jsxs("div", { style: { textAlign: "center", flex: 1 }, children: [
        c.jsx("div", { style: { fontFamily: C.display, fontSize: 26, color: u.text, lineHeight: 1 }, children: pointsSpent }),
        c.jsx("div", { style: { fontFamily: C.mono, fontSize: 9, letterSpacing: 1, color: u.textMuted, fontWeight: 700, textTransform: "uppercase", marginTop: 3 }, children: "Points spent" })
      ] }),
      c.jsx("div", { style: { width: 2, background: u.borderLight } }),
      c.jsxs("div", { style: { textAlign: "center", flex: 1 }, children: [
        c.jsx("div", { style: { fontFamily: C.display, fontSize: 26, color: u.brand, lineHeight: 1 }, children: pointsLeft }),
        c.jsx("div", { style: { fontFamily: C.mono, fontSize: 9, letterSpacing: 1, color: u.textMuted, fontWeight: 700, textTransform: "uppercase", marginTop: 3 }, children: "Points left over" })
      ] })
    ] })
  ] });
}

function EndScreen(props) {
  const { phase, missedAtLevel, finalPrize, bestRun, streak, isEndless, completedIdx, missedQuestion, onPlayAgain, onHome } = props;
  const won = phase === "won";
  let sk;
  if (won) sk = isEndless ? R.endScreens.endlessEnd : R.endScreens.won;
  else sk = (missedAtLevel != null && missedAtLevel >= 10) ? R.endScreens.gameoverLate : R.endScreens.gameoverEarly;
  const prize = won ? (finalPrize || he[he.length - 1].prize) : 0;
  const bonusStreak = isEndless ? Math.max(0, streak - 15) : 0;
  return c.jsxs("div", {
    className: "ts-end-screen",
    style: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px 80px", textAlign: "center" },
    children: [
      won && c.jsx(Confetti, { intensity: "high" }),
      c.jsx("h1", { className: "ts-end-headline", style: { fontFamily: C.display, fontSize: "clamp(64px, 15vw, 150px)", lineHeight: 0.85, letterSpacing: "-0.02em", margin: 0, color: won ? u.brand : u.text, textShadow: won ? `6px 6px 0 ${u.outline}` : `5px 5px 0 ${u.terra}` }, children: sk.headline }),
      c.jsx("p", { style: { fontFamily: C.body, fontSize: 18, fontWeight: 600, color: u.textDim, maxWidth: 540, margin: "28px 0 36px", lineHeight: 1.55 }, children: sk.sub }),
      won && c.jsxs("div", { className: "ts-end-prize", style: { background: u.surface, border: `2px solid ${u.outline}`, borderRadius: 14, padding: "26px 44px", marginBottom: 22, boxShadow: U.lg }, children: [
        c.jsx("div", { style: { fontFamily: C.mono, fontSize: 11, letterSpacing: 3, color: u.textMuted, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }, children: isEndless ? "Banked" : "You won" }),
        c.jsx("div", { className: "ts-end-prize-amount", style: { fontFamily: C.display, fontSize: "clamp(56px, 11vw, 92px)", color: u.brand, letterSpacing: "-0.02em", lineHeight: 1 }, children: Po(prize) }),
        isEndless && bonusStreak > 0 && c.jsxs("div", { style: { fontFamily: C.mono, fontSize: 12, letterSpacing: 2, color: u.terra, fontWeight: 700, marginTop: 10, textTransform: "uppercase" }, children: [R.endScreens.bonusStreakLabel, ": ", bonusStreak] })
      ] }),
      !won && missedQuestion && c.jsxs("div", { className: "ts-missed-card", style: { background: u.surface, border: `2px solid ${u.outline}`, borderLeft: `8px solid ${u.terra}`, borderRadius: 10, padding: "22px 26px", maxWidth: 560, marginBottom: 30, boxShadow: U.md, textAlign: "left" }, children: [
        c.jsx("div", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 2, color: u.terra, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }, children: R.endScreens.missedQuestionLabel }),
        c.jsx("p", { style: { fontFamily: C.body, fontSize: 16, fontWeight: 600, lineHeight: 1.5, color: u.text, margin: "0 0 14px" }, children: missedQuestion.q }),
        c.jsxs("div", { style: { fontFamily: C.body, fontSize: 15, color: u.green, fontWeight: 700, lineHeight: 1.45 }, children: [
          c.jsx("span", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 1.5, color: u.green, marginRight: 8, textTransform: "uppercase" }, children: "Answer" }),
          missedQuestion.options[missedQuestion.correct]
        ] })
      ] }),
      bestRun > 0 && !won && c.jsxs("div", { style: { fontFamily: C.mono, fontSize: 11, letterSpacing: 2, color: u.textMuted, fontWeight: 700, textTransform: "uppercase", marginBottom: 26 }, children: ["Best this session: ", c.jsx("span", { style: { color: u.brand }, children: Po(bestRun) })] }),
      c.jsxs("div", { className: "ts-end-actions", style: { display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }, children: [
        c.jsx(Button, { onClick: onPlayAgain, variant: "primary", size: "md", children: R.endScreens.playAgainLabel }),
        c.jsx(Button, { onClick: onHome, variant: "ghost", size: "md", children: "Home" })
      ] }),
      c.jsx("p", { style: { fontFamily: C.mono, fontSize: 10, letterSpacing: 1.5, color: u.textMuted, marginTop: 30, fontWeight: 600, textTransform: "uppercase" }, children: R.endScreens.footerNote })
    ]
  });
}

const rootEl = typeof document !== "undefined" ? document.getElementById("root") : null;
if (rootEl) { const root = qc(rootEl); root.render(c.jsx(App, {})); }
