// Niz saveta
let saveti = [
    "Spakujte se pametno i lagano",
    "Uvek imajte kopije dokumenata",
    "Upoznajte se sa lokalnim običajima",
    "Koristite offline mape",
    "Uživajte u trenutku i fotkajte"
  ];
  

  function odrediIkonu(savet) {
    switch (true) {
      case savet.includes("dokument"):
        return "📄";
      case savet.includes("mape"):
        return "🗺️";
      case savet.includes("fotk"):
        return "📸";
      case savet.includes("običaj"):
        return "🎎";
      case savet.includes("spakuj"):
        return "🎒";
      default:
        return "✈️";
    }
  }
  

  function generisiSaveteHTML(lista) {
    let html = "<ul style='list-style: none; margin-top: 20px;'>";
    for (let i = 0; i < lista.length; i++) {
      let ikon = odrediIkonu(lista[i]);
      html += `<li style="margin: 10px 0; font-size: 18px;">${ikon} ${lista[i]}</li>`;
    }
    html += "</ul>";
    return html;
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    const dugme = document.getElementById("prikaziSavete");
  
    dugme.addEventListener("click", function () {
      const div = document.createElement("div");
      div.innerHTML = generisiSaveteHTML(saveti);
      div.style.backgroundColor = "#f0f8ff";
      div.style.padding = "20px";
      div.style.borderRadius = "8px";
      div.style.margin = "20px auto";
      div.style.maxWidth = "600px";
  
      document.body.insertBefore(div, document.querySelector("footer"));
      dugme.disabled = true;
      dugme.style.opacity = "0.6";
      dugme.textContent = "Saveti prikazani ✅";
    });
  });
  