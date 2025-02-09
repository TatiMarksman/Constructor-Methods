import Daemon from '../Class/Daemon';

describe('Daemon Class Test', () => {
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

  test('levelUp increases level and stats, resets health', () => {
    const daemon = new Daemon('Megatron');
    daemon.levelUp();

    expect(daemon.level).toBe(2);
    expect(daemon.health).toBe(100);
    expect(daemon.attack).toBeCloseTo(12); 
    expect(daemon.defence).toBeCloseTo(48); 
  });

  test('levelUp throws error if character is dead', () => {
    const daemon = new Daemon('Megatron');
    daemon.health = 0;

    expect(() => daemon.levelUp()).toThrow("Can't level up a dead character.");
  });

  test('damage reduces health correctly', () => {
    const daemon = new Daemon('Megatron');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - daemon.defence / 100);
    daemon.damage(damage);

    expect(daemon.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const daemon = new Daemon('Megatron');
    daemon.damage(200);

    expect(daemon.health).toBe(0);
  });
});