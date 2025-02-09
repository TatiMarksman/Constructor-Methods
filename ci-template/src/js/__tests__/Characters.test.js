import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../Characters';

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