export interface Question {
  word: string;
  missingIndex: number;
  options: string[];
  image: string;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=400&h=300&fit=crop`;

const img2 = (q: string) => `https://source.unsplash.com/400x300/?${q}`;

export const ALL_QUESTIONS: Question[] = [
  // ================= ANIMALS =================
  {
    word: "CAT",
    missingIndex: 0,
    options: ["C", "H", "R"],
    image: img("photo-1518791841217-8f162f1e1131"),
  },
  {
    word: "CAT",
    missingIndex: 1,
    options: ["A", "O", "E"],
    image: img("photo-1518791841217-8f162f1e1131"),
  },
  {
    word: "CAT",
    missingIndex: 2,
    options: ["T", "N", "R"],
    image: img("photo-1518791841217-8f162f1e1131"),
  },

  {
    word: "DOG",
    missingIndex: 0,
    options: ["D", "R", "H"],
    image: img("photo-1568526381923-caf3fd520382"),
  },
  {
    word: "DOG",
    missingIndex: 1,
    options: ["O", "A", "E"],
    image: img("photo-1568526381923-caf3fd520382"),
  },
  {
    word: "DOG",
    missingIndex: 2,
    options: ["G", "N", "R"],
    image: img("photo-1568526381923-caf3fd520382"),
  },

  {
    word: "COW",
    missingIndex: 0,
    options: ["C", "H", "R"],
    image: img("photo-1500595046743-cd271d694d30"),
  },
  {
    word: "COW",
    missingIndex: 1,
    options: ["O", "A", "E"],
    image: img("photo-1500595046743-cd271d694d30"),
  },
  {
    word: "COW",
    missingIndex: 2,
    options: ["W", "N", "R"],
    image: img("photo-1500595046743-cd271d694d30"),
  },

  {
    word: "HEN",
    missingIndex: 0,
    options: ["H", "R", "C"],
    image: img("photo-1548550023-2bdb3c5beed7"),
  },
  {
    word: "HEN",
    missingIndex: 1,
    options: ["E", "A", "O"],
    image: img("photo-1548550023-2bdb3c5beed7"),
  },
  {
    word: "HEN",
    missingIndex: 2,
    options: ["N", "R", "T"],
    image: img("photo-1548550023-2bdb3c5beed7"),
  },

  // ================= OBJECTS =================
  {
    word: "HAT",
    missingIndex: 0,
    options: ["H", "C", "R"],
    image: img("photo-1520975682031-ae0a16e4c2e0"),
  },
  {
    word: "HAT",
    missingIndex: 1,
    options: ["A", "O", "E"],
    image: img("photo-1520975682031-ae0a16e4c2e0"),
  },
  {
    word: "HAT",
    missingIndex: 2,
    options: ["T", "N", "R"],
    image: img("photo-1520975682031-ae0a16e4c2e0"),
  },

  {
    word: "PEN",
    missingIndex: 0,
    options: ["P", "H", "R"],
    image: img("photo-1583485088034-697b5bc54ccd"),
  },
  {
    word: "PEN",
    missingIndex: 1,
    options: ["E", "A", "O"],
    image: img("photo-1583485088034-697b5bc54ccd"),
  },
  {
    word: "PEN",
    missingIndex: 2,
    options: ["N", "R", "T"],
    image: img("photo-1583485088034-697b5bc54ccd"),
  },

  {
    word: "CUP",
    missingIndex: 0,
    options: ["C", "H", "R"],
    image: img("photo-1509042239860-f550ce710b93"),
  },
  {
    word: "CUP",
    missingIndex: 1,
    options: ["U", "O", "A"],
    image: img("photo-1509042239860-f550ce710b93"),
  },
  {
    word: "CUP",
    missingIndex: 2,
    options: ["P", "R", "T"],
    image: img("photo-1509042239860-f550ce710b93"),
  },


  // ================= FOOD =================
  {
    word: "PAN",
    missingIndex: 0,
    options: ["P", "H", "R"],
    image: img("photo-1588166524941-3bf61a9c41db"),
  },
  {
    word: "PAN",
    missingIndex: 1,
    options: ["A", "O", "E"],
    image: img("photo-1588166524941-3bf61a9c41db"),
  },
  {
    word: "PAN",
    missingIndex: 2,
    options: ["N", "R", "T"],
    image: img("photo-1588166524941-3bf61a9c41db"),
  },



  // ================= REINFORCEMENT (MIXED) =================
  {
    word: "CAP",
    missingIndex: 0,
    options: ["C", "H", "R"],
    image: img2("baseball-cap"),
  },
  {
    word: "CAP",
    missingIndex: 1,
    options: ["A", "O", "U"],
    image: img2("baseball-cap"),
  },
  {
    word: "CAP",
    missingIndex: 2,
    options: ["P", "R", "N"],
    image: img2("baseball-cap"),
  },
  // ===== BAG =====
  {
    word: "BAG",
    missingIndex: 0,
    options: ["B", "C", "R"],
    image: img2("school-bag"),
  },
  {
    word: "BAG",
    missingIndex: 1,
    options: ["A", "O", "U"],
    image: img2("school-bag"),
  },
  {
    word: "BAG",
    missingIndex: 2,
    options: ["G", "R", "N"],
    image: img2("school-bag"),
  },

  // ===== VAN =====
  {
    word: "VAN",
    missingIndex: 0,
    options: ["V", "R", "H"],
    image: img2("van,vehicle"),
  },
  {
    word: "VAN",
    missingIndex: 1,
    options: ["A", "O", "U"],
    image: img2("van,vehicle"),
  },
  {
    word: "VAN",
    missingIndex: 2,
    options: ["N", "R", "S"],
    image: img2("van,vehicle"),
  },

  // ===== DOG =====
  {
    word: "DOG",
    missingIndex: 0,
    options: ["D", "C", "R"],
    image: img2("dog"),
  },
  {
    word: "DOG",
    missingIndex: 1,
    options: ["O", "A", "U"],
    image: img2("dog"),
  },
  {
    word: "DOG",
    missingIndex: 2,
    options: ["G", "R", "N"],
    image: img2("dog"),
  },

  // ===== POT =====
  {
    word: "POT",
    missingIndex: 0,
    options: ["P", "C", "R"],
    image: img2("cooking-pot"),
  },
  {
    word: "POT",
    missingIndex: 1,
    options: ["O", "A", "U"],
    image: img2("cooking-pot"),
  },
  {
    word: "POT",
    missingIndex: 2,
    options: ["T", "R", "N"],
    image: img2("cooking-pot"),
  },

  // ===== SUN =====
  {
    word: "SUN",
    missingIndex: 0,
    options: ["S", "R", "H"],
    image: img2("sun,sky"),
  },
  {
    word: "SUN",
    missingIndex: 1,
    options: ["U", "O", "A"],
    image: img2("sun,sky"),
  },
  {
    word: "SUN",
    missingIndex: 2,
    options: ["N", "R", "S"],
    image: img2("sun,sky"),
  },

  // ===== HAT =====
  {
    word: "HAT",
    missingIndex: 0,
    options: ["H", "C", "R"],
    image: img2("hat"),
  },
  {
    word: "HAT",
    missingIndex: 1,
    options: ["A", "O", "U"],
    image: img2("hat"),
  },
  {
    word: "HAT",
    missingIndex: 2,
    options: ["T", "R", "N"],
    image: img2("hat"),
  },
];
