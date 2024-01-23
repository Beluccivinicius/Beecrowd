function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
};

Player.prototype.gainXp = function (xp) {
  this.points += xp;
  if (this.points > 10) {
    this.points -= 10;
    this.lvl++;
  }
};

const player1 = new Player("joão");

player1.gainXp(13);
player1.gainXp(2);
player1.gainXp(8);
player1.gainXp(3);

console.log(player1.describe());
