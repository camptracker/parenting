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
    overview: "Disagreement is inevitable in any real friendship — and it's actually healthy. The problem isn't the disagreement itself, it's how we handle it. Research from the Gottman Institute shows that contempt (eye-rolling, sarcasm, dismissiveness) is the single biggest predictor of relationship destruction. The goal isn't to avoid conflict — it's to fight fair, stay curious, and protect the person even when you reject their idea.",
    keyInsights: [
      "Contempt — not anger — is the #1 relationship killer. Anger says 'I disagree.' Contempt says 'You're beneath me.'",
      "The 'softened startup' matters: how you BEGIN a disagreement predicts how it ends 96% of the time (Gottman research)",
      "Most arguments aren't about being right — they're about feeling heard. Address the emotion before the logic.",
      "Your brain treats social rejection like physical pain (fMRI studies). A harsh word literally hurts.",
      "People remember HOW you made them feel long after they forget WHAT the argument was about",
      "'Steel-manning' (arguing the strongest version of their point before presenting yours) builds massive trust and respect"
    ],
    practicalTips: [
      "Lead with curiosity: 'Help me understand why you see it that way' before launching your counterpoint",
      "Use 'I' statements: 'I see it differently' hits completely different than 'You're wrong'",
      "Separate the person from the position — attack the idea, never the character",
      "Pause before responding when heated. A 6-second pause lets your prefrontal cortex catch up to your amygdala",
      "Acknowledge what's valid in their view first, THEN share where you diverge",
      "Name the shared goal: 'We both want X, we just disagree on how to get there'",
      "If you catch yourself getting mean, stop and say 'Let me restart that — I came in too hot'",
      "Know your exits: 'I need 10 minutes to cool down' is mature, not weak"
    ],
    watchOut: [
      "Tone-policing: telling someone they're 'too emotional' instead of engaging with their point",
      "Passive aggression disguised as politeness: 'No offense, but...' or 'I mean, if you really think that...'",
      "Bringing up old arguments to 'win' the current one — stay on topic",
      "Weaponizing silence — stonewalling is just aggression in a quieter font",
      "Thinking 'I was just being honest' excuses cruelty — honesty and kindness aren't opposites",
      "Competing to win instead of communicating to understand"
    ],
    quote: "Between stimulus and response there is a space. In that space is our freedom and our power to choose our response.",
    quoteAuthor: "Viktor Frankl"
  }
];
