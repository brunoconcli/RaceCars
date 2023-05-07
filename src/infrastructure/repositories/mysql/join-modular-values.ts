export default function joinModularValues(data: object): string {
  const values: string[] = []
  for (const key in data)
    if (data[key]) values.push(`${key} = ${data[key] as string}`)

  return values.join(", ")
}
