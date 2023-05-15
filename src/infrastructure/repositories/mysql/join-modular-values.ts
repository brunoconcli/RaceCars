export default function joinModularValues(
  data: object,
  includeKey = true,
  keySeparator = " = "
): string[] {
  const values: string[] = []
  for (const key in data)
    if (data[key])
      values.push(
        `${includeKey ? `${key} ${keySeparator} ` : ""}${
          typeof data[key] !== "number"
            ? `'${data[key] as string}'`
            : `${data[key] as number}`
        }`
      )

  return values
}
