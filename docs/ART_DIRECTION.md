# Direção de arte

Identidade já aprovada pela cliente (arquivos de referência em `identidade/`, só local e fora do git). A bio aplica essa identidade. Não há paleta alternativa: lavanda, oliva, terracota, baunilha e ameixa, com Lora e Poppins, estão fechadas.

## Hipóteses

- Esta página é uma bio de presença. A one-page fica em outro projeto.
- Público: adolescentes, adultos e idosos que procuram atendimento online.
- Tom pedido: acolhedora, marcante, nítida.
- Não pode parecer fria, carregada de informação ou confusa.
- Clima de referência: a luz que entra no jardim do Shopping Galleria, em Campinas. Clareza e cores que conversam, como no Instagram da Maitê Sartori.
- Faixa de preço não informada. CRP 06/229667, no rodapé. E-mail não informado.
- Domínio: o site dela será `psicologaleticiasouza.com.br`; esta bio fica em `links.psicologaleticiasouza.com.br`. Artigo ainda sem URL — fica de fora até existir.
- Lavanda, terracota e oliva não servem para texto pequeno: contraste insuficiente sobre a baunilha. Texto e botão principal usam o ameixa.

## Universo do tema

| Objetos | Materiais / texturas | Gestos / processos | Lugares / luz | Vocabulário |
| --- | --- | --- | --- | --- |
| broto, duas folhas, chão ondulado | papel baunilha, folha de oliva, terra | chegar, conversar, permanecer | jardim interno do Galleria, luz de dia | atendimento online, adolescentes, adultos, idosos, psicóloga clínica |

**Clichê do segmento a evitar:** cérebro, quebra-cabeça, desenho de psicólogo desenmaranhando pensamentos, fundo lilás. A lavanda aparece só em traço fino e em luz de canto, nunca como fundo.

**Restrição da cliente:** nada de elementos figurativos (símbolos, objetos, ícones decorativos). Só linha, luz e tipografia. O único ícone é o do WhatsApp, que é funcional.

**Ideia central:** a luz que entra no jardim, e o chão ondulado do símbolo que continua pela página. O símbolo ocupa o claro; as linhas do chão seguram a base.

## Direção escolhida

A paleta e as fontes não estavam em aberto. O que se desenhou foi a bio em cima da identidade aprovada.

- **Conceito:** um claro de jardim, com o broto no centro e o contato logo abaixo.
- **Paleta:** `#FFFFFF` (fundo) · `#F4E8D8` baunilha (fora do fundo) · `#59444C` ameixa (texto) · `#798467` oliva · `#C58E7C` terracota · `#BDA7D5` lavanda. Oliva e terracota puras ficam abaixo de 4,5:1 com texto, então há três derivados: `#5F6B4F` oliva funda (botão WhatsApp e "Psicóloga clínica", 4,7:1 com baunilha), `#4C5640` oliva noite (hover do WhatsApp) e `#F0D6C9` blush (terracota clara, hover do Instagram/Lattes, 5,4:1 com ameixa). Lavanda: linhas do alto e luz de canto.
- **Tipografia:** Lora no nome (grande, uma linha) e Lora itálico na frase. Poppins em caixa alta espaçada na função e no "Entre em contato!", Poppins nos botões. Fontes locais via `@fontsource` (Lora 500 e 400 itálico; Poppins 400, 500 e 600).
- **Hero:** símbolo, Letícia Souza, Psicóloga clínica, a frase dela, três links.
- **Momento assinatura:** duas linhas lavanda no alto, amplitude baixa, respirando juntas num ciclo de 48 s. Embaixo não há linhas nem faixa: o único chão é o do próprio símbolo de fundo. Por trás, o símbolo dela em 17% de opacidade cresce da raiz uma vez na chegada (chão abre, caule sobe, folhas abrem da junção, a luz lavanda chega por último, ~7 s) e depois balança devagar. Peças recortadas das máscaras originais do vetor da identidade em `public/grow/`.
- **Botões:** pílula. WhatsApp em oliva com uma onda de oliva noite no pé; no hover essa onda sobe e preenche. Instagram e Lattes com borda terracota e ícone em traço (Instagram, capelo para o Lattes); no hover sobe uma onda blush. Divisor do "Entre em contato!" é a mesma onda em traço.
- **Componentes:** `WhatsAppCta`, `FlowLines` e `GrowingMark` (`src/components/site/`). Sem partículas, grade, carrossel ou cards — isso carregaria a página.
- **Risco:** a baunilha com serifa pode lembrar página genérica de bem-estar. O símbolo e o ameixa no botão seguram a marca dela. Se ela achar claro demais, o próximo passo é aumentar o broto, não acrescentar seções.

## Escolhida

Direção: identidade aprovada, bio em claro de jardim. Motivo: paleta e fontes já entregues por ela. Data: 2026-11-05.

## Histórico de feedback

| Rodada | Cliente disse | O que mudou | Resultado |
| --- | --- | --- | --- |
| 1 | Acolhedora, marcante, nítida. Não fria, não carregada, não confusa. Luz do Galleria. Instagram da Maitê Sartori. Sem cérebro, quebra-cabeça ou desenho de pensamentos. | Bio com a paleta e as fontes da identidade. Artigo de fora. | Aguardando ela ver. |
| 2 | (interno) Bio simples demais: tipografia sem contraste, "preto no branco", botões sem identidade. Nada de elementos figurativos. | Linhas fluidas no fundo a partir do chão do símbolo; luz de cor nas bordas; nome maior, frase em Lora itálico, rótulos espaçados; botões em pílula com onda que sobe. | Linhas agitadas demais; site só baunilha e marrom. |
| 3 | (interno) Movimento dava nervosismo; explorar o verde e o rosa da paleta. | De 11 para 4 linhas, amplitude menor, mesmo ritmo para todas (48 s), sem ondulação secundária; faixa terracota no chão. WhatsApp oliva com chão terracota; hover blush nos outros; função em oliva. | Espaço demais acima da logo; onda do WhatsApp no verde escuro; ícones nos links. |
| 4 | (interno) Ajustes acima. | Respiro transparente do PNG cortado e espaçamentos verticais menores (tudo cabe em 1440×780 e 390×844); onda do WhatsApp em oliva noite; ícones de Instagram e Lattes. | Fundo branco; símbolo crescendo no fundo; fundo não aparecia no celular. |
| 5 | (interno) Ajustes acima. A cliente gosta da história do símbolo: uma planta crescendo da raiz. | Fundo `#FFFBF8`; `GrowingMark` atrás do conteúdo (centralizado e grande no mobile, à direita no desktop); linhas do mobile trazidas para a área visível (fora do notch e da barra do navegador), mais fortes, e sem `pathLength`/`vector-effect`, que falham no Safari do iPhone. | Poluído; tirar linhas e animações de baixo. |
| 6 | (interno) Ajuste acima. | Saem a faixa terracota e as linhas oliva/terracota de baixo. Ficam as linhas lavanda do alto e o símbolo crescendo. | Fundo branco puro. |
| 7 | (interno) Fundo `#FFFFFF`. | `--color-neve`, `--background` e `theme-color` passam de `#FFFBF8` para `#FFFFFF`. | Scroll lateral no celular. |
| 8 | (interno) Scroll lateral no mobile. | As linhas e o símbolo de fundo passam da largura da tela. `overflow-x: clip` no `html`/`body`, `overflow="hidden"` no SVG e `contain: paint` nas camadas de fundo. | Aguardando ela ver. |
