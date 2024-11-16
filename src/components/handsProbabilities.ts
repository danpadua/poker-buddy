/* eslint-disable no-dupe-keys */
export type HandsProbabilities = {
  [key: string]: {
    fold: number;
    checkCall: number;
    raise: number;
  };
};

export const handsProbabilities: HandsProbabilities = {
  "AA": { fold: 5, checkCall: 10, raise: 85 },
  "AKs": { fold: 10, checkCall: 20, raise: 70 },
  "AQs": { fold: 15, checkCall: 25, raise: 60 },
  "AJs": { fold: 20, checkCall: 30, raise: 50 },
  "ATs": { fold: 25, checkCall: 35, raise: 40 },
  "A9s": { fold: 30, checkCall: 40, raise: 30 },
  "A8s": { fold: 35, checkCall: 45, raise: 20 },
  "A7s": { fold: 40, checkCall: 50, raise: 10 },
  "A6s": { fold: 45, checkCall: 50, raise: 5 },
  "A5s": { fold: 50, checkCall: 50, raise: 0 },
  "A4s": { fold: 50, checkCall: 50, raise: 0 },
  "A3s": { fold: 50, checkCall: 50, raise: 0 },
  "A2s": { fold: 50, checkCall: 50, raise: 0 },

  "AKo": { fold: 10, checkCall: 20, raise: 70 },
  "KK": { fold: 10, checkCall: 20, raise: 70 },
  "KQs": { fold: 15, checkCall: 25, raise: 60 },
  "KJs": { fold: 20, checkCall: 30, raise: 50 },
  "KTs": { fold: 25, checkCall: 35, raise: 40 },
  "K9s": { fold: 30, checkCall: 40, raise: 30 },
  "K8s": { fold: 35, checkCall: 45, raise: 20 },
  "K7s": { fold: 40, checkCall: 50, raise: 10 },
  "K6s": { fold: 45, checkCall: 50, raise: 5 },
  "K5s": { fold: 50, checkCall: 50, raise: 0 },
  "K4s": { fold: 50, checkCall: 50, raise: 0 },
  "K3s": { fold: 50, checkCall: 50, raise: 0 },
  "K2s": { fold: 50, checkCall: 50, raise: 0 },

  "AQo": { fold: 15, checkCall: 25, raise: 60 },
  "KQo": { fold: 20, checkCall: 30, raise: 50 },
  "QQ": { fold: 10, checkCall: 20, raise: 70 },
  "QJs": { fold: 25, checkCall: 35, raise: 40 },
  "QTs": { fold: 30, checkCall: 40, raise: 30 },
  "Q9s": { fold: 35, checkCall: 45, raise: 20 },
  "Q8s": { fold: 40, checkCall: 50, raise: 10 },
  "Q7s": { fold: 45, checkCall: 50, raise: 5 },
  "Q6s": { fold: 50, checkCall: 50, raise: 0 },
  "Q5s": { fold: 50, checkCall: 50, raise: 0 },
  "Q4s": { fold: 50, checkCall: 50, raise: 0 },
  "Q3s": { fold: 50, checkCall: 50, raise: 0 },
  "Q2s": { fold: 50, checkCall: 50, raise: 0 },

  "AJo": { fold: 20, checkCall: 30, raise: 50 },
  "KJo": { fold: 25, checkCall: 35, raise: 40 },
  "QJo": { fold: 30, checkCall: 40, raise: 30 },
  "JJ": { fold: 10, checkCall: 20, raise: 70 },
  "JTs": { fold: 25, checkCall: 35, raise: 40 },
  "J9s": { fold: 30, checkCall: 40, raise: 30 },
  "J8s": { fold: 35, checkCall: 45, raise: 20 },
  "J7s": { fold: 40, checkCall: 50, raise: 10 },
  "J6s": { fold: 45, checkCall: 50, raise: 5 },
  "J5s": { fold: 50, checkCall: 50, raise: 0 },
  "J4s": { fold: 50, checkCall: 50, raise: 0 },
  "J3s": { fold: 50, checkCall: 50, raise: 0 },
  "J2s": { fold: 50, checkCall: 50, raise: 0 },

  "ATo": { fold: 25, checkCall: 35, raise: 40 },
  "KTo": { fold: 30, checkCall: 40, raise: 30 },
  "QTo": { fold: 35, checkCall: 45, raise: 20 },
  "JTo": { fold: 40, checkCall: 50, raise: 10 },
  "TT": { fold: 15, checkCall: 25, raise: 60 },
  "T9s": { fold: 35, checkCall: 45, raise: 20 },
  "T8s": { fold: 40, checkCall: 50, raise: 10 },
  "T7s": { fold: 45, checkCall: 50, raise: 5 },
  "T6s": { fold: 50, checkCall: 50, raise: 0 },
  "T5s": { fold: 50, checkCall: 50, raise: 0 },
  "T4s": { fold: 50, checkCall: 50, raise: 0 },
  "T3s": { fold: 50, checkCall: 50, raise: 0 },
  "T2s": { fold: 50, checkCall: 50, raise: 0 },

  "A9o": { fold: 30, checkCall: 40, raise: 30 },
  "K9o": { fold: 35, checkCall: 45, raise: 20 },
  "Q9o": { fold: 40, checkCall: 50, raise: 10 },
  "J9o": { fold: 45, checkCall: 50, raise: 5 },
  "99": { fold: 20, checkCall: 30, raise: 50 },
  "98s": { fold: 40, checkCall: 50, raise: 10 },
  "97s": { fold: 45, checkCall: 50, raise: 5 },
  "96s": { fold: 50, checkCall: 50, raise: 0 },
  "95s": { fold: 50, checkCall: 50, raise: 0 },
  "94s": { fold: 50, checkCall: 50, raise: 0 },
  "93s": { fold: 50, checkCall: 50, raise: 0 },
  "92s": { fold: 50, checkCall: 50, raise: 0 },

  "A8o": { fold: 35, checkCall: 45, raise: 20 },
  "K8o": { fold: 40, checkCall: 50, raise: 10 },
  "Q8o": { fold: 45, checkCall: 50, raise: 5 },
  "J8o": { fold: 50, checkCall: 50, raise: 0 },
  "88": { fold: 30, checkCall: 40, raise: 30 },
  "87s": { fold: 45, checkCall: 50, raise: 5 },
  "86s": { fold: 50, checkCall: 50, raise: 0 },
  "85s": { fold: 50, checkCall: 50, raise: 0 },
  "84s": { fold: 50, checkCall: 50, raise: 0 },
  "83s": { fold: 50, checkCall: 50, raise: 0 },
  "82s": { fold: 50, checkCall: 50, raise: 0 },

  "A7o": { fold: 40, checkCall: 50, raise: 10 },
  "K7o": { fold: 45, checkCall: 50, raise: 5 },
  "Q7o": { fold: 50, checkCall: 50, raise: 0 },
  "J7o": { fold: 50, checkCall: 50, raise: 0 },
  "77": { fold: 35, checkCall: 45, raise: 20 },
  "76s": { fold: 50, checkCall: 50, raise: 0 },
  "75s": { fold: 50, checkCall: 50, raise: 0 },
  "74s": { fold: 50, checkCall: 50, raise: 0 },
  "73s": { fold: 50, checkCall: 50, raise: 0 },
  "72s": { fold: 50, checkCall: 50, raise: 0 },

  "A6o": { fold: 45, checkCall: 50, raise: 5 },
  "K6o": { fold: 50, checkCall: 50, raise: 0 },
  "Q6o": { fold: 50, checkCall: 50, raise: 0 },
  "J6o": { fold: 50, checkCall: 50, raise: 0 },
  "96o": { fold: 50, checkCall: 50, raise: 0 },
  "86o": { fold: 50, checkCall: 50, raise: 0 },
  "76o": { fold: 50, checkCall: 50, raise: 0 },
  "66": { fold: 40, checkCall: 50, raise: 10 },
  "65s": { fold: 50, checkCall: 50, raise: 0 },
  "64s": { fold: 50, checkCall: 50, raise: 0 },
  "63s": { fold: 50, checkCall: 50, raise: 0 },
  "62s": { fold: 50, checkCall: 50, raise: 0 },

  "A5o": { fold: 50, checkCall: 50, raise: 0 },
  "K5o": { fold: 50, checkCall: 50, raise: 0 },
  "Q5o": { fold: 50, checkCall: 50, raise: 0 },
  "J5o": { fold: 50, checkCall: 50, raise: 0 },
  "95o": { fold: 50, checkCall: 50, raise: 0 },
  "85o": { fold: 50, checkCall: 50, raise: 0 },
  "75o": { fold: 50, checkCall: 50, raise: 0 },
  "65o": { fold: 50, checkCall: 50, raise: 0 },
  "55": { fold: 45, checkCall: 50, raise: 5 },
  "54s": { fold: 50, checkCall: 50, raise: 0 },
  "53s": { fold: 50, checkCall: 50, raise: 0 },
  "52s": { fold: 50, checkCall: 50, raise: 0 },

  "A4o": { fold: 50, checkCall: 50, raise: 0 },
  "K4o": { fold: 50, checkCall: 50, raise: 0 },
  "Q4o": { fold: 50, checkCall: 50, raise: 0 },
  "J4o": { fold: 50, checkCall: 50, raise: 0 },
  "94o": { fold: 50, checkCall: 50, raise: 0 },
  "84o": { fold: 50, checkCall: 50, raise: 0 },
  "74o": { fold: 50, checkCall: 50, raise: 0 },
  "64o": { fold: 50, checkCall: 50, raise: 0 },
  "54o": { fold: 50, checkCall: 50, raise: 0 },
  "44": { fold: 50, checkCall: 50, raise: 0 },
  "43s": { fold: 50, checkCall: 50, raise: 0 },
  "42s": { fold: 50, checkCall: 50, raise: 0 },

  "A3o": { fold: 50, checkCall: 50, raise: 0 },
  "K3o": { fold: 50, checkCall: 50, raise: 0 },
  "Q3o": { fold: 50, checkCall: 50, raise: 0 },
  "J3o": { fold: 50, checkCall: 50, raise: 0 },
  "93o": { fold: 50, checkCall: 50, raise: 0 },
  "83o": { fold: 50, checkCall: 50, raise: 0 },
  "73o": { fold: 50, checkCall: 50, raise: 0 },
  "63o": { fold: 50, checkCall: 50, raise: 0 },
  "53o": { fold: 50, checkCall: 50, raise: 0 },
  "52o": { fold: 50, checkCall: 50, raise: 0 },
  "33": { fold: 50, checkCall: 50, raise: 0 },
  "32s": { fold: 50, checkCall: 50, raise: 0 },

  "A2o": { fold: 50, checkCall: 50, raise: 0 },
  "K2o": { fold: 50, checkCall: 50, raise: 0 },
  "Q2o": { fold: 50, checkCall: 50, raise: 0 },
  "J2o": { fold: 50, checkCall: 50, raise: 0 },
  "92o": { fold: 50, checkCall: 50, raise: 0 },
  "82o": { fold: 50, checkCall: 50, raise: 0 },
  "72o": { fold: 50, checkCall: 50, raise: 0 },
  "62o": { fold: 50, checkCall: 50, raise: 0 },
  "22": { fold: 50, checkCall: 50, raise: 0 }
}