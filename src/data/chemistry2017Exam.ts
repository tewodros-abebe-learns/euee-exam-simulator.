import { type Question } from '../services/geminiService';

export const chemistry2017Exam = {
  id: "euee-2017-chemistry",
  title: "2017 E.C. ESSLCE Chemistry Examination",
  subject: "Chemistry",
  grade: "Grade 12",
  timeLimit: 9000, // 150 minutes (2:30 hours)
  questions: [
    {
      id: "chem-1",
      question: "Which one of the following CORRECTLY shows the relative charges of an electron, proton and neutron, respectively?",
      options: [
        "0, +1, -1",
        "0, -1, +1",
        "-1, +1, 0",
        "-1, 0, +1"
      ],
      correctAnswerIndex: 2,
      explanation: "Electrons have a relative electrical charge of -1, protons have +1, and neutrons are neutral with a charge of 0."
    },
    {
      id: "chem-2",
      question: "Which statement below CORRECTLY describes the Bohr's model of an atom?",
      options: [
        "Protons and electrons are found in the nucleus.",
        "Electrons and neutrons are found in the nucleus.",
        "Protons move in circular orbits around the nucleus.",
        "Electrons move in circular orbits around the nucleus."
      ],
      correctAnswerIndex: 3,
      explanation: "Bohr's atomic model proposes that electrons travel in defined circular orbits around the central atomic nucleus at discrete energy levels."
    },
    {
      id: "chem-3",
      question: "Which statement below CORRECTLY describes periodicity? Periodicity is:",
      options: [
        "a regular repetition of chemical and physical properties in the Periodic Table.",
        "a row in the Periodic Table which contains elements with same number of shells.",
        "a measure of electronegativity which runs from least electronegative to most electronegative elements.",
        "a column of the Periodic Table which contains elements with similar chemical properties."
      ],
      correctAnswerIndex: 0,
      explanation: "Periodicity refers to recurring trends and periodic patterns in chemical and physical properties across periods and groups of elements."
    },
    {
      id: "chem-4",
      question: "Which statement below CORRECTLY expresses hydrogen bonding? It is formed by bonding:",
      options: [
        "a hydrogen atom to an element such as sodium.",
        "a hydrogen atom to a highly electronegative element such as oxygen, nitrogen, or fluorine.",
        "two hydrogen atoms with equal sharing of electrons.",
        "two hydrogen atoms with unequal sharing of electrons."
      ],
      correctAnswerIndex: 1,
      explanation: "Hydrogen bonds are strong dipole-dipole attractions occurring when hydrogen is covalently bonded to small, highly electronegative atoms (N, O, or F)."
    },
    {
      id: "chem-5",
      question: "What is the bond formed between two or more atoms by sharing of electrons?",
      options: [
        "Ionic bond",
        "Metallic bond",
        "Covalent bond",
        "Valence bond"
      ],
      correctAnswerIndex: 2,
      explanation: "A covalent bond involves the mutual sharing of electron pairs between non-metal atoms."
    },
    {
      id: "chem-6",
      question: "Which statement below CORRECTLY describes dipole-dipole forces? It is the force that exists:",
      options: [
        "in all molecules.",
        "between polar molecules.",
        "between non-polar molecules.",
        "between polar and non-polar molecules."
      ],
      correctAnswerIndex: 1,
      explanation: "Dipole-dipole attractions occur specifically between polar molecules containing permanent electric dipole moments."
    },
    {
      id: "chem-7",
      question: "Comparing the forces between molecules of similar molar masses, which one of the following produces the weakest force?",
      options: [
        "Covalent bonds",
        "Hydrogen bonding",
        "Ionic forces",
        "Van der Waals (London dispersion) forces"
      ],
      correctAnswerIndex: 3,
      explanation: "Van der Waals forces (London dispersion) arise from temporary instantaneous dipoles and are the weakest intermolecular forces for similar molar masses."
    },
    {
      id: "chem-8",
      question: "What is a limiting reactant? It is the reactant that:",
      options: [
        "is regenerated at the end of the reaction.",
        "remains unreacted as the reaction proceeds.",
        "is present in excess when the reaction goes to completion.",
        "is completely consumed when the reaction goes to completion."
      ],
      correctAnswerIndex: 3,
      explanation: "The limiting reactant is consumed first in a chemical reaction, directly limiting the maximum theoretical yield of products."
    },
    {
      id: "chem-9",
      question: "Which statement below CORRECTLY distinguishes redox and non-redox reactions?",
      options: [
        "Electrons are transferred in redox reactions but not in non-redox reactions.",
        "Reduction occurs in redox reactions and oxidation takes place in non-redox reactions.",
        "Oxidation number remains the same in both redox and non-redox reactions.",
        "Acid-base reactions can be considered as both redox and non-redox reactions."
      ],
      correctAnswerIndex: 0,
      explanation: "Redox reactions strictly involve the transfer of electrons causing changes in oxidation numbers, whereas non-redox reactions do not transfer electrons."
    },
    {
      id: "chem-10",
      question: "Given the reaction $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g)$. What is the equilibrium constant expression ($K_c$) for the reaction?",
      options: [
        "$\\frac{[\\text{CO}]^2}{[\\text{C}][\\text{CO}_2]}$",
        "$\\frac{[\\text{CO}]^2}{[\\text{CO}_2]}$",
        "$\\frac{[\\text{CO}]^2}{[\\text{C}]}$",
        "$\\frac{[\\text{C}][\\text{CO}_2]}{[\\text{CO}]^2}$"
      ],
      correctAnswerIndex: 1,
      explanation: "Pure solids and pure liquids have constant activities and are omitted from equilibrium constant expressions. Thus $K_c = \\frac{[\\text{CO}]^2}{[\\text{CO}_2]}$."
    },
    {
      id: "chem-11",
      question: "Which of the following pair of substances can be considered as examples of the liquid state of matter at room temperature and 1 atm pressure?",
      options: [
        "Carbon and mercury",
        "Water and carbon dioxide",
        "Water and mercury",
        "Carbon and carbon monoxide"
      ],
      correctAnswerIndex: 2,
      explanation: "Water ($\\text{H}_2\\text{O}$) and Mercury ($\\text{Hg}$) are both standard liquids at $25^\\circ\\text{C}$ and 1 atm."
    },
    {
      id: "chem-12",
      question: "Which gas law describes the behavior of gases using the variables: temperature, volume, pressure and number of moles?",
      options: [
        "Ideal gas law",
        "Boyle's law",
        "Avogadro's law",
        "Combined gas law"
      ],
      correctAnswerIndex: 0,
      explanation: "The Ideal Gas Law ($PV = nRT$) interrelates pressure ($P$), volume ($V$), moles ($n$), and temperature ($T$)."
    },
    {
      id: "chem-13",
      question: "Which statement below describes CORRECTLY the assumptions in the kinetic theory of gases?",
      options: [
        "Gas molecules occupy a finite volume and have indefinite shape.",
        "Gas molecules are in continuous random motion with no intermolecular interactions.",
        "The average kinetic energies of gas molecules are independent of temperature.",
        "The average kinetic energies of gas molecules are independent of the amount of gas."
      ],
      correctAnswerIndex: 1,
      explanation: "Kinetic Molecular Theory assumes gas particles are in perpetual random motion and experience negligible intermolecular attractive or repulsive forces."
    },
    {
      id: "chem-14",
      question: "If the rate of diffusion of a certain unknown gas is half times the rate of diffusion of helium, what will be the molar mass of the unknown gas? (Atomic mass of $\\text{He} = 4.0\\text{ g/mol}$)",
      options: [
        "$2.0\\text{ g/mol}$",
        "$8.0\\text{ g/mol}$",
        "$16.0\\text{ g/mol}$",
        "$32.0\\text{ g/mol}$"
      ],
      correctAnswerIndex: 2,
      explanation: "By Graham's Law: $\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} \\implies \\frac{1}{2} = \\sqrt{\\frac{4}{M_x}} \\implies \\frac{1}{4} = \\frac{4}{M_x} \\implies M_x = 16.0\\text{ g/mol}$ (e.g., methane $\\text{CH}_4$)."
    },
    {
      id: "chem-15",
      question: "A student added boiling chips into a beaker of water while carrying out an activity to determine the boiling point of water. Why are boiling chips necessary?",
      options: [
        "To ensure smooth and even boiling by preventing bumping",
        "To speed up the rate of evaporation",
        "To maintain constant atmospheric pressure",
        "To reach the boiling point with less consumption of heat"
      ],
      correctAnswerIndex: 0,
      explanation: "Boiling chips provide microscopic nucleation sites that promote steady bubble formation, preventing explosive superheating and liquid bumping."
    },
    {
      id: "chem-16",
      question: "What is the oxidation number of manganese in $\\text{KMnO}_4$? (Atomic numbers: $\\text{K}=19, \\text{Mn}=25, \\text{O}=16$)",
      options: [
        "$+5$",
        "$+6$",
        "$+7$",
        "$+8$"
      ],
      correctAnswerIndex: 2,
      explanation: "$\\text{K} = +1$, $\\text{O} = -2 \\times 4 = -8$. Overall neutral compound: $+1 + \\text{Mn} + (-8) = 0 \\implies \\text{Mn} = +7$."
    },
    {
      id: "chem-17",
      question: "Aluminum reacts with oxygen to form aluminum oxide ($4\\text{Al} + 3\\text{O}_2 \\to 2\\text{Al}_2\\text{O}_3$). What is the stoichiometric coefficient of aluminum after balancing?",
      options: [
        "2",
        "4",
        "6",
        "8"
      ],
      correctAnswerIndex: 1,
      explanation: "Balancing the equation: $4\\text{Al} + 3\\text{O}_2 \\to 2\\text{Al}_2\\text{O}_3$. The coefficient of $\\text{Al}$ is 4."
    },
    {
      id: "chem-18",
      question: "What property of an ionic compound can be investigated by heating it in a crucible?",
      options: [
        "Melting point",
        "Solubility",
        "Malleability",
        "Crystallization point"
      ],
      correctAnswerIndex: 0,
      explanation: "Heating a solid crystal in a heat-resistant crucible allows direct thermal observation of phase transition at its high melting point."
    },
    {
      id: "chem-19",
      question: "Silver has two known isotopes: $^{107}\\text{Ag}$ ($52\\%$ abundance) and $^{108}\\text{Ag}$ ($48\\%$ abundance). What is the average atomic mass of silver?",
      options: [
        "$107.89$",
        "$108.06$",
        "$107.48$",
        "$108.86$"
      ],
      correctAnswerIndex: 2,
      explanation: "$\\text{Average mass} = (107 \\times 0.52) + (108 \\times 0.48) = 55.64 + 51.84 = 107.48\\text{ u}$."
    },
    {
      id: "chem-20",
      question: "Which reaction scheme below illustrates the formation of a cation?",
      options: [
        "$\\text{Na} \\to \\text{Na}^+ + e^-$",
        "$2\\text{Cl}^- \\to \\text{Cl}_2 + 2e^-$",
        "$\\text{S} + 2e^- \\to \\text{S}^{2-}$",
        "$\\text{Mg}^{2+} + 2e^- \\to \\text{Mg}$"
      ],
      correctAnswerIndex: 0,
      explanation: "A neutral atom losing valence electrons to form a positively charged ion ($\\text{Na} \\to \\text{Na}^+ + e^-$) represents cation formation."
    },
    {
      id: "chem-21",
      question: "Which law governs the fact that the ratio of the amount of hydrogen to oxygen by weight will be the same in a drop of water and a lake of water?",
      options: [
        "Law of relative composition",
        "Law of conservation of mass",
        "Law of multiple proportions",
        "Law of definite composition (proportions)"
      ],
      correctAnswerIndex: 3,
      explanation: "Proust's Law of Definite Proportions states that a pure chemical compound always contains its constituent elements in a fixed, constant mass ratio (1:8 for $\\text{H}:\\text{O}$ in water)."
    },
    {
      id: "chem-22",
      question: "Which statement below CORRECTLY describes the characteristics of dynamic chemical equilibrium?",
      options: [
        "A reaction stops when it reaches equilibrium.",
        "A reaction stops if sufficient amount of time is given.",
        "The rates of the forward and reverse reactions are equal.",
        "A new substance or substances are formed when equilibrium is attained."
      ],
      correctAnswerIndex: 2,
      explanation: "At dynamic equilibrium, forward and reverse reaction rates are identical ($r_f = r_r$), maintaining constant macroscopic concentrations."
    },
    {
      id: "chem-23",
      question: "What is the CORRECT IUPAC nomenclature for the alkane with a 10-carbon parent chain, chlorine substituents at C4 and C6, and methyl groups at C2 and C8?",
      options: [
        "5,7-dichloro-3,9-dimethyldecane",
        "4,6-dichloro-2,8-dimethyldecane",
        "4,6-dichloro-2-ethyl-8-methylnonane",
        "4,6-dichloro-8-ethyl-2-methylnonane"
      ],
      correctAnswerIndex: 1,
      explanation: "Numbering the longest 10-carbon chain gives lowest substituent numbering locants $2,4,6,8$. Alphabetical priority places 'dichloro' before 'dimethyl': 4,6-dichloro-2,8-dimethyldecane."
    },
    {
      id: "chem-24",
      question: "What is the name given to compounds of carbon and hydrogen containing multiple bonds (double or triple bonds)?",
      options: [
        "Aliphatic hydrocarbons",
        "Aromatic hydrocarbons",
        "Saturated hydrocarbons",
        "Unsaturated hydrocarbons"
      ],
      correctAnswerIndex: 3,
      explanation: "Hydrocarbons containing carbon-carbon double (alkenes) or triple (alkynes) bonds are unsaturated hydrocarbons."
    },
    {
      id: "chem-25",
      question: "2-methyl-1-butene is one of the isomers of $\\text{C}_5\\text{H}_{10}$. Which of the following is the CORRECT structural formula of this isomer?",
      options: [
        "$\\text{CH}_2=\\text{C}(\\text{CH}_3)-\\text{CH}_2-\\text{CH}_3$",
        "$\\text{CH}_3-\\text{CH}_2-\\text{C}\\equiv\\text{CH}$",
        "$\\text{CH}_3-\\text{C}\\equiv\\text{C}-\\text{CH}_3$",
        "$\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_2-\\text{CH}_3$"
      ],
      correctAnswerIndex: 0,
      explanation: "2-methyl-1-butene has a 4-carbon chain with a double bond at C1 and a methyl group at C2: $\\text{CH}_2=\\text{C}(\\text{CH}_3)\\text{CH}_2\\text{CH}_3$."
    },
    {
      id: "chem-26",
      question: "Which of the following organic compounds is industrial feedstock used for the production of 1,2-ethanediol (ethylene glycol)?",
      options: [
        "Ethene",
        "Ethane",
        "Ethyne",
        "Ethanol"
      ],
      correctAnswerIndex: 0,
      explanation: "Ethene (ethylene) is oxidized to ethylene oxide and hydrated to synthesize 1,2-ethanediol."
    },
    {
      id: "chem-27",
      question: "Which of the following is the main constituent of natural gas?",
      options: [
        "Ethane",
        "Butane",
        "Propane",
        "Methane"
      ],
      correctAnswerIndex: 3,
      explanation: "Natural gas consists predominantly of methane ($\\text{CH}_4$), typically comprising $70\\% - 90\\%$ of the volume."
    },
    {
      id: "chem-28",
      question: "In order to avoid damaging delicate clothing fabrics when washing, which non-flammable chlorinated solvent is widely used in commercial dry cleaning?",
      options: [
        "$\\text{CH}_4$",
        "$\\text{CH}_2\\text{Cl}_2$",
        "$\\text{C}_2\\text{H}_4$",
        "$\\text{C}_2\\text{Cl}_4$ (Tetrachloroethylene / Perc)"
      ],
      correctAnswerIndex: 3,
      explanation: "Tetrachloroethylene ($\\text{C}_2\\text{Cl}_4$), commonly known as perchloroethylene or perc, dissolves grease without shrinking fabric."
    },
    {
      id: "chem-29",
      question: "Which of the following is a characteristic chemical property of an acidic oxide (acid anhydride)?",
      options: [
        "Reacts with salts to form acids.",
        "Reacts with water to form acidic solutions.",
        "Reacts with bases to form basic hydroxide and water.",
        "Reacts with basic oxides to form hydroxides and water."
      ],
      correctAnswerIndex: 1,
      explanation: "Non-metal acidic oxides (like $\\text{CO}_2, \\text{SO}_3$) dissolve in water to produce oxyacids (e.g. $\\text{CO}_2 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{CO}_3$)."
    },
    {
      id: "chem-30",
      question: "What is the name given to an acid that dissociates (ionizes) only to a slight extent in aqueous solution?",
      options: [
        "Dilute acid",
        "Strong acid",
        "Weak acid",
        "Concentrated acid"
      ],
      correctAnswerIndex: 2,
      explanation: "A weak acid (like acetic acid $\\text{CH}_3\\text{COOH}$) only partially ionizes into ions in aqueous solution."
    },
    {
      id: "chem-31",
      question: "Solutions can be classified based upon their $\\text{pH}$ values. How is a solution with a $\\text{pH}$ value of $13$ classified?",
      options: [
        "Amphoteric solution",
        "Acidic solution",
        "Neutral solution",
        "Basic (alkaline) solution"
      ],
      correctAnswerIndex: 3,
      explanation: "At $25^\\circ\\text{C}$, $\\text{pH} > 7$ corresponds to a basic solution. A $\\text{pH}$ of 13 represents a strongly basic alkaline solution."
    },
    {
      id: "chem-32",
      question: "Calcium metal is added to clean water in a beaker. After the reaction completes, the resulting solution is tested with red litmus paper. What will be observed?",
      options: [
        "The litmus paper turns to blue.",
        "The litmus paper turns to red.",
        "The litmus paper maintains its color.",
        "The litmus paper turns colorless."
      ],
      correctAnswerIndex: 0,
      explanation: "Calcium reacts with water to form calcium hydroxide: $\\text{Ca} + 2\\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{H}_2$. The alkaline $\\text{OH}^-$ ions turn red litmus blue."
    },
    {
      id: "chem-33",
      question: "When molten lead(II) bromide ($\\text{PbBr}_2$) is electrolyzed using inert electrodes, which product is observed at the positive anode?",
      options: [
        "Bromine vapor/gas is evolved at the anode.",
        "Bromide ion is oxidized at the cathode.",
        "Lead(II) ion is reduced at the anode.",
        "Lead(II) ion is oxidized at the cathode."
      ],
      correctAnswerIndex: 0,
      explanation: "At the positive anode, oxidation occurs: $2\\text{Br}^- \\to \\text{Br}_2(g) + 2e^-$, liberating reddish-brown bromine gas."
    },
    {
      id: "chem-34",
      question: "What is the term for environmental pollution caused by dumping non-biodegradable solid wastes into soils?",
      options: [
        "Air pollution",
        "Land (soil) pollution",
        "Sound pollution",
        "Water pollution"
      ],
      correctAnswerIndex: 1,
      explanation: "Accumulation of plastics and non-biodegradable solid waste degrades terrestrial ecosystems, causing land pollution."
    },
    {
      id: "chem-35",
      question: "What is the primary chemical purpose of converting pig iron to steel in a basic oxygen furnace?",
      options: [
        "To remove excess carbon and impurities by oxidation.",
        "To remove impurities by reduction.",
        "To increase the concentration of iron in the pig iron.",
        "To decrease the concentration of iron in the pig iron."
      ],
      correctAnswerIndex: 0,
      explanation: "Blowing oxygen through molten pig iron oxidizes excess carbon, silicon, and phosphorus into gases or slag to produce steel."
    },
    {
      id: "chem-36",
      question: "Which of the following statements CORRECTLY describes the Law of Conservation of Mass?",
      options: [
        "The total mass of substances varies during a chemical reaction.",
        "Mass is neither created nor destroyed during a chemical reaction.",
        "A particular compound is composed of the same elements in the same parts by mass.",
        "Pure compounds always contain the elements in the same percentage by mass."
      ],
      correctAnswerIndex: 1,
      explanation: "Lavoisier's Law of Conservation of Mass states that in a closed chemical system, the total mass of reactants equals the total mass of products."
    },
    {
      id: "chem-37",
      question: "A mineral absorbs purple light of frequency $7.11 \\times 10^{14}\\text{ Hz}$. What is the wavelength (in nm) of the absorbed light? ($c = 3.00 \\times 10^8\\text{ m/s}$)",
      options: [
        "$184.4\\text{ nm}$",
        "$237.5\\text{ nm}$",
        "$421.9\\text{ nm}$",
        "$514.5\\text{ nm}$"
      ],
      correctAnswerIndex: 2,
      explanation: "$\\lambda = \\frac{c}{\\nu} = \\frac{3.00 \\times 10^8\\text{ m/s}}{7.11 \\times 10^{14}\\text{ s}^{-1}} = 4.219 \\times 10^{-7}\\text{ m} = 421.9\\text{ nm}$."
    },
    {
      id: "chem-38",
      question: "Why do atoms absorb energy when their electrons undergo transitions from a lower energy level to a higher energy level?",
      options: [
        "The electrons move from an orbit of smaller radius to an orbit of larger radius further from the nucleus.",
        "The electrons move from an orbit of higher radius to an orbit of lower radius.",
        "The electrons of the atoms do not have allowable energy levels.",
        "Electrons absorb energy when going from higher to lower energy."
      ],
      correctAnswerIndex: 0,
      explanation: "Moving an electron outward against the nuclear electrostatic attraction requires the absorption of photon energy equal to $\\Delta E = h\\nu$."
    },
    {
      id: "chem-39",
      question: "What are the quantum numbers for an electron occupying the $5s$ orbital?",
      options: [
        "$n=5, l=0, m_l=-1, m_s=\\pm 1/2$",
        "$n=5, l=1, m_l=-2, m_s=\\pm 1/2$",
        "$n=5, l=2, m_l=-2, m_s=\\pm 1/2$",
        "$n=5, l=0, m_l=0, m_s=\\pm 1/2$"
      ],
      correctAnswerIndex: 3,
      explanation: "For a $5s$ orbital: principal quantum number $n=5$, orbital angular momentum $l=0$, magnetic quantum number $m_l=0$, and spin $m_s=\\pm 1/2$."
    },
    {
      id: "chem-40",
      question: "According to the Pauli Exclusion Principle, which statement is CORRECT regarding the quantum numbers assigned to the two electrons in Helium ($1s^2$)?",
      options: [
        "Both electrons have the same four quantum numbers.",
        "The second electron occupies the same orbital with the same spin quantum number.",
        "The second electron occupies the same orbital as the first with opposite spin quantum number ($+1/2, -1/2$).",
        "The magnetic quantum numbers of both electrons are different."
      ],
      correctAnswerIndex: 2,
      explanation: "No two electrons in an atom can have identical quantum numbers; within the same $1s$ orbital ($n=1, l=0, m_l=0$), spins must be antiparallel ($m_s = +1/2, -1/2$)."
    },
    {
      id: "chem-41",
      question: "Scandium ($\\text{Sc}$) has the electron configuration $[\\text{Ar}]\\,4s^2\\,3d^1$. To which group of elements does it belong?",
      options: [
        "Representative elements",
        "Transition elements (d-block)",
        "Inner transition elements",
        "Nonmetals"
      ],
      correctAnswerIndex: 1,
      explanation: "Scandium is a $d$-block transition metal with partially filled $d$-orbitals in group 3 (IIIB)."
    },
    {
      id: "chem-42",
      question: "A student compares the melting points of ionic $\\text{NaCl}$ and partially covalent $\\text{CuCl}_2$. Which statement is CORRECT?",
      options: [
        "The melting point of $\\text{NaCl}$ is lower than that of $\\text{CuCl}_2$.",
        "The melting point of $\\text{NaCl}$ is higher than that of $\\text{CuCl}_2$.",
        "Both $\\text{NaCl}$ and $\\text{CuCl}_2$ melt simultaneously.",
        "Neither $\\text{NaCl}$ nor $\\text{CuCl}_2$ will melt."
      ],
      correctAnswerIndex: 1,
      explanation: "$\\text{NaCl}$ has a higher lattice energy ($801^\\circ\\text{C}$) due to pure ionic character and small ionic radius compared to $\\text{CuCl}_2$ ($498^\\circ\\text{C}$)."
    },
    {
      id: "chem-43",
      question: "The molecule $\\text{COCl}_2$ (phosgene) has a trigonal planar electron geometry around carbon. Due to the high electronegativity of double-bonded oxygen, the $\\text{Cl}-\\text{C}-\\text{Cl}$ bond angle is:",
      options: [
        "Exactly $120^\\circ$",
        "Slightly greater than $120^\\circ$",
        "Slightly less than $120^\\circ$",
        "Exactly $109.5^\\circ$"
      ],
      correctAnswerIndex: 2,
      explanation: "The electron-rich $\\text{C}=\\text{O}$ double bond repels the single $\\text{C}-\\text{Cl}$ bonding pairs more strongly, compressing the $\\text{Cl}-\\text{C}-\\text{Cl}$ angle below $120^\\circ$ (approx $111.8^\\circ$)."
    },
    {
      id: "chem-44",
      question: "What is the cause of the unusually high boiling points of $\\text{HF}$, $\\text{H}_2\\text{O}$, and $\\text{NH}_3$ compared to other hydrides in their periodic groups?",
      options: [
        "Dipole-Dipole forces",
        "Induced dipole forces",
        "Intermolecular hydrogen bonding",
        "Ion-dipole forces"
      ],
      correctAnswerIndex: 2,
      explanation: "Strong intermolecular hydrogen bonding between hydrogen and highly electronegative elements (F, O, N) significantly elevates their boiling points."
    },
    {
      id: "chem-45",
      question: "In the linear gaseous molecule $\\text{BeCl}_2$ with a bond angle of $180^\\circ$, what orbital hybridization does the central Beryllium atom undergo?",
      options: [
        "$sp^3$",
        "$sp^2$",
        "$sp$",
        "$dsp^3$"
      ],
      correctAnswerIndex: 2,
      explanation: "Beryllium mixes its $2s$ orbital with one $2p$ orbital to form two linear $sp$ hybrid orbitals oriented at $180^\\circ$."
    },
    {
      id: "chem-46",
      question: "According to Molecular Orbital (MO) theory, the superoxide ion $\\text{O}_2^-$ has 17 valence electrons. In which molecular orbital does the 17th unpaired electron reside?",
      options: [
        "$\\sigma_{2pz}$",
        "$\\pi_{2px}$",
        "$\\sigma^*_{2pz}$",
        "$\\pi^*_{2py}$ (antibonding pi orbital)"
      ],
      correctAnswerIndex: 3,
      explanation: "In $\\text{O}_2^-$, the extra 17th electron enters the degenerate antibonding $\\pi^*_{2p}$ orbital, accounting for its paramagnetism."
    },
    {
      id: "chem-47",
      question: "Which of the following factors does NOT affect the rate of a chemical reaction involving purely solid reactants?",
      options: [
        "Concentration of reactants",
        "Temperature of reaction",
        "Surface area / particle size of reactants",
        "Volume of reaction vessel"
      ],
      correctAnswerIndex: 3,
      explanation: "Solid substances are incompressible with fixed densities; changing the vessel volume has no effect on solid reaction kinetics."
    },
    {
      id: "chem-48",
      question: "At a given temperature, $K_c = 0.36$ for $\\text{SO}_3(g) \\rightleftharpoons \\text{SO}_2(g) + \\frac{1}{2}\\text{O}_2(g)$. If $[\\text{SO}_3]=0.50\\text{ M}$, $[\\text{SO}_2]=0.50\\text{ M}$, and $[\\text{O}_2]=0.25\\text{ M}$, the reaction quotient $Q = 0.125 < K_c$. In which direction will the reaction proceed?",
      options: [
        "The reaction is at equilibrium.",
        "The reaction will proceed to the left.",
        "The reaction will proceed to the right (forward).",
        "Direction cannot be predicted."
      ],
      correctAnswerIndex: 2,
      explanation: "Since $Q_c < K_c$, the forward rate exceeds the reverse rate, driving the reaction to the right to form more products."
    },
    {
      id: "chem-49",
      question: "What is the density of methane gas ($\\text{CH}_4, M = 16\\text{ g/mol}$) at a pressure of $900\\text{ torr}$ and temperature of $25^\\circ\\text{C}$? ($R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}), 1\\text{ atm} = 760\\text{ torr}$)",
      options: [
        "$0.78\\text{ g/L}$",
        "$0.92\\text{ g/L}$",
        "$1.25\\text{ g/L}$",
        "$9.2\\text{ g/L}$"
      ],
      correctAnswerIndex: 2,
      explanation: "$P = \\frac{900}{760} = 1.184\\text{ atm}$, $T = 298\\text{ K}$. Density $d = \\frac{PM}{RT} = \\frac{1.184 \\times 16}{0.0821 \\times 298} \\approx 1.25\\text{ g/L}$."
    },
    {
      id: "chem-50",
      question: "It takes $2.25\\text{ minutes}$ for $0.02\\text{ mol}$ of $\\text{He}$ ($M = 4\\text{ g/mol}$) to diffuse. How long will it take for the same amount of $\\text{CH}_4$ ($M = 16\\text{ g/mol}$) to diffuse under identical conditions?",
      options: [
        "$1.25\\text{ min}$",
        "$2.25\\text{ min}$",
        "$4.50\\text{ min}$",
        "$6.00\\text{ min}$"
      ],
      correctAnswerIndex: 2,
      explanation: "By Graham's Law: $\\frac{t_{\\text{CH}_4}}{t_{\\text{He}}} = \\sqrt{\\frac{M_{\\text{CH}_4}}{M_{\\text{He}}}} = \\sqrt{\\frac{16}{4}} = 2$. $t = 2.25 \\times 2 = 4.5\\text{ minutes}$."
    },
    {
      id: "chem-51",
      question: "Which of the following statement CORRECTLY defines the reaction rate?",
      options: [
        "The change in concentration of reactants or products per unit time.",
        "The measure of the total energy change in a chemical reaction.",
        "The study of necessary reaction mechanisms.",
        "The measure of the rate of gaseous diffusion."
      ],
      correctAnswerIndex: 0,
      explanation: "Reaction rate is mathematically defined as $-\\frac{d[R]}{dt} = +\\frac{d[P]}{dt}$, measuring concentration change per unit time."
    },
    {
      id: "chem-52",
      question: "Consider the gaseous equilibrium: $\\text{PCl}_3(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{PCl}_5(g)$. According to Le Chatelier's principle, which change shifts equilibrium to the right?",
      options: [
        "Decreasing reactant and product concentrations equally.",
        "Increasing reactant and product concentrations equally.",
        "Increasing concentrations of reactants and decreasing concentration of product.",
        "Decreasing reactant concentrations and increasing product concentration."
      ],
      correctAnswerIndex: 2,
      explanation: "Adding reactants ($\\text{PCl}_3, \\text{Cl}_2$) or removing product ($\\text{PCl}_5$) causes the system to shift right toward product formation."
    },
    {
      id: "chem-53",
      question: "For $2\\text{NO}_2(g) \\rightleftharpoons 2\\text{NO}(g) + \\text{O}_2(g)$ at $298\\text{ K}$, $P_{\\text{NO}_2} = 0.75\\text{ atm}$, $P_{\\text{NO}} = 2.5 \\times 10^{-5}\\text{ atm}$, and $P_{\\text{O}_2} = 3.5 \\times 10^{-5}\\text{ atm}$. What is $K_p$?",
      options: [
        "$5.2 \\times 10^{-15}$",
        "$1.16 \\times 10^{-9}$",
        "$2.9 \\times 10^{-14}$",
        "$3.9 \\times 10^{-14}$"
      ],
      correctAnswerIndex: 3,
      explanation: "$K_p = \\frac{(P_{\\text{NO}})^2 \\cdot P_{\\text{O}_2}}{(P_{\\text{NO}_2})^2} = \\frac{(2.5 \\times 10^{-5})^2 (3.5 \\times 10^{-5})}{(0.75)^2} = \\frac{2.1875 \\times 10^{-14}}{0.5625} \\approx 3.9 \\times 10^{-14}$."
    },
    {
      id: "chem-54",
      question: "Bromine pentafluoride ($\\text{BrF}_5$) has 5 single bonds and 1 lone pair on Bromine (steric number 6). What is its molecular geometry?",
      options: [
        "Square planar",
        "Square pyramidal",
        "Trigonal pyramidal",
        "Trigonal bipyramidal"
      ],
      correctAnswerIndex: 1,
      explanation: "An $AX_5E$ molecule with octahedral electron-group geometry adopts a square pyramidal molecular shape."
    },
    {
      id: "chem-55",
      question: "The structure $\\text{CH}_3\\text{CH(OH)}\\text{CH}_2\\text{CH(OH)}\\text{CH}_3$ contains exactly two hydroxyl groups on different carbons. What type of alcohol is it?",
      options: [
        "Tertiary alcohol",
        "Polyhydric alcohol",
        "Primary alcohol",
        "Dihydric alcohol (diol)"
      ],
      correctAnswerIndex: 3,
      explanation: "Alcohols containing exactly two $-\\text{OH}$ functional groups are classified as dihydric alcohols (diols / glycols)."
    },
    {
      id: "chem-56",
      question: "What is the IUPAC name for $\\text{HOOC}-\\text{CH}_2-\\text{CH(Cl)}-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{COOH}$?",
      options: [
        "5-chlorooctanoic acid",
        "3-chlorooctanedioic acid",
        "2-chlorooctanedioic acid",
        "3-chlorooctanoic acid"
      ],
      correctAnswerIndex: 1,
      explanation: "The 8-carbon chain has carboxylic groups at both ends (octanedioic acid). Numbering from the left gives chlorine the lowest locant at C3: 3-chlorooctanedioic acid."
    },
    {
      id: "chem-57",
      question: "Which of the following statements CORRECTLY describes the wave relationship $c = \\lambda \\nu$ in electromagnetic radiation?",
      options: [
        "As the wavelength increases, the frequency increases.",
        "As the wavelength decreases, the frequency increases.",
        "As the wavelength decreases, the speed of light increases.",
        "As the frequency increases, the speed of light decreases."
      ],
      correctAnswerIndex: 1,
      explanation: "Wavelength ($\\lambda$) and frequency ($\\nu$) are inversely proportional in a vacuum ($c = \\lambda\\nu = \\text{constant}$)."
    },
    {
      id: "chem-58",
      question: "Which of the following 2-carbon organic compounds exhibits the highest boiling point?",
      options: [
        "Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)",
        "Ethene ($\\text{C}_2\\text{H}_4$)",
        "Ethanal ($\\text{CH}_3\\text{CHO}$)",
        "Ethane ($\\text{C}_2\\text{H}_6$)"
      ],
      correctAnswerIndex: 0,
      explanation: "Ethanol forms strong intermolecular hydrogen bonds, giving it a boiling point of $78^\\circ\\text{C}$, far higher than ethanal ($20^\\circ\\text{C}$) or ethane ($-89^\\circ\\text{C}$)."
    },
    {
      id: "chem-59",
      question: "According to the Lewis acid-base theory, a Lewis base is an:",
      options: [
        "proton donor",
        "proton acceptor",
        "electron-pair acceptor",
        "electron-pair donor"
      ],
      correctAnswerIndex: 3,
      explanation: "A Lewis base is any species that donates a pair of non-bonding electrons to form a coordinate covalent bond."
    },
    {
      id: "chem-60",
      question: "For $0.2\\text{ M } \\text{CH}_3\\text{COOH}$ ionizing to $[\\text{H}^+] = x\\text{ M}$, which formula calculates its percent ionization?",
      options: [
        "$\\frac{x}{0.2 - x} \\times 100\\%$",
        "$\\frac{x}{0.2} \\times 100\\%$",
        "$\\frac{0.2 - x}{0.2} \\times 100\\%$",
        "$\\frac{0.2}{x} \\times 100\\%$"
      ],
      correctAnswerIndex: 1,
      explanation: "$\\text{Percent ionization} = \\frac{[\\text{H}^+]_{\\text{eq}}}{[\\text{HA}]_{\\text{initial}}} \\times 100\\% = \\frac{x}{0.2} \\times 100\\%$."
    },
    {
      id: "chem-61",
      question: "Which statement distinguishes the equivalence point from the end point in an acid-base titration?",
      options: [
        "Equivalence point is where reactants evaporate whereas end point is where products condense.",
        "Equivalence point is where reactants melt whereas end point is where products freeze.",
        "Equivalence point is where the indicator changes color whereas end point is where acid completely reacted with base.",
        "End point is where the indicator changes color whereas equivalence point is the stoichiometric point where acid has completely neutralized the base."
      ],
      correctAnswerIndex: 3,
      explanation: "The equivalence point is the theoretical stoichiometric neutralization point ($n_{\\text{acid}} = n_{\\text{base}}$), while the end point is the experimental point where the indicator physically changes color."
    },
    {
      id: "chem-62",
      question: "Which one is the mathematical expression for Faraday's first law of electrolysis relating mass deposited ($m$) to molar mass ($M$), current ($I$), time ($t$), and valence ($n$)?",
      options: [
        "$\\frac{m_1}{E_1} = \\frac{m_2}{E_2}$",
        "$M = \\frac{n}{V}$",
        "$m = \\frac{MPV}{RT}$",
        "$m = \\frac{M \\cdot I \\cdot t}{n \\cdot F}$"
      ],
      correctAnswerIndex: 3,
      explanation: "Faraday's first law: $m = Z \\cdot Q = \\left(\\frac{M}{nF}\\right)It = \\frac{MIt}{nF}$."
    },
    {
      id: "chem-63",
      question: "Which of the following describes the fundamental process of industrial chemical manufacturing?",
      options: [
        "Designing and optimizing multi-step chemical and physical transformations to produce valuable products from raw materials using energy.",
        "Discharging untreated solid and gaseous wastes into ecosystems.",
        "Carrying out unwanted corrosion reactions that dissolve materials.",
        "Manufacturing products using exclusively inorganic mineral acids."
      ],
      correctAnswerIndex: 0,
      explanation: "Chemical manufacturing involves unit operations and reactions engineered to convert raw materials into commercial products economically."
    },
    {
      id: "chem-64",
      question: "Which of the following reactions demonstrates concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$) acting as an oxidizing agent?",
      options: [
        "$\\text{SO}_3(g) + \\text{H}_2\\text{O}(l) \\to \\text{H}_2\\text{SO}_4(aq)$",
        "$2\\text{KOH}(aq) + \\text{H}_2\\text{SO}_4(aq) \\to \\text{K}_2\\text{SO}_4(aq) + 2\\text{H}_2\\text{O}(l)$",
        "$\\text{Cu}(s) + 2\\text{H}_2\\text{SO}_4(aq) \\to \\text{CuSO}_4(aq) + \\text{SO}_2(g) + 2\\text{H}_2\\text{O}(l)$",
        "$\\text{Mg}_3\\text{N}_2(s) + 4\\text{H}_2\\text{SO}_4(aq) \\to 3\\text{MgSO}_4(aq) + (\\text{NH}_4)_2\\text{SO}_4(aq)$"
      ],
      correctAnswerIndex: 2,
      explanation: "$\\text{Cu}$ is oxidized from $0$ to $+2$, while sulfur in $\\text{H}_2\\text{SO}_4$ is reduced from $+6$ to $+4$ (in $\\text{SO}_2$)."
    },
    {
      id: "chem-65",
      question: "Which type of commercial glass is manufactured by fusing a mixture of silica ($\\text{SiO}_2$), sodium carbonate ($\\text{Na}_2\\text{CO}_3$), and limestone ($\\text{CaCO}_3$)?",
      options: [
        "Quartz glass",
        "Borosilicate glass",
        "Pyrex glass",
        "Soda-lime glass"
      ],
      correctAnswerIndex: 3,
      explanation: "Soda-lime glass accounts for about $90\\%$ of manufactured glass (bottles, windowpanes) and is made from silica, soda ash, and lime."
    },
    {
      id: "chem-66",
      question: "A galvanic cell consists of a Zinc anode ($E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$) connected to metal 'B' with an overall cell potential $E^\\circ_{\\text{cell}} = 0.51\\text{ V}$. What is the standard reduction potential of metal 'B' ($E^\\circ_{\\text{B}^{2+}/\\text{B}}$)?",
      options: [
        "$-0.25\\text{ V}$",
        "$-1.27\\text{ V}$",
        "$+0.25\\text{ V}$",
        "$+1.27\\text{ V}$"
      ],
      correctAnswerIndex: 0,
      explanation: "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} \\implies 0.51 = E^\\circ_B - (-0.76) \\implies E^\\circ_B = 0.51 - 0.76 = -0.25\\text{ V}$."
    },
    {
      id: "chem-67",
      question: "Which synthetic polyamide polymer is used to produce climbing ropes, textiles, hair combs, and stockings?",
      options: [
        "Perspex (PMMA)",
        "Nylon (polyamide)",
        "Teflon (PTFE)",
        "Bakelite"
      ],
      correctAnswerIndex: 1,
      explanation: "Nylon is a strong, elastic, and abrasion-resistant condensation polyamide used for fibers, stockings, and engineering plastics."
    },
    {
      id: "chem-68",
      question: "Which catalyst is used in the first oxidation step (ammonia to nitric oxide) in the Ostwald process for nitric acid production?",
      options: [
        "$\\text{Pt}$ (Platinum-Rhodium gauze)",
        "$\\text{V}_2\\text{O}_5$",
        "$\\text{Fe}$",
        "$\\text{CuO}$"
      ],
      correctAnswerIndex: 0,
      explanation: "The Ostwald process oxidizes $\\text{NH}_3$ to $\\text{NO}$ at high temperature over a platinum-rhodium gauze catalyst."
    },
    {
      id: "chem-69",
      question: "In which environmental sphere/component does biological photosynthesis take place?",
      options: [
        "Atmosphere",
        "Hydrosphere",
        "Lithosphere",
        "Biosphere"
      ],
      correctAnswerIndex: 3,
      explanation: "The biosphere encompasses all global ecological systems and living autotrophic organisms that conduct photosynthesis."
    },
    {
      id: "chem-70",
      question: "Which of the following statements is NOT true regarding the greenhouse effect and greenhouse gases?",
      options: [
        "Greenhouse effect is the absorption and re-emission of infrared radiation by atmospheric trace gases.",
        "Carbon dioxide and water vapor are primary natural greenhouse gases.",
        "Oxygen ($\\text{O}_2$) and Nitrogen ($\\text{N}_2$) are transparent to thermal infrared radiation.",
        "The greater the percentage of greenhouse gases in the atmosphere, the cooler the Earth becomes."
      ],
      correctAnswerIndex: 3,
      explanation: "Higher concentrations of greenhouse gases trap more outgoing infrared radiation, causing global atmospheric warming, not cooling."
    },
    {
      id: "chem-71",
      question: "Which pairing correctly matches the natural resource category with its representative example?",
      options: [
        "Renewable resources : copper",
        "Renewable resources : agricultural crops",
        "Non-renewable resources : animal wool",
        "Non-renewable resources : freshwater cycle"
      ],
      correctAnswerIndex: 1,
      explanation: "Crops are biological resources that can be continuously grown and naturally replenished each harvest season."
    },
    {
      id: "chem-72",
      question: "Which of the following compounds functions as a Brønsted-Lowry base by accepting a proton?",
      options: [
        "$\\text{BF}_3$",
        "$\\text{NH}_3$",
        "$\\text{HCl}$",
        "$\\text{H}_2\\text{S}$"
      ],
      correctAnswerIndex: 1,
      explanation: "$\\text{NH}_3$ possesses a lone pair on nitrogen enabling it to accept a proton ($\\text{H}^+$) to form $\\text{NH}_4^+$."
    },
    {
      id: "chem-73",
      question: "For nitrous acid $\\text{HNO}_2 \\rightleftharpoons \\text{H}^+ + \\text{NO}_2^-$ with $K_a = 7.1 \\times 10^{-4}$, what is the percent ionization in a $0.5\\text{ M}$ solution?",
      options: [
        "$0.2\\%$",
        "$1.8\\%$",
        "$3.8\\%$",
        "$9.1\\%$"
      ],
      correctAnswerIndex: 2,
      explanation: "$[\\text{H}^+] = \\sqrt{K_a C} = \\sqrt{7.1 \\times 10^{-4} \\times 0.5} = \\sqrt{3.55 \\times 10^{-4}} \\approx 0.0188\\text{ M}$. $\\% = \\frac{0.0188}{0.5} \\times 100\\% \\approx 3.8\\%$."
    },
    {
      id: "chem-74",
      question: "A $0.47\\text{ M}$ aqueous solution of a weak base has a $\\text{pOH} = 2$. What is the base dissociation constant ($K_b$)?",
      options: [
        "$2.17 \\times 10^{-4}$",
        "$3.14 \\times 10^{-3}$",
        "$1.0 \\times 10^{-2}$",
        "$4.4 \\times 10^{-1}$"
      ],
      correctAnswerIndex: 0,
      explanation: "$[\\text{OH}^-] = 10^{-\\text{pOH}} = 10^{-2} = 0.01\\text{ M}$. $K_b = \\frac{[\\text{OH}^-]^2}{[B]_0 - [\\text{OH}^-]} = \\frac{(0.01)^2}{0.47 - 0.01} = \\frac{10^{-4}}{0.46} \\approx 2.17 \\times 10^{-4}$."
    },
    {
      id: "chem-75",
      question: "In a standard $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\,\\|\\,\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$ galvanic cell ($E^\\circ = 1.10\\text{ V}$), which statement is NOT correct?",
      options: [
        "The mass of the copper cathode increases as copper plates out.",
        "The electrical circuit is completed internally by ion migration through the salt bridge.",
        "The zinc electrode dissolves and the blue color of $\\text{CuSO}_4$ fades.",
        "Electrons travel through the external circuit wire from copper cathode to zinc anode."
      ],
      correctAnswerIndex: 3,
      explanation: "Electrons spontaneously flow through the external circuit from the negative zinc anode (oxidation) to the positive copper cathode (reduction)."
    },
    {
      id: "chem-76",
      question: "Which of the following is the correct structural formula of polypropylene polymer repeating unit?",
      options: [
        "$-[-\\text{CH}_2-\\text{CH}_2-]_n-$",
        "$-[-\\text{CH}_2-\\text{CH(Cl)}-]_n-$",
        "$-[-\\text{CH}_2-\\text{CH}(\\text{CH}_3)-]_n-$",
        "$-[-\\text{CH}_2-\\text{CH}(\\text{COOCH}_3)-]_n-$"
      ],
      correctAnswerIndex: 2,
      explanation: "Polypropylene is formed by the polymerization of propene ($\\text{CH}_2=\\text{CH}-\\text{CH}_3$), giving repeating units with a methyl branch on alternate carbons."
    },
    {
      id: "chem-77",
      question: "For the synthesis of 2-butene: $\\text{CH}_3\\text{CH}_2\\text{CH(Br)}\\text{CH}_3 + \\text{CH}_3\\text{S}^- \\to \\text{CH}_3\\text{CH}=\\text{CHCH}_3 + \\text{CH}_3\\text{SH} + \\text{Br}^-$, what is the atom economy for 2-butene ($M = 56\\text{ g/mol}$) out of total reactant mass ($137 + 47 = 184\\text{ g/mol}$)?",
      options: [
        "$30.43\\%$",
        "$48\\%$",
        "$56\\%$",
        "$80\\%$"
      ],
      correctAnswerIndex: 0,
      explanation: "$\\text{Atom Economy} = \\frac{\\text{Molar mass of desired product}}{\\text{Total molar mass of all reactants}} \\times 100\\% = \\frac{56}{137 + 47} \\times 100\\% = \\frac{56}{184} \\times 100\\% \\approx 30.43\\%$."
    },
    {
      id: "chem-78",
      question: "Which food technology process prevents the growth of bacteria and fungi while inhibiting the rancidity/oxidation of fats?",
      options: [
        "Haber-Bosch process",
        "Leather tanning",
        "Food preservation (canning, dehydration, antioxidant preservation)",
        "Contact process"
      ],
      correctAnswerIndex: 2,
      explanation: "Food preservation methods (canning, salting, refrigeration, antioxidants) suppress microbial degradation and fat auto-oxidation."
    },
    {
      id: "chem-79",
      question: "Which of the following is the balanced overall chemical reaction for the industrial Down's cell electrolysis of molten $\\text{NaCl}$?",
      options: [
        "$\\text{Na}(l) + \\frac{1}{2}\\text{Cl}_2(g) \\to \\text{Na}^+(l) + \\text{Cl}^-(l)$",
        "$\\text{Na}^+(l) + \\text{Cl}^-(l) \\to \\text{Na}(l) + \\frac{1}{2}\\text{Cl}_2(g)$",
        "$\\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\to \\text{H}_2\\text{O}(g)$",
        "$\\text{H}_2\\text{O}(g) \\to \\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g)$"
      ],
      correctAnswerIndex: 1,
      explanation: "Electrolysis of molten salt decomposes $\\text{NaCl}$ into elemental liquid sodium at the cathode and chlorine gas at the anode: $2\\text{NaCl}(l) \\to 2\\text{Na}(l) + \\text{Cl}_2(g)$."
    },
    {
      id: "chem-80",
      question: "During the electrolysis of dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$) using platinum electrodes, which electrode reaction occurs at the negative cathode?",
      options: [
        "$\\text{SO}_4^{2-}$ is discharged at the anode.",
        "Overall reaction produces hydrogen peroxide.",
        "$\\text{H}^+$ is reduced and discharged as hydrogen gas at the cathode ($2\\text{H}^+ + 2e^- \\to \\text{H}_2$).",
        "A strongly basic solution is generated in the electrolyte."
      ],
      correctAnswerIndex: 2,
      explanation: "At the negative cathode, hydronium/hydrogen ions undergo reduction to evolve hydrogen gas: $2\\text{H}^+ + 2e^- \\to \\text{H}_2(g)$."
    }
  ] as Question[]
};
