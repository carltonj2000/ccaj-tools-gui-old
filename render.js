const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const pingBtn = document.getElementById("ping");
pingBtn.addEventListener("click", async () => {
  const response = await window.versions.ping();
  console.log(response);
});
