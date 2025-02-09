import Bowerman from '../Class/Bowerman';

describe('Bowerman Class Test', () => {
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

  test('levelUp increases level and stats, resets health', () => {
    const bowerman = new Bowerman('Robin');
    bowerman.levelUp();

    expect(bowerman.level).toBe(2);
    expect(bowerman.health).toBe(100);
    expect(bowerman.attack).toBeCloseTo(30);
    expect(bowerman.defence).toBeCloseTo(30);
  });

  test('levelUp throws error if character is dead', () => {
    const bowerman = new Bowerman('Robin');
    bowerman.health = 0;

    expect(() => bowerman.levelUp()).toThrow("Can't level up a dead character.");
  });

  test('damage reduces health correctly', () => {
    const bowerman = new Bowerman('Robin');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - bowerman.defence / 100);
    bowerman.damage(damage);

    expect(bowerman.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const bowerman = new Bowerman('Robin');
    bowerman.damage(150);

    expect(bowerman.health).toBe(0);
  });
});