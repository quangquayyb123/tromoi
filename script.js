document.getElementById("playButton").addEventListener("click", function () {
  const randomCode = Math.random().toString(36).substring(2, 8);
  window.location.href = `/tro/${randomCode}`;
});
