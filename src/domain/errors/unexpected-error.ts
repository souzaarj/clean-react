export class UnexpectedError extends Error {
  constructor () {
    super('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}
