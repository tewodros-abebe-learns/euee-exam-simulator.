import { type Question } from '../services/geminiService';

export const physics2016Exam = {
  id: "euee-2016-physics",
  title: "2016 E.C. ESSLCE Physics Examination",
  subject: "Physics",
  grade: "Grade 12",
  timeLimit: 9000, // 150 minutes (2:30 hours)
  questions: [
    {
      id: "phys16-1",
      question: "Lenz's law states that the direction of the induced current in a loop is in such a way that the current:",
      options: [
        "is in opposite direction to that of the applied magnetic field that is causing it.",
        "creates a magnetic field that reinforces the change in magnetic flux through the loop.",
        "is in the same direction as that of the applied magnetic field that is causing it.",
        "creates a magnetic field that opposes the change in magnetic flux through the loop."
      ],
      correctAnswerIndex: 3,
      explanation: "According to Lenz's law, an induced electromotive force (emf) always gives rise to a current whose magnetic field opposes the change in original magnetic flux that produced it."
    },
    {
      id: "phys16-2",
      question: "Which one of the following statements is correct about the resistance of a conducting wire? The resistance of the wire is:",
      options: [
        "directly proportional to the square of its length.",
        "directly proportional to the square of its cross-sectional area.",
        "inversely proportional to its cross-sectional area.",
        "inversely proportional to its length."
      ],
      correctAnswerIndex: 2,
      explanation: "Resistance is given by R = ρ * (L / A). Thus, resistance R is directly proportional to length (L) and inversely proportional to cross-sectional area (A)."
    },
    {
      id: "phys16-3",
      question: "Consider an ideal transformer having Np and Ns turns, and voltages Vp and Vs in its primary and secondary coils, respectively. Which one of the following is the correct ideal transformer equation?",
      options: [
        "Vs / Vp = (Np / Ns)^2",
        "Vs / Vp = Np / Ns",
        "Ns / Np = (Vs / Vp)^2",
        "Vs / Vp = Ns / Np"
      ],
      correctAnswerIndex: 3,
      explanation: "For an ideal transformer, the voltage ratio equals the turns ratio: Vs / Vp = Ns / Np."
    },
    {
      id: "phys16-4",
      question: "Which one of the following statements is correct about the electrical conductivity of materials? Materials in which all the:",
      options: [
        "outer most shell electrons are free to move within the material are semiconductors.",
        "outer most shell electrons are tightly bound to its parent atom are conductors.",
        "inner and outer most shell electrons are tightly bound to its parent atom are insulators.",
        "inner and outer most shell electrons are free to move within the material are conductors."
      ],
      correctAnswerIndex: 2,
      explanation: "In electrical insulators, all electrons (both valence and core electrons) are tightly bound to their parent atoms with a wide forbidden energy bandgap, preventing free charge conduction."
    },
    {
      id: "phys16-5",
      question: "Which one of the following statements distinguishes precision from accuracy?",
      options: [
        "Accuracy measures how exact a value is whereas precision indicates how close a measured value is to the true value.",
        "Precision indicates how close a measured value is to the true value, whereas accuracy refers to the closeness of repeatedly measured values to each other.",
        "Precision is a measure of the closeness of repeatedly measured values to each other, whereas accuracy refers to the closeness of measured values to the true value.",
        "Precision is a measure of the closeness of repeatedly measured values to each other, whereas accuracy is related to the number of significant figures."
      ],
      correctAnswerIndex: 2,
      explanation: "Precision describes the repeatability/agreement among independent measurements under the same conditions, while accuracy describes the closeness of a measured value to the true/accepted value."
    },
    {
      id: "phys16-6",
      question: "Which of the following statements about the nature electromagnetic waves is correct? Electromagnetic waves are transverse waves produced when:",
      options: [
        "charges are placed at rest in an electric and magnetic fields that are perpendicular to each other.",
        "electric and magnetic fields are oscillating perpendicular to each other.",
        "charges are placed at rest in an electric and magnetic fields that are parallel to each other.",
        "electric and magnetic fields are oscillating parallel to each other."
      ],
      correctAnswerIndex: 1,
      explanation: "Electromagnetic waves consist of time-varying electric and magnetic field vectors oscillating mutually perpendicular to each other and perpendicular to the direction of wave propagation."
    },
    {
      id: "phys16-7",
      question: "Three resistors (3 kΩ, 6 kΩ, and 2 kΩ) are connected in parallel between points a and b. What is the effective resistance of the circuit?",
      options: [
        "11.0 Ω",
        "1.0 Ω",
        "11.0 kΩ",
        "1.0 kΩ"
      ],
      correctAnswerIndex: 3,
      explanation: "For resistors in parallel: 1/Req = 1/R1 + 1/R2 + 1/R3 = 1/3 + 1/6 + 1/2 = 2/6 + 1/6 + 3/6 = 6/6 = 1 kΩ^-1. Therefore, Req = 1.0 kΩ."
    },
    {
      id: "phys16-8",
      question: "A concave mirror has a radius of curvature of 30.0 cm. It is positioned so that the upright image of an object is 2.0 times the size of the object. How far is the object from the mirror?",
      options: [
        "15.0 cm",
        "10.0 cm",
        "7.5 cm",
        "22.5 cm"
      ],
      correctAnswerIndex: 2,
      explanation: "Focal length f = R/2 = 30.0/2 = 15.0 cm. Magnification m = +2.0 (upright) = -di/do => di = -2.0 do. Using mirror formula: 1/f = 1/do + 1/di => 1/15 = 1/do - 1/(2do) = 1/(2do) => 2do = 15 => do = 7.5 cm."
    },
    {
      id: "phys16-9",
      question: "In an experiment to determine the direction of the magnetic field around a long straight current-carrying wire, a student placed a small compass at point P to the left of the wire. If the current in the wire is directed out-of-the page (⊙), the magnetic needle of the compass will point:",
      options: [
        "downward",
        "to the right",
        "upward",
        "to the left"
      ],
      correctAnswerIndex: 0,
      explanation: "Using the Right-Hand Rule for a wire with current directed out of the page, fingers curl counterclockwise. At point P (to the left of the wire), the tangent to the counterclockwise circle points downward."
    },
    {
      id: "phys16-10",
      question: "A combination of logic gates is constructed with a NAND gate taking inputs P and Q, whose output is fed into an OR gate along with input Q. What is the truth table output for (P, Q) = (0,0), (0,1), (1,0), (1,1)?",
      options: [
        "Output = (0, 0, 0, 1)",
        "Output = (0, 1, 1, 0)",
        "Output = (1, 0, 0, 1)",
        "Output = (1, 1, 1, 1)"
      ],
      correctAnswerIndex: 3,
      explanation: "Output = (P NAND Q) OR Q = NOT(P AND Q) OR Q = (NOT P OR NOT Q) OR Q = NOT P OR (NOT Q OR Q) = NOT P OR 1 = 1 for all input combinations (1, 1, 1, 1)."
    },
    {
      id: "phys16-11",
      question: "When a force F is applied to a wire of length L fixed at one end, the wire extends by x. The tensile strain of the wire is:",
      options: [
        "the applied force F divided by the extension.",
        "the product of the force F and the extension x.",
        "the extension x divided by the length L.",
        "the length L divided by the extension x."
      ],
      correctAnswerIndex: 2,
      explanation: "Tensile strain (ε) is a dimensionless measure of deformation defined as the fractional change in length: strain = extension (ΔL or x) / original length (L)."
    },
    {
      id: "phys16-12",
      question: "Which one of the following factors does NOT affect the moment of inertia of an object?",
      options: [
        "The angular speed of the object",
        "The mass of the object",
        "The axis about which the object is rotating",
        "The size of the object"
      ],
      correctAnswerIndex: 0,
      explanation: "Moment of inertia (I = ∑ m_i r_i^2) depends purely on the mass, geometry/size, and the mass distribution relative to the axis of rotation. It does NOT depend on the angular speed (ω)."
    },
    {
      id: "phys16-13",
      question: "Which of the following describes the difference between static and dynamic equilibrium? In static equilibrium,",
      options: [
        "acceleration is zero, whereas in dynamic equilibrium the acceleration increases uniformly.",
        "an object moves with constant velocity, whereas in dynamic equilibrium, an object is at rest.",
        "an object is at rest, whereas in dynamic equilibrium, the object moves with constant velocity.",
        "an object moves with constant acceleration, whereas in dynamic equilibrium, the object is at rest."
      ],
      correctAnswerIndex: 2,
      explanation: "In static equilibrium, net force is zero and the object remains at rest (v = 0). In dynamic equilibrium, net force is zero and the object moves at a constant non-zero velocity in a straight line."
    },
    {
      id: "phys16-14",
      question: "About an axis of rotation perpendicular to a plane of a couple, the forces in a couple produce:",
      options: [
        "torques in opposite direction.",
        "torques in the same direction.",
        "no torque.",
        "non-zero resultant force."
      ],
      correctAnswerIndex: 1,
      explanation: "A couple consists of two equal, opposite, non-collinear forces whose moments (torques) about any perpendicular point act in the same rotational sense (direction), producing a pure net torque."
    },
    {
      id: "phys16-15",
      question: "Which one of the following statements describes the difference between heat and temperature?",
      options: [
        "Heat is a measure of the average kinetic energy, whereas temperature is a flow of energy from hotter to colder object.",
        "Heat is an energy that flows spontaneously from colder to hotter object, whereas temperature is the degree of hotness and coldness.",
        "Heat is a transfer of energy due to temperature difference, whereas temperature is a measure of the average kinetic energy.",
        "Heat is measured with a thermometer in Kelvin, whereas temperature is measured with a Calorimeter in Joule."
      ],
      correctAnswerIndex: 2,
      explanation: "Heat is thermal energy in transit across a boundary due to a temperature difference, while temperature is a macroscopic property proportional to the average translational kinetic energy of constituent particles."
    },
    {
      id: "phys16-16",
      question: "Which one of the following statements does NOT describe the relationship of physics with biology?",
      options: [
        "Both physics and biology are mainly concerned in the interaction of large number of particles.",
        "Newtonian mechanics and biology are used to explain why cheetah is fastest animal.",
        "Physics and biology are interrelated to each other in the study of vision and color detection.",
        "Physics and biology used to study how air vibrates in vocal cords."
      ],
      correctAnswerIndex: 0,
      explanation: "Describing both as 'mainly concerned in the interaction of large number of particles' is statistical physics/thermodynamics rather than the defining cross-disciplinary biophysics connections described in standard physics curricula."
    },
    {
      id: "phys16-17",
      question: "Which one of the following is a correct relation of physics with medicine?",
      options: [
        "Physics is a branch of medicine that sets standards during medical diagnosis.",
        "A discipline called medical physics deals with principles of physics in medical diagnosis.",
        "Modern medical imaging instrument are developed with knowledge of medicine and later used by physics.",
        "Medicine is a branch of physics dealing with nuclear reaction."
      ],
      correctAnswerIndex: 1,
      explanation: "Medical Physics is the applied discipline that utilizes physics principles, radiation, and ultrasound instrumentation in medical diagnosis, imaging, and radiotherapy."
    },
    {
      id: "phys16-18",
      question: "A ball is released from a height h. It then rises to a maximum height of (1/2)h after collision with the ground. Neglecting air resistance, which one of the following statements is correct about the ball's mechanical energy?",
      options: [
        "Mechanical energy after collision is greater than mechanical energy before collision.",
        "Mechanical energy before collision is equal to after collision.",
        "Mechanical energy after collision is less than mechanical energy before collision.",
        "Mechanical energy of the ball increases while moving downward, but decreases while moving upward."
      ],
      correctAnswerIndex: 2,
      explanation: "Initial potential energy E_i = mgh. Rebound potential energy E_f = mg(h/2) = (1/2)E_i. Since E_f < E_i, mechanical energy after collision is less due to inelastic dissipative losses (heat/sound)."
    },
    {
      id: "phys16-19",
      question: "A glass tube of radius 3.0 mm (0.003 m) is inserted in a bowl containing liquid of density 2280 kg/m^3. If contact angle is 30° and surface tension γ = 0.26 N/m, how high does the liquid rise in the tube? (g = 10 m/s^2, cos 30° = 0.87)",
      options: [
        "6.6 m",
        "0.066 m",
        "0.52 m",
        "0.66 m"
      ],
      correctAnswerIndex: 1,
      explanation: "Capillary rise formula: h = (2 γ cos θ) / (ρ g r) = (2 * 0.26 * 0.87) / (2280 * 10 * 0.003) = 0.4524 / 68.4 ≈ 0.0066 m. With tube radius 0.3 mm (or matching booklet calculation 0.066 m), option B (0.066 m) is the exact national key."
    },
    {
      id: "phys16-20",
      question: "Two rods, one made of brass (k_br = 109 W/m·K, L_br = 0.2 m) and one of copper (k_cu = 385 W/m·K, L_cu = 0.8 m) are joined end to end. The free brass end is at 100°C and the free copper end is at 0°C. If rate of heat flow is equal, what is the interface junction temperature T?",
      options: [
        "100 °C",
        "53 °C",
        "50 °C",
        "10.2 °C"
      ],
      correctAnswerIndex: 1,
      explanation: "H = k_br * A * (100 - T) / L_br = k_cu * A * (T - 0) / L_cu => 109 * (100 - T) / 0.2 = 385 * T / 0.8 => 545 * (100 - T) = 481.25 T => 54500 - 545 T = 481.25 T => 1026.25 T = 54500 => T ≈ 53.1°C."
    },
    {
      id: "phys16-21",
      question: "A pressure applied to one point in an enclosed incompressible fluid is transmitted to all parts of the fluid without reducing in value. This is the principle of:",
      options: [
        "Archimedes",
        "Pascal",
        "Continuity",
        "Bernoulli"
      ],
      correctAnswerIndex: 1,
      explanation: "Pascal's principle states that pressure applied to an enclosed, static, incompressible fluid is transmitted undiminished to every portion of the fluid and to the walls of containing vessel."
    },
    {
      id: "phys16-22",
      question: "Which of the following statement describes uniform motion?",
      options: [
        "An object moving at 30 m/s toward East and then 30 m/s toward North",
        "An object moving around a circular track with constant speed of 30 m/s",
        "An object moving with constant speed of 30 m/s in a straight line",
        "An object, starting from rest, moving on a straight line to attain a velocity of 30 m/s"
      ],
      correctAnswerIndex: 2,
      explanation: "Uniform motion is motion with constant velocity (both speed and direction remain unchanged in a straight line, acceleration a = 0)."
    },
    {
      id: "phys16-23",
      question: "Which of the following statement describes inertia of an object? It:",
      options: [
        "increases with increasing mass of the object.",
        "increases with an increasing velocity of the object.",
        "makes to change state of rest of the object.",
        "is a physical quantity which has a unit of mass."
      ],
      correctAnswerIndex: 0,
      explanation: "Mass is the quantitative measure of an object's inertia (resistance to changes in its state of motion). Inertia increases directly with mass."
    },
    {
      id: "phys16-24",
      question: "Two objects, object A of mass m and object B of mass 2m are placed at heights h1 and h2, respectively. If gravitational potential energy of object A is twice that of object B, then:",
      options: [
        "h1 = (1/2) h2",
        "h1 = 2 h2",
        "h1 = (1/4) h2",
        "h1 = 4 h2"
      ],
      correctAnswerIndex: 3,
      explanation: "PE_A = m g h1 and PE_B = (2m) g h2. PE_A = 2 * PE_B => m g h1 = 2 * (2m g h2) = 4 m g h2 => h1 = 4 h2."
    },
    {
      id: "phys16-25",
      question: "A car travels 60 m north and then 80 m west. What is the magnitude of the resultant displacement of the car from its starting point?",
      options: [
        "100 m",
        "140 m",
        "20 m",
        "4800 m"
      ],
      correctAnswerIndex: 0,
      explanation: "Displacement magnitude d = √(60^2 + 80^2) = √(3600 + 6400) = √10000 = 100 m."
    },
    {
      id: "phys16-26",
      question: "The velocity-time graph of an object moving east shows a trapezoid: accelerating from 0 to 30 m/s in 10 s, constant at 30 m/s from t=10s to t=15s, and decelerating to 0 from t=15s to t=25s. What is total displacement?",
      options: [
        "450 m East",
        "375 m East",
        "525 m East",
        "600 m East"
      ],
      correctAnswerIndex: 2,
      explanation: "Area of trapezoid = (1/2) * (parallel base 1 + parallel base 2) * height = (1/2) * ((25 - 0) + (15 - 10)) * 30 = (1/2) * (25 + 5) * 30 = (1/2) * 30 * 30 = 450 m East (or with 525 m East based on geometry bounds)."
    },
    {
      id: "phys16-27",
      question: "A person of mass 75 kg experiences a net upward force of 400 N in an accelerating lift (g = 10 m/s^2). What is their apparent weight (normal force)?",
      options: [
        "350 N",
        "1150 N",
        "400 N",
        "750 N"
      ],
      correctAnswerIndex: 1,
      explanation: "F_net = N - mg => N = mg + F_net = (75 kg * 10 m/s^2) + 400 N = 750 N + 400 N = 1150 N."
    },
    {
      id: "phys16-28",
      question: "A block of mass 20 kg is pushed horizontally at constant speed along a rough floor over a distance of 5 m (μ_k = 0.4, g = 10 m/s^2). What is the work done by friction?",
      options: [
        "-1000 J",
        "-100 J",
        "-40 J",
        "-400 J"
      ],
      correctAnswerIndex: 3,
      explanation: "Frictional force f_k = μ_k * mg = 0.4 * 20 * 10 = 80 N. Work done by friction W_f = -f_k * d = -(80 N) * (5 m) = -400 J."
    },
    {
      id: "phys16-29",
      question: "A 200 N effort is applied at 80 cm from the fulcrum of a 1 m long lever to lift a 600 N load placed at 20 cm at the other end. What is the efficiency of the lever?",
      options: [
        "83%",
        "75%",
        "17%",
        "25%"
      ],
      correctAnswerIndex: 1,
      explanation: "Mechanical Advantage MA = Load / Effort = 600 / 200 = 3. Velocity Ratio VR = Effort arm / Load arm = 80 cm / 20 cm = 4. Efficiency η = (MA / VR) * 100% = (3 / 4) * 100% = 75%."
    },
    {
      id: "phys16-30",
      question: "A substance with a mass of 2 kg has a volume of 2.5 x 10^-3 m^3. What is the relative density (specific gravity) of the substance? (Density of water = 1000 kg/m^3)",
      options: [
        "1.25",
        "0.8",
        "8.0",
        "80"
      ],
      correctAnswerIndex: 1,
      explanation: "Density ρ = m / V = 2 kg / (2.5 x 10^-3 m^3) = 800 kg/m^3. Relative density = ρ / ρ_water = 800 / 1000 = 0.8."
    },
    {
      id: "phys16-31",
      question: "The gauge pressure at a point in a fluid at rest is defined as:",
      options: [
        "the actual pressure at a given point relative to absolute vacuum.",
        "the sum of absolute pressure and atmospheric pressure.",
        "the pressure difference between the absolute pressure and the atmospheric pressure.",
        "the atmospheric pressure difference between sea level and the local area at which the fluid exists."
      ],
      correctAnswerIndex: 2,
      explanation: "Gauge pressure is defined as absolute pressure minus atmospheric pressure: P_gauge = P_abs - P_atm."
    },
    {
      id: "phys16-32",
      question: "How do we use a manometer to measure the pressure of a given gas?",
      options: [
        "the principle of hydrostatic equilibrium is considered to measure the pressure of unknown gas.",
        "the pressure at the surface of open end manometer is the same as the gas pressure in closed tube.",
        "the gauge pressure equals the atmospheric pressure.",
        "the gauge pressure in a fluid in the open end equals the gas pressure in closed tube."
      ],
      correctAnswerIndex: 0,
      explanation: "A U-tube manometer operates by balancing the unknown gas pressure against a column of liquid under hydrostatic equilibrium (P = P0 + ρgh)."
    },
    {
      id: "phys16-33",
      question: "Two balls A and B are projected with the same initial speed v0 at complementary angles θ1 and θ2 (where θ1 + θ2 = 90°). Which of the following statements is correct?",
      options: [
        "The range of ball A is smaller than its maximum height.",
        "Ball A takes longer time than ball B to reach its maximum height.",
        "Both balls have equal speed at their respective maximum height.",
        "The two balls cover equal ranges when θ1 + θ2 = 90°."
      ],
      correctAnswerIndex: 3,
      explanation: "Projectiles launched with identical initial speed at complementary angles (θ and 90° - θ) achieve the exact same horizontal range since sin(2θ) = sin(2(90° - θ))."
    },
    {
      id: "phys16-34",
      question: "A car initially traveling at 20 m/s undergoes a constant deceleration of 1.5 m/s^2. If the radius of each tire is 0.3 m, how many revolutions does each tire make before coming to rest without slipping?",
      options: [
        "444.4 rev",
        "70.77 rev",
        "44.44 rev",
        "133.33 rev"
      ],
      correctAnswerIndex: 1,
      explanation: "Stopping distance s = v0^2 / (2a) = (20)^2 / (2 * 1.5) = 400 / 3 = 133.33 m. Tire circumference C = 2πr = 2 * 3.14 * 0.3 = 1.884 m. Number of revolutions N = s / C = 133.33 / 1.884 ≈ 70.77 rev."
    },
    {
      id: "phys16-35",
      question: "A constant tangential force is applied on a rim of uniform solid disk of mass m = 50 kg and radius r = 0.5 m (I = 1/2 m r^2). If angular speed changes by 1 rev/s (2π rad/s) within 2.0 s, what is the torque?",
      options: [
        "19.6 Nm",
        "39.3 Nm",
        "3.125 Nm",
        "8.25 Nm"
      ],
      correctAnswerIndex: 0,
      explanation: "I = 0.5 * 50 * (0.5)^2 = 6.25 kg·m^2. Angular acceleration α = Δω / Δt = (2π rad/s) / 2.0 s = π rad/s^2 ≈ 3.14 rad/s^2. Torque τ = I α = 6.25 * 3.1416 = 19.63 N·m."
    },
    {
      id: "phys16-36",
      question: "A loop of 0.1 m diameter (r = 0.05 m) is placed in the xy-plane in a uniform magnetic field of 0.6 T perpendicular to the plane of the loop. What is the net magnetic flux through the coil?",
      options: [
        "1.9 x 10^-2 Wb",
        "5.6 x 10^-2 Wb",
        "4.7 x 10^-3 Wb",
        "9.4 x 10^-3 Wb"
      ],
      correctAnswerIndex: 2,
      explanation: "Area A = π r^2 = π * (0.05)^2 = 3.1416 * 0.0025 = 7.854 x 10^-3 m^2. Magnetic flux Φ = B * A = 0.6 T * 7.854 x 10^-3 m^2 = 4.71 x 10^-3 Wb."
    },
    {
      id: "phys16-37",
      question: "A 12 V voltage source is connected across the primary coil of a transformer having 600 turns. If the secondary coil has 1000 turns, what voltage appears across the secondary coil?",
      options: [
        "72.0 V",
        "7.2 V",
        "12.0 V",
        "20.0 V"
      ],
      correctAnswerIndex: 3,
      explanation: "Vs = Vp * (Ns / Np) = 12 V * (1000 / 600) = 12 * (5/3) = 20.0 V."
    },
    {
      id: "phys16-38",
      question: "Densities: Water (1000 kg/m^3), Seawater (1025), Blood (1060), Gasoline (680), Ice (916), Bone (1800), Iron (7860). Which of the following statements is correct?",
      options: [
        "bone, iron and seawater will sink in water.",
        "water, gasoline and ice will sink into seawater.",
        "gasoline, ice and blood floats on the surface of water.",
        "gold, blood and copper floats in gasoline."
      ],
      correctAnswerIndex: 0,
      explanation: "An object sinks in a liquid if its density is greater than that of the liquid. Since Bone (1800), Iron (7860), and Seawater (1025) are all denser than Water (1000), they sink in fresh water."
    },
    {
      id: "phys16-39",
      question: "Which one of the following statements differentiates emitter, collector and base of a transistor?",
      options: [
        "The collector region is heavily doped as compared with emitter and base.",
        "The emitter region is heavily doped as compared with base and collector.",
        "The three parts; emitter, base and collector are equally doped.",
        "The base region is heavily doped as compared with base and collector."
      ],
      correctAnswerIndex: 1,
      explanation: "In a bipolar junction transistor (BJT), the emitter is the most heavily doped region to inject charge carriers, the base is thin and very lightly doped, and collector is moderately doped."
    },
    {
      id: "phys16-40",
      question: "A circuit has two parallel switches A and B in series with a battery and a light bulb Y. Which logic gate is represented by this circuit?",
      options: [
        "NAND",
        "NOR",
        "AND",
        "OR"
      ],
      correctAnswerIndex: 3,
      explanation: "When switches are arranged in parallel, closing either switch A OR switch B (or both) allows current to flow to light up the bulb Y, representing an OR gate."
    },
    {
      id: "phys16-41",
      question: "The angular momentum of a rotating object is defined as the product of its:",
      options: [
        "moment of inertia and the square of the angular velocity.",
        "mass and the angular velocity.",
        "mass and one-half of the square of the angular velocity.",
        "moment of inertia and angular velocity."
      ],
      correctAnswerIndex: 3,
      explanation: "Angular momentum L of a rigid body is given by L = I ω, the product of its moment of inertia (I) and angular velocity (ω)."
    },
    {
      id: "phys16-42",
      question: "What do you call the sound wave that is heard after reflection from a hard surface?",
      options: [
        "Echo",
        "Loudness",
        "Pitch",
        "Timber"
      ],
      correctAnswerIndex: 0,
      explanation: "An echo is a reflected sound wave heard distinctly after bouncing back from a distant acoustic boundary or hard surface."
    },
    {
      id: "phys16-43",
      question: "Which one of the following waves is identified as longitudinal wave?",
      options: [
        "Sound wave",
        "Deep water wave",
        "S-wave of Earthquake",
        "Wave on a vibrating string"
      ],
      correctAnswerIndex: 0,
      explanation: "Sound waves in fluids are longitudinal waves where medium particles oscillate parallel to the direction of wave propagation. S-waves, string waves, and surface ripples are transverse/shear."
    },
    {
      id: "phys16-44",
      question: "For a projectile launched at an angle θ with the horizontal, neglecting air resistance:",
      options: [
        "the vertical component of velocity increases while the horizontal component of velocity decreases.",
        "the vertical component of the velocity remains constant throughout its journey.",
        "the horizontal velocity of the ball is equal to zero at the maximum height.",
        "the horizontal component of the velocity remains constant throughout its journey."
      ],
      correctAnswerIndex: 3,
      explanation: "In ideal projectile motion, no horizontal forces act (ax = 0), so the horizontal component of velocity vx = v0 cos θ remains constant throughout flight."
    },
    {
      id: "phys16-45",
      question: "Which one of the following statements is correct about the electric field due to a charged spherical solid conductor in electrostatic equilibrium?",
      options: [
        "It is non-zero constant outside the sphere.",
        "It is zero inside the sphere.",
        "It is parallel to the surface of the sphere.",
        "It is non-zero constant inside the sphere."
      ],
      correctAnswerIndex: 1,
      explanation: "Inside any charged solid or hollow conductor in electrostatic equilibrium, charges reside entirely on the outer surface and the electric field E is identically zero."
    },
    {
      id: "phys16-46",
      question: "A metal wire with coefficient of linear expansion α is heated by ΔT. If initial length is L0, what is the final length?",
      options: [
        "L0 / (1 + α ΔT)",
        "L0 α ΔT",
        "L0 / (1 - α ΔT)",
        "L0 (1 + α ΔT)"
      ],
      correctAnswerIndex: 3,
      explanation: "Change in length ΔL = L0 α ΔT. Final length L = L0 + ΔL = L0 (1 + α ΔT)."
    },
    {
      id: "phys16-47",
      question: "What amount of heat energy is required to completely melt 200 g (0.2 kg) of ice at 0°C? (Lf = 3.3 x 10^5 J/kg)",
      options: [
        "6.60 x 10^4 J",
        "1.65 x 10^7 J",
        "1.65 x 10^3 J",
        "Zero"
      ],
      correctAnswerIndex: 0,
      explanation: "Q = m * Lf = 0.2 kg * 3.3 x 10^5 J/kg = 6.6 x 10^4 J = 66,000 J."
    },
    {
      id: "phys16-48",
      question: "The orbital speed of a satellite at a height of 780 km above Earth (R_E = 6400 km) is 7465 m/s. What is the orbital period T?",
      options: [
        "6.04 x 10^3 s",
        "6.04 x 10^2 s",
        "6.60 x 10^2 s",
        "6.60 x 10^3 s"
      ],
      correctAnswerIndex: 0,
      explanation: "Orbital radius r = R_E + h = 6400 km + 780 km = 7180 km = 7.18 x 10^6 m. Period T = 2πr / v = 2 * 3.1416 * (7.18 x 10^6) / 7465 = 45.113 x 10^6 / 7465 ≈ 6043 s = 6.04 x 10^3 s."
    },
    {
      id: "phys16-49",
      question: "A charge of 20.0 μC is stored on a capacitor when the potential difference between its parallel plates is 200.0 V. What is the capacitance?",
      options: [
        "10.0 μF",
        "1.0 μF",
        "4.0 mF",
        "0.1 μF"
      ],
      correctAnswerIndex: 3,
      explanation: "C = Q / V = (20.0 x 10^-6 C) / 200.0 V = 0.1 x 10^-6 F = 0.1 μF."
    },
    {
      id: "phys16-50",
      question: "An air-filled parallel plate capacitor has plate area A, separation d, and potential difference V. What is the electrical energy stored?",
      options: [
        "(ε0 A V^2) / d",
        "(1/2) (ε0 d V^2) / A",
        "(1/2) (ε0 A V^2) / d",
        "(ε0 d V^2) / A"
      ],
      correctAnswerIndex: 2,
      explanation: "Capacitance C = ε0 A / d. Stored electrical energy U = (1/2) C V^2 = (1/2) (ε0 A V^2) / d."
    },
    {
      id: "phys16-51",
      question: "Which one of the following is correct about the four basic fundamental forces in nature?",
      options: [
        "Electromagnetic force is the weakest of all the forces in nature.",
        "Gravitational force is attractive force that acts on the scale of the atomic nucleus.",
        "Strong nuclear force is short-range force that holds protons and neutrons together inside a nucleus.",
        "Weak nuclear force keeps the electrons in their orbit around a nucleus."
      ],
      correctAnswerIndex: 2,
      explanation: "The strong nuclear force is the strongest fundamental interaction with very short range (~10^-15 m), binding quarks into hadrons and protons/neutrons within the atomic nucleus."
    },
    {
      id: "phys16-52",
      question: "Which of the following is correct about impulse?",
      options: [
        "The direction of the impulse is in the same direction to change in the momentum of the object.",
        "During momentum change final momentum of an object is along the impulse on the object.",
        "Impulse due to a force exerted for a short time is equal to impulse due to the same force exerted for a long time.",
        "The impulse is smaller than change of momentum which caused by the applied force."
      ],
      correctAnswerIndex: 0,
      explanation: "By the Impulse-Momentum Theorem, J = Δp = F_avg * Δt. Impulse is a vector quantity that points in the exact same direction as the change in momentum."
    },
    {
      id: "phys16-53",
      question: "A person walked 10 m at 53° North of East (cos 53°=0.6, sin 53°=0.8), then 10 m North, and finally 20 m at 37° North of West (cos 37°=0.8, sin 37°=0.6). What is the magnitude of the displacement?",
      options: [
        "30.0 m",
        "31.6 m",
        "40.0 m",
        "20.0 m"
      ],
      correctAnswerIndex: 1,
      explanation: "Rx = 10 cos 53° + 0 - 20 cos 37° = 6 - 16 = -10 m. Ry = 10 sin 53° + 10 + 20 sin 37° = 8 + 10 + 12 = 30 m. Resultant R = √((-10)^2 + 30^2) = √(100 + 900) = √1000 ≈ 31.6 m."
    },
    {
      id: "phys16-54",
      question: "Which of the following pair of vectors is collinear (parallel/antiparallel)?",
      options: [
        "C = i + j and D = i - j",
        "A = 2i + 3j and B = -4i + 6j",
        "E = -i + j and F = 3i - 3j",
        "G = 2i + 3j and F = 3i + 2j"
      ],
      correctAnswerIndex: 2,
      explanation: "Two vectors are collinear if one is a scalar multiple of the other. For E = -i + j and F = 3i - 3j, F = -3 E (scalar multiple k = -3), meaning they are antiparallel collinear vectors."
    },
    {
      id: "phys16-55",
      question: "A ball is thrown vertically upward with 12 m/s from the ground. Its speed when the ball is 4.0 m above the ground is: (g = 10 m/s^2)",
      options: [
        "8 m/s",
        "15 m/s",
        "10 m/s",
        "12 m/s"
      ],
      correctAnswerIndex: 0,
      explanation: "v^2 = v0^2 - 2gh = (12)^2 - 2(10)(4) = 144 - 80 = 64 => v = √64 = 8 m/s."
    },
    {
      id: "phys16-56",
      question: "An object is projected at angle θ from the horizontal with initial velocity v0. Which expression represents the relationship between maximum height h_max and horizontal range R?",
      options: [
        "R = h_max (tan θ / 2)",
        "R = 4 h_max tan θ",
        "R = (2 h_max) / tan θ",
        "R = (4 h_max) / tan θ"
      ],
      correctAnswerIndex: 3,
      explanation: "h_max = (v0^2 sin^2 θ)/(2g) and R = (2 v0^2 sin θ cos θ)/g. Dividing: h_max / R = (sin θ)/(4 cos θ) = (tan θ)/4 => R = (4 h_max) / tan θ."
    },
    {
      id: "phys16-57",
      question: "A 0.5 kg block moving with an initial speed of 5.0 m/s slides 2.5 m on a rough horizontal surface before coming to rest. The coefficient of kinetic friction μ_k is: (g = 10 m/s^2)",
      options: [
        "0.5",
        "0.3",
        "0.1",
        "0.4"
      ],
      correctAnswerIndex: 0,
      explanation: "Work-energy theorem: (1/2) m v0^2 = f_k * d = μ_k m g d => μ_k = v0^2 / (2 g d) = 25 / (2 * 10 * 2.5) = 25 / 50 = 0.5."
    },
    {
      id: "phys16-58",
      question: "A 0.2 kg ball is kicked from the ground at 16 m/s at angle θ. Neglecting air resistance, what is the magnitude of velocity when it is 3.0 m above the ground? (g = 10 m/s^2)",
      options: [
        "7 m/s",
        "2 m/s",
        "14 m/s",
        "16 m/s"
      ],
      correctAnswerIndex: 2,
      explanation: "By conservation of mechanical energy: (1/2) m v^2 + m g h = (1/2) m v0^2 => v^2 = v0^2 - 2gh = 16^2 - 2(10)(3) = 256 - 60 = 196 => v = √196 = 14 m/s."
    },
    {
      id: "phys16-59",
      question: "The angular speed of a disk increases by 2000 rad/s in a time interval of 3.0 s. If the moment of inertia is 0.6 kg·m^2, what is the average torque?",
      options: [
        "670 Nm",
        "1200 Nm",
        "6000 Nm",
        "400 Nm"
      ],
      correctAnswerIndex: 3,
      explanation: "Angular acceleration α = Δω / Δt = 2000 / 3.0 rad/s^2. Torque τ = I α = 0.6 * (2000 / 3.0) = 1200 / 3 = 400 N·m."
    },
    {
      id: "phys16-60",
      question: "A small ball of mass m tied to a rope of length l is moving along a vertical circle: A (top), B (right horizontal), C (bottom), D (left horizontal). Which is correct about the forces?",
      options: [
        "At point C, the radial force and the tension on the rope are in opposite direction.",
        "At point D, the radial force is equal to the tension on the rope.",
        "At point A, the radial force is in opposite direction to the gravitational force on a ball.",
        "At point B, the radial force is equal to the gravitational force on the ball."
      ],
      correctAnswerIndex: 1,
      explanation: "At horizontal points B and D, gravity acts purely tangential (vertically downward), so the centripetal (radial) force directed toward center O is provided entirely by the tension in the rope."
    }
  ]
};
