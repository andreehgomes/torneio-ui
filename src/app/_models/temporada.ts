import { Associacao } from '../_models/associacao';

export class Temporada {
    id: number;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    associacao: Associacao;
}
