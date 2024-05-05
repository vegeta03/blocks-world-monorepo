import { transferArrayItemToStack } from './drag-utils';

describe('transferArrayItemToStack', () => {
  it('should be able to move an item from one array to another treating the target array as a stack', () => {
    const a = [0, 1, 2];
    const b = [3, 4, 5];

    transferArrayItemToStack(a, b, 1);
    expect(a).toEqual([0, 2]);
    expect(b).toEqual([3, 4, 5, 1]);
  });

  it('should handle an index greater than the source array length', () => {
    const a = [0, 1, 2];
    const b = [3, 4, 5];

    transferArrayItemToStack(a, b, 5);
    expect(a).toEqual([0, 1]);
    expect(b).toEqual([3, 4, 5, 2]);
  });

  it('should handle an index less than zero', () => {
    const a = [0, 1, 2];
    const b = [3, 4, 5];

    transferArrayItemToStack(a, b, -1);
    expect(a).toEqual([1, 2]);
    expect(b).toEqual([3, 4, 5, 0]);
  });

  it('should not do anything if the source array is empty', () => {
    const a: number[] = [];
    const b = [3, 4, 5];

    transferArrayItemToStack(a, b, 0);
    expect(a).toEqual([]);
    expect(b).toEqual([3, 4, 5]);
  });
});
