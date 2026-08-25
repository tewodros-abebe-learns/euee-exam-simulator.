import { type Question } from '../services/geminiService';

export const english2016Exam = {
  id: "euee-2016-english",
  title: "2016 E.C. ESSLCE English Examination",
  subject: "English",
  grade: "Grade 12",
  timeLimit: 7200, // 120 minutes (2 hours)
  questions: [
    // Section I: COMMUNICATIVE ACTIVITIES (Questions 1 - 20)
    {
      id: "eng16-1",
      section: "Communicative Activities",
      instruction: "DIRECTIONS: Questions 1 - 20 are presented in the form of conversations. Choose the alternative that is most appropriate to complete the dialogue.",
      question: "Father: It is getting too cloudy but the forecast has it that the day will be dry.\nDaughter: Dad! _______ rain. Let's rather rush home.",
      options: [
        "When it is dry, there is no",
        "If the day is cloudy, it may not",
        "I heard it is unlikely to",
        "There is no doubt it will"
      ],
      correctAnswerIndex: 3,
      explanation: "The daughter is urging to 'rush home' because of the dark clouds, indicating certainty that it will rain ('There is no doubt it will rain')."
    },
    {
      id: "eng16-2",
      section: "Communicative Activities",
      question: "Yonas: _______ You seem to be busy.\nSorome: My glasses! Have you seen them?",
      options: [
        "What are you looking for?",
        "Haven't you found your glasses?",
        "What are you doing?",
        "Where are your glasses?"
      ],
      correctAnswerIndex: 0,
      explanation: "Yonas asks 'What are you looking for?' in response to seeing Sorome frantically searching around."
    },
    {
      id: "eng16-3",
      section: "Communicative Activities",
      question: "Gelebo: I hope you gave the money to Mom.\nDandero: _______ it was stolen. It should be in a taxi.",
      options: [
        "How much was it? Perhaps",
        "I hope you will forgive me, but",
        "The thieves, and",
        "Unfortunately, I didn't, so"
      ],
      correctAnswerIndex: 1,
      explanation: "'I hope you will forgive me, but it was stolen' politely delivers unfortunate news and takes responsibility for failing to deliver the money."
    },
    {
      id: "eng16-4",
      section: "Communicative Activities",
      question: "Aster: Is he your husband? I haven't met him before.\nLidya: Come on, _______ How dare you?",
      options: [
        "I love my husband.",
        "my husband is handsome.",
        "why do you ask?",
        "what do you mean?"
      ],
      correctAnswerIndex: 3,
      explanation: "'what do you mean? How dare you?' fits an indignant or surprised response to a questionable or inappropriate remark."
    },
    {
      id: "eng16-5",
      section: "Communicative Activities",
      question: "Teacher: I don't know why but I am feeling very dizzy.\nFriend: _______ see your doctor immediately. Right now!",
      options: [
        "You had better",
        "It may be good to",
        "You might",
        "Oh! Perhaps"
      ],
      correctAnswerIndex: 0,
      explanation: "'You had better' is used for strong advice or urgency when warning someone of immediate medical attention."
    },
    {
      id: "eng16-6",
      section: "Communicative Activities",
      question: "Tutu: I am leaving for US on Monday. US, California.\nTiti: _______ Could you repeat that, please?",
      options: [
        "Sorry, I didn't catch that.",
        "Are you leaving on Monday?",
        "Are you trying to fool me?",
        "That is too good to be true."
      ],
      correctAnswerIndex: 0,
      explanation: "'Sorry, I didn't catch that.' is a standard polite clarification phrase before asking someone to repeat what they said."
    },
    {
      id: "eng16-7",
      section: "Communicative Activities",
      question: "Emebet: _______ I have won a scholarship to Germany.\nGenet: Are you serious? That is like a lottery.",
      options: [
        "I have been trying for long.",
        "You won't believe this but",
        "What a scholarship!",
        "I like German universities."
      ],
      correctAnswerIndex: 1,
      explanation: "'You won't believe this but I have won a scholarship...' introduces surprising and exciting news."
    },
    {
      id: "eng16-8",
      section: "Communicative Activities",
      question: "You: Why should they go at this time of the year?\nFriend: _______ the weather is great now. Business is also recovering.",
      options: [
        "You may not take it",
        "The convincing reason",
        "To be certain",
        "To give you an idea"
      ],
      correctAnswerIndex: 3,
      explanation: "'To give you an idea' introduces examples/reasons explaining the background situation."
    },
    {
      id: "eng16-9",
      section: "Communicative Activities",
      question: "Mamusha: You've got a nice car. It looks great.\nYaya: Sure, but _______",
      options: [
        "it is not very good, I'm afraid.",
        "it is brand new straight from Japan.",
        "it is as fast as yours.",
        "it is not as fast as yours."
      ],
      correctAnswerIndex: 3,
      explanation: "'Sure, but it is not as fast as yours.' politely qualifies the compliment with a humble comparison."
    },
    {
      id: "eng16-10",
      section: "Communicative Activities",
      question: "Mom: Why don't you buy yourself better shoes, son?\nSon: _______ I'll buy top-quality ones.",
      options: [
        "If Dad gives me more money,",
        "All shoes in the town are bad, but",
        "I like these shoes, Mom",
        "These ones are fine, but"
      ],
      correctAnswerIndex: 0,
      explanation: "A first conditional sentence structure: 'If Dad gives me more money, I'll buy top-quality ones.'"
    },
    {
      id: "eng16-11",
      section: "Communicative Activities",
      question: "Kenan: I've been to five different countries and they're all in Europe.\nRobel: _______ is that true and why did you go?",
      options: [
        "Let me see",
        "Please wait",
        "Pardon",
        "I'm sorry"
      ],
      correctAnswerIndex: 2,
      explanation: "'Pardon' expresses disbelief or requests confirmation of a remarkable claim."
    },
    {
      id: "eng16-12",
      section: "Communicative Activities",
      question: "Umod: I don't like raw meat. How does it taste?\nShola: _______ But most Ethiopians are enjoying it.",
      options: [
        "I don't either",
        "Neither don't I",
        "So do I",
        "Either do I"
      ],
      correctAnswerIndex: 0,
      explanation: "To agree with a negative statement ('I don't like...'), we say 'I don't either' or 'Neither do I'."
    },
    {
      id: "eng16-13",
      section: "Communicative Activities",
      question: "Tourist: _______ in your country?\nTour guide: You know, the altitude here is not very high.",
      options: [
        "Why is it so warm",
        "Could it be very warm",
        "What is the altitude",
        "What is the weather"
      ],
      correctAnswerIndex: 0,
      explanation: "Asking 'Why is it so warm in your country?' elicits the explanation that the altitude is not high."
    },
    {
      id: "eng16-14",
      section: "Communicative Activities",
      question: "Bultum: _______ think of taking a break?\nHagos: I was just about to say that. Let's go.",
      options: [
        "When do you",
        "Would you like to",
        "What do you",
        "How do you"
      ],
      correctAnswerIndex: 2,
      explanation: "'What do you think of [doing something]?' is standard English for asking someone's opinion on a suggestion."
    },
    {
      id: "eng16-15",
      section: "Communicative Activities",
      question: "Ziyad: I hear they provide free lunch here.\nMukerem: No! _______ nobody will do the public works.",
      options: [
        "Despite lunch is free,",
        "If you have free lunch",
        "In my opinion",
        "If there is free lunch"
      ],
      correctAnswerIndex: 3,
      explanation: "'If there is free lunch, nobody will do the public works.' correctly uses conditional clause."
    },
    {
      id: "eng16-16",
      section: "Communicative Activities",
      question: "Chief: I think we should leave. I didn't like the atmosphere.\nYared: _______ things seem to be changing for positive. Let's wait a bit.",
      options: [
        "On the one hand, however",
        "Even though that is the case",
        "If you think that way",
        "I agree up to a point, but"
      ],
      correctAnswerIndex: 3,
      explanation: "'I agree up to a point, but things seem to be changing...' conveys partial agreement followed by a counter-argument."
    },
    {
      id: "eng16-17",
      section: "Communicative Activities",
      question: "Tadesse: Why is the roof leaking?\nCarpenter: _______ it hasn't been serviced for long.",
      options: [
        "The reason as a fact is that",
        "Yes, it is because of the reason that",
        "I think because of",
        "This is due to the fact that"
      ],
      correctAnswerIndex: 3,
      explanation: "'This is due to the fact that [clause]' is the grammatically correct formulation expressing cause."
    },
    {
      id: "eng16-18",
      section: "Communicative Activities",
      question: "Manager: What do you think of buying a new vehicle for our office?\nDeputy: _______ we are short of budget. Besides, there is no need for one.",
      options: [
        "To begin with",
        "If you ask me",
        "I really feel",
        "What I think is"
      ],
      correctAnswerIndex: 1,
      explanation: "'If you ask me, we are short of budget...' introduces a personal recommendation or candid professional opinion."
    },
    {
      id: "eng16-19",
      section: "Communicative Activities",
      question: "Biru: _______ going for a walk?\nMamitu: A walk? You should be crazy. It's going to rain soon.",
      options: [
        "Did I hear you like",
        "How do you feel about",
        "Why are you",
        "Do you enjoy"
      ],
      correctAnswerIndex: 1,
      explanation: "'How do you feel about going for a walk?' is an idiomatic way to propose an activity."
    },
    {
      id: "eng16-20",
      section: "Communicative Activities",
      question: "Stranger: Where is the nearest bank around?\nYou: _______ that tall building down there.",
      options: [
        "I don't think it could be",
        "The bank is far away from",
        "You should know",
        "It's on the corner of"
      ],
      correctAnswerIndex: 3,
      explanation: "'It's on the corner of that tall building down there.' gives clear spatial directions."
    },

    // Section II: LANGUAGE FOCUS (Questions 21 - 48)
    {
      id: "eng16-21",
      section: "Language Focus",
      instruction: "DIRECTIONS: Questions from 21 - 48 are incomplete sentences. Choose the word/phrase that best completes the sentence accurately.",
      question: "We all failed in the recruitment exam. _______ they accepted none of us. I think another round of advertisement is inevitable.",
      options: [
        "Which means",
        "Consequently",
        "In effect",
        "Accordingly"
      ],
      correctAnswerIndex: 0,
      explanation: "'Which means' summarizes the immediate logical consequence of everyone failing."
    },
    {
      id: "eng16-22",
      section: "Language Focus",
      question: "Let me go and check if the car is ready. It _______ when I came this morning.",
      options: [
        "was being fixed",
        "will have to be fixed",
        "might be fixed",
        "intended to be fixed"
      ],
      correctAnswerIndex: 0,
      explanation: "Past continuous passive ('was being fixed') indicates an ongoing action in the past at the time of arrival."
    },
    {
      id: "eng16-23",
      section: "Language Focus",
      question: "We need an immediate restocking. Did you know we were left with _______ food in the fridge?",
      options: [
        "some",
        "scarce",
        "little",
        "a little"
      ],
      correctAnswerIndex: 2,
      explanation: "'little' (without 'a') denotes a negative scarcity meaning almost none, necessitating immediate restocking."
    },
    {
      id: "eng16-24",
      section: "Language Focus",
      question: "They had to get together at six in the morning and when we got up at 5:45 a.m., we thought we wouldn't make it. However, we _______ to get there before they left.",
      options: [
        "must be able",
        "could be able",
        "are able",
        "were able"
      ],
      correctAnswerIndex: 3,
      explanation: "'were able to' is used to express successful achievement of a specific action in the past."
    },
    {
      id: "eng16-25",
      section: "Language Focus",
      question: "We are going to use this room _______ a kitchen for the time being. Once the painting is done, however, we will get back there, for it is bigger and more comfortable.",
      options: [
        "for",
        "like",
        "in",
        "as"
      ],
      correctAnswerIndex: 3,
      explanation: "'as a kitchen' denotes serving the specific functional role of a kitchen."
    },
    {
      id: "eng16-26",
      section: "Language Focus",
      question: "When we were in Gambella, every day after work, we _______ sit by the river watching fishers caught the big fish called 'gur' and made a lot of money out of it.",
      options: [
        "used to",
        "have used to",
        "are used to",
        "were used to"
      ],
      correctAnswerIndex: 0,
      explanation: "'used to + base verb' expresses habitual past actions that no longer occur."
    },
    {
      id: "eng16-27",
      section: "Language Focus",
      question: "These are all _______ people. They don't even know what is good and what is not for them. First, give them a thorough explanation and then call me.",
      options: [
        "confuse",
        "confusion",
        "confused",
        "confusing"
      ],
      correctAnswerIndex: 2,
      explanation: "'confused' is the past participial adjective describing people who lack clarity or understanding."
    },
    {
      id: "eng16-28",
      section: "Language Focus",
      question: "I would like _______ her before she leaves. There is a big secret she didn't want to tell the family.",
      options: [
        "see",
        "to be seeing",
        "seeing",
        "to see"
      ],
      correctAnswerIndex: 3,
      explanation: "'would like' is followed by the to-infinitive ('to see')."
    },
    {
      id: "eng16-29",
      section: "Language Focus",
      question: "I would have married her _______ I had known her dad was one of the wealthiest in the town. I was just unlucky.",
      options: [
        "unless",
        "because",
        "before",
        "if only"
      ],
      correctAnswerIndex: 3,
      explanation: "'if only' introduces a counterfactual conditional expressing regret in past perfect ('if only I had known')."
    },
    {
      id: "eng16-30",
      section: "Language Focus",
      question: "Neither staff members nor the police _______ on the premise when the gangs robbed everything. I guess it wouldn't be easy to arrest them.",
      options: [
        "are",
        "were",
        "is",
        "was"
      ],
      correctAnswerIndex: 1,
      explanation: "In 'Neither... nor...' structures, the verb agrees with the closer subject ('the police' is plural), and the past robbery requires 'were'."
    },
    {
      id: "eng16-31",
      section: "Language Focus",
      question: "We haven't done the job _______ but I know we will finish it by Monday next week.",
      options: [
        "still",
        "up till",
        "now",
        "yet"
      ],
      correctAnswerIndex: 3,
      explanation: "'yet' is used in negative present perfect constructions at the end of the clause ('haven't done the job yet')."
    },
    {
      id: "eng16-32",
      section: "Language Focus",
      question: "I _______ to that hotel so many times although I always get disappointed with their service.",
      options: [
        "had been",
        "have been",
        "was",
        "like being"
      ],
      correctAnswerIndex: 1,
      explanation: "Present perfect 'have been' describes life experience spanning up to the present."
    },
    {
      id: "eng16-33",
      section: "Language Focus",
      question: "Are you telling me he is ill? Sorry about that. I _______ see him right after class.",
      options: [
        "might",
        "am going to",
        "will",
        "could"
      ],
      correctAnswerIndex: 2,
      explanation: "'will' is used for spontaneous decisions made at the moment of speaking upon hearing the news."
    },
    {
      id: "eng16-34",
      section: "Language Focus",
      question: "The movie was _______ boring _______ I fell asleep while I was watching it.",
      options: [
        "so.......that",
        "so.......as",
        "such........that",
        "such a........that"
      ],
      correctAnswerIndex: 0,
      explanation: "'so + adjective + that + result clause' ('so boring that I fell asleep')."
    },
    {
      id: "eng16-35",
      section: "Language Focus",
      question: "Obviously, the car is very expensive, _______ it is fuel-economical. If I had the money, I'd go for it.",
      options: [
        "in addition",
        "but on the other hand",
        "even so",
        "but unlike that"
      ],
      correctAnswerIndex: 1,
      explanation: "'but on the other hand' introduces a contrasting positive advantage balancing the high cost."
    },
    {
      id: "eng16-36",
      section: "Language Focus",
      question: "His suit is _______ mine but the color is boring. I wouldn't take it even for free.",
      options: [
        "rather expensive as",
        "not as much costly as",
        "almost the same as",
        "very different from"
      ],
      correctAnswerIndex: 2,
      explanation: "'almost the same as' correctly links similarity in style before the contrasting conjunction 'but'."
    },
    {
      id: "eng16-37",
      section: "Language Focus",
      question: "When I met her at the party, she told me she _______ her salary for the previous month. I just couldn't believe her.",
      options: [
        "has collected",
        "had collected",
        "collected",
        "did collect"
      ],
      correctAnswerIndex: 1,
      explanation: "Past perfect 'had collected' represents an action completed before another past event (reported speech in past)."
    },
    {
      id: "eng16-38",
      section: "Language Focus",
      question: "You _______ speak to him like that. After all, he is your elder brother and deserves some respect.",
      options: [
        "ought not to",
        "will rather not",
        "will not",
        "might not"
      ],
      correctAnswerIndex: 0,
      explanation: "'ought not to' conveys strong moral obligation or duty of respect towards an elder."
    },
    {
      id: "eng16-39",
      section: "Language Focus",
      question: "They are talking about _______ artist we saw as we were coming here. What he was doing tells that he was definitely mentally unstable.",
      options: [
        "which",
        "whom",
        "an",
        "the"
      ],
      correctAnswerIndex: 3,
      explanation: "Definite article 'the' is used because the artist is already known and uniquely identified by the shared past sighting."
    },
    {
      id: "eng16-40",
      section: "Language Focus",
      question: "Your wife _______ since 9.00 am but you don't even call and apologize for not being able to arrive until now. What excuse do you have for this?",
      options: [
        "has been waiting",
        "would have been waiting",
        "is waiting",
        "was waiting"
      ],
      correctAnswerIndex: 0,
      explanation: "Present perfect continuous ('has been waiting') indicates an action starting at 9:00 am and continuing right up to the present moment."
    },
    {
      id: "eng16-41",
      section: "Language Focus",
      question: "We wish we _______ her home, but her mom is not in the country. Perhaps we can do that when she gets back next month.",
      options: [
        "will send",
        "would send",
        "send",
        "have sent"
      ],
      correctAnswerIndex: 1,
      explanation: "Wish regarding present/future desire with external agency uses 'would + verb' ('would send')."
    },
    {
      id: "eng16-42",
      section: "Language Focus",
      question: "Originally, the book _______ in Spanish, and a few years ago, it _______ in to English.",
      options: [
        "were written/were translated",
        "are written/are translated",
        "was written/was translated",
        "is written/is translated"
      ],
      correctAnswerIndex: 2,
      explanation: "Singular subject 'the book' in the historical past takes 'was written / was translated'."
    },
    {
      id: "eng16-43",
      section: "Language Focus",
      question: "It is _______ hot to toil in this room. I suggest that we leave or switch the air conditioner on and work for an hour.",
      options: [
        "too",
        "pretty",
        "very",
        "quite"
      ],
      correctAnswerIndex: 0,
      explanation: "'too + adjective + infinitive' indicates an excessive degree preventing comfortable action ('too hot to toil')."
    },
    {
      id: "eng16-44",
      section: "Language Focus",
      question: "I _______ come but it all depends on whether or not it rains. My advice is that, you start right on time with whatever number of attendees you happen to have.",
      options: [
        "shall",
        "must",
        "will",
        "may"
      ],
      correctAnswerIndex: 3,
      explanation: "Modal 'may' denotes possibility depending on an external condition ('whether or not it rains')."
    },
    {
      id: "eng16-45",
      section: "Language Focus",
      question: "Don't give them time. _______ their plane arrives, have them under arrest and the rest of the process will continue.",
      options: [
        "Soon before",
        "Sooner after",
        "As soon as",
        "Immediately soon"
      ],
      correctAnswerIndex: 2,
      explanation: "Subordinating conjunction 'As soon as' denotes immediate action upon the occurrence of an event."
    },
    {
      id: "eng16-46",
      section: "Language Focus",
      question: "I didn't do it intentionally but I know she got very angry _______ me. I will apologize to her anyway.",
      options: [
        "at",
        "by",
        "with",
        "upon"
      ],
      correctAnswerIndex: 2,
      explanation: "The standard preposition with the adjective angry when referring to a person is 'angry with (or at) someone'."
    },
    {
      id: "eng16-47",
      section: "Language Focus",
      question: "If you are not sure of how much he earns, _______ do you need to make a guess? After all, that will hurt his feeling.",
      options: [
        "for what",
        "what reason",
        "why",
        "when"
      ],
      correctAnswerIndex: 2,
      explanation: "'why' asks for the purpose or reason behind an unnecessary action."
    },
    {
      id: "eng16-48",
      section: "Language Focus",
      question: "Despite _______ all the questions in this exam correctly, he is not one of my top students. He is just an average.",
      options: [
        "answering",
        "has answered",
        "answer",
        "answered"
      ],
      correctAnswerIndex: 0,
      explanation: "The preposition 'Despite' is followed by a gerund (-ing form) or noun phrase ('Despite answering...')."
    },

    // Section III: COMPREHENSION (Questions 49 - 68)
    {
      id: "eng16-49",
      section: "Comprehension - Section One: Sentence Comprehension",
      instruction: "DIRECTIONS: For questions 49 and 50, choose the sentence with the closest meaning to the head sentence from the four alternatives given.",
      question: "Whether you go this time of the year is your decision but the weather is anything but sunny.",
      options: [
        "The weather is very sunny and could be warm.",
        "You can go there this year and enjoy the weather.",
        "The weather this time is terrible.",
        "The weather this time is not sunny at all."
      ],
      correctAnswerIndex: 3,
      explanation: "'Anything but [adjective]' is an idiom meaning 'not at all [adjective]'. Thus 'anything but sunny' means 'not sunny at all'."
    },
    {
      id: "eng16-50",
      section: "Comprehension - Section One: Sentence Comprehension",
      question: "Had we met him when he came, we could have convinced him.",
      options: [
        "I am happy we didn't meet him.",
        "Unfortunately we didn't meet him.",
        "We were away when he came.",
        "We were able to convince him."
      ],
      correctAnswerIndex: 1,
      explanation: "Third conditional inversion ('Had we met him...') signifies a counterfactual past: we did not meet him, so we couldn't convince him."
    },

    // Reading Passage I: Chimpanzees: Intelligent, Social and Violent (Questions 51 - 59)
    {
      id: "eng16-51",
      section: "Comprehension - Section Two: Reading Passage I",
      passage: "Chimpanzees (Pan troglodytes), also known as chimps, are one of our closest living relatives and members of the great ape family, along with gorillas, orangutans, bonobos and humans. Chimps share 98.7% of their DNA with humans and have a lot of the same traits. They are known for being intelligent, social and violent animals that live in complex societies. Chimpanzees have suffered greatly from the increasing presence and influence of modern humans in their environment and are now threatened with extinction.\n\nHow Big Is a Chimpanzee?\nChimpanzees are between 3 feet 3 inches and 5 feet 6 inches (1 to 1.7 meters) tall when standing upright like a human. However, they mostly walk on all fours using their knuckles and feet. Males are slightly bigger than females. A male can weigh up to about 154 lbs. (70 kilograms) compared with a maximum weight of about 110 lbs. (50 kg) for a female, according to the University of Michigan's Animal Diversity Web (ADW). Although currently categorized among endangered species, chimps can live up to about 50 years. They are stronger than humans, despite being smaller. In fact, they are about 1.35 times more powerful than humans as they have more fast-twitch muscle fibers, which are good for strength and speed, Live Science reported. These fast-twitch muscle fibers enable chimps to outperform people in tasks such as pulling and jumping. Humans evolved to have more slow-twitch muscle fibers that are better for endurance and traveling long distances.\n\nDo Chimpanzees Attack People?\nWild chimpanzees are usually fearful of humans and will keep their distance. However, there have been recorded incidents of chimpanzees attacking and killing people. This usually happens when humans move into and destroy chimpanzee habitats, reducing their access to food. Chimpanzees may then take to stealing unprotected human food, such as crops, and in the process become more confident around humans. Chimpanzees have attacked more than 20 people in the Western Region of Uganda over the past 20 years and killed at least three human infants since 2014, National Geographic reported in 2019. Chimpanzees typically direct their aggressive and sometimes predatory behavior toward children because the animals are more fearful of larger human adults, especially men, according to National Geographic. Chimps have also snatched and killed human babies. Most of the time these are isolated and seemingly reckless attacks by individual chimps, but one chimpanzee in the 1990s killed seven children before he was killed by humans, National Geographic reported.",
      question: "What can we deduce from Paragraph 2 about the mission of the University of Michigan's Animal Diversity Web (ADW)?",
      options: [
        "It offers courses on various animals found in different parts of the world.",
        "It provides information on different animal species to foster comparisons.",
        "It specializes in chimps and has comprehensive information on them.",
        "It is among the top institutions in the world that studies the apes family."
      ],
      correctAnswerIndex: 1,
      explanation: "ADW compiles comprehensive biological data and metrics (weights, sizes, lifespans) across species to enable comparative zoological study."
    },
    {
      id: "eng16-52",
      section: "Comprehension - Section Two: Reading Passage I",
      question: "Which one of the following sentences best describes the relationship of chimps with humans?",
      options: [
        "It is usual for chimps to steal unprotected human food.",
        "Chimps can leave their habitats in the interest of humans.",
        "Chimps can kill if humans get into their territory.",
        "Wild chimps are fearful of humans and do not attack."
      ],
      correctAnswerIndex: 2,
      explanation: "Paragraph 3 explains that when humans destroy or encroach into chimp habitats, tensions and attacks (including fatal ones) can occur."
    },
    {
      id: "eng16-53",
      section: "Comprehension - Section Two: Reading Passage I",
      question: "Which one of the following is true about chimpanzees in the Western Region of Uganda?",
      options: [
        "They are aggressive and usually attack human beings.",
        "When stealing food, they become more confident than humans.",
        "They obviously kill one person per year.",
        "They attack children more than they do adults."
      ],
      correctAnswerIndex: 3,
      explanation: "Paragraph 3 notes: 'Chimpanzees typically direct their aggressive and sometimes predatory behavior toward children because the animals are more fearful of larger human adults.'"
    },
    {
      id: "eng16-54",
      section: "Comprehension - Section Two: Reading Passage I",
      question: "What does 'predatory behavior' as used in Paragraph 3 mean?",
      options: [
        "Attacking individual children consistently.",
        "Taking advantage of vulnerable situations.",
        "Killing and eating human beings.",
        "Being afraid of larger human beings."
      ],
      correctAnswerIndex: 2,
      explanation: "Predatory behavior in zoology refers to hunting, killing, and consuming prey."
    },
    {
      id: "eng16-55",
      section: "Comprehension - Section Two: Reading Passage I",
      question: "Who does 'our' as used in Paragraph 1 Line 1 refer to?",
      options: [
        "Human beings",
        "Friends talking",
        "Chimps",
        "The writers"
      ],
      correctAnswerIndex: 0,
      explanation: "'...one of our closest living relatives...' refers to humanity / all human beings."
    },
    {
      id: "eng16-56",
      section: "Comprehension - Section Two: Reading Passage I",
      question: "Which one of the following sentences, according to the passage, is true about the great ape family?",
      options: [
        "In terms of family categorization, humans do not differ from apes.",
        "Chimps are the most intelligent of all members of its family group.",
        "Chimps are closer to humans than any other living relative.",
        "Except chimps, other apes close to humans have gone extinct."
      ],
      correctAnswerIndex: 2,
      explanation: "Paragraph 1 states chimps are one of our closest living relatives, sharing 98.7% of their DNA with humans."
    },
    {
      id: "eng16-57",
      section: "Comprehension - Section Two: Reading Passage I",
      question: "What could be taken as contradictory about chimps in the passage, in Paragraph 1?",
      options: [
        "That chimps are apes but still share a lot with humans.",
        "That chimps live in complex societies but are just apes.",
        "That chimps are intelligent and social but violent.",
        "That chimps and humans belong to the same family."
      ],
      correctAnswerIndex: 2,
      explanation: "Being highly social and intelligent usually implies cooperation, yet chimps are simultaneously described as inherently violent."
    },
    {
      id: "eng16-58",
      section: "Comprehension - Section Two: Reading Passage I",
      question: "How tall could an average chimpanzee be when standing upright?",
      options: [
        "Around 4 feet 7 inches",
        "Around 4 feet 2 inches",
        "Around 5 feet 3 inches",
        "Around 4 feet 4.5 inches"
      ],
      correctAnswerIndex: 3,
      explanation: "Chimps range from 3 ft 3 in (39 in) to 5 ft 6 in (66 in). The midpoint average is (39 + 66) / 2 = 52.5 inches = 4 feet 4.5 inches."
    },
    {
      id: "eng16-59",
      section: "Comprehension - Section Two: Reading Passage I",
      question: "According to Paragraph 2, which one of the following is true about chimps?",
      options: [
        "Female chimpanzees do not weigh as much as human beings do.",
        "Chimps are now given special attention so they grow in number.",
        "Chimpanzees are more powerful, but smaller than human beings.",
        "These days, most chimpanzees live as long as human beings do."
      ],
      correctAnswerIndex: 2,
      explanation: "Paragraph 2 states directly: 'They are stronger than humans, despite being smaller. In fact, they are about 1.35 times more powerful than humans...'"
    },

    // Reading Passage II: Child Abuse (Questions 60 - 68)
    {
      id: "eng16-60",
      section: "Comprehension - Section Three: Reading Passage II",
      passage: "Child abuse is a phenomenon that knows no social, geographic or racial boundaries. It occurs in the best of families in wealthy suburbs and in rural areas as well. It is, in fact, a national plague that experts say is likely to create another generation of child abusers in America from among those being abused today.\n\nFor years, the problem was hidden behind the closed doors of houses or apartments. But, since the passage of laws in the 1970s requiring health and other professionals to report all cases of suspected abuse, a quiet revolution has been occurring. More cases of child abuse are being reported, and social-welfare agencies are getting help for both the children and their parents. That is not to say, however, that the reporting is in any way complete. More than 5,000 cases are reported annually to the Philadelphia County Children and Youth Agency, but a spokeswoman said, \"There's a lot more out there that goes unreported.\" Schools are just now beginning to focus on abuse, the spokeswoman said. \"Out of the quarter-million kids within the Philadelphia schools, we received only 300 reports last year. However, the schools are making strides in this area,\" she said. To increase the frequency of reporting, institutions that come into contact with injured children are training staff members to recognize abuse. The tremendous amount of stress in today's society both within and outside the home is considered one of the main factors in the rise of child abuse.\n\nPoor marital relationships, single parenthood, social and economic problems, unemployment and social isolation add undue stress to our lives. The problem of social isolation is critical. Today, people are moving around and finding themselves living further away from their families and the emotional support which they provide. Mothers find themselves living either in large city apartment complexes or suburban communities in which they know absolutely no one. In this lonely atmosphere, they try to deal with the pressures of being the parent of one, two or three children.",
      question: "Which one of the following, according to Paragraph 2, is true about child abuse reports in Philadelphia?",
      options: [
        "Reports of over 5,000 cases per annum are promisingly high.",
        "The Children and Youth Agency is receiving incomplete reports on cases.",
        "Cases are being reported extensively.",
        "Incidents reported are far less than the actual problem."
      ],
      correctAnswerIndex: 3,
      explanation: "A spokeswoman stated: 'There's a lot more out there that goes unreported,' meaning reported cases represent only a fraction of the actual problem."
    },
    {
      id: "eng16-61",
      section: "Comprehension - Section Three: Reading Passage II",
      question: "What, according to the passage, is a possible cause of child abuse?",
      options: [
        "Being under straining situations",
        "Social events in or outside the home",
        "Poor reporting system",
        "Individuals with ill motives"
      ],
      correctAnswerIndex: 0,
      explanation: "The passage notes that the tremendous amount of stress and straining socioeconomic pressures in today's society are main factors."
    },
    {
      id: "eng16-62",
      section: "Comprehension - Section Three: Reading Passage II",
      question: "Which one of the following is NOT a possible cause of undue stress?",
      options: [
        "Disagreement between spouses",
        "Doing a job one is not interested in",
        "Failure to afford a living",
        "Loneliness and isolated life"
      ],
      correctAnswerIndex: 1,
      explanation: "While marital discord, poverty, unemployment, and social isolation are explicitly listed as causes of stress, job disinterest is not mentioned."
    },
    {
      id: "eng16-63",
      section: "Comprehension - Section Three: Reading Passage II",
      question: "Why do mothers move to large city apartment complexes or suburban communities?",
      options: [
        "That allows them to live independently.",
        "That is where they can keep their children.",
        "That is what they can afford.",
        "Such places are luxurious to live in."
      ],
      correctAnswerIndex: 2,
      explanation: "Families relocate due to economic circumstances, job availability, and what they can afford."
    },
    {
      id: "eng16-64",
      section: "Comprehension - Section Three: Reading Passage II",
      question: "What does the first sentence in Paragraph 1 mean?",
      options: [
        "Whether young or old, you are always abused.",
        "Some races in the world do not practice child abuse.",
        "Child abuse should not be practiced.",
        "Child abuse is everywhere regardless."
      ],
      correctAnswerIndex: 3,
      explanation: "'knows no social, geographic or racial boundaries' means child abuse occurs everywhere regardless of social class or location."
    },
    {
      id: "eng16-65",
      section: "Comprehension - Section Three: Reading Passage II",
      question: "What does the writer specifically say about America in relation to child abuse?",
      options: [
        "American children abused today and will abuse others when they grow up.",
        "Americans are intentionally creating another generation of child abusers.",
        "Tomorrow's America will see less child abuse.",
        "Wealthy Americans are the main actors in child abuse."
      ],
      correctAnswerIndex: 0,
      explanation: "Paragraph 1 highlights that child abuse 'is likely to create another generation of child abusers in America from among those being abused today.'"
    },
    {
      id: "eng16-66",
      section: "Comprehension - Section Three: Reading Passage II",
      question: "Which one of the following is closest in meaning to the word 'plague' in Paragraph 1, Line 3?",
      options: [
        "infection",
        "epidemic",
        "torture",
        "wound"
      ],
      correctAnswerIndex: 1,
      explanation: "'Plague' used metaphorically for a widespread destructive societal disease is synonymous with 'epidemic'."
    },
    {
      id: "eng16-67",
      section: "Comprehension - Section Three: Reading Passage II",
      question: "Which one of the following sentences is true about child abuse?",
      options: [
        "Many people stood against child abuse after reading passages in laws.",
        "Initially, Americans remained quiet on the revolution against child abuse.",
        "Child abuse was exercised secretly for a very long time.",
        "Parents for long used to close their doors and abuse children."
      ],
      correctAnswerIndex: 2,
      explanation: "Paragraph 2 states: 'For years, the problem was hidden behind the closed doors of houses or apartments.'"
    },
    {
      id: "eng16-68",
      section: "Comprehension - Section Three: Reading Passage II",
      question: "What does 'their' as used in Paragraph 2, Line 5 refer to?",
      options: [
        "children",
        "reporters",
        "parents",
        "agencies"
      ],
      correctAnswerIndex: 0,
      explanation: "'...getting help for both the children and their parents' — 'their' refers to the children's parents."
    },

    // Section IV: VOCABULARY (Questions 69 - 82)
    {
      id: "eng16-69",
      section: "Vocabulary - Substitution",
      instruction: "DIRECTIONS: For questions 69 - 74, each sentence has an underlined word/phrase. Choose the alternative that best corresponds with the meaning.",
      question: "They kept trying hard to bring him to the position of chairmanship. Unfortunately, however, members chose someone else so much unexpected.",
      options: [
        "manipulating",
        "propagating",
        "working",
        "struggling"
      ],
      correctAnswerIndex: 3,
      explanation: "'trying hard' in the sense of making persistent effort against difficulty corresponds to 'struggling'."
    },
    {
      id: "eng16-70",
      section: "Vocabulary - Substitution",
      question: "The troop opened an attack on the enemy in a bid to capture the garrison. I know it is not going to take long.",
      options: [
        "dropped",
        "designed",
        "launched",
        "realized"
      ],
      correctAnswerIndex: 2,
      explanation: "'opened an attack' is an idiom synonymous with 'launched' an assault/attack."
    },
    {
      id: "eng16-71",
      section: "Vocabulary - Substitution",
      question: "The AU meeting to be held next month is expected to pass resolutions pertaining to the relationship between the two warring parties. We are looking forward to it.",
      options: [
        "summit",
        "cluster",
        "mediation",
        "seminar"
      ],
      correctAnswerIndex: 0,
      explanation: "A high-level official meeting of heads of state or international leadership bodies (like the AU) is a 'summit'."
    },
    {
      id: "eng16-72",
      section: "Vocabulary - Substitution",
      question: "AIDS patients used to be alienated for having HIV in their blood. Today, however, things have changed and they are treated like any healthy person.",
      options: [
        "disappointed",
        "involved",
        "preserved",
        "stigmatized"
      ],
      correctAnswerIndex: 3,
      explanation: "'alienated' in the context of disease discrimination corresponds to being socially 'stigmatized' or ostracized."
    },
    {
      id: "eng16-73",
      section: "Vocabulary - Substitution",
      question: "It appears the combined effort exerted by the team significantly contributed to their success. In fact, we need to take a lesson and reshape our strategy.",
      options: [
        "synergy",
        "dismay",
        "disarray",
        "power"
      ],
      correctAnswerIndex: 0,
      explanation: "'combined effort' where cooperative interaction produces a greater total effect is 'synergy'."
    },
    {
      id: "eng16-74",
      section: "Vocabulary - Substitution",
      question: "Unless viable solutions are sought for our development problems, the people will keep suffering under poverty. So, let us get together and find the way out.",
      options: [
        "promotable",
        "sustainable",
        "sensible",
        "productive"
      ],
      correctAnswerIndex: 1,
      explanation: "'viable' in the context of long-term development solutions means workable, feasible, and 'sustainable'."
    },
    {
      id: "eng16-75",
      section: "Vocabulary - Analogy",
      instruction: "DIRECTIONS: For questions 75 and 76, two pairs of words are given. Look at the relationship between the two words and choose the word which forms a similar relationship.",
      question: "Clean: Dirty; Controlled: _______",
      options: [
        "Extended",
        "Expanded",
        "Rampant",
        "Stagnant"
      ],
      correctAnswerIndex: 2,
      explanation: "The relationship is antonyms: Clean is the opposite of Dirty; Controlled is the opposite of Rampant (uncontrolled/unchecked)."
    },
    {
      id: "eng16-76",
      section: "Vocabulary - Analogy",
      question: "Pen: Write; Rubber: _______",
      options: [
        "Erase",
        "Sweep",
        "Remove",
        "Eliminate"
      ],
      correctAnswerIndex: 0,
      explanation: "Tool and its primary function: A pen is used to write; a rubber (eraser) is used to erase."
    },
    {
      id: "eng16-77",
      section: "Vocabulary - Completion",
      instruction: "DIRECTIONS: Questions from 77 - 82 are incomplete sentences. Choose the word or phrase that best completes the sentence.",
      question: "Nowadays, many vehicles are _______ in Ethiopia by importing parts from Europe or Asia. However, prices of cars are still soaring from time to time.",
      options: [
        "purchased",
        "assembled",
        "prepared",
        "organized"
      ],
      correctAnswerIndex: 1,
      explanation: "Vehicles put together from imported knock-down components are 'assembled'."
    },
    {
      id: "eng16-78",
      section: "Vocabulary - Completion",
      question: "We tolerate no _______ of any kind on our premise. Everybody is treated equally as a human being.",
      options: [
        "condemnation",
        "discrimination",
        "nepotism",
        "entertainment"
      ],
      correctAnswerIndex: 1,
      explanation: "Equal treatment of all persons corresponds to having zero tolerance for 'discrimination'."
    },
    {
      id: "eng16-79",
      section: "Vocabulary - Completion",
      question: "The noise made by a group of revolting students _______ our discussion and we had to call the police.",
      options: [
        "stifled",
        "blocked",
        "disrupted",
        "endangered"
      ],
      correctAnswerIndex: 2,
      explanation: "Noise that interrupts and prevents the continuation of a meeting 'disrupted' the discussion."
    },
    {
      id: "eng16-80",
      section: "Vocabulary - Completion",
      question: "The government should take measures on companies that _______ children under 18 by allowing their employment with them. Such practice is globally unacceptable.",
      options: [
        "exploit",
        "absorb",
        "entertain",
        "sympathize"
      ],
      correctAnswerIndex: 0,
      explanation: "Employing minors unfairly for labor is termed to 'exploit' child workers."
    },
    {
      id: "eng16-81",
      section: "Vocabulary - Completion",
      question: "My friends are _______ all over the country and I don't have an problem wherever I go. I have no worries of where to stay or what to eat.",
      options: [
        "disarrayed",
        "concentrated",
        "located",
        "scattered"
      ],
      correctAnswerIndex: 3,
      explanation: "'scattered all over the country' means widely distributed across various geographic locations."
    },
    {
      id: "eng16-82",
      section: "Vocabulary - Completion",
      question: "We hardly have any _______ courses in our curriculum. This college, after all, trains spiritual leaders to be assigned to the different regions of the country.",
      options: [
        "divine",
        "specialty",
        "secular",
        "science"
      ],
      correctAnswerIndex: 2,
      explanation: "Spiritual/theological seminaries focus on religious training and have few non-religious ('secular') courses."
    },

    // Section V: WRITING (Questions 83 - 100)
    {
      id: "eng16-83",
      section: "Writing - Jumbled Words",
      instruction: "DIRECTIONS: Questions 83 - 85 are NOT in the right order. Choose the correct answer that makes a correct English sentence.",
      question: "the/ commonly/ these/ are/ cat/ to/ as/ house/ referred.",
      options: [
        "Cats are these as commonly referred to the house.",
        "Commonly referred are cats to the house are these.",
        "These are commonly referred to as the house cat.",
        "These are the cat as commonly referred to house."
      ],
      correctAnswerIndex: 2,
      explanation: "'These are commonly referred to as the house cat.' is the only grammatically coherent sentence."
    },
    {
      id: "eng16-84",
      section: "Writing - Jumbled Words",
      question: "in/ can/ her/ and/ talk/ bring/ we.",
      options: [
        "We can talk her and bring in.",
        "We and her talk can bring in.",
        "We bring her in and can talk.",
        "Bring her in and we can talk."
      ],
      correctAnswerIndex: 3,
      explanation: "'Bring her in and we can talk.' forms a natural imperative compound sentence."
    },
    {
      id: "eng16-85",
      section: "Writing - Jumbled Words",
      question: "next/ them/ going/ do/ who/ is/ pick/ you/ know/ up/ to?",
      options: [
        "Do you know who is going to pick them up next?",
        "You know who is going to do pick them up next?",
        "Who is next going to pick them up do you know?",
        "Do you know who is next going to pick up them?"
      ],
      correctAnswerIndex: 0,
      explanation: "'Do you know who is going to pick them up next?' correctly structures an embedded question with phrasal verb separation."
    },
    {
      id: "eng16-86",
      section: "Writing - Punctuation and Capitalization",
      instruction: "DIRECTIONS: Questions 86 - 88 are about punctuation and capitalization. Choose the statement which is correctly punctuated and capitalized.",
      question: "Which statement is correctly punctuated and capitalized?",
      options: [
        "If you go to Merkato, you'll need to buy the following: a shirt, a jacket and a coat.",
        "If you go to Merkato, you'll need to buy the following a shirt, a jacket: and a coat.",
        "If you go to Merkato, you'll need to buy: the following, a shirt, a jacket, and a coat.",
        "If you go to Merkato, you'll need to buy the following, a shirt: a jacket: and a coat."
      ],
      correctAnswerIndex: 0,
      explanation: "A colon is used after an introductory clause with 'the following:' before listing items separated by commas."
    },
    {
      id: "eng16-87",
      section: "Writing - Punctuation and Capitalization",
      question: "Which statement is correctly punctuated and capitalized?",
      options: [
        "When he went to visit the Sor River, he stayed at Khalifa hotel in Metu.",
        "When he went to visit the Sor river, he stayed at Khalifa hotel in Metu.",
        "When he went to visit the Sor River, he stayed at Khalifa Hotel in Metu.",
        "When he went to visit the Sor river, he stayed at Khalifa Hotel in Metu."
      ],
      correctAnswerIndex: 2,
      explanation: "Proper geographical and commercial nouns are capitalized: 'Sor River', 'Khalifa Hotel', and town 'Metu'."
    },
    {
      id: "eng16-88",
      section: "Writing - Punctuation and Capitalization",
      question: "Which statement is correctly punctuated?",
      options: [
        "\"What is for lunch\"? he asked.",
        "Martha shouted, \"Leave me alone!\"",
        "\"Come here, she said\".",
        "I read \"Romeo and Juliet.\""
      ],
      correctAnswerIndex: 1,
      explanation: "In direct speech with an exclamation, the punctuation mark goes inside the closing quotation marks: Martha shouted, \"Leave me alone!\""
    },
    {
      id: "eng16-89",
      section: "Writing - Word Spelling",
      instruction: "DIRECTIONS: For questions 89 and 90, choose the word which is correctly spelt.",
      question: "Which one of the following words is correctly spelt?",
      options: [
        "decisive",
        "execlusive",
        "intengible",
        "sastainable"
      ],
      correctAnswerIndex: 0,
      explanation: "'decisive' is correctly spelt (exclusive, intangible, sustainable)."
    },
    {
      id: "eng16-90",
      section: "Writing - Word Spelling",
      question: "Which one of the following words has a correct spelling?",
      options: [
        "resolusion",
        "conclusion",
        "domnition",
        "arguement"
      ],
      correctAnswerIndex: 1,
      explanation: "'conclusion' is correctly spelt (resolution, domination, argument)."
    },
    {
      id: "eng16-91",
      section: "Writing - Paragraph Coherence",
      instruction: "DIRECTIONS: When you put in the correct order, sentences a-d make up a complete paragraph. Choose the correct order of sentences.",
      question: "a. It is also a source of comfort in life.\nb. Money is used to buy goods and services.\nc. It is used as a source to fulfill basic needs.\nd. This means you won't starve if you have it.",
      options: [
        "d, b, c, a",
        "b, d, a, c",
        "c, a, d, b",
        "b, c, d, a"
      ],
      correctAnswerIndex: 3,
      explanation: "Topic sentence: (b) Money is used to buy goods and services -> (c) It is used to fulfill basic needs -> (d) This means you won't starve... -> (a) It is also a source of comfort."
    },
    {
      id: "eng16-92",
      section: "Writing - Paragraph Coherence",
      question: "a. Some 19.5 million of them are refugees with 50% children.\nb. The misery will continue unless peace building is given a place.\nc. This has kept most conflict-affected countries in abject poverty.\nd. Today about 59.5 million people are forcibly displaced worldwide.",
      options: [
        "a, d, c, b",
        "b, d, a, c",
        "d, a, c, b",
        "c, a, b, d"
      ],
      correctAnswerIndex: 2,
      explanation: "Topic overview: (d) Today 59.5 million people are displaced -> (a) Breakdown: 19.5 million refugees with 50% children -> (c) Impact on poverty -> (d) Concluding call for peace."
    },
    {
      id: "eng16-93",
      section: "Writing - Paragraph Coherence",
      question: "a. It helps break the cycle of poverty.\nb. This is particularly true in developing countries.\nc. In these contexts, empowering youth through education is particularly critical.\nd. Despite benefits of education, many people still lack access to quality education.",
      options: [
        "a, b, c, d",
        "c, d, b, a",
        "b, a, d, c",
        "d, a, b, c"
      ],
      correctAnswerIndex: 3,
      explanation: "(d) introduces the general premise of education access -> (a) benefits (breaks cycle) -> (b) true in developing nations -> (c) critical youth empowerment."
    },
    {
      id: "eng16-94",
      section: "Writing - Paragraph Coherence",
      question: "a. I saw your vacancy announcement for the marketing job.\nb. In fact, I have five years of experience as a marketing officer.\nc. I would be an asset to you if given the employment opportunity.\nd. I am interested in the position and like your company's mission.",
      options: [
        "a, d, b, c",
        "c, a, d, b",
        "b, c, d, a",
        "d, c, a, b"
      ],
      correctAnswerIndex: 0,
      explanation: "Application letter flow: (a) Reference to vacancy announcement -> (d) Express interest -> (b) State relevant qualifications/experience -> (c) Value proposition to employer."
    },
    {
      id: "eng16-95",
      section: "Writing - Letter Writing",
      instruction: "DIRECTIONS: Questions 95 - 97 are about letter writing. Choose the best answer.",
      question: "Which one of the following could be the right opening to a letter to your close friend?",
      options: [
        "First of all, I would like to apologize for not being able to ...",
        "I would like to send you this letter hoping that everything is ...",
        "Hi, it's been a long time since you wrote.",
        "I am writing this letter to express my greetings and..."
      ],
      correctAnswerIndex: 2,
      explanation: "Informal letters to close friends start with friendly, colloquial greetings like 'Hi, it's been a long time...'"
    },
    {
      id: "eng16-96",
      section: "Writing - Letter Writing",
      question: "Which one of the following could be an ending to your job application letter?",
      options: [
        "Best wishes,",
        "Yours truly,",
        "Best,",
        "Warmly,"
      ],
      correctAnswerIndex: 1,
      explanation: "'Yours truly,' (or 'Yours sincerely / faithfully') is a formal sign-off appropriate for formal job application letters."
    },
    {
      id: "eng16-97",
      section: "Writing - Letter Writing",
      question: "Which one of the following is an appropriate ending to your letter of complaint to a company?",
      options: [
        "Sincerely,",
        "All the best,",
        "Best wishes,",
        "Many thanks,"
      ],
      correctAnswerIndex: 0,
      explanation: "A formal complaint letter to a business requires a formal sign-off: 'Sincerely,'."
    },
    {
      id: "eng16-98",
      section: "Writing - Types of Paragraph Writing",
      instruction: "DIRECTIONS: Questions from 98 - 100 are related to types of paragraph writing.",
      question: "Which one of the following sentences is most likely taken from an argumentative piece of writing?",
      options: [
        "We all enjoyed the scene, particularly, the greenery.",
        "This is for producing a new type of medicine for acne.",
        "Better stick to that old-fashioned view, it saves.",
        "Whether right or wrong, it is up to you to decide."
      ],
      correctAnswerIndex: 2,
      explanation: "'Better stick to that old-fashioned view, it saves' takes a stance and persuades the reader of a particular viewpoint."
    },
    {
      id: "eng16-99",
      section: "Writing - Types of Paragraph Writing",
      question: "Which one of the following sentences is most likely taken from an expository piece of writing?",
      options: [
        "Computers are machines used to key in and save information.",
        "I have this old but properly functioning computer in my office.",
        "As soon as I get to the office, I turn my computer on.",
        "This kind of computer appears to be better in many ways."
      ],
      correctAnswerIndex: 0,
      explanation: "Expository writing explains facts, definitions, and objective information clearly ('Computers are machines used to key in and save information')."
    },
    {
      id: "eng16-100",
      section: "Writing - Types of Paragraph Writing",
      question: "You would think you are dreaming when this strange creature, a real human being, walks right in front of your eyes. He has a broad chest and shoulders out of which two competing necks and heads emerge. Looking at you with his four eyes, he says, .... This is taken from a piece of writing that is most likely:",
      options: [
        "descriptive",
        "expository",
        "narrative",
        "argumentative"
      ],
      correctAnswerIndex: 0,
      explanation: "Rich sensory details focusing on physical appearance (broad chest, two necks, heads, four eyes) characterize descriptive writing."
    }
  ]
};
