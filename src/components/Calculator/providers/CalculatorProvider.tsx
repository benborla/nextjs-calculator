'use client'

import { createContext, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

type Operation = '+' | '-' | '*' | '/'

interface CalculatorState {
  display: string
  handleNumber: (num: string) => void
  handleOperation: (op: Operation) => void
  handleEquals: () => void
  handleClear: () => void
  handleSignedValue: () => void
  handlePercentage: () => void
}

export const CalculatorContext = createContext<CalculatorState | undefined>(undefined)

export const CalculatorProvider = ({ children }: Props) => {
  const [display, setDisplay] = useState('0')
  const [stack, setStack] = useState<Array<{ value: number; operation: Operation }>>([])
  const [newNumber, setNewNumber] = useState(true)

  const calculateStack = (currentStack: Array<{ value: number; operation: Operation }>, currentValue: number): number => {
    if (currentStack.length === 0) return currentValue
    
    const firstItem = currentStack[0]
    let result = firstItem.value

    for (let i = 1; i < currentStack.length; i++) {
      const { value, operation } = currentStack[i]
      switch (operation) {
      case '+':
        result += value
        break
      case '-':
        result -= value
        break
      case '*':
        result *= value
        break
      case '/':
        result /= value
        break
      }
    }

    switch (firstItem.operation) {
    case '+':
      return result + currentValue
    case '-':
      return result - currentValue
    case '*':
      return result * currentValue
    case '/':
      return result / currentValue
    default:
      return currentValue
    }
  }

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleOperation = (op: Operation) => {
    const currentValue = parseFloat(display)
    
    if (stack.length === 0) {
      setStack([{ value: currentValue, operation: op }])
    } else {
      const result = calculateStack([...stack], currentValue)
      setStack([{ value: result, operation: op }])
      setDisplay(result.toString())
    }
    
    setNewNumber(true)
  }

  const handleEquals = () => {
    const currentValue = parseFloat(display)
    
    if (stack.length === 0) return
    
    const result = calculateStack([...stack], currentValue)
    setDisplay(result.toString())
    setStack([])
    setNewNumber(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setStack([])
    setNewNumber(true)
  }

  const handleSignedValue = () => {
    const currentValue = parseFloat(display)
    setDisplay((-currentValue).toString())
  }

  const handlePercentage = () => {
    const currentValue = parseFloat(display)
    
    if (stack.length === 0) {
      setDisplay((currentValue / 100).toString())
    } else {
      const previousValue = stack[stack.length - 1].value
      const percentageValue = (previousValue * currentValue) / 100
      setDisplay(percentageValue.toString())
    }
    
    setNewNumber(true)
  }

  const value = {
    display,
    handleNumber,
    handleOperation,
    handleEquals,
    handleClear,
    handleSignedValue,
    handlePercentage,
  }

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  )
}
