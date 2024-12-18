'use client'

import { Button } from '@/components/ui/button'
import { useCalculator } from './hooks'

const Calculator= () => {
  const {
    display,
    handleNumber,
    handleOperation,
    handleEquals,
    handleClear,
  } = useCalculator()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 px-12">
      <div className="relative w-[30%] bg-gray-800 p-4 rounded-lg shadow-xl">
        <div className="bg-gray-700 p-4 rounded mb-4">
          <div className="text-right text-white text-3xl font-mono h-8">
            {display}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="grid grid-cols-3 gap-4">
            <Button variant="secondary" onClick={handleClear}>AC</Button>
            <Button variant="secondary">+/-</Button>
            <Button variant="secondary">%</Button>

            <Button onClick={() => handleNumber('7')}>7</Button>
            <Button onClick={() => handleNumber('8')}>8</Button>
            <Button onClick={() => handleNumber('9')}>9</Button>

            <Button onClick={() => handleNumber('4')}>4</Button>
            <Button onClick={() => handleNumber('5')}>5</Button>
            <Button onClick={() => handleNumber('6')}>6</Button>

            <Button onClick={() => handleNumber('1')}>1</Button>
            <Button onClick={() => handleNumber('2')}>2</Button>
            <Button onClick={() => handleNumber('3')}>3</Button>
            <Button onClick={() => handleNumber('0')}>0</Button>
            <Button  className="text-2xl">.</Button>
          </div>

          <div className="flex flex-col gap-[17px]">
            <Button data-type="operator" variant="destructive" className='text-4xl' onClick={() => handleOperation('/')}>÷</Button>
            <Button data-type='operator' variant="destructive" className='text-3xl' onClick={() => handleOperation('*')}>×</Button>
            <Button data-type='operator' variant="destructive" className='text-4xl' onClick={() => handleOperation('-')}>-</Button>
            <Button data-type='operator' variant="destructive" className='text-4xl' onClick={() => handleOperation('+')}>+</Button>
            <Button data-type="operator" variant="destructive" className='text-4xl' onClick={handleEquals}>=</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator

