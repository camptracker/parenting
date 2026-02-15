export interface ParentingStyle {
  id: string;
  name: string;
  tagline: string;
  founder: string;
  era: string;
  tags: string[];
  color: string;
  what: string;
  why: string;
  how: string[];
  when: string;
  pros: string[];
  cons: string[];
  risks: string[];
  quote: string;
  quoteAuthor: string;
}

export const styles: ParentingStyle[] = [
  {
    id: "attachment",
    name: "Attachment Parenting",
    tagline: "Build unbreakable bonds through closeness & responsiveness",
    founder: "Dr. William & Martha Sears",
    era: "1990s",
    tags: ["child-led", "nurturing", "infancy-focused"],
    color: "#6b9e7a",
    what: "Focuses on nurturing physical and emotional closeness between parent and child. Built on Bowlby's attachment theory and the '7 Baby B's': birth bonding, breastfeeding, babywearing, bedding close, belief in baby's cry, balance, and beware of baby trainers.",
    why: "Secure attachment in infancy creates emotionally healthy adults. Responsive caregiving teaches children the world is safe and their needs matter.",
    how: ["Responsive feeding on demand", "Co-sleeping or room-sharing", "Babywearing throughout the day", "Immediate response to crying", "Skin-to-skin contact", "Extended breastfeeding"],
    when: "Birth through toddlerhood primarily; core principles extend through childhood.",
    pros: ["Strong parent-child bond", "Emotional security for child", "Associated with secure attachment style", "Responsive to child's needs"],
    cons: ["Can be exhausting for parents", "Heavy burden on primary caregiver", "May limit early independence", "Can strain partnerships"],
    risks: ["Parental burnout", "Codependency if taken to extremes", "Guilt if unable to follow all principles"],
    quote: "Wear your baby, watch your baby, and respond to your baby.",
    quoteAuthor: "Dr. William Sears"
  },
  {
    id: "authoritative",
    name: "Authoritative Parenting",
    tagline: "The research-backed gold standard: warm but firm",
    founder: "Diana Baumrind",
    era: "1960s",
    tags: ["research-backed", "balanced", "all-ages", "gold-standard"],
    color: "#5b8fa8",
    what: "High warmth combined with high expectations. Clear rules with explanations. Democratic but parent retains final authority. Consistently produces the best outcomes in developmental research.",
    why: "Children need both structure AND emotional support. Explaining reasoning builds internalized values rather than blind obedience.",
    how: ["Set clear expectations with reasons", "Consistent, fair consequences", "Active listening and validation", "Encourage independence within boundaries", "Warm and responsive communication", "Adapt rules as children grow"],
    when: "All ages — adapts from toddlerhood through teens. Widely considered the gold standard by researchers.",
    pros: ["Best outcomes across studies", "Higher self-esteem in children", "Better social skills", "Lower depression and anxiety", "Better academic performance"],
    cons: ["Requires significant time and energy", "Hard to maintain consistency", "Can feel slow vs. authoritarian approach"],
    risks: ["Minimal — most research-backed approach", "Can slide into permissiveness if boundaries aren't maintained"],
    quote: "The authoritative parent attempts to direct the child's activities in a rational, issue-oriented manner.",
    quoteAuthor: "Diana Baumrind"
  },
  {
    id: "montessori",
    name: "Montessori Parenting",
    tagline: "Follow the child — independence through prepared environments",
    founder: "Dr. Maria Montessori",
    era: "Early 1900s",
    tags: ["child-led", "independence", "all-ages", "research-backed"],
    color: "#4a7c59",
    what: "Child-led learning in carefully prepared environments. Respects the child as a capable, independent being with natural developmental drives and 'sensitive periods' of learning.",
    why: "Given the right environment, children teach themselves. Intrinsic motivation beats external rewards. Practical life skills build confidence and competence.",
    how: ["Prepared environment with child-sized everything", "Follow the child's interests", "Practical life skills from early age", "Freedom within clear limits", "Limit screen time, prioritize hands-on", "Outdoor play and nature connection"],
    when: "Birth onwards. Especially powerful ages 0–6 (absorbent mind period). Extends through adolescence.",
    pros: ["Fosters independence and self-reliance", "Builds intrinsic motivation", "Develops concentration and focus", "Cultivates love of learning", "Practical life skills"],
    cons: ["Can be expensive (materials, schools)", "Requires significant home preparation", "Less structured academics may worry some"],
    risks: ["May struggle in traditional school settings", "Potential lack of structure if misapplied"],
    quote: "The greatest sign of success for a teacher is to be able to say, 'The children are now working as if I did not exist.'",
    quoteAuthor: "Maria Montessori"
  },
  {
    id: "rie",
    name: "RIE Parenting",
    tagline: "Respect infants as whole people — observe more, intervene less",
    founder: "Magda Gerber",
    era: "1970s",
    tags: ["child-led", "respectful", "infancy-focused"],
    color: "#8b7355",
    what: "Resources for Infant Educarers. Treats infants as competent people from birth. Emphasizes minimal intervention, maximum observation, and respectful caregiving routines.",
    why: "Babies are whole people deserving respect. Uninterrupted play builds problem-solving skills. Over-helping creates dependency.",
    how: ["Narrate actions before doing them", "Allow free, uninterrupted play", "Avoid containers (bouncers, walkers)", "Observe before intervening", "Make caregiving routines quality time", "Trust the child's competence"],
    when: "Birth through toddlerhood primarily. Core principles of respect extend through childhood.",
    pros: ["Builds resilience and self-reliance", "Secure attachment through respect", "Reduces parental anxiety", "Encourages problem-solving"],
    cons: ["Counter-intuitive for many parents", "Can feel cold to outsiders", "Limited research base vs. other methods"],
    risks: ["May be misinterpreted as neglect", "Requires understanding nuance of 'not intervening'"],
    quote: "Do less, observe more, enjoy most.",
    quoteAuthor: "Magda Gerber"
  },
  {
    id: "gentle",
    name: "Gentle Parenting",
    tagline: "Empathy, respect, and boundaries — without punishment",
    founder: "Sarah Ockwell-Smith",
    era: "2010s",
    tags: ["nurturing", "all-ages", "empathy-first"],
    color: "#7ba69e",
    what: "Partnership-based parenting using empathy, respect, understanding, and boundaries — without punishment. Focuses on connection over correction and co-regulation of emotions.",
    why: "Children learn best through connection, not correction. Punishment teaches fear, not values. Emotional regulation is learned through co-regulation with a calm adult.",
    how: ["Validate emotions before addressing behavior", "Set firm boundaries with empathy", "Natural consequences over punishment", "No yelling, spanking, or time-outs", "Model the behavior you want to see", "Connect before you correct"],
    when: "All ages. Particularly effective with toddlers and young children navigating big emotions.",
    pros: ["Strong emotional intelligence", "Better parent-child relationship", "Teaches self-regulation", "Reduces power struggles"],
    cons: ["Can be exhausting", "Easily misunderstood as permissive", "Hard to maintain under stress", "Social pressure from others"],
    risks: ["Can slide into permissiveness without clear boundaries", "Parental burnout from emotional labor"],
    quote: "Gentle parenting is not about being perfect. It's about being aware.",
    quoteAuthor: "Sarah Ockwell-Smith"
  },
  {
    id: "positive-discipline",
    name: "Positive Discipline",
    tagline: "Kind AND firm — focus on solutions, not punishment",
    founder: "Jane Nelsen",
    era: "1980s",
    tags: ["research-backed", "balanced", "all-ages", "practical"],
    color: "#c4a77d",
    what: "Based on Alfred Adler's psychology. Kind AND firm simultaneously. Focuses on solutions over punishment. Misbehavior reflects mistaken goals: attention, power, revenge, or inadequacy.",
    why: "Children do better when they feel better. Address the root cause of misbehavior rather than just the symptoms. Mutual respect builds cooperation.",
    how: ["Hold regular family meetings", "Use curiosity: 'What happened? What did you learn?'", "Logical consequences tied to behavior", "Encourage effort, don't just praise results", "Connection before correction", "Focus on solutions together"],
    when: "Ages 3+ through teens. Family meetings work especially well school-age and up.",
    pros: ["Teaches real life skills", "Builds mutual respect", "Reduces power struggles", "Practical, actionable toolkit", "Well-researched foundation"],
    cons: ["Requires paradigm shift for many parents", "Initial learning curve", "Can feel permissive to authoritarian-raised parents"],
    risks: ["Inconsistent application confuses children", "Works best when both parents are on board"],
    quote: "Where did we ever get the crazy idea that in order to make children do better, first we have to make them feel worse?",
    quoteAuthor: "Jane Nelsen"
  },
  {
    id: "free-range",
    name: "Free-Range Parenting",
    tagline: "Age-appropriate independence in a statistically safer world",
    founder: "Lenore Skenazy",
    era: "2008",
    tags: ["independence", "school-age", "counter-cultural"],
    color: "#7da87a",
    what: "Giving children age-appropriate independence and unsupervised time. Pushes back against overprotective culture with evidence that the world is statistically safer than ever.",
    why: "Over-protection stunts development. Children need risk, boredom, and problem-solving to grow. Resilience comes from navigating real challenges.",
    how: ["Gradually increase independence", "Allow unsupervised outdoor play", "Let children walk to school/park", "Teach safety skills rather than restrict", "Resist the urge to hover", "Trust your child's growing competence"],
    when: "School-age onwards. Graduated independence based on demonstrated maturity.",
    pros: ["Builds confidence and resilience", "Develops problem-solving skills", "Reduces childhood anxiety", "Teaches real-world navigation"],
    cons: ["Legal gray areas vary by state", "Social judgment from other parents", "Genuine safety concerns in some areas"],
    risks: ["Legal issues (CPS reports for perceived neglect)", "Child may face situations beyond ability", "Requires good judgment about readiness"],
    quote: "Our kids are not in constant danger. The crime rate today is back to what it was in 1963.",
    quoteAuthor: "Lenore Skenazy"
  },
  {
    id: "helicopter",
    name: "Helicopter Parenting",
    tagline: "⚠️ Well-intentioned hovering with unintended consequences",
    founder: "Haim Ginott (coined term)",
    era: "1969 / modern phenomenon",
    tags: ["cautionary", "over-involved", "all-ages"],
    color: "#d4886b",
    what: "Over-involved parenting — constant hovering, controlling, and solving problems for children. Not a recommended philosophy but a widely recognized pattern driven by love and anxiety.",
    why: "Driven by fear of failure, danger, or discomfort for the child. Amplified by competitive culture, social media, and 24/7 news cycles.",
    how: ["Constant monitoring of activities", "Intervening in peer conflicts", "Doing homework or projects for child", "Calling teachers and coaches", "Not allowing age-appropriate risks", "Managing child's social life"],
    when: "Can occur at any age. Often intensifies during school years and extends into college ('lawnmower parents').",
    pros: ["Children are physically safe", "Parents stay informed", "May boost short-term academic performance"],
    cons: ["Anxiety and depression in children", "Poor coping skills", "Entitlement", "Reduced resilience", "Strained teen relationship"],
    risks: ["Adults who can't function independently", "Increased mental health issues", "Damaged long-term parent-child relationship"],
    quote: "Helicopter parenting is not love. It's anxiety dressed up as love.",
    quoteAuthor: "Julie Lythcott-Haims"
  },
  {
    id: "tiger",
    name: "Tiger Parenting",
    tagline: "Strict discipline and academic excellence through high expectations",
    founder: "Amy Chua (popularized)",
    era: "2011",
    tags: ["strict", "achievement-focused", "cultural"],
    color: "#c97a4b",
    what: "Strict, achievement-focused parenting emphasizing academic excellence, discipline, and filial piety. Rooted in Confucian values of hard work and sacrifice.",
    why: "Hard work, discipline, and sacrifice lead to success. Children's potential must be actively pushed to be realized. Nothing is fun until you're good at it.",
    how: ["Strict academic expectations", "Hours of daily practice (music, math)", "Limited playdates and sleepovers", "Very limited screen time", "Parent chooses extracurriculars", "High standards with clear consequences"],
    when: "Early childhood through high school. Particularly intense during school years.",
    pros: ["High academic achievement", "Strong discipline and work ethic", "Mastery of skills", "Cultural pride and connection"],
    cons: ["High stress and anxiety in children", "Strained relationships", "Reduced creativity", "Risk of rebellion"],
    risks: ["Depression and anxiety", "Mental health crises in extreme cases", "Children who achieve but feel empty", "Damaged parent-child bond"],
    quote: "What Chinese parents understand is that nothing is fun until you're good at it.",
    quoteAuthor: "Amy Chua"
  },
  {
    id: "conscious",
    name: "Conscious Parenting",
    tagline: "Transform yourself first — your child is your greatest teacher",
    founder: "Dr. Shefali Tsabary",
    era: "2010s",
    tags: ["mindful", "all-ages", "inner-work"],
    color: "#9b7fb8",
    what: "Parent-focused transformation approach. The parent does deep inner work to avoid projecting unresolved trauma onto children. See your child as a mirror and teacher.",
    why: "Children trigger our unresolved wounds. Most 'parenting problems' are actually parent problems. Awareness and presence transform the relationship.",
    how: ["Practice mindfulness daily", "Self-reflect on your triggers", "Pursue therapy or inner work", "See your child as a teacher", "Release ego-driven expectations", "Stay present in difficult moments"],
    when: "All ages. Especially powerful for parents recognizing generational patterns they want to break.",
    pros: ["Breaks generational trauma cycles", "Deep self-awareness", "Authentic relationship", "Models emotional health"],
    cons: ["Requires significant inner work", "Less practical day-to-day toolkit", "Can feel self-indulgent", "May lack structure"],
    risks: ["Over-focusing on self may neglect child's immediate needs", "Can become permissive without boundaries"],
    quote: "The moment you accept your child for who they truly are, not who you want them to be, you become a conscious parent.",
    quoteAuthor: "Dr. Shefali Tsabary"
  },
  {
    id: "permissive",
    name: "Permissive Parenting",
    tagline: "⚠️ High warmth, low structure — friend more than authority",
    founder: "Diana Baumrind (identified)",
    era: "1960s",
    tags: ["cautionary", "low-structure", "all-ages"],
    color: "#d4a06b",
    what: "High warmth with low demands. Few rules, rarely enforced. Child's desires often take priority. The parent acts more as a friend than an authority figure.",
    why: "Often stems from wanting to be the 'cool parent,' rejecting one's own strict upbringing, or avoiding conflict with the child.",
    how: ["Few rules or boundaries", "Child-led decision making on most things", "Avoids confrontation", "Rarely says no", "Minimal structure or routine", "Acts as friend rather than guide"],
    when: "Identified as a pattern across all ages. Often develops gradually.",
    pros: ["Warm, open relationship", "Open communication", "Child feels heard", "Creative freedom"],
    cons: ["Children lack self-discipline", "Poor emotional regulation", "Entitlement issues", "Difficulty with authority", "Worse academic outcomes"],
    risks: ["Behavioral problems", "Poor social skills", "Unhealthy habits", "Children feel insecure without boundaries"],
    quote: "Permissive parents try to behave in an accepting and affirmative manner toward the child's impulses and desires.",
    quoteAuthor: "Diana Baumrind"
  },
  {
    id: "authoritarian",
    name: "Authoritarian Parenting",
    tagline: "⚠️ Strict obedience — 'because I said so'",
    founder: "Diana Baumrind (identified)",
    era: "1960s",
    tags: ["cautionary", "strict", "all-ages"],
    color: "#b5695a",
    what: "High demands with low warmth. Strict rules without explanation. Obedience-focused with 'because I said so' as the primary rationale.",
    why: "Rooted in tradition, cultural norms, or belief that strict discipline produces good citizens. Often passed down generationally without question.",
    how: ["Strict rules with harsh consequences", "Little room for negotiation", "Punishment over explanation", "Limited emotional expression allowed", "Children should be seen, not heard", "Parent's word is final"],
    when: "Pattern across all ages. Often intensifies as children push for independence in teen years.",
    pros: ["Clear structure and expectations", "Obedient children in short term", "Organized household", "Effective in genuinely dangerous situations"],
    cons: ["Lower self-esteem", "Higher aggression", "Poorer social skills", "Rebellion in teen years", "Damaged relationship"],
    risks: ["Mental health issues", "Substance abuse risk", "Children who can't think independently", "Perpetuates cycle of authoritarian parenting"],
    quote: "Authoritarian parents value obedience as a virtue and favor punitive measures to curb self-will.",
    quoteAuthor: "Diana Baumrind"
  }
];

export const allTags = Array.from(new Set(styles.flatMap(s => s.tags))).sort();
