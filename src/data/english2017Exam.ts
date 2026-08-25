import { type Question } from '../services/geminiService';

export const english2017Exam = {
  id: "euee-2017-english",
  title: "2017 E.C. ESSLCE English Examination",
  subject: "English",
  grade: "Grade 12",
  timeLimit: 7200, // 120 minutes (2 hours)
  questions: [
    // Passage 1: Questions 1 - 9
    {
      id: "eng-1",
      section: "Reading Passage I",
      instruction: "DIRECTIONS (Questions 1–9): Read the passage below about homelessness carefully. Then answer questions 1 to 9 by choosing the best alternative from the given options.",
      passage: "Homeless people are everywhere—on the street, in public buildings, on the evening news and at the corner parking lot. You can hardly step out of your house these days without meeting some haggard character who asks you for a cigarette or begs for \"a little change\". The homeless are not just constant symbols of wasted lives and social programs—they have become a danger to public safety.\n\nWhat is the root of the homeless problem? Everyone seems to have a scapegoat. Advocates of the homeless blame government policy; politicians blame the legal system; the courts blame the bureaucratic infrastructure; the Democrats blame the Republicans and the Republicans blame the Democrats. The public also blames the economy, drugs, the \"poverty cycle\", and \"the breakdown of society\". With all this finger-pointing, the group most responsible for the homeless being the way they are received the least blame. That group is the homeless themselves.\n\nHow can I say this? For the past two years I have worked with the homeless, volunteering at the Salvation Army and at a soup kitchen in Austin, Texas. I have led a weekly chapel service, served food, listened, counseled, given time and money, and shared their struggles. I have seen their response to troubles, and though I would rather report otherwise, many of them seem to have chosen the life styles they lead. They are unwilling to do the things necessary to overcome their circumstances. They must bear the greatest part of the blame for their manifold troubles.\n\nLet me qualify what I just said. Not everyone who finds himself out of a job and in the street is there because he/she wants to be. Some are victims of tragic circumstances. I met many exhausted, sensible people during my time working with Austin's homeless: the single father struggling to earn his bread and be a role model for his children; the woman who fled a good job in another city to escape an abusive husband; the well-educated young man who had his world turned upside down by divorce and a layoff. These people deserve every effort to help them back on their feet.\n\nBut they are not the real problem. They are usually off the streets and resuming normal lives within a period of weeks or months. Even while \"down on their luck\", they are responsible citizens, working in the shelters and applying for jobs. They are homeless, true but only temporarily, because they are eager to reorganize their lives.\n\nFor every person temporarily homeless, though there are many who are chronically so. Whether because of mental illness, alcoholism, poor education, drug addiction, or simply laziness, these homeless are content to remain as they are. In many cases they choose the streets. They enjoy the freedom and consider begging a minor inconvenience. They know they can always get a job for a day or two for food, cigarettes and alcohol. The sophisticated among them have learned to use the system for what it is worth and figure out that a trip through the welfare line is less trouble than a steady job. In a society that has mastered a dodging responsibility, these homeless prefer a life of no responsibility at all.",
      question: "Which one of the following statements is true according to paragraph 4?",
      options: [
        "Some homeless who are victims of circumstances deserve help to recognize their lives again.",
        "None of those in the street deserves any effort to help them back on their feet.",
        "A woman fleeing an abusive husband is right away homeless.",
        "Everyone who finds themselves out of a job is homeless."
      ],
      correctAnswerIndex: 0,
      explanation: "Paragraph 4 explains that individuals who are victims of tragic circumstances (like the single father, the woman escaping abuse, or the laid-off man) deserve every effort to help them get back on their feet."
    },
    {
      id: "eng-2",
      section: "Reading Passage I",
      question: "Which of the following best describes this passage writer's tone?",
      options: [
        "Appreciation",
        "Appeasement",
        "Praise",
        "Criticism"
      ],
      correctAnswerIndex: 3,
      explanation: "The author critically analyzes the homeless condition, arguing that many chronically homeless choose their lifestyle and dodge responsibility."
    },
    {
      id: "eng-3",
      section: "Reading Passage I",
      question: "What does the expression 'I would rather report otherwise' indicate in the context it is used in paragraph 3?",
      options: [
        "The need to tell the public about the homeless",
        "The fear to hide the true cause of homelessness",
        "The need to explain the troubles facing the homeless",
        "The writer's reluctance to admit the harsh truth about the homeless choosing their lifestyle"
      ],
      correctAnswerIndex: 3,
      explanation: "The author wishes the reality were different, but feels obligated to state the uncomfortable observation that many seem to choose their lifestyle."
    },
    {
      id: "eng-4",
      section: "Reading Passage I",
      question: "What purpose does the writer's reference to personal experience in paragraph 3 serve?",
      options: [
        "It served as evidence for political involvement.",
        "It clarified the actual cause of homelessness based on first-hand observation.",
        "It served as evidence of social disintegration.",
        "It showed the ugly lifestyle of the homeless."
      ],
      correctAnswerIndex: 1,
      explanation: "Volunteering at the Salvation Army and soup kitchen gives the author direct credibility and first-hand experience to assess the causes of homelessness."
    },
    {
      id: "eng-5",
      section: "Reading Passage I",
      question: "Which of the following words is closest in meaning to 'haggard' as used in paragraph 1?",
      options: [
        "a person who looks trustful",
        "a person who commits crime",
        "a person who looks exhausted, worn out, and uncared for",
        "a person who looks suspicious"
      ],
      correctAnswerIndex: 2,
      explanation: "'Haggard' means looking exhausted and unwell, especially from fatigue, worry, or suffering."
    },
    {
      id: "eng-6",
      section: "Reading Passage I",
      question: "Which of the following words can be synonymous with the word 'content' as used in paragraph 6?",
      options: [
        "satisfied",
        "outrageous",
        "naked",
        "confident"
      ],
      correctAnswerIndex: 0,
      explanation: "In paragraph 6, 'content to remain as they are' means they are satisfied or willing to stay in that condition."
    },
    {
      id: "eng-7",
      section: "Reading Passage I",
      question: "What does the word 'there' in paragraph 4, refer to?",
      options: [
        "at a soup kitchen",
        "in the street",
        "at the Salvation Army",
        "in the court"
      ],
      correctAnswerIndex: 1,
      explanation: "In 'Not everyone who finds himself out of a job and in the street is there because he/she wants to be', 'there' refers to being in the street."
    },
    {
      id: "eng-8",
      section: "Reading Passage I",
      question: "What does the word 'so' in paragraph 6, refer to?",
      options: [
        "beggar",
        "every person",
        "drug addict",
        "homeless"
      ],
      correctAnswerIndex: 3,
      explanation: "'For every person temporarily homeless, though there are many who are chronically so' refers to chronically homeless."
    },
    {
      id: "eng-9",
      section: "Reading Passage I",
      question: "According to the passage, which of the following is to blame for the life of a chronically homeless person?",
      options: [
        "The homeless themselves",
        "The Republicans",
        "The bureaucratic infrastructure",
        "The government policy"
      ],
      correctAnswerIndex: 0,
      explanation: "The author explicitly asserts that the group most responsible for chronic homelessness is the homeless themselves."
    },

    // Passage 2: Questions 10 - 18
    {
      id: "eng-10",
      section: "Reading Passage II: Environmental Protection",
      instruction: "DIRECTIONS (Questions 10–18): Read the passage below about forest and soil conservation in Ethiopia carefully. Then answer questions 10 to 18 based on the text.",
      passage: "The preservation of forest areas, wildlife and soil should be of a vital concern to all Ethiopians, since its neglect means a destruction of replaceable natural resources, a serious loss of revenue and then gradual desolation of the land until it becomes unfit for cultivation. According to a UNESCO survey in 1963, the consequences will be disastrous unless drastic measures are adopted. An example of this neglect is the present and past treatments of forests. In the good old days, the Ethiopian highlands were covered with virgin forests, which have since been largely used for construction and fuel. Along with the introduction of the eucalyptus tree, this has prevented the country from becoming a desert; however, the few remaining forest areas are not being preserved. The Ethiopian custom grants a man ownership of any land he clears off trees, and he is presented with forested tracts as a reward for his service to the government. The next twenty or thirty years will see the last remnants of virgin forests destroyed unless strong measures are taken.\n\nSoil degradation has been aggravated by poor agricultural practices. These include improper terracing, the cultivation of steep and easily eroded hillsides, failure to rotate crops (with the consequent loss of valuable nutrients), and the burning of manure instead of returning it to the soil as fertilizer. The destruction of trees and the lack of modern farming methods are not themselves as bad as the erosion of the soil which may follow them. Several generations may be able to live off the land, but gradually the soil is washed away to Egypt, making the land increasingly poor in quality and yielding less and less. Unfortunately, it is almost impossible to reclaim land that has deteriorated beyond a certain point. Trees cannot be planted to suck up water and hold the soil, because the earth is no longer deep enough to support long roots.",
      question: "What does 'These' in paragraph 2 refer to?",
      options: [
        "soil conservation",
        "improper terracing",
        "preservation of forests",
        "poor agricultural practices"
      ],
      correctAnswerIndex: 3,
      explanation: "'These' refers to the poor agricultural practices listed immediately following the statement."
    },
    {
      id: "eng-11",
      section: "Reading Passage II",
      question: "What does the word 'desolation' mean in paragraph 1?",
      options: [
        "disappearance",
        "destruction / barren wasteland",
        "desertion",
        "enrichment"
      ],
      correctAnswerIndex: 1,
      explanation: "'Desolation' in this context refers to barren destruction and ruin of fertile land."
    },
    {
      id: "eng-12",
      section: "Reading Passage II",
      question: "Which of the following best replaces the word 'aggravated' in paragraph 2?",
      options: [
        "worsened",
        "supplemented",
        "regulated",
        "improved"
      ],
      correctAnswerIndex: 0,
      explanation: "'Aggravated' means made worse or more severe."
    },
    {
      id: "eng-13",
      section: "Reading Passage II",
      question: "The prolonged erosion of the soil is followed by:",
      options: [
        "rapid reproduction of wild animals.",
        "enrichment of the soil by various nutrients.",
        "the total absence of plants.",
        "the leveling of the mountains."
      ],
      correctAnswerIndex: 2,
      explanation: "Prolonged erosion leaves soil so shallow that trees and plants cannot take root, resulting in total loss of plant cover."
    },
    {
      id: "eng-14",
      section: "Reading Passage II",
      question: "In highly eroded and desolated areas, trees fail to survive because:",
      options: [
        "their roots are too short to suck up water from the ground.",
        "the sun will be too scorching for them to survive.",
        "the earth is no longer deep enough to support long roots.",
        "they do not get sufficient sunshine."
      ],
      correctAnswerIndex: 2,
      explanation: "Paragraph 2 states: 'because the earth is no longer deep enough to support long roots.'"
    },
    {
      id: "eng-15",
      section: "Reading Passage II",
      question: "Which of the following, according to paragraph 1, is a result of neglecting the preservation of forest areas?",
      options: [
        "Devastation of irreplaceable natural resources and loss of revenue",
        "Ruins of the land through processes",
        "Reproduction of wildlife",
        "Enrichment of high plateau soils"
      ],
      correctAnswerIndex: 0,
      explanation: "Paragraph 1 states neglect means destruction of natural resources, loss of revenue, and desolation of the land."
    },
    {
      id: "eng-16",
      section: "Reading Passage II",
      question: "Which of the following, according to paragraph 2, can be a cause of soil erosion?",
      options: [
        "Planting trees and using modern farming",
        "Cultivating easily eroded hillsides",
        "Using poor quality of fertilizer",
        "Losing valuable nutrients"
      ],
      correctAnswerIndex: 1,
      explanation: "Paragraph 2 lists 'the cultivation of steep and easily eroded hillsides' as a major practice aggravating degradation."
    },
    {
      id: "eng-17",
      section: "Reading Passage II",
      question: "According to paragraph 2, which of the following is true?",
      options: [
        "Plants can be planted to suck up water and hold soil even if the earth is too shallow to support long roots.",
        "When the soil is washed away to neighboring countries, land productivity increases.",
        "The preservation of forest areas is not the concern of Ethiopians.",
        "Erosion of the soil is worse than destruction of trees."
      ],
      correctAnswerIndex: 3,
      explanation: "Paragraph 2 notes that destruction of trees is not itself as bad as the erosion of soil that follows them."
    },
    {
      id: "eng-18",
      section: "Reading Passage II",
      question: "What does 'its' in paragraph 1 refer to?",
      options: [
        "preservation of natural resources (forests, wildlife, and soil)",
        "destruction of natural resources",
        "the wild life and soil",
        "the forest areas"
      ],
      correctAnswerIndex: 0,
      explanation: "'Its neglect' refers to the neglect of the preservation of forest areas, wildlife and soil."
    },

    // Vocabulary Completion: 19 - 24
    {
      id: "eng-19",
      section: "Vocabulary: Completion",
      instruction: "DIRECTIONS (Questions 19–24): Complete each of the following sentences with the most appropriate word from the given choices.",
      question: "You should not be so ________ to these late comers, once punished, they should be allowed to attend class.",
      options: [
        "generous",
        "cruel",
        "modest",
        "kind"
      ],
      correctAnswerIndex: 1,
      explanation: "'Cruel' fits the context of being overly harsh after an initial punishment has been served."
    },
    {
      id: "eng-20",
      section: "Vocabulary: Completion",
      question: "Ethiopia will enjoy a period of peace and ____________ in the next few years; this happens if the country ensures law and gives priority to science, technology and innovation.",
      options: [
        "prosperity",
        "nationality",
        "protest",
        "disparity"
      ],
      correctAnswerIndex: 0,
      explanation: "'Prosperity' refers to flourishing economically and socially."
    },
    {
      id: "eng-21",
      section: "Vocabulary: Completion",
      question: "The weather in Addis Ababa is _____________ these days. You cannot tell whether it rains in the morning or in the afternoon.",
      options: [
        "invisible",
        "immaterial",
        "unpredictable",
        "unimaginable"
      ],
      correctAnswerIndex: 2,
      explanation: "'Unpredictable' describes weather that changes unexpectedly."
    },
    {
      id: "eng-22",
      section: "Vocabulary: Completion",
      question: "____________ by the speech of the new leader, all the people of the Zone elected him to be Member of Parliament.",
      options: [
        "Offended",
        "Demotivated",
        "Discouraged",
        "Inspired"
      ],
      correctAnswerIndex: 3,
      explanation: "'Inspired' means motivated or stimulated to positive action like voting."
    },
    {
      id: "eng-23",
      section: "Vocabulary: Completion",
      question: "On my way home from office, there was high traffic ___________. It took me two hours to get home.",
      options: [
        "congestion",
        "freeway",
        "path way",
        "speed"
      ],
      correctAnswerIndex: 0,
      explanation: "'Traffic congestion' refers to heavy traffic jams slowing down movement."
    },
    {
      id: "eng-24",
      section: "Vocabulary: Completion",
      question: "In the annual festival they hold, the villagers in my area always __________ to fight against the criminals that disturb the people.",
      options: [
        "meditate",
        "resolve",
        "remember",
        "think"
      ],
      correctAnswerIndex: 1,
      explanation: "'Resolve' means to firmly decide or make a formal commitment."
    },

    // Vocabulary Substitution: 25 - 30
    {
      id: "eng-25",
      section: "Vocabulary: Substitution",
      instruction: "DIRECTIONS (Questions 25–30): In each sentence below, choose the word or phrase that best substitutes the bolded word or phrase without changing the original meaning.",
      question: "Houses in cities are not **affordable** for the great majority of the people in Ethiopia.",
      options: [
        "comfortable",
        "cheap",
        "available",
        "suitable"
      ],
      correctAnswerIndex: 1,
      explanation: "'Affordable' in this context means reasonably priced or inexpensive / cheap."
    },
    {
      id: "eng-26",
      section: "Vocabulary: Substitution",
      question: "He asked her to **turn round** several times before he gave her his opinion of her new dress.",
      options: [
        "rotate",
        "display",
        "hold on",
        "pose"
      ],
      correctAnswerIndex: 0,
      explanation: "'Turn round' means to rotate or spin around."
    },
    {
      id: "eng-27",
      section: "Vocabulary: Substitution",
      question: "Thanks to science and technology, many of our organs are **replaceable**.",
      options: [
        "removable",
        "curable",
        "exchangeable",
        "avoidable"
      ],
      correctAnswerIndex: 2,
      explanation: "'Replaceable' means capable of being replaced or exchanged for a donor/artificial organ."
    },
    {
      id: "eng-28",
      section: "Vocabulary: Substitution",
      question: "The teacher announced that the mathematics examination has been **put off** for next week.",
      options: [
        "forgotten",
        "postponed",
        "prepared",
        "cancelled"
      ],
      correctAnswerIndex: 1,
      explanation: "'Put off' is a phrasal verb meaning postponed to a later date."
    },
    {
      id: "eng-29",
      section: "Vocabulary: Substitution",
      question: "If you go to a new place, your behavior and manner should **harmonize with** that of the people you meet there.",
      options: [
        "go against",
        "consider",
        "contradict",
        "integrate"
      ],
      correctAnswerIndex: 3,
      explanation: "'Harmonize with' means to blend in well or integrate with local customs."
    },
    {
      id: "eng-30",
      section: "Vocabulary: Substitution",
      question: "Tensions between the two countries are rising quickly. We cannot **rule out** the possibility that war breaks out.",
      options: [
        "assume",
        "exclude",
        "predict",
        "imagine"
      ],
      correctAnswerIndex: 1,
      explanation: "'Rule out' means to exclude or eliminate from consideration."
    },

    // Analogy: 31 - 32
    {
      id: "eng-31",
      section: "Analogy",
      instruction: "DIRECTIONS (Questions 31–32): Choose the alternative that best completes the analogy relationship.",
      question: "Mouse is to computer as steering wheel is to:",
      options: [
        "thermo-flask",
        "refrigerator",
        "vehicle",
        "television"
      ],
      correctAnswerIndex: 2,
      explanation: "A mouse controls a computer; a steering wheel controls a vehicle."
    },
    {
      id: "eng-32",
      section: "Analogy",
      question: "Bed : Sleep :: Stove : _________",
      options: [
        "Clean",
        "Wash",
        "Cook",
        "Utensil"
      ],
      correctAnswerIndex: 2,
      explanation: "A bed is used for sleep; a stove is used to cook."
    },

    // Sentence Comprehension: 33 - 34
    {
      id: "eng-33",
      section: "Sentence Comprehension",
      instruction: "DIRECTIONS (Questions 33–34): Choose the sentence that has the closest meaning to the given sentence.",
      question: "\"All students but one got above average marks in English.\" Which sentence has the closest meaning?",
      options: [
        "Only one student failed to get above average marks in English.",
        "Only one student got the above average mark in English.",
        "All students did not get above average marks in English.",
        "Everybody got above average mark in English."
      ],
      correctAnswerIndex: 0,
      explanation: "'All ... but one' means all except one student achieved above average marks."
    },
    {
      id: "eng-34",
      section: "Sentence Comprehension",
      question: "\"Addis Ababa University, which is the oldest university in the country, has changed its admission policy.\" Which sentence has the closest meaning?",
      options: [
        "Addis Ababa University admits students based on new rules and regulations.",
        "Addis Ababa University has grown old with its admission policy.",
        "Addis Ababa University has a conducive learning atmosphere.",
        "Joining Addis Ababa University has now become easy."
      ],
      correctAnswerIndex: 0,
      explanation: "Changing admission policy means admitting students according to new rules and criteria."
    },

    // Language Focus: 35 - 62
    {
      id: "eng-35",
      section: "Language Focus",
      instruction: "DIRECTIONS (Questions 35–67): Complete each of the following sentences with the grammatically correct word or phrase.",
      question: "At first, the suspect did not realize __________ during the interview. Later on, he saw the voice recorder and refused to continue the interview.",
      options: [
        "he was being recording",
        "he was recording",
        "he had recorded",
        "he was being recorded"
      ],
      correctAnswerIndex: 3,
      explanation: "Past continuous passive voice: 'was being recorded'."
    },
    {
      id: "eng-36",
      section: "Language Focus",
      question: "Unlike last year, only _________ students needed extra help this year; last year we helped almost everyone in the class.",
      options: [
        "many",
        "most",
        "a few",
        "a little"
      ],
      correctAnswerIndex: 2,
      explanation: "'A few' is used with countable nouns like 'students' to indicate a small number."
    },
    {
      id: "eng-37",
      section: "Language Focus",
      question: "We should be involved in sports activities to keep ___________ fit and healthy.",
      options: [
        "oneself",
        "ourselves",
        "yourselves",
        "ourself"
      ],
      correctAnswerIndex: 1,
      explanation: "The reflexive pronoun corresponding to the subject 'We' is 'ourselves'."
    },
    {
      id: "eng-38",
      section: "Language Focus",
      question: "I __________ my homework when you knocked at the door.",
      options: [
        "had been",
        "have been doing",
        "have done",
        "was doing"
      ],
      correctAnswerIndex: 3,
      explanation: "Past continuous ('was doing') denotes an ongoing past action interrupted by a simple past event ('knocked')."
    },
    {
      id: "eng-39",
      section: "Language Focus",
      question: "__________ I do not complain much; my friends often take me for a fool.",
      options: [
        "As a result of",
        "Because of",
        "In spite of",
        "Because"
      ],
      correctAnswerIndex: 3,
      explanation: "'Because' is a conjunction followed by a full clause ('I do not complain much')."
    },
    {
      id: "eng-40",
      section: "Language Focus",
      question: "My English is not good, I __________ advised to study English when I was younger.",
      options: [
        "wish I had been",
        "wished I was",
        "wished I had been",
        "wish I have been"
      ],
      correctAnswerIndex: 0,
      explanation: "Past regret expressed in present: 'I wish + past perfect passive' -> 'I wish I had been'."
    },
    {
      id: "eng-41",
      section: "Language Focus",
      question: "I _______ much today if I had learned about money management at my young age.",
      options: [
        "did not worry",
        "would not worry",
        "will not worry",
        "would not have worried"
      ],
      correctAnswerIndex: 1,
      explanation: "Mixed conditional (past condition with present result indicated by 'today'): 'if I had learned... I would not worry today'."
    },
    {
      id: "eng-42",
      section: "Language Focus",
      question: "________ you ever _____ a chance to visit any historical site in Ethiopia?",
      options: [
        "Had/have",
        "Did/have",
        "Have/had",
        "Have/have"
      ],
      correctAnswerIndex: 2,
      explanation: "Present perfect experience question: 'Have you ever had...'."
    },
    {
      id: "eng-43",
      section: "Language Focus",
      question: "The road project __________ by the construction company next year.",
      options: [
        "will be completing",
        "was completed",
        "will completed",
        "will be completed"
      ],
      correctAnswerIndex: 3,
      explanation: "Future simple passive: 'will be completed'."
    },
    {
      id: "eng-44",
      section: "Language Focus",
      question: "If I had enough money, I _______ schools with elevators for visually impaired children.",
      options: [
        "will have built",
        "would build",
        "would have built",
        "will build"
      ],
      correctAnswerIndex: 1,
      explanation: "Second conditional (hypothetical present/future): 'If + past simple, would + base verb' -> 'would build'."
    },
    {
      id: "eng-45",
      section: "Language Focus",
      question: "Next year this time, I ________ the freshman program.",
      options: [
        "will have almost completed",
        "had nearly completed",
        "will be nearly complete",
        "would have nearly completed"
      ],
      correctAnswerIndex: 0,
      explanation: "Future perfect tense: 'will have almost completed' describes an action completed by a specific future point."
    },
    {
      id: "eng-46",
      section: "Language Focus",
      question: "This year's examination is as good as the one given last year, ________ ?",
      options: [
        "hasn't it",
        "doesn't it",
        "isn't it",
        "wasn't it"
      ],
      correctAnswerIndex: 2,
      explanation: "Question tag for positive 'is' is 'isn't it'."
    },
    {
      id: "eng-47",
      section: "Language Focus",
      question: "I met the girl ________ phone number I was asking for.",
      options: [
        "whom",
        "whose",
        "that",
        "which"
      ],
      correctAnswerIndex: 1,
      explanation: "'Whose' is the possessive relative pronoun ('whose phone number')."
    },
    {
      id: "eng-48",
      section: "Language Focus",
      question: "When you acknowledge people's contribution to your work, you need not refer _______ his/her name.",
      options: [
        "to",
        "for",
        "with",
        "at"
      ],
      correctAnswerIndex: 0,
      explanation: "The preposition that pairs with 'refer' is 'to' ('refer to')."
    },
    {
      id: "eng-49",
      section: "Language Focus",
      question: "_________ listening ___________ reading are important academic skills students need to develop.",
      options: [
        "Neither/nor",
        "Either/nor",
        "Both/and",
        "Either/or"
      ],
      correctAnswerIndex: 2,
      explanation: "'Both ... and' connects two affirmative elements functioning together with plural agreement ('are')."
    },
    {
      id: "eng-50",
      section: "Language Focus",
      question: "He ________ his children to school five days a week.",
      options: [
        "drives",
        "has driven",
        "drove",
        "drive"
      ],
      correctAnswerIndex: 0,
      explanation: "Routine habitual action in present simple with third person singular: 'drives'."
    },
    {
      id: "eng-51",
      section: "Language Focus",
      question: "My father is not ________ old ______ yours; he is only 53 years old.",
      options: [
        "such...as",
        "such...so",
        "as...so",
        "as...as"
      ],
      correctAnswerIndex: 3,
      explanation: "Equative comparison structure: 'as + adjective + as'."
    },
    {
      id: "eng-52",
      section: "Language Focus",
      question: "Lojo is ________ tall girl ___________ she can easily touch the ceiling of her classroom.",
      options: [
        "such...as",
        "such a...that",
        "as such...that",
        "so...that"
      ],
      correctAnswerIndex: 1,
      explanation: "'Such a + adjective + singular noun + that' shows cause and effect."
    },
    {
      id: "eng-53",
      section: "Language Focus",
      question: "Some students did well on the last week's English test, ________ others scored unsatisfactory marks. I am designing an action research to study the case.",
      options: [
        "when",
        "despite",
        "whereas",
        "if"
      ],
      correctAnswerIndex: 2,
      explanation: "'Whereas' expresses direct contrast between two coordinate clauses."
    },
    {
      id: "eng-54",
      section: "Language Focus",
      question: "My English teacher ___________ me repeat the correct answer ten times.",
      options: [
        "wanted",
        "forced",
        "told",
        "made"
      ],
      correctAnswerIndex: 3,
      explanation: "Causative verb 'make' takes a bare infinitive: 'made me repeat' (without 'to')."
    },
    {
      id: "eng-55",
      section: "Language Focus",
      question: "My history teacher asked me: \"what is your nationality?\" (Reported speech:)",
      options: [
        "what my nationality was.",
        "what is my nationality.",
        "what is your nationality?",
        "what was my nationality?"
      ],
      correctAnswerIndex: 0,
      explanation: "In reported wh-questions, word order is statement order (subject + verb) with backshift: 'what my nationality was'."
    },
    {
      id: "eng-56",
      section: "Language Focus",
      question: "You _______ go to bed before midnight if you have the habit of getting up late.",
      options: [
        "will not",
        "may not",
        "must not",
        "cannot"
      ],
      correctAnswerIndex: 3,
      explanation: "'Cannot' denotes impossibility of falling asleep early when accustomed to a late schedule."
    },
    {
      id: "eng-57",
      section: "Language Focus",
      question: "You will start running __________ the bell rings. Otherwise, you will be disqualified from the competition.",
      options: [
        "till",
        "while",
        "during",
        "after"
      ],
      correctAnswerIndex: 3,
      explanation: "'After the bell rings' or 'when/as soon as' fits starting following the signal."
    },
    {
      id: "eng-58",
      section: "Language Focus",
      question: "The afternoon sun is ________ hot for school children _______ play outside. They had better stay in their class.",
      options: [
        "such/for",
        "too/to",
        "very/for",
        "to/to"
      ],
      correctAnswerIndex: 1,
      explanation: "'Too + adjective + for someone + to + verb' expresses excessive degree preventing action."
    },
    {
      id: "eng-59",
      section: "Language Focus",
      question: "The lady ___________ next to our English teacher is my mother's close friend.",
      options: [
        "sitting",
        "sit",
        "sat",
        "sits"
      ],
      correctAnswerIndex: 0,
      explanation: "Present participle clause ('sitting next to...') reduces 'who is sitting'."
    },
    {
      id: "eng-60",
      section: "Language Focus",
      question: "Unlike my friends, who dislike drinking coffee, I _________ go to bed at night without coffee.",
      options: [
        "never",
        "mostly",
        "always",
        "ever"
      ],
      correctAnswerIndex: 0,
      explanation: "'I never go to bed without coffee' means I always drink coffee before sleeping."
    },
    {
      id: "eng-61",
      section: "Language Focus",
      question: "Committing corruption _______ life imprisonment in several countries in the world.",
      options: [
        "impacts",
        "arises from",
        "affects",
        "leads to"
      ],
      correctAnswerIndex: 3,
      explanation: "'Leads to' expresses causal result (crime leads to punishment)."
    },
    {
      id: "eng-62",
      section: "Language Focus",
      question: "I always have much work to do; that is why I ________ have time to listen to music.",
      options: [
        "definitely",
        "mainly",
        "scarcely",
        "exactly"
      ],
      correctAnswerIndex: 2,
      explanation: "'Scarcely' means hardly / almost never."
    },

    // Writing: Spelling 63 - 64
    {
      id: "eng-63",
      section: "Writing: Word Spelling",
      question: "Choose the word which is correctly spelt:",
      options: [
        "expenditure",
        "traditionial",
        "particularily",
        "fotograph"
      ],
      correctAnswerIndex: 0,
      explanation: "'Expenditure' is correct. Others are misspelled ('traditional', 'particularly', 'photograph')."
    },
    {
      id: "eng-64",
      section: "Writing: Word Spelling",
      question: "Choose the word which is correctly spelt:",
      options: [
        "paralism",
        "suffication",
        "inteligibility",
        "repetition"
      ],
      correctAnswerIndex: 3,
      explanation: "'Repetition' is correct. Others should be 'parallelism', 'suffocation', 'intelligibility'."
    },

    // Writing: Punctuation & Capitalization 65 - 67
    {
      id: "eng-65",
      section: "Writing: Punctuation & Capitalization",
      question: "Choose the statement which is correctly punctuated and capitalized:",
      options: [
        "Tadesse and Fanuel are good friends. They study their lessons together and help each other.",
        "Tadesse and Fanuel are good friends; They study their lessons together and help each other.",
        "Tadesse and Fanuel are good friends, they study their lessons together and help each other.",
        "Tadesse and Fanuel are good friends They study their lessons together and help each other!"
      ],
      correctAnswerIndex: 0,
      explanation: "Option A uses correct sentence boundary capitalization and full stop."
    },
    {
      id: "eng-66",
      section: "Writing: Punctuation & Capitalization",
      question: "Choose the statement which is correctly punctuated and capitalized:",
      options: [
        "Ethiopia is a rich country endowed with many natural resources. In addition it has many diversified cultures and very friendly people.",
        "Ethiopia is a rich country endowed with many natural resources. In addition, it has many diversified cultures and very friendly people",
        "Ethiopia is a rich country endowed with many natural resources. In addition it has many diversified cultures and very friendly people.",
        "Ethiopia is a rich country endowed with many natural resources. In addition, it has many diversified cultures and very friendly people."
      ],
      correctAnswerIndex: 3,
      explanation: "Option D correctly uses a comma after introductory transition 'In addition,' and closes with a period."
    },
    {
      id: "eng-67",
      section: "Writing: Punctuation & Capitalization",
      question: "Choose the statement which is correctly punctuated and capitalized:",
      options: [
        "Hello Kenyan National Hotel, can I help you?",
        "Hello, Kenyan National Hotel. can I help you?",
        "Hello, Kenyan National Hotel! Can I help you?",
        "Hello Kenyan National Hotel. Can I help you?"
      ],
      correctAnswerIndex: 2,
      explanation: "Option C/D correctly separates greeting exclamation/period and capitalizes the question 'Can I help you?'."
    },

    // Writing: Jumbled Words 68 - 70
    {
      id: "eng-68",
      section: "Writing: Jumbled Words",
      instruction: "DIRECTIONS (Questions 68–70): Rearrange the jumbled words into a grammatically correct and meaningful sentence.",
      question: "Rearrange: am / as / think / I / not / I / you / stupid / am / as",
      options: [
        "I am not as I think am stupid as you.",
        "As you think I am not stupid as I am.",
        "I am not as you think as I am.",
        "I am not as stupid as you think I am."
      ],
      correctAnswerIndex: 3,
      explanation: "Correct grammatical ordering: 'I am not as stupid as you think I am.'"
    },
    {
      id: "eng-69",
      section: "Writing: Jumbled Words",
      question: "Rearrange: who / a / clever / teacher / in / school / our / Ato Tadesse / got / has / a / scholarship / is",
      options: [
        "Ato Tadesse, in our school, has got a scholarship who is a clever teacher.",
        "Ato Tadesse, who is a clever teacher in our school, has got a scholarship.",
        "Ato Tadesse is a clever teacher in school who has got our a scholarship.",
        "Ato Tadesse has got a scholarship, who is a clever teacher, in our school."
      ],
      correctAnswerIndex: 1,
      explanation: "Proper relative clause placement: 'Ato Tadesse, who is a clever teacher in our school, has got a scholarship.'"
    },
    {
      id: "eng-70",
      section: "Writing: Jumbled Words",
      question: "Rearrange: in / the / science / laboratory / teacher / and / students / both / together / working / are / the",
      options: [
        "The students and the teacher together are both working in the science laboratory.",
        "The students are working and both the teacher together in the science laboratory.",
        "Both in the science laboratory are working together the teacher and the students.",
        "Both the teacher and the students are working together in the science laboratory."
      ],
      correctAnswerIndex: 3,
      explanation: "'Both the teacher and the students are working together in the science laboratory.'"
    },

    // Writing: Paragraph Coherence 71 - 74
    {
      id: "eng-71",
      section: "Writing: Paragraph Coherence",
      instruction: "DIRECTIONS (Questions 71–74): Reorder the lettered sentences (a, b, c, d) to produce a coherent and logically unified paragraph.",
      question: "Order the sentences to make a coherent paragraph:\na. Arable farming refers to growing crops.\nb. This farming type refers to keeping sheep and cattle.\nc. The second farming type is pastoral farming.\nd. Arable and pastoral farming are commonly known farming types.",
      options: [
        "a - d - c - b",
        "b - a - d - c",
        "d - a - c - b",
        "d - c - d - a"
      ],
      correctAnswerIndex: 2,
      explanation: "d introduces both types, a defines the first (arable), c introduces pastoral, and b defines pastoral."
    },
    {
      id: "eng-72",
      section: "Writing: Paragraph Coherence",
      question: "Order the sentences to make a coherent paragraph:\na. Hanna is a very charming and sociable girl whom everybody likes.\nb. Finally, she works in an international supermarket as a saleswoman. She is always smiling and appears to be happy with her job.\nc. She is only in her late twenties. She usually wears jeans that visibly show the shape of her body. Above her waist, she wears a white nylon T-shirt that makes her appearance quite attractive.\nd. To begin with, she is tall and has a slim waist that makes her quite attractive.",
      options: [
        "a - d - c - b",
        "a - c - d - b",
        "d - a - b - c",
        "d - a - c - b"
      ],
      correctAnswerIndex: 0,
      explanation: "Topic sentence a introduces Hanna, d introduces her initial physical trait ('To begin with...'), c expands details, and b concludes with 'Finally...'."
    },
    {
      id: "eng-73",
      section: "Writing: Paragraph Coherence",
      question: "Order the sentences:\na. Many people believe education is the key to success in life.\nb. These people list names of several intellectuals who struggle to make ends meet on their salaries.\nc. As examples, they mention highly educated people who have become rich.\nd. Others contend that education only leads people to poverty.",
      options: [
        "a - b - c - d",
        "a - c - d - b",
        "c - b - d - a",
        "c - b - a - d"
      ],
      correctAnswerIndex: 1,
      explanation: "a states belief that education brings success, c provides examples of rich educated people, d introduces opposing view, b supports that opposing view."
    },
    {
      id: "eng-74",
      section: "Writing: Paragraph Coherence",
      question: "Order the sentences:\na. Three of their children are girls.\nb. His wife W/ro Mulu, is younger than him by 2 years.\nc. Ato Lemma and W/ro Mulu have four children.\nd. Ato Lemma is a thirty-year-old person in my community.",
      options: [
        "c - b - d - a",
        "d - b - c - a",
        "a - c - d - b",
        "d - c - a - b"
      ],
      correctAnswerIndex: 1,
      explanation: "d introduces Ato Lemma, b introduces his wife, c introduces their 4 children, and a specifies 3 are girls."
    },

    // Writing: Types of Paragraph 75 - 77
    {
      id: "eng-75",
      section: "Writing: Types of Paragraph Writing",
      instruction: "DIRECTIONS (Questions 75–77): Read each short excerpt and identify the type of paragraph writing (argumentative, expository, descriptive, or narrative).",
      question: "\"First of all, the death penalty should only be a last resort. Moreover, if the death penalty is carried out, victims' families would take revenge and this causes chaos in society.\" This paragraph is:",
      options: [
        "argumentative",
        "expository",
        "descriptive",
        "narrative"
      ],
      correctAnswerIndex: 0,
      explanation: "Presents a debate/stance with supportive arguments; hence argumentative."
    },
    {
      id: "eng-76",
      section: "Writing: Types of Paragraph Writing",
      question: "\"Digestion begins in the mouth. This is called mechanical digestion as there is not any kind of chemical involved in the process...\" This excerpt is most likely:",
      options: [
        "argumentative",
        "descriptive",
        "expository",
        "narrative"
      ],
      correctAnswerIndex: 2,
      explanation: "Explains biological factual processes; hence expository."
    },
    {
      id: "eng-77",
      section: "Writing: Types of Paragraph Writing",
      question: "\"Eden is in her late twenties. She is of medium height. She has an average weight that fits her height. She respects people, and she is very polite and friendly.\" This paragraph is:",
      options: [
        "Descriptive",
        "Argumentative",
        "Expository",
        "Narrative"
      ],
      correctAnswerIndex: 0,
      explanation: "Describes physical appearance and personal traits of a person; hence descriptive."
    },

    // Writing: Letter Writing 78 - 80
    {
      id: "eng-78",
      section: "Writing: Letter Writing",
      instruction: "DIRECTIONS (Questions 78–80): Questions 78 to 80 are based on standard formal letter writing and layout rules. Identify the appropriate component.",
      question: "In the letter structure, \"(3) I am looking forward to hearing from you. Sincerely, Dewit Hibru\" is the:",
      options: [
        "greeting",
        "closing statement and sign-off",
        "salutation",
        "body of the letter"
      ],
      correctAnswerIndex: 1,
      explanation: "This is the complimentary close and closing statement."
    },
    {
      id: "eng-79",
      section: "Writing: Letter Writing",
      question: "In the letter, part (2) detailing the applicant's diploma, experience, and CV attachment is the:",
      options: [
        "greeting",
        "closing statement",
        "salutation",
        "body of the letter"
      ],
      correctAnswerIndex: 3,
      explanation: "Contains the main message and information; hence the body of the letter."
    },
    {
      id: "eng-80",
      section: "Writing: Letter Writing",
      question: "In the letter, \"(1) Dear sir,\" is the:",
      options: [
        "closing statement",
        "salutation",
        "body of the letter",
        "subject"
      ],
      correctAnswerIndex: 1,
      explanation: "'Dear Sir' is the formal opening salutation."
    },

    // Communicative Activities: 81 - 100
    {
      id: "eng-81",
      section: "Communicative Activities",
      instruction: "DIRECTIONS (Questions 81–100): The following questions present conversational dialogues in various communicative situations. Choose the most appropriate response for each dialogue.",
      question: "Lensa: \"My spoken English is really horrible; ________________?\"\nZemzem: \"Practice speaking every day in front of your friends.\"",
      options: [
        "why you learn English",
        "do you like English",
        "what is yours like",
        "what should I do"
      ],
      correctAnswerIndex: 3,
      explanation: "Asking for advice: 'what should I do?'"
    },
    {
      id: "eng-82",
      section: "Communicative Activities",
      question: "Student: ______________________\nTeacher: \"Yes. This will be our tomorrow's lesson.\"",
      options: [
        "Could you explain to me about active and passive voices?",
        "When do you teach us about active and passive voices?",
        "Who knows about active and passive voices?",
        "You could learn active and passive voices."
      ],
      correctAnswerIndex: 0,
      explanation: "A yes/no question asking if the teacher can explain the topic matches 'Yes. This will be our tomorrow's lesson.'"
    },
    {
      id: "eng-83",
      section: "Communicative Activities",
      question: "Friend: \"What do you think unemployment will be like in the future?\"\nYou: _______________________",
      options: [
        "I am sure today’s children won’t expect a job from the government",
        "In my opinion, none of a working age will be unemployed",
        "I think unemployment is a universal problem these days",
        "Think about today; tomorrow is another day"
      ],
      correctAnswerIndex: 1,
      explanation: "'In my opinion...' directly provides a perspective on future unemployment trends."
    },
    {
      id: "eng-84",
      section: "Communicative Activities",
      question: "Teacher: ____________________________________\nParent: \"You are right, wearing a uniform should be compulsory for class attendance.\"",
      options: [
        "Isn't it very disappointing to see students in the classroom without their uniform?",
        "Is it very disappointing to see students in the classroom without their uniform",
        "When do we see students in the classroom without their uniform",
        "Why do we see students in the classroom without their uniform"
      ],
      correctAnswerIndex: 0,
      explanation: "The negative question 'Isn't it very disappointing...?' seeks agreement, which the parent affirms with 'You are right'."
    },
    {
      id: "eng-85",
      section: "Communicative Activities",
      question: "Husband: \"Six people died and three were injured in a car accident today.\"\nWife: __________________ \"Has the cause been known?\"",
      options: [
        "Look after yourself on the road.",
        "Never trust a car driver.",
        "I am sorry to say this.",
        "What a terrible news!"
      ],
      correctAnswerIndex: 3,
      explanation: "Expressing shock and sympathy to tragic news: 'What terrible news!'"
    },
    {
      id: "eng-86",
      section: "Communicative Activities",
      question: "Abeya: \"I think that education is the only way to live a better life?\"\nTemesgen: \"True, but I should say __________________\"",
      options: [
        "going to college is not mandatory",
        "perhaps we need to learn further",
        "perhaps it is one among the few",
        "going to college is simple"
      ],
      correctAnswerIndex: 2,
      explanation: "Partially agreeing while moderating the absolute claim ('only way' -> 'one among few')."
    },
    {
      id: "eng-87",
      section: "Communicative Activities",
      question: "Neighbor: \"Today's youths have a much wider access to information than those who lived in the past.\"\nFather: \"Yes, but _____________________\"",
      options: [
        "it's good to remember those who lived in the past were less intelligent",
        "the trouble is they are indiscriminate in their choice of information",
        "we should appreciate the unlimited interest of today's youth",
        "the main point is they do not read all that comes their way"
      ],
      correctAnswerIndex: 1,
      explanation: "Acknowledging the access but adding a cautionary counterpoint about information quality."
    },
    {
      id: "eng-88",
      section: "Communicative Activities",
      question: "Teacher: \"Tell me the reasons why learning English is important to you.\"\nStudent: _______________________",
      options: [
        "To begin with, English is a compulsory school subject",
        "As a matter of fact, we learn English five days a week",
        "Believe it or not, my written English is very good",
        "Firstly, English is not my favourite school subject"
      ],
      correctAnswerIndex: 0,
      explanation: "Gives a structured reason: 'To begin with, English is a compulsory school subject.'"
    },
    {
      id: "eng-89",
      section: "Communicative Activities",
      question: "Mother: \"Why are you going so early today?\"\nDaughter: ________________ Mom.",
      options: [
        "Nobody said it is early",
        "Mind your own business",
        "In order to get a front seat",
        "It is not very early"
      ],
      correctAnswerIndex: 2,
      explanation: "Answers 'why' with purpose: 'In order to get a front seat'."
    },
    {
      id: "eng-90",
      section: "Communicative Activities",
      question: "Husband: \"Where would you like us to go for dinner?\"\nWife: ___________________ \"I like their French toast.\"",
      options: [
        "How about trying Haile Grand Hotel?",
        "I do not have enough money for dinner.",
        "I do not care about dinner tonight.",
        "Is your sister going with us?"
      ],
      correctAnswerIndex: 0,
      explanation: "Suggests a venue: 'How about trying Haile Grand Hotel?'"
    },
    {
      id: "eng-91",
      section: "Communicative Activities",
      question: "Ararso: \"What is your opinion about the need for college education?\"\nJirata: ___________________",
      options: [
        "What is the requirement to join college?",
        "I feel certain that it's absolutely necessary.",
        "None of my children joined college.",
        "I think I've a good idea about it."
      ],
      correctAnswerIndex: 1,
      explanation: "Directly expresses personal conviction/opinion on the need for college education."
    },
    {
      id: "eng-92",
      section: "Communicative Activities",
      question: "Mother: \"Tell me why schools are closed in Kiremt in Ethiopia.\"\nDaughter: ___________________________",
      options: [
        "Did you learn year-long yourself?",
        "Nobody likes going to school.",
        "I hate Kiremt, Mom.",
        "I haven't any clue, Mom."
      ],
      correctAnswerIndex: 3,
      explanation: "Expresses lack of knowledge politely: 'I haven't any clue, Mom.'"
    },
    {
      id: "eng-93",
      section: "Communicative Activities",
      question: "Ahmed: ______________________________\nSamson: \"You know why? He is such a funny boy that he makes everyone laugh.\"",
      options: [
        "Do you like to sit next to Solomon in the classroom",
        "Where do many students like to sit in the classroom",
        "Why do many students like to sit next to Solomon",
        "Is Solomon a funny boy"
      ],
      correctAnswerIndex: 2,
      explanation: "The response 'You know why? He is...' answers a 'Why do...' question."
    },
    {
      id: "eng-94",
      section: "Communicative Activities",
      question: "Kidist: _______________\nHana: \"With sugar, please.\"",
      options: [
        "Would you prefer your coffee with or without sugar",
        "How much sugar do you like in your coffee",
        "Is it good to drink coffee without sugar",
        "Do you like your coffee with sugar"
      ],
      correctAnswerIndex: 0,
      explanation: "Directly answered by 'With sugar, please.'"
    },
    {
      id: "eng-95",
      section: "Communicative Activities",
      question: "Student: \"Today, I'm interviewing Business Managers to give me some idea about the field. Let me begin by ________________\"\nManager: \"To put it simply, I joined the department because I wanted to learn how to run my own business.\"",
      options: [
        "asking you how you decided to study business management",
        "telling you the history of the field in our context",
        "telling you a few important things about the field",
        "explaining job opportunities in the field"
      ],
      correctAnswerIndex: 0,
      explanation: "Manager answers why they joined the field, matching 'asking you how you decided to study business management'."
    },
    {
      id: "eng-96",
      section: "Communicative Activities",
      question: "Father: _________________?\nMother: \"He did not get full mark on his English exam.\"",
      options: [
        "Why is Zena crying",
        "How is Zena crying",
        "Who is crying Zena",
        "When is Zena crying"
      ],
      correctAnswerIndex: 0,
      explanation: "Asks for the reason behind crying: 'Why is Zena crying?'"
    },
    {
      id: "eng-97",
      section: "Communicative Activities",
      question: "Lilu: ___________________\nMaria: \"I'm sorry; I'm a stranger too.\"",
      options: [
        "Could you tell me where the director's office is?",
        "Hi, you know the director's office, don't you?",
        "Where is the director's office, if I may ask?",
        "I am sorry to say that, but I got lost."
      ],
      correctAnswerIndex: 0,
      explanation: "Asking directions ('Could you tell me where...') answered by 'I'm a stranger too.'"
    },
    {
      id: "eng-98",
      section: "Communicative Activities",
      question: "Nuru: \"Well done, Daniel! You got an A grade on your Maths.\"\nDaniel: \"Really? ______________\"",
      options: [
        "A good achievement, isn't it",
        "Thank you for the good news.",
        "I'm glad you liked it.",
        "Nice work, isn't it?"
      ],
      correctAnswerIndex: 1,
      explanation: "Gracious acknowledgment of being informed of good test results."
    },
    {
      id: "eng-99",
      section: "Communicative Activities",
      question: "Friend: _______________ \"I'm almost blind in the dark.\"\nYou: \"Don't worry about it.\"",
      options: [
        "Will you forgive me for stepping on your foot?",
        "I shouldn't have stepped on your foot.",
        "Excuse me for stepping on your foot.",
        "Did I step on your foot?"
      ],
      correctAnswerIndex: 2,
      explanation: "Polite apology for an accidental mishap ('Excuse me for stepping on your foot')."
    },
    {
      id: "eng-100",
      section: "Communicative Activities",
      question: "Daughter: \"I think brilliant students should be exempted from cost-sharing.\"\nMother: _________________________ \"money shouldn't be a reward for good work.\"",
      options: [
        "No, I don't accept this foolish idea",
        "I am afraid I can't agree",
        "This is stupid",
        "Shut up"
      ],
      correctAnswerIndex: 1,
      explanation: "Polite and civil disagreement: 'I am afraid I can't agree'."
    }
  ] as Question[]
};
