# Estação Maritaca

![image](/images/maritaca/vm-00.jpg)

Por ocasião do evento Estação Maritaca no SESC Pompéia em outubro de 2018, criei duas traquitanas e dei uma oficina onde as crianças construíram um "brinquedo musical". A ideia por trás do evento, concebida pela artista Mariana Piza, foi proporcinar às crianças experiências de uma emissora de rádio.

---

## Vitrola Maritrônica

A Vitrola Maritrônica é uma traquitana que mistura as possibilidades de um mixer, um toca-discos e um seletor de músicas, tudo em uma caixa com tampo transparente para que as crianças possam ver e ter curiosidade sobre os componentes que permitem o seu funcionamento.
As crianças podem fazer *scratch* usando um disco e um *crossfader*, escolher e combinar *loops* de músicas, alterar o volume e a velocidade com que esses *loops* são reproduzidos.
O design da caixa, o disco rotativo e a capa de acrílico são o artista e cenógrafo Julio Dojcsar.
A Vitrola Maritrônica foi arranjada em uma espécie de iglu (cenografia de Marisa Bentivegna) em que quatro crianças podiam interagir com a traquitana ao mesmo tempo.

![image](/images/maritaca/vm-01.jpg)
![image](/images/maritaca/vm-02.jpeg)
![image](/images/maritaca/vm-04.jpeg)
![image](/images/maritaca/vm-05.jpg)

[volta ao topo](#estacao-maritaca)

### O Funcionamento

Em termos superficiais, a **Vitrola Maritrônica** funciona da seguinte maneira:  
Duas placas de prototipagem, [Arduino](https://www.arduino.cc/) Duo e [Teensy Board](https://www.pjrc.com/teensy/), digitalizam e processam dados de *faders* e botões rotativos (*encoders*) bem como do disco giratório.
Um computador de placa única [Raspberry Pi](https://www.raspberrypi.org/) executando o [SuperCollider](https://supercollider.github.io/ "servidor de áudio, IDE e linguagem de programação para síntese de som e composição algorítmica ") com um programa especificamente escrito para o dispositivo.  
Uma placa de som especial para a Raspberry Pi transforma os sinais gerados pelo SuperCollider em som real.

[volta ao topo](#estacao-maritaca)

---

## Gravador Maritaca

![image](/images/maritaca/mr-00.jpg)

O Maritaca Recorder é um objeto com o qual as crianças ouvem dicas para que gravem histórias e façam entrevistas entre si. Através de uma interface simples, eles operam e gravam sem precisar de ajuda de adultos.
As gravações são armazenadas e disponibilizadas para uso no aplicativo Maritaca.

### Funcionamento

Dentro do gabinete de metal há uma placa de desenvolvimento Teensy conectada a uma placa de áudio específica, à qual o microfone e os fones de ouvido estão conectados. As gravações são armazenadas em um cartão SD.

![image](/images/maritaca/mr-01.jpeg)
![image](/images/maritaca/mr-02.jpg)

[volta ao topo](#estacao-maritaca)

---

## Traquitronica - Oficina de Brinquedo Musical

![image](/images/maritaca/mw-01.jpg)

Nesta oficina destinada a crianças a partir dos sete anos de idade acompanhadas de adultos, construímos juntos instrumentos eletrônicos simples, com elementos simples, sem circuitos de solda ou complicados. Elas podem tocá-los com gestos, controlar a luz e os botões, e ainda combinar os instrumentos de uma com a da outra.
No final, os participantes podem levar seus instrumentos para casa.

### Os Objetivos

* aprender princípios básicos de elétrica, eletrônica e de áudio, a partir de atividades práticas.
* Construção de um instrumento eletrônico que pode ser levado pelos participantes.

### Specificidades

Com base em um circuito integrado, construímos em placas de prototipagem um circuito simples que gera pulsos elétricos em freqüências audíveis, que ouvimos através de pequenos alto-falantes. Freqüências podem ser moduladas usando sensores de luz e botões rotativos.
No final, como experimentação, os instrumentos podem ser combinados, gerando modulação cruzada e, assim, sons mais complexos.

![image](/images/maritaca/mw-03.jpg)

<iframe style="width:100%;height:416px;" src="https://www.youtube.com/embed/px9Je3Rxayc?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[volta ao topo](#estacao-maritaca)
