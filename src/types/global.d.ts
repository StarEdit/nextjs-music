export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */

  type ObjectValues<T extends Record<string, unknown>> = T[keyof T];
}
