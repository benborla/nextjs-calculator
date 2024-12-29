'use client'

import { Button } from '@/components/ui/button'
import { useCalculator } from './hooks'

const Calculator = () => {
  const {
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
  } = useCalculator()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-[280px] bg-gray-900 p-3 rounded-lg shadow-xl">
        <div className="bg-gray-800 p-3 rounded mb-3">
          <div data-testid='calculator-display' className="text-right text-white text-2xl font-mono min-h-8 break-all">
            {display}
          </div>
        </div>
        <div className="flex flex-col gap-5">

          <div className="grid grid-cols-4 gap-2">
            <Button size="calc" className="col-span-3" variant="destructive" onClick={handleClear}>AC</Button>
            <Button size="calc" onClick={handleToggleRadiantMode}>
              {isRadiantMode ? 'RAD' : 'DEG'}
            </Button>

          </div>

          <div className="grid grid-cols-4 gap-2">
            <Button size="calc" className="col-span-2" variant="secondary" onClick={handlePercentage}>%</Button>
            <Button size="calc" className="col-span-2" variant="secondary" onClick={handleSignedValue}>+/-</Button>

            <Button size="calc" variant="secondary" onClick={handleSine}>sin</Button>
            <Button size="calc" variant="secondary" onClick={handleCosine}>cos</Button>
            <Button size="calc" variant="secondary" onClick={handleTangent}>tan</Button>
            <Button size="calc" variant="secondary" onClick={handleLogarithm}>log</Button>

            <Button size="calc" variant="secondary" onClick={handleSquareRoot}>√</Button>
            <Button size="calc" variant="secondary" onClick={handleSquared}>x²</Button>
            <Button size="calc" variant="secondary" onClick={handleCubic}>x³</Button>
            <Button size="calc" variant="destructive" onClick={() => handleOperation('/')}>÷</Button>

            <Button size="calc" onClick={() => handleNumber('7')}>7</Button>
            <Button size="calc" onClick={() => handleNumber('8')}>8</Button>
            <Button size="calc" onClick={() => handleNumber('9')}>9</Button>
            <Button size="calc" variant="destructive" onClick={() => handleOperation('*')}>×</Button>

            <Button size="calc" onClick={() => handleNumber('4')}>4</Button>
            <Button size="calc" onClick={() => handleNumber('5')}>5</Button>
            <Button size="calc" onClick={() => handleNumber('6')}>6</Button>
            <Button size="calc" variant="destructive" onClick={() => handleOperation('-')}>-</Button>

            <Button size="calc" onClick={() => handleNumber('1')}>1</Button>
            <Button size="calc" onClick={() => handleNumber('2')}>2</Button>
            <Button size="calc" onClick={() => handleNumber('3')}>3</Button>
            <Button size="calc" variant="destructive" onClick={() => handleOperation('+')}>+</Button>

            <Button size="calc" className="col-span-2" onClick={() => handleNumber('0')}>0</Button>
            <Button size="calc" onClick={() => handleNumber('.')}>.</Button>
            <Button size="calc" variant="destructive" onClick={handleEquals}>=</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
