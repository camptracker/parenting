export interface FriendshipTopic {
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

export const friendshipTopics: FriendshipTopic[] = [
  {
    id: "why-friends",
    name: "Why Make Friends",
    tagline: "The science is clear — friendships literally keep you alive",
    icon: "💛",
    color: "#c4a03c",
    overview: "The Harvard Study of Adult Development (75+ years) found one thing matters most for health and happiness: the quality of your relationships. Loneliness is as deadly as smoking 15 cigarettes a day. People with strong social ties have 50% greater survival rates. Friendships aren't optional — they're a health intervention.",
    keyInsights: [
      "Loneliness increases mortality risk by 26% — comparable to obesity",
      "Strong friendships reduce cortisol, lower blood pressure, and boost immune function",
      "People with 3+ close friends report significantly higher life satisfaction",
      "Social connection is the #1 predictor of happiness — above income, career, or fame",
      "The 'friendship recession' is real: Americans report 50% fewer close friends than in 1990",
      "Quality matters far more than quantity — one deep friendship outweighs 50 acquaintances"
    ],
    practicalTips: [
      "Audit your social health like you'd audit your physical health",
      "Schedule regular connection — don't wait for it to happen organically",
      "Prioritize in-person time; digital connection is supplement, not substitute",
      "Invest in friendships during good times, not just crises"
    ],
    watchOut: [
      "Using busyness as a permanent excuse to avoid social investment",
      "Believing you 'don't need people' — evolution disagrees",
      "Confusing social media followers with actual friends",
      "Waiting until loneliness becomes a crisis before acting"
    ],
    quote: "Good relationships keep us happier and healthier. Period.",
    quoteAuthor: "Robert Waldinger, Harvard Study of Adult Development"
  },
  {
    id: "how-to-make",
    name: "How to Make Friends",
    tagline: "Proximity + repetition + vulnerability = friendship",
    icon: "🤝",
    color: "#7b8f4e",
    overview: "Friendship isn't magic — it follows predictable patterns. Sociologist Rebecca Adams identified three conditions: proximity (physical closeness), repeated unplanned interactions, and a setting that encourages vulnerability. Adults struggle because post-school life removes all three. The fix: engineer these conditions back into your life.",
    keyInsights: [
      "It takes ~50 hours to go from acquaintance → casual friend, ~200 hours → close friend",
      "The 'mere exposure effect': we like people more simply by being around them repeatedly",
      "Shared activities > shared backgrounds for building connection",
      "Asking for small favors (the Ben Franklin effect) builds rapport faster than doing favors",
      "Most adult friendships form through: work, hobbies, neighborhoods, kids' activities, or faith communities",
      "Initiative is everything — the person who reaches out first usually wins"
    ],
    practicalTips: [
      "Join a recurring group (sports league, book club, volunteer crew) — repetition is key",
      "Be the organizer — create events, invite people, suggest plans",
      "Follow the 48-hour rule: follow up within 2 days of meeting someone interesting",
      "Ask real questions: 'What are you excited about right now?' beats 'What do you do?'",
      "Suggest specific plans, not vague 'we should hang out sometime'",
      "Show up consistently — 80% of friendship-building is just being there"
    ],
    watchOut: [
      "Expecting instant deep connection — friendship takes time",
      "Only trying to befriend people who are 'useful' to you",
      "Giving up after one declined invitation — people are busy, not disinterested",
      "Being passive and waiting for others to initiate everything"
    ],
    quote: "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one.'",
    quoteAuthor: "C.S. Lewis"
  },
  {
    id: "intentional",
    name: "Being Intentional",
    tagline: "Friendships don't maintain themselves — treat them like a practice",
    icon: "🎯",
    color: "#b07040",
    overview: "Most friendships die from neglect, not conflict. After school, friendship requires deliberate effort. The best friend-keepers treat connection like a habit: they schedule it, protect it, and prioritize it alongside work and family. Intentionality is what separates acquaintances from lifelong bonds.",
    keyInsights: [
      "The #1 reason adult friendships fade: 'I got busy' — not conflict or betrayal",
      "Ritualized connection (weekly calls, monthly dinners) outlasts spontaneous plans",
      "Vulnerability deepens friendships faster than shared activities alone",
      "Friendships need both 'maintenance' (checking in) and 'deepening' (real talk)",
      "The 'front porch' effect: create low-barrier ways for friends to enter your life",
      "Saying 'I value this friendship' out loud is powerful and rare"
    ],
    practicalTips: [
      "Put friend dates on your calendar like appointments — they ARE appointments",
      "Create rituals: weekly walk, monthly dinner, annual trip",
      "Text a friend something specific you appreciate about them — today",
      "Share something real when asked 'how are you?' instead of 'fine'",
      "Batch social planning: pick one day/month to schedule the next month's hangouts",
      "When a friend is going through something, set a reminder to check in again in a week"
    ],
    watchOut: [
      "Over-scheduling to the point where friend time feels like another obligation",
      "Only reaching out when YOU need something",
      "Confusing being busy with being important",
      "Letting perfect be the enemy of good — a 15-min call beats months of silence"
    ],
    quote: "The ultimate test of a relationship is to disagree but to hold hands.",
    quoteAuthor: "Alexandra Penney"
  },
  {
    id: "philosophies",
    name: "Philosophies of Friendship",
    tagline: "From Aristotle to Dunbar — frameworks for thinking about connection",
    icon: "📚",
    color: "#6b7fa0",
    overview: "Thinkers have wrestled with friendship for millennia. Aristotle identified three types: utility (mutual benefit), pleasure (shared enjoyment), and virtue (deep mutual admiration). Robin Dunbar's research suggests our brains can handle ~150 relationships, but only ~5 intimate ones. These frameworks help you understand what you have and what you're building toward.",
    keyInsights: [
      "Aristotle's 3 types: utility friends (co-workers), pleasure friends (drinking buddies), virtue friends (soul-deep). Most are type 1 or 2 — and that's fine",
      "Dunbar's layers: 5 intimate → 15 close → 50 friends → 150 acquaintances. Each layer requires different investment",
      "Stoic view: a true friend is 'another self' — choose friends who make you better",
      "Buddhist view: friendships should reduce suffering, not create attachment and expectation",
      "Modern research: 'social convoys' — your inner circle changes over time, and that's healthy",
      "Friendship is asymmetric: studies show only 50% of friendships are reciprocal"
    ],
    practicalTips: [
      "Map your friendships to Dunbar's layers — where are the gaps?",
      "Don't force all friendships to be 'virtue' friendships — utility and pleasure friends matter too",
      "Apply Aristotle's test: does this friendship make both of us better people?",
      "Accept that some friendships are seasonal — not every connection needs to be forever",
      "Cultivate friends across contexts (work, hobby, neighborhood) for resilience"
    ],
    watchOut: [
      "Judging 'lesser' friendships as not worth having",
      "Expecting one friend to fill every role (therapist + adventure buddy + confidant)",
      "Over-intellectualizing connection instead of just showing up",
      "Keeping toxic friendships out of loyalty to history"
    ],
    quote: "In poverty and other misfortunes of life, true friends are a sure refuge. They keep the young out of mischief; they comfort and aid the old.",
    quoteAuthor: "Aristotle"
  },
  {
    id: "gender",
    name: "Male vs Female Friendships",
    tagline: "Side-by-side vs face-to-face — both valid, both needed",
    icon: "⚡",
    color: "#8b6b8f",
    overview: "Research consistently shows structural differences in how men and women tend to build friendships. Men often bond 'shoulder-to-shoulder' through shared activities. Women often bond 'face-to-face' through conversation and emotional disclosure. Neither is superior — but understanding the patterns helps everyone build better connections.",
    keyInsights: [
      "Men's friendships: often activity-based (sports, gaming, projects). Emotional intimacy expressed through loyalty, presence, and banter rather than direct conversation",
      "Women's friendships: often conversation-based. Higher emotional disclosure, more frequent contact, more verbal affection",
      "Men report fewer close friends on average (2-3 vs 3-5 for women) and are more likely to name their partner as their only confidant",
      "The 'male loneliness epidemic': men are increasingly isolated, with friendship quality declining faster than women's",
      "Cultural pressure: men face stigma around emotional vulnerability with other men ('that's gay/weird')",
      "These are trends, not rules — many men crave deep emotional connection and many women prefer activity-based bonds"
    ],
    practicalTips: [
      "Men: try adding a 5-minute real check-in before/after activities with friends",
      "Women: try adding more shared activities alongside conversation",
      "Everyone: be the friend who normalizes asking 'how are you, really?'",
      "Challenge the idea that emotional depth requires hours of talking — a single honest sentence counts",
      "Create spaces where vulnerability is safe — fishing trips, long drives, walks",
      "If your partner is your only close friend, that's a risk — diversify your support network"
    ],
    watchOut: [
      "Using gender norms as an excuse not to grow ('guys just don't talk about feelings')",
      "Dismissing activity-based bonding as 'not real friendship'",
      "Assuming all men/women fit the pattern — individuals vary enormously",
      "Ignoring the loneliness crisis because it feels uncomfortable to discuss"
    ],
    quote: "Men's friendships are like cactuses — they don't need much water, but they absolutely need some, or they die.",
    quoteAuthor: "Billy Baker, We Need to Hang Out"
  },
  {
    id: "evolution",
    name: "How Friendships Evolve",
    tagline: "Each decade reshuffles the deck — expect it, plan for it",
    icon: "🔄",
    color: "#5e8c7a",
    overview: "Friendships shift dramatically across life stages. Childhood friends share proximity. Teen friends share identity exploration. In your 20s, friends are everywhere. Then marriage, kids, and career create the 'friendship recession' of your 30s. Understanding these patterns helps you navigate transitions without losing connection entirely.",
    keyInsights: [
      "Childhood (5-12): friendships based on proximity and play. 'Best friends' change weekly — that's normal",
      "Teens (13-19): friends become identity mirrors. Peer influence peaks. Friendships feel life-or-death because socially, they are",
      "20s: golden age of friendship. Time, energy, proximity. Friend groups form around shared experiences (college, first jobs, city life)",
      "30s: the great pruning. Marriage, kids, career compress social time. Average Americans lose 2 close friends per decade after 25",
      "40s+: quality over quantity crystallizes. People invest in fewer, deeper friendships. New friendships become harder but more intentional",
      "Major transitions (divorce, job loss, moving) can both destroy and create friendship opportunities"
    ],
    practicalTips: [
      "In your 20s: invest heavily — these friendships can last decades if maintained",
      "When you marry/partner: protect friend time. Don't let coupledom absorb everything",
      "With young kids: befriend other parents, but don't lose non-parent friends",
      "After a move: join 3 groups in the first month. Momentum matters",
      "In your 40s+: be the initiator. Everyone's waiting for someone else to make plans",
      "Across all ages: name the transition. 'This is hard, I miss hanging out' is powerful"
    ],
    watchOut: [
      "Assuming 'real friends' survive any neglect — even the best friendships need tending",
      "Dropping all friends when entering a new relationship",
      "Using kids as a reason to never socialize (kids benefit from seeing parents with friends)",
      "Nostalgia-trapping: only looking backward instead of making new friends now"
    ],
    quote: "At every stage of life, friendship is available — but it takes different forms, and if you only look for the old form, you'll miss the new one.",
    quoteAuthor: "Lydia Denworth, Friendship"
  },
  {
    id: "emotion",
    name: "Emotion & Friendships",
    tagline: "Your attachment style shapes every friendship you have",
    icon: "🧠",
    color: "#a07050",
    overview: "How you handle emotions determines how your friendships function. Attachment theory (secure, anxious, avoidant) doesn't just apply to romance — it shapes how you show up for friends, handle conflict, and tolerate closeness. Emotional intelligence is the invisible infrastructure of every good friendship.",
    keyInsights: [
      "Secure attachment: comfortable with closeness AND independence. Can handle conflict without catastrophizing or withdrawing",
      "Anxious attachment: fears abandonment. May over-text, read into silences, need constant reassurance from friends",
      "Avoidant attachment: uncomfortable with closeness. May ghost, keep people at arm's length, dismiss the need for friends",
      "You can have different attachment patterns with different friends",
      "Conflict handled well actually DEEPENS friendships — repair after rupture builds trust",
      "Emotional contagion is real: your friends' moods affect yours (and vice versa) up to 3 degrees of separation"
    ],
    practicalTips: [
      "Learn your attachment style — it explains 80% of your friendship frustrations",
      "When hurt by a friend: express it directly. 'When you did X, I felt Y' > silent resentment",
      "Practice the 'repair conversation': acknowledge the rupture, take responsibility, express care",
      "Build emotional vocabulary — 'I'm fine' is almost never true or helpful",
      "If you're avoidant: challenge yourself to reach out once a week even when you don't 'feel like it'",
      "If you're anxious: wait 24 hours before assuming a slow text reply means rejection"
    ],
    watchOut: [
      "Avoiding all conflict — unspoken resentment kills more friendships than arguments do",
      "Dumping emotions on friends without ever asking about theirs",
      "Using your attachment style as a permanent excuse ('I'm just avoidant, that's who I am')",
      "Expecting friends to be therapists — friends support, professionals treat"
    ],
    quote: "The friend who can be silent with us in a moment of despair or confusion, who can stay with us in an hour of grief, is the friend who cares.",
    quoteAuthor: "Henri Nouwen"
  },
  {
    id: "disagree-kindly",
    name: "Disagreeing Without Being Mean",
    tagline: "You can hold your ground without scorching the earth",
    icon: "🕊️",
    color: "#5b8a72",
    overview: "Disagreement is inevitable in any real friendship — and it's actually healthy. Research from the Gottman Institute (40+ years, 3,000+ couples studied) shows that contempt — not anger — is the single biggest predictor of relationship destruction, with 93% accuracy. Meanwhile, friendships where people argue well report HIGHER satisfaction than those who avoid conflict entirely. The goal isn't to eliminate disagreement — it's to fight fair, stay curious, and protect the person even when you reject their idea. Psychologist Daniel Goleman's work on emotional intelligence confirms: how you handle friction IS the relationship. A 2012 study in the Journal of Social and Personal Relationships found that friends who navigate conflict constructively develop deeper trust and intimacy than those who never disagree at all.",
    keyInsights: [
      "Contempt — not anger — is the #1 relationship killer (Gottman's 'Four Horsemen': criticism, contempt, defensiveness, stonewalling). Anger says 'I disagree.' Contempt says 'You're beneath me.' Even eye-rolling alone predicts relationship failure.",
      "The 'softened startup' matters: how you BEGIN a disagreement predicts how it ends 96% of the time. 'I feel...' vs 'You always...' changes everything (Gottman, 1999, The Seven Principles for Making Relationships Work).",
      "Most arguments aren't about being right — they're about feeling heard. Neuroscience shows the brain's threat response deactivates when someone feels understood (UCLA, Lieberman 2007 — 'affect labeling' reduces amygdala activation).",
      "Your brain treats social rejection like physical pain — fMRI studies show the same brain regions (anterior cingulate cortex) light up for both. A harsh word during disagreement literally, neurologically hurts (Eisenberger et al., Science 2003).",
      "The 5:1 ratio: Gottman found stable relationships maintain at least 5 positive interactions for every 1 negative one. During conflict, even small moments of warmth (a touch, a joke, a nod) keep the ratio healthy.",
      "'Steel-manning' (arguing the STRONGEST version of their point before presenting yours) builds massive trust. Philosophers call this the 'principle of charity.' It signals you actually listened and still disagree — which is far more persuasive than strawmanning.",
      "Cognitive reappraisal (reframing the situation) is more effective than suppression (stuffing emotions down). People who reframe during arguments show lower cortisol, lower blood pressure, and better outcomes (Gross, 2002, Stanford).",
      "The Dunning-Kruger effect applies to arguments: the less you know about a topic, the more certain you feel. Intellectual humility — 'I might be wrong about this' — is correlated with higher intelligence and stronger relationships.",
      "Physiological flooding: when your heart rate exceeds ~100 BPM during an argument, your capacity for empathy and rational thought drops dramatically. Gottman calls this 'diffuse physiological arousal' — your body is in fight-or-flight, not problem-solving mode."
    ],
    practicalTips: [
      "Lead with curiosity: 'Help me understand why you see it that way' before launching your counterpoint. Curiosity physiologically lowers defensiveness in both people — it's hard to feel attacked by a genuine question.",
      "Use 'I' statements: 'I see it differently' lands completely differently than 'You're wrong.' It keeps ownership with you and avoids triggering their threat response.",
      "Separate the person from the position — attack the idea, never the character. 'That argument doesn't hold up because...' vs 'You're being stupid' is the difference between growth and permanent damage.",
      "The 6-second pause: when heated, pause before responding. It takes ~6 seconds for your prefrontal cortex (rational brain) to catch up to your amygdala (fight-or-flight). Count silently or take a breath.",
      "Acknowledge what's valid FIRST, then diverge: 'I think you're right that X, and I see Y differently.' This 'yes, and' approach disarms defensiveness and proves you actually listened.",
      "Name the shared goal: 'We both want what's best here, we just disagree on how to get there.' This reframes the conflict as collaborative problem-solving, not adversarial combat.",
      "If you catch yourself getting mean, stop and say 'Let me restart that — I came in too hot.' Gottman calls this 'repair,' and it's the #1 skill that separates healthy relationships from toxic ones.",
      "Know your exits: 'I need 20 minutes to cool down, then let's come back to this.' It takes 20+ minutes for cortisol to clear your system. Pushing through while flooded makes everything worse.",
      "Mirror their words back: 'So what I'm hearing is...' This forces active listening and makes them feel understood before you respond. It also catches misunderstandings early.",
      "Ask 'What would change your mind?' — and answer it for yourself too. If nothing could change either mind, you're not arguing, you're performing.",
      "Use the 'newspaper test': before saying something harsh, imagine it printed as a headline. Would you be embarrassed? Then rephrase.",
      "After the disagreement, circle back: 'Are we good?' or 'I'm glad we could talk about that.' Checking in shows the relationship matters more than being right.",
      "Practice disagreeing on LOW-stakes topics first (movies, food, sports). This builds the muscle for when it actually matters.",
      "Write it out first if the topic is sensitive. Drafting your thoughts helps you separate emotion from argument and catch cheap shots before they leave your mouth."
    ],
    watchOut: [
      "Tone-policing: telling someone they're 'too emotional' instead of engaging with their point. This dismisses their experience and escalates every time — it says 'your feelings are invalid.'",
      "Passive aggression disguised as politeness: 'No offense, but...' or 'I mean, if you really think that...' or 'Interesting take.' These are stealth insults and everyone sees through them.",
      "Kitchen-sinking: bringing up old arguments to 'win' the current one. Stay on topic. Dragging in history means you haven't processed past conflicts — deal with those separately.",
      "Weaponizing silence — stonewalling is Gottman's 4th Horseman. It communicates 'you're not worth responding to.' If you need space, SAY 'I need space' — the silence itself isn't the problem, the refusal to communicate is.",
      "Thinking 'I was just being honest' excuses cruelty. Honesty without compassion is just brutality with better branding. You can be direct AND kind — they're not mutually exclusive.",
      "Competing to win instead of communicating to understand. Ask yourself: 'Do I want to be right, or do I want to keep this friend?' You rarely get both by fighting dirty.",
      "The 'calm voice' power play: speaking in a deliberately calm, condescending tone while the other person is upset can be more infuriating than yelling. It's a dominance move disguised as maturity.",
      "Public disagreements: calling someone out in front of others adds humiliation to the mix. Praise in public, critique in private. Always.",
      "The 'just joking' escape hatch: saying something mean and retreating behind humor when called out. If they didn't laugh, it wasn't a joke.",
      "Catastrophizing: 'You ALWAYS do this' or 'You NEVER listen.' Always/never statements are almost never true and immediately put someone on the defensive."
    ],
    quote: "Between stimulus and response there is a space. In that space is our freedom and our power to choose our response.",
    quoteAuthor: "Viktor Frankl"
  },
  {
    id: "keeping-secrets",
    name: "Keeping Secrets & Why It Matters",
    tagline: "Trust is built in drops and lost in buckets",
    icon: "🤫",
    color: "#6a5f8e",
    overview: "When a friend confides in you, they're handing you something fragile — their trust. A 2019 study in the Journal of Personality and Social Psychology found that the ability to keep confidences is the single most cited trait of a 'best friend' across 53 countries. Gossip feels good in the moment — it literally triggers a dopamine release, activating the same reward pathways as sugar and social media likes — but the long-term cost is catastrophic. Once you're known as someone who can't keep a secret, people stop telling you real things. And without real things, you don't have real friendships. Evolutionary psychologist Robin Dunbar notes that gossip originally served a social bonding function in early human groups (replacing grooming), but in modern friendships, betraying a confidence activates deep-seated betrayal detection systems that are extremely hard to reset.",
    keyInsights: [
      "Trustworthiness is the #1 trait people look for in close friends — above humor, loyalty, shared interests, or even kindness (Delphi study across 53 nations, 2019). Without trust, nothing else matters.",
      "Gossip activates the brain's reward system (ventral striatum, same as gambling/sugar). This is why it's so tempting — sharing secrets gives you a neurochemical hit. Recognizing this makes it easier to resist.",
      "The 'spontaneous trait transference' effect: when you tell someone about another person's secret, the listener subconsciously associates those traits with YOU. Talk about someone being untrustworthy → they see you as untrustworthy (Skowronski et al., 1998).",
      "The 'vault effect': being known as someone who keeps secrets makes people confide in you MORE, deepening ALL your friendships. It becomes a self-reinforcing reputation — the most trusted people get the most trust.",
      "Trust recovery is asymmetric: it takes 5-20 positive trust-building interactions to recover from a single betrayal. Psychologists call this the 'negativity bias in trust' — one violation outweighs many positive acts (Slovic, 1993).",
      "Secret-keeping has a physiological cost: research by Michael Slepian (Columbia, 2017) found that holding secrets increases stress hormones — but the stress comes from the CONCEALMENT (actively hiding it), not the secret itself. Having a safe outlet matters.",
      "There's a critical difference between secrets (someone's private information) and safety concerns (someone is in danger). Knowing which is which is a moral skill, not a betrayal.",
      "Anthropologist Robin Dunbar found gossip makes up ~65% of human conversation. The skill isn't eliminating gossip entirely — it's knowing the line between social bonding chat ('did you hear Sarah got promoted?') and confidence betrayal ('Sarah told me she's thinking of leaving her husband').",
      "Children learn secret-keeping around age 5-7, and those who develop it earlier show stronger social bonds throughout life. It's a foundational social skill, not just a nice-to-have."
    ],
    practicalTips: [
      "Default rule: if someone tells you something personal, assume it's private unless they explicitly say you can share it. 'Can I tell people?' should be YOUR question, not theirs to preempt.",
      "When tempted to share gossip, apply the 'standing here' test: 'Would I say this if they were standing next to me?' If no, it stays with you.",
      "Practice the redirect: when someone fishes for info about a mutual friend, say 'That's really their story to tell — you should ask them.' This earns respect from both sides.",
      "If you accidentally slip, own it IMMEDIATELY — tell the person whose secret it was before they hear it from someone else. The cover-up is always worse than the crime.",
      "Never use someone's vulnerability as ammunition — in arguments, bringing up something confided in a vulnerable moment is a friendship extinction event. It teaches them to never be honest with you again.",
      "Create a verbal identity: 'I don't repeat things told to me in confidence.' Say it out loud and often. People will start treating you as the vault, and that's powerful social capital.",
      "If a secret is weighing on you, journal about it or talk to a therapist — professional confidentiality gives you a safe outlet. Don't offload to another friend in the same social circle.",
      "The 'need to know' filter: before sharing any information about a friend, ask 'Does this person NEED to know this, or do I just WANT to tell them?' Want ≠ need.",
      "When someone starts telling you gossip about a mutual friend, you can gently say 'I'd rather not know — if they want me to know, they'll tell me.' This is rare and incredibly powerful.",
      "Recognize 'gossip bonding' for what it is: if a new friendship is built primarily on talking about other people, what do you think they say about YOU when you're not there?",
      "Teach kids early: model secret-keeping at home. If your child tells you something in confidence, honor it (safety exceptions aside). This builds their trust muscle for life.",
      "The 24-hour rule: if you hear something shocking and want to share it, wait 24 hours. The urgency to gossip fades quickly — the damage from gossip doesn't."
    ],
    watchOut: [
      "The 'I only told ONE person' trap — that person tells one person, who tells one person. Information theory: a secret shared with N people has ~N² exposure paths. One becomes everyone.",
      "Disguising gossip as concern: 'I'm just SO worried about them' while gleefully spilling their business. Ask yourself: are you helping them, or entertaining yourself?",
      "Vague-posting or hinting on social media: 'Some people just can't be trusted 🙄' — it's still a betrayal even without names. Everyone in the circle knows who you mean.",
      "Trading secrets as social currency: using other people's private information to feel included, important, or interesting in a group. It works short-term; it destroys long-term.",
      "Assuming couples/partners share everything — your friend told YOU, not their partner. Don't assume transmission rights you weren't given.",
      "The 'public information' rationalization: 'Well, they posted about it on Instagram' doesn't mean the private details they told you are fair game. Public and private are different layers.",
      "Alcohol + secrets = disaster. More confidences are broken at parties and dinners after drinks than any other context. Know your vulnerability and plan for it.",
      "The exception that proves the rule: if someone is in genuine danger (self-harm, abuse, addiction crisis), getting them help is NOT betrayal — it's the highest form of loyalty. Silence in the face of danger isn't keeping a secret; it's enabling harm."
    ],
    quote: "If you reveal your secrets to the wind, you should not blame the wind for revealing them to the trees.",
    quoteAuthor: "Kahlil Gibran"
  }
];
