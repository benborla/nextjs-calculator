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
  } = useCalculator()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-[280px] bg-gray-900 p-3 rounded-lg shadow-xl">
        <div className="bg-gray-800 p-3 rounded mb-3">
          <div data-testid='calculator-display' className="text-right text-white text-2xl font-mono min-h-8 break-all">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <Button size="calc" variant="secondary" onClick={handleClear}>AC</Button>
          <Button size="calc" variant="secondary" onClick={handleSignedValue}>+/-</Button>
          <Button size="calc" variant="secondary" onClick={handlePercentage}>%</Button>
          <Button size="calc" variant="destructive" onClick={() => handleOperation('/')}>÷</Button>

          {/* Row 2 */}
          <Button size="calc" onClick={() => handleNumber('7')}>7</Button>
          <Button size="calc" onClick={() => handleNumber('8')}>8</Button>
          <Button size="calc" onClick={() => handleNumber('9')}>9</Button>
          <Button size="calc" variant="destructive" onClick={() => handleOperation('*')}>×</Button>

          {/* Row 3 */}
          <Button size="calc" onClick={() => handleNumber('4')}>4</Button>
          <Button size="calc" onClick={() => handleNumber('5')}>5</Button>
          <Button size="calc" onClick={() => handleNumber('6')}>6</Button>
          <Button size="calc" variant="destructive" onClick={() => handleOperation('-')}>-</Button>

          {/* Row 4 */}
          <Button size="calc" onClick={() => handleNumber('1')}>1</Button>
          <Button size="calc" onClick={() => handleNumber('2')}>2</Button>
          <Button size="calc" onClick={() => handleNumber('3')}>3</Button>
          <Button size="calc" variant="destructive" onClick={() => handleOperation('+')}>+</Button>

          {/* Row 5 */}
          <Button size="calc" className="col-span-2" onClick={() => handleNumber('0')}>0</Button>
          <Button size="calc">.</Button>
          <Button size="calc" variant="destructive" onClick={handleEquals}>=</Button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
