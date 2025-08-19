// variables
let counter = 0;
const colors = ["#FF3333", "#33FF33", "#3333FF", "#FFFF33", "#FF33FF"];

//moviemiento con el teclado
AFRAME.registerComponent("move-with-keys", {
  schema: { speed: { type: "number", default: 0.02 } },
  init() {
    this.keys = {};
    this.visible = false;

    window.addEventListener("keydown", (e) => {
      this.keys[e.code] = true;
    });
    window.addEventListener("keyup", (e) => {
      this.keys[e.code] = false;
    });

    // estado de marcador
    const marker = document.getElementById("marker");
    if (marker) {
      marker.addEventListener("markerFound", () => {
        this.visible = true;
      });
      marker.addEventListener("markerLost", () => {
        this.visible = false;
      });
    }
  },
  tick(time, delta) {
    if (!this.visible) return;

    const s = this.data.speed * (delta / 16.666); // frame-rate independiente
    const p = this.el.object3D.position;

    if (this.keys["ArrowUp"] || this.keys["KeyW"]) p.z -= s;
    if (this.keys["ArrowDown"] || this.keys["KeyS"]) p.z += s;

    if (this.keys["ArrowLeft"] || this.keys["KeyA"]) p.x -= s;
    if (this.keys["ArrowRight"] || this.keys["KeyD"]) p.x += s;

    if (this.keys["KeyQ"]) p.y += s;
    if (this.keys["KeyE"]) p.y -= s;
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const arModel = document.getElementById("arModel");
  const marker = document.getElementById("marker");
  const counterDisplay = document.getElementById("counter");
  const colorBtn = document.getElementById("changeColor");

  marker.addEventListener("markerFound", () => {
    counter++;
    counterDisplay.textContent = counter;
  });

  marker.addEventListener("markerLost", () => {
    console.log("marcador se perdió");
  });

  colorBtn.addEventListener("click", () => {
    arModel.emit("spin");
  });
});
