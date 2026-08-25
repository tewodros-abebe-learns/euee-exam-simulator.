export const chemistry2015Exam = {
  id: "euee-2015-chemistry",
  title: "2015 E.C. ESSLCE Chemistry Examination",
  subject: "Chemistry",
  grade: "Grade 12",
  timeLimit: 9000, // 150 minutes (2:30 hours)
  questions: [
    {
      id: "chem15-1",
      question: "In a kinetic experiment, a student placed crystals of iodine in a closed reaction vessel, introduced hydrogen gas, and collected data to calculate the rate of formation of hydrogen iodide (H2 + I2 ⇌ 2HI). What would be the effect on the rate of reaction if the student takes more amount of iodine in the same volume?",
      options: [
        "It speeds up the rate of the reaction.",
        "It lowers the rate of the reaction.",
        "The formation of hydrogen iodide will be decreased.",
        "The rate of the reaction will be constant."
      ],
      correctAnswerIndex: 0,
      explanation: "Increasing the concentration/amount of reactants increases the collision frequency between reacting molecules per unit time, speeding up the forward reaction rate."
    },
    {
      id: "chem15-2",
      question: "Which of the following CORRECTLY relates the vapor pressure of a liquid with its boiling point? Boiling point is:",
      options: [
        "the temperature at which all the three physical states co-exist.",
        "the temperature at which the vapor pressure of the liquid becomes equal to the external atmospheric pressure.",
        "the temperature at which molecules present in the vapor phase go back to the liquid state.",
        "the temperature at which the kinetic energy of molecules is much less than the intermolecular force."
      ],
      correctAnswerIndex: 1,
      explanation: "By thermodynamic definition, a liquid boils when its saturated vapor pressure equals the surrounding ambient/external atmospheric pressure."
    },
    {
      id: "chem15-3",
      question: "Consider this equilibrium system: CO(g) + Fe3O4(s) ⇌ CO2(g) + 3FeO(s). Which of the following disturbances will shift the equilibrium position to the right?",
      options: [
        "Removing CO2(g)",
        "Removing CO(g)",
        "Removing FeO(s)",
        "Adding Fe3O4(s)"
      ],
      correctAnswerIndex: 0,
      explanation: "By Le Chatelier's Principle, continuously removing the gaseous product CO2(g) shifts the equilibrium to the right to replenish it. Solids do not affect equilibrium position."
    },
    {
      id: "chem15-4",
      question: "Which one of the following results from the interaction of atomic orbitals of bonding atoms to produce a new electron distribution associated with the ENTIRE molecule?",
      options: [
        "Hybrid orbital",
        "Molecular orbital",
        "Electron orbit",
        "Bohr orbit"
      ],
      correctAnswerIndex: 1,
      explanation: "According to Molecular Orbital (MO) Theory, linear combination of atomic orbitals produces molecular orbitals delocalized over the entire molecule."
    },
    {
      id: "chem15-5",
      question: "Which type of organic substances would be produced by heating a mixture of a carboxylic acid and an alcohol in the presence of concentrated H2SO4?",
      options: [
        "Ketones",
        "Aldehydes",
        "Esters",
        "Ethers"
      ],
      correctAnswerIndex: 2,
      explanation: "Fischer esterification: Carboxylic acid + Alcohol in the presence of an acid catalyst (conc. H2SO4) yields an ester and water (RCOOH + R'OH ⇌ RCOOR' + H2O)."
    },
    {
      id: "chem15-6",
      question: "Which one of the following is the reducing agent in the reaction: 8NH3(g) + 6NO2(g) → 7N2(g) + 12H2O(l)?",
      options: [
        "NO2",
        "NH3",
        "H2O",
        "N2"
      ],
      correctAnswerIndex: 1,
      explanation: "In NH3, nitrogen has an oxidation state of -3, which increases to 0 in N2 (oxidation). The species that undergoes oxidation acts as the reducing agent, so NH3 is the reducing agent."
    },
    {
      id: "chem15-7",
      question: "Carbon forms two stable compounds with oxygen: carbon monoxide (CO) and carbon dioxide (CO2). For a fixed mass of carbon, the ratio of masses of oxygen is 1:2. This result is consistent with the law of:",
      options: [
        "definite proportion.",
        "conservation of mass.",
        "constant composition.",
        "multiple proportions."
      ],
      correctAnswerIndex: 3,
      explanation: "Dalton's Law of Multiple Proportions states that when two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other are in small whole-number ratios."
    },
    {
      id: "chem15-8",
      question: "When a system at equilibrium is disturbed by a change of variable (temperature, pressure, concentration), the system shifts in a way that tends to counteract this change. This is:",
      options: [
        "Pauli's exclusion principle",
        "Aufbau principle",
        "Heisenberg uncertainty principle",
        "Le Chatelier's Principle"
      ],
      correctAnswerIndex: 3,
      explanation: "Le Chatelier's Principle dictates the dynamic behavioral response of reversible chemical equilibria to external thermodynamic stresses."
    },
    {
      id: "chem15-9",
      question: "Which graph illustrates the rate of reaction in terms of change in reactant concentration with time?",
      options: [
        "Horizontal line",
        "A curve showing reactant concentration exponentially decreasing asymptotically towards zero over time",
        "A straight line increasing upwards",
        "A curve increasing sharply upwards"
      ],
      correctAnswerIndex: 1,
      explanation: "Reactant concentration decreases non-linearly with time as reactants are converted into products, exhibiting an asymptotic downward decay curve."
    },
    {
      id: "chem15-10",
      question: "Which gas law states that the volume of a fixed amount of gas maintained at constant pressure is directly proportional to its absolute temperature (V ∝ T)?",
      options: [
        "Charles's law",
        "Boyle's law",
        "Avogadro's law",
        "Combined gas law"
      ],
      correctAnswerIndex: 0,
      explanation: "Charles's Law states that at constant pressure, the volume of a given mass of gas varies directly with thermodynamic temperature in Kelvin (V1/T1 = V2/T2)."
    },
    {
      id: "chem15-11",
      question: "The pH of a 0.1 M solution of formic acid (HCOOH) is 3. What is the Ka of the acid?",
      options: [
        "1.01 × 10^-5",
        "1.01 × 10^-7",
        "9.99 × 10^-4",
        "1.0 × 10^-5 (or ~1.01 × 10^-5)"
      ],
      correctAnswerIndex: 0,
      explanation: "pH = 3 => [H+] = 10^-3 M = 0.001 M. Ka = [H+]² / (C - [H+]) = (10^-3)² / (0.1 - 0.001) = 10^-6 / 0.099 = 1.01 × 10^-5."
    },
    {
      id: "chem15-12",
      question: "A system does 15 J of work on the surroundings (w = -15 J) and no heat exchange takes place (q = 0). Which thermodynamic function has fallen by 15 J?",
      options: [
        "Internal energy (ΔU)",
        "Specific heat",
        "Enthalpy",
        "Entropy"
      ],
      correctAnswerIndex: 0,
      explanation: "First Law of Thermodynamics: ΔU = q + w. With q = 0 and w = -15 J, ΔU = -15 J, meaning internal energy has decreased by 15 J."
    },
    {
      id: "chem15-13",
      question: "Which of the following is CORRECTLY stated about the spontaneity of a chemical reaction?",
      options: [
        "For an endothermic reaction with negative entropy change, the reaction is spontaneous at all temperatures.",
        "For an exothermic reaction with positive reaction entropy, the reaction is spontaneous at all temperatures (ΔG = ΔH - TΔS < 0).",
        "For an endothermic reaction with positive reaction entropy, the reaction is non-spontaneous at high temperature.",
        "For an exothermic reaction with negative reaction entropy, the reaction is spontaneous at high temperature."
      ],
      correctAnswerIndex: 1,
      explanation: "When ΔH is negative (exothermic) and ΔS is positive, ΔG = ΔH - TΔS is strictly negative at all temperatures, ensuring universal spontaneity."
    },
    {
      id: "chem15-14",
      question: "In thermodynamics: solutions in a beaker, a gas in a cylinder, or a biological cell under study are examples of a:",
      options: [
        "thermodynamic variables",
        "state function",
        "path function",
        "thermodynamic system"
      ],
      correctAnswerIndex: 3,
      explanation: "A thermodynamic system is the specific part of the universe singled out for thermodynamic observation and experimental study."
    },
    {
      id: "chem15-15",
      question: "Given bond energies (kJ/mol): H-H = 436, N-N = 193, N=N = 409, N≡N = 942. For (1/2)N2(g) + (3/2)H2(g) → NH3(g); ΔH = -45 kJ/mol. What is the average N-H bond energy?",
      options: [
        "1170 kJ/mol (or 390 kJ/mol per bond; total 1170)",
        "1125",
        "960",
        "1080"
      ],
      correctAnswerIndex: 0,
      explanation: "ΔH = Bonds broken - Bonds formed => -45 = [(1/2)(942) + (3/2)(436)] - 3(BE_{N-H}) = [471 + 654] - 3(BE) = 1125 - 3(BE). 3(BE_{N-H}) = 1125 + 45 = 1170 kJ/mol, so total energy for 3 bonds is 1170 kJ/mol (390 kJ/mol each)."
    },
    {
      id: "chem15-16",
      question: "For (CH3)3C-Br(aq) + H2O(l) → (CH3)3C-OH(aq) + H+ + Br-, rate = k[(CH3)3C-Br]. Step I is the slow rate-determining step: (CH3)3C-Br → (CH3)3C+ + Br-. Why does H2O NOT appear in the rate law?",
      options: [
        "water is a catalyst in the reaction.",
        "water is an intermediate species.",
        "water exists in the liquid state in the reaction.",
        "water is missing in the rate determining step (slow step)."
      ],
      correctAnswerIndex: 3,
      explanation: "The rate law is governed entirely by the molecularity of the slowest elementary step (Step I unimolecular ionization), in which water is not involved."
    },
    {
      id: "chem15-17",
      question: "Which type of substances has the general formula consisting of a glycerol backbone esterified to three fatty acid chains (triglyceride)?",
      options: [
        "Carboxylic acids",
        "Fats and oils (triglycerides)",
        "Alcohols",
        "Fatty acids"
      ],
      correctAnswerIndex: 1,
      explanation: "Fats and oils are triesters formed between propane-1,2,3-triol (glycerol) and three fatty acid molecules (R1COOH, R2COOH, R3COOH)."
    },
    {
      id: "chem15-18",
      question: "The rate law for CO(g) + NO2(g) → CO2(g) + NO(g) is rate = k[NO2]². Which of the following is a plausible two-step mechanism?",
      options: [
        "NO2(g) + NO2(g) → NO3(g) + NO(g) [slow]; NO3(g) + CO(g) → NO2(g) + CO2(g) [fast]",
        "NO3(g) + NO(g) → NO2(g) + NO2(g) [slow]; NO3(g) + CO(g) → NO2(g) + CO2(g) [fast]",
        "NO3(g) + NO(g) → NO2(g) + NO2(g) [slow]; NO2(g) + CO2(g) → NO3(g) + CO(g) [fast]",
        "NO2(g) + NO2(g) → NO3(g) + NO(g) [fast]; NO3(g) + CO(g) → NO2(g) + CO2(g) [slow]"
      ],
      correctAnswerIndex: 0,
      explanation: "A bimolecular slow step involving two NO2 molecules yields the second-order rate law rate = k[NO2]², matching the experimental observation."
    },
    {
      id: "chem15-19",
      question: "The speed with which a solute goes into solution is known as:",
      options: [
        "degree of solvation",
        "heat of solution",
        "rate of dissolution",
        "extent of dissolution"
      ],
      correctAnswerIndex: 2,
      explanation: "The rate of dissolution is a kinetic property measuring how rapidly solute particles separate and dissolve in a solvent per unit time."
    },
    {
      id: "chem15-20",
      question: "Which explains how 2 L of 1 M NaOH stock solution is converted into a 0.25 M NaOH solution?",
      options: [
        "Adding 6 L of water to the stock solution",
        "Adding 8 L of water to the stock solution",
        "Evaporating 0.25 L of water from the stock solution",
        "Evaporating 1 L of water from the stock solution"
      ],
      correctAnswerIndex: 0,
      explanation: "M1 V1 = M2 V2 => (1 M)(2 L) = (0.25 M) V2 => V2 = 2 / 0.25 = 8 L final total volume. Water added = V2 - V1 = 8 L - 2 L = 6 L."
    },
    {
      id: "chem15-21",
      question: "Which one of the following IS TRUE about isotopes?",
      options: [
        "Isotopes of an element are atoms that have different number of electrons and protons.",
        "Isotopes of an element are identical in mass number.",
        "Isotopes of the same elements contain the same number of neutrons.",
        "Isotopes of an element have the same chemical properties (same atomic number and electron configuration)."
      ],
      correctAnswerIndex: 3,
      explanation: "Isotopes have identical atomic numbers (protons and electrons), giving them virtually identical chemical reactivity and bonding characteristics."
    },
    {
      id: "chem15-22",
      question: "Which of the following describes the quantum mechanical model of the atom?",
      options: [
        "The locations of electrons in an atom are described in terms of probability (orbitals).",
        "An atom is represented by a solid indestructible sphere.",
        "An atom is a sphere with positively charged matter in which electrons are embedded.",
        "Electrons move around the nucleus of an atom in fixed circular orbits."
      ],
      correctAnswerIndex: 0,
      explanation: "The quantum mechanical model (Schrödinger equation) replaces deterministic orbits with 3D probability density wavefunctions (orbitals)."
    },
    {
      id: "chem15-23",
      question: "Which diagrammatic electron shell representation correctly corresponds to chlorine-35 (17 protons, 18 neutrons, electron configuration 2, 8, 7)?",
      options: [
        "Nucleus (17p, 18n) surrounded by shells with 2, 8, 7 electrons",
        "Nucleus (17p, 18n) surrounded by shells with 2, 8, 8 electrons",
        "Nucleus (18p, 17n) surrounded by shells with 2, 8, 7 electrons",
        "Nucleus (17p, 18n) surrounded by shells with 2, 7, 8 electrons"
      ],
      correctAnswerIndex: 0,
      explanation: "Neutral chlorine atom has atomic number Z = 17 (17 protons, 17 electrons arranged as 2 in K, 8 in L, 7 in M shell) and 35 - 17 = 18 neutrons."
    },
    {
      id: "chem15-24",
      question: "Which one of the following is an ionic compound?",
      options: [
        "CaCl2",
        "CO2",
        "PCl3",
        "H2O2"
      ],
      correctAnswerIndex: 0,
      explanation: "CaCl2 is formed between an electropositive alkaline earth metal (Ca2+) and a halogen (Cl-), forming a crystalline ionic lattice."
    },
    {
      id: "chem15-25",
      question: "An element is located in Group VIIA (Group 17) and 3rd period of the modern periodic table (Chlorine). On the basis of this, the element:",
      options: [
        "generally forms an ion with -2 charges.",
        "has very low ionization energy.",
        "forms an acidic oxide (e.g. Cl2O7).",
        "has extremely low electron affinity."
      ],
      correctAnswerIndex: 2,
      explanation: "Non-metal halogens like chlorine in Group 17 form covalent acidic oxides (e.g. Cl2O, Cl2O7) that dissolve in water to produce strong oxoacids."
    },
    {
      id: "chem15-26",
      question: "Which property of a pure solvent would NOT be affected by the formation of a solution with a non-volatile solute?",
      options: [
        "Boiling Point",
        "Chemical potential",
        "Chemical identity of the solvent molecules",
        "Freezing Point"
      ],
      correctAnswerIndex: 2,
      explanation: "Colligative properties alter boiling point, vapor pressure, and freezing point, but the fundamental chemical identity/covalent structure of the solvent molecule remains unchanged."
    },
    {
      id: "chem15-27",
      question: "The partial pressure of acetylene (C2H2) is 10 atm at 25°C. What is its solubility in mol/L if Henry's law constant k_H = 1.04 mol/(L·atm)?",
      options: [
        "9.62",
        "0.104",
        "104",
        "10.4 mol/L"
      ],
      correctAnswerIndex: 3,
      explanation: "By Henry's Law: S = k_H * P = (1.04 mol/(L·atm)) * (10 atm) = 10.4 mol/L."
    },
    {
      id: "chem15-28",
      question: "What is the normality (N) of an H2SO4 solution that contains 19.6 g of H2SO4 (molar mass = 98 g/mol, equivalent mass = 49 g/eq) in 20 mL (0.020 L)?",
      options: [
        "0.02",
        "0.01",
        "20 N",
        "10 N"
      ],
      correctAnswerIndex: 2,
      explanation: "Equivalents = 19.6 g / 49 g/eq = 0.4 eq. Normality N = eq / V(L) = 0.4 eq / 0.020 L = 20 N."
    },
    {
      id: "chem15-29",
      question: "Which of the following illustrates an EXTENSIVE property?",
      options: [
        "The standard electrode potential for 2Cu2+ + 4e- → 2Cu is the same as Cu2+ + 2e- → Cu.",
        "If a system is divided into parts, the value of the property for the complete system equals the sum of the values of the parts (e.g. mass, volume).",
        "The density remains identical when volume doubles.",
        "Mixing water maintains the same temperature."
      ],
      correctAnswerIndex: 1,
      explanation: "An extensive property is additive and depends directly on the size or extent of the system (e.g. mass, volume, total enthalpy)."
    },
    {
      id: "chem15-30",
      question: "The point in an acid-base titration at which the number of moles of OH- added is chemically equivalent to the moles of H+ originally present is the:",
      options: [
        "Zero point",
        "End point",
        "Triple point",
        "Equivalence point"
      ],
      correctAnswerIndex: 3,
      explanation: "The equivalence point is the exact stoichiometric point where reacting equivalents of titrant and analyte are equal."
    },
    {
      id: "chem15-31",
      question: "Which of the following is TRUE about the electrolysis of a molten hypothetical binary electrolyte MX (M+ + X-)?",
      options: [
        "X is produced at the negative electrode.",
        "M is produced at the anode.",
        "Electrons are not transferred from one species to another.",
        "The overall reaction is a redox reaction."
      ],
      correctAnswerIndex: 3,
      explanation: "Electrolysis drives non-spontaneous oxidation at the anode (2X- → X2 + 2e-) and reduction at the cathode (M+ + e- → M), constituting an overall redox reaction."
    },
    {
      id: "chem15-32",
      question: "During extraction of an amphoteric metal, the ore is fused with NaOH in air and dissolved in water to yield a soluble metal species. Reduction with carbon and HCl followed by aluminothermic reduction produces pure metal. The metal is:",
      options: [
        "Ca",
        "Zn",
        "Cr (Chromium)",
        "Pb"
      ],
      correctAnswerIndex: 2,
      explanation: "Chromium (from chromite FeCr2O4) is fused with sodium carbonate/NaOH to form sodium chromate, acidified to dichromate, and reduced by aluminum (Goldschmidt aluminothermic process)."
    },
    {
      id: "chem15-33",
      question: "Why does tin (Sn) NOT react with cold water, while calcium (Ca) reacts vigorously?",
      options: [
        "Tin is less reactive (lower in the electrochemical activity series) than calcium.",
        "Due to the formation of a thin oxide layer.",
        "Due to its physical state.",
        "Due to the pH of water."
      ],
      correctAnswerIndex: 0,
      explanation: "Calcium is an active electropositive alkaline earth metal with standard reduction potential E° = -2.87 V that displaces hydrogen from cold water, whereas tin is far less reactive (E° = -0.14 V)."
    },
    {
      id: "chem15-34",
      question: "Why is vulcanization performed on natural rubber (polyisoprene)?",
      options: [
        "To convert the monomer unit into polymer.",
        "To establish cross-links (sulfur bridges) between polymer chains in the natural rubber.",
        "To decrease the number of monomer units.",
        "To increase the number of monomer units."
      ],
      correctAnswerIndex: 1,
      explanation: "Heating polyisoprene with sulfur introduces covalent disulfide cross-links between polymer chains, improving elasticity, tensile strength, and heat resistance."
    },
    {
      id: "chem15-35",
      question: "In setting up a Daniell galvanic cell (Zn-Cu) using a voltmeter:",
      options: [
        "In the Cu half-cell, Cu metal is dipped in ZnSO4 solution.",
        "In the Zn half-cell, Zn metal is dipped in ZnSO4 solution (and Cu in CuSO4).",
        "Each U-tube served as a salt bridge filled with saturated KCl.",
        "After the experiment the mass of zinc is increased."
      ],
      correctAnswerIndex: 2,
      explanation: "A U-tube containing an inverted gel matrix of saturated potassium chloride (KCl) serves as the electrolyte salt bridge to maintain electrical neutrality."
    },
    {
      id: "chem15-36",
      question: "Which one of the following is an example of a molecular crystal?",
      options: [
        "Diamond (covalent network)",
        "Sodium Chloride (ionic)",
        "Solid carbon dioxide (dry ice)",
        "Magnesium (metallic)"
      ],
      correctAnswerIndex: 2,
      explanation: "Solid CO2 (dry ice) is a molecular crystal consisting of discrete non-polar CO2 molecules held together in a crystal lattice by weak London dispersion forces."
    },
    {
      id: "chem15-37",
      question: "Which one of the following could NOT be considered as a factor influencing the rate of a chemical reaction?",
      options: [
        "Presence of catalyst",
        "Surface area of solid reactants",
        "The equilibrium constant (K_eq) of the reaction",
        "Temperature of reactants"
      ],
      correctAnswerIndex: 2,
      explanation: "Equilibrium constant (K_eq) is a thermodynamic property determining reaction extent/yield at equilibrium, NOT the kinetic speed/rate."
    },
    {
      id: "chem15-38",
      question: "Which hybridization scheme describes the central oxygen atom in H2O (valence configuration 2s² 2p⁴)?",
      options: [
        "sp² hybridization",
        "sp hybridization",
        "sp³ hybridization with two lone pairs and two single bonding electrons",
        "dsp³ hybridization"
      ],
      correctAnswerIndex: 2,
      explanation: "The oxygen atom in water undergoes sp³ hybridization to form four degenerate sp³ hybrid orbitals (two containing lone pairs and two forming sigma bonds with H)."
    },
    {
      id: "chem15-39",
      question: "In which reaction order is a plot of ln[A]_t versus time a straight line with slope -k?",
      options: [
        "First-order",
        "Zero-order",
        "Third-order",
        "Second-order"
      ],
      correctAnswerIndex: 0,
      explanation: "The integrated rate law for a first-order reaction is ln[A]_t = -kt + ln[A]_0, which is linear with respect to time with slope = -k."
    },
    {
      id: "chem15-40",
      question: "A state in which forward and reverse reactions proceed at equal rates with no macroscopic change in chemical composition is:",
      options: [
        "Chemical kinetics",
        "Dynamic chemical equilibrium",
        "Degree of freedom",
        "The law of mass action"
      ],
      correctAnswerIndex: 1,
      explanation: "Dynamic equilibrium is reached when the rate of the forward reaction equals the rate of the reverse reaction, keeping macroscopic concentrations constant."
    },
    {
      id: "chem15-41",
      question: "The heat change at constant pressure when 1 mole of a compound is formed from its constituent elements in their standard states is:",
      options: [
        "standard entropy of reaction",
        "standard enthalpy of reaction",
        "standard reduction potential",
        "standard enthalpy of formation (ΔH°f)"
      ],
      correctAnswerIndex: 3,
      explanation: "Standard molar enthalpy of formation (ΔH°f) is the enthalpy change accompanying the synthesis of 1 mole of substance from its pure elements at 1 atm and 298 K."
    },
    {
      id: "chem15-42",
      question: "What is a redox reaction?",
      options: [
        "two insoluble ions in compounds form an insoluble product.",
        "a reaction in which electrons are transferred between chemical species.",
        "atoms or ions of two compound exchange bonding partners without change in oxidation numbers.",
        "an acid and a base neutralize each other."
      ],
      correctAnswerIndex: 1,
      explanation: "Redox (oxidation-reduction) reactions involve the net transfer of electrons from an electron donor (reducing agent) to an electron acceptor (oxidizing agent)."
    },
    {
      id: "chem15-43",
      question: "Which of the following correctly explains how electroplating takes place?",
      options: [
        "The electrolyte is an aqueous solution of a salt of the plated metal.",
        "The object to be plated constitutes the anode.",
        "The cations in the electrolyte are supplied either by the salt or from oxidation of the anode.",
        "Metal is deposited on the cathode by electrolytic reduction of metal cations from solution."
      ],
      correctAnswerIndex: 3,
      explanation: "In electroplating, the object to be coated is placed at the cathode where metal cations in solution undergo electrolytic reduction to deposit a uniform metallic layer."
    },
    {
      id: "chem15-44",
      question: "How is the equivalent mass of a base obtained?",
      options: [
        "By multiplying its molar mass by the number of OH- ions furnished.",
        "By dividing its molar mass by the acidity of the base (number of replaceable OH- ions furnished per formula unit).",
        "By multiplying its number of equivalents.",
        "By dividing by Avogadro's number."
      ],
      correctAnswerIndex: 1,
      explanation: "Equivalent mass of a base = Molar Mass / Acidity (number of replaceable OH- ions or protons neutralized per formula unit)."
    },
    {
      id: "chem15-45",
      question: "Given standard reduction potentials: Sn2+ + 2e- → Sn (-0.14V), Br2 + 2e- → 2Br- (+1.07V), Ag+ + e- → Ag (+0.80V), Ni2+ + 2e- → Ni (-0.25V), Ca2+ + 2e- → Ca (-2.87V), Cd2+ + 2e- → Cd (-0.40V), Cu2+ + e- → Cu+ (+0.15V), Fe3+ + e- → Fe2+ (+0.77V). Which reaction is spontaneous (E°_cell > 0)?",
      options: [
        "2Ag(s) + Ni2+(aq) → 2Ag+(aq) + Ni(s)",
        "2Br-(aq) + Sn2+(aq) → Br2(l) + Sn(s)",
        "Cu2+(aq) + Fe2+(aq) → Cu+(aq) + Fe3+(aq)",
        "Ca(s) + Cd2+(aq) → Ca2+(aq) + Cd(s)"
      ],
      correctAnswerIndex: 3,
      explanation: "E°_cell = E°(Cd2+/Cd) - E°(Ca2+/Ca) = -0.40 V - (-2.87 V) = +2.47 V > 0, which is strongly spontaneous."
    },
    {
      id: "chem15-46",
      question: "Which of the following statements describes chemical industries?",
      options: [
        "an area of chemistry concerned with the speeds or rates of chemical reactions.",
        "an expression for the chemical composition of a compound in symbols.",
        "a process in which dissolved solute comes out of solution.",
        "enterprises that convert raw materials into desired commercial products by utilizing chemical reactions and refining operations."
      ],
      correctAnswerIndex: 3,
      explanation: "Chemical industries take raw natural materials and transform them through controlled unit operations and chemical synthesis into valuable commodities."
    },
    {
      id: "chem15-47",
      question: "What is the product when white phosphorus (P4) reacts with an EXCESS amount of oxygen gas?",
      options: [
        "H3PO3",
        "H3PO4",
        "P4O10 (Tetraphosphorus decaoxide)",
        "P4O6 (Tetraphosphorus hexaoxide)"
      ],
      correctAnswerIndex: 2,
      explanation: "Reaction of phosphorus with excess oxygen oxidizes phosphorus to its +5 state, yielding P4O10 (tetraphosphorus decaoxide): P4 + 5O2 → P4O10."
    },
    {
      id: "chem15-48",
      question: "One of the fundamental differences between metallic conduction and electrolytic conduction is:",
      options: [
        "In metallic conduction electricity is conducted by the flow of delocalized mobile electrons without chemical decomposition, whereas in electrolytic conduction charge is transported by migrating ions accompanied by chemical decomposition.",
        "The charge carriers in metals are cations and anions.",
        "The charge carriers in metals are localized electrons.",
        "Electrolytic conduction involves the flow of mobile electrons."
      ],
      correctAnswerIndex: 0,
      explanation: "Metals conduct electricity via a sea of delocalized valence electrons with no chemical change, while electrolytes conduct through mobile ion migration with redox chemical changes at electrodes."
    },
    {
      id: "chem15-49",
      question: "Which of the following greenhouse gases released from the combustion of fossil fuels in industrial machinery is a primary driver of global warming?",
      options: [
        "CO",
        "CO2 (Carbon dioxide)",
        "NO",
        "SO2"
      ],
      correctAnswerIndex: 1,
      explanation: "Carbon dioxide (CO2) is the most abundant anthropogenic greenhouse gas that traps outgoing infrared radiation, driving global climate warming."
    },
    {
      id: "chem15-50",
      question: "The number of digits to the right of the decimal point in a measured numerical quantity denotes:",
      options: [
        "Significant figures",
        "Decimal places",
        "Conversion factor",
        "Scientific notation"
      ],
      correctAnswerIndex: 1,
      explanation: "The count of numerical digits following the decimal point specifies the number of decimal places of the value."
    },
    {
      id: "chem15-51",
      question: "Which of the following occurs during the formation of ionic bonds?",
      options: [
        "Inner most shell electrons are involved.",
        "Valence electrons are shared between atoms.",
        "The electronic configuration of an atom forming the ion remains unaffected.",
        "Valence electrons are completely transferred from one atom (metal) to another (non-metal)."
      ],
      correctAnswerIndex: 3,
      explanation: "Ionic bonding is characterized by the complete electrostatic transfer of one or more valence electrons from an electropositive to an electronegative atom."
    },
    {
      id: "chem15-52",
      question: "A model showing hundred metal cation balls in a box with empty space between them representing an electron sea depicts which bonding type?",
      options: [
        "Covalent bonding",
        "Ionic bonding",
        "Metallic bonding",
        "Dative coordinate bonding"
      ],
      correctAnswerIndex: 2,
      explanation: "The electron sea model describes metallic bonding as an array of positive metal cations immersed in a delocalized cloud of mobile valence electrons."
    },
    {
      id: "chem15-53",
      question: "Which of the following explains dipole-dipole intermolecular forces?",
      options: [
        "A type of intermolecular force that exists between non-polar molecules.",
        "The electrostatic attraction between oppositely charged poles of nearby permanent polar molecules.",
        "An attractive force resulting from temporary dipoles induced in molecules.",
        "An electrostatic attraction between metal ions and valence electrons."
      ],
      correctAnswerIndex: 1,
      explanation: "Dipole-dipole interactions are electrostatic attractions between the partial positive end of one polar molecule and the partial negative end of an adjacent polar molecule."
    },
    {
      id: "chem15-54",
      question: "Which of the following chemical reactions represents the primary cellular aerobic oxidation of glucose releasing energy in our bodies?",
      options: [
        "C6H12O6(s) + 6O2(g) → 6CO2(g) + 6H2O(l) + Energy",
        "6CO2(g) + 6H2O(l) → C6H12O6(s) + 6O2(g)",
        "C6H12O6(s) → 2C2H5OH(l) + 2CO2(g)",
        "N2H4CO(g) + H2O(g) → 2NH3(l) + CO2(g)"
      ],
      correctAnswerIndex: 0,
      explanation: "Aerobic cellular respiration is the combustion of glucose with molecular oxygen producing carbon dioxide, water, and biochemical ATP energy."
    },
    {
      id: "chem15-55",
      question: "'A reaction that involves the mutual exchange of positive and negative ions of each reactant to form two new compounds' defines a:",
      options: [
        "Decomposition reaction",
        "Combination reaction",
        "Double displacement (metathesis) reaction",
        "Single displacement reaction"
      ],
      correctAnswerIndex: 2,
      explanation: "In a double displacement (metathesis) reaction (AB + CD → AD + CB), ionic partners exchange cations and anions."
    },
    {
      id: "chem15-56",
      question: "What are the four quantum numbers (n, l, m_l, m_s) for an electron in a 2s orbital?",
      options: [
        "2, 1, 0, +1/2",
        "2, 1, 1, +1/2",
        "2, 0, 0, +1/2 (or -1/2)",
        "2, 0, 1, +1/2"
      ],
      correctAnswerIndex: 2,
      explanation: "For 2s orbital: principal quantum number n = 2, angular momentum quantum number l = 0 (s orbital), magnetic quantum number m_l = 0, and spin m_s = ±1/2."
    },
    {
      id: "chem15-57",
      question: "A student uses a digital balance (±0.02), a thermometer (±0.1), a measuring cylinder (±0.05), and a beaker (±0.5). Which instrument is the most PRECISE?",
      options: [
        "The thermometer",
        "The digital balance (uncertainty ±0.02)",
        "The beaker",
        "The measuring cylinder"
      ],
      correctAnswerIndex: 1,
      explanation: "Precision corresponds to the smallest experimental uncertainty / smallest division increment; ±0.02 has the highest precision among the choices."
    },
    {
      id: "chem15-58",
      question: "Which of the following explains the dual wave-particle nature of light?",
      options: [
        "A beam of light is a stream of discrete photons whose energy is proportional to frequency (E = hf), while also displaying wave phenomena like interference and diffraction.",
        "An electron behaves like a standing wave only.",
        "Light possesses only classical macroscopic properties.",
        "Light consists solely of continuous mechanical waves."
      ],
      correctAnswerIndex: 0,
      explanation: "Wave-particle duality recognizes that light behaves both as electromagnetic wavefields and as quantized particle packets of energy (photons)."
    },
    {
      id: "chem15-59",
      question: "A spontaneous nuclear breakdown in which unstable atomic nuclei emit particles or electromagnetic radiation is:",
      options: [
        "Radioactive isotopes",
        "Radioactivity",
        "Radio wave",
        "Radioactive decay"
      ],
      correctAnswerIndex: 3,
      explanation: "Radioactive decay is the spontaneous transmutation of unstable radionuclides by alpha, beta, or gamma emission."
    },
    {
      id: "chem15-60",
      question: "Which statement correctly describes Valence Shell Electron Pair Repulsion (VSEPR) theory?",
      options: [
        "Degenerate orbitals are occupied by a single electron before pairing.",
        "Valence electron pairs (bonding and lone pairs) surrounding a central atom arrange themselves as far apart in 3D space as possible to minimize electrostatic repulsions.",
        "Atomic orbitals combine to produce hybrid orbitals.",
        "A covalent bond is formed by overlap of atomic orbitals."
      ],
      correctAnswerIndex: 1,
      explanation: "VSEPR theory postulates that geometric electron domain geometries are determined by minimizing electrostatic repulsive forces between valence electron pairs."
    },
    {
      id: "chem15-61",
      question: "Which of the following is a colorless, flammable volatile hydrocarbon liquid that is completely miscible with non-polar organic solvents?",
      options: [
        "Benzene (C6H6)",
        "Ethanol",
        "Methanol",
        "Methane"
      ],
      correctAnswerIndex: 0,
      explanation: "Benzene is an aromatic non-polar, volatile, flammable liquid with boiling point 80°C that dissolves readily in non-polar organic solvents."
    },
    {
      id: "chem15-62",
      question: "What is the IUPAC name of CH3-CH(CH2-CH3)-CH(CH3)-CH(CH3)-CH3 (longest chain: 6 carbons with methyl groups at C2, C3, C4)?",
      options: [
        "3,4,5-Trimethylhexane",
        "2-Ethyl-3,4-dimethylpentane",
        "4-Ethyl-2,3-dimethylpentane",
        "2,3,4-Trimethylhexane"
      ],
      correctAnswerIndex: 3,
      explanation: "The longest continuous carbon chain has 6 carbons (hexane). Numbering from the left gives substituents at positions 2, 3, and 4: 2,3,4-trimethylhexane."
    },
    {
      id: "chem15-63",
      question: "Which petroleum refining fraction is widely used as a non-polar solvent and in dry cleaning?",
      options: [
        "kerosene",
        "Petroleum ether / Stoddard solvent",
        "Paraffin wax",
        "Diesel oil"
      ],
      correctAnswerIndex: 1,
      explanation: "Petroleum ether (light naphtha fraction) is a volatile low-boiling hydrocarbon mixture used as an industrial non-polar extraction solvent and dry cleaner."
    },
    {
      id: "chem15-64",
      question: "Which of the following is NOT TRUE about the laboratory preparation and properties of ethylene (ethene) by dehydration of ethanol?",
      options: [
        "The collected ethylene gas decolorizes Br2 in CCl4 (bromine water test).",
        "Concentrated sulphuric acid is used as a dehydrating agent.",
        "Combustion of ethylene produces a completely non-luminous smokeless flame (it actually produces a luminous yellow flame).",
        "The collected ethylene gas decolorizes alkaline KMnO4 (Baeyer's reagent test)."
      ],
      correctAnswerIndex: 2,
      explanation: "Ethylene burns with a smoky, luminous flame due to higher carbon-to-hydrogen ratio compared to methane, so claiming it produces a non-luminous flame is incorrect."
    },
    {
      id: "chem15-65",
      question: "Which of the following is an essential macronutrient element required by plants for physiological growth and enzyme activation?",
      options: [
        "Aluminum",
        "Lead",
        "Sodium",
        "Potassium (K)"
      ],
      correctAnswerIndex: 3,
      explanation: "Potassium (K) is one of the primary essential NPK macronutrients essential for stomatal regulation, osmoregulation, and enzyme activation in plants."
    },
    {
      id: "chem15-66",
      question: "Which of the following is the main reason for the large difference in dipole moment between the triatomic molecules H2O (polar, μ = 1.85 D) and CO2 (non-polar, μ = 0)?",
      options: [
        "The presence of lone pairs in water partially reinforces bond polarities.",
        "The higher electronegativity difference.",
        "The presence of multiple bonds in CO2.",
        "The two C=O bond dipoles in linear CO2 (180° bond angle) point in opposite directions and cancel each other out, whereas bent H2O has an asymmetric geometry with a net resultant dipole."
      ],
      correctAnswerIndex: 3,
      explanation: "CO2 is linear (180°) so bond dipoles cancel (net μ = 0), whereas H2O is bent (104.5°) due to two lone pairs, resulting in a strong net molecular dipole."
    },
    {
      id: "chem15-67",
      question: "How many non-bonding (lone) pairs of electrons are present in the valence shell of the central chlorine atom in ClF3 (T-shaped geometry)?",
      options: [
        "1",
        "0",
        "3",
        "2 lone pairs"
      ],
      correctAnswerIndex: 3,
      explanation: "Chlorine has 7 valence electrons: 3 are shared with three fluorine atoms, leaving 4 non-bonding electrons which form 2 lone pairs (AX3E2 configuration)."
    },
    {
      id: "chem15-68",
      question: "Which property would be observed for naphthalene (C10H8, non-polar molecular solid)?",
      options: [
        "It is soluble in non-polar organic solvents like benzene.",
        "It conducts electricity in molten state.",
        "It shows extremely high ionic melting point.",
        "It is soluble in water."
      ],
      correctAnswerIndex: 0,
      explanation: "Like dissolves like: non-polar aromatic naphthalene dissolves readily in non-polar organic solvents such as benzene and toluene."
    },
    {
      id: "chem15-69",
      question: "Which of the following statements about chemical bonding models is CORRECT?",
      options: [
        "Valence bond model simply shows the linkage between atoms and the presence of lone pairs.",
        "Lewis model predicts the shapes of molecules based on electron-pair repulsions around a central atom.",
        "In Lewis model, electrons repel one another and a pair of bonding electrons lies far apart.",
        "Valence bond model explains molecular shape and bonding from the constructive quantum overlap of atomic orbitals."
      ],
      correctAnswerIndex: 3,
      explanation: "Valence Bond (VB) theory attributes covalent bond formation to the spatial overlap of half-filled atomic/hybrid orbitals containing electron pairs of opposite spins."
    },
    {
      id: "chem15-70",
      question: "The energy required to completely separate one mole of a crystalline solid ionic compound into its constituent gaseous ions is defined as:",
      options: [
        "Ionization energy",
        "Activation energy",
        "Lattice energy",
        "Bond energy"
      ],
      correctAnswerIndex: 2,
      explanation: "Lattice energy (lattice enthalpy) is the standard energy required to dissociate 1 mole of an ionic crystalline lattice into gaseous ions at infinite separation."
    },
    {
      id: "chem15-71",
      question: "Which of the following compounds reacts with a basic oxide to form a salt and water?",
      options: [
        "Acid (or acidic oxide)",
        "Acidic oxide",
        "Base",
        "Neutral oxide"
      ],
      correctAnswerIndex: 0,
      explanation: "Basic oxides (e.g. CaO, Na2O) undergo neutralization reactions with acids (e.g. HCl, H2SO4) to form a salt and water."
    },
    {
      id: "chem15-72",
      question: "Which one of the following reactions represents the laboratory preparation of a volatile acid (HNO3) from its salt using a less volatile acid (H2SO4)?",
      options: [
        "CH3COOH(aq) + CH3OH(aq) → CH3CO2CH3(aq) + H2O(l)",
        "P2O5(s) + 6NaOH(aq) → 2Na3PO4(s) + 3H2O(l)",
        "NaNO3(s) + H2SO4(l) → NaHSO4(s) + HNO3(l)",
        "AgNO3(aq) + NaCl(aq) → NaNO3(aq) + AgCl(s)"
      ],
      correctAnswerIndex: 2,
      explanation: "Heating solid sodium nitrate with concentrated non-volatile sulfuric acid displaces the more volatile nitric acid vapor: NaNO3 + H2SO4 → NaHSO4 + HNO3."
    },
    {
      id: "chem15-73",
      question: "The negative logarithm (base ten) of the molar concentration of hydrogen ions [-log10[H+]] is known as:",
      options: [
        "pH",
        "Kw",
        "Ka",
        "pOH"
      ],
      correctAnswerIndex: 0,
      explanation: "By Sørensen's definition, pH = -log10[H+]."
    },
    {
      id: "chem15-74",
      question: "Which of the following electrochemical cells is an example of a RECHARGEABLE secondary cell?",
      options: [
        "Daniell cell",
        "Lead-acid storage battery",
        "Leclanché dry cell",
        "Zinc-carbon dry cell"
      ],
      correctAnswerIndex: 1,
      explanation: "Lead-acid automotive batteries are secondary cells whose electrochemical redox reactions can be reversed repeatedly by passing an electric current in the reverse direction."
    },
    {
      id: "chem15-75",
      question: "Which of the following is responsible for electrical conductivity in an electrolytic solution / molten salt?",
      options: [
        "Ions strongly held in a fixed position",
        "Free delocalized electrons",
        "Electrons held in a fixed position",
        "Directional migration of mobile cations and anions"
      ],
      correctAnswerIndex: 3,
      explanation: "Electrolytic conduction occurs via the physical translation and migration of positive cations to the cathode and negative anions to the anode."
    },
    {
      id: "chem15-76",
      question: "Which of the following statements is TRUE about ideal gases?",
      options: [
        "The particles of gases are closely packed together.",
        "The volume of a gas is kept constant as pressure increases.",
        "When a gas sample is heated at constant pressure, its volume increases (Charles's Law).",
        "The volume of a gas is equal to the volume of its container."
      ],
      correctAnswerIndex: 3,
      explanation: "Because gas particles fill their entire vessel homogeneously, the volume of a gas is defined as the internal volume of its containing vessel."
    },
    {
      id: "chem15-77",
      question: "Which of the following mathematical expressions is derived from the ideal gas law combining Boyle's, Charles's, and Avogadro's laws?",
      options: [
        "V ∝ nT / P",
        "V ∝ T / (nP)",
        "V ∝ nP / T",
        "V ∝ P / (nT)"
      ],
      correctAnswerIndex: 0,
      explanation: "Combining V ∝ 1/P (Boyle), V ∝ T (Charles), and V ∝ n (Avogadro) yields V ∝ (nT)/P, which leads directly to the ideal gas equation PV = nRT."
    },
    {
      id: "chem15-78",
      question: "180 g of CaCO3 (molar mass = 100 g/mol, 1.8 mol) is allowed to react with 156 g of HCl (molar mass = 36.5 g/mol, 4.27 mol) according to CaCO3 + 2HCl → CaCl2 + CO2 + H2O. Which substance is the LIMITING reagent?",
      options: [
        "HCl",
        "CaCO3",
        "H2O",
        "CO2"
      ],
      correctAnswerIndex: 1,
      explanation: "1.8 mol CaCO3 requires 1.8 * 2 = 3.6 mol HCl. Since 4.27 mol of HCl is available (in excess), CaCO3 will be completely consumed first and is the limiting reactant."
    },
    {
      id: "chem15-79",
      question: "Which type of structural isomerism is characterized by isomers differing in the arrangement of the carbon skeleton (chain branching)?",
      options: [
        "Geometric isomerism",
        "Position isomerism",
        "Cis-trans isomerism",
        "Chain (skeletal) isomerism"
      ],
      correctAnswerIndex: 3,
      explanation: "Chain (skeletal) isomers possess the same molecular formula but different connectivity in their continuous carbon backbones (e.g. n-butane vs isobutane)."
    },
    {
      id: "chem15-80",
      question: "Which of the following methods is commonly used in the organic chemistry laboratory for the preparation of alkynes (e.g. ethyne)?",
      options: [
        "Dehydration of alcohols with concentrated sulphuric acid.",
        "Heating of sodium salt of an organic acid with soda lime.",
        "Dehydrohalogenation of vicinal (adjacent) dihaloalkanes with strong base (e.g. alcoholic KOH or NaNH2).",
        "Hydrogenation of alkenes with a metal catalyst."
      ],
      correctAnswerIndex: 2,
      explanation: "Vicinal dihalides (e.g. 1,2-dibromoethane) undergo two successive E2 dehydrohalogenation eliminations when heated with alcoholic KOH or sodium amide to yield alkynes."
    }
  ]
};
