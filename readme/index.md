<style>
@import url(./overview.css);

body {
    width: 700px !important;
    margin: 0 auto !important;
}

body > * { margin-right: 20px; }
</style>

## TEMA

Stateful objects para tratamento de estados enxuto no React

## RESUMO

React corresponde a mais de 80% de todo desenvolvimento frontend na atualidade, e um de seus aspectos mais controverso é sua excessiva complexidade e verbosidade no tratamento de estado em comparação com outras tecnologias SPA component-based, como Svelt, Angular, Vue, entre outros.

Essa pesquisa desenvolve e demonstra o conceito de 'stateful objects' na forma de um objeto Proxy do Javascript que encapsula a complexidade do tratamento de estado no React, oferecendo uma abordagem orientada a objetos compatível com componentes funcionais.

O conceito é implementado no framework Reactful que fornece, entre outros recursos, suporte a server-side rendering aos stateful objects.

## RELEVÂNCIA

Esse tema tem grande alcance e apelo dado a popularidade do React e a considerável inferioridade do seu tratamento de estado em relação a tecnologias concorrentes.

- aproximadamente 80% do desenvolvimento frontend é em React
- tratamento de estado em React é muito inferior a outras libs
- os frameworks React atuais não resolvem esse problema

## OBJETIVOS
Solucionar a complexidade (regras de hooks) e verbosidade no tratamento de estado no React através com uma solução compatível com componentes funcionais.

- apresentar a revisão de literatura com as fundamentações conceituais do problema
- comparar o tratamento de estado entre a 3 bibliotecas JS mais utilizadas
- apresentar a solução dos stateful objects para tratamento de estados
- comparar a solução com o tratamento de estados no React atualmente
- demonstrar o uso do framework em um projeto real já ilicitado

## CONTRIBUIÇÕES

**Stateful objects** introduz um tratamento de estado orientada a objetos, abstraindo sua complexidade através do encapsulamento de um useState hook dentro de um objeto Proxy, resumindo as muitas regras contra-intuitivas dos hooks em uma única: o objeto para se manter stateful precisa se manter objeto (isto é, não suporta destructuring).

CONCEITO | DESCRIÇÃO |
|:-:|-|
| **states store** (produtividade) | oferece vários estados na forma de campos de objeto, ao invés de uma invocacao de hook para cada estado |
| **stateful props** (produtividade) | reusa propriedades como estados locais, tornando as propriedades em **stateful objects** |
| **delayed render** (desempenho) | algoritmo que oferece alto desempenho no fluxo de renderização dos **stateful objects** |
| **server rendering** (desempenho) | suporta server-side rendering de componentes, reduzindo o custo de renderização do client-side ao mínimo |
| **hookless design** (produtividade) | substitui a maioria dos casos de uso dos principais do function hooks (useState, useContext e useReducer), desempenho (useMemo, useCallback) e fetching (use) |

## FUNDAMENTAÇÃOS

A fundamentação aborda os conceitos relacionado ao objeto de pesquisa

| Conceito | Descrição |
|-|-|
| **MPA: multi-page application** | arquitetura tradicional para aplicações web  |
| **SPA: single-page application** | arquitetura dominante para aplicações web |
| **AJAX: javascript asynchronous** | tecnologia que possibilita os SPAs |
| **web components** (custom elements) | conceito utilizado nos SPA |
| **state handling** | tratamento de estado no React |
| **unidirectional data flow** | arquitetura de dados do React |
| **server-side rendering** | renderização de componentes no servidor |
| **react server component** | tecnologia de componentes de servidor |

## METODOLOGIA

Como metodologia ele abrange revisão de literatura e prototipação empirica com comparações qualitativas de desempenho e produtividade (em termos de sintaxe).

- **revisão da literatura**, envolvendos os fundamentos conceituais
- **experimentação empírica**, caso de uso do software em um aplicação real
- **comparação quantitativa** do desempenho do algoritmo de renderização
- **comparação quantitativa** da sintaxe de tratamento de estado

## LIMITAÇÕES

Algumas limitações relacionados ao uso do framework Reactful, o framework é necessário para implementar suporte server-side rendering aos stateful objects.

- customs props directive é limitado ( nao suporta 'imports' de modulos )
- warning no IDE nos function decorators (contornável com //@ts-ignore )
- import CSS modular sem nao suporta CSS pseudo-selectors (:hover, :active, :etc)

## TRABALHOS FUTUROS

Atualmente o framework Reactful é implementado para aplicacoes Web (no pacote @reactful/web), como ele já foi projetado de modo modularizável, ele já está projetado para postar futuramente para aplicações mobile (seja PWA, híbrida ou nativas) através do (@reactful/app), assim como outras possíveis plataformas.

## CRONOGRAMA

Como cronograma, segue o status atual de alguns tópicos relacionado a esse projeto. O slide ainda não está focado no problema de pesquisa (stateful objects), mas já está completo numa visão geral.

- protótipo funcional: **90%**
- documentacao técnica: **95%**
- slide de apresentação: **50%** 
- video introdutório: **100%**
- projeto de pesquisa: **50%**
- artigo cientifíco: **0%**
