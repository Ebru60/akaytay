const sorular = [
  {
    soru: "Hangi film türünde bolca patlama, kovalamaca ve dövüş sahnesi bulunur?",
    secenekler: ["Romantik", "Aksiyon", "Komedi"],
    dogru: "Aksiyon"
  },
  {
    soru: "Hangi film türü izleyiciyi güldürmeyi hedefler?",
    secenekler: ["Korku", "Komedi", "Bilim Kurgu"],
    dogru: "Komedi"
  },
  {
    soru: "Aşk ve ilişkileri temel alan film türü hangisidir?",
    secenekler: ["Romantik", "Aksiyon", "Dram"],
    dogru: "Romantik"
  }
];

let soruIndeksi = 0;
let puan = 0;

function soruYukle() {
  const soruAlani = document.getElementById("soru");
  const secenekAlani = document.getElementById("secenekler");
  const sonucAlani = document.getElementById("sonuc");

  // Alanları temizle
  sonucAlani.textContent = "";
  secenekAlani.innerHTML = "";

  const soruObjesi = sorular[soruIndeksi];
  soruAlani.textContent = soruObjesi.soru;

  soruObjesi.secenekler.forEach(secenek => {
    const buton = document.createElement("button");
    buton.textContent = secenek;
    buton.style.margin = "10px";
    buton.onclick = () => {
      if (secenek === soruObjesi.dogru) {
        puan++;
        sonucAlani.textContent = "✅ Doğru!";
        sonucAlani.style.color = "green";
      } else {
        sonucAlani.textContent = "❌ Yanlış! Doğru cevap: " + soruObjesi.dogru;
        sonucAlani.style.color = "red";
      }

      // Sonraki soruya geçiş
      soruIndeksi++;
      if (soruIndeksi < sorular.length) {
        setTimeout(soruYukle, 1500);
      } else {
        setTimeout(oyunBitti, 1500);
      }
    };
    secenekAlani.appendChild(buton);
  });
}

function oyunBitti() {
  const soruAlani = document.getElementById("soru");
  const secenekAlani = document.getElementById("secenekler");
  const sonucAlani = document.getElementById("sonuc");

  soruAlani.textContent = `🎉 Oyun bitti! Toplam puanınız: ${puan} / ${sorular.length}`;
  secenekAlani.innerHTML = "";

  const tekrarBtn = document.createElement("button");
  tekrarBtn.textContent = "🔄 Tekrar Oyna";
  tekrarBtn.style.marginTop = "20px";
  tekrarBtn.onclick = () => {
    soruIndeksi = 0;
    puan = 0;
    soruYukle();
  };
  secenekAlani.appendChild(tekrarBtn);
  sonucAlani.textContent = "";
}

soruYukle();
