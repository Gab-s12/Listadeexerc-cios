const radios = document.querySelectorAll('input[name="cor"]');

radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    document.body.style.backgroundColor = radio.value;
  });
});