const container = ".splide";
const $list = $(".splide__list");
const $track = $(".splide__track");
const $roll = $(".lucky-roll");
const $claim = $(".lucky-claim");

let rolledRewards = {
  Free: [],
  Paid: [],
};

// DUMMY DATA
const rewards = [
  {
    Free: [
      {
        name: "Pickaxe",
        img: "https://i.pinimg.com/originals/63/aa/c4/63aac4bf25bc374a0b2e1c72436051d8.png",
      },
      {
        name: "Slim Sword",
        img: "https://media.fortniteapi.io/images/f97250cfa4eff9f8d8f064cf39f041ea/transparent.png",
      },
    ],
    Paid: [
      {
        name: "Battle Hammer",
        img: "https://media.fortniteapi.io/images/cb289e7d4ea7187a38a1d07cbcc28907/transparent.png",
      },
      {
        name: "Iron Wings",
        img: "https://media.fortniteapi.io/images/35678dd8a7eef58758ada30b80716a4e/transparent.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Hammer",
        img: "https://media.fortniteapi.io/images/05a4b5341b15ee1186be825311d823a4/transparent.png",
      },
    ],
    Paid: [
      {
        name: "Death Scythe",
        img: "https://trackercdn.com/legacycdn/fortnite/1A4E11902_large.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Grim Axes",
        img: "https://media.fortniteapi.io/images/1658810c67e1fe6311588468fedc68f0/transparent.png",
      },
    ],
    Paid: [
      {
        name: "Dark Male",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Skin-Dark-Rex-min.png",
      },
      {
        name: "Dark Female",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Skin-Dark-Tricera-Ops-min.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Bear Brain",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Bear-Brained-min.png",
      },
    ],
    Paid: [
      {
        name: "Chaos Scythe",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Pickaxe-Chaos-Scythe-min.png",
      },
    ],
  },
  {
    Free: [],
    Paid: [
      {
        name: "Fright Flame",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Wrap-Fright-Flame-min.png",
      },
      {
        name: "Thread",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Wrap-Thread-min.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Goo Glider",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Glider-Goo-Glider-min.png",
      },
    ],
    Paid: [
      {
        name: "Gnashers",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Pickaxe-Gnashers-min.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Nosh",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Nosh-min.png",
      },
      {
        name: "Rune",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Illusion-Rune-min.png",
      },
    ],
    Paid: [
      {
        name: "Ooze Chamber",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Ooze-Chamber-min.png",
      },
      {
        name: "Containment Unit",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Containment-Unit-min.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Frogs",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Council-of-Frogs-min.png",
      },
    ],
    Paid: [
      {
        name: "Jack-O-Lantern",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Back-o-Lantern-min.png",
      },
    ],
  },
  {
    Free: [],
    Paid: [
      {
        name: "Dark Hatchling",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Dark-Hatchling-min.png",
      },
      {
        name: "Dark Scaly",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Back-Bling-Dark-Scaly-min.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Utility Axe",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Pickaxe-Utility-Axe-min.png",
      },
    ],
    Paid: [
      {
        name: "Wrath",
        img: "https://fortniteinsider.com/wp-content/uploads/2019/10/Fortnite-v11.01-Leaked-Skin-Wrath-min.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Pickaxe",
        img: "https://i.pinimg.com/originals/63/aa/c4/63aac4bf25bc374a0b2e1c72436051d8.png",
      },
      {
        name: "Slim Sword",
        img: "https://media.fortniteapi.io/images/f97250cfa4eff9f8d8f064cf39f041ea/transparent.png",
      },
    ],
    Paid: [
      {
        name: "Battle Hammer",
        img: "https://media.fortniteapi.io/images/cb289e7d4ea7187a38a1d07cbcc28907/transparent.png",
      },
      {
        name: "Iron Wings",
        img: "https://media.fortniteapi.io/images/35678dd8a7eef58758ada30b80716a4e/transparent.png",
      },
    ],
  },
  {
    Free: [
      {
        name: "Hammer",
        img: "https://media.fortniteapi.io/images/05a4b5341b15ee1186be825311d823a4/transparent.png",
      },
    ],
    Paid: [
      {
        name: "Death Scythe",
        img: "https://trackercdn.com/legacycdn/fortnite/1A4E11902_large.png",
      },
    ],
  },
];

function random(max) {
  return Math.round(Math.random() * max);
}

function renderSlide(rewardData, i) {
  const { Free, Paid } = rewardData;
  return `<li class="splide__slide">
    <div class="lucky__tier">${i + 1}</div>
    <div class="lucky__row free">
      ${Free.map(
        (reward) => `<img src="${reward.img}" alt="${reward.name}" />`
      )}
    </div>
    <div class="lucky__row paid">
      ${Paid.map(
        (reward) => `<img src="${reward.img}" alt="${reward.name}" />`
      )}
    </div>
  </li>`;
}

function roll() {
  const doRoll = () =>
    new Promise((resolve) => {
      const loader = $("<div>", {
        class: "lucky__loader",
        append: $("<i class='fas fa-gift'></i>"),
        appendTo: $track,
      });
      setTimeout(() => {
        loader.remove();
        resolve();
      }, 4000);
    });

  $roll.attr("disabled", true);
  doRoll().then(() => {
    // finished roll
    const index = random(rewards.length - 1);
    const { Free, Paid } = rewards[index];
    console.log(
      "You have rolled rewards from Tier " + (index + 1),
      "\nFree",
      Free,
      "\nPaid",
      Paid
    );
    rolledRewards.Free = [...rolledRewards.Free, ...Free];
    rolledRewards.Paid = [...rolledRewards.Paid, ...Paid];
    $roll.attr("disabled", false);
  });
}

function claim() {
  const { Free, Paid } = rolledRewards;
  console.log(
    "All rolled rewards to be submitted:",
    "\nFree",
    Free,
    "\nPaid",
    Paid
  );
  rolledRewards = { Free: [], Paid: [] }; // reset after submission
}

$(function () {
  // render rewards
  $list.html(rewards.map(renderSlide).join(""));

  // setup splideJS
  new Splide(container, {
    type: "loop",
    perPage: 6,
    breakpoints: {
      840: {
        perPage: 4,
        perMove: 4,
      },
      420: {
        perPage: 3,
        perMove: 3,
      },
    },
  }).mount();

  $roll.on("click", roll);
  $claim.on("click", claim);
});
