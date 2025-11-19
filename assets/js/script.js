const urlTarjeta = window.location.href;

  document.getElementById("btnCompartir").addEventListener("click", async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Tarjeta de Presentación",
          text: "Te comparto mi tarjeta de presentación digital:",
          url: urlTarjeta
        });
      } catch (error) {
        console.log("No se pudo compartir:", error);
      }
    } else {
      alert("Tu dispositivo no permite compartir desde el navegador.");
    }
  });


  document.getElementById("btnGuardar").addEventListener("click", () => {
    const vcf = `
    BEGIN:VCARD
    VERSION:3.0
    FN:Juan Gerardo Miranda
    TITLE:Planificador Financiero
    TEL;TYPE=cell:+524445583022
    EMAIL:contacto@ramonsalas.com
    ORG:Servicios Financieros
    URL:${window.location.href}
    END:VCARD
    `;

    const blob = new Blob([vcf], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "juan-gerardo-miranda.vcf";
    link.click();

    URL.revokeObjectURL(url);
  });
