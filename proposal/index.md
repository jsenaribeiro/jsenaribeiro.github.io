<style>
@import url(./index.css);
@import url(../overview.css);
@import url(../readme/overview.css);
</style>

# PESQUISA

<p subtitle>Stateful objects como tratamento de estado enxuto no React</p>

## RESUMO

React corresponde a mais de 80% de todo desenvolvimento frontend na atualidade, e um de seus aspectos mais problemáticos é o seu tratamento de estado consideravelmente mais complexo e verboso em comparação com outras tecnologias SPA component-based, como Svelt, Angular, Vue, entre outros.

Essa pesquisa soluciona o problema introduzindo o conceito de 'stateful objects': um objeto Proxy que encapsula a complexidade do tratamento de estado no React e seu modelo unidirecional de fluxo de dados, em uma abordagem orientada a objetos, compatível com componentes funcionais, e que elimina ou reduz consideravelmente o boilerplate code exigido no tratamento de estados no desenvolvimento com a biblioteca React.

Os stateful objects são implementado em três escopo (local, global e orbital) no framework Reactful, aprimorando não apenas a manutenibilidade através da simplificação do gerenciamento de estado no React, como também seu desempenho, através de algoritmos de renderização otimizado para Stateful Objects e suporte a renderização server-side.

## OBJETIVOS

Solucionar a complexidade e verbosidade no tratamento de estado no React com uma solução compatível com componentes funcionais. O objetivo geral será tratado nos seguintes objetivos específicos:

- apresentar a revisão de literatura com as fundamentações conceituais do problema
- comparar o tratamento de estado do React com seu concorrentes direto Angular
- apresentar a solução dos stateful objects para tratamento de estados
- comparar a solução com o tratamento de estados no React atualmente
- demonstrar o stateful object através de umo framework aplicado em um projeto real

## RELEVÂNCIA

Esse tema tem grande alcance e apelo dado o domínio do React no desenvolvimento frontend e a considerável inferioridade do seu tratamento de estado em relação a tecnologias concorrentes.

- mais de 80% de todo desenvolvimento frontend é feito em React
- tratamento de estado em React é muito inferior a outras libs
- outros frameworks React atuais não abordam o problema

## CONTRIBUIÇÕES

**Stateful objects** introduz um tratamento de estado orientada a objetos, abstraindo sua complexidade através do encapsulamento de um useState hook dentro de um objeto Proxy, resumindo as muitas regras contra-intuitivas dos hooks em uma única: o objeto para se manter stateful precisa se manter objeto (isto é, não suporta object destructuring).

* **stateful object** (maintenance): na forma de objeto, oferece vários estados na forma de campos de objeto, ao invés de uma invocacao de hook para cada estado
* **stateful props** (maintenance): reusa as propriedades do componente como estados locais, ao tornar essas propriedades em **stateful objects**
* **delayed render** (performance): algoritmo de renderização que disponibiliza alto desempenho no fluxo de renderização no uso de  **stateful objects**
* **server rendering** (performance): suporta server-side rendering de componentes React através do Reactful framework, reduzindo a renderização do client-side ao mínimo
* **hookless design** (maintenance): substitui a maioria dos principais hooks de estado (useState, useContext e useReducer), desempenho (useMemo, useCallback) e fetching (use) 

## FUNDAMENTAÇÃO

Revisão bibliográfica dos conceitos relacionados ao objeto de pesquisa, que são:

* **multi-page application** (MPA): arquitetura tradicional para aplicações web  
* **single-page application** (SPA): arquitetura dominante para aplicações web 
* **asynchronous javascript** (AJAX): tecnologia que possibilita os SPAs 
* **web components** (custom elements) | conceito utilizado nos SPA 
* **state handling**: tratamento de estado no React 
* **unidirectional data flow**: arquitetura de dados do React 
* **stateless component**: componentes React sem estado 
* **stateful component**: componentes React com estado  
* **class component**: primeira geração de stateful React 
* **function hooks**: segunda e atual geração de stateful React 
* **server-side rendering**: renderização de componentes no servidor 
* **react server component**: tecnologia de componentes de servidor 

## METODOLOGIA

Como metodologia, esta pesquisa abrange revisão de literatura e prototipação empirica com comparações qualitativas de desempenho e produtividade (em termos de sintaxe).

- **revisão da literatura**, envolvendos os fundamentos conceituais
- **experimentação empírica**, caso de uso do software em um aplicação real
- **comparação quantitativa** do desempenho do algoritmo de renderização
- **comparação quantitativa** da sintaxe de tratamento de estado

## LIMITAÇÕES

Há algumas limitações relacionados ao uso do framework Reactful. O framework é necessário para o suporte nos stateful objects a renderizações server-side.

- customs props directive é limitado ( nao suporta 'imports' de modulos )
- warning no IDE nos function decorators (contornável com //@ts-ignore )
- import CSS modular sem suporte a CSS pseudo-selectors (:hover, :active, etc)

Atualmente o framework Reactful é implementado para aplicacoes Web (no pacote @reactful/web). Como ele já foi projetado de modo modularizável, já está preparado para facilmente portar aplicações mobile em um futuro pacote @reactful/app, assim como outras possíveis plataformas.

## CRONOGRAMA

Como cronograma, segue o status atual de alguns tópicos relacionado a esse projeto. O slide ainda não está focado no problema de pesquisa (stateful objects), mas já está completo numa visão geral.

- protótipo funcional: **90%**
- documentacao técnica: **95%**
- slide de apresentação: **50%** 
- video introdutório: **100%**
- projeto de pesquisa: **50%**
- artigo cientifíco: **0%**

## PENDÊNCIAS

Segue aqui as pendencias que serão atendidas, caso o tema seja aceito:

- formalizar um projeto de pesquisa seguindo o padrão acadêmico
- evidenciar inovação pesquisando em banco de dados de artigos científicos e outras tecnologias de framework, libraries ou patterns
- modificar o slide para se focar no problema de pesquisa que é state handling no React

<br><br>
