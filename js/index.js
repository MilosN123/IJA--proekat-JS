// Niz saveta
let saveti = [
  "Spakujte se pametno i lagano",
  "Uvek imajte kopije dokumenata",
  "Upoznajte se sa lokalnim običajima",
  "Koristite offline mape",
  "Uživajte u trenutku i fotkajte"
];

// Funkcija koja određuje ikonu za svaki savet
function odrediIkonu(savet) {
  switch (true) {
    case savet.toLowerCase().includes("dokument"):
      return "📄";
    case savet.toLowerCase().includes("mape"):
      return "🗺️";
    case savet.toLowerCase().includes("fotk"):
      return "📸";
    case savet.toLowerCase().includes("običaj"):
      return "🎎";
    case savet.toLowerCase().includes("spakuj"):
      return "🎒";
    default:
      return "✈️";
  }
}

// Funkcija koja generiše HTML listu saveta
function generisiSaveteHTML(lista) {
  let html = "<ul style='list-style: none; margin-top: 20px; padding-left: 0;'>";
  for (let i = 0; i < lista.length; i++) {
    let ikon = odrediIkonu(lista[i]);
    html += `<li style="margin: 10px 0; font-size: 18px;">${ikon} ${lista[i]}</li>`;
  }
  html += "</ul>";
  return html;
}

// DOMContentLoaded da se osigura da su svi elementi učitani
document.addEventListener("DOMContentLoaded", function () {
  const dugme = document.getElementById("prikaziSavete");
  const container = document.getElementById("saveti-container"); // div gde će se prikazati saveti

  dugme.addEventListener("click", function () {
    container.innerHTML = generisiSaveteHTML(saveti);
    container.style.backgroundColor = "#f0f8ff";
    container.style.padding = "20px";
    container.style.borderRadius = "8px";
    container.style.margin = "20px auto";
    container.style.maxWidth = "600px";

    dugme.disabled = true;
    dugme.style.opacity = "0.6";
    dugme.textContent = "Saveti prikazani ✅";
  });
});
