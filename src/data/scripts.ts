export type ScriptBlock = { label?: string; lines: string[] };

export type ScriptItem = {
  id: string;
  brand: string;
  title: string;
  format: string;
  logline: string;
  blocks: ScriptBlock[];
};

export const scripts: ScriptItem[] = [
  {
    id: "britannia",
    brand: "Britannia",
    title: "Circle Khushi Ka",
    format: "TVC script · Brand film",
    logline: "From the first wheel to the last biscuit — every round shape the world loves, ends in a smile.",
    blocks: [
      {
        label: "Scene 1",
        lines: [
          "Footage of our planet revolving, then zoomed into the country where a group of Stone Age men roll a wheel down a hill.",
          "VO — Kehte hain… iss gol dharti par, sabse bada avishkaar tha — ek gol pahiya.",
        ],
      },
      {
        label: "Scene 2",
        lines: [
          "The rolling wheel transitions into the wheel of a royal cart. A king opens a crest and smiles at the gold coins in his hand. The hand transitions into a man's hand giving that coin to a shopkeeper for biscuits.",
          "VO — Pahiye se le kar… gol sikke tak.",
        ],
      },
      {
        label: "Scene 3",
        lines: [
          "An opened Good Day packet — a couple takes a biscuit out while feeding each other.",
          "VO — Unhi sikkon se kharidi gayi… gol khushiyan.",
          "Bhinn bhinn prakaar ke log. Par ek hi aakaar ki khushiyan.",
        ],
      },
      {
        label: "Scene 4",
        lines: [
          "Behind the couple, a kid runs past a table with a Jim Jam in hand, where an elderly couple in jogging suits laugh over tea and NutriChoice.",
          "VO — Kisi ke liye Good Day, kisi ke liye Jim Jam. Sehat ke rakhwaalon ke liye NutriChoice.",
        ],
      },
      {
        label: "Scene 5",
        lines: [
          "Collage / fast cut of the three characters.",
          "VO — Har generation, har pal… Ek biscuit, ek circle… Ek muskaan.",
          "Britannia — \u201cCircle Khushi Ka.\u201d",
        ],
      },
    ],
  },
  {
    id: "brooke-bond",
    brand: "Brooke Bond Red Label",
    title: "Taste of Togetherness",
    format: "TVC script · Brand film",
    logline: "Cricket and chai share one job — bringing people into the same room.",
    blocks: [
      {
        label: "Overview",
        lines: [
          "Connect cricket with tea through the one thing they share: the feeling of togetherness they bring to people.",
        ],
      },
      {
        label: "Visuals",
        lines: [
          "Footage of Kapil Dev lifting the trophy in 1983, followed by a montage — a cup of tea on a table picked up by a woman's hand, a small tea-stall glass picked up by an old man's hand, a luxury cup picked up by a suited hand.",
        ],
      },
      {
        label: "Voice over",
        lines: [
          "Cup chahe cricket ka ho ya chai ka, yeh dono hi logon ko paas laane ki barson purani, pyaari pratha hai.",
          "Gavaskar se lekar Kohli tak. Mithali se lekar Shafali tak.",
          "Waqt badla, format badle. Lekin hum ab bhi wahi kar rahe hain… ek cup ke saath har dil se dil ka rishta banane ka kaam.",
        ],
      },
      {
        label: "Closing visuals",
        lines: [
          "People watching black-and-white TV footage while sipping tea in old-fashioned clothes. The same scene with the current generation. Women in traditional Rajasthani dress and corporate women in formals, both sipping tea.",
          "All three frames join in a three-way split screen. Cut to product.",
          "Brooke Bond Red Label — Taste of Togetherness.",
        ],
      },
    ],
  },
  {
    id: "fogg",
    brand: "Fogg",
    title: "Taazgi Ka Ahsaas",
    format: "TVC script · Product film",
    logline: "One spray and the platform becomes an island — until reality asks for the train to Dombivli.",
    blocks: [
      {
        lines: [
          "A man stands on a railway platform on a sunny day, drowning in sweat. An announcer plays in the background.",
          "He sprays the fragrance all over his body with his eyes closed. As soon as he opens them, he is standing on an island in absolute refreshment — a cold breeze blowing over him as he looks over the water, smiling.",
          "He looks to his right and sees a boat approaching. The boat stops, a fisherman walks up and asks: \u201cYe train Dombivli jayegi kya?\u201d",
          "The man is shocked. He looks at the boat, which has turned into a train, snapping him back to reality — while the fisherman walks off, confused, thinking he's a weirdo.",
          "Graphics play in.",
          "Narrator — Taazgi ka ahsaas aisa ki aap sacchai bhool jaaye. (Tagline)",
        ],
      },
    ],
  },
  {
    id: "save-water",
    brand: "Public service campaign",
    title: "Save Water, Save Yourself",
    format: "Short film script · Writer: Aditya Salve",
    logline: "A near future where water is smuggled, banked in lockers, and demanded as dowry.",
    blocks: [
      {
        label: "INT. Apartment building — Day",
        lines: [
          "Policemen run up the stairs. A constable points at a door. The officer knocks. Mr Tripathi opens it in a tracksuit, smiling — until he sees the police.",
          "INSPECTOR — Mr Tripathi?",
          "MR TRIPATHI — Ji haan.",
          "INSPECTOR — Humare paas warrant hai, aapke ghar ki talashi lene aaye hain.",
          "The team searches the house. The constable finds a box near the inverter, pulls it out and opens it — packed water bottles.",
          "CONSTABLE — Mil gaya sir. (smiling)",
          "INSPECTOR — Mr Tripathi, you are under arrest for hoarding and smuggling of water.",
        ],
      },
      {
        label: "EXT. Street — Continuous",
        lines: [
          "The van drives off. The camera finds a nervous man walking fast with a backpack worn on his chest, eyeing everyone suspiciously.",
          "VO — Yeh mujhe aise kyu dekh raha hai? Chhod, koi nahi. Rajesh, tu chalte reh, bank zyada door nahi.",
          "He reaches the bank, meets the manager, is taken to the locker room. Once alone, he opens the bag — sealed water bottles. One last look, a smile, and he locks them away.",
        ],
      },
      {
        label: "EXT. Wedding — Later",
        lines: [
          "Walking back, he passes a wedding band growing louder. The camera pans across laughing women, running kids, then up to five people — two on the left, three on the right.",
          "GROOM'S FATHER — Yeh nahi chalega. Humne aapse 20 litre paani kaha tha aur aap sirf 10 leke aaye hain. Hamara apmaan kar rahe hain aap.",
          "BRIDE'S FATHER — Aap chinta mat kariye, hum kuch dino mein baaki ka paani laake de denge. Abhi humse jitna hua, humne koshish ki. (pleading)",
          "GROOM'S FATHER — Nahi, yeh sab nahi chalega. Hum aur badnaami nahi seh sakte. Yeh shaadi cancel!",
          "BRIDE'S FATHER — Nahi, aisa mat kijiye. (folding his hands as the other rushes away with his son)",
          "The news reaches the bride through a bridesmaid. Her father enters; she cries on his shoulder as the camera pans to an almost empty water jug on the corner of the table.",
        ],
      },
      {
        label: "End card",
        lines: [
          "VO — Facts and numbers about water wastage in the world.",
          "Text on screen — Yeh din zyada door nahi. This day is not far away.",
          "Save water. Save yourself.",
        ],
      },
    ],
  },
  {
    id: "ecl-retention",
    brand: "Kolkata Super Stars · ECL",
    title: "Captain's Retention Video",
    format: "Video script · Talent-led",
    logline: "Pushkar Raj Thakur sits down to thank the fans and open the door to Season 3.",
    blocks: [
      {
        label: "Scene",
        lines: [
          "Pushkarraj Thakur enters the room, walks confidently and sits on the chair. A moment of silence before he speaks.",
        ],
      },
      {
        label: "Monologue",
        lines: [
          "Aap log soch rahe honge ki main aaj achanak aapse baat karne kyun aaya hoon.",
          "ECL Season 3 shuru hone mein abhi thoda waqt hai, lekin team ka captain hone ke naate, kuch zimmedariyaan meri bhi banti hain.",
          "Sabse pehle, dil se shukriya. Us pyaar aur support ke liye jo aap sabne humein is season diya.",
          "Isi pyaar ki wajah se humne ECL mein ek dhamakedar debut kiya.",
          "Aur haan, kehna padega — \u2018Haar aksar jeet se zyada sikhaati hai.\u2019",
          "Eliminator tak ka safar chhota zaroor tha, par is chhote safar mein humne bahut kuch seekha. Naye dost mile, naye experiences mile — aur sabse important, aapka dil jeeta.",
          "Ab, isi jazbaat ko lekar, isi junoon ko saath leke, hum taiyaar hain ECL Season 3 ke liye. Aur is baar — aur bhi zyada taiyaari ke saath.",
          "Toh chaliye, milte hain un 15 superstars se — jinko humne retain kiya hai Season 3 ke liye…",
        ],
      },
    ],
  },
  {
    id: "amrutam",
    brand: "Amrutam",
    title: "Nari Sondarya Malt — Direct Response",
    format: "Performance script · Hook to CTA",
    logline: "A first-person PCOD story built block by block for paid social.",
    blocks: [
      {
        label: "Hooks",
        lines: [
          "Hook 1 (5s) — I was diagnosed with PCOD at the age of 19.",
          "Hook 2 (3s) — Kya aap bhi PCOD se hain pareshan?",
          "Hook 3 (5s) — This product by Amrutam changed my life.",
        ],
      },
      {
        label: "Problem (15s)",
        lines: [
          "PCOD ke kaaran meri social life effect hone lagi thi. Irregular periods ke dar ki vajah se maine bahar jaana band kar diya.",
          "Maine kaafi saare doctors se consult kiya par koi fayda nahi hua.",
        ],
      },
      {
        label: "Product (15s)",
        lines: [
          "And I was getting depressed. My mother couldn't see me in that condition, so she started her own research and we landed on this Nari Sondarya Malt by Amrutam.",
        ],
      },
      {
        label: "USP (10s)",
        lines: [
          "Inke positive reviews and 100 percent natural ingredients dekh kar we thought of giving it a try — and it did wonders for me.",
        ],
      },
      {
        label: "Results (10s)",
        lines: [
          "After only 5 days of taking the malt, I got my periods — aur sirf yehi nahi, it also improved my skin and decreased my hair loss.",
        ],
      },
      {
        label: "CTA (10s)",
        lines: [
          "I'm so glad that I found this product. Toh agar aap bhi meri tarah PCOD se chutkara paana chahte hain, toh yeh product zaroor try kare.",
        ],
      },
    ],
  },
  {
    id: "halden",
    brand: "Halden Luxury",
    title: "Daven Classic Combo",
    format: "Performance script · Gifting story",
    logline: "A 27-second gifting story that lands the surprise before the sell.",
    blocks: [
      {
        label: "Hooks",
        lines: [
          "Hook 1 (3s) — I decided to gift my father…",
          "Hook 2 (5s) — My father absolutely loved it.",
          "Hook 3 (3s) — I surprised my father.",
        ],
      },
      {
        label: "Problem (7s)",
        lines: ["I decided to gift my father a combo product called the Daven Classic Combo by Halden Luxury."],
      },
      {
        label: "Product (7s)",
        lines: ["This combo consists of a wallet and belt made using premium quality materials."],
      },
      {
        label: "USP (5s)",
        lines: ["It gives you a feeling of luxury and style that cannot be described by words."],
      },
      { label: "Results (5s)", lines: ["My father absolutely loved it."] },
      { label: "CTA (5s)", lines: ["Get this for your father at haldenluxury.com."] },
    ],
  },
  {
    id: "vyoma-av",
    brand: "L&T Vyoma",
    title: "Built for What’s Next",
    format: "AV script · Brand film",
    logline: "Vyoma stays constant while the word beside it keeps changing — Evolving, Intelligence, Scalable, Sovereign, Secure.",
    blocks: [
      {
        label: "Scene 1",
        lines: [
          "The company name is shown from different angles, with northern lights in the background. After a few seconds, the first word and the super appear.",
          "Super — Vyoma. Evolving.",
          "VO — Enter a new era of intelligence.",
        ],
      },
      {
        label: "Scene 2",
        lines: [
          "As the word Vyoma stays constant, the descriptive word keeps changing along with its super, over a montage of Vyoma’s infrastructure and work running in the background.",
          "Super — Vyoma. Intelligence.",
          "VO — With technology built for greater possibilities.",
        ],
      },
      {
        label: "Scene 3",
        lines: [
          "Montage of Vyoma’s infrastructure and work running in the background, same as above.",
          "Super — Vyoma. Scalable.",
          "VO — For reaching as high as your ambitions.",
        ],
      },
      {
        label: "Scene 4",
        lines: [
          "Fast-cut edits of the data centers, and lit-up shots of cities, people using phones, etc.",
          "Super — Vyoma. Sovereign.",
          "VO — For powering India’s digital future.",
        ],
      },
      {
        label: "Scene 5",
        lines: [
          "Transition to abstract privacy art in the night sky above the city, with the copy.",
          "Super — Vyoma. Secure.",
          "VO — For staying secure every step of the way.",
        ],
      },
      {
        label: "Scene 6",
        lines: [
          "Finally, transition to the logo reveal with the copy.",
          "Super — Vyoma.ai (logo)",
          "VO — So that innovation can move forward with confidence.",
          "Vyoma.AI — Built for what’s next.",
        ],
      },
    ],
  },
];
