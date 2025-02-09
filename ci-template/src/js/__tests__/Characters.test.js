import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../Characters';

describe('Character Classes', () => {

  test('should create Bowerman character', () => {
    const bowerman = new Bowerman('Robin');
    expect(bowerman).toEqual({
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('should create Swordsman character', () => {
    const swordsman = new Swordsman('Aragorn');
    expect(swordsman).toEqual({
      name: 'Aragorn',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('should create Magician character', () => {
    const magician = new Magician('Gandalf');
    expect(magician).toEqual({
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('should create Daemon character', () => {
    const daemon = new Daemon('Megatron');
    expect(daemon).toEqual({
      name: 'Megatron',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('should create Undead character', () => {
    const undead = new Undead('Ghost');
    expect(undead).toEqual({
      name: 'Ghost',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('should create Zombie character', () => {
    const zombie = new Zombie('Walker');
    expect(zombie).toEqual({
      name: 'Walker',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  const classes = [
    { name: 'Bowerman', Class: Bowerman, initialAttack: 25, initialDefence: 25 },
    { name: 'Swordsman', Class: Swordsman, initialAttack: 40, initialDefence: 10 },
    { name: 'Magician', Class: Magician, initialAttack: 10, initialDefence: 40 },
    { name: 'Daemon', Class: Daemon, initialAttack: 10, initialDefence: 40 },
    { name: 'Undead', Class: Undead, initialAttack: 25, initialDefence: 25 },
    { name: 'Zombie', Class: Zombie, initialAttack: 40, initialDefence: 10 },
  ];

  classes.forEach(({ name, Class, initialAttack, initialDefence }) => {
    describe(`${name} methods`, () => {
      test(`${name} levelUp increases level and stats, resets health`, () => {
        const instance = new Class('Test');
        instance.levelUp();

        expect(instance.level).toBe(2);
        expect(instance.health).toBe(100);
        expect(instance.attack).toBeCloseTo(initialAttack * 1.2);
        expect(instance.defence).toBeCloseTo(initialDefence * 1.2);
      });

      test(`${name} levelUp throws error if character is dead`, () => {
        const instance = new Class('Test');
        instance.health = 0;

        expect(() => instance.levelUp()).toThrow("Can't level up a dead character.");
      });

      test(`${name} damage reduces health correctly`, () => {
        const instance = new Class('Test');
        const damage = 30;
        const expectedHealth = 100 - damage * (1 - instance.defence / 100);
        instance.damage(damage);

        expect(instance.health).toBeCloseTo(expectedHealth);
      });

      test(`${name} damage does not set health below 0`, () => {
        const instance = new Class('Test');
        instance.damage(200);

        expect(instance.health).toBe(0);
      });
    });
  });
});