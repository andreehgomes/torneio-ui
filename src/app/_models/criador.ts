import { Endereco } from './endereco'
import { Ave } from './ave'

export class Criador {
    cpf: string;
    rg: string;
    ibama: string;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
    data_cadastro: string;
    senha: string;
    endereco?: Endereco;
    ave?: Ave[];
}