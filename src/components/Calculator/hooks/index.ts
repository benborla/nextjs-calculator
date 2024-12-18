import { useContext } from 'react'
import { CalculatorContext } from '../providers/CalculatorProvider'

export const useCalculator = () => {
  const context = useContext(CalculatorContext)
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider')
  }
  return context
}


