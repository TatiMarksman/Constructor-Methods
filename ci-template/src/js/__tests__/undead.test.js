import Undead from '../Class/Undead';

describe('Undead Class Test', () => {
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

  test('levelUp increases level and stats, resets health', () => {
    const undead = new Undead('Ghost');
    undead.levelUp();

    expect(undead.level).toBe(2);
    expect(undead.health).toBe(100);
    expect(undead.attack).toBeCloseTo(30);
    expect(undead.defence).toBeCloseTo(30);
  });

  test('levelUp throws error if character is dead', () => {
    const undead = new Undead('Ghost');
    undead.health = 0;

    expect(() => undead.levelUp()).toThrow("Can't level up a dead character.");
  });

  test('damage reduces health correctly', () => {
    const undead = new Undead('Ghost');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - undead.defence / 100);
    undead.damage(damage);

    expect(undead.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const undead = new Undead('Ghost');
    undead.damage(150);

    expect(undead.health).toBe(0);
  });
});