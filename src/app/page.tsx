import Calculator from '@/components/Calculator'
import { CalculatorProvider } from '@/components/Calculator/providers/CalculatorProvider'

export default function Home() {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  )
}
