'use client'

import { createContext, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

export const CalculatorContext = createContext<CalculatorState | undefined>(undefined)

export const CalculatorProvider = ({ children }: Props) => {
  const [display, setDisplay] = useState('0')
  const [stack, setStack] = useState<Array<{ value: number; operation: Operation }>>([])
  const [newNumber, setNewNumber] = useState(true)
  const [waitingForPercentageInput, setWaitingForPercentageInput] = useState<boolean>(false)
  const [percentageBaseValue, setPercentageBaseValue] = useState<number | null>(null)
  const [isRadiantMode, setIsRadiantMode] = useState<boolean>(true)

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
    const isDecimal = num === '.'
    const hasDecimal = display.includes('.')

    if (newNumber) {
      setDisplay(isDecimal ? '0.' : num)
      setNewNumber(false)
      return
    }

    if (isDecimal && hasDecimal) {
      return
    }

    setDisplay(display === '0' && !isDecimal ? num : display + num)
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

    // @INFO: Since I don't want to have a stack operation when calculating a percentage
    if (waitingForPercentageInput && percentageBaseValue !== null) {
      const percentageResult = percentageBaseValue * (currentValue / 100)

      setDisplay(percentageResult.toString())
      setWaitingForPercentageInput(false)
      setPercentageBaseValue(null)
      setNewNumber(true)

      return
    }
    
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
    setWaitingForPercentageInput(false)
    setPercentageBaseValue(null)
  }

  const handleSignedValue = () => {
    const currentValue = parseFloat(display)
    setDisplay((-currentValue).toString())
  }

  const handlePercentage = () => {
    const currentValue = parseFloat(display)
    setPercentageBaseValue(currentValue)
    setDisplay('0')
    setNewNumber(true)
    setWaitingForPercentageInput(true)
  }

  const handleToggleRadiantMode = () => setIsRadiantMode(!isRadiantMode)

  const handleSquareRoot = () => {
    setDisplay(Math.sqrt(parseFloat(display)).toString())
  }

  const handleSquared = () => {
    setDisplay(Math.pow(parseFloat(display), 2).toString())
  }

  const handleCubic = () => {
    setDisplay(Math.pow(parseFloat(display), 3).toString())
  }

  const handleSine = () => {
    const currentValue = parseFloat(display)
    const result = isRadiantMode ? Math.sin(currentValue) 
      : Math.sin((currentValue * Math.PI) / 180)
    setDisplay(result.toString())
  }

  const handleCosine = () => {
    const currentValue = parseFloat(display)
    const result = isRadiantMode ? Math.cos(currentValue) 
      : Math.cos((currentValue * Math.PI) / 180)
    setDisplay(result.toString())
  }

  const handleTangent = () => {
    const currentValue = parseFloat(display)
    const result = isRadiantMode ? Math.tan(currentValue) 
      : Math.tan((currentValue * Math.PI) / 180)
    setDisplay(result.toString())
  }

  const handleLogarithm = () => {
    setDisplay(Math.log10(parseFloat(display)).toString())
  }

  const value = {
    display,
    handleNumber,
    handleOperation,
    handleEquals,
    handleClear,
    handleSignedValue,
    handlePercentage,
    isRadiantMode,
    handleToggleRadiantMode,
    handleSquareRoot,
    handleSquared,
    handleCubic,
    handleSine,
    handleCosine,
    handleTangent,
    handleLogarithm,
  }

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  )
}
