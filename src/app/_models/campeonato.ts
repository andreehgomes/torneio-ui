import { Associacao } from "./associacao";
export class Campeonato {
    codigo?: number;
    nome?: string;
    edicao?: string;
    associacaoHttp?: Associacao = new Associacao();
}