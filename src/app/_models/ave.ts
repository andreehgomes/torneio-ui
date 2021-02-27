import { Criador } from './criador';
import { Especie } from './especie';

export class Ave{
    codigo?: number;
    nome: string;
    especieHttp?: Especie = new Especie();
    medidaAnilha: string;
    numeroAnilha: string;
    criadorHttp?: Criador = new Criador();
    ativo: boolean;
    dataCadastro?: string;
}
