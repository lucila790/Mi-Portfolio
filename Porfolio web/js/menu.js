document.addEventListener("DOMContentLoaded", function () {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <ul>
      <li><a href="index.html">Inicio</a></li>
      <li><a href="sobremi.html">Sobre mi</a></li>
      <li><a href="proyectos.html">Proyectos</a></li>
      <li><a href="contacto.html">Contacto</a></li>
    </ul>
  `;
  document.querySelector("header").appendChild(nav);
});
