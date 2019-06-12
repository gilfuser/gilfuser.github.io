# Vitrola Maritrônica

Na ocasião do evento Estação Maritaca no SESC Pompéia em outubro de 2018, criei duas traquitanas para criancas e ministrei uma oficina em que as criancas construiram um "brinquedo musical". A ideia por trás do evento era proporcionar às criancas experiências vindas de uma estacao de rádio.

A vitrola Maritrônica é uma engenhoca que mistura as possibilidades de um mixer, um toca-discos e um seletor de música, tudo em uma caixa com tampo transparente para que as criancas possam ver e ficarem curiosas sobre os componentes que permitem seu funcionamento.
As criancas podem fazer scratchs utilizando um disco e um crossfader, escolher e combinar loops de músicas, mudar o volume e a velocidade com que esses loops sao tocados.
A Vitrola Maritrônica foi disposta numa espécie de iglu (cenografia de Marisa Bentivegna) em que quatro criancas podiam ao mesmo tempo interagir com a traquitana.
As engrenagens
Em termos superficiais ela funciona da seguinte forma.
Duas placas de prototipagem, Arduino Duo e Teensy Board, digitalizam e processam os dados vindos dos faders e botoes giratorios (encoders), assim como do disco giratório.
Um single board computer Raspberry Pi rodando o SuperCollider (audio server, and programming language for sound synthesis and algorithmic composition) https://supercollider.github.io/ com um programa expecialmente escrito  para o aparelho.
Uma placa de som especial para a Raspberry Pi transforma em som de verdade os sinais gerados pelo SuperCollider.

O gravador Maritaca é um objeto com o qual as crincas ouvem ouvem dicas para que gravem histórias e facam entrevistas umas com as outras. Através de uma interface simples elas operam sem precisar de ajuda essa engenhoca.
As gravacoes ficam armazenadas e sao disponibilizadas para uso no aplicativo Maritaca.
The Gears
Dentro da caixa metálica ficam uma placa de desenvolvimento Teensy acoplada a uma placa de audio específica, à qual ficam conectados o microfone e os fones de ouvidos. As gravacoes ficam armazenadas em um cartao sd.



Especificações

Baseados em um circuito integrado, construiremos em placas de prototipagem um circuito simples que gera pulsos elétricos em frequências audíveis, que ouviremos através de pequenos alto-falantes. As frequências poderão ser moduladas com o uso de sensores de luz e botões rotativos.
Ao final, como experimentação, os instrumentos poderão ser combinados entre si, gerando modulação cruzada e assim, sons mais complexos.
