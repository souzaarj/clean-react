export class InvalidEmailError extends Error {
  constructor () {
    super('O e-mail informado é inválido')
    this.name = 'InvalidEmailError'
  }
}
