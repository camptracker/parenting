export interface DisagreeSection {
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

export const disagreeSections: DisagreeSection[] = [
  {
    id: "why-it-matters",
    name: "Why Disagreement Matters",
    tagline: "Conflict isn't the enemy — contempt is",
    icon: "💡",
    color: "#5b8a72",
    overview: "Most people think good relationships mean no fighting. The research says the opposite. The Gottman Institute studied 3,000+ couples over 40 years and found that couples who NEVER argue are more likely to break up than those who argue well. Conflict is how you discover boundaries, deepen understanding, and build real trust. A 2012 study in the Journal of Social and Personal Relationships found that friends who navigate conflict constructively develop deeper trust and intimacy than those who never disagree. The danger isn't disagreement — it's HOW you disagree.",
    keyInsights: [
      "Gottman's research: couples/friends who argue well report HIGHER satisfaction than those who avoid conflict entirely",
      "Conflict avoidance leads to resentment buildup — think of it as emotional debt that compounds with interest",
      "The healthiest relationships have a 5:1 ratio of positive to negative interactions (Gottman). Conflict is fine — contempt is not",
      "Psychologist Daniel Goleman's emotional intelligence research: how you handle friction IS the relationship, not a side effect of it",
      "Avoiding all disagreement teaches people their real opinions aren't welcome — it's a form of emotional dishonesty",
      "Studies show teams that argue constructively outperform 'harmonious' teams on complex problem-solving (Jehn, 1995)"
    ],
    practicalTips: [
      "Reframe disagreement mentally: it's not a fight, it's information exchange between people who trust each other enough to be honest",
      "Start small — practice disagreeing on low-stakes topics (movies, restaurants, sports) to build the muscle",
      "After a productive disagreement, name it: 'I'm glad we could talk about that honestly' — this reinforces that conflict is safe",
      "Notice when you're swallowing your real opinion to 'keep the peace' — that peace is fake and it erodes over time"
    ],
    watchOut: [
      "Confusing 'never fighting' with 'healthy relationship' — silence can be more toxic than raised voices",
      "Avoiding disagreement because of childhood experiences where conflict meant danger — therapy can help rewire this",
      "Performative agreement ('yeah totally!') when you actually disagree — it's dishonest and people can usually tell"
    ],
    quote: "The measure of a first-rate intelligence is the ability to hold two opposing ideas in mind at the same time and still retain the ability to function.",
    quoteAuthor: "F. Scott Fitzgerald"
  },
  {
    id: "the-science",
    name: "The Science of Heated Moments",
    tagline: "Your brain literally can't think straight when you're angry",
    icon: "🧠",
    color: "#6a7f9e",
    overview: "When an argument gets heated, your body enters 'diffuse physiological arousal' (DPA) — Gottman's term for the fight-or-flight state triggered by social threat. Your heart rate spikes above 100 BPM, cortisol floods your system, blood flow shifts from your prefrontal cortex (rational thinking) to your amygdala (survival instincts). In this state, your capacity for empathy drops by up to 50%, your ability to process complex information tanks, and your brain starts interpreting neutral statements as hostile. This is why arguments escalate — you're literally not the same person when you're flooded.",
    keyInsights: [
      "Physiological flooding: heart rate >100 BPM during conflict = empathy and rational thought drop dramatically. You're in survival mode, not problem-solving mode",
      "The amygdala hijack (Goleman, 1995): your emotional brain reacts 5x faster than your rational brain. You say things before your prefrontal cortex can intervene",
      "Cortisol stays elevated for 20+ minutes after flooding. This is why 'just calm down' doesn't work — your body chemistry needs time to reset",
      "fMRI studies (Eisenberger et al., Science 2003): social rejection activates the same brain regions (anterior cingulate cortex) as physical pain. Harsh words literally hurt",
      "The 'negativity bias': during conflict, your brain gives 5x more weight to negative information than positive. One insult erases five compliments",
      "Cognitive reappraisal (reframing) is 3x more effective than suppression (stuffing it down) for managing conflict emotions (Gross, 2002, Stanford)"
    ],
    practicalTips: [
      "Learn your flooding signals: racing heart, clenched jaw, hot face, racing thoughts. These mean it's time to pause, not push harder",
      "The 6-second pause: it takes ~6 seconds for your prefrontal cortex to catch up to your amygdala. One deep breath buys you that time",
      "Request a 20-minute break when flooded: 'I care about this conversation and I need 20 minutes to cool down.' This is backed by cortisol clearance research",
      "During the break: do something physical (walk, stretch) or soothing (music, deep breathing). Don't rehearse arguments — that keeps cortisol elevated",
      "Practice 'cognitive reappraisal' in real-time: instead of 'they're attacking me,' try 'they feel strongly about this because they care'",
      "Name the emotion out loud: 'I'm feeling defensive right now.' Lieberman's UCLA research shows that labeling emotions reduces their intensity by up to 50%"
    ],
    watchOut: [
      "Trying to 'push through' flooding — you can't logic your way out of a neurochemical state",
      "Using 'I need a break' as a power move or punishment — the intent should be genuine de-escalation, not stonewalling",
      "Drinking alcohol before/during difficult conversations — it impairs prefrontal cortex function further",
      "Texting when heated: you lose tone, body language, and the natural pacing that prevents escalation"
    ],
    quote: "Speak when you are angry and you will make the best speech you will ever regret.",
    quoteAuthor: "Ambrose Bierce"
  },
  {
    id: "gottman-horsemen",
    name: "The Four Horsemen (& Antidotes)",
    tagline: "Gottman's research on exactly what destroys relationships — and the fix for each",
    icon: "🛡️",
    color: "#a0645b",
    overview: "Dr. John Gottman identified four communication patterns that predict relationship failure with 93% accuracy. He called them the 'Four Horsemen of the Apocalypse.' They are: Criticism (attacking character), Contempt (expressing superiority/disgust), Defensiveness (playing the victim), and Stonewalling (shutting down completely). The good news: each horseman has a research-backed antidote. Learning to recognize and counter these patterns is the single most impactful thing you can do for any relationship.",
    keyInsights: [
      "CRITICISM: 'You always forget things. You're so selfish.' Attacks WHO the person is, not WHAT they did. Different from a complaint ('I was upset when you forgot').",
      "CONTEMPT: eye-rolling, mockery, sarcasm, name-calling. Communicates disgust and superiority. The SINGLE most destructive behavior — predicts relationship failure AND weakens the recipient's immune system (Gottman, 2003).",
      "DEFENSIVENESS: 'It's not my fault! You're the one who...' Deflects responsibility and escalates conflict. It tells the other person their feelings don't matter.",
      "STONEWALLING: withdrawing, going silent, shutting down. Usually a response to flooding (see: science section). Communicates 'you're not worth responding to.' 85% of stonewallers are men (Gottman).",
      "Contempt is built on a foundation of unresolved resentment — it's the result of ignored smaller issues compounding over time",
      "These patterns are HABITS, not personality traits. They can be unlearned with awareness and practice"
    ],
    practicalTips: [
      "ANTIDOTE TO CRITICISM → Gentle startup: use 'I feel [emotion] about [specific situation]' instead of 'You are [character attack].' Focus on the behavior, not the person.",
      "ANTIDOTE TO CONTEMPT → Build a culture of appreciation. Actively look for things to respect/admire/thank. Contempt can't coexist with genuine fondness. Daily gratitude for the other person rewires the habit.",
      "ANTIDOTE TO DEFENSIVENESS → Take responsibility for even a small part: 'You're right, I could have handled that better.' This de-escalates instantly because the other person feels heard.",
      "ANTIDOTE TO STONEWALLING → Self-soothe and return. Say 'I'm feeling overwhelmed — I need 20 minutes, but I WILL come back to this.' The key is the commitment to return.",
      "Track which horseman you default to — most people have a 'go-to.' Awareness is 80% of the fix.",
      "When you spot a horseman in yourself mid-conversation, name it: 'I realize I'm being defensive right now. Let me try again.' This is repair, and it's magic."
    ],
    watchOut: [
      "Contempt disguised as humor: 'I'm just kidding!' after a cutting remark. If they didn't laugh, it wasn't a joke.",
      "Thinking defensiveness is the same as 'explaining yourself' — if your 'explanation' deflects all responsibility, it's defensiveness",
      "Subtle stonewalling: being physically present but mentally checked out (scrolling phone, giving one-word answers)",
      "Using the Four Horsemen framework as a weapon: 'You're being contemptuous right now!' mid-argument just adds fuel"
    ],
    quote: "It's not that successful relationships have no conflict. It's that they handle conflict in a gentle, positive way.",
    quoteAuthor: "Dr. John Gottman"
  },
  {
    id: "techniques",
    name: "Techniques That Actually Work",
    tagline: "Concrete scripts and frameworks for disagreeing with grace",
    icon: "🛠️",
    color: "#7b8a5e",
    overview: "Theory is great, but in the heat of the moment, you need actual words. These are battle-tested techniques from conflict resolution research, cognitive behavioral therapy, and negotiation science (Harvard Program on Negotiation). Each one gives you a concrete tool you can use the next time a disagreement starts going sideways.",
    keyInsights: [
      "STEEL-MANNING: argue the STRONGEST version of their point before presenting yours. 'So your view is X because of Y, and I can see why that makes sense. Here's where I see it differently...' This builds massive trust.",
      "THE FBI TECHNIQUE (active listening): Mirror → Label → Paraphrase. Repeat their last 3 words (mirror), name the emotion ('sounds like you're frustrated'), then summarize ('so what you're saying is...'). From Chris Voss's Never Split the Difference.",
      "NONVIOLENT COMMUNICATION (Marshall Rosenberg): Observation → Feeling → Need → Request. 'When X happens, I feel Y, because I need Z. Would you be willing to...?'",
      "THE XYZ STATEMENT: 'When you did X in situation Y, I felt Z.' Specific, non-judgmental, actionable. No character attacks, no generalizations.",
      "SOCRATIC QUESTIONING: instead of stating your disagreement, ask questions that help them examine their own position. 'What led you to that conclusion?' 'Have you considered...?'",
      "THE DISAGREEMENT HIERARCHY (Paul Graham): from weakest to strongest — name-calling → ad hominem → tone argument → contradiction → counterargument → refutation → refuting the central point. Aim for the top three."
    ],
    practicalTips: [
      "Script: 'I hear you saying [mirror]. That makes sense because [validate]. Here's what I see differently: [your view]. What am I missing?' — This one sentence covers listening, validating, and disagreeing.",
      "Script: 'We might just see this differently, and that's okay. I don't need you to agree with me — I just want you to understand where I'm coming from.'",
      "Script: 'I think you're right about [specific thing]. And I think [your point]. Both can be true.'",
      "Script: 'I notice I'm getting defensive. Can we slow down? I want to actually hear what you're saying.'",
      "The 'two truths' technique: before responding, find two things that are TRUE in their position. Forces you out of zero-sum thinking.",
      "Write it out first for sensitive topics: drafting your thoughts catches cheap shots and helps separate emotion from argument",
      "End with connection, not victory: 'I'm glad we can disagree and still be good.' This reinforces that the relationship survives conflict.",
      "The 'curious reporter' mindset: pretend you're interviewing them for a story. Your job is to understand their view, not defeat it."
    ],
    watchOut: [
      "Using techniques manipulatively — people can tell when you're running a script on them vs genuinely engaging",
      "Over-relying on one framework for every situation — a work disagreement needs different tools than a fight with your best friend",
      "Technique without sincerity is just manipulation with better vocabulary",
      "Forgetting that sometimes the best technique is simply: 'You're right. I was wrong.'"
    ],
    quote: "Seek first to understand, then to be understood.",
    quoteAuthor: "Stephen Covey"
  },
  {
    id: "repair",
    name: "Repair After the Damage",
    tagline: "It's not about never messing up — it's about what you do next",
    icon: "🩹",
    color: "#8b7a5e",
    overview: "Even with the best tools, you'll sometimes say something you regret. Research shows the ability to REPAIR after conflict is more important than avoiding the conflict in the first place. Gottman found that 69% of relationship problems are perpetual (they never get fully 'solved'), so the ability to return to baseline after friction is the real skill. A sincere repair attempt can actually leave a relationship STRONGER than before the conflict — psychologists call this 'post-traumatic growth' in relationships.",
    keyInsights: [
      "Repair attempts are the #1 predictor of relationship success — not the absence of conflict, but the ability to recover from it (Gottman, 1999)",
      "A genuine apology has 6 components (Lazare, 2004): acknowledgment, explanation (not excuse), expression of remorse, offer of repair, commitment to change, and request for forgiveness",
      "The 'pratfall effect': people who admit mistakes are seen as MORE likeable, not less (Aronson, 1966). Vulnerability after conflict builds trust.",
      "'Post-conflict growth': relationships that survive well-handled disagreements report increased trust, deeper understanding, and clearer boundaries",
      "Timing matters: research shows the ideal repair window is within 24 hours. After 72 hours, resentment starts to calcify",
      "Written apologies can be more effective for serious issues — they show effort and can be referenced later as proof of accountability"
    ],
    practicalTips: [
      "The immediate repair: 'I came in too hot. Let me try that again.' Works mid-conversation and signals self-awareness.",
      "The full repair: 'I said [specific thing]. That was wrong because [why]. I'm sorry. What I should have said was [better version].'",
      "Don't over-apologize — 'I'm sorry' 15 times loses meaning. One sincere, specific apology beats a dozen vague ones.",
      "Ask 'What do you need from me right now?' instead of deciding for them what would fix it",
      "Follow through on commitments made during repair. Broken repair promises are worse than the original offense.",
      "The 24-hour check-in: after a resolved disagreement, reach out the next day. 'Hey, I've been thinking about our conversation. Are we good?'",
      "If you were wrong, say it plainly: 'I was wrong.' Three words. No qualifiers. It's disarming and rare and people never forget it."
    ],
    watchOut: [
      "The non-apology: 'I'm sorry you feel that way' or 'I'm sorry IF I hurt you.' These are deflections, not apologies.",
      "Rushing repair because YOU feel uncomfortable, not because they're ready. Give them space to process first.",
      "Expecting instant forgiveness after apologizing — repair is a process, not a transaction",
      "Using 'I already apologized!' as a weapon when the issue resurfaces. If it keeps coming up, the repair wasn't complete."
    ],
    quote: "An apology is a lovely perfume; it can transform the clumsiest moment into a gracious gift.",
    quoteAuthor: "Margaret Lee Runbeck"
  },
  {
    id: "hard-topics",
    name: "Tackling the Hard Topics",
    tagline: "Politics, money, religion — the conversations everyone avoids and everyone needs",
    icon: "🔥",
    color: "#9e6b6b",
    overview: "Some topics feel like minefields: politics, religion, money, parenting choices, lifestyle differences. The instinct is to avoid them entirely ('let's not go there'). But research from Difficult Conversations (Stone, Patton, Heen — Harvard Negotiation Project) shows that avoided topics don't disappear — they create invisible walls that limit how deep a friendship can go. The key is having a framework that makes it SAFE to disagree on charged topics without destroying the relationship.",
    keyInsights: [
      "Harvard's Difficult Conversations framework: every hard conversation is really three conversations — the 'What Happened' story, the Feelings conversation, and the Identity conversation ('what does this say about me?')",
      "Political disagreements feel so personal because political views are tied to identity and values, not just opinions. You're not attacking their policy position — you're (perceived as) attacking who they are.",
      "Jonathan Haidt's 'Moral Foundations Theory': liberals and conservatives literally weight moral values differently (care vs authority, fairness vs loyalty). Neither is wrong — they're different operating systems.",
      "The 'backfire effect': presenting someone with facts that contradict their beliefs can actually STRENGTHEN those beliefs (Nyhan & Reifler, 2010). Logic alone doesn't change minds.",
      "Curiosity is the antidote to judgment. Asking 'What experience led you to that view?' produces understanding. 'How can you possibly think that?' produces defensiveness.",
      "Research shows we overestimate how much we disagree: Americans think the 'other side' is more extreme than it actually is by 50-100% (More in Common, 2018)"
    ],
    practicalTips: [
      "Set the container first: 'I want to talk about something we might disagree on. I value our friendship more than being right. Can we go there?'",
      "Ask about experiences, not positions: 'What shaped your view on this?' produces 10x better conversation than 'Why do you think X?'",
      "The 'percentage' technique: 'I'm about 70% sure about my view on this — what's your percentage?' This builds in humility for both sides.",
      "Find the shared value underneath the disagreement: you both care about fairness, safety, or freedom — you just prioritize differently",
      "Know your limits: 'I don't think we're going to agree on this, but I'm glad I understand where you're coming from' is a perfectly fine ending",
      "Separate the person from the party/group: your friend is not a representative of their entire political/religious/cultural group",
      "The 48-hour rule for charged topics: if something might be hurtful, sit on it for 48 hours. If you still feel it needs to be said, say it carefully."
    ],
    watchOut: [
      "Avoiding ALL hard topics = shallow friendships. The goal is to engage safely, not to avoid forever.",
      "Treating your view as 'objective fact' while theirs is 'just an opinion'",
      "Dunking on someone's beliefs to feel intellectually superior — you win the argument but lose the friend",
      "Assuming bad intent: 'They only think that because they're [stupid/brainwashed/selfish]' — almost never true",
      "The gotcha trap: stockpiling counterarguments while they're talking instead of actually listening",
      "Social media arguments: the absolute worst venue for disagreement. No tone, no nuance, and there's an audience incentivizing performance over connection"
    ],
    quote: "In my walks, every man I meet is my superior in some way, and in that I learn from him.",
    quoteAuthor: "Ralph Waldo Emerson"
  }
];
