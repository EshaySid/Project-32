class Ball {
    constructor(x, y, width, height) {
      var ball_options = {
        isStatic: true,
      };
  
      this.ball = Bodies.rectangle(x, y, width, height, ball_options);
      World.add(world, this.ball);
  
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
  