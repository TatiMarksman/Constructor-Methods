import Character from './Class/Character';

class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}

export { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie };