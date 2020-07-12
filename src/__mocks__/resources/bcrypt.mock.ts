export const mockBcryptModule =({
    compare: jest.fn().mockImplementation((s: string, hash: string) => Promise.resolve(true))
  });

export const bcryptTestProvider = {
    provide: 'BCRYPT',
    useValue: mockBcryptModule
  }