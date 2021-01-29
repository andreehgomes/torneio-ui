import { Associacao } from "./associacao";
import { Criador } from "./criador";

export class Usuario {
    codigo?: number;
    email: string;
    senha: string;
    tipo: string;
    criadorHttp: Criador;
    associacaoHttp: Associacao;
}