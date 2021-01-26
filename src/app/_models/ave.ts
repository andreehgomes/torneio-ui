import { Criador } from './criador';
import { Especie } from './especie';

export class Ave{
    id?: number;
    nome: string;
    especie?: Especie;
    medidaAnilha: string;
    numeroAnilha: string;
    criador?: Criador;
    ativo: boolean;
    dataCadastro: string;
}