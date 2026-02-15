export interface RomanticTopic {
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

export const romanticTopics: RomanticTopic[] = [
  {
    id: "love-languages",
    name: "Love Languages",
    tagline: "Speak your partner's language, not just your own",
    icon: "💬",
    color: "#c44060",
    overview: "Gary Chapman's 5 Love Languages framework identifies how people prefer to give and receive love: Words of Affirmation, Acts of Service, Receiving Gifts, Quality Time, and Physical Touch. Most conflicts arise not from lack of love, but from speaking different love languages. Understanding your partner's primary language transforms how you connect — you stop giving what YOU want and start giving what THEY need.",
    keyInsights: [
      "Most people have one primary and one secondary love language — rarely all five equally",
      "Your love language is often what you complain about most: 'You never say anything nice' → Words of Affirmation",
      "How you naturally express love reveals YOUR language, not necessarily your partner's",
      "Love languages can shift over life stages — a new parent may suddenly crave Acts of Service",
      "Children have love languages too — Chapman wrote a separate book on this",
      "Speaking the wrong language isn't failure — it's just a translation problem",
      "The 'love tank' metaphor: consistent small deposits matter more than grand gestures"
    ],
    practicalTips: [
      "Take the free quiz at 5lovelanguages.com together — discuss results without judgment",
      "For Words of Affirmation: leave notes, send specific compliments ('I admire how you handled that meeting')",
      "For Acts of Service: do a chore they hate without being asked — consistency beats grand gestures",
      "For Quality Time: put phones away, make eye contact, ask open-ended questions",
      "For Physical Touch: non-sexual touch matters hugely — hand on back, playing with hair, hugs",
      "For Gifts: it's about thoughtfulness, not price — 'I saw this and thought of you' is the magic phrase",
      "Practice speaking their language for 30 days straight before deciding if it 'works'"
    ],
    watchOut: [
      "Don't weaponize love languages: 'Well YOUR language is Gifts so you're materialistic'",
      "Love languages aren't an excuse to ignore other needs — they're a starting point, not the whole picture",
      "Beware using your own language as the only metric: 'I do so much for them!' while they're starving for quality time",
      "Love languages don't replace therapy for deeper issues like trauma or attachment wounds",
      "Don't assume your partner's language — ask them, observe them, let them tell you"
    ],
    quote: "Almost never do two people fall in love with the same love language.",
    quoteAuthor: "Gary Chapman"
  },
  {
    id: "communication",
    name: "Communication",
    tagline: "The difference between hearing and understanding is everything",
    icon: "🗣️",
    color: "#d4726a",
    overview: "Research consistently shows that communication quality is the #1 predictor of relationship satisfaction. Marshall Rosenberg's Nonviolent Communication (NVC) framework — Observation, Feeling, Need, Request — transforms blame into connection. Active listening means reflecting back what you hear, not planning your rebuttal. The goal of difficult conversations isn't to win — it's to understand.",
    keyInsights: [
      "Gottman can predict divorce with 94% accuracy by watching couples communicate for just 15 minutes",
      "The 'harsh startup' — beginning a conversation with criticism — predicts failure 96% of the time",
      "Bids for connection: small moments ('Look at that bird!') matter enormously — turning toward vs. away",
      "NVC pattern: 'When I see [observation], I feel [emotion], because I need [need]. Would you be willing to [request]?'",
      "Most arguments aren't about the topic — they're about feeling heard, respected, or valued",
      "Repair attempts (humor, touch, de-escalation) matter more than never fighting",
      "The 5:1 ratio: stable couples have 5 positive interactions for every negative one"
    ],
    practicalTips: [
      "Use 'I feel...' instead of 'You always...' — own your experience without blaming",
      "Practice the 'active listening loop': listen → reflect back → ask 'Did I get that right?' → let them correct",
      "Schedule 'State of the Union' weekly check-ins (Gottman method) — 20 min, no distractions",
      "When flooded (heart rate >100bpm), take a 20-minute break — you literally can't think clearly",
      "Ask 'What do you need right now — to vent, advice, or help solving this?' before jumping in",
      "Ban the words 'always' and 'never' from arguments — they escalate everything",
      "End difficult conversations with something you appreciate about the other person"
    ],
    watchOut: [
      "Stonewalling (shutting down completely) is one of the strongest divorce predictors — if you do this, learn to say 'I need a break but I'll come back'",
      "'I'm sorry you feel that way' is not an apology — it's dismissal wearing an apology costume",
      "Don't bring up past grievances in current arguments — fight about one thing at a time",
      "Texting serious topics is a trap — tone is invisible, misunderstandings multiply",
      "Avoid 'kitchen-sinking': throwing every unresolved issue into one argument",
      "'We need to talk' triggers fight-or-flight — try 'I'd love to discuss something when you have bandwidth'"
    ],
    quote: "Behind every criticism is a wish. Behind every complaint is a longing.",
    quoteAuthor: "John Gottman"
  },
  {
    id: "attachment-styles",
    name: "Attachment Styles",
    tagline: "Your childhood wiring shapes how you love — but you can rewire",
    icon: "🔗",
    color: "#a0527a",
    overview: "Attachment theory (Bowlby, Ainsworth, later Levine & Heller) shows that early caregiver relationships create internal 'working models' for all future relationships. The four styles — Secure, Anxious (Preoccupied), Avoidant (Dismissive), and Disorganized (Fearful-Avoidant) — predict how you handle intimacy, conflict, and vulnerability. About 50% of adults are securely attached. The good news: attachment styles are adaptable, especially with awareness and a secure partner.",
    keyInsights: [
      "Secure: comfortable with intimacy and independence — the gold standard, but not 'perfect'",
      "Anxious: fears abandonment, needs reassurance, hypervigilant to partner's mood shifts",
      "Avoidant: values independence, uncomfortable with closeness, 'deactivates' when things get intimate",
      "Disorganized: wants closeness but fears it — often linked to childhood trauma or inconsistent caregiving",
      "The anxious-avoidant trap: the most common and painful pairing — one pursues, the other withdraws, creating a cycle",
      "You can 'earn' secure attachment through therapy, self-awareness, and relationships with secure partners",
      "Attachment style activates under stress — you may seem secure when things are calm but anxious during conflict"
    ],
    practicalTips: [
      "Read 'Attached' by Levine & Heller — the most accessible intro to attachment in relationships",
      "If anxious: before texting again, ask 'Am I seeking reassurance or connection?' — learn to self-soothe first",
      "If avoidant: notice when you create distance after intimacy — practice staying present even when uncomfortable",
      "If disorganized: therapy (especially EMDR or somatic experiencing) can help process the underlying trauma",
      "Name your pattern to your partner: 'I notice I pull away when we get close — it's not about you'",
      "Create a 'security priming' ritual: photos of loved ones, journaling about positive relationship moments",
      "When triggered, identify the core fear: 'Am I afraid of abandonment or engulfment right now?'"
    ],
    watchOut: [
      "Don't use attachment styles as labels or excuses: 'I'm avoidant, that's just who I am' — styles are adaptable",
      "Online quizzes are starting points, not diagnoses — real understanding comes from reflection and professional guidance",
      "Anxious + avoidant pairings aren't doomed, but both partners need to actively work on their patterns",
      "Attachment style isn't destiny — it's a tendency that awareness and effort can shift over years",
      "Be careful not to pathologize normal needs: wanting closeness isn't 'anxious,' wanting space isn't 'avoidant'"
    ],
    quote: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
    quoteAuthor: "Carl Jung"
  },
  {
    id: "trust-intimacy",
    name: "Building Trust & Intimacy",
    tagline: "Trust is built in the smallest moments, not the grandest gestures",
    icon: "🤝",
    color: "#b8466a",
    overview: "Brené Brown's research shows trust is built through BRAVING: Boundaries, Reliability, Accountability, Vault (keeping confidences), Integrity, Non-judgment, and Generosity. Intimacy — 'into me you see' — requires vulnerability, which requires safety. Physical and emotional intimacy feed each other. Trust isn't a binary switch; it's a marble jar filled one small moment at a time.",
    keyInsights: [
      "Trust is built in micro-moments: remembering their coffee order, following through on small promises",
      "Brené Brown's 'marble jar' metaphor: trust accumulates through hundreds of small deposits",
      "Vulnerability is not weakness — it's the birthplace of connection, creativity, and belonging",
      "Emotional safety means your partner can share fears/failures without being judged, mocked, or punished",
      "Physical intimacy (not just sex) releases oxytocin — the bonding hormone that deepens attachment",
      "Betrayal trauma is real: broken trust rewires the nervous system — rebuilding requires patience and consistency",
      "The 'bid and respond' pattern: how you respond to small bids for attention predicts relationship health"
    ],
    practicalTips: [
      "Do what you say you'll do — reliability is the foundation of trust, full stop",
      "Share something vulnerable once a week: a fear, a childhood memory, something you're struggling with",
      "Practice the 'BRAVING' inventory: rate yourself honestly on each element quarterly",
      "Create rituals of connection: morning coffee together, evening walk, weekly date night",
      "After a trust breach: the repair process is — acknowledge, take responsibility, make amends, change behavior consistently over time",
      "Non-sexual physical touch daily: 6-second kiss (Gottman's recommendation), long hugs, hand-holding",
      "Ask '36 Questions to Fall in Love' (Arthur Aron's study) — works for deepening existing relationships too"
    ],
    watchOut: [
      "Trust rebuilt after betrayal is never the same trust — it's a new, different trust, and that's okay",
      "Forced vulnerability ('Tell me everything!') isn't intimacy — it's coercion. Let people share at their pace",
      "Don't confuse intensity with intimacy — dramatic highs and lows often signal insecurity, not deep connection",
      "If you constantly check their phone/location, the issue isn't their behavior — it's your anxiety or a real pattern you should address directly",
      "Physical intimacy without emotional safety becomes performative — address the emotional foundation first"
    ],
    quote: "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.",
    quoteAuthor: "Brené Brown"
  },
  {
    id: "conflict-resolution",
    name: "Conflict Resolution",
    tagline: "It's not about avoiding conflict — it's about fighting well",
    icon: "⚖️",
    color: "#c45a4a",
    overview: "John Gottman's 40+ years of research identified the 'Four Horsemen of the Apocalypse' — Criticism, Contempt, Defensiveness, and Stonewalling — as the strongest predictors of relationship failure. Contempt (eye-rolling, mockery, disgust) is the single most destructive behavior. The antidote isn't avoiding conflict but mastering repair attempts: humor, affection, de-escalation, and taking responsibility. Happy couples fight — they just fight differently.",
    keyInsights: [
      "The Four Horsemen: Criticism → Contempt → Defensiveness → Stonewalling (escalation ladder)",
      "Contempt is the #1 predictor of divorce — it communicates disgust and superiority",
      "Antidotes: Criticism → Gentle startup; Contempt → Build culture of appreciation; Defensiveness → Take responsibility; Stonewalling → Self-soothe",
      "69% of relationship conflicts are perpetual (unsolvable) — the goal is dialogue, not resolution",
      "Repair attempts (de-escalation during conflict) are the #1 predictor of relationship stability",
      "Physiological flooding (HR >100bpm) makes productive conversation impossible — take a break",
      "The 'dreams within conflict' approach: behind every gridlocked issue is an unfulfilled dream or value"
    ],
    practicalTips: [
      "Start soft: 'I feel frustrated about the dishes' vs. 'You NEVER clean up after yourself'",
      "Take responsibility for even a small part: 'You're right, I could have communicated that better'",
      "Use repair attempts: humor ('Can we start over?'), touch (reach for their hand), or acknowledgment ('I can see this matters to you')",
      "When flooding: say 'I need 20 minutes to calm down, but I promise I'll come back to this conversation'",
      "For perpetual problems: map each person's underlying dream/value, then find the overlap",
      "Create a 'fight contract': agreed-upon rules (no name-calling, no leaving mid-argument, etc.)",
      "After a fight: do a 'post-mortem' when calm — what triggered us, what could we do differently?"
    ],
    watchOut: [
      "Eye-rolling is contempt — if you catch yourself doing it, it's a major red flag to address",
      "'I'm sorry BUT...' negates the apology — separate the sorry from the explanation",
      "Silent treatment ≠ healthy space — say when you'll return to the conversation",
      "If you're keeping a mental scorecard of wrongs, resentment is building — address it now or it calcifies",
      "Chronic contempt may indicate the relationship needs professional intervention, not just better techniques",
      "Don't fight when hungry, tired, or drunk — HALT (Hungry, Angry, Lonely, Tired) applies to couples too"
    ],
    quote: "In marriage, it's not that successful couples don't fight. It's that they repair after fighting.",
    quoteAuthor: "John Gottman"
  },
  {
    id: "long-term",
    name: "Maintaining Long-Term Relationships",
    tagline: "Love is a verb — relationships need tending like gardens",
    icon: "🌱",
    color: "#8a6070",
    overview: "Esther Perel argues that modern relationships face an impossible ask: be my best friend, co-parent, intellectual equal, erotic partner, and emotional therapist. Long-term love requires intentionality. Gottman's research shows that 'turning toward' small bids for connection (vs. turning away) is the foundation. The spark doesn't maintain itself — it's deliberately kindled through novelty, appreciation, and continued curiosity about your partner.",
    keyInsights: [
      "Passion naturally declines after 18-24 months — this is neurochemistry (dopamine drop), not falling out of love",
      "Novel experiences together (not routine) reactivate the brain's reward system — adventure > comfort",
      "Gottman's 'Love Maps': deeply knowing your partner's inner world (dreams, fears, stressors) predicts lasting love",
      "Couples who maintain separate interests and friendships report higher satisfaction than enmeshed couples",
      "The 'microdose of appreciation': daily gratitude toward your partner rewires your brain to see the positive",
      "Sexual desire in long-term relationships requires psychological distance and mystery — you can't desire what you already have completely",
      "Growing apart isn't inevitable — it happens when you stop being curious about who your partner is becoming"
    ],
    practicalTips: [
      "Weekly date night — non-negotiable, phones off, no logistics talk. Novelty > routine (try new restaurants, activities)",
      "Update your 'Love Map' regularly: 'What are you worried about this week?' 'What are you excited about?'",
      "The 6-second kiss: Gottman's recommendation for daily connection — long enough to feel something",
      "Express appreciation daily — specific beats generic: 'I loved how you made our kid laugh at dinner' > 'You're great'",
      "Maintain your own identity: hobbies, friendships, goals that are yours alone",
      "Plan a yearly 'relationship review': what worked, what didn't, what do we want next year to look like?",
      "Try Esther Perel's question: 'Tell me something about yourself I don't yet know'"
    ],
    watchOut: [
      "Comfort ≠ complacency — taking each other for granted is the slow death of relationships",
      "Don't outsource all emotional needs to your partner — that's a recipe for codependency and burnout",
      "Comparison to social media relationships is toxic — you're seeing their highlight reel",
      "If you've stopped being curious about your partner, that's the first warning sign — not boredom, but apathy",
      "Scheduling intimacy sounds unromantic but works better than waiting for spontaneous desire (especially with kids)"
    ],
    quote: "The quality of your life ultimately depends on the quality of your relationships.",
    quoteAuthor: "Esther Perel"
  },
  {
    id: "philosophies",
    name: "Relationship Philosophies",
    tagline: "Frameworks for understanding what makes love work",
    icon: "📚",
    color: "#7a5a8a",
    overview: "Several major frameworks help decode romantic relationships. Gottman Method (research-based, focuses on friendship, conflict management, shared meaning). Attachment Theory (Bowlby/Ainsworth — how early bonds shape adult love). Esther Perel's work (balancing security and desire, eroticism in long-term love). Sternberg's Triangular Theory (love = intimacy + passion + commitment — different combinations create different love types). Each offers a lens; none is complete alone.",
    keyInsights: [
      "Gottman Method: built on 40+ years of observing 3,000+ couples — the most research-backed approach to relationships",
      "Gottman's Sound Relationship House: friendship → conflict management → shared meaning → trust & commitment",
      "Sternberg's Triangle: Consummate love requires all three — intimacy (closeness), passion (attraction), commitment (decision to stay)",
      "Esther Perel: desire needs mystery and distance — the paradox is that security can kill eroticism",
      "Attachment Theory: we unconsciously seek partners who confirm our internal working models — awareness breaks the cycle",
      "Sue Johnson's Emotionally Focused Therapy (EFT): identifies negative cycles and creates new patterns of secure bonding",
      "No single theory explains everything — the best approach combines insights from multiple frameworks"
    ],
    practicalTips: [
      "Read 'The Seven Principles for Making Marriage Work' (Gottman) — the essential relationship handbook",
      "Read 'Mating in Captivity' (Perel) for understanding desire in long-term relationships",
      "Read 'Attached' (Levine & Heller) for a practical guide to attachment styles",
      "Take the Gottman Relationship Checkup online — comprehensive assessment based on their research",
      "Discuss Sternberg's triangle with your partner: where are you strong? Where do you want to grow?",
      "Try EFT exercises: identify your negative cycle ('When I pursue, you withdraw, which makes me pursue harder')",
      "Explore your own family-of-origin patterns: what did you learn about love growing up?"
    ],
    watchOut: [
      "No framework replaces professional help for serious issues (abuse, addiction, chronic infidelity)",
      "Esther Perel's views on infidelity are controversial — don't use them to justify betrayal",
      "Attachment theory can become a crutch: 'I'm avoidant so I can't change' — the whole point is growth",
      "Reading about relationships isn't the same as working on them — knowledge without practice changes nothing",
      "Beware pop-psychology oversimplifications: real relationships are messier than any framework"
    ],
    quote: "The secret to a happy relationship is two people who choose each other every day.",
    quoteAuthor: "Robert Sternberg"
  },
  {
    id: "boundaries",
    name: "Boundaries & Independence",
    tagline: "Healthy love means two whole people — not two halves making a whole",
    icon: "🚧",
    color: "#6a7a5a",
    overview: "Boundaries are how you teach people to treat you. In romantic relationships, the line between closeness and enmeshment is crucial. Codependency — losing yourself in your partner's needs — isn't love, it's fear. Healthy relationships require two people who can stand alone but choose to stand together. Boundaries aren't walls; they're the container that makes intimacy safe.",
    keyInsights: [
      "Boundaries aren't about controlling others — they're about communicating what you will and won't accept",
      "Codependency: when your self-worth depends entirely on your partner's happiness or approval",
      "Enmeshment vs. intimacy: enmeshment means no individual identity; intimacy means deep knowing while maintaining self",
      "The 'differentiation' concept (David Schnarch): the ability to maintain your sense of self while being close to your partner",
      "People-pleasing in relationships leads to resentment — unexpressed needs don't disappear, they fester",
      "Healthy boundaries actually increase intimacy — when both people feel safe saying no, yes becomes meaningful",
      "Your partner is not responsible for your happiness — they can contribute to it, but the foundation is yours"
    ],
    practicalTips: [
      "Practice the boundary script: 'I love you AND I need [space/time/this boundary]. Both can be true.'",
      "Maintain at least one hobby, friendship circle, or goal that is entirely yours — not shared",
      "Check in: 'Am I doing this because I want to, or because I'm afraid of their reaction if I don't?'",
      "Learn to tolerate your partner's temporary disappointment — it doesn't mean you're failing them",
      "Schedule solo time: even introverted couples need breathing room",
      "If you notice you've abandoned all your interests for your partner's, that's a red flag — reclaim one this week",
      "Read 'Codependent No More' (Melody Beattie) if you recognize codependent patterns"
    ],
    watchOut: [
      "Using 'boundaries' to control: 'My boundary is you can't have friends' is not a boundary — it's manipulation",
      "Confusing independence with avoidance: refusing all vulnerability isn't strength, it's fear",
      "If your partner consistently violates stated boundaries, that's not a communication problem — it's a respect problem",
      "Codependency often feels like love ('I'd do ANYTHING for them') — but love with no self isn't love, it's addiction",
      "Don't mistake your partner's healthy boundaries as rejection — their 'no' to one thing isn't 'no' to you"
    ],
    quote: "Daring to set boundaries is about having the courage to love ourselves, even when we risk disappointing others.",
    quoteAuthor: "Brené Brown"
  },
  {
    id: "life-transitions",
    name: "Life Transitions Together",
    tagline: "Every transition is a chance to grow together — or apart",
    icon: "🔄",
    color: "#5a7a8a",
    overview: "Major life transitions — moving in, engagement, marriage, having children, career upheaval, loss — are relationship stress tests. Research shows that 67% of couples experience significant relationship decline after their first child. Career changes shift power dynamics. Loss and grief can either bond you or isolate you. The key is navigating transitions as a team: communicating expectations, renegotiating roles, and giving grace during the adjustment period.",
    keyInsights: [
      "Moving in together: the #1 source of conflict is unspoken expectations about chores, space, and routines",
      "The transition to parenthood is the biggest relationship stressor — Gottman's research shows 67% of couples see satisfaction drop",
      "Career changes shift identity and power dynamics — the person whose career is 'secondary' often harbors resentment",
      "Grief is not linear and partners grieve differently — expecting your partner to grieve your way causes isolation",
      "Financial stress is the #1 cited reason for divorce — have money conversations early, often, and without judgment",
      "Each transition requires renegotiating the 'relationship contract': roles, expectations, and priorities shift",
      "Couples who frame transitions as 'us vs. the problem' (not 'me vs. you') fare dramatically better"
    ],
    practicalTips: [
      "Before moving in: have explicit conversations about chores, finances, alone time, guests, and conflict resolution",
      "Before kids: take a couples class on the transition to parenthood (Gottman's 'Bringing Baby Home' is research-backed)",
      "During career changes: explicitly discuss how roles/responsibilities will shift — don't assume",
      "In grief: say 'I don't know what to say but I'm here' — don't try to fix their pain",
      "Create a 'transition plan' for major changes: what will be hard, who does what, how to check in",
      "Financial transparency: joint account for shared expenses, individual accounts for autonomy — find your system",
      "Revisit your 'why' during hard transitions: why are you together? What are you building?"
    ],
    watchOut: [
      "Don't make major relationship decisions (marriage, divorce, kids) during acute stress or grief — wait for stability",
      "The 'sunk cost' trap: staying because of years invested, not because the relationship is healthy",
      "Having a baby to fix a relationship makes things exponentially harder, not better — fix the foundation first",
      "Unequal sacrifice breeds resentment: if one person always compromises their career/dreams, it will surface eventually",
      "Comparing your transition to others' ('They seem fine with a newborn!') ignores that every couple's experience is unique",
      "If you can't navigate small transitions together (moving, adopting a pet), that's data about bigger ones"
    ],
    quote: "A good marriage is one in which each partner appoints the other to be the guardian of their solitude.",
    quoteAuthor: "Rainer Maria Rilke"
  }
];
