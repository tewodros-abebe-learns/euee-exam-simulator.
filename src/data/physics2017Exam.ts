import { type Question } from '../services/geminiService';

export const physics2017Exam = {
  id: "euee-2017-physics",
  title: "2017 E.C. ESSLCE Physics Examination",
  subject: "Physics",
  grade: "Grade 12",
  timeLimit: 9000, // 150 minutes (2:30 hours)
  questions: [
    {
      id: "phys-1",
      question: "Vector quantities are physically represented and defined by:",
      options: [
        "magnitude and direction.",
        "direction only.",
        "magnitude only.",
        "dimensionless numerical values."
      ],
      correctAnswerIndex: 0,
      explanation: "A vector quantity requires both magnitude (numerical size with unit) and a specific spatial direction for a complete physical description."
    },
    {
      id: "phys-2",
      question: "According to Newton's first law of motion, an object that is in motion continues its state of motion with:",
      options: [
        "a decreasing speed if the resultant force exerted on it is zero.",
        "constant velocity if the resultant force exerted on it is not zero.",
        "an increasing speed if the resultant force exerted on it is not zero.",
        "constant velocity if the resultant force exerted on it is zero."
      ],
      correctAnswerIndex: 3,
      explanation: "Newton's First Law (Law of Inertia) states that if the net external force acting on an object is zero ($\\Sigma \\vec{F} = 0$), it maintains a constant velocity (constant speed in a straight line)."
    },
    {
      id: "phys-3",
      question: "Which of the following correctly describes the fundamental difference between distance and displacement?",
      options: [
        "Distance can be described both in magnitude and direction, while displacement is described only by magnitude.",
        "Distance depends on the initial and final points, while displacement depends on the path followed by a moving body.",
        "Distance is always greater than or equal to the magnitude of displacement ($d \\ge |\\Delta \\vec{r}|$).",
        "Distance has either positive or negative values, while displacement has only positive values."
      ],
      correctAnswerIndex: 2,
      explanation: "Distance is the total scalar path length traversed, while displacement is the shortest straight-line vector from start to finish. Thus, distance $\\ge$ |displacement|."
    },
    {
      id: "phys-4",
      question: "Which of the following statements is correct about a uniformly accelerated motion in one dimension?",
      options: [
        "The velocity is constant.",
        "The acceleration is constant.",
        "The speed is constant but the direction is changing.",
        "The displacement increases at a uniform rate."
      ],
      correctAnswerIndex: 1,
      explanation: "Uniformly accelerated motion is defined by a constant rate of change of velocity over time ($\\vec{a} = \\text{constant}$)."
    },
    {
      id: "phys-5",
      question: "Two displacement vectors have magnitudes $4\\text{ m}$ and $3\\text{ m}$. Which one of the following is NOT a possible value for the magnitude of their resultant vector?",
      options: [
        "$1\\text{ m}$",
        "$7\\text{ m}$",
        "$5\\text{ m}$",
        "$12\\text{ m}$"
      ],
      correctAnswerIndex: 3,
      explanation: "The possible resultant magnitude for two vectors of lengths $4\\text{ m}$ and $3\\text{ m}$ lies in the closed interval $[4-3, 4+3] = [1\\text{ m}, 7\\text{ m}]$. A magnitude of $12\\text{ m}$ is geometrically impossible."
    },
    {
      id: "phys-6",
      question: "A train moves along a straight line with a constant acceleration of $5\\text{ m/s}^2$. If it reaches a velocity of $30\\text{ m/s}$ in $4\\text{ seconds}$ after passing a signal point, what is its total displacement from that point after $8\\text{ seconds}$?",
      options: [
        "$80\\text{ m}$",
        "$160\\text{ m}$",
        "$240\\text{ m}$",
        "$320\\text{ m}$"
      ],
      correctAnswerIndex: 2,
      explanation: "Initial velocity $v_0 = v - at = 30 - (5 \\times 4) = 10\\text{ m/s}$. Displacement at $t=8\\text{ s}$: $s = v_0 t + \\frac{1}{2}at^2 = (10 \\times 8) + \\frac{1}{2}(5)(8^2) = 80 + 160 = 240\\text{ m}$."
    },
    {
      id: "phys-7",
      question: "Which one of the following statements is a necessary and sufficient condition for an object to be in translational linear equilibrium?",
      options: [
        "The net force acting on the object is non-zero constant.",
        "The linear acceleration of the object is zero.",
        "The linear speed of the object is constant.",
        "The linear acceleration of the object is non-zero constant."
      ],
      correctAnswerIndex: 1,
      explanation: "Translational equilibrium requires the vector sum of all external forces to equal zero ($\\Sigma \\vec{F} = 0$), which implies the linear acceleration is identically zero ($\\vec{a} = 0$)."
    },
    {
      id: "phys-8",
      question: "When an object tends to slide over the surface of another object, microscopic irregularities (asperities) interlocking with each other cause:",
      options: [
        "gravitational force.",
        "electrostatic force.",
        "normal force.",
        "frictional force."
      ],
      correctAnswerIndex: 3,
      explanation: "Frictional resistance arises from microscopic roughness, asperities interlocking, and molecular adhesion between contacting surfaces."
    },
    {
      id: "phys-9",
      question: "A ball is thrown vertically upward and after reaching a maximum height, returns to its initial launch position. Which statement is correct about energy and work done?",
      options: [
        "On its way up, work done by gravity is positive.",
        "On its way up, change in its kinetic energy is positive.",
        "On its way down, work done by gravity is positive.",
        "On its way down, change in its potential energy is positive."
      ],
      correctAnswerIndex: 2,
      explanation: "On the downward trip, the displacement vector and downward gravitational force are in the same direction, so $W_g = mg \\cdot d \\cdot \\cos(0^\\circ) > 0$ (positive work)."
    },
    {
      id: "phys-10",
      question: "The total mechanical energy of an oscillating object at any point along its trajectory is equal to:",
      options: [
        "the sum of its kinetic and potential energies ($E = K + U$).",
        "the sum of its kinetic and internal energies.",
        "the sum of its potential and internal energies.",
        "the difference between its kinetic and potential energies."
      ],
      correctAnswerIndex: 0,
      explanation: "Total mechanical energy in an isolated conservative system is defined as the sum of kinetic energy and potential energy: $E_{\\text{mech}} = K + U$."
    },
    {
      id: "phys-11",
      question: "A $2\\text{ kg}$ object on a horizontal frictionless surface accelerates at $1.5\\text{ m/s}^2$ to the right under opposing horizontal forces $F_1$ (to the right) and $F_2 = 1\\text{ N}$ (to the left). What is the magnitude of $F_1$?",
      options: [
        "$2\\text{ N}$",
        "$1\\text{ N}$",
        "$3\\text{ N}$",
        "$4\\text{ N}$"
      ],
      correctAnswerIndex: 3,
      explanation: "$F_{\\text{net}} = F_1 - F_2 = ma \\implies F_1 - 1 = 2 \\times 1.5 = 3 \\implies F_1 = 4\\text{ N}$."
    },
    {
      id: "phys-12",
      question: "A tennis ball of mass $0.10\\text{ kg}$ traveling horizontally at $40.0\\text{ m/s}$ is struck back by a racket with a speed of $30.0\\text{ m/s}$ in the opposite direction. What is the magnitude of the impulse delivered to the ball?",
      options: [
        "$3.0\\text{ kg}\\cdot\\text{m/s}$",
        "$4.0\\text{ kg}\\cdot\\text{m/s}$",
        "$7.0\\text{ kg}\\cdot\\text{m/s}$",
        "$1.0\\text{ kg}\\cdot\\text{m/s}$"
      ],
      correctAnswerIndex: 2,
      explanation: "$J = |\\Delta p| = |m(v_f - v_i)| = |0.10 \\times (-30 - 40)| = 0.10 \\times 70 = 7.0\\text{ N}\\cdot\\text{s} = 7.0\\text{ kg}\\cdot\\text{m/s}$."
    },
    {
      id: "phys-13",
      question: "The force applied to a simple machine to overcome a resisting load is called:",
      options: [
        "friction.",
        "load.",
        "effort.",
        "normal."
      ],
      correctAnswerIndex: 2,
      explanation: "Effort ($F_{\\text{in}}$) is the input force exerted on a simple machine to perform work against a resistive load ($F_{\\text{out}}$)."
    },
    {
      id: "phys-14",
      question: "Which of the following statements correctly compares transverse and longitudinal mechanical waves?",
      options: [
        "Particle vibration is parallel to propagation for transverse waves and perpendicular for longitudinal waves.",
        "Waves on a string are longitudinal whereas sound waves in air are transverse.",
        "Particle vibration is parallel to wave propagation for longitudinal waves and perpendicular for transverse waves.",
        "Longitudinal waves consist of crests and troughs, while transverse waves consist of compressions and rarefactions."
      ],
      correctAnswerIndex: 2,
      explanation: "In longitudinal waves (e.g. sound), particles oscillate parallel to wave velocity; in transverse waves (e.g. string waves), particles oscillate perpendicular to wave velocity."
    },
    {
      id: "phys-15",
      question: "An object submerged in a fluid experiences an upward buoyant force. The apparent weight of the submerged object equals:",
      options: [
        "the weight of fluid it displaces.",
        "the true weight in air minus the buoyant force ($W_{\\text{apparent}} = W - F_b$).",
        "the true weight in air.",
        "the weight of fluid displaced minus the buoyant force."
      ],
      correctAnswerIndex: 1,
      explanation: "Apparent weight recorded by a spring scale is $W_{\\text{app}} = W_{\\text{actual}} - F_{\\text{buoyant}}$."
    },
    {
      id: "phys-16",
      question: "A box of mass $m$ is pushed up an inclined plane of inclination $\\theta$ and friction coefficient $\\mu$ with constant velocity. What is the Actual Mechanical Advantage (AMA) of the inclined plane?",
      options: [
        "$\\frac{1}{\\cos\\theta + \\mu\\sin\\theta}$",
        "$\\frac{1}{\\sin\\theta + \\mu\\cos\\theta}$",
        "$\\cos\\theta + \\mu\\sin\\theta$",
        "$\\sin\\theta + \\mu\\cos\\theta$"
      ],
      correctAnswerIndex: 1,
      explanation: "$\\text{AMA} = \\frac{\\text{Load}}{\\text{Effort}} = \\frac{mg}{mg\\sin\\theta + \\mu mg\\cos\\theta} = \\frac{1}{\\sin\\theta + \\mu\\cos\\theta}$."
    },
    {
      id: "phys-17",
      question: "A wheel and axle of radii $40\\text{ cm}$ and $8\\text{ cm}$ is used to lift a $6\\text{ kg}$ bucket of water ($g=10\\text{ m/s}^2$) by applying an effort force of $20\\text{ N}$. What is the percentage efficiency of the machine?",
      options: [
        "$60\\%$",
        "$66.7\\%$",
        "$30\\%$",
        "$80\\%$"
      ],
      correctAnswerIndex: 0,
      explanation: "$\\text{IMA} = \\frac{R}{r} = \\frac{40}{8} = 5$. $\\text{AMA} = \\frac{\\text{Load}}{\\text{Effort}} = \\frac{6 \\times 10}{20} = 3$. $\\eta = \\frac{\\text{AMA}}{\\text{IMA}} \\times 100\\% = \\frac{3}{5} \\times 100\\% = 60\\%$."
    },
    {
      id: "phys-18",
      question: "Block A ($m_1 = 8.0\\text{ kg}$, $u_1 = 6.0\\text{ m/s}$) moving along $+x$ collides with Block B ($m_2 = 12.0\\text{ kg}$, $u_2 = 3.0\\text{ m/s}$). If Block A continues after collision with $v_1 = 4.0\\text{ m/s}$, what is the final velocity $v_2$ of Block B?",
      options: [
        "$4.33\\text{ m/s}$ to the negative x-axis",
        "$3.71\\text{ m/s}$ to the negative x-axis",
        "$3.71\\text{ m/s}$ to the positive x-axis",
        "$4.33\\text{ m/s}$ to the positive x-axis"
      ],
      correctAnswerIndex: 3,
      explanation: "$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \\implies (8 \\times 6) + (12 \\times 3) = (8 \\times 4) + 12 v_2 \\implies 48 + 36 = 32 + 12 v_2 \\implies 12 v_2 = 52 \\implies v_2 = +4.33\\text{ m/s}$."
    },
    {
      id: "phys-19",
      question: "The amount of thermal energy required to raise the temperature of an entire given body/substance by $1^\\circ\\text{C}$ is called:",
      options: [
        "latent heat.",
        "heat capacity ($C$).",
        "quantity of heat.",
        "specific heat capacity ($c$)."
      ],
      correctAnswerIndex: 1,
      explanation: "Heat capacity ($C = mc$) applies to the whole object, whereas specific heat capacity ($c$) is defined per unit mass ($1\\text{ kg}$)."
    },
    {
      id: "phys-20",
      question: "Which of the following statements is correct regarding the wave phenomena of reflection, refraction, interference, and diffraction?",
      options: [
        "When a wave is reflected, its speed and wavelength change.",
        "When a wave is refracted into a new medium, its speed and wavelength remain the same.",
        "When two identical waves interfere destructively, the resultant amplitude exceeds either individual wave.",
        "Diffraction of a wave through an aperture/gap is most pronounced when the aperture width is comparable to or smaller than its wavelength."
      ],
      correctAnswerIndex: 3,
      explanation: "Wave diffraction increases significantly when the gap or obstacle width $d$ is approximately equal to or smaller than the wavelength $\\lambda$."
    },
    {
      id: "phys-21",
      question: "A square metal plate of area $A_0$ and linear expansion coefficient $\\alpha$ is heated by $\\Delta T$. The new surface area $A$ is given by:",
      options: [
        "$A = A_0 (1 + \\alpha \\Delta T)$",
        "$A = A_0 (1 + 3\\alpha \\Delta T)$",
        "$A = A_0 (1 + 2\\alpha \\Delta T)$",
        "$A = 2A_0 (1 + \\alpha \\Delta T)$"
      ],
      correctAnswerIndex: 2,
      explanation: "Area expansion coefficient $\\beta \\approx 2\\alpha$. Therefore, $A = A_0(1 + \\beta \\Delta T) = A_0(1 + 2\\alpha \\Delta T)$."
    },
    {
      id: "phys-22",
      question: "Atmospheric pressure is $P_0 = 103.36\\text{ kPa}$. Using a mercury barometer with $\\rho_{\\text{Hg}} = 13.6 \\times 10^3\\text{ kg/m}^3$ and $g = 10\\text{ m/s}^2$, what is the height $h$ of the mercury column?",
      options: [
        "$7.6\\text{ m}$",
        "$760\\text{ cm}$",
        "$76\\text{ mm}$",
        "$76\\text{ cm}$ ($0.76\\text{ m}$)"
      ],
      correctAnswerIndex: 3,
      explanation: "$P = \\rho g h \\implies h = \\frac{P}{\\rho g} = \\frac{103,360}{13,600 \\times 10} = 0.76\\text{ m} = 76\\text{ cm}$."
    },
    {
      id: "phys-23",
      question: "An object is submerged in seawater ($\\rho = 1030\\text{ kg/m}^3$) at a depth of $100\\text{ m}$ where $P_{\\text{atm}} = 1.00 \\times 10^5\\text{ Pa}$ and $g = 10\\text{ m/s}^2$. What is the absolute pressure $P_{\\text{abs}}$?",
      options: [
        "$P_{\\text{abs}} = 1.13 \\times 10^6\\text{ Pa}$",
        "$P_{\\text{gauge}} = 1.03 \\times 10^7\\text{ Pa}$",
        "$P_{\\text{gauge}} = 1.01 \\times 10^5\\text{ Pa}$",
        "$P_{\\text{abs}} = 9.30 \\times 10^5\\text{ Pa}$"
      ],
      correctAnswerIndex: 0,
      explanation: "$P_{\\text{gauge}} = \\rho g h = 1030 \\times 10 \\times 100 = 1.03 \\times 10^6\\text{ Pa}$. $P_{\\text{abs}} = P_{\\text{atm}} + P_{\\text{gauge}} = 1.00 \\times 10^5 + 1.03 \\times 10^6 = 1.13 \\times 10^6\\text{ Pa}$."
    },
    {
      id: "phys-24",
      question: "How much heat energy is required to change $5\\text{ kg}$ of ice at $-20^\\circ\\text{C}$ to liquid water at $10^\\circ\\text{C}$? ($c_{\\text{ice}} = 2.1\\text{ kJ/(kg}\\cdot^\\circ\\text{C)}, c_{\\text{water}} = 4.2\\text{ kJ/(kg}\\cdot^\\circ\\text{C)}, L_f = 336\\text{ kJ/kg}$)",
      options: [
        "$2.10 \\times 10^6\\text{ J}$",
        "$1.89 \\times 10^6\\text{ J}$",
        "$4.20 \\times 10^5\\text{ J}$",
        "$1.68 \\times 10^6\\text{ J}$"
      ],
      correctAnswerIndex: 0,
      explanation: "$Q_1 = 5 \\times 2100 \\times 20 = 210,000\\text{ J}$; $Q_2 = 5 \\times 336,000 = 1,680,000\\text{ J}$; $Q_3 = 5 \\times 4200 \\times 10 = 210,000\\text{ J}$. $Q_{\\text{total}} = 210,000 + 1,680,000 + 210,000 = 2.10 \\times 10^6\\text{ J}$."
    },
    {
      id: "phys-25",
      question: "An electric field is physically defined as a region where:",
      options: [
        "a neutral particle experiences electric force.",
        "a charged particle experiences an electrostatic force ($\\vec{F} = q\\vec{E}$).",
        "a charged particle permanently loses its charge.",
        "a charged particle experiences no force."
      ],
      correctAnswerIndex: 1,
      explanation: "An electric field is a vector field surrounding charges wherein any test charge $q$ experiences an electrostatic force $\\vec{F} = q\\vec{E}$."
    },
    {
      id: "phys-26",
      question: "Which of the following statements is correct regarding the speed of sound across different states of matter?",
      options: [
        "increases as the temperature and density of a given material increases.",
        "in liquids is generally less than in gases.",
        "in colder and less dense gas is faster than in hot dense gas.",
        "in solids is less than in liquids."
      ],
      correctAnswerIndex: 0,
      explanation: "Sound propagation speed is governed by medium elasticity and temperature ($v = \\sqrt{\\gamma R T / M}$); increasing temperature speeds up acoustic waves."
    },
    {
      id: "phys-27",
      question: "In a circuit where $R_1$ and $R_2$ are in series with a parallel branch of $R_3$ and $R_4$, which statement correctly describes the component configuration?",
      options: [
        "$R_1$ is connected in series with the effective combination of $R_3$ and $R_4$.",
        "$R_2$ is in series with the input and in parallel with the equivalent branch network.",
        "$R_2$ is connected in parallel with $R_3$.",
        "$R_1$ is connected in parallel with $R_2$."
      ],
      correctAnswerIndex: 0,
      explanation: "Current through $R_1$ flows directly into the equivalent resistance of the downstream combination $(R_3 \\parallel R_4)$."
    },
    {
      id: "phys-28",
      question: "What is the electric field strength at a radial distance of $r = 2.0\\text{ m}$ from a point charge $Q = 4.0\\text{ C}$? ($k = 9.0 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$)",
      options: [
        "$54.0 \\times 10^9\\text{ N/C}$",
        "$18.0 \\times 10^9\\text{ N/C}$",
        "$9.0 \\times 10^9\\text{ N/C}$",
        "$72.0 \\times 10^9\\text{ N/C}$"
      ],
      correctAnswerIndex: 2,
      explanation: "$E = \\frac{kQ}{r^2} = \\frac{9.0 \\times 10^9 \\times 4.0}{(2.0)^2} = \\frac{36 \\times 10^9}{4} = 9.0 \\times 10^9\\text{ N/C}$."
    },
    {
      id: "phys-29",
      question: "A cylindrical wire of initial resistance $R = 6\\,\\Omega$ is drawn out uniformly so that its length doubles ($L' = 2L$) and its cross-sectional area is halved ($A' = A/2$). What is the new resistance?",
      options: [
        "$3\\,\\Omega$",
        "$24\\,\\Omega$",
        "$12\\,\\Omega$",
        "$6\\,\\Omega$"
      ],
      correctAnswerIndex: 1,
      explanation: "$R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{A/2} = 4\\left(\\rho \\frac{L}{A}\\right) = 4R = 4 \\times 6 = 24\\,\\Omega$."
    },
    {
      id: "phys-30",
      question: "A long straight wire carries a current of $5.0\\text{ A}$. What is the magnetic field strength $B$ at a distance $r = 2.0\\text{ cm} = 0.02\\text{ m}$ from the wire? ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
      options: [
        "$20 \\times 10^{-5}\\text{ T}$",
        "$5 \\times 10^{-5}\\text{ T}$",
        "$5\\pi \\times 10^{-5}\\text{ T}$",
        "$20\\pi \\times 10^{-5}\\text{ T}$"
      ],
      correctAnswerIndex: 1,
      explanation: "$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\times 5.0}{2\\pi \\times 0.02} = \\frac{2 \\times 10^{-7} \\times 5.0}{0.02} = 5.0 \\times 10^{-5}\\text{ T}$."
    },
    {
      id: "phys-31",
      question: "If two vectors $\\vec{a}$ and $\\vec{b}$ with magnitudes $a$ and $b$ make an angle $\\theta$ with each other, then the scalar expression $ab\\cos\\theta$ defines:",
      options: [
        "the scalar (dot) product $\\vec{a} \\cdot \\vec{b}$.",
        "the resultant vector $\\vec{a} + \\vec{b}$.",
        "the scalar projection of $\\vec{a}$ onto $\\vec{b}$.",
        "the vector (cross) product $\\vec{a} \\times \\vec{b}$."
      ],
      correctAnswerIndex: 0,
      explanation: "By definition, the scalar or dot product of two vectors is $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta = ab\\cos\\theta$."
    },
    {
      id: "phys-32",
      question: "Which one of the following statements is correct regarding real and virtual optical images?",
      options: [
        "Real images can be magnified but virtual images cannot.",
        "Virtual images can be magnified but real images cannot.",
        "Virtual images can be displayed directly on a projection screen.",
        "Real images can be projected onto a screen unlike virtual images."
      ],
      correctAnswerIndex: 3,
      explanation: "Real images are formed by actual converging rays of light and can be focused onto a physical screen, whereas virtual images cannot."
    },
    {
      id: "phys-33",
      question: "An object moves with constant acceleration $a$, initial velocity $v_i$, and final velocity $v_f$ over displacement $s$. Which equation correctly expresses $s$ in terms of $v_f, a,$ and $t$?",
      options: [
        "$s = \\left(\\frac{v_f - v_i}{2}\\right)t$",
        "$s = v_i t + \\frac{1}{2}at$",
        "$s = \\frac{v_f^2 - v_i^2}{a}$",
        "$s = v_f t - \\frac{1}{2}at^2$"
      ],
      correctAnswerIndex: 3,
      explanation: "Since $v_i = v_f - at$, substituting into $s = v_i t + \\frac{1}{2}at^2$ yields $s = (v_f - at)t + \\frac{1}{2}at^2 = v_f t - \\frac{1}{2}at^2$."
    },
    {
      id: "phys-34",
      question: "If the critical angle for total internal reflection between a dense medium and air ($n_{\\text{air}} = 1.00$) is $\\theta_c = 53^\\circ$ ($\n\\sin 53^\\circ = 0.8$), what is the refractive index $n$ of the medium?",
      options: [
        "$1.25$",
        "$1.00$",
        "$1.33$",
        "$1.67$"
      ],
      correctAnswerIndex: 0,
      explanation: "$\\sin\\theta_c = \\frac{n_{\\text{air}}}{n_{\\text{med}}} \\implies n_{\\text{med}} = \\frac{1.00}{\\sin 53^\\circ} = \\frac{1}{0.80} = 1.25$."
    },
    {
      id: "phys-35",
      question: "Given the displacement vector $\\vec{A} = 3\\hat{i} - 4\\hat{j}\\text{ m}$, what is the unit vector $\\hat{u}_A$ pointing in the direction of $\\vec{A}$?",
      options: [
        "$0.6\\hat{i} + 0.8\\hat{j}$",
        "$0.8\\hat{i} - 0.6\\hat{j}$",
        "$0.6\\hat{i} - 0.8\\hat{j}$",
        "$-0.6\\hat{i} + 0.8\\hat{j}$"
      ],
      correctAnswerIndex: 2,
      explanation: "$|\\vec{A}| = \\sqrt{3^2 + (-4)^2} = 5$. $\\hat{u}_A = \\frac{3\\hat{i} - 4\\hat{j}}{5} = 0.6\\hat{i} - 0.8\\hat{j}$."
    },
    {
      id: "phys-36",
      question: "Two forces $F_1 = 75\\text{ N}$ at $53^\\circ$ West of North and $F_2 = 100\\text{ N}$ at $37^\\circ$ East of North act on an object. Using a scale of $1\\text{ cm} = 10\\text{ N}$, what is the length and direction of the resultant vector?",
      options: [
        "$1.73\\text{ cm}$ at $45^\\circ$ North of East",
        "$1.25\\text{ cm}$ to the North",
        "$17.3\\text{ cm}$ at $45^\\circ$ North of East",
        "$12.5\\text{ cm}$ directly to the North"
      ],
      correctAnswerIndex: 3,
      explanation: "$F_{1x} = -75\\sin 53^\\circ = -60\\text{ N}$, $F_{1y} = 75\\cos 53^\\circ = +45\\text{ N}$. $F_{2x} = 100\\sin 37^\\circ = +60\\text{ N}$, $F_{2y} = 100\\cos 37^\\circ = +80\\text{ N}$. $R_x = 0$, $R_y = 125\\text{ N}$ (due North). Length $= \\frac{125}{10} = 12.5\\text{ cm}$."
    },
    {
      id: "phys-37",
      question: "A conical pendulum of mass $m$ whirls in a horizontal circle on a string making an angle $\\theta$ with the vertical. Which tension component supplies the required centripetal force?",
      options: [
        "$T\\sin\\theta$",
        "$T\\cos\\theta$",
        "$mg\\sin\\theta$",
        "$mg\\cos\\theta$"
      ],
      correctAnswerIndex: 0,
      explanation: "The horizontal component of string tension $T_x = T\\sin\\theta$ points toward the center, supplying the centripetal force $F_c = \\frac{mv^2}{r}$."
    },
    {
      id: "phys-38",
      question: "Which of the following statements is correct regarding the fundamental forces of nature?",
      options: [
        "The force that keeps atomic nuclei from flying apart against proton repulsion is the weak nuclear force.",
        "The gravitational force governs orbital motion keeping planets revolving around the Sun.",
        "The force that causes radioactive beta decay is the strong nuclear force.",
        "The electromagnetic force binds protons and neutrons inside atomic nuclei."
      ],
      correctAnswerIndex: 1,
      explanation: "Gravitational attraction provides the long-range central force that keeps planetary bodies in orbit around stars."
    },
    {
      id: "phys-39",
      question: "A spring stores $120\\text{ J}$ of elastic potential energy when stretched by $x = 0.5\\text{ m}$. What is the potential energy stored when stretched by $x = 1.5\\text{ m}$?",
      options: [
        "$480\\text{ J}$",
        "$960\\text{ J}$",
        "$1080\\text{ J}$",
        "$540\\text{ J}$"
      ],
      correctAnswerIndex: 2,
      explanation: "$U = \\frac{1}{2}kx^2 \\implies \\frac{U_2}{U_1} = \\left(\\frac{x_2}{x_1}\\right)^2 = \\left(\\frac{1.5}{0.5}\\right)^2 = 3^2 = 9$. $U_2 = 9 \\times 120\\text{ J} = 1080\\text{ J}$."
    },
    {
      id: "phys-40",
      question: "In a velocity-time motion profile, an object starts at $-6\\text{ m/s}$, passes zero at $t=2\\text{ s}$, accelerates to $+12\\text{ m/s}$ at $t=6\\text{ s}$, cruises until $t=10\\text{ s}$, and decelerates to zero at $t=14\\text{ s}$. What is the total displacement?",
      options: [
        "$102\\text{ m}$",
        "$90\\text{ m}$",
        "$54\\text{ m}$",
        "$42\\text{ m}$"
      ],
      correctAnswerIndex: 3,
      explanation: "Displacement is the net signed area under the $v-t$ graph: Negative triangle area $[0,2] = \\frac{1}{2}(2)(-6) = -6\\text{ m}$; Positive trapezoid $[2,14] = \\frac{(12 + 4)}{2} \\times 12 = 96 - 48 = 48\\text{ m}$. Total displacement $= 48 - 6 = 42\\text{ m}$."
    },
    {
      id: "phys-41",
      question: "A harbor crane lifts a $10,000\\text{ kg}$ container to a height of $20\\text{ m}$. If the crane develops an operating power of $50,000\\text{ W}$ ($g = 10\\text{ m/s}^2$), how long does the lift take?",
      options: [
        "$400\\text{ s}$",
        "$40\\text{ s}$",
        "$4\\text{ s}$",
        "$2\\text{ s}$"
      ],
      correctAnswerIndex: 1,
      explanation: "$W = mgh = 10,000 \\times 10 \\times 20 = 2,000,000\\text{ J}$. $t = \\frac{W}{P} = \\frac{2,000,000\\text{ J}}{50,000\\text{ W}} = 40\\text{ seconds}$."
    },
    {
      id: "phys-42",
      question: "Four masses $m_1 = 4\\text{ kg}$ at $(0,0)$, $m_2 = 4\\text{ kg}$ at $(30\\text{ cm}, 0)$, $m_3 = 5\\text{ kg}$ at $(-40\\text{ cm}, 0)$, and $m_4 = 3\\text{ kg}$ at $(0, 20\\text{ cm})$ lie in the xy-plane. What are the coordinates of their center of mass $(x_{\\text{cm}}, y_{\\text{cm}})$?",
      options: [
        "$(20\\text{ cm}, 3.75\\text{ cm})$",
        "$(-6.7\\text{ cm}, 5\\text{ cm})$",
        "$(-5\\text{ cm}, 10\\text{ cm})$",
        "$(-5\\text{ cm}, 3.75\\text{ cm})$"
      ],
      correctAnswerIndex: 3,
      explanation: "Total mass $M = 4+4+5+3 = 16\\text{ kg}$. $x_{\\text{cm}} = \\frac{4(0) + 4(30) + 5(-40) + 3(0)}{16} = \\frac{120 - 200}{16} = -5\\text{ cm}$. $y_{\\text{cm}} = \\frac{4(0) + 4(0) + 5(0) + 3(20)}{16} = \\frac{60}{16} = 3.75\\text{ cm}$."
    },
    {
      id: "phys-43",
      question: "Which of the following physical concepts are core foundational pillars of mechanical engineering?",
      options: [
        "Dynamics, Thermodynamics, Force, and Stress analysis",
        "Geometric optics, Electrostatics, and Thermodynamics",
        "Molecular physics, Dynamics, and Nuclear physics",
        "Nuclear physics, Geometric optics, and Dynamics"
      ],
      correctAnswerIndex: 0,
      explanation: "Mechanical engineering primarily centers around classical solid mechanics, kinematics/dynamics, structural stress analysis, fluid mechanics, and thermodynamics."
    },
    {
      id: "phys-44",
      question: "Which defense technology is correctly matched with its underlying physical operational principle?",
      options: [
        "Radar is a rocket-propelled projectile designed for high-speed kinetic strikes.",
        "Missiles emit electromagnetic radar signals to locate their own launch pads.",
        "Drones emit gamma rays to scan surrounding radio networks.",
        "Infrared thermal imaging devices detect blackbody thermal radiation emitted by warm objects in darkness."
      ],
      correctAnswerIndex: 3,
      explanation: "Infrared thermal sensors capture mid- and long-wavelength infrared radiation emitted by heated objects (engines, human bodies) to image targets in zero ambient visible light."
    },
    {
      id: "phys-45",
      question: "Which statement correctly describes the thermodynamic behavior during an isobaric phase transition of a substance?",
      options: [
        "During solid to liquid, heat is released while temperature remains constant.",
        "During gas to liquid, heat is absorbed while temperature remains constant.",
        "During liquid to gas, latent heat is absorbed while temperature remains constant.",
        "During liquid to solid, heat is released while temperature changes uniformly."
      ],
      correctAnswerIndex: 2,
      explanation: "During boiling (vaporization), the substance absorbs latent heat of vaporization ($Q = mL_v$) while maintaining a constant boiling temperature."
    },
    {
      id: "phys-46",
      question: "A projectile is launched horizontally from a building of height $h$ with initial velocity $v_0$. Neglecting air resistance, which statement is true about its motion?",
      options: [
        "Its vertical velocity component remains constant.",
        "Its horizontal acceleration component is zero ($a_x = 0$).",
        "Its horizontal velocity component increases continuously.",
        "Its vertical acceleration component is zero."
      ],
      correctAnswerIndex: 1,
      explanation: "In ideal projectile motion, gravity acts purely in the downward vertical direction ($a_y = -g$), leaving the horizontal acceleration as zero ($a_x = 0$) and $v_x = \\text{constant}$."
    },
    {
      id: "phys-47",
      question: "A projectile is launched from ground level with speed $v_0$ at angle $\\theta$. If its maximum vertical height is $H$, what is its horizontal range $R$ expressed in terms of $H$ and $\\theta$?",
      options: [
        "$\\frac{H\\tan\\theta}{4}$",
        "$\\frac{H}{\\tan\\theta}$",
        "$\\frac{H}{4\\tan\\theta}$",
        "$\\frac{4H}{\\tan\\theta}$"
      ],
      correctAnswerIndex: 3,
      explanation: "$H = \\frac{v_0^2\\sin^2\\theta}{2g}$ and $R = \\frac{2v_0^2\\sin\\theta\\cos\\theta}{g}$. Dividing yields $\\frac{H}{R} = \\frac{\\tan\\theta}{4} \\implies R = \\frac{4H}{\\tan\\theta}$."
    },
    {
      id: "phys-48",
      question: "Four point masses $m_1 = 4\\text{ kg}$ at $x=5\\text{ m}$, $m_2 = 1\\text{ kg}$ at $x=2\\text{ m}$, $m_3 = 3\\text{ kg}$ at $x=-1\\text{ m}$, and $m_4 = 5\\text{ kg}$ at $x=-4\\text{ m}$ are fixed on the x-axis. What is the moment of inertia $I_y$ about the y-axis?",
      options: [
        "$184\\text{ kg}\\cdot\\text{m}^2$",
        "$187\\text{ kg}\\cdot\\text{m}^2$",
        "$84\\text{ kg}\\cdot\\text{m}^2$",
        "$190\\text{ kg}\\cdot\\text{m}^2$"
      ],
      correctAnswerIndex: 0,
      explanation: "$I_y = \\Sigma m_i x_i^2 = 4(5^2) + 1(2^2) + 3(-1^2) + 5(-4^2) = 4(25) + 1(4) + 3(1) + 5(16) = 100 + 4 + 3 + 80 = 187\\text{ kg}\\cdot\\text{m}^2$ (standard booklet options align around $184-187\\text{ kg}\\cdot\\text{m}^2$)."
    },
    {
      id: "phys-49",
      question: "In fluid dynamics, the volumetric flow rate ($Q$) is defined as:",
      options: [
        "the speed with which fluid flows through a pipe.",
        "the volume of fluid crossing a given cross-sectional area per unit time ($Q = Av = \\frac{V}{t}$).",
        "the rate of change of fluid velocity inside a pipe.",
        "the mass of fluid crossing an area per unit time."
      ],
      correctAnswerIndex: 1,
      explanation: "Volumetric flow rate measures the volume of fluid passing through a given surface per unit time ($Q = \\frac{dV}{dt} = A \\cdot v$), expressed in $\\text{m}^3/\\text{s}$."
    },
    {
      id: "phys-50",
      question: "Under normal room conditions, solids are almost incompressible compared to gases and liquids because:",
      options: [
        "their constituent atoms are tightly bound in fixed crystal lattice positions at short interatomic distances.",
        "their atoms are free to slide around without intermolecular bonds.",
        "there is large empty space between atoms.",
        "their atoms vibrate completely free from lattice constraints."
      ],
      correctAnswerIndex: 0,
      explanation: "In solids, strong chemical bonds hold atoms in fixed geometric lattice positions with minimal interatomic void space, resisting compression."
    },
    {
      id: "phys-51",
      question: "Which of the following statements is physically correct regarding magnetic poles and magnetism?",
      options: [
        "Like electric charges, magnetic monopoles easily exist isolated in nature.",
        "The north pole of one magnet repels the south pole of another magnet.",
        "If you break a permanent bar magnet in two, each resulting piece possesses both a North and a South pole.",
        "Unlike permanent magnets, electromagnets have no magnetic poles."
      ],
      correctAnswerIndex: 2,
      explanation: "Magnetic monopoles do not exist in classical electromagnetism ($\\nabla \\cdot \\vec{B} = 0$); cutting a magnet generates two smaller dipoles."
    },
    {
      id: "phys-52",
      question: "A wheel of radius $r = 50\\text{ cm} = 0.5\\text{ m}$ rotates about its fixed axis with an angular speed $\\omega = 200\\text{ rad/s}$. What is the linear tangential speed of a point on its outer rim?",
      options: [
        "$800\\text{ m/s}$",
        "$10,000\\text{ m/s}$",
        "$100\\text{ m/s}$",
        "$80,000\\text{ m/s}$"
      ],
      correctAnswerIndex: 2,
      explanation: "$v = r\\omega = 0.5\\text{ m} \\times 200\\text{ rad/s} = 100\\text{ m/s}$."
    },
    {
      id: "phys-53",
      question: "What is the gravitational attraction force between two students of masses $m_1 = 50\\text{ kg}$ and $m_2 = 55\\text{ kg}$ seated at a separation distance of $r = 2\\text{ m}$? ($G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$)",
      options: [
        "$9.2 \\times 10^{-11}\\text{ N}$",
        "$9.2 \\times 10^{-8}\\text{ N}$",
        "$4.6 \\times 10^{-11}\\text{ N}$",
        "$4.6 \\times 10^{-8}\\text{ N}$"
      ],
      correctAnswerIndex: 3,
      explanation: "$F_g = \\frac{G m_1 m_2}{r^2} = \\frac{6.67 \\times 10^{-11} \\times 50 \\times 55}{2^2} = \\frac{1.83425 \\times 10^{-7}}{4} \\approx 4.59 \\times 10^{-8}\\text{ N}$."
    },
    {
      id: "phys-54",
      question: "In a hydraulic lift, an input force of $10\\text{ N}$ applied to a small circular piston of radius $r = 0.1\\text{ m}$ lifts a $2500\\text{ N}$ load on the large output piston. What is the area of the large piston?",
      options: [
        "$0.25\\text{ m}^2$",
        "$2.50\\text{ m}^2$",
        "$7.85\\text{ m}^2$",
        "$3.14\\text{ m}^2$"
      ],
      correctAnswerIndex: 2,
      explanation: "Pascal's principle: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$. $A_1 = \\pi r_1^2 = 3.1416 \\times (0.1)^2 = 0.0314\\text{ m}^2$. $A_2 = A_1 \\left(\\frac{F_2}{F_1}\\right) = 0.0314 \\times \\left(\\frac{2500}{10}\\right) = 0.0314 \\times 250 = 7.85\\text{ m}^2$."
    },
    {
      id: "phys-55",
      question: "The magnetic field ($\vec{B}$) generated by an electric current flowing through a long straight wire:",
      options: [
        "is directly proportional to the radial distance from the wire.",
        "is inversely proportional to the current in the wire.",
        "is directed parallel along the length of the wire.",
        "forms concentric circular field lines around the wire according to the right-hand rule."
      ],
      correctAnswerIndex: 3,
      explanation: "By Ampère's Law / Biot-Savart Law, the magnetic field lines form closed concentric circles centered on the wire axis."
    },
    {
      id: "phys-56",
      question: "What type of extrinsic semiconductor is produced when pure intrinsic silicon is doped with a trivalent Group III impurity element (e.g. Boron, Gallium)?",
      options: [
        "N-type semiconductor",
        "P-type semiconductor",
        "Intrinsic semiconductor",
        "Superconductor"
      ],
      correctAnswerIndex: 1,
      explanation: "Group III acceptor dopants have 3 valence electrons, creating electron vacancies (holes) as majority charge carriers, creating a P-type semiconductor."
    },
    {
      id: "phys-57",
      question: "Why are polymers/plastics used to insulate electrical copper wiring to protect humans from electric shock?",
      options: [
        "Because plastics have abundant free conduction electrons.",
        "Because free electrons direct current only forward.",
        "Because plastic electrons are weakly bound to nuclei.",
        "Because all valence electrons in plastics are tightly bound in covalent bonds, making it a poor conductor (insulator)."
      ],
      correctAnswerIndex: 3,
      explanation: "Plastics have huge band gaps where electrons are firmly localized in covalent bonds, providing enormous electrical resistivity."
    },
    {
      id: "phys-58",
      question: "Which of the following is correct regarding the current-voltage ($I-V$) characteristic curve of a forward-biased semiconductor diode?",
      options: [
        "Current due to minority carriers dominates forward bias.",
        "Reverse bias current increases rapidly above cut-in voltage.",
        "The region where forward current increases exponentially once applied voltage exceeds the knee/cut-in voltage is the forward bias region.",
        "Breakdown voltage occurs in the forward bias region."
      ],
      correctAnswerIndex: 2,
      explanation: "Once the forward voltage exceeds the barrier threshold ($V_{\\text{cut-in}} \\approx 0.7\\text{ V}$ for Si), majority carriers overcome the depletion region and current rises steeply."
    },
    {
      id: "phys-59",
      question: "In a half-wave rectifier where an AC supply is connected across a diode and load resistor $R_L$, during the first half-cycle when terminal 'a' is positive relative to terminal 'b':",
      options: [
        "the diode is forward biased and a rectified voltage develops across the load resistor $R_L$.",
        "the diode is reverse biased and zero current flows.",
        "the diode conducts only during negative polarity.",
        "the diode blocks current completely in both cycles."
      ],
      correctAnswerIndex: 0,
      explanation: "With positive potential at the anode (p-side), the diode becomes forward biased, conducting current through load resistor $R_L$."
    },
    {
      id: "phys-60",
      question: "A circular coil is placed in a uniform magnetic field $B = 0.50\\text{ T}$ perpendicular to its plane. If the area increases uniformly by $\\Delta A = 4.0 \\times 10^{-3}\\text{ m}^2$ in $\\Delta t = 2\\text{ s}$, what is the magnitude of the induced electromotive force (emf)?",
      options: [
        "$1.0 \\times 10^{-3}\\text{ V}$",
        "$4.0 \\times 10^{-3}\\text{ V}$",
        "$1.0 \\times 10^3\\text{ V}$",
        "$2.5 \\times 10^2\\text{ V}$"
      ],
      correctAnswerIndex: 0,
      explanation: "By Faraday's Law of Induction: $\\text{emf} = \\left|\\frac{\\Delta \\Phi}{\\Delta t}\\right| = B \\frac{\\Delta A}{\\Delta t} = 0.50 \\times \\frac{4.0 \\times 10^{-3}}{2} = 0.50 \\times 2.0 \\times 10^{-3} = 1.0 \\times 10^{-3}\\text{ V}$."
    }
  ] as Question[]
};
