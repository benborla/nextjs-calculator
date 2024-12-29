type Operation = '+' | '-' | '*' | '/' | '%' | ''

interface CalculatorState {
  display: string
  isRadiantMode: boolean
  handleNumber: (num: string) => void
  handleOperation: (op: Operation) => void
  handleEquals: () => void
  handleClear: () => void
  handleSignedValue: () => void
  handlePercentage: () => void
  handleToggleRadiantMode: () => void
  handleSquareRoot: () => void
  handleSquared: () => void
  handleCubic: () => void
  handleSine: () => void
  handleCosine: () => void
  handleTangent: () => void
  handleLogarithm: () => void
}
