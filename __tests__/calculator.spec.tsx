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
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('%'))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('1')
  })

  test('handles division by zero', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('÷'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('Infinity')
  })
})
