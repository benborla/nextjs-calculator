type Operation = '+' | '-' | '*' | '/' | ''

interface CalculatorState {
  display: string
  handleNumber: (num: string) => void
  handleOperation: (op: Operation) => void
  handleEquals: () => void
  handleClear: () => void
}
