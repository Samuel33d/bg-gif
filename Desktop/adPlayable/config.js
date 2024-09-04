(() => {
  window.gg = {
    /** Small blind setting. **/
    smallBlind: 25,

    /** Big blind setting. **/
    bigBlind: 50,

    /** Replenish the player's chips at the end of each round with this amount. **/
    rebuyAmount: 500,

    /** Set how many rounds will to play before showing the game over CTA. **/
    roundsToPlayBeforeCTA: 3,

    /** Initial card position. Initial action will be dealer position + 3. **/
    initialDealerPosition: 0,

    /** Set the AI player action delay. Actual time will be a random number between zero and this value. **/
    fakePlayerActionDelayMax: 200,

    /** Set how long to display the initial instructions / intro screen before automatically starting the game. **/
    startGameDelay: 100000000,

    /** Set true to deal random cards instead of the scripted hands. **/
    useShuffledDeck: false,

    /** Some regions will not allow us to display the in-game offer at the end of the game. Set to false to link directly to the CTA. **/
    inGameOffer: true,

    /** Value should be set to the base64 encoded image string. (e.g. data:image/png;base64,ivBORwk...) **/
    legalImage: null,

    /** All-In reward settings correspond to the reward offered in the game's footer. **/
    allInReward: {
      /** Increment the reward by this amount each time the player goes all in. **/
      incrementBy: 2,

      /** This is the max (and actual) reward offered at the end of the game. **/
      maxReward: 20,

      /** Set the reward starting amount? **/
      startingAmount: 10,
    },

    /** Format by which to display chip amounts on the table. **/
    amountDisplay: {
      /** The string "amt" will be replaced by the value. **/
      format: "amt",

      /** How many decimals to display. **/
      decimals: 0,

      /** Used to avoid floating point related errors. If using dollars for example, set values in cents and divideBy 100. **/
      divideBy: 1,
    },

    /** Format by which to display real money amounts. **/
    moneyDisplay: {
      /** The string "amt" will be replaced by the value. **/
      format: "$amt",

      /** How many decimals to display. **/
      decimals: 0,

      /** Used to avoid floating point related errors. If using dollars for example, set values in cents and divideBy 100. **/
      divideBy: 1,
    },

    /** Fortune pot settings **/
    fortunePot: {
      /** Display amount shown under the "up to" label on the pot image. **/
      upToAmount: 2500,

      /** The actual awarded amount when the fortune is awarded. **/
      rewardAmount: 2500,

      /** Award the fortune after the user goes all in this many times. **/
      awardAfterAllInsCount: 3,
    },

    /** Player settings. **/
    players: [
      {
        alias: "You",
        avatar: "you",
        totalBalance: 2500,
        initialChipsOnTable: 500, //subtracted from total balance
        numAllIns: 0,
        numFolds: 0,
      },
      {
        alias: "D. Negreanu",
        avatar: "daniel-negreanu",
        totalBalance: 5000,
        initialChipsOnTable: 500,
      },

    ],

    /** Rounds script. **/
    rounds: [
      {
        // #1 
        hands: [
          ["Kd", "Jd"],
          ["As", "Jc"], // all in
          ["9s", "9h"], // all in
          ["6h", "7h"], // folds
        ],
        communityCards: ["4d", "Jh", "3d", "Ad", "9c"],
      },
      {
        // #2 
        hands: [
          ["Qc", "Ah"],
          ["Th", "Td"], // all in (backup to if player folds for snapcam)
          ["7c", "4c"], // folds
          ["Td", "Th"], // all in
        ],
        communityCards: ["Ac", "Qd", "Tc", "Qs", "Ts"],
        ggCareReward: 1500,
        snapCam: {
          duration: 3000,
          key: "negreanu-win",
          seat: 3,
        },
      },
      {
        // #3 
        hands: [
          ["7c", "7h"],
          ["Qh", "Qd"], // all in
          ["7c", "4c"], // folds
          ["8d", "5h"], // folds
        ],
        communityCards: ["7d", "8s", "Th", "5s", "7s"],
      },
      {
        // #4 
        hands: [
          ["Ad", "As"], // all in
          ["Ks", "Tc"],  // all in
          ["Ad", "As"], // all in
          ["Qh", "Qs"], // all in
        ],
        communityCards: ["7h", "9h", "2s", "2c", "4d"],
      },
      {
        // #5 
        hands: [
          ["9s", "9h"], // all in
          ["6h", "7h"], // all in
          ["Ad", "As"], // all in
          ["Qh", "Qs"], // folds
        ],
        communityCards: ["4d", "Jh", "3d", "Ad", "9c"],
      },
    ],
  };
})();
