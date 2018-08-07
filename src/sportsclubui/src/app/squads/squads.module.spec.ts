import { SquadsModule } from '@sc/squads/squads.module';

describe('SquadsModule', () => {
  let squadsModule: SquadsModule;

  beforeEach(() => {
    squadsModule = new SquadsModule();
  });

  it('should create an instance', () => {
    expect(squadsModule).toBeTruthy();
  });
});
