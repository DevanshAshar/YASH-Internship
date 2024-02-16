function readonly1(target: any, propertyKey: string): void {
    const getter = function (): any {
      return this[`_${propertyKey}`];
    };
    const setter = function (value: any): void {
      throw new Error(`Cannot assign to readonly property '${propertyKey}'.`);
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
  class MyClass {
    @readonly1
    readonly myProperty: string;
  
    constructor(value: string) {
      this.myProperty = value;
    }
  }
  const instance = new MyClass("initial value");
  console.log(instance.myProperty);
  instance.myProperty = "new value";
  