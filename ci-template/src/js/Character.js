class Character {
    constructor(name, type) {
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Name must be between 2 and 10 characters');
      }
      if (!types.includes(type)) {
        throw new Error('Invalid type');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
  
      const stats = {
        Bowman: { attack: 25, defence: 25 },
        Swordsman: { attack: 40, defence: 10 },
        Magician: { attack: 10, defence: 40 },
        Daemon: { attack: 10, defence: 40 },
        Undead: { attack: 25, defence: 25 },
        Zombie: { attack: 40, defence: 10 },
      };
  
      this.attack = stats[type].attack;
      this.defence = stats[type].defence;
    }
  }
  
  export default Character;