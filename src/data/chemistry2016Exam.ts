import { type Question } from '../services/geminiService';

export const chemistry2016Exam = {
  id: "euee-2016-chemistry",
  title: "2016 E.C. ESSLCE Chemistry Examination",
  subject: "Chemistry",
  grade: "Grade 12",
  timeLimit: 9000, // 150 minutes (2:30 hours)
  questions: [
    {
      id: "chem16-1",
      question: "What are the molecular formulae of an alkene and alkyne containing seven carbon atoms, respectively?",
      options: [
        "C7H14 and C7H12",
        "C7H16 and C7H14",
        "C7H14 and C7H16",
        "C7H12 and C7H14"
      ],
      correctAnswerIndex: 0,
      explanation: "Alkenes follow the general formula CnH2n (for n=7: C7H14 - heptene); alkynes follow CnH2n-2 (for n=7: C7H12 - heptyne)."
    },
    {
      id: "chem16-2",
      question: "Which of the following is the CORRECT method of preparation of alkenes in the laboratory?",
      options: [
        "Alkylation of sodium acetylide with a primary alkyl halide.",
        "Heating of sodium salt of an organic acid with soda lime.",
        "Reaction of halogenated alkane with sodium.",
        "Dehydration of alcohols with concentrated sulfuric acid."
      ],
      correctAnswerIndex: 3,
      explanation: "Acid-catalyzed dehydration of alcohols using concentrated H2SO4 at elevated temperatures (e.g. 170°C for ethanol) is a standard laboratory synthesis of alkenes."
    },
    {
      id: "chem16-3",
      question: "Which of the following is the CORRECT structure of benzene?",
      options: [
        "Bicyclic fused cyclohexane rings",
        "Cyclohexane ring with no double bonds",
        "Hexagonal ring with an inscribed delocalized circle (resonance hybrid)",
        "Open-chain conjugated hexatriene"
      ],
      correctAnswerIndex: 2,
      explanation: "Benzene (C6H6) is a planar hexagonal ring of six carbon atoms with a delocalized pi-electron ring, represented by a circle inscribed in a hexagon."
    },
    {
      id: "chem16-4",
      question: "Which of the following is the product of fractional distillation of crude oil?",
      options: [
        "Producer gas",
        "Naphthalene",
        "Water gas",
        "Kerosene"
      ],
      correctAnswerIndex: 3,
      explanation: "Kerosene (paraffin oil, C10–C16 fraction) is a direct petroleum fraction obtained from the industrial fractional distillation of crude oil."
    },
    {
      id: "chem16-5",
      question: "What is the molecular formula and IUPAC name of a saturated monocarboxylic acid having six carbon atoms?",
      options: [
        "C5H11COOH, heptanoic acid",
        "C6H13COOH, heptanoic acid",
        "C5H11COOH, hexanoic acid",
        "C6H13COOH, hexanoic acid"
      ],
      correctAnswerIndex: 2,
      explanation: "A 6-carbon saturated monocarboxylic acid is hexanoic acid. The carboxylic carbon counts as carbon 1, so the alkyl group has 5 carbons: C5H11COOH."
    },
    {
      id: "chem16-6",
      question: "Given the structure: CH3–C(=O)–O–CH3. What is the IUPAC name for this structure?",
      options: [
        "Methyl ethanoate",
        "Ethyl ethanoate",
        "Propyl formate",
        "Ethyl acetate"
      ],
      correctAnswerIndex: 0,
      explanation: "The ester formed from acetic acid (ethanoic acid) and methanol is named alkyl alkanoate: methyl ethanoate (common name: methyl acetate)."
    },
    {
      id: "chem16-7",
      question: "During summer, the average value for the temperature measured in a certain chemistry laboratory is 298.15 K. How many decimal places are there in the measured value?",
      options: [
        "5",
        "3",
        "2",
        "1"
      ],
      correctAnswerIndex: 2,
      explanation: "In the numerical value 298.15, there are 2 digits (.15) following the decimal point, representing two decimal places."
    },
    {
      id: "chem16-8",
      question: "Which of the following is the CORRECT Lewis electron - dot symbol of MgO? (Atomic number: Mg = 12 and O = 8)",
      options: [
        "Mg+ [:O:]2-",
        "Mg+2 [:O:]",
        "Mg+ [:O:]-",
        "Mg2+ [:O::]2- with complete octet on oxygen"
      ],
      correctAnswerIndex: 3,
      explanation: "Magnesium transfers its 2 valence electrons to oxygen forming the Mg2+ cation and an oxide anion [:O:]2- surrounded by an octet of 8 dots."
    },
    {
      id: "chem16-9",
      question: "A student collected four beakers: naphthalene in 1st, graphite in 2nd, iodine in 3rd, and alcohol in 4th. If they added equal volume of water and shook each beaker, which of the following will be their observation?",
      options: [
        "There will be dissolution in the first three beakers.",
        "Water will dissolve iodine rather than graphite.",
        "Water will dissolve the whole given chemicals in the four beakers.",
        "There will be dissolution of alcohol in the fourth beaker."
      ],
      correctAnswerIndex: 3,
      explanation: "Water is polar and forms hydrogen bonds with alcohol (ethanol), making alcohol completely miscible/soluble. Naphthalene, graphite, and iodine are nonpolar or network solids insoluble in water."
    },
    {
      id: "chem16-10",
      question: "Which of the following explanations about reversible and irreversible reactions is CORRECT?",
      options: [
        "A reaction that has only a forward reaction or a reverse reaction is known as a reversible chemical reaction.",
        "A reaction that proceeds from reactant to product and from product to reactant is known as an irreversible reaction.",
        "Chemical reactions that proceed only towards the formation of a product are known as irreversible reactions.",
        "Chemical reactions that proceed only towards the formation of a product are known as reversible reactions."
      ],
      correctAnswerIndex: 2,
      explanation: "Irreversible reactions proceed in only one direction until the limiting reactant is completely consumed."
    },
    {
      id: "chem16-11",
      question: "Consider: Step 1: Electrolysis of water and fractional distillation of air; Step 2: Passing hot mixture of gases through a condenser; Step 3: Introducing H2 and N2 into chamber with iron catalyst at 300-500°C and 15-25 MPa. Which is the CORRECT sequence for industrial Haber process?",
      options: [
        "Step 1 -> Step 3 -> Step 2",
        "Step 2 -> Step 3 -> Step 1",
        "Step 2 -> Step 1 -> Step 3",
        "Step 1 -> Step 2 -> Step 3"
      ],
      correctAnswerIndex: 0,
      explanation: "Feedstock gas production (Step 1) -> Catalytic reaction under high temp/pressure (Step 3) -> Cooling/condensation to liquefy NH3 (Step 2)."
    },
    {
      id: "chem16-12",
      question: "Which of the following is a physical property of nitric acid, HNO3?",
      options: [
        "On exposure to light, it turns brown.",
        "Nitric acid is a corrosive chemical.",
        "Nitric acid has a pungent smell.",
        "It forms large number of salts."
      ],
      correctAnswerIndex: 2,
      explanation: "Odor (pungent smell) is a physical property observable without changing the chemical identity of the substance."
    },
    {
      id: "chem16-13",
      question: "Which of the following is the CORRECT explanation about herbicides?",
      options: [
        "Selective herbicides control specific weed species, leaving the desired crop unharmed.",
        "Organochlorine compounds are the most common herbicide substances.",
        "Herbicides are substances that are used to control unwanted insects.",
        "Herbicides are substances that are used to enhance the growth of important plants."
      ],
      correctAnswerIndex: 0,
      explanation: "Selective herbicides kill target weed species while leaving agricultural crops unharmed."
    },
    {
      id: "chem16-14",
      question: "Given steps for traditional \"ARAKI\": Step 1: Distillation; Step 2: Adding water to dough for 1-2 days fermentation; Step 3: \"Bikel\" starter with Gesho powder; Step 4: Baking bread and mixing with starter. What is the correct sequence?",
      options: [
        "Step 2 -> Step 4 -> Step 3 -> Step 1",
        "Step 2 -> Step 3 -> Step 4 -> Step 1",
        "Step 3 -> Step 4 -> Step 2 -> Step 1",
        "Step 4 -> Step 3 -> Step 2 -> Step 1"
      ],
      correctAnswerIndex: 2,
      explanation: "Preparation of Bikel/Gesho starter (Step 3) -> Adding baked bread ingredients (Step 4) -> Water dilution & secondary fermentation (Step 2) -> Distillation (Step 1)."
    },
    {
      id: "chem16-15",
      question: "Which one of the following synthetic polymers is used to make squeeze bottles, plastic wrapping and electrical insulation?",
      options: [
        "Polypropylene",
        "Polymethyl methacrylate",
        "Polyvinylchloride",
        "Polyethylene"
      ],
      correctAnswerIndex: 3,
      explanation: "Polyethylene (LDPE and HDPE) is widely used for flexible squeeze bottles, plastic films/wraps, and dielectric wire insulation."
    },
    {
      id: "chem16-16",
      question: "Which of the following descriptions of the property of a covalent compound is CORRECT?",
      options: [
        "Covalent compounds have low melting and boiling points.",
        "Most covalent compounds are solids at room temperature.",
        "Most covalent compounds are soluble in water.",
        "Covalent compounds are non-volatile."
      ],
      correctAnswerIndex: 0,
      explanation: "Molecular covalent compounds have relatively weak intermolecular forces, resulting in low melting and boiling points."
    },
    {
      id: "chem16-17",
      question: "The attractive force between molecules is known as:",
      options: [
        "nuclear force",
        "intermolecular force",
        "lattice force",
        "intramolecular forces"
      ],
      correctAnswerIndex: 1,
      explanation: "Intermolecular forces (e.g., London dispersion, dipole-dipole, hydrogen bonding) are attractive forces acting between separate molecules."
    },
    {
      id: "chem16-18",
      question: "The hybridization of the central atom xenon (Xe) in xenon tetrafluoride, XeF4, is sp3d2. Which of the following is the shape of XeF4?",
      options: [
        "Octahedral",
        "Square planar",
        "Tetrahedral",
        "Seesaw shape"
      ],
      correctAnswerIndex: 1,
      explanation: "XeF4 has 6 electron pairs (4 bonding pairs + 2 lone pairs) in an octahedral electron geometry, giving a square planar molecular geometry."
    },
    {
      id: "chem16-19",
      question: "Which of the following is the CORRECT electron configuration of a peroxide ion, O2^2-?",
      options: [
        "(σ1s)^2 (σ*1s)^2 (σ2s)^2 (σ*2s)^2 (σ2px)^2 (π2py^2 = π2pz^2) (π*2py^2 = π*2pz^2) (σ*2x)^2",
        "(σ1s)^2 (σ*1s)^2 (σ2s)^2 (σ*2s)^2 (σ2px)^2 (π2py^2 = π2pz^2) (π*2py^2 = π*2pz^2)",
        "(σ1s)^2 (σ*1s)^2 (σ2s)^2 (σ*2s)^2 (σ2px)^2 (π2py^2 = π2pz^2) (π*2x)^2",
        "(σ1s)^2 (σ*1s)^2 (σ2s)^2 (σ*2s)^2 (σ2px)^2 (π2py^2 = π2pz^2)"
      ],
      correctAnswerIndex: 1,
      explanation: "Peroxide ion (O2^2-) has 18 total electrons. The molecular orbital configuration fills all bonding and antibonding orbitals through (π*2py)^2 = (π*2pz)^2 with a bond order of (10-8)/2 = 1."
    },
    {
      id: "chem16-20",
      question: "Consider: N2(g) + O2(g) -> 2NO(g). If the rate of disappearance of N2 is 2.5 x 10^-6 M/s, what is the rate of formation of NO?",
      options: [
        "5.0 x 10^-6 M/s",
        "1.25 x 10^-3 M/s",
        "2.50 x 10^-3 M/s",
        "2.50 x 10^-6 M/s"
      ],
      correctAnswerIndex: 0,
      explanation: "Rate = -d[N2]/dt = (1/2) d[NO]/dt. Therefore d[NO]/dt = 2 x 2.5 x 10^-6 = 5.0 x 10^-6 M/s."
    },
    {
      id: "chem16-21",
      question: "Which of the following is a Lewis acid?",
      options: [
        "SO4^2-",
        "SO3^2-",
        "BF3",
        "NH3"
      ],
      correctAnswerIndex: 2,
      explanation: "Boron trifluoride (BF3) has an incomplete octet (6 valence electrons around boron) and readily accepts an electron pair, acting as a classic Lewis acid."
    },
    {
      id: "chem16-22",
      question: "The pH of a 0.10 M solution of an aqueous solution of a certain acid is 3. What is the value of acid ionization constant (Ka) of this acid?",
      options: [
        "1.0 x 10^-7",
        "1.0 x 10^-5",
        "1.0 x 10^-3",
        "1.0 x 10^-1"
      ],
      correctAnswerIndex: 1,
      explanation: "[H+] = 10^-pH = 10^-3 M. Ka = [H+]^2 / [HA] = (10^-3)^2 / 0.10 = 10^-6 / 10^-1 = 1.0 x 10^-5."
    },
    {
      id: "chem16-23",
      question: "The shift in the position of equilibrium caused by the addition of an ion already involved in the reaction is known as:",
      options: [
        "common - ion effect",
        "buffer - ion effect",
        "hydrolysis - effect",
        "titration -effect"
      ],
      correctAnswerIndex: 0,
      explanation: "The common-ion effect describes the suppression of ionization or solubility caused by adding a common constituent ion."
    },
    {
      id: "chem16-24",
      question: "Which of the following is CORRECT about equivalents of acids and bases?",
      options: [
        "The volume of an acid or base required to reach equivalence point during acid - base titration reaction.",
        "The number of moles of an acid or base required to form a one molar aqueous acidic or basic solution.",
        "It is the amount of a substance that is required to react with one mole of hydroxide ions in redox reactions.",
        "It is the amount of a substance that is required to react with one mole of hydrogen ions in acid - base reactions."
      ],
      correctAnswerIndex: 3,
      explanation: "One equivalent of an acid supplies 1 mole of H+ ions; one equivalent of a base reacts with 1 mole of H+ ions (or provides 1 mole of OH-)."
    },
    {
      id: "chem16-25",
      question: "A 250 mL solution is formed from 24.5 g of sulfuric acid (H2SO4). What is the normality of this solution? (Molar mass H2SO4 = 98 g/mol)",
      options: [
        "4.00 N",
        "2.00 N",
        "0.250 N",
        "0.125 N"
      ],
      correctAnswerIndex: 1,
      explanation: "Equivalent weight of H2SO4 = 98 / 2 = 49 g/equiv. Number of equivalents = 24.5 / 49 = 0.5 equiv. Normality = equivalents / Volume (L) = 0.5 / 0.250 L = 2.00 N."
    },
    {
      id: "chem16-26",
      question: "Which of the following reaction is used for the preparation of bases?",
      options: [
        "Reaction of metal hydroxides with dilute acids.",
        "Reaction of active metal oxides with water.",
        "Heating of a salt with a non - volatile acid.",
        "Heating of carbonates with dilute acids."
      ],
      correctAnswerIndex: 1,
      explanation: "Basic metal oxides (e.g. Na2O, CaO) react with water to form basic metal hydroxides (e.g. Na2O + H2O -> 2NaOH)."
    },
    {
      id: "chem16-27",
      question: "Which of the following salts is used in the treatment of waste water?",
      options: [
        "CaCO3",
        "BaSO4",
        "FeCl3",
        "KNO3"
      ],
      correctAnswerIndex: 2,
      explanation: "Ferric chloride (FeCl3) is widely used as a coagulant and flocculating agent in wastewater purification and sewage treatment."
    },
    {
      id: "chem16-28",
      question: "A student dissolved 10 mL conc. HCl in 100 mL water (beaker 1) and 10 mL conc. CH3COOH in 100 mL water (beaker 2). Which of the following would occur?",
      options: [
        "In the first beaker, a large fraction of HCl dissociates into ions and in the second beaker, a small fraction of CH3COOH dissociates into ions.",
        "In the first beaker, a small fraction of HCl dissociates into ions and in the second beaker, a large fraction of CH3COOH dissociates into ions.",
        "There is no dissociation or ionization of the HCl and CH3COOH in both the first and second beakers.",
        "The amount of HCl dissociated in the first beaker and the amount of CH3COOH dissociated in the second beaker are identical."
      ],
      correctAnswerIndex: 0,
      explanation: "HCl is a strong acid that dissociates completely (100%), whereas CH3COOH is a weak acid that only partially ionizes into ions."
    },
    {
      id: "chem16-29",
      question: "Steps during extraction of aluminum from bauxite: I. Treating mixture with acid; II. Heating Al2O3 strongly in furnace; III. Heating ore with NaOH; IV. Conversion to soluble sodium aluminate; V. Electrolysis of molten cryolite + Al2O3. What is the CORRECT sequence?",
      options: [
        "III, IV, I, II and V",
        "IV, II, I, III and V",
        "V, I, II, IV and III",
        "II, I, III, IV and V"
      ],
      correctAnswerIndex: 0,
      explanation: "Bayer Process & Hall-Héroult: Digest bauxite in NaOH (III) -> Soluble NaAlO2 (IV) -> Acid precipitation to Al(OH)3 (I) -> Calcination to Al2O3 (II) -> Molten electrolysis (V)."
    },
    {
      id: "chem16-30",
      question: "Which of the following food preservation methods leaves a product without loss of aroma or flavor?",
      options: [
        "Vacuum - packing",
        "Freeze - drying",
        "Freezing",
        "Melting"
      ],
      correctAnswerIndex: 1,
      explanation: "Freeze-drying (lyophilization) sublimes ice under vacuum at low temperatures, preserving delicate aromas, flavors, and cellular structure."
    },
    {
      id: "chem16-31",
      question: "The electronic configuration of an element in the periodic table is 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5. In which block does this element belong?",
      options: [
        "f - block",
        "d - block",
        "p - block",
        "s - block"
      ],
      correctAnswerIndex: 2,
      explanation: "The outermost/highest-energy differentiating electron enters the 4p subshell (4p5), placing this element (Bromine, Z=35) in the p-block."
    },
    {
      id: "chem16-32",
      question: "A periodic property decreases across a period (left to right) and increases down a group (top to bottom). Which periodic property agrees with this trend?",
      options: [
        "Electronegativity",
        "Electron affinity",
        "Ionization energy",
        "Atomic radius"
      ],
      correctAnswerIndex: 3,
      explanation: "Atomic radius decreases across a period due to increasing effective nuclear charge and increases down a group due to additional electron shells."
    },
    {
      id: "chem16-33",
      question: "Which of the following is CORRECT about the formation of a covalent bond? A covalent bond is formed:",
      options: [
        "between positively and negatively charged ions.",
        "between mobile and stationary electrons.",
        "by the sharing of valence electrons.",
        "by the transfer of valence electrons."
      ],
      correctAnswerIndex: 2,
      explanation: "A covalent bond forms when two nonmetal atoms share one or more pairs of valence electrons."
    },
    {
      id: "chem16-34",
      question: "Carbon tetrachloride (CCl4) has four polar (C - Cl) bonds. However, CCl4 is a non-polar molecule. Which of the following explains the reason?",
      options: [
        "The molecule is non-polar because of the presence of four polar C-Cl bonds in the molecule.",
        "The molecule is non-polar because of the difference in electronegativity between carbon and chlorine.",
        "Even though the bond in CCl4 is polar, the net dipole moment of the molecule is different from zero.",
        "Even though the bond in CCl4 is polar, the net dipole moment of the molecule is zero."
      ],
      correctAnswerIndex: 3,
      explanation: "CCl4 possesses a symmetrical tetrahedral geometry where the four individual C-Cl bond dipoles cancel each other out vectorially, resulting in a net dipole moment of zero."
    },
    {
      id: "chem16-35",
      question: "Which of the following is responsible for the unusual high boiling points of HF, H2O and NH3?",
      options: [
        "London dispersion forces",
        "Hydrogen bonding",
        "Covalent bonding",
        "Ionic bonding"
      ],
      correctAnswerIndex: 1,
      explanation: "Hydrogen bonding between hydrogen and highly electronegative small atoms (F, O, N) creates exceptionally strong intermolecular attractions requiring high thermal energy to vaporize."
    },
    {
      id: "chem16-36",
      question: "From the assumption of kinetic molecular theory of gases, which of the following is CORRECT?",
      options: [
        "The pressure of a gas is the effect of the negligible volume of the gas compared to the total volume.",
        "The average kinetic energy of gas particles is inversely proportional to the absolute temperature.",
        "There are some forces of attraction or repulsion between gas particles.",
        "Under ordinary conditions, the total volume of gas molecules is much smaller than the total volume of gas."
      ],
      correctAnswerIndex: 3,
      explanation: "Kinetic Molecular Theory assumes gas molecules are point masses with negligible individual volume compared to the total container volume."
    },
    {
      id: "chem16-37",
      question: "Which of the following is CORRECT about the phase change observed in water?",
      options: [
        "Water starts to evaporate at the boiling point and condenses at the melting point.",
        "When a solid ice is heated, it is changed to liquid water without melting.",
        "At the boiling point temperature, water exists in three different physical states.",
        "At the melting point of ice, the temperature remains constant."
      ],
      correctAnswerIndex: 3,
      explanation: "During a phase transition (such as melting at 0°C), thermal energy goes into overcoming intermolecular forces as latent heat, keeping the temperature constant."
    },
    {
      id: "chem16-38",
      question: "Given symbols e- (electron), p+ (proton), and n0 (neutron), which of the following is the CORRECT comparison of their absolute masses?",
      options: [
        "Mass of e- > mass of p+ = mass of n0",
        "Mass of e- = mass of p+ > mass of n0",
        "Mass of e- < mass of p+ < mass of n0",
        "Mass of e- > mass of p+ > mass of n0"
      ],
      correctAnswerIndex: 2,
      explanation: "Electrons (9.109 x 10^-31 kg) are much lighter than protons (1.6726 x 10^-27 kg), which are slightly lighter than neutrons (1.6749 x 10^-27 kg)."
    },
    {
      id: "chem16-39",
      question: "In the modern periodic table, what is the name of the group that contains the most electronegative elements?",
      options: [
        "Alkali",
        "Halogens",
        "Chalcogens",
        "Noble gases"
      ],
      correctAnswerIndex: 1,
      explanation: "Group 17 (the Halogens: F, Cl, Br, I) contains the most electronegative reactive elements on the periodic table, led by Fluorine."
    },
    {
      id: "chem16-40",
      question: "A given element has atomic number 55 and mass number 133 (Cesium). Which of the following describes CORRECTLY the property of this element?",
      options: [
        "The non-metallic character of the element is high.",
        "The metallic character of the element is high.",
        "The element has high electron affinity.",
        "The element has high electronegativity."
      ],
      correctAnswerIndex: 1,
      explanation: "Cesium (Z=55, Group 1 alkali metal) is located near the bottom-left of the periodic table, exhibiting extremely high electropositive metallic character and low ionization energy."
    },
    {
      id: "chem16-41",
      question: "Consider decomposition of N2O5 to NO2: First step: 2N2O5 <=> N4O10 (fast); Second step: N4O10 -> N2O3 + 2NO2 + O3 (slow); Third step: N2O3 + O3 -> 2NO2 + O2 (fast). Which step is the rate-determining step?",
      options: [
        "Third step",
        "First step",
        "The overall step",
        "Second step"
      ],
      correctAnswerIndex: 3,
      explanation: "In any multi-step reaction mechanism, the slowest elementary step (Step 2) acts as the bottleneck and is the rate-determining step."
    },
    {
      id: "chem16-42",
      question: "Consider: N2(g) + O2(g) <=> 2NO(g). Equilibrium concentrations: [N2] = 1 x 10^-5 M, [O2] = 2 x 10^-5 M, and [NO] = 4 x 10^-5 M. What is the value of equilibrium constant Kc?",
      options: [
        "8",
        "2",
        "16",
        "4"
      ],
      correctAnswerIndex: 0,
      explanation: "Kc = [NO]^2 / ([N2][O2]) = (4 x 10^-5)^2 / ((1 x 10^-5)(2 x 10^-5)) = (16 x 10^-10) / (2 x 10^-10) = 8."
    },
    {
      id: "chem16-43",
      question: "N2(g) + 3H2(g) <=> 2NH3(g) with Kc = 12.4. If [N2] = 2.0 M, [H2] = 2.0 M, and [NH3] = 10.0 M, to which direction will the reaction proceed?",
      options: [
        "The reaction will proceed to the reverse direction.",
        "The reaction is at a chemical equilibrium.",
        "The equilibrium is independent of the concentration.",
        "The reaction will proceed to the forward direction."
      ],
      correctAnswerIndex: 3,
      explanation: "Reaction quotient Q = [NH3]^2 / ([N2][H2]^3) = (10.0)^2 / (2.0 x 2.0^3) = 100 / (2.0 x 8.0) = 100 / 16 = 6.25. Since Q (6.25) < Kc (12.4), the reaction proceeds in the forward direction."
    },
    {
      id: "chem16-44",
      question: "Which of the following is the general formula for saturated monocarboxylic acids? (R is an alkyl group)",
      options: [
        "R-CHO (Aldehyde)",
        "R-CO-R (Ketone)",
        "R-COO-R (Ester)",
        "R-COOH (Carboxylic acid)"
      ],
      correctAnswerIndex: 3,
      explanation: "Carboxylic acids contain a carbonyl group bonded to a hydroxyl group: R-C(=O)OH or R-COOH."
    },
    {
      id: "chem16-45",
      question: "Upon standing long, \"Tella\" or \"Tej\" turns sour. Which of the following is the CORRECT explanation for the observed effect?",
      options: [
        "The reduction of alcohol to an acid.",
        "The oxidation of alcohol to an acid.",
        "Addition reaction of alcohol with an acid.",
        "Decomposition reaction of alcohol."
      ],
      correctAnswerIndex: 1,
      explanation: "Acetobacter bacteria oxidize ethanol in fermented beverages into acetic acid (ethanoic acid) in the presence of atmospheric oxygen: C2H5OH + O2 -> CH3COOH + H2O."
    },
    {
      id: "chem16-46",
      question: "Steps in investigating a leaf: Step 1: Dried leaves in sunlight; Step 2: Evaluated work and drew conclusions; Step 3: Collected leaves; Step 4: Boiled leaves and collected extract; Step 5: Analyzed content with instrument. What is the CORRECT procedure?",
      options: [
        "Steps: 3 -> 5 -> 4 -> 1 -> 2",
        "Steps: 3 -> 4 -> 1 -> 5 -> 2",
        "Steps: 3 -> 1 -> 4 -> 5 -> 2",
        "Steps: 3 -> 1 -> 5 -> 4 -> 2"
      ],
      correctAnswerIndex: 2,
      explanation: "Sampling (Step 3) -> Sun drying (Step 1) -> Solvent extraction/boiling (Step 4) -> Instrumental chemical analysis (Step 5) -> Data evaluation and conclusions (Step 2)."
    },
    {
      id: "chem16-47",
      question: "Which of the following characteristics of an electromagnetic radiation is CORRECT?",
      options: [
        "The speed of an electromagnetic radiation decreases with increase in its wavelength.",
        "The speed of an electromagnetic radiation increases with increase in its frequency.",
        "The speed of an electromagnetic wave is independent of the nature of the medium it travels through in vacuum (constant c).",
        "The wave length of an electromagnetic radiation is directly proportional to its frequency."
      ],
      correctAnswerIndex: 2,
      explanation: "In a vacuum, all electromagnetic waves travel at the constant universal speed of light c = 3.0 x 10^8 m/s, where c = λν."
    },
    {
      id: "chem16-48",
      question: "\"The hydrogen atom moves in a fixed circular orbit associated with allowable energy states\". This is called:",
      options: [
        "Planck's theory",
        "Bohr's theory",
        "Pauli's principle",
        "Aufbau's principle"
      ],
      correctAnswerIndex: 1,
      explanation: "Niels Bohr proposed that electrons in hydrogen atoms revolve around the nucleus in quantized stationary circular orbits without radiating energy."
    },
    {
      id: "chem16-49",
      question: "Which of the following is the core electron configuration of the metal ion in ferric sulfate, Fe2(SO4)3? (Atomic Number of Fe = 26)",
      options: [
        "[Ar] 4s2 3d3",
        "[Ar] 4s2 3d6",
        "[Ar] 3d5",
        "[Ar] 3d4"
      ],
      correctAnswerIndex: 2,
      explanation: "In ferric sulfate, iron is in the +3 oxidation state (Fe3+). Neutral Fe is [Ar] 4s2 3d6. Losing 2 4s electrons and 1 3d electron gives Fe3+: [Ar] 3d5."
    },
    {
      id: "chem16-50",
      question: "A chemical bond that results from the attractive force between shared electrons and nonmetal nucleus is called:",
      options: [
        "covalent bond",
        "ionic bond",
        "hydrogen bond",
        "metallic bond"
      ],
      correctAnswerIndex: 0,
      explanation: "A covalent bond is electrostatic attraction between positively charged atomic nuclei and shared valence electron pairs."
    },
    {
      id: "chem16-51",
      question: "Which of the following is peroxide?",
      options: [
        "ZnO",
        "FeO",
        "K2O",
        "CaO2"
      ],
      correctAnswerIndex: 3,
      explanation: "Calcium peroxide (CaO2) contains the peroxide O2^2- anion with oxygen in the -1 oxidation state."
    },
    {
      id: "chem16-52",
      question: "Among the following which one is a ternary acid?",
      options: [
        "HBr",
        "HCl",
        "H2SO4",
        "H2S"
      ],
      correctAnswerIndex: 2,
      explanation: "A ternary acid (oxoacid) contains three different chemical elements (Hydrogen, Sulfur, and Oxygen in H2SO4). HBr, HCl, and H2S are binary acids."
    },
    {
      id: "chem16-53",
      question: "A student placed few drops of lemon juice on red and blue litmus papers. What will be their observation?",
      options: [
        "The blue litmus paper as well as the red litmus paper will maintain their color.",
        "The blue litmus paper and the red litmus paper will turn colorless.",
        "The red litmus paper will turn to blue and the blue litmus paper will maintain its color.",
        "The blue litmus paper will turn red and the red litmus paper will maintain its color."
      ],
      correctAnswerIndex: 3,
      explanation: "Lemon juice contains citric acid (acidic, pH < 7). Acids turn blue litmus paper red while leaving red litmus paper unchanged."
    },
    {
      id: "chem16-54",
      question: "What is the pOH of pure water at 37°C, where Kw equals 2.5 x 10^-14 and its pH is 6.8? (log 2.5 = 0.4)",
      options: [
        "8.8",
        "8.2",
        "6.8",
        "7.5"
      ],
      correctAnswerIndex: 2,
      explanation: "In pure water, autoionization yields equal concentrations: [H+] = [OH-], so pH = pOH = 6.8 (and pKw = pH + pOH = 13.6)."
    },
    {
      id: "chem16-55",
      question: "The hydrogen ion concentration in a certain solution at 25 °C is 1.0 x 10^-8 M. What is the pOH of this solution?",
      options: [
        "8",
        "10",
        "2",
        "6"
      ],
      correctAnswerIndex: 3,
      explanation: "pH = -log(1.0 x 10^-8) = 8. At 25°C, pH + pOH = 14, so pOH = 14 - 8 = 6."
    },
    {
      id: "chem16-56",
      question: "Given: H2S + HNO3 -> S + NO + H2O. Which of the following is CORRECT from the given equation?",
      options: [
        "The oxidation number of N is increased.",
        "The oxidation number of S is decreased.",
        "S is a reducing substance.",
        "HNO3 is an oxidizing agent."
      ],
      correctAnswerIndex: 3,
      explanation: "Nitrogen in HNO3 is reduced from +5 to +2 in NO, meaning HNO3 acts as the oxidizing agent (electron acceptor)."
    },
    {
      id: "chem16-57",
      question: "Consider an electrolytic cell containing molten MgCl2: Anode attracts Cl- and Cathode attracts Mg2+. Which of the following is CORRECT?",
      options: [
        "Oxidation takes place at the cathode.",
        "Reduction takes place at the anode.",
        "Magnesium ion is oxidizing agent in the electrode reaction.",
        "There is a decrease in oxidation number of chloride ion."
      ],
      correctAnswerIndex: 2,
      explanation: "At the cathode, Mg2+ gains electrons (reduction) to form Mg metal (Mg2+ + 2e- -> Mg), acting as the oxidizing agent."
    },
    {
      id: "chem16-58",
      question: "Which of the following is CORRECT about molten electrolytes and aqueous electrolytes?",
      options: [
        "The possible half reactions in molten electrolytes are more compared to aqueous electrolytes.",
        "Both molten and aqueous electrolytes involve preferential discharge of ions at each electrode.",
        "An electrolyte that conducts electricity when dissolved in a certain liquid is molten electrolyte.",
        "During the electrolysis of a molten electrolyte, the reduction of cations occurs at the cathode."
      ],
      correctAnswerIndex: 3,
      explanation: "In all electrolytic cells (molten or aqueous), cations migrate to the negatively charged cathode where they gain electrons (reduction)."
    },
    {
      id: "chem16-59",
      question: "Which of the following is NOT the industrial application of electrochemistry?",
      options: [
        "Electrolytic refining",
        "Electroplating",
        "Electromagnetism",
        "Electro synthesis"
      ],
      correctAnswerIndex: 2,
      explanation: "Electromagnetism is a branch of classical physics studying electromagnetic fields, not a chemical manufacturing application like electroplating or refining."
    },
    {
      id: "chem16-60",
      question: "Which of the following chemical industries is INCORRECTLY matched with its products?",
      options: [
        "Textile industry - glasses",
        "Beverage industry - alcohols",
        "Food industry - Biscuits",
        "Paper industry - cartons"
      ],
      correctAnswerIndex: 0,
      explanation: "Glass is manufactured by the glass/ceramics silicate industry, whereas the textile industry manufactures fabrics, yarns, and garments."
    },
    {
      id: "chem16-61",
      question: "A student added 25 mL AgNO3 (m1) to 50 mL NaCl (m2) and weighed the resulting mixture (m3). If he found that m3 = m1 + m2, which law is investigated?",
      options: [
        "Law of definite composition",
        "Law of multiple proportions",
        "Law of conservation of energy",
        "Law of conservation of mass"
      ],
      correctAnswerIndex: 3,
      explanation: "The Law of Conservation of Mass (Lavoisier) states that total mass of products equals total mass of reactants in a closed chemical system."
    },
    {
      id: "chem16-62",
      question: "A chemical reaction that releases heat energy to the surrounding is known as:",
      options: [
        "exothermic reaction",
        "endothermic reaction",
        "decomposition reaction",
        "combination reaction"
      ],
      correctAnswerIndex: 0,
      explanation: "An exothermic reaction releases thermal energy (enthalpy change ΔH < 0) to its surroundings."
    },
    {
      id: "chem16-63",
      question: "A type of reaction in which two compounds react together to form two or more products by exchanging reactant ions is known as:",
      options: [
        "Decomposition reaction",
        "Combination reaction",
        "Double Displacement reaction",
        "Single Displacement reaction"
      ],
      correctAnswerIndex: 2,
      explanation: "Double displacement (metathesis) reactions involve two ionic compounds exchanging partner ions: AB + CD -> AD + CB."
    },
    {
      id: "chem16-64",
      question: "\"At a given temperature and pressure, equal volumes of different gases contain equal number of molecules\", this is known as:",
      options: [
        "Charle's law",
        "Boyle's law",
        "Gay Lussac's law",
        "Avogadro's law"
      ],
      correctAnswerIndex: 3,
      explanation: "Avogadro's Law states that V ∝ n at constant temperature and pressure."
    },
    {
      id: "chem16-65",
      question: "Which of the following includes the preconditions required for a chemical reaction to occur?",
      options: [
        "Temperature, activation energy, proper orientation",
        "Temperature, pressure and proper orientation",
        "Activation energy, proper orientation and collision between reactants",
        "Activation energy, pressure and collision between reactants"
      ],
      correctAnswerIndex: 2,
      explanation: "According to Collision Theory, successful reactions require reactant collision with kinetic energy ≥ activation energy and proper spatial orientation."
    },
    {
      id: "chem16-66",
      question: "Consider: ZnCO3(s) -> ZnO(s) + CO2(g). The chemical reaction that takes place during the conversion of ZnCO3 is classified as:",
      options: [
        "decomposition reaction",
        "combination reaction",
        "double displacement reaction",
        "single displacement reaction"
      ],
      correctAnswerIndex: 0,
      explanation: "Thermal breakdown of a single compound into two simpler substances is a decomposition reaction."
    },
    {
      id: "chem16-67",
      question: "Given: CaCO3 + 2HCl -> CaCl2 + CO2 + H2O. If 40 g of CaCO3 reacts with 50 g of HCl, which is the limiting and excess reagent? (Ca=40, C=12, O=16, H=1, Cl=35.5)",
      options: [
        "HCl is limiting and CaCl2 is excess reagents.",
        "HCl is limiting and CaCO3 is excess reactants.",
        "CaCO3 is limiting and CaCl2 is excess reagents.",
        "CaCO3 is limiting and HCl is excess reactants."
      ],
      correctAnswerIndex: 3,
      explanation: "Moles of CaCO3 (MW=100) = 40/100 = 0.40 mol. Required HCl = 0.40 x 2 = 0.80 mol = 0.80 x 36.5 = 29.2 g. Available HCl = 50 g (> 29.2 g), so CaCO3 is limiting and HCl is in excess."
    },
    {
      id: "chem16-68",
      question: "A gas has a volume of 100 L at 27 °C (300 K) and 750 torr. The gas is expanded to a volume of 250 L at 200 torr. What is the final temperature of the gas?",
      options: [
        "-83 °C",
        "-73 °C",
        "-17 °C",
        "-273 °C"
      ],
      correctAnswerIndex: 1,
      explanation: "Combined gas law: (P1 V1)/T1 = (P2 V2)/T2. T2 = (P2 V2 T1)/(P1 V1) = (200 x 250 x 300) / (750 x 100) = 15,000,000 / 75,000 = 200 K. In Celsius: 200 - 273 = -73 °C."
    },
    {
      id: "chem16-69",
      question: "Which of the following is a CORRECT explanation of the given term?",
      options: [
        "Boiling point is the temperature at which the vapor pressure of the liquid equals the atmospheric pressure.",
        "Condensation is the process by which a liquid changes to a gas at the boiling point of the liquid.",
        "Normal boiling point is the temperature at which the liquid starts to be converted to the gaseous state.",
        "Heat of vaporization is the energy required to convert one gram of a solid to a gas at its boiling point."
      ],
      correctAnswerIndex: 0,
      explanation: "The boiling point of a liquid is the temperature at which its equilibrium vapor pressure equals the prevailing external atmospheric pressure."
    },
    {
      id: "chem16-70",
      question: "Which of the following is the general formula of alkenes?",
      options: [
        "CnH2n-2",
        "CnH2n+2",
        "CnHn",
        "CnH2n"
      ],
      correctAnswerIndex: 3,
      explanation: "Acyclic aliphatic alkenes containing one carbon-carbon double bond follow CnH2n."
    },
    {
      id: "chem16-71",
      question: "What are the two types of polymerizations?",
      options: [
        "Condensation and substitution polymerizations",
        "Addition and decomposition polymerizations",
        "Condensation and displacement polymerizations",
        "Addition and condensation polymerizations"
      ],
      correctAnswerIndex: 3,
      explanation: "Synthetic and natural polymers are classified into addition (chain-growth) polymers and condensation (step-growth) polymers."
    },
    {
      id: "chem16-72",
      question: "Which of the following is a monomer of natural rubber?",
      options: [
        "Ethylene terephthalate",
        "Styrene",
        "Hexamethylene diamine",
        "Isoprene"
      ],
      correctAnswerIndex: 3,
      explanation: "Natural rubber is cis-1,4-polyisoprene, formed from the polymerization of isoprene (2-methyl-1,3-butadiene)."
    },
    {
      id: "chem16-73",
      question: "The component of the environment consisting earth's upper outer most skin, and accessible to human beings is known as:",
      options: [
        "biosphere",
        "lithosphere",
        "hydrosphere",
        "atmosphere"
      ],
      correctAnswerIndex: 1,
      explanation: "The lithosphere is the solid outer crust and upper mantle of the Earth containing minerals and soil."
    },
    {
      id: "chem16-74",
      question: "Consider steps in nitrogen cycle: Step 1: Reduction of nitrate by microbial action; Step 2: Fixation of nitrogen by bacteria; Step 3: Nitrification by nitrosomas; Step 4: Denitrification of nitrate. What is the CORRECT sequence?",
      options: [
        "Step 2 -> Step 3 -> Step 4 -> Step 1",
        "Step 1 -> Step 2 -> Step 3 -> Step 4",
        "Step 2 -> Step 3 -> Step 1 -> Step 4",
        "Step 1 -> Step 3 -> Step 4 -> Step 2"
      ],
      correctAnswerIndex: 0,
      explanation: "Nitrogen Fixation (Step 2) -> Nitrification to nitrites/nitrates (Step 3) -> Denitrification / reduction (Step 4 & 1) returning N2 to atmosphere."
    },
    {
      id: "chem16-75",
      question: "Some hazardous substances damage and create unwanted changes in air, water, soil or any other natural resource. The resulting change created is known as:",
      options: [
        "afforestation",
        "pollution",
        "greenhouse effect",
        "global warming"
      ],
      correctAnswerIndex: 1,
      explanation: "Pollution is the introduction of harmful contaminants into the natural environment that cause adverse change."
    },
    {
      id: "chem16-76",
      question: "Given: CaCO3(s) <=> CaO(s) + CO2(g). What is the equilibrium constant expression for the above reaction?",
      options: [
        "Kc = [CaO][CO2]",
        "Kc = [CaO][CO2] / [CaCO3]",
        "Kc = [CO2]",
        "Kc = [CaO] / [CaCO3]"
      ],
      correctAnswerIndex: 2,
      explanation: "In heterogeneous equilibria, pure solids (CaCO3 and CaO) have constant activity (= 1) and are omitted from the equilibrium expression, leaving Kc = [CO2]."
    },
    {
      id: "chem16-77",
      question: "Which of the following statements is CORRECT regarding the properties of monocarboxylic acids?",
      options: [
        "Carboxylic acids react with active metals to form salt and hydrogen gas.",
        "The hydrolysis of carboxylic acids in water produces an ester and water.",
        "Carboxylic acids react with strong bases to form esters and water.",
        "Heating of carboxylic acid with alcohol produces salt and water."
      ],
      correctAnswerIndex: 0,
      explanation: "Carboxylic acids react with active electropositive metals (e.g. 2RCOOH + 2Na -> 2RCOONa + H2) releasing hydrogen gas."
    },
    {
      id: "chem16-78",
      question: "What is the scientific notation for 0.0000055?",
      options: [
        "55 x 10^-7",
        "5.5 x 10^-6",
        "55 x 10^-5",
        "5.5 x 10^-4"
      ],
      correctAnswerIndex: 1,
      explanation: "Moving the decimal point 6 places to the right gives 5.5 x 10^-6."
    },
    {
      id: "chem16-79",
      question: "A water molecule has two bond pairs and two lone pairs of electrons. Which of the following is CORRECT about these pairs of electrons?",
      options: [
        "The repulsion between the two bonding pairs is greater than the repulsion between the two lone pairs.",
        "The repulsion between the two lone pairs is greater than the repulsion between the two bonding pairs.",
        "Bonding pair - lone pair repulsion is greater than lone pair - lone pair repulsion.",
        "Lone pair - lone pair repulsion is exactly identical with bonding pair - bonding pair repulsion."
      ],
      correctAnswerIndex: 1,
      explanation: "According to VSEPR theory, electron repulsion magnitude follows: Lone Pair - Lone Pair > Lone Pair - Bond Pair > Bond Pair - Bond Pair."
    },
    {
      id: "chem16-80",
      question: "Which of the following CORRECTLY describes conjugate acids and conjugate bases?",
      options: [
        "Conjugate acid is a species formed after a removal of a proton from a base whereas conjugate base is formed after addition of proton to an acid.",
        "Conjugate base is a species formed after removal of a proton from an acid whereas conjugate acid is formed after addition of a proton to a base.",
        "Conjugate acid has one fewer hydrogen and one more minus charge than the corresponding acid.",
        "Conjugate base has one more hydrogen and one fewer minus charge than the corresponding base."
      ],
      correctAnswerIndex: 1,
      explanation: "Under Brønsted-Lowry acid-base theory, a conjugate base is formed when an acid donates/loses a proton (H+), while a conjugate acid is formed when a base accepts a proton."
    }
  ]
};
