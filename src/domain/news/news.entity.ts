export class News {
  constructor(public headline: string, public createdAt: Date, public source: string) {

    if (!headline || headline.length === 0) {
      throw new Error('El titular no puede estar vacío');
    }
    if (!createdAt) {
      throw new Error('La decha de creación no puede estar vacía');
    }
    if (!source || source.length === 0) {
      throw new Error('La fuente no puede estar vacía');
    }
  }
}
