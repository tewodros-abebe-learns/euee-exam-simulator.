import { type Question } from '../services/geminiService';

export const biology2015Exam = {
  id: "euee-2015-biology",
  title: "2015 E.C. ESSLCE Biology Examination",
  subject: "Biology",
  grade: "Grade 12",
  timeLimit: 7200, // 120 minutes (2:00 hours)
  questions: [
    {
      id: "bio15-1",
      question: "Which one of the following sentences is correct about the activities of the heart?",
      options: [
        "The noise of heartbeat one hears through a stethoscope is the sound of valves closing.",
        "As the heart beats blood travels through the arteries with a uniform pressure.",
        "Diastole is when the heart muscles contract and force the blood out.",
        "Systole is when the heart muscles relax and it fills with blood."
      ],
      correctAnswerIndex: 0,
      explanation: "The 'lub-dup' sound heard via a stethoscope is caused by the snapping shut of heart valves (atrioventricular and semilunar valves)."
    },
    {
      id: "bio15-2",
      question: "During culturing micro-organisms, all of the following activities are important EXCEPT:",
      options: [
        "tilting the lid of the Petri dish during inoculation.",
        "adding distilled water to a sterilized agar.",
        "sterilizing the inoculating loops.",
        "transferring target micro-organisms into an agar medium."
      ],
      correctAnswerIndex: 1,
      explanation: "Adding unsterilized or extra distilled water to already sterilized nutrient agar risks introducing non-sterile contaminants and dilutes the nutrient matrix."
    },
    {
      id: "bio15-3",
      question: "Which one of the following diseases can be caused by more than one type of microorganisms?",
      options: [
        "Cholera",
        "Gastroenteritis",
        "Typhoid",
        "Tuberculosis"
      ],
      correctAnswerIndex: 1,
      explanation: "Gastroenteritis can be caused by multiple distinct pathogens including viruses (rotavirus, norovirus), bacteria (E. coli, Salmonella), and parasites (Giardia)."
    },
    {
      id: "bio15-4",
      question: "Which one of the following diseases is correctly matched with its causes or symptoms?",
      options: [
        "Syphilis is caused by Neisseria gonorrhoeae.",
        "Gonorrhoea has a burning sensation symptom while urinating.",
        "Gonorrhoea is caused by Treponema pallidum.",
        "Syphilis has sore ulceration on the genitals as a symptom."
      ],
      correctAnswerIndex: 1,
      explanation: "Gonorrhoea causes painful burning micturition (dysuria) and purulent discharge. Syphilis is caused by Treponema pallidum."
    },
    {
      id: "bio15-5",
      question: "The names of which two taxa are used in binomial nomenclature?",
      options: [
        "The two lowest units of classification (Genus and species)",
        "The two middle units of classification",
        "The highest and the lowest unit of classification",
        "The two highest units of classification"
      ],
      correctAnswerIndex: 0,
      explanation: "Binomial nomenclature combines the genus (capitalized) and the specific epithet (species), which are the two lowest hierarchical taxonomic ranks."
    },
    {
      id: "bio15-6",
      question: "In a dihybrid self-crossing of a plant with genotype DdCc, 3600 offspring were produced. How many of the offspring will have the ddcc genotype?",
      options: [
        "300",
        "450",
        "150",
        "225"
      ],
      correctAnswerIndex: 3,
      explanation: "In a Mendelian dihybrid cross (DdCc x DdCc), the double homozygous recessive (ddcc) expected ratio is 1/16. Total offspring = 3600 * (1/16) = 225."
    },
    {
      id: "bio15-7",
      question: "Identify the correct statement regarding translation in eukaryotic cells:",
      options: [
        "helicase enzyme begins to unwind a section of DNA.",
        "polymerase assembles free RNA nucleotides into a chain.",
        "first two codons of the mRNA enter the ribosome.",
        "RNA polymerase moves along the antisense strand."
      ],
      correctAnswerIndex: 2,
      explanation: "During initiation and elongation of translation, the ribosome accommodates the first two codons of mRNA in the P (peptidyl) and A (aminoacyl) sites."
    },
    {
      id: "bio15-8",
      question: "Which of the following sentences explains how crossing over brings variation?",
      options: [
        "In meiosis I, there is splitting up of pairs of homologous chromosomes and line up.",
        "In meiosis I, there is exchange of a section of DNA between non-sister chromatids.",
        "In meiosis II, homologous chromosomes align themselves independent of other pairs.",
        "In meiosis II, chromatids from each chromosome are separated at random."
      ],
      correctAnswerIndex: 1,
      explanation: "Crossing over occurs during prophase I of meiosis where homologous non-sister chromatids exchange reciprocal genetic fragments at chiasmata."
    },
    {
      id: "bio15-9",
      question: "In a model of semi-conservative DNA replication where parental molecule C replicates to produce daughter molecules A and B:",
      options: [
        "A and B are identical with each other but not with C.",
        "C is not identical with A and B.",
        "B and C are not identical with each other.",
        "A, B and C are identical with each other."
      ],
      correctAnswerIndex: 3,
      explanation: "Because semi-conservative DNA replication faithfully duplicates the base sequence using complementary base pairing, both daughter duplexes (A and B) are identical in sequence to the parent DNA (C)."
    },
    {
      id: "bio15-10",
      question: "What is the central role of tRNA in translation?",
      options: [
        "Carrying genetic information from DNA in the nucleus to ribosomes",
        "Recognizing the codon of mRNA and bringing the correct amino acid to the ribosomes",
        "Acting as a template for converting a genetic code into amino acid sequence",
        "Assembling the amino acid into a polypeptide chain"
      ],
      correctAnswerIndex: 1,
      explanation: "tRNA possesses an anticodon loop that specifically base-pairs with the complementary mRNA codon and delivers the corresponding attached amino acid."
    },
    {
      id: "bio15-11",
      question: "Which one of the following sentences explains the traditional use of biotechnology?",
      options: [
        "Production of insulin using transgenic bacteria",
        "Production of dairy products at household level (fermentation)",
        "Production of myco-proteins under a laboratory",
        "Production of vinegar using industrial fermenter"
      ],
      correctAnswerIndex: 1,
      explanation: "Traditional biotechnology refers to age-old indigenous fermentation practices like making yoghurt, cheese, and bread at household level without recombinant DNA."
    },
    {
      id: "bio15-12",
      question: "In an ecological pyramid of energy (A -> B -> C -> D), which statement is INCORRECT?",
      options: [
        "The organisms of each trophic level use large proportion of the energy to build their body.",
        "The organisms of the first trophic level convert light energy into chemical energy.",
        "The energy lost as heat to the surrounding in each trophic level is insignificant.",
        "The amount of energy transferred through the trophic levels drops with each step up of the pyramid."
      ],
      correctAnswerIndex: 2,
      explanation: "Energy loss as metabolic heat to the surrounding is massive (around 90% at each step), NOT insignificant."
    },
    {
      id: "bio15-13",
      question: "Which one of the following sentences is correct about mitosis?",
      options: [
        "is the division of sex cells resulting in identical daughter cells.",
        "produces four different daughter cells from a single cell.",
        "is the division of somatic cells to make identical daughter cells.",
        "produces half number of chromosomes from the original cell."
      ],
      correctAnswerIndex: 2,
      explanation: "Mitosis occurs in somatic (body) cells for growth and tissue repair, producing two genetically identical diploid daughter cells."
    },
    {
      id: "bio15-14",
      question: "A cross between pea plants having heterozygous genotype (Rr x Rr) has been made. What is the genotypic probability of getting rr?",
      options: [
        "Rr is 25%.",
        "Rr is 75%.",
        "RR is 50%.",
        "rr is 25%."
      ],
      correctAnswerIndex: 3,
      explanation: "From Rr x Rr: genotypes are 1/4 RR (25%), 2/4 Rr (50%), and 1/4 rr (25%)."
    },
    {
      id: "bio15-15",
      question: "Which one of the following is correct about DNA?",
      options: [
        "smaller molecule and coding for only protein.",
        "made of phosphate, sugar and bases.",
        "a single stranded molecule.",
        "less stable and degrades quickly."
      ],
      correctAnswerIndex: 1,
      explanation: "DNA nucleotides consist of three essential building blocks: a phosphate group, deoxyribose pentose sugar, and nitrogenous bases (A, T, C, G)."
    },
    {
      id: "bio15-16",
      question: "Which one of the following phyla is characterized by a flexible cartilaginous rod-like structure (notochord) along the dorsal side?",
      options: [
        "Phylum Mollusca",
        "Phylum Chordata",
        "Phylum Annelida",
        "Phylum Arthropoda"
      ],
      correctAnswerIndex: 1,
      explanation: "The presence of a dorsal notochord at some developmental stage is the definitive diagnostic characteristic of Phylum Chordata."
    },
    {
      id: "bio15-17",
      question: "Which one of the following groups of organisms is correctly matched with its phylum?",
      options: [
        "Starfish - Phylum Echinodermata",
        "Fish - Phylum Arthropoda",
        "Snail - Phylum Annelida",
        "Earthworm - Phylum Mollusca"
      ],
      correctAnswerIndex: 0,
      explanation: "Starfish is an echinoderm (spiny-skinned marine invertebrate with radial symmetry in adults)."
    },
    {
      id: "bio15-18",
      question: "Which one of the following events happens during carbon cycle?",
      options: [
        "Carbon dioxide is transferred from plants to animals by their feeding relationship.",
        "Carbon dioxide is absorbed from air when microbes decompose plants and animals.",
        "Carbon dioxide is removed from the air by animals during respiration.",
        "Carbon dioxide is returned into the air by plants during photosynthesis."
      ],
      correctAnswerIndex: 0,
      explanation: "Carbon fixed by autotrophic plants into organic compounds (glucose, cellulose) is transferred to herbivores and carnivores through feeding."
    },
    {
      id: "bio15-19",
      question: "Which one of the following is NOT the function of the liver?",
      options: [
        "Controlling cholesterol",
        "Storing glycogen",
        "Monosaccharide metabolism",
        "Digestive enzyme secretion (e.g. amylase)"
      ],
      correctAnswerIndex: 3,
      explanation: "The liver produces bile salts for lipid emulsification, but does NOT synthesize primary digestive enzymes (which are produced by the pancreas and salivary glands)."
    },
    {
      id: "bio15-20",
      question: "Classify 5 vertebrates: spA (Smooth moist skin, life in water/land), spB (Streamlined, scales, gills), spC (Feathers, endothermic, horny beak), spD (Dry skin with scales, ectothermic, lungs), spE (Mammary glands, endothermic).",
      options: [
        "Amphibia, Reptilia, Aves, Mammalia, and Pisces.",
        "Pisces, Aves, Reptilia, Mammalia, and Amphibia.",
        "Pisces, Amphibia, Aves, Reptilia, and Mammalia.",
        "Amphibia, Pisces, Aves, Reptilia, and Mammalia."
      ],
      correctAnswerIndex: 3,
      explanation: "spA = Amphibia, spB = Pisces (fish), spC = Aves (birds), spD = Reptilia, spE = Mammalia."
    },
    {
      id: "bio15-21",
      question: "Which of the following plant adaptation mechanisms helps cactus to adapt in the desert environment?",
      options: [
        "Spreading its seeds in wider areas",
        "Increasing number of stomata in its leaves",
        "Having broad leaves",
        "Storing water in its succulent tissue (stem)"
      ],
      correctAnswerIndex: 3,
      explanation: "Cacti are succulents that store large volumes of water in modified fleshy parenchyma stems and minimize transpirational water loss."
    },
    {
      id: "bio15-22",
      question: "What is the function of the dermis of the skin?",
      options: [
        "acts as protection against heat loss.",
        "protects the entry of pathogens into the body.",
        "forms a waterproof around the body tissue.",
        "contains blood vessels and sweat glands."
      ],
      correctAnswerIndex: 3,
      explanation: "The dermal layer contains rich networks of capillaries, sweat glands, hair follicles, and sensory receptors for thermoregulation and touch."
    },
    {
      id: "bio15-23",
      question: "Children who play by spinning round and round fast feel dizzy when they stop. Why?",
      options: [
        "The otoliths round in the same direction with the head.",
        "The optic nerves reports that the children are still moving.",
        "The fluid (endolymph) in their semicircular canals keeps on moving after they stop.",
        "The sensory hairs vibrate highly in response to movement of their body."
      ],
      correctAnswerIndex: 2,
      explanation: "Due to inertia, the endolymph fluid within the semicircular canals continues to swirl even after the body stops, sending continuous rotational signals to the vestibular nerve."
    },
    {
      id: "bio15-24",
      question: "When does menstruation start in women with no obvious reproductive health problem?",
      options: [
        "the fertilized ovum reaches the uterus and attaches into the thick, spongy lining.",
        "the FSH stimulates the development of a follicle in the ovary and the egg ripens.",
        "pregnancy occurs and the embryo obtains nourishment and oxygen.",
        "thick spongy lining of the uterus detaches in the absence of pregnancy."
      ],
      correctAnswerIndex: 3,
      explanation: "In the absence of fertilization/implantation, progesterone and estrogen levels drop, causing the thickened vascular endometrium to slough off as menstrual flow."
    },
    {
      id: "bio15-25",
      question: "Which one of the following sentences is correctly matched with the function of kidney structures?",
      options: [
        "Bowman's capsule - collects filtrate from glomerulus ultrafiltration.",
        "Cortex - monitors the osmotic pressure of the blood.",
        "Glomerulus - concentrates urine and conserves water.",
        "Loop of Henle - involved in ultrafiltration."
      ],
      correctAnswerIndex: 0,
      explanation: "Bowman's capsule encloses the glomerular capillary knot and receives the initial ultrafiltrate driven by high hydrostatic pressure."
    },
    {
      id: "bio15-26",
      question: "Which of the following temperature controlling mechanisms in homoiotherms is categorized into BEHAVIORAL method?",
      options: [
        "Sweating when the temperature increases",
        "Constriction of capillaries when the temperature falls",
        "Shivering as a result of drop in temperature",
        "Seeking shade when the temperature rises"
      ],
      correctAnswerIndex: 3,
      explanation: "Seeking shade or shelter is a voluntary behavioral adaptation, whereas shivering, sweating, and vasoconstriction are autonomic physiological reflexes."
    },
    {
      id: "bio15-27",
      question: "Industries in the medicine sector use glucose oxidase in Clinistix strips for:",
      options: [
        "restoring blood supply to area of heart muscle.",
        "detecting toxic metabolites in the blood.",
        "easy diagnosis of diabetes by examining a urine sample.",
        "reducing the viscosity of mucus."
      ],
      correctAnswerIndex: 2,
      explanation: "Clinistix dipsticks use immobilized glucose oxidase and peroxidase to catalyze a color reaction for rapid semi-quantitative detection of glucosuria in diabetes mellitus."
    },
    {
      id: "bio15-28",
      question: "In the systematic naming of enzymes, assume an enzyme is designated as EC 3.4.11.1. What does the first number (3) represent?",
      options: [
        "11 - gives a sub-subclass to which the enzyme belongs.",
        "1 - a reference of Enzyme Commission.",
        "4 - shows to which main class the enzyme belongs.",
        "3 - indicates the main class (Hydrolases) to which the enzyme belongs."
      ],
      correctAnswerIndex: 3,
      explanation: "In Enzyme Commission nomenclature (EC x.x.x.x), the first digit denotes the primary enzyme class (1=Oxidoreductases, 2=Transferases, 3=Hydrolases, 4=Lyases, 5=Isomerases, 6=Ligases)."
    },
    {
      id: "bio15-29",
      question: "Which one of the following sentences explains the lock-and-key model of enzyme action?",
      options: [
        "attached substrate-the enzyme complex enters into a transition state.",
        "model explains enzyme inhibition in a complete manner.",
        "shapes of the substrate is strictly complementary to the active site.",
        "attachment of substrate to an enzyme produces a conformational change."
      ],
      correctAnswerIndex: 2,
      explanation: "Emil Fischer's Lock-and-Key hypothesis posits that the active site possesses a rigid, pre-formed geometric shape precisely complementary to its specific substrate."
    },
    {
      id: "bio15-30",
      question: "Which one of the following sentences is correct about apo-enzymes? They are:",
      options: [
        "cofactors that give an enzyme its catalytic activity.",
        "protein components that combine with cofactors to form active holoenzymes.",
        "organic molecules and many are derived from vitamins.",
        "inorganic molecules that bind loosely with the cofactors."
      ],
      correctAnswerIndex: 1,
      explanation: "An apoenzyme is the inactive, purely polypeptide/protein portion of an enzyme that requires an organic coenzyme or inorganic cofactor to become fully catalytically active."
    },
    {
      id: "bio15-31",
      question: "How does a competitive inhibitor affect an enzyme-catalyzed reaction? By:",
      options: [
        "denaturing the active site of the enzyme.",
        "producing conformational change of the enzyme.",
        "binding to the allosteric site of the enzyme.",
        "blocking the active site of the enzyme directly."
      ],
      correctAnswerIndex: 3,
      explanation: "Competitive inhibitors share structural homology with the natural substrate and compete for direct reversible binding inside the active site, physically blocking substrate access."
    },
    {
      id: "bio15-32",
      question: "Which one of the following leaf structures is correctly matched with its function?",
      options: [
        "Palisade mesophyll - the main photosynthetic tissue of the leaf",
        "Waxy cuticle - controls the entry of carbon dioxide into the leaf",
        "Guard cells - have lots of air space and gas exchange area of the leaf",
        "Spongy mesophyll - helps to prevent water loss from the leaf"
      ],
      correctAnswerIndex: 0,
      explanation: "Palisade mesophyll cells are vertically arranged near the upper leaf surface packed with dense chloroplasts to maximize sunlight capture for photosynthesis."
    },
    {
      id: "bio15-33",
      question: "Which one of the following statements correctly describes the movement of materials in plants?",
      options: [
        "Passive transport can takes place in the phloem.",
        "The transport of organic materials is due to transpiration.",
        "Water is transported in dead tissue (xylem tracheids and vessels).",
        "Active transport can take place in the xylem."
      ],
      correctAnswerIndex: 2,
      explanation: "Xylem vessel elements and tracheids lose their protoplasts at maturity, forming non-living hollow conduit pipes through which water and dissolved minerals flow."
    },
    {
      id: "bio15-34",
      question: "What will happen if an agriculture extension worker injects gibberellins into a dwarf plant?",
      options: [
        "leaves will fall.",
        "stem will grow / elongate.",
        "roots will elongate.",
        "side shoots will grow fast."
      ],
      correctAnswerIndex: 1,
      explanation: "Gibberellins stimulate rapid cell elongation and division in the internodes, bolting dwarf plants into normal-height or tall phenotypes."
    },
    {
      id: "bio15-35",
      question: "Seedling SA emerged curved and carried cotyledons above ground (epigeal). Seedling SB pushed plumule straight while cotyledons stayed underground (hypogeal). Which is correct?",
      options: [
        "Both SA and SB are of monocots.",
        "SA is of a monocot, while SB is of a dicot.",
        "Both SA and SB are of dicots.",
        "SA is typically of a dicot (epigeal), while SB is of a monocot (hypogeal)."
      ],
      correctAnswerIndex: 3,
      explanation: "Epigeal germination with hypocotyl hook lifting cotyledons above soil (SA) is typical of dicots (e.g. beans), while hypogeal germination (SB) is characteristic of monocots (e.g. maize)."
    },
    {
      id: "bio15-36",
      question: "Which one of the following sentences correctly describes the properties of water?",
      options: [
        "contracts when it freezes and ice acts as an insulator.",
        "takes low energy to change into vapor.",
        "allows all light wavelengths to pass through its various depths.",
        "requires high amount of energy to heat up (high specific heat capacity)."
      ],
      correctAnswerIndex: 3,
      explanation: "Extensive hydrogen bonding gives water a very high specific heat capacity, buffering cellular and environmental systems against abrupt thermal fluctuations."
    },
    {
      id: "bio15-37",
      question: "An organic molecule which is an important structural constituent of eukaryotic chromosomes is:",
      options: [
        "amino acid / histone proteins",
        "glycogen",
        "amylose",
        "triglyceride"
      ],
      correctAnswerIndex: 0,
      explanation: "Eukaryotic chromatin is composed of genomic DNA wrapped tightly around octamers of basic histone proteins (made of amino acids)."
    },
    {
      id: "bio15-38",
      question: "In animal cells, glycogen is hydrolyzed rapidly to release glucose due to the presence of several:",
      options: [
        "microfibrils in its side chain.",
        "α-1,6-glycosidic branching bonds.",
        "β-1,4-glycosidic bonds.",
        "enzymes that hydrolyse it easily."
      ],
      correctAnswerIndex: 1,
      explanation: "Highly branched glycogen contains frequent α-1,6-glycosidic branch points, creating abundant free non-reducing ends for rapid simultaneous glycogen phosphorylase cleavage."
    },
    {
      id: "bio15-39",
      question: "Enzymes experiment table: X (Zn2+, rate 1.4x10^17, opt 37°C), Y (Cu2+, rate 7.7x10^6, opt 45°C), Z (No cofactor, rate 4.6x10^5, opt 28°C), M (Co2+, rate 1.7x10^8, opt 30°C). Which conclusion is acceptable?",
      options: [
        "Enzyme 'X' could have enhanced the rate better at temperature slightly higher than 37°C.",
        "Enzyme 'M' cannot enhance the rate of reaction further if the temperature exceeds 30°C.",
        "The rate enhancement for enzymes 'Z' is less because it didn't use a cofactor.",
        "As temperature increases the rate of chemical reaction decreases."
      ],
      correctAnswerIndex: 1,
      explanation: "Since 30°C is the optimum temperature for Enzyme M, raising temperature beyond 30°C initiates conformational denaturation, reducing rate enhancement."
    },
    {
      id: "bio15-40",
      question: "A three-carbon triol molecule with three hydroxyl (-OH) groups attached to each carbon (CH2OH-CHOH-CH2OH) is:",
      options: [
        "cellulose",
        "amylopectin",
        "fatty acid",
        "glycerol"
      ],
      correctAnswerIndex: 3,
      explanation: "Glycerol (propane-1,2,3-triol) is the 3-carbon alcohol backbone that esterifies with three fatty acids to form triglycerides."
    },
    {
      id: "bio15-41",
      question: "Which of the following is an Ethiopian endemic plant?",
      options: [
        "Noug seed (Guizotia abyssinica)",
        "Avocado",
        "Bahir zaf (Eucalyptus)",
        "Bunna (Coffea arabica)"
      ],
      correctAnswerIndex: 0,
      explanation: "Noug (Guizotia abyssinica) is an indigenous oilseed crop domesticated in and native to the Ethiopian highlands."
    },
    {
      id: "bio15-42",
      question: "When a biologist shares her research findings and peer-reviewed papers with fellow scientists, she is:",
      options: [
        "making her hypothesis.",
        "reporting her result.",
        "drawing her conclusion.",
        "analyzing her data."
      ],
      correctAnswerIndex: 1,
      explanation: "Disseminating findings through scientific journals, conferences, and publications represents reporting and communicating results."
    },
    {
      id: "bio15-43",
      question: "Walia ibex is an endemic animal species in Ethiopia which is found strictly in:",
      options: [
        "Nechisar National Park.",
        "Omo National Park.",
        "Bale Mountain National Park.",
        "Simien Mountains National Park."
      ],
      correctAnswerIndex: 3,
      explanation: "The endangered Walia ibex (Capra walie) lives exclusively in the afro-alpine cliffs of the Simien Mountains National Park."
    },
    {
      id: "bio15-44",
      question: "All of the following sentences are correct about environmental pollution EXCEPT:",
      options: [
        "deforestation increases the amount of CO2 absorbed from the atmosphere.",
        "decomposition of dead bodies increases the amount of CO2 in the atmosphere.",
        "burning fossil fuels increases pollution due to the release of hydrocarbons and oxides.",
        "burning of wood increases pollution by causing atmospheric particulates and smoke."
      ],
      correctAnswerIndex: 0,
      explanation: "Deforestation destroys carbon sinks, REDUCING (not increasing) photosynthetic carbon dioxide absorption from the atmosphere."
    },
    {
      id: "bio15-45",
      question: "List of molecules: 1 (Calcium carbonate, glucose, methane), 2 (Carbon dioxide, linoleic acid, water), 3 (Linoleic acid, glucose, methane), 4 (Iron III oxide, glycine, glucose). Which number holds ONLY organic molecules?",
      options: [
        "2",
        "3",
        "4",
        "1"
      ],
      correctAnswerIndex: 1,
      explanation: "Linoleic acid (lipid), glucose (carbohydrate), and methane (hydrocarbon) are all organic carbon-based molecules."
    },
    {
      id: "bio15-46",
      question: "Which of the following digestive enzymes is correctly matched to the food stuff it acts on?",
      options: [
        "Pepsin - protein",
        "Maltase - lipids",
        "Amylase - fats",
        "Trypsin - starch"
      ],
      correctAnswerIndex: 0,
      explanation: "Pepsin is an endopeptidase secreted by gastric chief cells that cleaves dietary proteins into smaller peptide fragments."
    },
    {
      id: "bio15-47",
      question: "A friend collapsed due to sudden cardiac arrest and requires emergency resuscitation. Which activity is strictly PROHIBITED?",
      options: [
        "Remove any obstacle from the mouth that might block the airway",
        "Open the airway by tilting the head back",
        "Make sure the airway is open and the head is tilted back",
        "Give mouth-to-mouth resuscitation if he is conscious and breathing normally"
      ],
      correctAnswerIndex: 3,
      explanation: "Artificial ventilation (mouth-to-mouth) must NEVER be forced upon a conscious individual who is breathing spontaneously."
    },
    {
      id: "bio15-48",
      question: "In a bell-jar lung model with two balloons and a rubber sheet diaphragm, which breathing event is correct?",
      options: [
        "Air enters when the bell-jar thorax contracts.",
        "Air enters when the rubber sheet is pushed up.",
        "Air exits when Y-piece is rotated.",
        "Air exits when the balloon lungs have higher internal pressure than the external environment (diaphragm pushed up)."
      ],
      correctAnswerIndex: 3,
      explanation: "Exhalation occurs when internal pressure exceeds atmospheric pressure as thoracic volume decreases (rubber sheet relaxes/pushed upward)."
    },
    {
      id: "bio15-49",
      question: "Which one of the following structures of the heart is correctly matched with its function?",
      options: [
        "Right atrium - contracts and forces deoxygenated blood into the lungs",
        "Left ventricle - contracts and forces oxygenated blood around the body via aorta",
        "Right ventricle - contracts and forces blood into the left ventricles",
        "Left atrium - contracts and forces blood into the right ventricles"
      ],
      correctAnswerIndex: 1,
      explanation: "The muscular left ventricle pumps systemic oxygenated blood under high pressure into the aorta to supply bodily tissues."
    },
    {
      id: "bio15-50",
      question: "In aerobic cellular respiration:",
      options: [
        "Krebs cycle takes place in the cytoplasm.",
        "glycolysis takes place in the mitochondria.",
        "electron transport chain takes place in the cytoplasm.",
        "pyruvate enters into the mitochondria for the link reaction and Krebs cycle."
      ],
      correctAnswerIndex: 3,
      explanation: "Following cytosolic glycolysis, pyruvate is actively transported across the mitochondrial membranes into the matrix for oxidative decarboxylation."
    },
    {
      id: "bio15-51",
      question: "In a systemic and pulmonary circulation schematic (Body -> 1 -> Heart -> 2 -> Lungs -> 3 -> Heart -> 4 -> Body), parts 1, 2, 3, 4 are respectively:",
      options: [
        "aorta, vena cava, pulmonary vein, pulmonary artery.",
        "vena cava, pulmonary artery, pulmonary vein, aorta.",
        "pulmonary vein, aorta, vena cava, pulmonary artery.",
        "vena cava, pulmonary vein, aorta, pulmonary artery."
      ],
      correctAnswerIndex: 1,
      explanation: "Vena cava (1) returns deoxygenated systemic blood to heart; pulmonary artery (2) carries blood to lungs; pulmonary vein (3) returns oxygenated blood to heart; aorta (4) distributes it to body."
    },
    {
      id: "bio15-52",
      question: "Which description of membrane proteins is correctly matched with its function?",
      options: [
        "Peripheral protein - anchor cytoskeleton and extracellular matrix",
        "Glycoprotein - reduces the fluidity of the membrane",
        "Channel proteins - larger macromolecules can pass through them",
        "Carrier proteins - specific ions and molecules undergo conformational transport"
      ],
      correctAnswerIndex: 3,
      explanation: "Carrier proteins bind specific solute molecules and undergo reversible conformational changes to shuttle them across the phospholipid bilayer."
    },
    {
      id: "bio15-53",
      question: "A hypothetical cell of 15% solute concentration (85% water) is placed in a beaker containing 90% water and 10% solute. In which direction will net water osmosis occur?",
      options: [
        "From the cell to the beaker",
        "From the beaker into the cell (hypotonic to hypertonic)",
        "Both into and out of the cell equally",
        "No movement occurs"
      ],
      correctAnswerIndex: 1,
      explanation: "The beaker solution has higher water potential (90% water vs 85% in cell), so water moves down its osmotic potential gradient into the cell."
    },
    {
      id: "bio15-54",
      question: "Which one of the following is an example of a learned behaviour?",
      options: [
        "Nest-building in birds",
        "Knee-jerk reflex",
        "Weaving a spider web",
        "Classical conditioning"
      ],
      correctAnswerIndex: 3,
      explanation: "Classical conditioning (Pavlovian associative learning) is acquired through experience, unlike innate instinctive reflexes and fixed action patterns."
    },
    {
      id: "bio15-55",
      question: "Which one of the following is correct about transport across cell membranes?",
      options: [
        "Simple diffusion - large particles transported through channel proteins",
        "Facilitated diffusion - particles move against concentration gradient",
        "Passive transport - particles require energy in the form of ATP",
        "Active transport - particles move from low to higher concentration using carrier proteins and ATP."
      ],
      correctAnswerIndex: 3,
      explanation: "Active transport moves ions or solutes against their electrochemical gradient using specialized membrane transport pumps and cellular metabolic energy (ATP)."
    },
    {
      id: "bio15-56",
      question: "Which process takes place in the Krebs cycle (citric acid cycle)?",
      options: [
        "Hydrogen atoms carried by reduced NAD and FAD are released and split into protons and electrons.",
        "Two molecules of ATP are used to phosphorylate each molecule of glucose.",
        "Two carbon acetyl group from acetyl-CoA reacts with a 4-carbon compound (oxaloacetate) to form citrate (6C).",
        "Fructose 1,6-bisphosphate is split into two molecules of triose phosphate."
      ],
      correctAnswerIndex: 2,
      explanation: "The first step of the Krebs cycle is the condensation of acetyl-CoA (2C) with oxaloacetate (4C) catalyzed by citrate synthase to yield citrate (6C)."
    },
    {
      id: "bio15-57",
      question: "In the course of hominid brain evolution, which statement is true?",
      options: [
        "Modern humans have a brain size between 0.7% and 1.0% of their body mass.",
        "Australopithecus have a brain size between 1.8% and 2.3% of their body mass.",
        "The pre-humans brain uses 80% of the resting energy requirement.",
        "Homo sapiens adult brain consumes approximately 20-25% of the body's resting metabolic energy."
      ],
      correctAnswerIndex: 3,
      explanation: "Despite representing only ~2% of total body weight, the highly developed Homo sapiens encephalon consumes about 20-25% of resting basal metabolic energy."
    },
    {
      id: "bio15-58",
      question: "All of the following are examples of innate (instinctive) behaviours EXCEPT:",
      options: [
        "training killer whales at marine parks to perform tricks.",
        "increasing breathing rate during intense exercise.",
        "producing tears when dust or smoke gets into the eyes.",
        "a fly maggot moving away from light into a humid environment (negative phototaxis)."
      ],
      correctAnswerIndex: 0,
      explanation: "Performing choreographed tricks in response to auditory cues and positive reinforcement is conditioned/operant learned behavior."
    },
    {
      id: "bio15-59",
      question: "Which one of the following is an example of insight learning?",
      options: [
        "Salivation of a dog when a bell was rung in the absence of food.",
        "Use of stacked boxes by a chimpanzee to reach bananas hung from the ceiling without prior trial-and-error.",
        "Exhibition of modifications of natural behaviors of guide dogs.",
        "Habituation to strong deodorant fragrance over time."
      ],
      correctAnswerIndex: 1,
      explanation: "Wolfgang Köhler's classic chimpanzee experiment demonstrated insight learning—spontaneous problem-solving through mental reasoning without prior trial and error."
    },
    {
      id: "bio15-60",
      question: "Which one of the following is an example of territorial behaviour of animals?",
      options: [
        "A male robin singing and threatening an intruder that enters its territory",
        "Fixed action of zebrafish to find a mate",
        "Penguins huddling together to reduce heat loss",
        "Honeybees nesting in a hollow tree"
      ],
      correctAnswerIndex: 0,
      explanation: "A male robin defending a defined boundary against conspecific competitors using vocal displays and aggressive postures is classic territoriality."
    },
    {
      id: "bio15-61",
      question: "Which renowned Ethiopian biologist developed an effective heat-stable vaccine against rinderpest disease (cattle plague)?",
      options: [
        "Professor Sebsebe Demissew",
        "Professor Yalemtsehay Mekonnen",
        "Professor Beyene Petros",
        "Professor Tilahun Yilma"
      ],
      correctAnswerIndex: 3,
      explanation: "Professor Tilahun Yilma developed the recombinant vaccinia virus vaccine for rinderpest, leading to global eradication of the livestock disease."
    },
    {
      id: "bio15-62",
      question: "A student prepares a slide of human cheek cells. Which activity should she perform FIRST when viewing under a light microscope?",
      options: [
        "Adjust the iris diaphragm until maximum brightness is achieved.",
        "Set up and focus the microscope with the lowest power objective lens in place.",
        "Use coarse focusing knob with highest magnification oil lens.",
        "Look through eyepiece while racking objective lens down rapidly."
      ],
      correctAnswerIndex: 1,
      explanation: "Microscopy standard protocol dictates always locating and focusing the specimen using the lowest power objective first before shifting to higher magnifications."
    },
    {
      id: "bio15-63",
      question: "Which one of the following is true about plant cells?",
      options: [
        "vacuole controls all activities of the cell.",
        "lysosomes contain hydrolytic enzymes and carry out photosynthesis.",
        "chloroplasts are filled with cell sap, liquids and minerals.",
        "cell wall made of cellulose gives mechanical support and tensile strength to the cell."
      ],
      correctAnswerIndex: 3,
      explanation: "The rigid cellulose cell wall provides structural rigidity, prevents osmotic lysis, and maintains cell shape in plants."
    },
    {
      id: "bio15-64",
      question: "When a plant cell is placed in pure water (hypotonic solution), after a few minutes the cell will become:",
      options: [
        "turgid.",
        "flaccid.",
        "plasmolysed.",
        "burst."
      ],
      correctAnswerIndex: 0,
      explanation: "Water enters via endosmosis, causing the protoplast to swell against the inelastic cell wall until wall pressure balances osmotic influx, making the cell turgid."
    },
    {
      id: "bio15-65",
      question: "Which one of the following is correct about human digestion?",
      options: [
        "The stomach physically churns and breaks down the ingested food into chyme.",
        "Mouth uses protease enzyme to breakdown proteins.",
        "Large intestine is the primary site of lipid hydrolysis.",
        "The esophagus is site of absorption of digested molecules."
      ],
      correctAnswerIndex: 0,
      explanation: "The stomach performs muscular peristaltic churning (mechanical breakdown) and secretes HCl and pepsin to convert food into semi-liquid chyme."
    },
    {
      id: "bio15-66",
      question: "Sickle cell anemia is caused by the replacement of glutamic acid by valine at position 6 of the β-globin chain. This is an example of which type of mutation?",
      options: [
        "Addition mutation",
        "Substitution (missense point mutation)",
        "Inversion mutation",
        "Deletion mutation"
      ],
      correctAnswerIndex: 1,
      explanation: "Sickle cell hemoglobin (HbS) results from a single base substitution (GAG -> GTG) replacing hydrophilic glutamic acid with hydrophobic valine."
    },
    {
      id: "bio15-67",
      question: "Stanley Miller's prebiotic spark-discharge experiment utilized simulated primordial atmospheric gases EXCEPT:",
      options: [
        "NH3 (ammonia)",
        "CH4 (methane)",
        "H2 (hydrogen gas)",
        "CO2 / Free O2"
      ],
      correctAnswerIndex: 3,
      explanation: "Miller-Urey experiment modeled a reducing atmosphere containing CH4, NH3, H2O, and H2; it excluded molecular oxygen (O2) and high concentrations of CO2."
    },
    {
      id: "bio15-68",
      question: "Which of the following sentences explains Darwin's theory of evolution by natural selection?",
      options: [
        "Environment changes, creating a conscious need for organism to change.",
        "There is natural heritable variation among individuals, and favorable traits improve survival and reproductive success.",
        "New features acquired during lifetime are passed to offspring.",
        "Organisms intentionally develop new features to survive."
      ],
      correctAnswerIndex: 1,
      explanation: "Darwinian natural selection is predicated on overproduction, struggle for existence, heritable phenotypic variation, and differential reproductive fitness."
    },
    {
      id: "bio15-69",
      question: "Comparative anatomy provides evidence of evolution because it:",
      options: [
        "looks at structural similarities (homologous structures) of organisms.",
        "has remains of animals and plants from the remote past.",
        "has an impression of animal even if actual parts are missing.",
        "studies the development of the embryos of vertebrates."
      ],
      correctAnswerIndex: 0,
      explanation: "Homologous anatomical structures (like the pentadactyl limb in vertebrates) demonstrate divergence from a common ancestral anatomical blueprint."
    },
    {
      id: "bio15-70",
      question: "About 3 million years ago the Isthmus of Panama rose and separated shrimp populations into Caribbean and Pacific groups that can no longer interbreed. This is:",
      options: [
        "Seasonal isolation",
        "Geographical isolation (allopatric speciation)",
        "Behavioural isolation",
        "Temporal isolation"
      ],
      correctAnswerIndex: 1,
      explanation: "Physical separation by a geographic barrier (the land bridge of Panama) preventing gene flow is allopatric speciation through geographical isolation."
    },
    {
      id: "bio15-71",
      question: "In a metabolic pathway, end-product feedback inhibition occurs when:",
      options: [
        "last product of the pathway inhibits the last enzymatic reaction.",
        "first product of the pathway inhibits the last enzymatic reaction.",
        "first product of the pathway inhibits the third enzyme of the reaction.",
        "the final end product of the pathway binds to and allosterically inhibits the first committed enzyme."
      ],
      correctAnswerIndex: 3,
      explanation: "Feedback inhibition prevents wasteful overaccumulation by allowing the terminal metabolite to allosterically inhibit the initial committed enzyme."
    },
    {
      id: "bio15-72",
      question: "A catalase velocity curve shows reaction rate rising rapidly between 0.1% and 0.4% substrate and plateauing between 0.5% and 0.6%. Minimum substrate concentration for Vmax turnover saturation is:",
      options: [
        "0.4 to 0.5%",
        "0.1 to 0.2%",
        "0.5 to 0.6%",
        "0.3 to 0.4%"
      ],
      correctAnswerIndex: 2,
      explanation: "At high substrate concentrations (0.5% - 0.6%), enzyme active sites become saturated, reaching asymptotic maximal velocity (Vmax)."
    },
    {
      id: "bio15-73",
      question: "Which statement about the history of cell theory is correct?",
      options: [
        "Schleiden and Schwann stated that all cells come from pre-existing cells.",
        "Virchow stated that cell is the unit of structure of plants only.",
        "Modern cell theory states that cells contain hereditary information (DNA) passed from cell to cell during division.",
        "Spontaneous generation theory states that all cells have basically different chemical composition."
      ],
      correctAnswerIndex: 2,
      explanation: "Modern cell theory incorporates molecular genetics: all living cells contain hereditary genetic material (DNA) replicated and passed during division."
    },
    {
      id: "bio15-74",
      question: "A student measured 8 onion epidermal cells fitting across a field of view of 2 mm (2000 μm). What is the diameter of an individual cell?",
      options: [
        "250 μm",
        "200 μm",
        "150 μm",
        "300 μm"
      ],
      correctAnswerIndex: 0,
      explanation: "Diameter of one cell = Field of view diameter / number of cells = 2000 μm / 8 = 250 μm."
    },
    {
      id: "bio15-75",
      question: "Which of the following characteristics is found ONLY in prokaryotic cells?",
      options: [
        "Division of labor within membrane-bound organelles",
        "Covalently closed continuous circular loop of naked DNA in a nucleoid",
        "Cell diameter exceeding 100 μm",
        "Complex endomembrane system"
      ],
      correctAnswerIndex: 1,
      explanation: "Prokaryotes lack a nuclear envelope; their genome consists of a single continuous circular DNA chromosome free of histone complexes in the nucleoid."
    },
    {
      id: "bio15-76",
      question: "Which one of the following sentences is true about viruses?",
      options: [
        "AIDS is caused by a DNA virus.",
        "Corona virus is a DNA virus.",
        "Swine flu (Influenza A) is caused by an RNA virus.",
        "Herpes simplex is an RNA virus."
      ],
      correctAnswerIndex: 2,
      explanation: "Influenza viruses (including Swine flu H1N1) are negative-sense single-stranded segmented RNA viruses."
    },
    {
      id: "bio15-77",
      question: "Order the stages of HIV infection in human helper T-cells:\n1. Integration of viral DNA into host genome\n2. Transcription and protein synthesis\n3. Assembly of viral particles\n4. Binding of gp120 to CD4 receptor\n5. Fusion of viral envelope with host membrane\n6. Reverse transcription of viral RNA into cDNA",
      options: [
        "4, 5, 6, 1, 2, 3",
        "4, 2, 5, 6, 1, 3",
        "4, 6, 5, 2, 1, 3",
        "4, 1, 2, 5, 6, 3"
      ],
      correctAnswerIndex: 0,
      explanation: "Sequence: CD4 binding (4) -> membrane fusion (5) -> reverse transcription (6) -> proviral DNA integration (1) -> viral gene expression (2) -> viral assembly and budding (3)."
    },
    {
      id: "bio15-78",
      question: "Which bacterium fixes atmospheric nitrogen into ammonium ions by forming root nodule symbiotic associations with legumes?",
      options: [
        "Klebsiella",
        "Azotobacter",
        "Pseudomonas",
        "Rhizobium"
      ],
      correctAnswerIndex: 3,
      explanation: "Rhizobium species form mutualistic endosymbiotic bacteroids inside root nodules of leguminous plants to fix atmospheric N2 into bioavailable ammonia."
    },
    {
      id: "bio15-79",
      question: "In the hydrological water cycle: Ocean -> A (Atmosphere), Plants -> B (Atmosphere), Cloud formation -> C, Rain -> D. A, B, C, D represent:",
      options: [
        "evaporation, transpiration, condensation, precipitation.",
        "evaporation, precipitation, transpiration, condensation.",
        "evaporation, transpiration, precipitation, condensation.",
        "evaporation, precipitation, condensation, transpiration."
      ],
      correctAnswerIndex: 0,
      explanation: "A = Evaporation from open ocean water; B = Transpiration from plant stomata; C = Condensation into clouds; D = Precipitation as rain/snow."
    },
    {
      id: "bio15-80",
      question: "Comparing ecological successions, secondary succession differs from primary succession because it:",
      options: [
        "starts on pre-existing soil and reaches climax community much faster.",
        "has reduced total biomass of the community.",
        "has slower progress to reach the climax.",
        "occurs on barren cooled lava rock without soil."
      ],
      correctAnswerIndex: 0,
      explanation: "Secondary succession occurs following a disturbance (e.g. fire, agriculture) where pre-existing fertile soil and seed banks remain, progressing far faster than primary succession."
    },
    {
      id: "bio15-81",
      question: "Which one of the following sentences describes the tropical rainforest biome?",
      options: [
        "Poor and thin nutrient-leached soils beneath dense multilayer canopy.",
        "Sparse - succulent plants.",
        "Frozen and rocky permafrost soil.",
        "Migrating animals due to extreme winter."
      ],
      correctAnswerIndex: 0,
      explanation: "Despite high biodiversity, tropical rainforest soils (oxisols/ultisols) are heavily leached, acidic, and nutrient-poor because nutrients are rapidly recycled into lush biomass."
    },
    {
      id: "bio15-82",
      question: "Freshwater biomes like streams and rivers are characterized by the presence of:",
      options: [
        "corals, crabs and planktons.",
        "algae, planktons and freshwater fish (e.g. trout, tilapia).",
        "corals, kelps and angler fish.",
        "angler fish, marine algae and crabs."
      ],
      correctAnswerIndex: 1,
      explanation: "Freshwater lotic ecosystems are inhabited by freshwater algae, phytoplankton, aquatic insects, and freshwater teleosts like trout, catfish, and tilapia."
    },
    {
      id: "bio15-83",
      question: "Which one of the following statements correctly describes intra-specific and inter-specific competitions?",
      options: [
        "competition is less severe in intra-specific than in inter-specific competition.",
        "intra-specific competition is for a few requirements but inter-specific is for all.",
        "competing individuals have identical ecological niches in intra-specific competition making it more intense.",
        "competing individuals belong to different species in intra-specific competition."
      ],
      correctAnswerIndex: 2,
      explanation: "Intra-specific competition occurs between members of the same species sharing identical resource needs, making niche overlap 100% and competition intense."
    },
    {
      id: "bio15-84",
      question: "Which one of the following stages of cell division is correctly described in meiosis II?",
      options: [
        "Prophase II - pairs of homologous chromosomes split up",
        "Anaphase II - sister chromatids from each chromosome separate and move to opposite poles.",
        "Metaphase II - chromosomes pair and exchange segments",
        "Telophase II - diploid cells are produced"
      ],
      correctAnswerIndex: 1,
      explanation: "In anaphase II, centromeres divide and sister chromatids are pulled apart toward opposite spindle poles as individual daughter chromosomes."
    },
    {
      id: "bio15-85",
      question: "Which one of the following is an example of a sex-influenced trait?",
      options: [
        "Pattern baldness in humans",
        "Lactation in mammals",
        "Retinitis pigmentosa",
        "Undescended testicles"
      ],
      correctAnswerIndex: 0,
      explanation: "Pattern baldness is an autosomal sex-influenced trait that acts as dominant in males (requiring only one allele in presence of testosterone) and recessive in females."
    },
    {
      id: "bio15-86",
      question: "Which of the following processes takes place when lactate is produced during anaerobic lactic acid fermentation in muscle cells?",
      options: [
        "NAD+ and FAD are regenerated from reduced NAD and FAD.",
        "ATP is produced through oxidative phosphorylation.",
        "Protons accumulation created in the inter-membrane space.",
        "Reduced NAD (NADH) transfers hydrogen to pyruvate and becomes oxidized back to NAD+."
      ],
      correctAnswerIndex: 3,
      explanation: "Lactate dehydrogenase reduces pyruvate to lactic acid while oxidizing NADH back to NAD+, allowing glycolysis to continue producing ATP under anaerobic conditions."
    },
    {
      id: "bio15-87",
      question: "Which structure of the photosystem is correctly matched with its function?",
      options: [
        "Chlorophyll a - reaction center molecule that emits excited electrons",
        "Antenna complex - light dependent reaction ATP synthesis begins",
        "Carotenoid - provides the hydrogen ions for reduction",
        "Thylakoid - absorbs blue and red pigments only"
      ],
      correctAnswerIndex: 0,
      explanation: "Specialized chlorophyll a molecules (P680 in PSII, P700 in PSI) form the photochemical reaction center that undergoes charge separation."
    },
    {
      id: "bio15-88",
      question: "What happens during the mitochondrial electron transport system of respiration?",
      options: [
        "four-carbon compound undergoes molecular transformation to generate oxaloacetate.",
        "hydrogen atoms carried by FADH2 and NADH are released and electron pairs pass along respiratory complexes.",
        "citrate loses a carbon atom to form a five-carbon atom compound.",
        "five carbon compound is further decarboxylated."
      ],
      correctAnswerIndex: 1,
      explanation: "NADH and FADH2 donate high-energy electrons to Complex I and II, which are shuttled down redox carriers to pump protons and reduce terminal O2 to H2O."
    },
    {
      id: "bio15-89",
      question: "During the light-independent reactions of photosynthesis (Calvin cycle), one molecule of glucose is synthesized through:",
      options: [
        "synthesis of reduced NADP that provides hydrogen ion.",
        "six turns of the Calvin cycle fixing six CO2 molecules.",
        "release of hydrogen ions at the electron transport chain.",
        "transmission of electrons to the inside of the thylakoid."
      ],
      correctAnswerIndex: 1,
      explanation: "Producing one net hexose molecule (C6H12O6) requires fixing 6 molecules of CO2 through six complete turns of the Calvin-Benson cycle."
    },
    {
      id: "bio15-90",
      question: "Which of the following photosynthetic factors is correctly matched with its limiting effect?",
      options: [
        "CO2 concentration - limits the rate of initial carboxylation of RuBP by Rubisco in dark reactions",
        "Low temperature - limits the rate of reactions by reducing the number of electrons in chlorophyll",
        "Low Rubisco - limits the number of reactions in light dependent photolysis",
        "Light intensity - limits the rate of ATP synthase enzyme action in light independent reactions"
      ],
      correctAnswerIndex: 0,
      explanation: "Carbon dioxide concentration directly limits the substrate availability for RuBP carboxylation by ribulose-1,5-bisphosphate carboxylase/oxygenase (Rubisco)."
    },
    {
      id: "bio15-91",
      question: "Which one of the following monohybrid crosses is a test cross?",
      options: [
        "Rr x Rr",
        "RR x Rr",
        "RR x rr (or Rr x rr)",
        "RR x RR"
      ],
      correctAnswerIndex: 2,
      explanation: "A genetic test cross involves breeding an individual of dominant phenotype with a homozygous recessive individual (rr) to determine its zygosity."
    },
    {
      id: "bio15-92",
      question: "Which of the following is detrimental and DIFFERENT from the rest regarding botanical conservation?",
      options: [
        "Using local indigenous practices for conservation",
        "Replanting of degraded land with endemic species",
        "Replanting indigenous tree species",
        "Large scale introduction of invasive exotic plants (e.g. Prosopis juliflora)"
      ],
      correctAnswerIndex: 3,
      explanation: "Monoculture introduction of alien invasive species disrupts native flora and degrades indigenous biodiversity, unlike restorative native reforestation."
    },
    {
      id: "bio15-93",
      question: "In the nervous coordination system, what is a synapse?",
      options: [
        "chemical that transmits nerve impulses across the nervous system.",
        "part of the skull that encloses brain for protection.",
        "functional junction between two neurons or between a motor neuron and an effector muscle.",
        "short term change in the electrical potential on the surface of cells."
      ],
      correctAnswerIndex: 2,
      explanation: "A synapse is the microscopic specialized anatomical junction across which action potentials are chemically or electrically transmitted from a neuron to a target cell."
    },
    {
      id: "bio15-94",
      question: "In a demonstration of the simple spinal patellar knee-jerk reflex:",
      options: [
        "the impulse travels directly to the cerebral cortex for processing.",
        "tapping the patellar ligament stretches the muscle spindles in the quadriceps.",
        "lower leg jerks downwards and inwards.",
        "impulse travels to quadriceps muscle from the brain."
      ],
      correctAnswerIndex: 1,
      explanation: "Tapping the patellar tendon stretches the extensor quadriceps muscle spindles, triggering a monosynaptic reflex arc through the spinal cord."
    },
    {
      id: "bio15-95",
      question: "Which of the following human eye structures is correctly matched with its function?",
      options: [
        "Pupil - serves as the eye's protective outer layer",
        "Iris - controls the diameter of the pupil and regulates the amount of light entering the eye",
        "Cornea - provides nutrition to the retina",
        "Choroid - bends the light into the eye"
      ],
      correctAnswerIndex: 1,
      explanation: "The pigmented iris contains radial and circular smooth muscle fibers that constrict or dilate the pupil aperture to regulate incident retinal illumination."
    },
    {
      id: "bio15-96",
      question: "In the Crassulacean Acid Metabolism (CAM) photosynthetic pathway:",
      options: [
        "malate is stored in the vacuoles during night and decarboxylated for the Calvin cycle during the day.",
        "glucose is synthesized in the bundle sheath cell during night.",
        "ATP and NADPH are produced during the night.",
        "the C4 stage and the Calvin cycle are separated in time (temporal separation)."
      ],
      correctAnswerIndex: 3,
      explanation: "CAM plants fix CO2 into organic malic acid at night (stomata open) and temporally release CO2 for the Calvin cycle during daylight (stomata closed to conserve water)."
    },
    {
      id: "bio15-97",
      question: "In Gram staining, if bacteria retain the crystal violet-iodine primary dye complex after alcohol decolorization, they are classified as:",
      options: [
        "Gram positive.",
        "Gram negative.",
        "Gram intermediate.",
        "Gram variable."
      ],
      correctAnswerIndex: 0,
      explanation: "Gram-positive bacteria possess a thick peptidoglycan cell wall that retains crystal violet dye even after ethanol washing."
    },
    {
      id: "bio15-98",
      question: "Which sentence explains the mechanism of bacterial pathogenesis in producing infectious disease?",
      options: [
        "Its hyphae secretes enzymes which digest substances in the tissue.",
        "It enters living host tissues, replicates, releases exotoxins or endotoxins, and damages cellular function.",
        "It attaches with white blood cells and destroy the entire immune system.",
        "Its genetic material is incorporated into host chromosomes."
      ],
      correctAnswerIndex: 1,
      explanation: "Bacterial pathogens cause clinical disease by tissue invasion, direct cellular disruption, and secretion of toxic metabolic virulence factors (exotoxins/endotoxins)."
    },
    {
      id: "bio15-99",
      question: "What is the primary role of bacteria in genetic engineering and recombinant DNA technology?",
      options: [
        "isolate genes from donor DNA.",
        "open up a plasmid.",
        "cut genes from donor DNA.",
        "act as host cells that harbor and replicate recombinant cloning plasmids."
      ],
      correctAnswerIndex: 3,
      explanation: "Bacterial strains (e.g. E. coli) serve as rapid biological factories and transformation hosts for amplifying recombinant plasmids and expressing cloned human genes."
    },
    {
      id: "bio15-100",
      question: "Which one of the following sentences describes a virus?",
      options: [
        "has differentiated membrane-bound organelles.",
        "is saprophytic and absorbs dead organic matter.",
        "is an acellular, obligate intracellular biological agent possessing nucleic acid enclosed in a protein capsid.",
        "undergoes independent cellular respiration."
      ],
      correctAnswerIndex: 2,
      explanation: "Viruses are non-cellular (acellular) obligate intracellular parasites that lack metabolic machinery and replicate solely inside living host cells."
    }
  ]
};
