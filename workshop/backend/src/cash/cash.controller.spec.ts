import { Test, TestingModule } from '@nestjs/testing';
import { CashController } from './cash.controller';

describe('CashController', () => {
  let controller: CashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashController],
    }).compile();

    controller = module.get<CashController>(CashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
