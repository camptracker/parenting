export interface SecretsSection {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  overview: string;
  keyInsights: string[];
  practicalTips: string[];
  watchOut: string[];
  quote: string;
  quoteAuthor: string;
}

export const secretsSections: SecretsSection[] = [
  {
    id: "why-secrets-matter",
    name: "Why Secret-Keeping Matters",
    tagline: "Trust is the foundation — and secrets are the test",
    icon: "🔑",
    color: "#6a5f8e",
    overview: "A 2019 study across 53 countries in the Journal of Personality and Social Psychology found that trustworthiness is the single most valued trait in close friendships — above humor, loyalty, shared interests, or even kindness. When someone tells you a secret, they're running a trust test: can I be vulnerable with you and survive? Pass enough tests and you become their inner circle. Fail once and you may never get back in. The stakes are asymmetric: keeping a secret earns you trust slowly; breaking one destroys trust instantly.",
    keyInsights: [
      "Trustworthiness is the #1 most valued trait in close friends across 53 countries — above humor, kindness, and loyalty combined (Journal of Personality and Social Psychology, 2019)",
      "Trust operates on asymmetric math: it takes 5-20 positive trust-building moments to recover from a single betrayal (Slovic, 1993, 'negativity bias in trust')",
      "The 'vault effect': being known as someone who keeps secrets creates a self-reinforcing reputation. The most trusted people attract the most trust — deepening ALL their friendships",
      "Evolutionary basis: trust detection is hardwired. Humans evolved sophisticated 'cheater detection' modules because cooperation required reliable partners (Cosmides & Tooby, evolutionary psychology)",
      "Children develop secret-keeping ability around age 5-7. Those who develop it earlier show stronger social bonds throughout life — it's a foundational social skill",
      "In organizational research, 'psychological safety' (feeling safe to be vulnerable) is the #1 predictor of high-performing teams. The same applies to friendships."
    ],
    practicalTips: [
      "Think of trust as a bank account: every kept confidence is a deposit, every betrayal is a massive withdrawal. You can't make withdrawals you haven't earned.",
      "Create a personal code: decide NOW that you don't share secrets. Making the decision in advance removes the temptation in the moment.",
      "When someone confides, acknowledge the weight: 'Thank you for trusting me with that. I won't share it.' Say it explicitly — don't just assume they know.",
      "Teach kids early: if your child tells you something in confidence, honor it (safety exceptions aside). This models trust and builds their capacity for deep relationships."
    ],
    watchOut: [
      "Thinking 'I'm just not a trustworthy person' — secret-keeping is a SKILL, not a personality trait. It can be learned and practiced.",
      "Underestimating how much broken trust costs: people rarely tell you they've demoted you from their inner circle — they just stop sharing real things",
      "Confusing privacy with secrecy: secrets are things people ask you to keep. Privacy is respecting that people have things they haven't shared with you yet."
    ],
    quote: "Trust is the glue of life. It's the most essential ingredient in effective communication. It's the foundational principle that holds all relationships.",
    quoteAuthor: "Stephen Covey"
  },
  {
    id: "gossip-science",
    name: "The Science of Gossip",
    tagline: "Why your brain WANTS you to spill — and how to override it",
    icon: "🧠",
    color: "#8b6b5e",
    overview: "Gossip isn't a character flaw — it's a neurological event. Sharing juicy information triggers dopamine release in the ventral striatum (the same reward center activated by sugar, sex, and social media likes). Anthropologist Robin Dunbar found that gossip makes up ~65% of all human conversation and originally served as 'social grooming' — the human equivalent of primates picking bugs off each other. It builds bonds, establishes norms, and transmits social information. The problem isn't gossip itself — it's the specific act of betraying a confidence, which hijacks a natural social behavior for short-term neurochemical reward at long-term relational cost.",
    keyInsights: [
      "Gossip activates the brain's reward system (ventral striatum): sharing secrets gives you a literal dopamine hit, same pathways as gambling and social media. It's neurochemically addictive.",
      "Dunbar's research: ~65% of human conversation is 'social topics' (gossip). It's not pathological — it's how humans have bonded for 200,000+ years",
      "Types of gossip (not all equal): prosocial gossip (warning others about bad actors) is actually healthy. Reputation gossip (status positioning) is neutral. Confidence betrayal is destructive.",
      "'Spontaneous trait transference' (Skowronski et al., 1998): when you describe someone negatively to a listener, the listener subconsciously associates those negative traits with YOU. Gossip literally makes you look worse.",
      "The dopamine hit from sharing a secret lasts ~20 minutes. The trust damage lasts months to years. The math never works out.",
      "Research shows people who gossip frequently are rated as less likeable, less trustworthy, and less socially powerful — the opposite of what gossipers hope to achieve"
    ],
    practicalTips: [
      "Recognize the urge as neurochemistry: when you feel the pull to share gossip, name it internally: 'That's dopamine talking.' This engages your prefrontal cortex and weakens the impulse.",
      "The 20-minute rule: when you hear something juicy, commit to not sharing it for 20 minutes. By then, the dopamine urge subsides and your rational brain takes over.",
      "Redirect the energy: if you need to process shocking information, write it in a private journal. The act of writing provides a similar release without the social damage.",
      "Distinguish your gossip: sharing 'Sarah got a promotion!' is different from sharing 'Sarah told me she's miserable in her marriage.' Practice noticing which category you're in.",
      "When someone is gossiping TO you about a mutual friend, redirect: 'I think that's between them — let's talk about something else.' This is rare, powerful, and builds your reputation.",
      "Find healthier social bonding: share YOUR stories, opinions, and experiences. You can be fascinating and connective without using other people's private lives as content."
    ],
    watchOut: [
      "Thinking 'I don't gossip' — almost everyone does. The first step is honest self-awareness, not denial.",
      "Gossip disguised as venting: 'I just need to talk about this...' is valid for YOUR experiences. For someone else's secrets, it's a rationalization.",
      "Group settings amplify gossip: alcohol + group dynamics + social pressure = the highest-risk environment for confidence betrayal",
      "Digital gossip (screenshots, forwarded messages) is permanent evidence. It can resurface years later."
    ],
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    quoteAuthor: "Eleanor Roosevelt"
  },
  {
    id: "types-of-secrets",
    name: "Types of Secrets (Not All Equal)",
    tagline: "Knowing what to keep, what to share, and what to escalate is a moral skill",
    icon: "⚖️",
    color: "#5e7a8c",
    overview: "Not all secrets are created equal, and treating them identically leads to either dangerous silence or unnecessary betrayal. Columbia University researcher Michael Slepian identified 38 common secret categories and found that the psychological burden varies enormously based on the type. Understanding the taxonomy of secrets helps you make better decisions about what to guard, what to share, and — critically — when breaking a confidence is actually the RIGHT thing to do.",
    keyInsights: [
      "Slepian's 38 categories of secrets include: finances, mental health, ambitions, relationships, beliefs, habits, desires, and violations. Each carries different weight and different rules.",
      "TIER 1 — Sacred secrets: trauma, mental health struggles, sexuality, deeply personal fears. These should NEVER be shared without explicit permission. Violating these causes the deepest harm.",
      "TIER 2 — Personal secrets: relationship issues, career doubts, family problems, financial struggles. Default to keeping these, but use judgment if directly asked.",
      "TIER 3 — Social secrets: crushes, minor embarrassments, surprises. Lower stakes, but still respect the ask.",
      "THE EXCEPTION — Safety secrets: self-harm, abuse, addiction crises, plans that endanger someone. Breaking confidence here is NOT betrayal — it's the highest form of loyalty.",
      "Slepian's key finding: the stress of secrets comes from CONCEALMENT (actively hiding), not the secret itself. Having even one safe outlet (therapist, journal) dramatically reduces the burden."
    ],
    practicalTips: [
      "When someone confides, mentally categorize: is this sacred, personal, social, or safety? Your response should match the tier.",
      "For sacred secrets: lock it in the vault. Period. Don't even hint. Don't reference it vaguely. Don't bring it up unless they do first.",
      "For safety concerns: ask the person directly first — 'I'm worried about you. Can we talk about getting help?' Only escalate to others if they refuse AND the danger is real and imminent.",
      "When unsure if something is a secret: ask. 'Is this something you'd rather I keep between us?' Simple, direct, and shows you care.",
      "Create a 'secret audit' habit: periodically check — am I holding anything that's weighing on me? If so, journal about it or talk to a therapist.",
      "Know your legal/ethical obligations: some professions (teachers, therapists, doctors) are mandated reporters. Personal friendships have no such mandate, but moral responsibility exists."
    ],
    watchOut: [
      "Using 'I was just concerned' to justify sharing a Tier 1 or 2 secret that wasn't a safety issue",
      "Applying safety exceptions too loosely: 'They drink too much' might warrant a conversation WITH them, not ABOUT them to others",
      "Weaponizing someone's secret in an argument: 'Well at least I didn't [thing they confided]' — this is friendship homicide",
      "Assuming you know what tier a secret belongs to without asking — when in doubt, treat it as sacred"
    ],
    quote: "Three can keep a secret, if two of them are dead.",
    quoteAuthor: "Benjamin Franklin"
  },
  {
    id: "vault-reputation",
    name: "Building a Vault Reputation",
    tagline: "How to become the person everyone trusts with everything",
    icon: "🏛️",
    color: "#7a6b4e",
    overview: "Some people are known as 'the vault' — the person you can tell anything to and know it goes nowhere. This isn't just a personality type; it's a deliberately cultivated reputation with compounding returns. Social psychology research shows that trust reputation spreads through networks faster than any other social signal. Being 'the vault' doesn't just improve individual friendships — it transforms your entire social position, making you a central, valued node in your community.",
    keyInsights: [
      "Network effects of trust: word spreads. When two friends independently discover you kept both their secrets, your reputation multiplies. Trust is the most viral social currency.",
      "The 'vault' paradox: the more secrets you keep, the more people confide in you, the more social power you have — but the power comes from NEVER using it",
      "Research on social capital (Robert Putnam): high-trust individuals have larger networks, better career opportunities, and higher reported life satisfaction",
      "Trust reputation is fragile and binary: you're either trusted or you're not. There's no 'kinda trusted.' One betrayal resets your reputation across the entire network.",
      "People test you before sharing big secrets: small confidences ('don't tell anyone but I'm thinking about X') are trial runs. Pass them and bigger secrets follow.",
      "Vault reputation compounds over decades: the most trusted people in any community got there through years of consistent behavior, not one dramatic act of loyalty"
    ],
    practicalTips: [
      "The verbal declaration: tell people explicitly — 'I don't repeat things told to me in confidence.' This sets the expectation and reminds YOU of your commitment.",
      "Pass the small tests: when someone shares minor gossip and asks you not to spread it — don't. These small moments are where reputation is built.",
      "When someone asks about a mutual friend's situation, practice: 'That's their story to tell — you should ask them directly.' Do this consistently and people notice.",
      "Don't even HINT: avoiding names but clearly describing someone ('so I know someone who...') is a paper-thin disguise. Everyone in the circle knows who you mean.",
      "Resist the 'bonding through gossip' trap: if a new friendship is built primarily on discussing other people's business, what do you think they say about you?",
      "Model it publicly: when someone starts gossiping in a group, gently redirect. 'I don't think they'd want us talking about this.' It's rare, it's powerful, and people remember it.",
      "The vault extends to digital: don't screenshot private conversations. Don't forward DMs. Don't share someone's social media posts that were meant for a limited audience."
    ],
    watchOut: [
      "Using your vault status as leverage: 'I know things about you' (even implied) is manipulation, not trust",
      "Burnout: being everyone's confidant is emotionally taxing. You need your own vault too — a therapist, a partner, a journal",
      "Vault reputation doesn't mean doormat reputation: you can keep secrets AND have boundaries about what emotional labor you take on",
      "Thinking vault = passive: sometimes being trustworthy means actively checking in — 'How's that thing you told me about going?'"
    ],
    quote: "Whoever is careless with the truth in small matters cannot be trusted with important matters.",
    quoteAuthor: "Albert Einstein"
  },
  {
    id: "when-to-break",
    name: "When to Break a Confidence",
    tagline: "The hardest judgment call in any friendship — and how to get it right",
    icon: "🚨",
    color: "#9e5b5b",
    overview: "The hardest part of secret-keeping is knowing when NOT to. If a friend confides that they're being abused, self-harming, or planning something dangerous, silence isn't loyalty — it's complicity. But the line isn't always clear. Research on 'duty to warn' ethics (originating from the landmark Tarasoff v. Regents case, 1976) provides frameworks that extend beyond professional settings. The key principle: when keeping a secret puts someone at risk of serious harm, the obligation to protect outweighs the obligation to keep confidence.",
    keyInsights: [
      "The Tarasoff principle (1976): when someone's safety is at risk, the duty to protect overrides the duty to keep confidence. Originally for therapists, but the moral logic applies to everyone.",
      "Clear break-confidence situations: active self-harm, suicidal ideation with a plan, child/elder abuse, domestic violence, credible threats to harm others",
      "Gray area situations: substance abuse, disordered eating, risky behavior, legal trouble. These usually warrant talking TO the person first, not ABOUT them to others.",
      "Research on suicide prevention: asking directly ('Are you thinking about suicide?') does NOT increase risk — it actually reduces it by showing the person they're not alone (Columbia Protocol)",
      "The 'last resort' principle: before telling others, exhaust options with the person directly. 'I care about you and I'm scared. Can we talk about getting help?'",
      "False positives vs false negatives: the cost of unnecessarily breaking confidence (damaged trust) is real but recoverable. The cost of keeping a dangerous secret (someone gets hurt) may not be."
    ],
    practicalTips: [
      "The safety test: 'If I keep this secret, could someone be seriously harmed — including the person who told me?' If yes, you have a moral obligation to act.",
      "Go to THEM first, always: 'What you told me scares me. I want to help. Can we figure this out together?' This respects their autonomy while expressing care.",
      "If they refuse help and danger is real: tell the minimum number of people necessary. A parent, a counselor, a hotline. Not the friend group.",
      "After breaking confidence for safety: be honest about what you did and why. 'I told [person] because I was afraid for you. I'd rather you be angry at me than hurt.'",
      "Know your resources: save the Suicide Prevention Lifeline (988), Crisis Text Line (text HOME to 741741), and local domestic violence hotline. Having them ready means you can act quickly.",
      "Document if needed: in serious situations (abuse, threats), keeping a written record of what was said and when can be important later.",
      "Prepare for the fallout: they may be angry. That's okay. Prioritize their safety over their comfort and yours. True friendship sometimes means being the bad guy temporarily."
    ],
    watchOut: [
      "Using 'concern' as a cover for gossip: be brutally honest with yourself — are you acting out of genuine fear for their safety, or do you just want to share something dramatic?",
      "Overreacting to normal struggles: someone going through a breakup or a bad week doesn't need you alerting their family. Use proportional judgment.",
      "Telling the WRONG person: if their family is the source of the problem, don't tell the family. Choose the disclosure target carefully.",
      "Assuming professionals will fix everything: getting help is the first step, not the last. Stay involved and supportive after disclosure.",
      "Guilt spiraling if you chose wrong: these decisions are genuinely hard. If you acted out of care with the best information you had, that's enough — even if the outcome isn't perfect."
    ],
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    quoteAuthor: "Martin Luther King Jr."
  },
  {
    id: "digital-secrets",
    name: "Secrets in the Digital Age",
    tagline: "Screenshots last forever and group chats have no walls",
    icon: "📱",
    color: "#5b7a6e",
    overview: "Digital communication has fundamentally changed the secret-keeping landscape. A whispered conversation disappears; a text message lives forever. Screenshots can be forwarded in seconds. Group chats blur the line between private and semi-public. Social media creates new categories of accidental exposure. Research from the Pew Research Center (2023) found that 42% of teens and 28% of adults have had private digital communications shared without their consent. The old rules of secret-keeping still apply — but the consequences of failure are amplified, permanent, and potentially global.",
    keyInsights: [
      "Digital secrets are fundamentally different: spoken words fade, but texts/DMs/photos create permanent, shareable, screenshot-able records",
      "42% of teens and 28% of adults have had private digital messages shared without consent (Pew Research, 2023)",
      "The 'screenshot economy': private messages are increasingly treated as content to be shared for entertainment, social capital, or revenge",
      "Group chat dynamics: sharing something in a 5-person group chat is NOT the same as telling one person. Each member has their own judgment about what's shareable.",
      "Metadata matters: even if you don't share the content, sharing that someone MESSAGED you about a topic can betray their confidence",
      "'Disappearing' messages (Snapchat, Instagram) create a false sense of security — screenshots exist, and screen recording is trivial"
    ],
    practicalTips: [
      "Never screenshot private conversations. Ever. If you wouldn't photocopy a handwritten letter and pass it around, don't screenshot a DM.",
      "Before sharing anything digitally, apply the 'forward test': imagine this message forwarded to the person it's about. Would you be comfortable?",
      "Be careful in group chats: information shared there spreads at the speed of the largest group member's network. Treat it as semi-public.",
      "Don't vague-post: 'Some people really can't be trusted 🙄' on social media is a betrayal even without names. Your mutual friends know exactly who you mean.",
      "Use voice calls or in-person meetings for truly sensitive conversations. No paper trail, no screenshots, just trust.",
      "If someone shares a private message with you (screenshot of someone else's DM), recognize that this person will probably do the same with YOUR messages. Adjust trust accordingly.",
      "Review your 'audience' before posting: Instagram close friends, Twitter followers, Facebook friends — make sure private references don't leak to unintended audiences"
    ],
    watchOut: [
      "The 'it's just a screenshot to one person' fallacy — that person can forward it too, and they will",
      "Read receipts as pressure: knowing someone 'saw' a vulnerable message and didn't respond feels like rejection. Be responsive when someone shares something private digitally.",
      "Cloud storage risks: your photos, messages, and files may be synced to services that could be hacked, subpoenaed, or shared through a compromised account",
      "Revenge sharing: if a friendship ends badly, you still have an obligation not to share their secrets. Confidences don't expire with the friendship."
    ],
    quote: "The internet never forgets.",
    quoteAuthor: "Common wisdom, increasingly relevant"
  }
];
