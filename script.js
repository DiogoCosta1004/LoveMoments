document.addEventListener("DOMContentLoaded", function () {
    const contador = document.getElementById("contador");
    const body = document.body;

    const dataInicio = new Date("2023-11-05T00:00:00-03:00");

    function atualizarContador() {
        const agora = new Date();
        const diferencaTempo = agora - dataInicio;

        const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

        contador.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos! ❤️`;
    }

    setInterval(atualizarContador, 1000);

    modoBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    atualizarContador();
});