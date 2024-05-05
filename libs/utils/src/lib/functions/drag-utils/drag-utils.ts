/**
 * Moves an item from one array to another treating the target array as a stack.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to push the item.
 * @param currentIndex Index of the item in its current array.
 */
export function transferArrayItemToStack<T = unknown>(
  currentArray: T[],
  targetArray: T[],
  currentIndex: number,
): void {
  const from = clamp(currentIndex, currentArray.length - 1);

  if (currentArray.length) {
    targetArray.unshift(currentArray.splice(from, 1)[0]);
  }
}

/** Clamps a number between zero and a maximum. */
function clamp(value: number, max: number): number {
  return Math.max(0, Math.min(max, value));
}
