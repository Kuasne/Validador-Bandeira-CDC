/**
 * Identifica a bandeira de um cartão de crédito com base no número.
 * @param {string} numeroCartao - O número do cartão de crédito.
 * @returns {string} - A bandeira do cartão ou "Bandeira desconhecida".
 */
function identificarBandeira(numeroCartao) {
    const bandeiras = {
        Visa: /^4\d{12}(\d{3})?$/, // Começa com 4
        MasterCard: /^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/, // 51-55 ou 2221-2720
        Elo: /^(4011\d{12}|4312\d{12}|4389\d{12}|4576\d{12}|5041\d{12}|5066\d{12}|509\d{14}|6277\d{12}|6362\d{12}|650\d{14}|6516\d{13}|6550\d{13})$/, // Intervalos específicos
        Amex: /^3[47]\d{13}$/, // Começa com 34 ou 37
        Discover: /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/, // Começa com 6011, 65 ou 644-649
        Hipercard: /^6062\d{12}$/ // Começa com 6062
    };

    for (const [bandeira, regex] of Object.entries(bandeiras)) {
        if (regex.test(numeroCartao)) {
            return bandeira;
        }
    }

    return 'Bandeira desconhecida';
}

// Exemplo de uso
const numeroCartao = '4111111111111111'; // Substitua pelo número do cartão
console.log(identificarBandeira(numeroCartao)); // Saída: Visa