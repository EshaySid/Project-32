class Blowermouth {
    constructor(x, y, width, height) {
      var blowermouth_options = {
        isStatic: true,
      };
  
      this.blowermouth = Bodies.rectangle(x, y, width, height, blowermouth_options);
      World.add(world, this.blowermouth);
  
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    Display() {
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
    }
  }
  