export class Conta {
    constructor(saldoiInicial, cliente, agencia) {

        this._saldo = saldoiInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if (this.construtor == Conta) {
            throw new Error('Não deveria ser instanciado um objeto do tipo Conta diretamente, pois essa é uma classe abstrata.')
        }
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        throw new Error('O metodo sacar da conta é abstrato');
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valor;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        if (this._tipo = 'salario') {
            return;
        }

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}