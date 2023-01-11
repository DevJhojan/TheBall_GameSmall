window.onload = () => {
  const player = {
    element: document.getElementById("ball"),
    topPosition: 0,
    leftPosition: 0,
    speed: 6,
    move: function (direction) {
      switch (direction) {
        case "ArrowUp":
          this.topPosition = this.topPosition - this.speed;
          this.element.style.top = this.topPosition + "px";
          break;

        case "ArrowDown":
          this.topPosition = this.topPosition + this.speed;
          this.element.style.top = this.topPosition + "px";
          break;
        case "ArrowRight":
          this.leftPosition = this.leftPosition + this.speed;
          this.element.style.left = this.leftPosition + "px";

          break;

        case "ArrowLeft":
          this.leftPosition = this.leftPosition - this.speed;
          this.element.style.left = this.leftPosition + "px";
          break;

        case "ArrowUp" && "ArrowLeft":
          this.leftPosition = this.leftPosition - this.speed;
          this.topPosition = this.topPosition - this.speed;
          this.element.style.top = this.topPosition + "px";
          this.element.style.left = this.leftPosition + "px";
          break;
        case "ArrowUp" && "ArrowRight":
          this.leftPosition = this.leftPosition + this.speed;
          this.topPosition = this.topPosition - this.speed;
          this.element.style.top = this.topPosition + "px";
          this.element.style.left = this.leftPosition + "px";
          break;
        default:
          alert("Tecla no valida");
          break;
      }
    },
  };

  onkeydown = (key) => {
    player.move(key.code);
  };
};
