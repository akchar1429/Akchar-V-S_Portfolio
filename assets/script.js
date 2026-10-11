(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-nav-list]");
  try { if (localStorage.getItem("akchar-theme") === "light") root.classList.add("light"); } catch (_) {}
  function updateThemeLabel() {
    if (!themeButton) return;
    const light = root.classList.contains("light");
    themeButton.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    themeButton.textContent = light ? "☾ Theme" : "☼ Theme";
  }
  updateThemeLabel();
  themeButton?.addEventListener("click", () => {
    root.classList.toggle("light");
    try { localStorage.setItem("akchar-theme", root.classList.contains("light") ? "light" : "dark"); } catch (_) {}
    updateThemeLabel();
  });
  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menu?.classList.toggle("open", !expanded);
  });
  menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));
  const form = document.querySelector("#contact-form");
  if (form) {
    const status = document.querySelector("#form-status");
    form.addEventListener("submit", event => {
      event.preventDefault();
      const fields = [...form.querySelectorAll("[required]")];
      let firstInvalid = null;
      fields.forEach(field => {
        const error = document.getElementById(field.id + "-error");
        let message = "";
        if (!field.value.trim()) message = "This field is required.";
        else if (field.type === "email" && !field.validity.valid) message = "Enter a valid email address.";
        field.setAttribute("aria-invalid", message ? "true" : "false");
        if (error) error.textContent = message;
        if (message && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        status.textContent = "Please correct the highlighted fields.";
        firstInvalid.focus();
        return;
      }
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const subject = document.querySelector("#subject").value.trim();
      const message = document.querySelector("#message").value.trim();
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      status.textContent = "Your email application should open with your message ready to send. This site does not send messages to a server.";
      window.location.href = `mailto:akcharvs.bcy25@rathinam.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
    form.querySelectorAll("input,textarea").forEach(field => field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") {
        field.setAttribute("aria-invalid", "false");
        const error = document.getElementById(field.id + "-error");
        if (error) error.textContent = "";
      }
    }));
  }
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();