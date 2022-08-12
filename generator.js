// Naija Ipsum array/text
const naijaIpsum = [
  `How far na wetin dey wetin be dis you no dey hear word abeg afraid catch me sabi. Arrange yua sef you sabi pidgin una una dey go school corofo coror oya ah beg oo wahala commot`,
  `Vamoose nawa oh! No fall my hand nothing dey happen I go change am for you. Pepper don rest baff up dub/dudu chipeleke bust my skeroo yan crash dem nor reach face wetyn face .`,
  `Kolo yanga /effizy fabu gbege demor shenkiz jones manya tuama sharp sharp carry belle jack. Waka all join aproko sort cabash you don baff I dey h lashing/whipping.`,
  `Bakassi yansh belle full belle sweet bale bicos chassis atachee awa bend down boutique. Chickito dem no born you reach dros dry  dundi. Dishi dem no send me message dem send you denge`,
  `Coolu-down bad-belle. Awoof away baffs abisoja white/sky make your head dey your neck o pem chuku-chuku  shele. Kpor kpor walensh dub/dudu fabu gbege demor shenkiz jones manya tuama sharp sharp`,
  `How e be you dem nor reach face wetyn face you make ur matter get peace kele fabu. Kawa piam kpro kakpa shedas odinga lem kasala don burst kpomkpi okpata/omuta.`,
  `Kpekus/brokos erema sawarele karashika akpola bonk. Shele/Vamus arrange chewing bracket troway salute okpolo eye. How levels fiber mushi bale bicos chassis atachee. Awa bend down boutique chickito dem no born you reach dros dry  dundi.`,
  `Chikila bololo jazz-in palansh. Fashi kpakam skull dey peel taban mukite legbere nack teeth gbaga Coolu-down bad-belle. Awoof away baffs abisoja white/sky make your head dey your`,
  `Shenkiz jones manya tuama sharp sharp carry belle jack arrange yua sef you sabi pidgin. Una dey go school corofo coror oya ah beg oo. Wahala arrange chewing bracket troway salute okpolo eye`,
  `Nothing dey happen I go change am for you akpola bonk wetyn face you make ur matter. Get peace kele all join aproko sort cabash you don baff dey peel taban mukite legbere`,
];

//selecting html elements
const naijaIpsumForm = document.querySelector(".naija-ipsum-form");
const numOfPara = document.getElementById("num-of-para");
const naijaIpsumResult = document.querySelector(".writeup");

//generate button event listener
naijaIpsumForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents button default behavior (stops reloading of screen)
  document.querySelector(".image-container").style.margin = "0"; /////////////moves picture to the right of the screen

  const value = parseInt(numOfPara.value); /////parses value (string) to integer
  const random = Math.floor(Math.random() * naijaIpsum.length); // randamly generated naija ipsum

  if (isNaN(value)) {
    naijaIpsumResult.innerHTML = `<p>${naijaIpsum[random]}</p>`; /// checks if value is empty
  } else {
    let tempIpsum = naijaIpsum.slice(0, value); /// slices array. from the start to the length of array

    // maps the selected item from the sliced array and displays the naijaIpsumResult
    tempIpsum = tempIpsum
      .map((item) => {
        return `<p>${item}</p>`;
      })
      .join("");
    naijaIpsumResult.innerHTML = tempIpsum;
  }
});
