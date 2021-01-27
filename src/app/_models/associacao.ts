import { Endereco } from "./endereco";
import { Usuario } from "./usuario";

export class Associacao {
    codigo?: number;
    cnpj: string;
    sigla: string;
    nome: string;
    enderecoHttp: Endereco = new Endereco();
    usuarioHttp: Usuario = new Usuario();
}