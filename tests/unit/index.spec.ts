import { SERVICE_NAME } from '../../src/index';

describe('orgdemo', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('orgdemo');
  });
});