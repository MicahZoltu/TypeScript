interface ObjectConstructor {
    /**
     * Returns an array of values of the enumerable properties of an object
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */
    values(o: object): unknown[]

    /**
      * Returns an array of key/values of the enumerable properties of an object
      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
      */
    entries(o: object): [string, unknown][]

    /**
     * Returns an object containing all own property descriptors of an object
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */
    getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor };
}
