document.addEventListener("DOMContentLoaded", function () {
  const mailIcon = document.getElementById("mail-icon");
  const phoneIcon = document.getElementById("phone-icon");

  if (mailIcon) {
    mailIcon.addEventListener("click", function (event) {
      event.preventDefault();
      togglePopup("mail-popup");
    });
  }

  if (phoneIcon) {
    phoneIcon.addEventListener("click", function (event) {
      event.preventDefault();
      togglePopup("phone-popup");
    });
  }

  function togglePopup(popupId) {
    // Ocultar cualquier otro popup activo
    document.querySelectorAll(".popup").forEach((popup) => {
      if (popup.id !== popupId) {
        popup.classList.add("hidden");
      }
    });

    // Alternar la visibilidad del popup seleccionado
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.classList.toggle("hidden");
    }
  }
});
