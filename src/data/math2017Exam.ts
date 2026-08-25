import { type Question } from '../services/geminiService';

export const math2017Exam = {
  id: "euee-2017-math-natural",
  title: "2017 E.C. ESSLCE Mathematics (Natural Science)",
  subject: "Math",
  grade: "Grade 12",
  timeLimit: 10800, // 180 minutes (3 hours)
  questions: [
    {
      id: "math-1",
      question: "Which one of the following is an irrational number?",
      options: [
        "$\\sqrt{0.04}$",
        "$1.16222...$",
        "$\\sqrt{29}$",
        "$3.4000$"
      ],
      correctAnswerIndex: 2,
      explanation: "$\\sqrt{0.04} = 0.2$ (rational terminating decimal). $1.16222...$ is a repeating decimal (rational). $\\sqrt{29}$ is irrational because 29 is not a perfect square, producing a non-terminating, non-repeating decimal expansion."
    },
    {
      id: "math-2",
      question: "Which of the following is the simplified form of the expression $\\frac{81\\%}{27\\%}$?",
      options: [
        "$\\sqrt[5]{9}$",
        "$\\sqrt[3]{3}$",
        "$\\frac{1}{3}$",
        "$3$"
      ],
      correctAnswerIndex: 3,
      explanation: "$\\frac{81\\%}{27\\%} = \\frac{81/100}{27/100} = \\frac{81}{27} = 3$."
    },
    {
      id: "math-3",
      question: "When the number $43 \\times 10^8 \\times 10^{-5}$ is written in standard form, it equals:",
      options: [
        "$43 \\times 10^3$",
        "$4.3 \\times 10^3$",
        "$0.43 \\times 10^5$",
        "$4.3 \\times 10^4$"
      ],
      correctAnswerIndex: 3,
      explanation: "Simplify: $43 \\times 10^{8-5} = 43 \\times 10^3 = 43,000$. Standard scientific notation requires $a \\times 10^n$ where $1 \\le a < 10$, so $43,000 = 4.3 \\times 10^4$."
    },
    {
      id: "math-4",
      question: "Given the system of linear equations $\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$ where $a_1, a_2, b_1, b_2, c_1, c_2 \\in \\mathbb{R}$ and $a_2, b_2, c_2 \\neq 0$, then which of the following is true?",
      options: [
        "If $\\frac{a_1}{a_2} = \\frac{c_1}{c_2}$, then the system has no solution.",
        "If $\\frac{b_1}{b_2} = \\frac{c_1}{c_2}$, then the system has unique solution.",
        "If $\\frac{a_1}{a_2} \\neq \\frac{c_1}{c_2}$, then the system has infinitely many solutions.",
        "If $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$, then the system has one solution."
      ],
      correctAnswerIndex: 3,
      explanation: "For two linear equations in two variables, the system has a unique (one) solution if and only if the lines are not parallel, which occurs when their slopes differ: $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$."
    },
    {
      id: "math-5",
      question: "If one of the roots of the equation $2x^2 - 8x + k = 0$ exceeds the other by $2$, then what is the value of $k$?",
      options: [
        "$6$",
        "$4$",
        "$3$",
        "$1$"
      ],
      correctAnswerIndex: 0,
      explanation: "Let the roots be $r$ and $s$ with $r = s + 2$. By Vieta's formulas, sum of roots is $r + s = -(-8)/2 = 4$. Substituting $r$: $(s + 2) + s = 4 \\implies 2s = 2 \\implies s = 1$, and $r = 3$. Product of roots is $r \\cdot s = k/2 \\implies 3 \\cdot 1 = k/2 \\implies k = 6$."
    },
    {
      id: "math-6",
      question: "Let $A = \\{x \\in \\mathbb{Z} : -2 \\le x \\le 2\\}$ and $B = \\{x \\in \\mathbb{N} : 2^x \\le 3x + 1\\}$ are given two sets. Then what is $n(A \\cup B)$?",
      options: [
        "$2$",
        "$6$",
        "$5$",
        "$10$"
      ],
      correctAnswerIndex: 2,
      explanation: "$A = \\{-2, -1, 0, 1, 2\\}$ which contains 5 elements. For natural numbers $\\mathbb{N} = \\{1, 2, 3, ...\\}$: For $x=1$: $2^1 \\le 3(1)+1 \\implies 2 \\le 4$ (True); for $x=2$: $2^2 \\le 3(2)+1 \\implies 4 \\le 7$ (True). Since $\{1,2\} \\subset A$, $A \\cup B = \\{-2, -1, 0, 1, 2\\}$, so $n(A \\cup B) = 5$."
    },
    {
      id: "math-7",
      question: "Let $A = \\{x \\mid 1 \\le x \\le 10\\}$ and $B = \\{x \\mid -1 \\le x \\le 10\\}$ be two sets of real numbers. What is the relative complement of $A$ with respect to $B$?",
      options: [
        "$\\emptyset$",
        "$\\{x \\mid -1 \\le x \\le 1\\}$",
        "$\\{x \\mid -1 \\le x < 1\\}$",
        "$\\{x \\mid -1 \\le x \\le 0\\}$"
      ],
      correctAnswerIndex: 2,
      explanation: "The relative complement of $A$ with respect to $B$ is $B \\setminus A = \\{x \\in B : x \\notin A\\}$. Since $B = [-1, 10]$ and $A = [1, 10]$, removing $A$ from $B$ leaves $[-1, 1)$, which is $\\{x \\mid -1 \\le x < 1\\}$."
    },
    {
      id: "math-8",
      question: "Which of the following statement is true about a relation?",
      options: [
        "The domain and the range of a relation are equal sets.",
        "The range of a relation is the set of all its first coordinates.",
        "The domain of a relation is the set of all its second coordinates.",
        "A relation from $A$ to $B$ is any subset of $A \\times B$ for non-empty sets $A$ and $B$."
      ],
      correctAnswerIndex: 3,
      explanation: "By mathematical definition, a binary relation from set $A$ to set $B$ is any subset of the Cartesian product $A \\times B$."
    },
    {
      id: "math-9",
      question: "What is the minimum value of the function defined by $f(x) = -3 + 4x + x^2$?",
      options: [
        "$1$",
        "$0$",
        "$-2$",
        "$-7$"
      ],
      correctAnswerIndex: 3,
      explanation: "Rewrite in vertex form: $f(x) = x^2 + 4x - 3 = (x + 2)^2 - 4 - 3 = (x + 2)^2 - 7$. Since $(x + 2)^2 \\ge 0$, the minimum value is $-7$, occurring at $x = -2$."
    },
    {
      id: "math-10",
      question: "Which of the following is NOT true about regular polygons?",
      options: [
        "It can be inscribed in a circle.",
        "A circle can be inscribed in a regular polygon.",
        "The measure of each exterior angle of an $n$-sided regular polygon is equal to $\\frac{360^{\\circ}}{n}$.",
        "The measure of each interior angle of an $n$-sided regular polygon is equal to $\\frac{n(180^{\\circ})}{n-2}$."
      ],
      correctAnswerIndex: 3,
      explanation: "The correct formula for the measure of each interior angle of an $n$-sided regular polygon is $\\frac{(n-2)180^{\\circ}}{n}$. Statement D inverts this ratio and is therefore NOT true."
    },
    {
      id: "math-11",
      question: "Suppose two triangles are similar by SSS similarity theorem. If the side lengths of one triangle are $2\\text{cm}, 4\\text{cm}$ and $6\\text{cm}$, and the shorter side of the other triangle is $9\\text{cm}$ long, then what are the lengths (in $\\text{cm}$) of the other two sides of the triangle?",
      options: [
        "$18$ and $27$",
        "$9$ and $27$",
        "$18$ and $21$",
        "$9$ and $21$"
      ],
      correctAnswerIndex: 0,
      explanation: "The scale factor between the similar triangles is $\\frac{9}{2} = 4.5$. The remaining side lengths are $4 \\times 4.5 = 18\\text{ cm}$ and $6 \\times 4.5 = 27\\text{ cm}$."
    },
    {
      id: "math-12",
      question: "A boy and girl are both standing in sunlight. The boy's height is $1.6\\text{m}$ and casts a shadow of $2\\text{m}$. If the girl's shadow is $1.8\\text{m}$, then what is the height (in meters) of the girl?",
      options: [
        "$1.54$",
        "$1.68$",
        "$1.44$",
        "$1.50$"
      ],
      correctAnswerIndex: 2,
      explanation: "Using the ratio of similar right triangles: $\\frac{\\text{height}}{\\text{shadow}} = \\frac{1.6}{2.0} = 0.8$. For the girl: $\\text{height} = 0.8 \\times 1.8\\text{m} = 1.44\\text{m}$."
    },
    {
      id: "math-13",
      question: "Consider a histogram where the values $12, 13, 14, 15, 16, 17$ have frequencies $2, 1, 1, 0, 2, 1$ respectively. Which frequency distribution table represents this data?",
      options: [
        "$V: [12, 13, 14, 15, 16, 17], \\quad f: [2, 1, 1, 0, 2, 1]$",
        "$V: [12, 13, 14, 15, 16, 17], \\quad f: [2, 1, 1, 1, 2, 1]$",
        "$V: [12, 13, 14, 15, 16, 17], \\quad f: [2, 2, 1, 0, 2, 1]$",
        "$V: [12, 13, 14, 15, 16, 17], \\quad f: [2, 2, 1, 2, 2, 1]$"
      ],
      correctAnswerIndex: 0,
      explanation: "Table A correctly reflects the histogram bars: Value 12 has height 2, 13 has height 1, 14 has height 1, 15 has height 0 (no bar), 16 has height 2, and 17 has height 1."
    },
    {
      id: "math-14",
      question: "If a fair six-sided die is tossed once, then what is the probability of getting a factor of $4$?",
      options: [
        "$\\frac{1}{6}$",
        "$\\frac{5}{6}$",
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$"
      ],
      correctAnswerIndex: 3,
      explanation: "The sample space of a fair die is $\\{1, 2, 3, 4, 5, 6\\}$. The factors of 4 are $\\{1, 2, 4\\}$, giving 3 favorable outcomes out of 6. Probability $= \\frac{3}{6} = \\frac{1}{2}$."
    },
    {
      id: "math-15",
      question: "If two vectors $\\vec{V} = \\vec{AB}$ and $\\vec{U} = \\vec{BC}$ are given, then what is the vector $\\vec{V} + \\vec{U}$?",
      options: [
        "$\\vec{BA}$",
        "$\\vec{CA}$",
        "$\\vec{CB}$",
        "$\\vec{AC}$"
      ],
      correctAnswerIndex: 3,
      explanation: "By head-to-tail vector addition: $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
    },
    {
      id: "math-16",
      question: "Let $f(x) = x^3 + 2x + 1$ and $g(x) = x^2 - 1$ be given two polynomial functions. Then which of the following is true?",
      options: [
        "$f(x) + g(x) = x^3 + x^2$",
        "$f(x) - g(x) = x^3 - x^2 + 2x$",
        "$f(x) \\cdot g(x) = x^5 + x^3 + x^2 - 2x - 1$",
        "$\\frac{f(x)}{g(x)} = \\frac{x^2 + 1}{x - 1}$"
      ],
      correctAnswerIndex: 2,
      explanation: "Multiply $f(x)g(x) = (x^3 + 2x + 1)(x^2 - 1) = x^3(x^2 - 1) + 2x(x^2 - 1) + 1(x^2 - 1) = x^5 - x^3 + 2x^3 - 2x + x^2 - 1 = x^5 + x^3 + x^2 - 2x - 1$."
    },
    {
      id: "math-17",
      question: "Let $a, b \\in \\mathbb{R}$ such that $a < b$ and $f$ be a polynomial function. Then which one of the following statements states the Location Theorem (Intermediate Value Theorem for polynomials)?",
      options: [
        "If $f(a)$ and $f(b)$ have the same signs, then there is at least one zero of $f$ between $a$ and $b$.",
        "If $f(a)$ and $f(b)$ have the same signs, then there exist a unique zeros of $f$ between $a$ and $b$.",
        "If $f(a)$ and $f(b)$ have opposite signs, then there is a unique zeros of $f$ between $a$ and $b$.",
        "If $f(a)$ and $f(b)$ have opposite signs, then there is at least one zero of $f$ between $a$ and $b$."
      ],
      correctAnswerIndex: 3,
      explanation: "The Location Theorem states that if a continuous function $f$ has opposite signs at $x=a$ and $x=b$ ($f(a)f(b) < 0$), then $f$ must cross the x-axis, possessing at least one zero in $(a, b)$."
    },
    {
      id: "math-18",
      question: "Which one of the following is the solution set of $5^x = 11.2$? [Use $\\log 5 = 0.6990$ and $\\log 1.12 = 0.0485$]",
      options: [
        "$1.5$",
        "$1.2$",
        "$1.69$",
        "$1.12$"
      ],
      correctAnswerIndex: 0,
      explanation: "Taking common log: $x = \\frac{\\log(11.2)}{\\log 5} = \\frac{\\log(10 \\times 1.12)}{\\log 5} = \\frac{1 + 0.0485}{0.6990} = \\frac{1.0485}{0.6990} \\approx 1.50$."
    },
    {
      id: "math-19",
      question: "Given that $\\log 4.8 = 0.6812$, $\\log 6.93 = 0.8406$, and $\\log 6.84 = 0.8351$. Then what is the value of $\\sqrt{48}$?",
      options: [
        "$6.71$",
        "$6.93$",
        "$6.84$",
        "$6.83$"
      ],
      correctAnswerIndex: 1,
      explanation: "$\\log(\\sqrt{48}) = \\frac{1}{2}\\log(48) = \\frac{1}{2}(\\log 4.8 + \\log 10) = \\frac{1}{2}(0.6812 + 1) = \\frac{1.6812}{2} = 0.8406$. Since $\\log 6.93 = 0.8406$, $\\sqrt{48} \\approx 6.93$."
    },
    {
      id: "math-20",
      question: "Consider the equation $\\log x + \\log(x - 3) = 1$. Then what is its solution set?",
      options: [
        "$\\{2, -5\\}$",
        "$\\{-2, 5\\}$",
        "$\\{6\\}$",
        "$\\{5\\}$"
      ],
      correctAnswerIndex: 3,
      explanation: "Combine logs: $\\log[x(x - 3)] = 1 \\implies x(x - 3) = 10^1 \\implies x^2 - 3x - 10 = 0 \\implies (x - 5)(x + 2) = 0$. Since $\\log x$ requires $x > 3$, $x = -2$ is extraneous, leaving solution set $\\{5\\}$."
    },
    {
      id: "math-21",
      question: "If the number of bacteria in a certain laboratory colony grows at the rate of $5\\%$ per day and assuming that there are $1000$ bacteria present initially, then what would be the approximate number of bacteria present after $3$ days?",
      options: [
        "$1102$",
        "$1158$",
        "$1050$",
        "$1105$"
      ],
      correctAnswerIndex: 1,
      explanation: "Using compound growth formula: $N(t) = N_0(1 + r)^t = 1000(1 + 0.05)^3 = 1000(1.157625) \\approx 1158$."
    },
    {
      id: "math-22",
      question: "Consider the line segment $PQ$ with $P = (1, -1)$ and $Q = (4, 2)$. Then which of the following point divides $PQ$ internally in the ratio of $2 : 1$?",
      options: [
        "$(2, 0)$",
        "$(2, 1)$",
        "$(3, 0)$",
        "$(3, 1)$"
      ],
      correctAnswerIndex: 3,
      explanation: "Using section formula with $m=2, n=1$: $x = \\frac{2(4) + 1(1)}{2 + 1} = \\frac{9}{3} = 3$; $y = \\frac{2(2) + 1(-1)}{2 + 1} = \\frac{3}{3} = 1$. The point is $(3, 1)$."
    },
    {
      id: "math-23",
      question: "What is the equation of a line that passes through $(-2, 5)$ and has a slope $\\frac{1}{2}$?",
      options: [
        "$y = 2x + 12$",
        "$2y + x = 5$",
        "$y = \\frac{1}{2}x + 5$",
        "$2y - x - 12 = 0$"
      ],
      correctAnswerIndex: 3,
      explanation: "Point-slope form: $y - 5 = \\frac{1}{2}(x - (-2)) \\implies 2(y - 5) = x + 2 \\implies 2y - 10 = x + 2 \\implies 2y - x - 12 = 0$."
    },
    {
      id: "math-24",
      question: "Let $\\theta$ be an angle in standard position and $(x, y)$ be a point on the terminal side of $\\theta$, which is different from the origin. Let $r$ be the distance from $(x, y)$ to the origin. Then which of the following defines $\\cos\\theta$?",
      options: [
        "$\\frac{y}{r}$",
        "$\\frac{r}{x}$",
        "$\\frac{x}{r}$",
        "$\\frac{r}{y}$"
      ],
      correctAnswerIndex: 2,
      explanation: "In trigonometry for general angles in standard position, $\\cos\\theta = \\frac{x}{r}$ where $r = \\sqrt{x^2 + y^2}$."
    },
    {
      id: "math-25",
      question: "Consider the graph of a trigonometric function on $[-\\frac{\\pi}{2}, \\frac{5\\pi}{2}]$ passing through $(0,0)$, peaking at $(\\frac{\\pi}{2}, 1)$, passing through $(\\pi, 0)$, and with a trough at $(\\frac{3\\pi}{2}, -1)$. Which function represents this graph?",
      options: [
        "$y = \\sin x$",
        "$y = \\csc x$",
        "$y = \\cos x$",
        "$y = \\sec x$"
      ],
      correctAnswerIndex: 0,
      explanation: "The curve passes through the origin $(0,0)$ with amplitude 1 and standard sine period $2\\pi$, defining $y = \\sin x$."
    },
    {
      id: "math-26",
      question: "Which of the following is true about the cosecant value of the given angles?",
      options: [
        "$\\csc 135^{\\circ} = -\\sqrt{2}$",
        "$\\csc 45^{\\circ} = \\frac{1}{\\sqrt{2}}$",
        "$\\csc 45^{\\circ} = \\sqrt{2}$",
        "$\\csc 135^{\\circ} = -\\frac{1}{\\sqrt{2}}$"
      ],
      correctAnswerIndex: 2,
      explanation: "$\\csc 45^{\\circ} = \\frac{1}{\\sin 45^{\\circ}} = \\frac{1}{1/\\sqrt{2}} = \\sqrt{2}$."
    },
    {
      id: "math-27",
      question: "In a circle geometry figure, chords intersect such that $m(\\angle CPE) = 30^{\\circ}$ and $m(\\angle AFE) = 55^{\\circ}$. What is the value of $m(\\angle AMC)$?",
      options: [
        "$30^{\\circ}$",
        "$50^{\\circ}$",
        "$25^{\\circ}$",
        "$60^{\\circ}$"
      ],
      correctAnswerIndex: 2,
      explanation: "Using exterior angle and intercepted arc relations for intersected chords: $m(\\angle AMC) = 55^{\\circ} - 30^{\\circ} = 25^{\\circ}$."
    },
    {
      id: "math-28",
      question: "What is the total surface area (in $\\text{cm}^2$) of the cylinder whose radius is $2\\text{cm}$ and height is $7\\text{cm}$?",
      options: [
        "$28\\pi$",
        "$36\\pi$",
        "$98\\pi$",
        "$49\\pi$"
      ],
      correctAnswerIndex: 1,
      explanation: "Total surface area $= 2\\pi r(h + r) = 2\\pi(2)(7 + 2) = 4\\pi(9) = 36\\pi\\text{ cm}^2$."
    },
    {
      id: "math-29",
      question: "If a square pyramid has a base side of $6\\text{cm}$ long and its lateral faces are equilateral triangles, then what is its volume (in $\\text{cm}^3$)?",
      options: [
        "$3\\sqrt{2}$",
        "$48$",
        "$36\\sqrt{2}$",
        "$72$"
      ],
      correctAnswerIndex: 2,
      explanation: "Base area $B = 6^2 = 36$. For equilateral triangular faces of side $6$, each slant edge is $6$. Distance from base center to corner is $\\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$. Height $h = \\sqrt{6^2 - (3\\sqrt{2})^2} = \\sqrt{36 - 18} = \\sqrt{18} = 3\\sqrt{2}\\text{ cm}$. Volume $= \\frac{1}{3} B h = \\frac{1}{3}(36)(3\\sqrt{2}) = 36\\sqrt{2}\\text{ cm}^3$."
    },
    {
      id: "math-30",
      question: "Which of the following statement defines a frustum of a cone?",
      options: [
        "It is a part of a cone included between the base and a horizontal cross-section made by a plane parallel to the base.",
        "It is a part of a cone included between the vertex and a horizontal cross-section made by a plane parallel to the base.",
        "It is a part of a cone included between the base and a horizontal cross-section made by a plane.",
        "It is a part of a cone included between the vertex and a horizontal cross-section made by a plane."
      ],
      correctAnswerIndex: 0,
      explanation: "A frustum of a cone is the portion of a cone that lies between the base and a cutting plane parallel to the base."
    },
    {
      id: "math-31",
      question: "Which one of the following function is NOT a power function?",
      options: [
        "$f(x) = \\sqrt{2}x^2$",
        "$f(x) = \\pi x^5$",
        "$f(x) = (\\sqrt{3})^x$",
        "$f(x) = x^{-\\frac{3}{5}}$"
      ],
      correctAnswerIndex: 2,
      explanation: "A power function is of the form $f(x) = k x^a$ where the base is the variable $x$. $f(x) = (\\sqrt{3})^x$ has a constant base and variable exponent, making it an exponential function."
    },
    {
      id: "math-32",
      question: "Which of the following statement defines the greatest integer function given by $f(x) = \\lfloor x \\rfloor$?",
      options: [
        "It is an integer less than or greater than $x$.",
        "It is an integer less than or equal to $x$ (specifically the greatest such integer).",
        "It is the least integer greater than $x$.",
        "It is an integer greater than or equal to $x$."
      ],
      correctAnswerIndex: 1,
      explanation: "The floor function $\\lfloor x \\rfloor$ returns the largest integer that is less than or equal to $x$."
    },
    {
      id: "math-33",
      question: "Which one of the following expression is the correct partial fraction decomposition of the rational expression $\\frac{2x - 3}{x^2 + x - 2}$?",
      options: [
        "$\\frac{1}{3 - 3x} + \\frac{7}{3x + 6}$",
        "$\\frac{1}{1 - x} + \\frac{5}{3x + 6}$",
        "$\\frac{7}{3x + 2} - \\frac{1}{x + 1}$",
        "$\\frac{5}{3x + 2} + \\frac{1}{x + 1}$"
      ],
      correctAnswerIndex: 0,
      explanation: "Factor denominator: $x^2 + x - 2 = (x + 2)(x - 1)$. $\\frac{2x - 3}{(x+2)(x-1)} = \\frac{A}{x+2} + \\frac{B}{x-1}$. Setting $x=1 \\implies -1 = 3B \\implies B = -1/3$. Setting $x=-2 \\implies -7 = -3A \\implies A = 7/3$. Thus $\\frac{7/3}{x+2} - \\frac{1/3}{x-1} = \\frac{7}{3x+6} + \\frac{1}{3-3x}$."
    },
    {
      id: "math-34",
      question: "Consider the graph of a rational function with vertical asymptotes at $x = -1$ and $x = 1$, horizontal asymptote $y = 0$, and odd symmetry passing through the origin $(0, 0)$. Which function is represented?",
      options: [
        "$f(x) = \\frac{x}{x^2 - 1}$",
        "$f(x) = \\frac{x}{x^2 + 1}$",
        "$f(x) = \\frac{x^2}{x^2 - 1}$",
        "$f(x) = \\frac{x^2}{1 - x^2}$"
      ],
      correctAnswerIndex: 0,
      explanation: "The function $f(x) = \\frac{x}{x^2 - 1}$ is odd ($f(-x) = -f(x)$), has vertical asymptotes where $x^2 - 1 = 0 \\implies x = \\pm 1$, and horizontal asymptote $y = 0$ as $x \\to \\pm\\infty$."
    },
    {
      id: "math-35",
      question: "If $\\begin{pmatrix} x+y & 2 \\\\ 5 & 3 \\end{pmatrix} = \\begin{pmatrix} 7 & 2 \\\\ 5 & x-y \\end{pmatrix}$, then what is the value of $x$?",
      options: [
        "$-5$",
        "$5$",
        "$2$",
        "$-2$"
      ],
      correctAnswerIndex: 1,
      explanation: "Equating corresponding entries: $x + y = 7$ and $x - y = 3$. Adding both equations: $2x = 10 \\implies x = 5$."
    },
    {
      id: "math-36",
      question: "Which of the following statement is true about the given systems of linear equations?",
      options: [
        "$\\begin{cases} 2x + y = 0 \\\\ x - 4y = 0 \\end{cases}$ is a non-homogeneous system.",
        "$\\begin{cases} x + 3y = 2 \\\\ 2x - 5y = 1 \\end{cases}$ is a non-homogeneous system.",
        "$\\begin{cases} 3x - y = 1 \\\\ x + 3y = 0 \\end{cases}$ is a homogeneous system.",
        "$\\begin{cases} x + 3y = 6 \\\\ 2x - 5y = 2 \\end{cases}$ is a homogeneous system."
      ],
      correctAnswerIndex: 1,
      explanation: "A linear system is non-homogeneous when at least one constant term on the right-hand side is non-zero. In option B, constants are $2$ and $1$."
    },
    {
      id: "math-37",
      question: "What is the determinant of the matrix $\\begin{pmatrix} \\frac{1}{2} & 1 & \\frac{3}{2} \\\\ 2 & \\frac{5}{2} & 3 \\\\ \\frac{7}{2} & 4 & \\frac{9}{2} \\end{pmatrix}$?",
      options: [
        "$0$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{8}$",
        "$1$"
      ],
      correctAnswerIndex: 0,
      explanation: "Notice the arithmetic progression in rows: Row 2 minus Row 1 gives $(1.5, 1.5, 1.5)$, and Row 3 minus Row 2 gives $(1.5, 1.5, 1.5)$. Since two row differences are identical, the rows are linearly dependent, so the determinant is $0$."
    },
    {
      id: "math-38",
      question: "Which of the following matrix is the inverse of the matrix $\\begin{pmatrix} 1 & -1 & 2 \\\\ 1 & 0 & 1 \\\\ 3 & 1 & 3 \\end{pmatrix}$?",
      options: [
        "$\\begin{pmatrix} 1 & 5 & -1 \\\\ -3 & 0 & 1 \\\\ -4 & -1 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} -1 & 5 & -1 \\\\ 0 & -3 & 1 \\\\ 1 & -4 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} -1 & 0 & 1 \\\\ 5 & 3 & 4 \\\\ 1 & -1 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} -1 & 0 & 1 \\\\ 5 & -3 & -4 \\\\ -1 & 1 & 1 \\end{pmatrix}$"
      ],
      correctAnswerIndex: 1,
      explanation: "Multiplying $\\begin{pmatrix} 1 & -1 & 2 \\\\ 1 & 0 & 1 \\\\ 3 & 1 & 3 \\end{pmatrix} \\begin{pmatrix} -1 & 5 & -1 \\\\ 0 & -3 & 1 \\\\ 1 & -4 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} = I_3$."
    },
    {
      id: "math-39",
      question: "Which of the following statement describes the difference between scalar and vector quantities?",
      options: [
        "Physical quantities that only have magnitude are scalars, while that have both magnitude and direction are vectors.",
        "Physical quantities that only have magnitude are vectors, while that have both magnitude and direction are scalars.",
        "Physical quantities that only have direction are vectors, while that have both magnitude and direction are scalars.",
        "Physical quantities that only have direction are scalars, while that have only magnitude are vectors."
      ],
      correctAnswerIndex: 0,
      explanation: "By standard physical definition: Scalars have magnitude only (e.g., mass, time), whereas vectors have both magnitude and direction (e.g., velocity, force)."
    },
    {
      id: "math-40",
      question: "Which of the following statement is true about types of data?",
      options: [
        "The height of students in a class is a qualitative data.",
        "The weight of students in class is a qualitative data.",
        "The gender of students in a class is a quantitative data.",
        "The age of students in a class is a quantitative data."
      ],
      correctAnswerIndex: 3,
      explanation: "Age is measured numerically on a continuous scale, so it is quantitative data."
    },
    {
      id: "math-41",
      question: "Consider the grouped frequency distribution table with classes $0-9, 10-19, 20-29, 30-39, 40-49$. What is the class midpoint of the fourth class?",
      options: [
        "$34.5$",
        "$35.5$",
        "$24.5$",
        "$55.5$"
      ],
      correctAnswerIndex: 0,
      explanation: "The fourth class is $30-39$. Midpoint $= \\frac{30 + 39}{2} = 34.5$."
    },
    {
      id: "math-42",
      question: "The table shows age distribution of children: Intervals $2-4$ ($f=4$), $5-7$ ($f=1$), $8-10$ ($f=2$), $11-13$ ($f=3$). What is the mean age of the children (in years)?",
      options: [
        "$6.9$",
        "$7.5$",
        "$7.2$",
        "$6.6$"
      ],
      correctAnswerIndex: 2,
      explanation: "Midpoints: $3, 6, 9, 12$. $\\sum (f \\cdot x) = 4(3) + 1(6) + 2(9) + 3(12) = 12 + 6 + 18 + 36 = 72$. Total frequency $N = 4 + 1 + 2 + 3 = 10$. $\\text{Mean} = \\frac{72}{10} = 7.2$."
    },
    {
      id: "math-43",
      question: "Which one of the following distribution is multimodal?",
      options: [
        "$6, 10, 9, 6, 10, 4$",
        "$8, 7, 11, 13, 17, 9, 8, 7, 6, 11$",
        "$12, 13, 26, 15, 25, 38, 28, 27, 32$",
        "$18, 14, 15, 10, 11, 3, 18, 12$"
      ],
      correctAnswerIndex: 1,
      explanation: "In dataset B, the numbers 7, 8, and 11 each appear twice, making it trimodal (multimodal with the highest number of distinct modes)."
    },
    {
      id: "math-44",
      question: "Suppose that we have $4$ objects chosen $3$ at a time. Then which of the following statement is true?",
      options: [
        "The number of combinations is $24$.",
        "The number of permutations is $24$.",
        "The number of permutations is $6$.",
        "The number of combinations is $6$."
      ],
      correctAnswerIndex: 1,
      explanation: "Permutations $P(4, 3) = \\frac{4!}{(4-3)!} = \\frac{24}{1} = 24$. Combinations $C(4, 3) = \\frac{4!}{3!1!} = 4$."
    },
    {
      id: "math-45",
      question: "Which one of the following statements defines favorable outcomes in a random experiment?",
      options: [
        "The outcomes containing all sample elements.",
        "The outcomes containing only one sample element.",
        "The outcomes that have equal chance of being chosen.",
        "The outcomes that ensure the occurrence of a particular result."
      ],
      correctAnswerIndex: 3,
      explanation: "Favorable outcomes are the specific experimental outcomes belonging to the event of interest, ensuring that event occurs."
    },
    {
      id: "math-46",
      question: "Which of the following statement defines geometric progression?",
      options: [
        "It is a sequence in which the difference between consecutive terms is a positive constant.",
        "It is a sequence in which the difference between consecutive terms is a non-zero constant.",
        "It is a sequence in which the ratio between consecutive terms is a positive constant.",
        "It is a sequence in which the ratio between consecutive terms is a non-zero constant."
      ],
      correctAnswerIndex: 3,
      explanation: "A geometric progression is defined by a common ratio $r = \\frac{a_{n+1}}{a_n}$ that is a non-zero constant (it can be positive or negative)."
    },
    {
      id: "math-47",
      question: "Given the sequence $3, 6, 12, 24, ...$, then what is the $10^{\\text{th}}$ partial sum of the sequence?",
      options: [
        "$3075$",
        "$1023$",
        "$1027$",
        "$3069$"
      ],
      correctAnswerIndex: 3,
      explanation: "Geometric series with first term $a = 3$ and common ratio $r = 2$. Sum $S_{10} = \\frac{a(r^{10} - 1)}{r - 1} = \\frac{3(2^{10} - 1)}{2 - 1} = 3(1024 - 1) = 3(1023) = 3069$."
    },
    {
      id: "math-48",
      question: "Which of the following statement is true about the given infinite series?",
      options: [
        "$\\sum_{n=1}^{\\infty} (\\frac{4}{3})^n$ is convergent.",
        "$\\sum_{n=1}^{\\infty} 2^n$ is divergent.",
        "$\\sum_{n=1}^{\\infty} (-1)^n (\\frac{2}{5})^n$ is divergent.",
        "$\\sum_{n=1}^{\\infty} (-1)^n 2^n$ is convergent."
      ],
      correctAnswerIndex: 1,
      explanation: "An infinite geometric series converges if and only if $|r| < 1$. For $\\sum 2^n$, $r = 2 > 1$, so the series is divergent."
    },
    {
      id: "math-49",
      question: "What is the average rate of change of $g(x) = x^3 - 2x$ over the interval $1 \\le x \\le 6$?",
      options: [
        "$41$",
        "$\\frac{37}{5}$",
        "$46$",
        "$\\frac{203}{5}$"
      ],
      correctAnswerIndex: 0,
      explanation: "Average rate of change $= \\frac{g(6) - g(1)}{6 - 1} = \\frac{(6^3 - 2(6)) - (1^3 - 2(1))}{5} = \\frac{(216 - 12) - (1 - 2)}{5} = \\frac{204 - (-1)}{5} = \\frac{205}{5} = 41$."
    },
    {
      id: "math-50",
      question: "Suppose $f(x) = 3\\sqrt{x}$ and $g(x) = \\frac{1}{3}x^4 + 2x$ be given two functions. Then which of the following is equal to $(f + g)'(x)$?",
      options: [
        "$\\frac{2}{3}x^{-\\frac{1}{3}} + 4x^3 + 2x$",
        "$\\frac{2}{3}x^{-\\frac{1}{3}} + 4x^3 + 2$",
        "$\\frac{3}{2}x^{-\\frac{1}{2}} + \\frac{4}{3}x^3 + 2$",
        "$3x^{-\\frac{1}{2}} + 4x^3 + 2$"
      ],
      correctAnswerIndex: 2,
      explanation: "$f'(x) = 3 \\cdot \\frac{1}{2}x^{-1/2} = \\frac{3}{2}x^{-1/2}$. $g'(x) = \\frac{1}{3}(4x^3) + 2 = \\frac{4}{3}x^3 + 2$. $(f+g)'(x) = \\frac{3}{2}x^{-1/2} + \\frac{4}{3}x^3 + 2$."
    },
    {
      id: "math-51",
      question: "Let $f(x) = (1 - 2x)^{\\frac{1}{2}}$. Then what is the value of $f'(x)$?",
      options: [
        "$-\\frac{1}{2}\\sqrt{1 - 2x}$",
        "$\\frac{1}{2}\\sqrt{1 - 2x}$",
        "$-\\frac{1}{\\sqrt{1 - 2x}}$",
        "$\\frac{1}{\\sqrt{1 - 2x}}$"
      ],
      correctAnswerIndex: 2,
      explanation: "Using the chain rule: $f'(x) = \\frac{1}{2}(1 - 2x)^{-1/2} \\cdot \\frac{d}{dx}(1 - 2x) = \\frac{1}{2}(1 - 2x)^{-1/2}(-2) = -\\frac{1}{\\sqrt{1 - 2x}}$."
    },
    {
      id: "math-52",
      question: "Consider the function $f(x) = x^3 - 3x^2 + 3$ on $(-2, 3)$. Then which of the following point is local minimum and local maximum of $f(x)$ respectively?",
      options: [
        "$(0, 3)$ and $(2, -1)$",
        "$(3, 3)$ and $(-2, -27)$",
        "$(2, -1)$ and $(0, 3)$",
        "$(-2, -27)$ and $(0, 3)$"
      ],
      correctAnswerIndex: 2,
      explanation: "Find critical points: $f'(x) = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0, 2$. $f''(x) = 6x - 6$. $f''(0) = -6 < 0$ (local maximum at $(0, f(0)) = (0, 3)$). $f''(2) = 6 > 0$ (local minimum at $(2, f(2)) = (2, -1)$)."
    },
    {
      id: "math-53",
      question: "Which one of the following statements describes the dispersion of data values?",
      options: [
        "It measures the variability in terms of different units of data.",
        "The degree to which numerical data tends to distribute about an average.",
        "It helps to describe the degree of similarity of data values.",
        "It compares the variability of two or more data that are dependent of the units of measurement."
      ],
      correctAnswerIndex: 1,
      explanation: "Dispersion quantifies how much data spreads or scatters around a central measure of location (mean or median)."
    },
    {
      id: "math-54",
      question: "Consider the data: $13, 16, 19, 19, 19, 19, 24, 27$. What is the mean deviation about the mode?",
      options: [
        "$2.75$",
        "$3.75$",
        "$3$",
        "$4$"
      ],
      correctAnswerIndex: 0,
      explanation: "Mode $= 19$ (appears 4 times). Deviations from mode: $|13-19|=6, |16-19|=3, 4(0), |24-19|=5, |27-19|=8$. Sum of deviations $= 6 + 3 + 0 + 5 + 8 = 22$. Mean deviation $= \\frac{22}{8} = 2.75$."
    },
    {
      id: "math-55",
      question: "What is the coefficient of quartile deviation for the data: $29, 44, 46, 52, 35, 35, 25, 15, 10, 55, 56$?",
      options: [
        "$0.35$",
        "$0.48$",
        "$2.08$",
        "$2.85$"
      ],
      correctAnswerIndex: 0,
      explanation: "Sorted data ($n=11$): $10, 15, 25, 29, 35, 35, 44, 46, 52, 55, 56$. $Q_1 = 3^{\\text{rd}}\\text{ term} = 25$. $Q_3 = 9^{\\text{th}}\\text{ term} = 52$. Coefficient of quartile deviation $= \\frac{Q_3 - Q_1}{Q_3 + Q_1} = \\frac{52 - 25}{52 + 25} = \\frac{27}{77} \\approx 0.35$."
    },
    {
      id: "math-56",
      question: "Consider the data: $1, 3, 7, 9, 11, 13, 18, 28$. Then the coefficient of mean deviation about the median is equal to:",
      options: [
        "$\\frac{8}{5}$",
        "$\\frac{5}{8}$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{4}$"
      ],
      correctAnswerIndex: 1,
      explanation: "Median $= \\frac{9 + 11}{2} = 10$. Absolute deviations from 10: $|1-10|=9, |3-10|=7, |7-10|=3, |9-10|=1, |11-10|=1, |13-10|=3, |18-10|=8, |28-10|=18$. Sum $= 50$. Mean deviation $= \\frac{50}{8} = 6.25$. Coefficient of MD $= \\frac{6.25}{10} = 0.625 = \\frac{5}{8}$."
    },
    {
      id: "math-57",
      question: "Given the objective function $Z = -x + 2y$ subjected to constraints $\\begin{cases} x \\ge 3 \\\\ x + y \\ge 5 \\\\ x + 2y \\le 6 \\\\ y \\ge 0 \\end{cases}$. What are the maximum and the minimum values of $Z$ respectively?",
      options: [
        "$1$ and $-2$",
        "$-2$ and $-6$",
        "$-6$ and $-2$",
        "$-2$ and $1$"
      ],
      correctAnswerIndex: 1,
      explanation: "Corner vertices of feasible region: $(4, 1) \\implies Z = -4 + 2(1) = -2$; $(5, 0) \\implies Z = -5 + 0 = -5$; $(6, 0) \\implies Z = -6 + 0 = -6$. Maximum value is $-2$ (at $(4,1)$) and minimum value is $-6$ (at $(6,0)$)."
    },
    {
      id: "math-58",
      question: "A company assembles flat and curved TVs. It costs Birr 15,000 to assemble flat and Birr 20,000 for curved, allocating at most Birr 900,000. Storage capacity is at most 50 TVs. Let $x$ be flat and $y$ curved screens. Which inequalities model the system?",
      options: [
        "$\\begin{cases} 15,000x + 20,000y \\le 900,000 \\\\ x + y \\le 50 \\\\ x, y \\ge 0 \\end{cases}$",
        "$\\begin{cases} 15,000x + 20,000y \\le 360,000 \\\\ x + y \\le 50 \\\\ x, y \\ge 0 \\end{cases}$",
        "$\\begin{cases} 20,000x + 15,000y \\le 900,000 \\\\ x + y \\le 50 \\\\ x, y \\ge 0 \\end{cases}$",
        "$\\begin{cases} 20,000x + 15,000y \\le 360,000 \\\\ x + y \\le 50 \\\\ x, y \\ge 0 \\end{cases}$"
      ],
      correctAnswerIndex: 0,
      explanation: "The budget constraint is $15,000x + 20,000y \\le 900,000$, storage is $x + y \\le 50$, and non-negativity is $x \\ge 0, y \\ge 0$."
    },
    {
      id: "math-59",
      question: "A company offers a discount of $25\\%$ on one of its products for promotion. What is a regular price of the product if it is purchased for Birr $99$?",
      options: [
        "$198$",
        "$132$",
        "$125$",
        "$110$"
      ],
      correctAnswerIndex: 1,
      explanation: "Discounted price $= P(1 - 0.25) = 0.75P = 99 \\implies P = \\frac{99}{0.75} = 132\\text{ Birr}$."
    },
    {
      id: "math-60",
      question: "A worker borrowed Birr $100,000$. She agreed to pay $10\\%$ of the loan during agreement and the remaining amount in $36$ monthly installments of Birr $3,000$. What is the total amount of money she paid?",
      options: [
        "$\\text{Birr } 118,000$",
        "$\\text{Birr } 108,000$",
        "$\\text{Birr } 116,000$",
        "$\\text{Birr } 106,000$"
      ],
      correctAnswerIndex: 0,
      explanation: "Down payment $= 10\\% \\text{ of } 100,000 = 10,000\\text{ Birr}$. Total monthly installments $= 36 \\times 3,000 = 108,000\\text{ Birr}$. Total paid $= 10,000 + 108,000 = 118,000\\text{ Birr}$."
    }
  ] as Question[]
};
