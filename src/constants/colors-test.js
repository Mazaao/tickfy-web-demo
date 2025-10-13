// Teste de cores - podem ser removidas depois
// RGB primário: 156, 0, 255 (HSL: 276.7, 100%, 50%)
// RGB secundário: 186, 182, 255 (HSL: 244.8, 100%, 85.7%)

export const COLOR_TESTS = {
  primary: {
    rgb: 'rgb(156, 0, 255)',
    hsl: 'hsl(276.7, 100%, 50%)',
    expected: '#9C00FF'
  },
  secondary: {
    rgb: 'rgb(186, 182, 255)', 
    hsl: 'hsl(244.8, 100%, 85.7%)',
    expected: '#BAB6FF'
  }
}

// Para testar no console:
// console.log(COLOR_TESTS)