import { Associacao } from "./associacao";
export class Campeonato {
    codigo?: number;
    nome?: string;
    associacaoHttp?: Associacao = new Associacao();
}