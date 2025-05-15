// URL'den form verilerini al
const urlParams = new URLSearchParams(window.location.search);

const ad = urlParams.get("ad");
const tür = urlParams.get("tür");
const film = urlParams.get("film");
const puan = urlParams.get("puan");

// Eğer veriler varsa tabloya ekle
if (ad && tür && film && puan) {
  const tablo = document.getElementById("veriTablosu");
  const yeniSatir = document.createElement("tr");

  yeniSatir.innerHTML = `
    <td>${ad}</td>
    <td>${tür}</td>
    <td>${film}</td>
    <td>${puan}</td>
  `;

  tablo.appendChild(yeniSatir);
}
