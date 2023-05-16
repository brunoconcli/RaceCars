export class UtilsFieldName {
  private outherData: object
  private gerated: boolean = false
  constructor(
    private readonly fieldName: string,
    private readonly data: object
  ) {
    this.outherData = data
  }

  validateExistFieldName(): boolean {
    const keys = this.fieldName.split(".")

    if (!this.gerated) {
      this.outherData = this.data
      this.gerated = true
      keys.map((e) => {
        this.outherData = this.outherData[e]
        return this.outherData
      })
    }

    return (
      (keys.length < 2 && this.data[this.fieldName]) ||
      this.outherData !== undefined
    )
  }

  getDataType(): string {
    if (!this.validateExistFieldName()) return "undefined"
    return typeof this.outherData
  }

  getData(): any {
    if (!this.validateExistFieldName()) return undefined
    return this.outherData
  }
}
