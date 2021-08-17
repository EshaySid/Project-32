class Blower {
    constructor(x, y, width, height) {
      var blower_options = {
        isStatic: true,
      };
  
      this.blower = Bodies.rectangle(x, y, width, height, blower_options);
      World.add(world, this.blower);
  
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
  