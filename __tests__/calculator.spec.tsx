import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CalculatorProvider } from '@/components/Calculator/providers/CalculatorProvider'
import Calculator from '@/components/Calculator'

const component = (ui: React.ReactElement) => {
  return render(
    <CalculatorProvider>
      {ui}
    </CalculatorProvider>,
  )
}

describe('Calculator', () => {
  beforeEach(() => {
    component(<Calculator />)
  })

  test('displays numbers when clicked', () => {
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('123')
  })

  test('performs basic addition', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('8')
  })

  test('performs basic subtraction', () => {
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('5')
  })

  test('performs basic multiplication', () => {
    fireEvent.click(screen.getByText('6'))
    fireEvent.click(screen.getByText('×'))
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('42')
  })

  test('performs basic division', () => {
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('÷'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('4')
  })

  test('clears display when AC is clicked', () => {
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('AC'))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('0')
  })

  test('chains multiple operations', () => {
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('×'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('20')
  })

  test('handles decimal numbers', () => {
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('×'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('3')
  })

  test('handles negative numbers with +/-', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+/-'))
    fireEvent.click(screen.getByText('×'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('-15')
  })

  test('handles percentage calculations', () => {
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('%'))
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('25')
  })

  test('handles division by zero', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('÷'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('Infinity')
  })

  test('handle logarithmic operartion', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('log'))
    const equiv = Math.log10(5)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())

  })

  test('handle sine operartion', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('sin'))
    const equiv = Math.sin(5)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())

  })

  test('handle sine on degree operartion', () => {
    fireEvent.click(screen.getByText('RAD'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('sin'))
    const equiv = Math.sin((5 * Math.PI) / 180)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())

  })

  test('handle cosine operartion', () => {
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('cos'))
    const equiv = Math.cos(7)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())

  })

  test('handle cosine on degree operartion', () => {
    fireEvent.click(screen.getByText('RAD'))
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('cos'))
    const equiv = Math.cos((71 * Math.PI) / 180)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())

  })

  test('handle tangent operartion', () => {
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('tan'))
    const equiv = Math.tan(20)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())

  })

  test('handle tangent on degree operartion', () => {
    fireEvent.click(screen.getByText('RAD'))
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('tan'))
    const equiv = Math.tan((81 * Math.PI) / 180)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())
  })

  test('handle squared notation', () => {
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('x²'))
    const equiv = Math.pow(9, 2)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())
  })

  test('handle cubed notation', () => {
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('x³'))
    const equiv = Math.pow(9, 3)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())
  })

  test('handle square root notation', () => {
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('√'))
    const equiv = Math.sqrt(27)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent(equiv.toString())

  })


})
