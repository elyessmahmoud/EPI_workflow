export const CATEGORIES = [
  { name: "HTML/CSS", color: "#3b82f6" },
  { name: "JAVASCRIPT", color: "#16a34a" },
  { name: "REACT", color: "#ef4444" },
  { name: "IOS", color: "#eab308" },
  { name: "ANDROID", color: "#db2777" },
  { name: "DATABASE", color: "#14b8a6" },
  { name: "AI", color: "#f97316" },
  { name: "ADMINISTRATION", color: "#8b5cf6" },
];

export const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "REACT",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997",
    source: "https://www.w3schools.com/html/",
    category: "HTML/CSS",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design and produces software that runs lightning-fast.",
    source: "https://developer.apple.com/swift/",
    category: "IOS",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
