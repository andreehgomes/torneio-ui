import { Endereco } from './endereco'
import { Associacao } from './associacao';
import { Usuario } from './usuario'

export class Criador {
    codigo?: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    cpf: string;
    rg: string;
    ctf: string;
    ativo: boolean;
    AssociacaoHttp: Associacao;
    enderecoHttp: Endereco;
    usuarioHttp: Usuario;
}