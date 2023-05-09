export default function joinModularValues(
  data: object,
  includeKey = true
): string {
  const values: string[] = []
  for (const key in data)
    if (data[key])
      values.push(
        `${includeKey ? `${key} = ` : ""}${
          typeof data[key] !== "number" ? `'${data[key] as string}'` : ""
        }`
      )

  return values.join(", ")
}
