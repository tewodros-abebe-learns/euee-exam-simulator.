export const physics2015Exam = {
  id: "euee-2015-physics",
  title: "2015 E.C. ESSLCE Physics Examination",
  subject: "Physics",
  grade: "Grade 12",
  timeLimit: 7200, // 120 minutes (2:00 hours)
  questions: [
    {
      id: "phys15-1",
      question: "Which one of the following units is NOT a possible unit of electric field strength?",
      options: [
        "Newton/Coulomb",
        "Joule/Coulomb",
        "Volt/meter",
        "Joule/(Coulomb × meter)"
      ],
      correctAnswerIndex: 1,
      explanation: "Joule/Coulomb is the definition of a Volt, which is the unit for electric potential, not electric field strength (V/m or N/C)."
    },
    {
      id: "phys15-2",
      question: "Which one of the following statements does NOT describe the magnetic nature of a material?",
      options: [
        "There is no single magnetic North or magnetic South Pole (magnetic monopoles do not exist).",
        "Magnetic dipoles of a material align parallel when the magnetic material is placed in an external magnetic field.",
        "Magnetic molecules in a magnet will align when they are heated or hammered.",
        "Magnetic molecules (dipoles) are oriented randomly when a material loses its magnetism."
      ],
      correctAnswerIndex: 2,
      explanation: "Heating or striking a magnet with a hammer introduces kinetic energy that randomizes the aligned magnetic domains, destroying the magnetism rather than aligning it."
    },
    {
      id: "phys15-3",
      question: "Which one of the following statements is correct about conduction in semiconductors?",
      options: [
        "N-type semiconductor is made from half-filled shell atoms doped with acceptor atoms.",
        "P-type semiconductors have holes as minority charge carriers in the crystal lattice of the material.",
        "The majority charge carriers in N-type semiconductors are electrons due to doping.",
        "When atoms with half-filled electrons are doped with atoms of five valance electrons, the majority charge carriers are holes."
      ],
      correctAnswerIndex: 2,
      explanation: "In N-type (negative) semiconductors, doping with pentavalent donor atoms (5 valence electrons) provides extra free electrons, making electrons the majority charge carriers."
    },
    {
      id: "phys15-4",
      question: "A small source emits sound waves which are spherical. The intensity of the sound wave measured at a distance r = 3.0 m from the source is I = 5 W/m². At what distance from the source would the intensity be one-fourth as much as it is at r = 3.0 m?",
      options: [
        "12.0 m",
        "9.0 m",
        "4.5 m",
        "6.0 m"
      ],
      correctAnswerIndex: 3,
      explanation: "Sound intensity from a spherical source obeys the inverse-square law (I ∝ 1/r²). To reduce the intensity to 1/4th, the distance must be doubled. Therefore, 2 × 3.0 m = 6.0 m."
    },
    {
      id: "phys15-5",
      question: "Consider a system of two point masses M₁ and M₂, with M₁ = 0.5 M₂. The two masses are located on the x-y plane at coordinates M₁(4, 5) and M₂(6, 3). Which of the following indicates the position of the center of mass of the system?",
      options: [
        "(5, 4) cm",
        "(5/3, 7/3) cm",
        "(16/3, 11/3) cm",
        "(11/3, 16/3) cm"
      ],
      correctAnswerIndex: 2,
      explanation: "X_cm = (M₁X₁ + M₂X₂) / (M₁ + M₂) = (0.5M₂*4 + M₂*6) / 1.5M₂ = (2 + 6) / 1.5 = 8 / 1.5 = 16/3. Y_cm = (0.5M₂*5 + M₂*3) / 1.5M₂ = (2.5 + 3) / 1.5 = 5.5 / 1.5 = 11/3. Center of mass = (16/3, 11/3)."
    },
    {
      id: "phys15-6",
      question: "What is the acceleration due to gravity at an altitude twice the radius of the Earth? (gE is the gravitational acceleration on the surface of the Earth).",
      options: [
        "gE / 3",
        "gE / 9",
        "3 gE",
        "gE / 4"
      ],
      correctAnswerIndex: 1,
      explanation: "At an altitude h = 2R, the total distance from the center of the Earth is r = R + 2R = 3R. Since g ∝ 1/r², the new gravity g' = gE / (3)² = gE / 9."
    },
    {
      id: "phys15-7",
      question: "Four capacitors are connected in a network. A 3/7 μF capacitor is in series with a parallel block of (2 μF and 1 μF). This entire block is in series with a 3/4 μF capacitor. What is the equivalent capacitance?",
      options: [
        "3/4 μF",
        "12 μF",
        "4 μF",
        "1/4 μF"
      ],
      correctAnswerIndex: 3,
      explanation: "Parallel block: Cp = 2 + 1 = 3 μF. The circuit is three capacitors in series: 3/7 μF, 3 μF, and 3/4 μF. 1/Ceq = (7/3) + (1/3) + (4/3) = 12/3 = 4. Ceq = 1/4 μF."
    },
    {
      id: "phys15-8",
      question: "A 64 V battery is connected to a series combination of a 3 kΩ bulb and a 4 kΩ electric iron. If the total current in the circuit is 8 mA, what is the internal resistance of the battery?",
      options: [
        "1 kΩ",
        "7 kΩ",
        "8 kΩ",
        "15 kΩ"
      ],
      correctAnswerIndex: 0,
      explanation: "Total circuit resistance R_total = V / I = 64 V / 8 mA = 8 kΩ. The external load resistance R_ext = 3 kΩ + 4 kΩ = 7 kΩ. Therefore, internal resistance r = R_total - R_ext = 8 - 7 = 1 kΩ."
    },
    {
      id: "phys15-9",
      question: "A solenoid with 5000 turns and length 1m carries 15A of current. If no iron core is inserted in the solenoid, what is the magnetic field strength at the center of the solenoid?",
      options: [
        "20π × 10⁻² T",
        "6π × 10⁻² T",
        "3π × 10⁻² T",
        "4π × 10⁻² T"
      ],
      correctAnswerIndex: 2,
      explanation: "B = μ₀ * n * I = (4π × 10⁻⁷ T·m/A) * (5000 turns/1m) * 15 A = 4π × 10⁻⁷ * 75000 = 300,000π × 10⁻⁷ = 3π × 10⁻² T."
    },
    {
      id: "phys15-10",
      question: "A light ray is allowed to enter from air (n=1) into water (n=4/3) at an angle of 30° with the normal to the air-water boundary. Which one of the following is correct?",
      options: [
        "The sine of the angle of refraction of the light ray in water is equal to 0.5.",
        "The sine of the angle of refraction of the light ray in water is equal to 0.38.",
        "The speed of the light ray in water is 1.33 times that of its speed in air.",
        "The speed of the light ray in water is 0.9 times that of its speed in air."
      ],
      correctAnswerIndex: 1,
      explanation: "By Snell's Law: n_air * sin(30°) = n_water * sin(r) => 1 * 0.5 = (4/3) * sin(r) => sin(r) = 0.5 * 3/4 = 3/8 = 0.375 ≈ 0.38."
    },
    {
      id: "phys15-11",
      question: "A fluid travelling over an object's surface exerts less pressure than if the fluid was static. This is a statement of:",
      options: [
        "Bernoulli's principle.",
        "principle of continuity.",
        "Pascal's principle.",
        "Archimedes' principle."
      ],
      correctAnswerIndex: 0,
      explanation: "Bernoulli's principle states that an increase in the speed of a fluid occurs simultaneously with a decrease in static pressure."
    },
    {
      id: "phys15-13",
      question: "Which one of the following statements is correct about critical and boiling points of a substance?",
      options: [
        "The critical point and the boiling point of a substance occur at the same specific temperature and pressure.",
        "Both critical temperature and boiling point of a substance can be increased or decreased based on the pressure of the surrounding.",
        "The boiling point of a substance can be different based on the pressure of the surrounding whereas critical point occurs at one specific pressure and temperature.",
        "The critical temperature of a substance can vary with ambient pressure whereas boiling point does not."
      ],
      correctAnswerIndex: 2,
      explanation: "The boiling point depends directly on ambient atmospheric pressure, whereas the critical point (critical temperature and critical pressure) is an intrinsic thermodynamic invariant specific to the pure substance."
    },
    {
      id: "phys15-14",
      question: "A 30 kg rigid object has a moment of inertia 45 kg·m² about an axis through its center of mass. What is the object's moment of inertia when it rotates through a parallel axis 2 m away from its center of mass?",
      options: [
        "90 kg·m²",
        "165 kg·m²",
        "180 kg·m²",
        "105 kg·m²"
      ],
      correctAnswerIndex: 1,
      explanation: "Using the Parallel Axis Theorem: I = I_cm + M*d² = 45 + 30*(2)² = 45 + 120 = 165 kg·m²."
    },
    {
      id: "phys15-15",
      question: "Two coplanar forces act on a uniform horizontal beam. F₁ = 30 N acts downwards at the left end. F₂ = 30 N acts upwards at a distance of 0.80 m to the right of F₁. The moment of force (torque) on the beam is:",
      options: [
        "48.0 Nm",
        "12.0 Nm",
        "30.0 Nm",
        "24.0 Nm"
      ],
      correctAnswerIndex: 3,
      explanation: "The two equal and opposite non-collinear forces form a couple. The torque of a couple is the product of the magnitude of one force and the perpendicular distance between them: τ = F * d = 30 N * 0.80 m = 24.0 Nm."
    },
    {
      id: "phys15-16",
      question: "Water flows at the rate of 500.0 cm³/s at a small cross-section of 5 cm². The larger cross-section is 25 cm². What is the ratio of the speed of the water at A₁ (small) to A₂ (large)?",
      options: [
        "5",
        "100",
        "0.2",
        "20"
      ],
      correctAnswerIndex: 0,
      explanation: "By the Equation of Continuity (A₁V₁ = A₂V₂), the ratio of speeds V₁/V₂ is inversely proportional to the ratio of areas A₂/A₁. Ratio = 25 / 5 = 5."
    },
    {
      id: "phys15-17",
      question: "An ideal monoatomic gas expands adiabatically from an initial volume of 2 liters at a temperature of 300 K to 16 liters of volume. What is the final temperature of the gas? (Ratio of specific heat capacities γ = 5/3).",
      options: [
        "37.5 K",
        "75 K",
        "2400 K",
        "1200 K"
      ],
      correctAnswerIndex: 1,
      explanation: "For an adiabatic process, T₁V₁^(γ-1) = T₂V₂^(γ-1). T₂ = T₁ * (V₁/V₂)^(γ-1) = 300 * (2/16)^(5/3 - 1) = 300 * (1/8)^(2/3) = 300 * (1/4) = 75 K."
    },
    {
      id: "phys15-20",
      question: "A monochromatic light of wavelength λ passes through double slits separated by a distance d. If the path difference between the lights is p and n is an integer (0, 1, 2, ...), which one of the following would be observed on a screen behind the slits?",
      options: [
        "constructive interference if p = (n + 1/2) λ",
        "constructive interference if p = nλ",
        "destructive interference if p = 2nλ",
        "destructive interference if p = 0"
      ],
      correctAnswerIndex: 1,
      explanation: "In Young's double-slit experiment, constructive interference (bright fringes) occurs when the path difference (p) is an integer multiple of the wavelength (nλ)."
    },
    {
      id: "phys15-26",
      question: "A car of mass 1.50 × 10³ kg collides with a wall and rebounds. The initial and final velocities of the car are v_i = -15.0 m/s and v_f = 2.60 m/s, respectively. If the collision lasts for 0.15 s, what is the magnitude of the average force exerted on the car?",
      options: [
        "2.60 × 10⁴ N",
        "3.96 × 10³ N",
        "2.64 × 10⁴ N",
        "1.76 × 10⁵ N"
      ],
      correctAnswerIndex: 3,
      explanation: "Δv = v_f - v_i = 2.60 - (-15.0) = 17.6 m/s. Average acceleration a = Δv / Δt = 17.6 / 0.15 ≈ 117.33 m/s². Force F = m * a = 1500 * 117.33 = 176,000 N = 1.76 × 10⁵ N."
    },
    {
      id: "phys15-27",
      question: "Starting from rest, a block of mass 5.0 kg slides 2.5 m down a rough 37° incline. The coefficient of kinetic friction between the block and the incline is μ_k = 0.44. What is the work done by the friction force on the block?",
      options: [
        "-75.00 J",
        "-18.92 J",
        "-44.00 J",
        "-59.00 J"
      ],
      correctAnswerIndex: 2,
      explanation: "Normal force N = mg cos(37°) ≈ 5.0 * 10 * 0.8 = 40 N. Kinetic friction f_k = μ_k * N = 0.44 * 40 = 17.6 N. Work done by friction W = -f_k * d = -17.6 * 2.5 = -44.0 J."
    },
    {
      id: "phys15-29",
      question: "A wooden block of volume 5.00 × 10⁻⁴ m³ floats partially submerged in water. A small steel object of mass m = 0.25 kg is placed on top of the block. The system is in equilibrium and the top of the wooden block is exactly at the level of the water. What is the density of the wood? (ρ_water = 1000 kg/m³)",
      options: [
        "1000 kg/m³",
        "1500 kg/m³",
        "500 kg/m³",
        "800 kg/m³"
      ],
      correctAnswerIndex: 2,
      explanation: "At equilibrium with the block fully submerged, Buoyant Force = Total Weight. F_B = ρ_w * V * g = 1000 * 5×10⁻⁴ * 10 = 5 N. Total Weight = (m_wood + m_steel) * g = (ρ_wood * 5×10⁻⁴ + 0.25) * 10. Equating them: 5 = 10 * (ρ_wood * 5×10⁻⁴ + 0.25) => 0.5 = ρ_wood * 5×10⁻⁴ + 0.25 => ρ_wood * 5×10⁻⁴ = 0.25 => ρ_wood = 0.25 / 5×10⁻⁴ = 500 kg/m³."
    }
  ]
};
