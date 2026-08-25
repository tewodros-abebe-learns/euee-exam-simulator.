import { type Question } from '../services/geminiService';

export const biology2017Exam = {
  id: "euee-2017-biology",
  title: "2017 E.C. ESSLCE Biology Examination",
  subject: "Biology",
  grade: "Grade 12",
  timeLimit: 9000, // 150 minutes (2:30 hours)
  questions: [
    {
      id: "bio-1",
      question: "Which one of the following Ethiopian biological research institutes is known for housing a major gene bank in Africa?",
      options: [
        "Addis Ababa University Biology Department",
        "Institute of Biodiversity Conservation (IBC)",
        "Aklilu Lemma Institute of Pathobiology",
        "Armauer Hansen Research Institute"
      ],
      correctAnswerIndex: 1,
      explanation: "The Ethiopian Institute of Biodiversity Conservation (IBC) houses one of the largest and most renowned plant genetic resource and seed gene banks in Africa."
    },
    {
      id: "bio-2",
      question: "A grade 12 student marked two dots close to each other on paper and observed them under a microscope. The two dots appeared well separated. This was due to microscope:",
      options: [
        "resolution",
        "magnification",
        "staining",
        "mounting"
      ],
      correctAnswerIndex: 0,
      explanation: "Resolution (resolving power) is the ability of an optical microscope to distinguish two adjacent points as separate and distinct entities."
    },
    {
      id: "bio-3",
      question: "From the following alternatives, select the common organelles and features found in BOTH animal and plant cells:",
      options: [
        "Cell membrane, nucleus, cytoplasm, lysosome and Golgi apparatus",
        "Cell membrane, nucleus, cytoplasm, mitochondria and endoplasmic reticulum",
        "Cell membrane, nucleus, cytoplasm, chloroplast and Golgi apparatus",
        "Cell membrane, nucleus, cytoplasm, large permanent central vacuole and Golgi apparatus"
      ],
      correctAnswerIndex: 1,
      explanation: "Both plant and animal eukaryotic cells share a plasma membrane, nucleus, cytoplasm, mitochondria, endoplasmic reticulum, and ribosomes."
    },
    {
      id: "bio-4",
      question: "Potato slices are placed into two test conditions: Group I in hypertonic solution and Group II in hypotonic solution. What will happen to the potato slices?",
      options: [
        "Turgid for Group I while flaccid for Group II",
        "Haemolyzed for Group I while flaccid for Group II",
        "Flaccid (plasmolyzed) for Group I while turgid for Group II",
        "Turgid for Group I while no change for Group II"
      ],
      correctAnswerIndex: 2,
      explanation: "In hypertonic solution (Group I), water exosmosis causes plant cells to lose water and become flaccid/plasmolyzed. In hypotonic solution (Group II), endosmosis makes cells turgid."
    },
    {
      id: "bio-5",
      question: "A man eats only vegetables, beans, bananas, and oranges for one week in lunch and dinner. Which nutrient class is most deficient for a balanced diet?",
      options: [
        "Carbohydrates",
        "Lipids (Fats & essential fatty acids)",
        "Proteins",
        "Minerals"
      ],
      correctAnswerIndex: 1,
      explanation: "Vegetables, legumes (beans), and fruits provide carbohydrates, plant proteins, vitamins, and minerals, but lack adequate dietary lipids and essential fatty acids."
    },
    {
      id: "bio-6",
      question: "Which of the following is correct regarding digestion and absorption in the human small intestine?",
      options: [
        "Proteins are converted into amino acids by the action of hydrochloric acid and amylase.",
        "Bile emulsifies fats into smaller droplets to increase the surface area for pancreatic lipase.",
        "Water is reabsorbed into the small intestine and metabolic wastes are excreted.",
        "Glucose and non-hydrolyzed starch molecules are absorbed through the lacteal."
      ],
      correctAnswerIndex: 1,
      explanation: "Bile salts physically emulsify dietary triglycerides into microscopic lipid droplets, dramatically increasing surface area for enzymatic hydrolysis by lipase."
    },
    {
      id: "bio-7",
      question: "Students want to prove that enzymatic digestion of starch begins in the mouth using chewed food mixed with saliva. Which food sample and test reagent should be used?",
      options: [
        "Potato / Starch and iodine solution (or Benedict's test for reducing sugars)",
        "Meat and Benedict's solution",
        "Fish and sodium hydroxide solution",
        "Bread and copper sulphate solution"
      ],
      correctAnswerIndex: 0,
      explanation: "Salivary amylase hydrolyzes starch in potato/bread into maltose, showing a decrease in blue-black iodine staining and an increase in reducing sugars."
    },
    {
      id: "bio-8",
      question: "Compared to inhaled atmospheric air, what are the approximate percentage proportions of nitrogen, oxygen, and carbon dioxide in exhaled air?",
      options: [
        "$80\\%\\text{ N}_2, 16\\%\\text{ O}_2, \\text{and } 4\\%\\text{ CO}_2$",
        "$80\\%\\text{ N}_2, 4\\%\\text{ O}_2, \\text{and } 16\\%\\text{ CO}_2$",
        "$16\\%\\text{ N}_2, 4\\%\\text{ O}_2, \\text{and } 80\\%\\text{ CO}_2$",
        "$4\\%\\text{ N}_2, 16\\%\\text{ O}_2, \\text{and } 80\\%\\text{ CO}_2$"
      ],
      correctAnswerIndex: 0,
      explanation: "Exhaled air consists of approximately $78-80\\%$ Nitrogen (unchanged), $16\\%$ Oxygen (consumed in respiration), and $4\\%$ Carbon Dioxide (respiratory byproduct)."
    },
    {
      id: "bio-9",
      question: "Student I uses cold glass and blue cobalt chloride paper; Student III uses limewater ($\\text{Ca(OH)}_2$) with a straw. These experiments demonstrate the presence of exhaled:",
      options: [
        "oxygen and nitrogen, respectively.",
        "carbon dioxide and water vapor, respectively.",
        "nitrogen and water vapor, respectively.",
        "water vapor (turns cobalt paper pink) and carbon dioxide (turns limewater cloudy), respectively."
      ],
      correctAnswerIndex: 3,
      explanation: "Cobalt chloride paper changes from blue to pink in the presence of water vapor, while limewater forms a milky calcium carbonate precipitate with $\\text{CO}_2$."
    },
    {
      id: "bio-10",
      question: "In the human heart anatomy, which chamber (thick muscular left ventricle) is responsible for pumping oxygenated blood under high pressure into the aorta and around the systemic body?",
      options: [
        "Right Atrium (I)",
        "Right Ventricle (II)",
        "Left Ventricle (III)",
        "Left Atrium (IV)"
      ],
      correctAnswerIndex: 2,
      explanation: "The left ventricle (III) possesses the thickest myocardial wall to pump oxygen-rich blood through the aortic semilunar valve to the rest of the body."
    },
    {
      id: "bio-11",
      question: "If a person's bone marrow cannot synthesize sufficient red blood cells (erythrocytes), which mineral-rich food can correct nutritional iron-deficiency anemia?",
      options: [
        "Iron-rich food (spinach, liver, red meat)",
        "Calcium-rich food",
        "Iodine-rich food",
        "Sodium-rich food"
      ],
      correctAnswerIndex: 0,
      explanation: "Iron ($Fe^{2+}$) is the central prosthetic atom in hemoglobin required for erythropoiesis and oxygen binding."
    },
    {
      id: "bio-12",
      question: "According to the rules of binomial nomenclature, which formatting correctly represents the scientific names of human, domestic dog, and housefly?",
      options: [
        "Homo Sapiens, Canis Familiaris and Musca Domestica",
        "Homo sapiens, Canis familiaris and Musca domestica",
        "homo sapiens, Canis familiaris and Musca domestica",
        "Homo sapiens, Canis familiaris and musca domestica"
      ],
      correctAnswerIndex: 1,
      explanation: "The genus name begins with a capitalized letter, the specific epithet is lowercase, and both words are italicized or underlined: *Homo sapiens*, *Canis familiaris*, *Musca domestica*."
    },
    {
      id: "bio-13",
      question: "Identify typical representative botanical examples for divisions Gymnospermae (naked seeds) and Angiospermae (flowering plants), respectively:",
      options: [
        "Mosses and ferns",
        "Liverworts and palm trees",
        "Grasses and legumes",
        "Juniper (conifer) and roses (flowering angiosperm)"
      ],
      correctAnswerIndex: 3,
      explanation: "Juniper and pines are gymnosperms bearing naked seeds in cones, whereas roses, wheat, and trees with flowers are angiosperms."
    },
    {
      id: "bio-14",
      question: "A student collects plants with a single cotyledon embryo, parallel leaf venation, and scattered stem vascular bundles. Which group represents these monocotyledons?",
      options: [
        "Grasses, orchids, teff and roses",
        "Grasses, orchids, teff and beans",
        "Grasses, sunflowers, teff and maize",
        "Grasses, orchids, teff and maize"
      ],
      correctAnswerIndex: 3,
      explanation: "Grasses, orchids, teff, and maize (corn) are all monocots characterized by 1 cotyledon, parallel venation, and fibrous roots."
    },
    {
      id: "bio-15",
      question: "In an ecological pyramid of biomass, why does usable biomass decrease progressively from primary consumers (II) to secondary consumers (III)?",
      options: [
        "The whole organisms at first trophic level are eaten completely.",
        "When organisms eat producers, most materials become secondary consumers.",
        "Much of the ingested biomass and energy is dissipated in metabolic maintenance, cellular respiration, and heat loss.",
        "The biomass passed on supports a larger number of organisms above."
      ],
      correctAnswerIndex: 2,
      explanation: "According to Lindeman's trophic efficiency (approx $10\\%$ transfer), over $90\\%$ of energy and biomass is consumed for respiration, excretion, and heat."
    },
    {
      id: "bio-16",
      question: "In the food chain: Leaves $\\to$ Grasshoppers $\\to$ Rodents $\\to$ Leopards, what happens if the rodent population crashes significantly?",
      options: [
        "An increase in the number of leopards",
        "Fewer grasshoppers in the chain",
        "No change in leopard populations",
        "An increase in the number of grasshoppers due to reduced predation"
      ],
      correctAnswerIndex: 3,
      explanation: "With fewer predatory rodents feeding on grasshoppers, grasshopper mortality decreases, causing their population to increase."
    },
    {
      id: "bio-17",
      question: "Which of the following physical processes is NOT a key biological/geochemical step in the carbon cycle?",
      options: [
        "Evaporation (part of the hydrologic cycle)",
        "Cellular respiration",
        "Photosynthesis",
        "Decomposition"
      ],
      correctAnswerIndex: 0,
      explanation: "Evaporation is a physical phase change in the water cycle, whereas photosynthesis, respiration, and decomposition govern carbon flux."
    },
    {
      id: "bio-18",
      question: "Which of the following is correct regarding mitosis in eukaryotic somatic cells?",
      options: [
        "Division of somatic cells to make daughter cells with half chromosomes.",
        "Division of sex cells to make identical daughter cells with doubled chromosomes.",
        "Division of somatic cells to produce two genetically identical diploid daughter cells ($2n$).",
        "Division of sex cells to produce genetically diverse haploid gametes."
      ],
      correctAnswerIndex: 2,
      explanation: "Mitosis is equational division in somatic cells that produces two daughter cells identical in genetic complement to the parent."
    },
    {
      id: "bio-19",
      question: "Which cellular feature is common to BOTH mitosis and meiosis?",
      options: [
        "Preceding interphase with DNA replication and chromosome duplication",
        "Production of daughter cells identical to the parent cell",
        "Formation of cells with the exact same chromosome number as the parent",
        "Spermatogenesis and oogenesis in gonads"
      ],
      correctAnswerIndex: 0,
      explanation: "Both mitotic and meiotic cell divisions are preceded by S-phase interphase involving semi-conservative DNA replication."
    },
    {
      id: "bio-20",
      question: "Which leaf tissues/structures are primarily responsible for waterproofing, major photosynthesis, and gas exchange, respectively?",
      options: [
        "Guard cells, palisade mesophyll and epidermis",
        "Guard cells, palisade mesophyll and spongy mesophyll",
        "Waxy cuticle, palisade mesophyll, and spongy mesophyll (with stomata)",
        "Waxy cuticle, palisade mesophyll and epidermis"
      ],
      correctAnswerIndex: 2,
      explanation: "The waxy cuticle prevents water transpiration; columnar palisade mesophyll captures light; loosely packed spongy mesophyll facilitates gas diffusion."
    },
    {
      id: "bio-21",
      question: "Which statement correctly describes the transpiration stream and water transport in plants?",
      options: [
        "Moves against a water potential gradient without transpiration pull.",
        "Moves across phloem tissue by active diffusion.",
        "Moves across root cortical tissues toward the xylem along a descending water potential gradient by osmosis.",
        "Uses metabolic ATP energy continuously to push water to leaves."
      ],
      correctAnswerIndex: 2,
      explanation: "Water enters root hairs and moves symplastically/apoplastically down a water potential gradient ($\n\\Psi_w$) toward the xylem by osmosis."
    },
    {
      id: "bio-22",
      question: "What happens to a plant when the apical shoot tip (the site of Indole-3-Acetic Acid / auxin production) is excised (decapitated)?",
      options: [
        "Apical dominance is broken and lateral/side buds develop, making the plant bush out.",
        "It stimulates premature leaf abscission.",
        "The main terminal shoot elongates faster.",
        "The growth of side shoots is completely inhibited."
      ],
      correctAnswerIndex: 0,
      explanation: "Removing the shoot apex eliminates apical dominance maintained by auxin (IAA), allowing cytokinins to trigger lateral bud outgrowth into a bushy plant."
    },
    {
      id: "bio-23",
      question: "Which alternative lists general fundamental characteristics shared by kingdom Animalia organisms?",
      options: [
        "Respire, excrete, autotrophic and reproduce",
        "Unicellular, excrete, heterotrophic and motility",
        "Heterotrophic nutrition, excretion, locomotion/motility, and growth",
        "Respire, multicellular, autotrophic and reproduce"
      ],
      correctAnswerIndex: 2,
      explanation: "Animals are multicellular, ingestive heterotrophs capable of movement/motility at some life stage, excretion, respiration, and growth."
    },
    {
      id: "bio-24",
      question: "Which of the following animals possesses a closed circulatory system with blood vessels and a centralized brain nervous system?",
      options: [
        "Garden snails",
        "Planaria flatworm",
        "Squid / Cephalopods (or vertebrates)",
        "Jellyfish"
      ],
      correctAnswerIndex: 2,
      explanation: "Cephalopods (squid, octopus) and vertebrates possess a closed circulatory system with systemic hearts and a highly developed cephalized brain."
    },
    {
      id: "bio-25",
      question: "What is the physiological definition of a poikilothermic (ectothermic) animal?",
      options: [
        "Its internal body temperature fluctuates in accordance with ambient environmental temperature.",
        "It maintains an elevated metabolic rate in freezing conditions.",
        "It keeps internal core body temperature strictly constant via homeostasis.",
        "It regulates body temperature via hypothalamic shivering thermogenesis."
      ],
      correctAnswerIndex: 0,
      explanation: "Poikilotherms (e.g. reptiles, amphibians, fish) cannot regulate body temperature internally and rely on environmental thermal conditions."
    },
    {
      id: "bio-26",
      question: "Which statement is correct regarding the catalytic action of biological enzymes?",
      options: [
        "They change the chemical nature and equilibrium of end products.",
        "They accelerate biochemical reaction rates by lowering the activation energy barrier ($E_a$).",
        "They are consumed or permanently altered at the conclusion of reactions.",
        "They increase the initial thermal threshold energy required to initiate reactions."
      ],
      correctAnswerIndex: 1,
      explanation: "Enzymes act as biological catalysts that lower activation energy, speeding up biochemical reactions millions of times without being consumed."
    },
    {
      id: "bio-27",
      question: "Poster I shows polypeptides folded into $\\alpha$-helices and $\\beta$-sheets with hydrogen bonds. Poster III shows multiple folded polypeptide subunits arranged in a multi-subunit protein complex (e.g. hemoglobin). Posters I and III represent:",
      options: [
        "Secondary and Quaternary protein structures, respectively.",
        "Primary and Tertiary protein structures, respectively.",
        "Secondary and Tertiary protein structures, respectively.",
        "Primary and Quaternary protein structures, respectively."
      ],
      correctAnswerIndex: 0,
      explanation: "Secondary structure involves local $\\alpha$-helices/$\\beta$-sheets; quaternary structure involves assembly of multiple polypeptide tertiary subunits."
    },
    {
      id: "bio-28",
      question: "How does Koshland's Induced-Fit Model explain enzyme-substrate specificity?",
      options: [
        "The active site undergoes subtle conformational reshaping upon substrate contact to bind the transition state precisely.",
        "The enzyme active site is a completely rigid static lock matching a single key.",
        "Enzymes possess dozens of non-specific catalytic sites for any substrate.",
        "Substrates bind randomly to non-specific allosteric domains."
      ],
      correctAnswerIndex: 0,
      explanation: "The induced-fit model states that binding of the substrate induces a conformational change in the active site for an optimal catalytic fit."
    },
    {
      id: "bio-29",
      question: "What happens when a competitive inhibitor binds to an enzyme?",
      options: [
        "The substrate undergoes immediate conformational denaturation.",
        "The inhibitor blocks the catalytic active site, preventing the substrate from binding.",
        "The substrate binds irreversibly to the allosteric site.",
        "The reaction velocity increases at low substrate concentrations."
      ],
      correctAnswerIndex: 1,
      explanation: "Competitive inhibitors share structural homology with the substrate and compete directly for the enzyme's active site."
    },
    {
      id: "bio-30",
      question: "In allosteric enzyme regulation, what occurs when an allosteric activator binds to the enzyme's regulatory site?",
      options: [
        "The activator binds to the active site to slow catalysis.",
        "The inhibitor binds to the active site.",
        "The activator binds to the active site to initiate the reaction.",
        "The activator binds to a distinct regulatory (allosteric) site, stabilizing the high-affinity active conformation."
      ],
      correctAnswerIndex: 3,
      explanation: "Allosteric activators bind to non-active regulatory sites, inducing conformational changes that increase substrate affinity at the active site."
    },
    {
      id: "bio-31",
      question: "Which enzyme class is correctly paired with the type of biochemical reaction it catalyzes?",
      options: [
        "Oxidoreductases - transfer functional groups between donor and acceptor",
        "Transferases - oxidation and reduction electron transfers",
        "Ligases - join two molecular substrates together with the hydrolysis of ATP",
        "Lyases - catalyze bond cleavage exclusively by adding water"
      ],
      correctAnswerIndex: 2,
      explanation: "Ligases (synthetases) catalyze the joining of two molecules coupled with the cleavage of a pyrophosphate bond in ATP."
    },
    {
      id: "bio-32",
      question: "An enzyme operates across a temperature range of $20-45^\\circ\\text{C}$ and $\\text{pH } 4-9$. What optimization yields peak catalytic activity?",
      options: [
        "Operating below $20^\\circ\\text{C}$ to minimize thermal movement.",
        "Operating at $\\text{pH } 11$ to increase electrostatic attraction.",
        "Maintaining an intermediate physiological optimum ($37^\\circ\\text{C}$) balancing thermal collision frequency with structural stability.",
        "Setting $\\text{pH}$ below 3 to denature inhibitory proteins."
      ],
      correctAnswerIndex: 2,
      explanation: "Enzyme kinetics peak at the optimum temperature ($37-40^\\circ\\text{C}$) where kinetic energy is high without causing thermal denaturation of tertiary bonds."
    },
    {
      id: "bio-33",
      question: "All of the following characteristics describe a eukaryotic chromosome EXCEPT:",
      options: [
        "Contains hundreds to thousands of linear genes.",
        "Exists in homologous pairs in somatic diploid cells.",
        "Is composed of chromatin containing double-stranded DNA and histone proteins.",
        "Is the single smallest indivisible functional unit of inheritance (which defines a gene, not chromosome)."
      ],
      correctAnswerIndex: 3,
      explanation: "The individual gene (cistron) is the fundamental unit of inheritance, whereas a chromosome is a large macroscopic DNA-protein structure containing thousands of genes."
    },
    {
      id: "bio-34",
      question: "Which of the following is a key structural and chemical difference between DNA and RNA?",
      options: [
        "DNA contains deoxyribose sugar and thymine, whereas RNA contains ribose sugar and uracil.",
        "RNA produces DNA through nuclear translation.",
        "RNA is double-stranded while DNA is exclusively a short single strand.",
        "DNA is unstable and quickly degraded compared to catalytic RNA."
      ],
      correctAnswerIndex: 0,
      explanation: "DNA has 2-deoxyribose and thymine (A-T, G-C); RNA has ribose with a 2'-OH group and uracil replacing thymine (A-U, G-C)."
    },
    {
      id: "bio-35",
      question: "All of the following cellular events take place during Telophase I of meiosis EXCEPT:",
      options: [
        "Homologous crossing over and chiasmata formation (occurs in Prophase I).",
        "Spindle microtubules disassemble.",
        "Separated haploid chromosome sets arrive at opposite poles.",
        "Nuclear envelopes reform around daughter nuclei."
      ],
      correctAnswerIndex: 0,
      explanation: "Genetic crossing over and recombination occur exclusively during pachynema of Prophase I, not Telophase I."
    },
    {
      id: "bio-36",
      question: "In Mendel's monohybrid cross for axial ($AA$) vs. terminal ($aa$) flowers, $F_1$ plants ($Aa$) are self-crossed ($Aa \\times Aa$). In an $F_2$ population of $1000$ offspring, how many are expected to be heterozygous ($Aa$)?",
      options: [
        "$200$",
        "$750$",
        "$500$ (since expected ratio is $1/2$ or $50\\%$)",
        "$250$"
      ],
      correctAnswerIndex: 2,
      explanation: "Genotypic ratio is $1\\,AA : 2\\,Aa : 1\\,aa$. The proportion of heterozygotes is $\\frac{2}{4} = 50\\%$. For $1000$ plants: $0.50 \\times 1000 = 500$."
    },
    {
      id: "bio-37",
      question: "A pea plant with green pods of unknown genotype is test-crossed with a homozygous recessive yellow pod plant ($gg$). All resulting offspring have green pods. What was the parent's genotype?",
      options: [
        "Homozygous dominant ($GG$)",
        "Homozygous recessive ($gg$)",
        "Heterozygous dominant ($Gg$)",
        "Incomplete dominant"
      ],
      correctAnswerIndex: 0,
      explanation: "If the unknown parent were heterozygous ($Gg \\times gg$), $50\\%$ of offspring would show yellow pods. Since $100\\%$ are green, the parent is homozygous dominant ($GG$)."
    },
    {
      id: "bio-38",
      question: "Consider these inheritance examples: 1. Inflated & pinched pods yield inflated pods; 2. Red & white cattle yield roan calves; 3. Type A & B parents have AB child; 4. Red & white snapdragons produce pink flowers. Which demonstrate non-Mendelian inheritance?",
      options: [
        "1, 2, 3",
        "1, 3, 4",
        "1, 2, 4",
        "2, 3, and 4 (codominance and incomplete dominance)"
      ],
      correctAnswerIndex: 3,
      explanation: "Roan coat (codominance), AB blood group (codominance), and pink snapdragons (incomplete dominance) violate simple complete Mendelian dominance."
    },
    {
      id: "bio-39",
      question: "In an X-linked recessive color-blindness pedigree, a carrier female ($X^B X^b$) mates with a normal male ($X^B Y$). What is the probability of having a carrier daughter and a color-blind son, respectively?",
      options: [
        "$1/4$ and $1/4$",
        "$1/2$ and $1/2$",
        "$3/4$ and $1/4$",
        "$1/4$ and $1/2$"
      ],
      correctAnswerIndex: 1,
      explanation: "Among female offspring, $50\\%$ ($1/2$) will be carriers ($X^B X^b$). Among male offspring, $50\\%$ ($1/2$) will be color blind ($X^b Y$)."
    },
    {
      id: "bio-40",
      question: "To preserve desirable traits such as long tails in a localized sheep breed, farmers breed closely related individuals across generations. What is this selective breeding practice called?",
      options: [
        "Inbreeding",
        "Crossbreeding",
        "Genetic engineering",
        "Cloning"
      ],
      correctAnswerIndex: 0,
      explanation: "Inbreeding is the mating of closely related individuals within a population to increase homozygosity and maintain desired breed characteristics."
    },
    {
      id: "bio-41",
      question: "If progesterone levels remain persistently elevated following ovulation in the human female reproductive cycle, what is the physiological result?",
      options: [
        "FSH surges immediately initiating a new ovarian cycle.",
        "Estrogen decreases and the endometrium breaks down.",
        "The vascular uterine endometrium is maintained and prepared for embryo implantation and pregnancy.",
        "Corpus luteum degenerates rapidly."
      ],
      correctAnswerIndex: 2,
      explanation: "Progesterone secreted by the corpus luteum maintains the secretory endometrial lining and prevents menstruation in preparation for pregnancy."
    },
    {
      id: "bio-42",
      question: "Which highly effective permanent surgical contraception method prevents the transport of secondary oocytes by cutting and ligating the fallopian tubes?",
      options: [
        "Contraceptive injection",
        "Spermicide cream",
        "Intrauterine device (IUD)",
        "Tubal ligation / Sterilization"
      ],
      correctAnswerIndex: 3,
      explanation: "Tubal ligation (female surgical sterilization) permanently blocks the fallopian tubes, preventing ova from encountering sperm."
    },
    {
      id: "bio-43",
      question: "Which of the following behavioral factors significantly elevates the risk of contracting sexually transmitted infections (STIs)?",
      options: [
        "Having no prior history of infections",
        "Substance and alcohol abuse that impairs cognitive judgment and leads to unprotected intercourse",
        "Regular medical screening and barrier protection",
        "Consistent and proper use of latex condoms"
      ],
      correctAnswerIndex: 1,
      explanation: "Alcohol and drug abuse impairs decision-making and increases the likelihood of engaging in high-risk, unprotected sexual encounters."
    },
    {
      id: "bio-44",
      question: "Woman I uses an intrauterine device (copper IUD) that prevents fertilization; Woman II receives hormone injections (Depo-Provera) that suppress ovulation. These methods are:",
      options: [
        "Surgical sterilization and Post-pill",
        "Morning-after pill and Diaphragm",
        "Contraceptive implant and Oral pill",
        "Copper-coated intrauterine device (IUD) and injectable hormonal contraceptive (Depo-Provera), respectively."
      ],
      correctAnswerIndex: 3,
      explanation: "Copper IUDs act locally in the uterus to inhibit sperm motility and blastocyst implantation; progestin injections suppress pituitary gonadotropins to stop ovulation."
    },
    {
      id: "bio-45",
      question: "In Village 1, underage girls are coerced into child marriage alongside sexual harassment. In Village 2, bridal abduction occurs. What do these practices represent?",
      options: [
        "In Village 1, kidnapping is common.",
        "In Village 1, gender-based violence and early (child) marriage are prevalent harmful traditional practices.",
        "In Village 2, female genital mutilation is the only form of abuse.",
        "Both villages show no gender-based violence."
      ],
      correctAnswerIndex: 1,
      explanation: "Underage marriage and sexual harassment constitute gender-based violence (GBV) and violation of reproductive and human rights."
    },
    {
      id: "bio-46",
      question: "How does heavy alcohol consumption indirectly drive higher rates of HIV transmission in a community?",
      options: [
        "By improving personal analytical decision making",
        "By impairing judgment, reducing inhibitions, and encouraging unprotected high-risk sexual behavior",
        "By reducing viral reverse transcriptase activity",
        "By creating biological resistance to opportunistic infections"
      ],
      correctAnswerIndex: 1,
      explanation: "Intoxication reduces inhibitions and risk perception, leading to unprotected sexual activity with multiple partners."
    },
    {
      id: "bio-47",
      question: "Which option contains ONLY renewable natural energy and biological resources?",
      options: [
        "Coal, oil, natural gas and minerals",
        "Coal, wind, hydropower and biomass",
        "Sunlight, wind, hydropower, and biomass",
        "Sunlight, wind, hydropower and natural gas"
      ],
      correctAnswerIndex: 2,
      explanation: "Solar radiation, wind energy, water kinetic energy (hydropower), and combustible plant biomass naturally replenish continuously."
    },
    {
      id: "bio-48",
      question: "Which of the following activities is detrimental to wildlife conservation and degrades natural biodiversity?",
      options: [
        "Establishing national parks",
        "Creating wildlife sanctuaries",
        "Establishing nature reserves",
        "Uncontrolled livestock overgrazing (IV)"
      ],
      correctAnswerIndex: 3,
      explanation: "Overgrazing destroys vegetative cover, accelerates soil erosion, destroys natural habitat, and displaces wild herbivore populations."
    },
    {
      id: "bio-49",
      question: "Which primary industrial air pollutants cause acid deposition (acid rain) and what is their environmental consequence?",
      options: [
        "Carbon dioxide and methane - melting of polar ice caps",
        "Sulfur dioxide ($\\text{SO}_2$) and nitrogen oxides ($\\text{NO}_x$) - acidification of soils and aquatic ecosystems damaging forests and aquatic life",
        "Perfluorocarbons - cataract formation",
        "CFCs - respiratory allergies"
      ],
      correctAnswerIndex: 1,
      explanation: "$\\text{SO}_2$ and $\\text{NO}_x$ from fossil fuel combustion react with atmospheric moisture to form $\\text{H}_2\\text{SO}_4$ and $\\text{HNO}_3$, causing acidic rain."
    },
    {
      id: "bio-50",
      question: "Which pair correctly pairs the principal anthropogenic driver with a major ecological consequence of global warming?",
      options: [
        "Greenhouse gas emissions - global sea level dropping",
        "Elevated greenhouse gas emissions ($\\text{CO}_2, \\text{CH}_4$) - ecosystem disruption and severe loss of biodiversity",
        "Fossil fuel combustion - increase in global species richness",
        "Nuclear energy - drop in global temperatures"
      ],
      correctAnswerIndex: 1,
      explanation: "Anthropogenic greenhouse gas emissions drive global warming, leading to coral bleaching, habitat shifts, extreme weather, and biodiversity loss."
    },
    {
      id: "bio-51",
      question: "What is the primary beneficial objective of producing transgenic genetically modified organisms (GMOs)?",
      options: [
        "To engineer lethal biological pathogens",
        "To produce clones identical to human beings",
        "To express desirable heterologous genes that enhance crop yield, pest resistance, and nutritional value (e.g. Golden Rice)",
        "To disrupt reproduction across wild animal populations"
      ],
      correctAnswerIndex: 2,
      explanation: "Recombinant DNA technology introduces agronomic traits like insect resistance ($Bt$ toxin), drought tolerance, and biofortification into crops."
    },
    {
      id: "bio-52",
      question: "What is the primary role of molecular biology in forensic criminal investigations?",
      options: [
        "To test food flavoring additives",
        "To extract and profile genomic DNA fingerprints from blood, saliva, semen, and hair roots found at crime scenes",
        "To synthesize agrochemical herbicides",
        "To ferment fungal antibiotics"
      ],
      correctAnswerIndex: 1,
      explanation: "Forensic DNA profiling utilizes short tandem repeats (STRs) and PCR amplification from biological samples to identify criminal suspects."
    },
    {
      id: "bio-53",
      question: "How do biological laundry detergents containing bacterial enzymes save household energy?",
      options: [
        "They utilize single lipase formulations.",
        "They remain highly active at lower washing temperatures ($30-40^\\circ\\text{C}$), eliminating the need to boil wash water.",
        "They neutralize industrial acidic mineral ores.",
        "They require high temperature activation."
      ],
      correctAnswerIndex: 1,
      explanation: "Extremophile enzymes (proteases, amylases, lipases) hydrolyze protein and grease stains effectively in warm or cold water, conserving electricity."
    },
    {
      id: "bio-54",
      question: "What is the definition of biological warfare (bioweapons)?",
      options: [
        "Using marker genes in transgenic agriculture",
        "Somatic cell cloning of endangered animals",
        "Deploying natural predators for integrated pest management",
        "The intentional deployment of pathogenic microorganisms (bacteria, viruses, toxins) to kill or incapacitate humans, livestock, or crops"
      ],
      correctAnswerIndex: 3,
      explanation: "Biological warfare involves using microbial pathogens (e.g. *Bacillus anthracis*, smallpox) or biological toxins as weapons of mass destruction."
    },
    {
      id: "bio-55",
      question: "Which of the following correctly describes fundamental biological characteristics of bacteria?",
      options: [
        "Eukaryotes with a true membrane-bound nucleus",
        "Unicellular prokaryotes with a peptidoglycan cell wall and diverse autotrophic/heterotrophic modes of nutrition",
        "Organisms containing double-membraned mitochondria and plant chlorophyll",
        "Cells with Golgi apparatus and 80S ribosomes"
      ],
      correctAnswerIndex: 1,
      explanation: "Bacteria are unicellular prokaryotic microorganisms lacking a nuclear membrane, possessing peptidoglycan cell walls and diverse metabolisms."
    },
    {
      id: "bio-56",
      question: "Which group of Archaea thrive in hydrothermal deep-sea vents, volcanic geysers, and boiling sulfur springs at temperatures exceeding $80-100^\\circ\\text{C}$?",
      options: [
        "Hyperthermophiles",
        "Acidophiles",
        "Extreme Halophiles",
        "Psychrophiles"
      ],
      correctAnswerIndex: 0,
      explanation: "Hyperthermophiles (e.g. *Thermus aquaticus*, *Pyrolobus fumarii*) inhabit extreme thermal environments with specialized heat-stable proteins."
    },
    {
      id: "bio-57",
      question: "Which of the following opportunistic fungal infections of mucous membranes can be sexually transmitted between partners?",
      options: [
        "Candidiasis (*Candida albicans*)",
        "Aspergillosis",
        "Tinea pedis (athlete's foot)",
        "Dermatophytosis"
      ],
      correctAnswerIndex: 0,
      explanation: "*Candida albicans* is a dimorphic yeast causing genital candidiasis (thrush) that can be transmitted through sexual contact."
    },
    {
      id: "bio-58",
      question: "Protozoans exhibit diverse heterotrophic and autotrophic feeding methods, including: I. Absorbing dissolved organic nutrients (osmotrophy); II. Photosynthesis (e.g. *Euglena*); III. Ingesting food particles and prey (phagocytosis). Which methods do protozoans employ?",
      options: [
        "I only",
        "I and II only",
        "II and III only",
        "I, II, and III (Osmotrophy, autotrophy, and phagotrophy)"
      ],
      correctAnswerIndex: 3,
      explanation: "Different protozoan phyla utilize phagocytosis (amoeba), pinocytosis/osmotrophy, and mixotrophic photosynthesis (*Euglena*)."
    },
    {
      id: "bio-59",
      question: "Which infectious viral disease is correctly matched with its clinical manifestation and transmission route?",
      options: [
        "Chickenpox - runny nose - contaminated water",
        "Measles - hydrophobia and rage - bat bites",
        "Poliomyelitis - frequently asymptomatic or causing flaccid paralysis - fecal-oral transmission",
        "Rabies - inflamed parotid salivary glands - airborne dust"
      ],
      correctAnswerIndex: 2,
      explanation: "Poliovirus transmits via the fecal-oral route; while many infections are subclinical, it can invade motor neurons causing acute flaccid paralysis."
    },
    {
      id: "bio-60",
      question: "Robert Koch formulated his postulates by isolating anthrax bacilli (*Bacillus anthracis*) from diseased cattle, culturing them, and reinoculating healthy mice. What was his fundamental first postulate?",
      options: [
        "The suspected pathogen must be isolated and grown in pure laboratory culture.",
        "The specific pathogen must be present in every case of the disease and absent from healthy individuals.",
        "The cultured microorganism must cause identical disease when inoculated into a healthy susceptible host.",
        "Microbes spontaneously generate from dead tissue."
      ],
      correctAnswerIndex: 1,
      explanation: "Koch's First Postulate: The microorganism must be found in abundance in all organisms suffering from the disease, but not in healthy organisms."
    },
    {
      id: "bio-61",
      question: "Human African trypanosomiasis (Sleeping Sickness) is caused by *Trypanosoma brucei* and transmitted to humans through the bite of:",
      options: [
        "Tsetse flies (*Glossina* species)",
        "Female *Anopheles* mosquitoes",
        "Sandflies (*Phlebotomus*)",
        "Houseflies (*Musca domestica*)"
      ],
      correctAnswerIndex: 0,
      explanation: "The tsetse fly (*Glossina*) serves as the biological vector transmitting parasitic *Trypanosoma* flagellates in sub-Saharan Africa."
    },
    {
      id: "bio-62",
      question: "Considering the planetary role of microorganisms in nitrogen fixation, carbon recycling, and biotechnology, what is their overall ecological importance?",
      options: [
        "They provide indispensable ecological and metabolic services essential for sustaining all life on Earth.",
        "They are almost purely pathogenic with minimal benefits.",
        "They have negligible environmental impact.",
        "They are restricted to medical fermentation."
      ],
      correctAnswerIndex: 0,
      explanation: "Microbes drive biogeochemical cycles (carbon, nitrogen, sulfur), oxygen production, decomposition, microbiome health, and industrial biotechnology."
    },
    {
      id: "bio-63",
      question: "What is the safest and most effective method for disposing of contaminated sharps and needles used on HIV/AIDS patients in hospitals?",
      options: [
        "High-temperature medical incineration in dedicated sharps destruction units",
        "Fractional tyndallization",
        "Chemical surface sanitization",
        "Alcohol preservation"
      ],
      correctAnswerIndex: 0,
      explanation: "Hospital biomedical waste guidelines require contaminated syringes and sharps to be incinerated at $>1000^\\circ\\text{C}$ to prevent pathogen spread."
    },
    {
      id: "bio-64",
      question: "When clinical microbiologists isolate bacteria from food samples using serial dilution and agar plating, how are separate species initially differentiated?",
      options: [
        "By counting total plate strains blindly",
        "By testing chemical boiling points",
        "By observing colony morphological features (color, margin, elevation, opacity) and microscopic Gram staining",
        "By inoculating healthy animals"
      ],
      correctAnswerIndex: 2,
      explanation: "Colony morphology (shape, edge, color, texture) and cellular staining provide primary identification criteria for bacterial colonies."
    },
    {
      id: "bio-65",
      question: "What is the biochemical distinction between anabolism and catabolism in cellular metabolism?",
      options: [
        "Anabolism synthesizes complex molecules consuming energy (endergonic), while catabolism degrades molecules releasing energy (exergonic).",
        "Anabolism is destructive while catabolism is constructive.",
        "Anabolism occurs in mitochondria while catabolism is restricted to chloroplasts.",
        "Anabolism produces $\\text{CO}_2$ while catabolism stores glycogen."
      ],
      correctAnswerIndex: 0,
      explanation: "Anabolism is biosynthetic metabolism requiring ATP (e.g. protein synthesis); catabolism breaks down substrates to yield ATP (e.g. cellular respiration)."
    },
    {
      id: "bio-66",
      question: "In a scenario where global photosynthesis ceased completely, what would be the catastrophic long-term consequence for the biosphere?",
      options: [
        "Life would remain unaffected as geothermal vents compensate.",
        "Atmospheric oxygen would deplete, primary food chains would collapse, and mass planetary extinction would occur.",
        "Atmospheric gases would remain in permanent equilibrium.",
        "Herbivores would adapt to consume soil minerals directly."
      ],
      correctAnswerIndex: 1,
      explanation: "Autotrophic photosynthesis is the primary energetic base for trophic webs and the source of atmospheric molecular oxygen."
    },
    {
      id: "bio-67",
      question: "In plant chloroplasts, what are the respective physiological roles of the thylakoid grana and the stroma?",
      options: [
        "Grana perform light-dependent reactions (water photolysis & ATP/NADPH synthesis); stroma performs light-independent Calvin cycle (carbon fixation).",
        "Grana synthesize glucose while stroma absorbs light photons.",
        "Grana perform the Krebs cycle while stroma performs glycolysis.",
        "Grana export ribulose bisphosphate while stroma oxidizes oxygen."
      ],
      correctAnswerIndex: 0,
      explanation: "Thylakoid membranes in grana house photosystems and ATP synthase for light reactions; the stroma contains RuBisCO for carbon fixation."
    },
    {
      id: "bio-68",
      question: "Which of the following statements correctly compares non-cyclic and cyclic photophosphorylation in light reactions?",
      options: [
        "Non-cyclic generates ATP, NADPH, and releases $\\text{O}_2$ (involving PS II and PS I), while cyclic utilizes only Photosystem I to generate ATP alone.",
        "Non-cyclic produces only ATP, while cyclic produces NADPH.",
        "Non-cyclic uses oxygen as an electron donor.",
        "Cyclic photophosphorylation photolyzes water to evolve oxygen."
      ],
      correctAnswerIndex: 0,
      explanation: "Non-cyclic photophosphorylation uses both PS II and PS I, photolyzing $\\text{H}_2\\text{O}$ and generating ATP + NADPH; cyclic electron flow uses only PS I to generate ATP."
    },
    {
      id: "bio-69",
      question: "All of the following biochemical events occur during the reduction phase of the Calvin cycle EXCEPT:",
      options: [
        "Initial carboxylation combining $\\text{CO}_2$ with $\\text{RuBP}$ catalyzed by RuBisCO (occurs in carbon fixation phase).",
        "Phosphorylation of 3-phosphoglycerate using ATP.",
        "Reduction of 1,3-bisphosphoglycerate using NADPH electrons.",
        "Formation of glyceraldehyde-3-phosphate (G3P / triose phosphate)."
      ],
      correctAnswerIndex: 0,
      explanation: "The addition of $\\text{CO}_2$ to RuBP is the initial carbon fixation step; reduction specifically refers to conversion of 3-PGA to G3P using ATP and NADPH."
    },
    {
      id: "bio-70",
      question: "During photorespiration in C3 plants, what metabolic conversion takes place inside the mitochondrion?",
      options: [
        "Two molecules of glycine are converted into one molecule of serine with the release of $\\text{CO}_2$ and $\\text{NH}_3$.",
        "Glycolate is oxidized to glyoxylate in the stroma.",
        "Glycerate is phosphorylated directly to G3P.",
        "Phosphoglycolate produces starch granules."
      ],
      correctAnswerIndex: 0,
      explanation: "In photorespiration, mitochondria take two glycine molecules synthesized in peroxisomes and convert them into one serine, releasing $\\text{CO}_2$ and ammonia."
    },
    {
      id: "bio-71",
      question: "How does terrestrial and marine photosynthesis maintain the global atmospheric equilibrium of life?",
      options: [
        "By continuously exhausting carbon dioxide supplies.",
        "By absorbing atmospheric $\\text{CO}_2$ and releasing molecular oxygen ($\\text{O}_2$), balancing aerobic respiration.",
        "By converting ozone into methane.",
        "By sequestering nitrogen gas into organic nitrates directly."
      ],
      correctAnswerIndex: 1,
      explanation: "Photosynthesis fixes atmospheric carbon dioxide into organic carbohydrates and replenishes oxygen needed for cellular respiration."
    },
    {
      id: "bio-72",
      question: "What is the difference between substrate-level phosphorylation and oxidative phosphorylation?",
      options: [
        "Substrate-level phosphorylation occurs in the mitochondrial matrix during glycolysis and Krebs cycle; oxidative phosphorylation occurs across the inner mitochondrial membrane via the electron transport chain and ATP synthase.",
        "Substrate-level produces $90\\%$ of total cellular ATP.",
        "Oxidative phosphorylation does not require a proton gradient.",
        "Substrate-level phosphorylation requires molecular oxygen."
      ],
      correctAnswerIndex: 0,
      explanation: "Substrate-level phosphorylation directly transfers a phosphate from a substrate to ADP (glycolysis, TCA cycle); oxidative phosphorylation uses chemiosmosis driven by the ETC."
    },
    {
      id: "bio-73",
      question: "What is the net energetic and chemical yield of the energy-payoff (liberation) phase of glycolysis starting from two molecules of glyceraldehyde-3-phosphate?",
      options: [
        "Consumption of two ATP molecules.",
        "Cleavage of fructose-1,6-bisphosphate into DHAP.",
        "Release of four molecules of carbon dioxide.",
        "Production of 4 ATP (net 2 ATP), 2 NADH, and 2 molecules of pyruvate."
      ],
      correctAnswerIndex: 3,
      explanation: "The payoff phase generates 4 ATP and 2 NADH as two G3P molecules are oxidized into two pyruvates, yielding a net of 2 ATP per glucose."
    },
    {
      id: "bio-74",
      question: "Which of the following correctly describes an event in the mitochondrial electron transport chain (ETC)?",
      options: [
        "Molecular oxygen ($\\text{O}_2$) acts as the terminal electron acceptor, combining with protons to form water ($\\text{H}_2\\text{O}$).",
        "Thirteen ATP molecules are consumed per electron transfer.",
        "The mitochondrial matrix is more acidic than the intermembrane space.",
        "ATP is produced without the establishment of a proton electrochemical gradient."
      ],
      correctAnswerIndex: 0,
      explanation: "Oxygen is the final electron acceptor in aerobic respiration: $\\frac{1}{2}\\text{O}_2 + 2e^- + 2\\text{H}^+ \\to \\text{H}_2\\text{O}$."
    },
    {
      id: "bio-75",
      question: "During complete aerobic oxidation of one glucose molecule, how many net ATP molecules are produced STRICTLY by substrate-level phosphorylation?",
      options: [
        "$2\\text{ ATP}$",
        "$4\\text{ ATP}$ (2 in glycolysis + 2 in Krebs cycle)",
        "$8\\text{ ATP}$",
        "$32\\text{ ATP}$"
      ],
      correctAnswerIndex: 1,
      explanation: "Substrate-level phosphorylation produces 2 net ATP in glycolysis and 2 ATP (via GTP) in the citric acid cycle, totaling 4 ATP."
    },
    {
      id: "bio-76",
      question: "What is the fundamental energetic difference between aerobic respiration and anaerobic fermentation?",
      options: [
        "Aerobic and anaerobic respiration produce identical ATP yields.",
        "Proteins are the sole respiratory substrate in fermentation.",
        "Aerobic respiration produces far more ATP ($30-32\\text{ ATP}$ vs $2\\text{ ATP}$) per glucose through complete oxidation to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$.",
        "Glycolysis occurs only in aerobic conditions."
      ],
      correctAnswerIndex: 2,
      explanation: "Aerobic respiration fully oxidizes glucose in the mitochondria producing $\\approx 32\\text{ ATP}$, whereas anaerobic glycolysis yields only 2 ATP."
    },
    {
      id: "bio-77",
      question: "Which scientific finding disproved the theory of Spontaneous Generation (Abiogenesis) through rigorous swan-neck flask experiments?",
      options: [
        "Life arrived on meteorites (Panspermia).",
        "Special creation occurred in six days.",
        "Louis Pasteur's experiments proving biogenesis: all living micro- and macro-organisms arise only from pre-existing living cells (*Omne vivum ex vivo*).",
        "Spontaneous generation occurs in organic broth."
      ],
      correctAnswerIndex: 2,
      explanation: "Louis Pasteur's swan-neck flask experiments conclusively demonstrated that microorganisms do not spontaneously generate in sterile broth."
    },
    {
      id: "bio-78",
      question: "In comparative vertebrate anatomy and homology, why are chimpanzees and humans classified as close evolutionary relatives?",
      options: [
        "Identical hemoglobin amino acid sequence.",
        "Fossilized shell remnants.",
        "High percentage DNA sequence similarity and shared homologous pentadactyl limb anatomy.",
        "Identical feeding behaviors."
      ],
      correctAnswerIndex: 2,
      explanation: "Homologous anatomical structures (pentadactyl limb) and over $98\\%$ genetic DNA alignment provide definitive evidence of common ancestry."
    },
    {
      id: "bio-79",
      question: "Which evolutionary mechanism allows sterile interspecific plant hybrids to instantaneously become fertile new species through chromosome doubling?",
      options: [
        "Behavioral reproductive isolation",
        "Allopatric geographic speciation",
        "Polyploidy (Allopolyploidy)",
        "Genetic drift"
      ],
      correctAnswerIndex: 2,
      explanation: "Allopolyploidy duplicates non-homologous hybrid chromosomes, giving every chromosome a homologous partner during meiosis and restoring fertility."
    },
    {
      id: "bio-80",
      question: "Arrange the evolutionary timeline markers of hominid evolution in correct chronological order: 1. Habitual tool use & fire; 2. Encephalization (brain size expansion); 3. Emergence of *Homo sapiens*; 4. Bipedal locomotion.",
      options: [
        "$2 \\to 1 \\to 3 \\to 4$",
        "$1 \\to 3 \\to 4 \\to 2$",
        "$3 \\to 2 \\to 4 \\to 1$",
        "$4 \\to 2 \\to 1 \\to 3$ (Bipedalism $\\to$ Brain expansion $\\to$ Tools/Fire $\\to$ Modern *Homo sapiens*)"
      ],
      correctAnswerIndex: 3,
      explanation: "Bipedalism evolved first (*Australopithecus*), followed by encephalization (*Homo habilis/erectus*), advanced fire/tool mastery, and finally *Homo sapiens*."
    },
    {
      id: "bio-81",
      question: "In a gene sequence where an original codon `ATT` (isoleucine) is replaced by `ATG` (methionine), what type of gene mutation occurred?",
      options: [
        "Base substitution (point mutation)",
        "Nucleotide deletion",
        "Chromosomal inversion",
        "Nucleotide addition / insertion"
      ],
      correctAnswerIndex: 0,
      explanation: "Replacing a single nucleotide base (`T` replaced by `G`) without altering the reading frame length is a point base substitution."
    },
    {
      id: "bio-82",
      question: "Which of the following is NOT a known biological or environmental cause of genetic mutations?",
      options: [
        "Exposure to ionizing ultraviolet (UV) or X-ray radiation",
        "Spontaneous replication errors by DNA polymerase",
        "Standard healthy physical exercise and aerobic conditioning",
        "Exposure to mutagenic chemical carcinogens"
      ],
      correctAnswerIndex: 2,
      explanation: "Physical exercise enhances cardiovascular conditioning but does not alter genomic nucleotide sequences or cause mutations."
    },
    {
      id: "bio-83",
      question: "Which population genetic consequence is common to BOTH population bottleneck events and the founder effect?",
      options: [
        "Rapid increase in adaptive mutation rates",
        "Random genetic drift leading to marked reduction in genetic diversity and loss of alleles",
        "High gene flow between neighboring populations",
        "Gradual directional natural selection"
      ],
      correctAnswerIndex: 1,
      explanation: "Both bottlenecks and founder effects drastically reduce effective population size ($N_e$), amplifying random genetic drift and reducing genetic variation."
    },
    {
      id: "bio-84",
      question: "When a cohort of male black lions migrates to an isolated island and mates with resident white female lions, what evolutionary mechanism occurs?",
      options: [
        "Extinction of the mainland population",
        "Allopatric reproductive isolation",
        "Gene flow introducing new alleles into the island gene pool",
        "Speciation due to genetic stasis"
      ],
      correctAnswerIndex: 2,
      explanation: "Gene flow (migration) transfers alleles from one population into another, altering allele frequencies and increasing genetic diversity."
    },
    {
      id: "bio-85",
      question: "Which of the following is an anthropogenic (human-induced) driving factor accelerating modern species extinctions?",
      options: [
        "Tectonic earthquakes",
        "Volcanic eruptions",
        "Agricultural expansion, deforestation, and habitat fragmentation",
        "Natural lightning forest fires"
      ],
      correctAnswerIndex: 2,
      explanation: "Agricultural expansion and deforestation destroy natural ecosystems and represent the leading anthropogenic causes of biodiversity loss."
    },
    {
      id: "bio-86",
      question: "Which statement correctly describes the primary physiological role of the human nervous system?",
      options: [
        "Conducts external ventilation and respiratory gas exchange.",
        "Pumps and circulates erythrocytes throughout the vascular system.",
        "Secretes hormones directly into target organs via exocrine ducts.",
        "Detects, coordinates, and rapidly processes internal and external sensory stimuli via electrical impulses and neurotransmitters."
      ],
      correctAnswerIndex: 3,
      explanation: "The nervous system coordinates body activities by receiving sensory inputs, processing integration signals, and sending rapid motor outputs."
    },
    {
      id: "bio-87",
      question: "What is the crucial role of voltage-gated sodium channels ($\\text{Na}^+$) during the transmission of a neuronal action potential?",
      options: [
        "They open rapidly in response to membrane depolarization past threshold, allowing massive inward $\\text{Na}^+$ influx.",
        "They block all ion movements to maintain resting potential.",
        "They pump potassium into the axon during repolarization.",
        "They synthesize ATP along the myelin sheath."
      ],
      correctAnswerIndex: 0,
      explanation: "Reaching the threshold potential ($-55\\text{ mV}$) triggers opening of voltage-gated $\\text{Na}^+$ channels, causing rapid depolarization to $+30\\text{ mV}$."
    },
    {
      id: "bio-88",
      question: "Which divalent cation enters the presynaptic axon terminal to trigger exocytosis and release of neurotransmitter vesicles into the synaptic cleft?",
      options: [
        "Calcium ions ($\\text{Ca}^{2+}$)",
        "Magnesium ions ($\\text{Mg}^{2+}$)",
        "Potassium ions ($\\text{K}^+$)",
        "Sodium ions ($\\text{Na}^+$)"
      ],
      correctAnswerIndex: 0,
      explanation: "Action potential arrival opens voltage-gated $\\text{Ca}^{2+}$ channels; $\\text{Ca}^{2+}$ influx stimulates synaptic vesicles to fuse with the presynaptic membrane."
    },
    {
      id: "bio-89",
      question: "What is the correct anatomical neural pathway of a spinal withdrawal reflex arc when touching a hot stove?",
      options: [
        "Interneuron $\\to$ Receptor $\\to$ Motor neuron $\\to$ Effector",
        "Sensory neuron $\\to$ Motor neuron $\\to$ Spinal cord $\\to$ Effector",
        "Sensory receptor/neuron $\\to$ Spinal cord (relay interneuron) $\\to$ Motor neuron $\\to$ Effector muscle",
        "Brain $\\to$ Sensory neuron $\\to$ Motor neuron $\\to$ Receptor"
      ],
      correctAnswerIndex: 2,
      explanation: "Reflex pathway: Receptor detects heat $\\to$ Sensory afferent neuron $\\to$ Spinal interneuron $\\to$ Motor efferent neuron $\\to$ Bicep effector muscle contracts."
    },
    {
      id: "bio-90",
      question: "In the human eye anatomy, which muscular structure controls the diameter of the pupil and regulates the amount of light reaching the retina?",
      options: [
        "Cornea (I)",
        "Lens (II)",
        "Retina (III)",
        "Iris (IV)"
      ],
      correctAnswerIndex: 3,
      explanation: "The iris contains radial and circular pupillary muscles that dilate or constrict the pupil in response to ambient light intensity."
    },
    {
      id: "bio-91",
      question: "Which of the following correctly pairs a human ear anatomical structure with its physiological function?",
      options: [
        "Eustachian tube - equalizes air pressure between the middle ear cavity and the nasopharynx",
        "Semicircular canals - amplify audible sound vibrations",
        "Ear ossicles - detect dynamic angular acceleration",
        "Cochlea - drains excess endolymph into the throat"
      ],
      correctAnswerIndex: 0,
      explanation: "The Eustachian (auditory) tube connects the middle ear cavity to the pharynx, balancing air pressure on both sides of the tympanic membrane."
    },
    {
      id: "bio-92",
      question: "Arrange the sequence of auditory events during human hearing: I. Sound amplification by ear ossicles; II. Basilar membrane stereocilia vibration in the cochlea; III. Auditory nerve action potentials processed in the brain; IV. Pinna collects sound waves hitting the tympanum.",
      options: [
        "$\\text{IV} \\to \\text{III} \\to \\text{II} \\to \\text{I}$",
        "$\\text{I} \\to \\text{II} \\to \\text{III} \\to \\text{IV}$",
        "$\\text{I} \\to \\text{IV} \\to \\text{II} \\to \\text{III}$",
        "$\\text{IV} \\to \\text{I} \\to \\text{II} \\to \\text{III}$"
      ],
      correctAnswerIndex: 3,
      explanation: "Sound waves are gathered by the pinna (IV) $\\to$ amplified by malleus/incus/stapes (I) $\\to$ stimulate hair cells in the cochlea (II) $\\to$ cranial nerve VIII sends impulses to temporal cortex (III)."
    },
    {
      id: "bio-93",
      question: "In a pediatric population presenting with low basal metabolic rate, stunted physical growth, cretinism, and mental retardation, which endocrine disorder is responsible?",
      options: [
        "Severe infantile hypothyroidism (deficiency of thyroxine / $\\text{T}_3, \\text{T}_4$)",
        "Adrenal cortex hypersecretion",
        "Parathyroid adenoma",
        "Epinephrine deficiency"
      ],
      correctAnswerIndex: 0,
      explanation: "Congenital hypothyroidism (or severe iodine deficiency) impairs skeletal growth and neurological brain development, causing cretinism."
    },
    {
      id: "bio-94",
      question: "Which posterior pituitary neurohormone stimulates rhythmic uterine contractions during parturition (childbirth) and induces milk ejection (let-down) during lactation?",
      options: [
        "Vasopressin (ADH)",
        "Aldosterone",
        "Oxytocin",
        "Progesterone"
      ],
      correctAnswerIndex: 2,
      explanation: "Oxytocin stimulates myometrial smooth muscle contraction during labor and myoepithelial contraction around mammary alveoli for milk release."
    },
    {
      id: "bio-95",
      question: "How does ultrafiltration occur across the renal corpuscle in human nephrons?",
      options: [
        "By active transport of ions into the collecting duct",
        "High hydrostatic blood pressure in the glomerular capillary knot forces fluid across the fenestrated endothelium and podocytes into Bowman's capsule",
        "By simple diffusion of polysaccharides into loop of Henle",
        "By ADH secretion into the proximal tubule"
      ],
      correctAnswerIndex: 1,
      explanation: "Differences in vessel diameter between afferent and efferent arterioles generate high glomerular hydrostatic pressure ($55\\text{ mmHg}$), filtering water and solutes into Bowman's space."
    },
    {
      id: "bio-96",
      question: "How does insulin decrease elevated blood glucose levels following exercise or meals in diabetic management?",
      options: [
        "Stimulates gluconeogenesis in the kidney",
        "Stimulates glycogenesis (converting glucose into stored glycogen in liver and muscle cells) and increases GLUT4 glucose uptake",
        "Stimulates lipolysis converting fatty acids into glucose",
        "Inhibits cellular glucose utilization"
      ],
      correctAnswerIndex: 1,
      explanation: "Insulin promotes glucose uptake in myocytes and hepatocytes, stimulating glycogenesis and inhibiting glycogenolysis/gluconeogenesis."
    },
    {
      id: "bio-97",
      question: "When blood osmolarity rises due to high dietary salt intake, how does the body restore fluid balance?",
      options: [
        "Adrenal medulla secretes adrenaline to convert glycogen to glucose.",
        "Hypothalamus decreases sodium reabsorption.",
        "Hypothalamic osmoreceptors stimulate the posterior pituitary to release Antidiuretic Hormone (ADH), increasing water reabsorption in renal collecting ducts.",
        "Cortisone blocks water absorption in the intestine."
      ],
      correctAnswerIndex: 2,
      explanation: "Elevated plasma osmolarity triggers ADH (vasopressin) release, inserting aquaporin channels into collecting ducts to conserve water."
    },
    {
      id: "bio-98",
      question: "Which major anthropogenic greenhouse gas and primary emission sources are most responsible for modern atmospheric heat retention?",
      options: [
        "Methane from aluminum smelting",
        "Carbon dioxide ($\\text{CO}_2$) from fossil fuel combustion (coal, oil, gas) and deforestation",
        "Sulfur hexafluoride from paddy fields",
        "Perfluorocarbons from farming"
      ],
      correctAnswerIndex: 1,
      explanation: "$\\text{CO}_2$ accounts for over $75\\%$ of global anthropogenic greenhouse gas emissions, primarily driven by industrial energy, transportation, and land clearance."
    },
    {
      id: "bio-99",
      question: "How does severe climate change and prolonged drought diminish regional agricultural productivity?",
      options: [
        "By increasing fertile monoculture harvests",
        "By expanding natural agroforestry canopies",
        "By increasing global freshwater soil aquifers",
        "By causing severe water scarcity, soil desertification, and catastrophic wildfires that destroy arable land"
      ],
      correctAnswerIndex: 3,
      explanation: "Prolonged droughts reduce irrigation reservoirs, degrade soil organic matter, and cause crop failure."
    },
    {
      id: "bio-100",
      question: "Which community-led environmental practice in Ethiopia represents a vital national initiative for climate change mitigation and afforestation?",
      options: [
        "Expansion of urban concrete developments",
        "Traditional elder disputes councils",
        "Planting billions of indigenous seedlings through the Green Legacy Initiative",
        "Herbal harvesting without replanting"
      ],
      correctAnswerIndex: 2,
      explanation: "Ethiopia's Green Legacy Initiative has mobilized national planting of billions of tree seedlings to restore forest cover, combat erosion, and sequester carbon."
    }
  ] as Question[]
};
