type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B

/** Exctract the readonly key of an object */
type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>
}[keyof T]

/** Exctract the writable key of an object */
type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
}[keyof T]

/** Exctract the public key of an object */
type PublicOnly<T> = Pick<T, keyof T>

/** Extracts the keys of the enum object as a union type. */
type EnumKeys<T> = keyof T

/** Extracts the values of the enum object as a union type. */
type EnumValues<T> = T[keyof T]

/** Represents an array that contains at least one element of type `T`. */
type NonEmptyArray<T> = [T, ...T[]]

export type { EnumKeys, EnumValues, NonEmptyArray, PublicOnly, ReadonlyKeys, WritableKeys }
