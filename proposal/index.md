<style>
@import url(./index.css);
@import url(../overview.css);
@import url(../readme/overview.css);
</style>

# **ESBOÇO DE PROJETO DE PESQUISA**

<p subtitle>Stateful Objects como tratamento de estado enxuto no React</p>

## RESUMO

React corresponde a mais de 80% de todo desenvolvimento frontend na atualidade, e um de seus aspectos mais problemáticos é o seu tratamento de estado consideravelmente mais complexo e verboso em comparação com outras tecnologias SPA component-based, como Svelt, Angular, Vue, entre outros.

Essa pesquisa soluciona o problema introduzindo o conceito de 'stateful objects': um objeto Proxy que encapsula a complexidade do tratamento de estado no React e seu modelo unidirecional de fluxo de dados, em uma abordagem orientada a objetos, compatível com componentes funcionais, e que elimina ou reduz consideravelmente o boilerplate code exigido em seu tratamento de estados.

Os stateful objects são implementado em três escopo (local, global e orbital) no framework Reactful, aprimorando não apenas a manutenibilidade através da simplificação do gerenciamento de estado no React, como também seu desempenho, através de algoritmos de renderização otimizado para Stateful Objects e suporte a renderização server-side.

## OBJETIVOS

Solucionar a complexidade e verbosidade no tratamento de estado da biblioteca React em  uma solução compatível com componentes funcionais através dos seguintes objetivos específicos:

- apresentar a revisão de literatura com as fundamentações conceituais do problema
- comparar a sintaxe de tratamento entre React e seu maior concorrente: Angular
- demonstrar a solução dos Stateful Objects para tratamento de estados no React
- demonstrar o Stateful Object em um framework aplicado em um projeto real

## RELEVÂNCIA

O tema tem grande alcance dado o domínio do React no desenvolvimento frontend e sua inferioridade no tratamento de estado em relação a tecnologias concorrentes.

- mais de 80% de todo desenvolvimento frontend é feito em React
- tratamento de estado em React é muito inferior a outras libs
- outros frameworks React atuais não abordam o problema

A relevância da solução está em abordar um dos principais pontos fracos dao React, a complexidade e verbosidade no tratamento de estado, oferecendo uma melhora na sua: 

* **produtividade**, ao permitir uma codificação mais enxuta e simples; 
* **manutenibilidade**, ao reduzir sua propensão ao erro dado sua complexidade; 
* **competitividade**, dado que esse aspecto é inferior a seus principais concorrentes.

## CONTRIBUIÇÕES

**Stateful objects** introduz um tratamento de estado orientada a objetos, abstraindo sua complexidade através do encapsulamento de um `useState` hook dentro de um objeto `Proxy`, resumindo as regras contra intuitivas dos hooks a uma única: para se manter stateful, precisa se manter objeto.

Conceitos aplicados que aprimoram a manutenibilidade (simplicidade):

* **object store**: na forma de objeto, oferece vários estados na forma de campos de objeto, ao invés de uma invocacao de hook para cada estado
* **stateful props**: reusa as propriedades do componente como estados locais, ao tornar o objeto de propriedades em **stateful objects**
* **hookless design**: substitui a maioria dos principais hooks de estado (useState, useContext e useReducer), desempenho (useMemo, useCallback) e fetching (use)

Conceitos aplicados que aprimoram o desempenho (responsividade):

* **delayed render**: algoritmo de renderização que disponibiliza alto desempenho no fluxo de renderização no uso de  **stateful objects**
* **server rendering**: suporta server-side rendering de componentes React através do Reactful framework, reduzindo a renderização do client-side ao mínimo
* **render refocus**: recupera o foco nos elementos de formulário em componentes-filho quando o componente-pai dispara um novo render para responder a mudança de estado.


## FUNDAMENTAÇÃO

Para a revisão bibliográfica, segue aqui os conceitos relacionados que terão suas definições apresentadas na redação da pesquisa.

* **multi-page application** (MPA): arquitetura tradicional para aplicações web  
* **single-page application** (SPA): arquitetura moderna usada pelo React
* **asynchronous javascript** (AJAX): tecnologia que possibilita as libs SPAs 
* **custom elements**: conceito em component-based SPAs
* **state handling**: conceito de tratamento de estado utilizado no React 
* **unidirectional data flow**: arquitetura de dados do React 
* **bidirectional data flow**: arquitetura no Angular, oposto ao do React 
* **stateless component**: componentes React sem estado 
* **stateful component**: componentes React com estado  
* **class component**: primeira geração de stateful components 
* **function hooks**: segunda e atual geração de stateful React 
* **server-side rendering**: renderização de componentes no servidor 
* **react server component**: executa componentes no lado do servidor 

## METODOLOGIA

Como metodologia, esta pesquisa abrange revisão de literatura e prototipação empírica com comparações qualitativas de desempenho e manutenibilidade (considerando a sintaxe).

- **revisão da literatura**, envolvendo os fundamentos conceituais
- **experimentação empírica**, caso de uso do software em uma aplicação real
- **comparação quantitativa** do desempenho do algoritmo de renderização
- **comparação quantitativa** da sintaxe de tratamento de estado

## LIMITAÇÕES

Há algumas limitações não relacionadas aos Stateful Objects em si, mas a outros recursos direta ou indiretamente relacionados que estão no framework Reactful, que fornece suporte a renderizações server-side para os Stateful Objects. As limitações são:

<style>
   table { zoom: 0.9 }
   [limit] tr:nth-of-type(1) td { padding-top: 15px; }
   [limit] tr th { font-family: agave;  }
   [limit] tr td:nth-of-type(1) { font-family: agave }
   [limit] tr td:nth-of-type(3) { color: #AAA; }
</style>

| recurso | problema | contorno |
|-:|-|-|
| function decorators | warning de sintaxe no IDE | adicionar comentário `//@ts-ignore` |
| props directive | não suporta importações | correção projetada em futuras versões |
| @reactful/web | suporta apenas aplicações web | suporte mobile em futuras versões |
| modular CSS | não suporta pseudo-selectors | usar HTML link[href] nesses casos |


## CRONOGRAMA 

Segue o status atual de alguns tópicos relacionado a esse projeto.

| atividade | status | estimativa |
|-|:-:|:-:|
| video introdutório | **100%** | pronto |
| slide de apresentação | **85%**  | 3 dias |
| protótipo funcional | **95%** | 2 semanas |
| documentação técnica | **95%** | 1 semana |
| projeto usando framework | **15%** | 2 meses |
| projeto de pesquisa | **58%** | 1 semana |
| artigo da dissertação | **0%** | 3 meses |


## RISCOS

Listado alguns riscos de impedimento ou atraso relacionado a esse tema.

| risco | descrição | mitigação |
|-:|-|-|
| **montagem do comparativo de desempenho** | montar o ambiente e monitorar o desempenho de em vários cenários de uso pode ser desafiador, complicado pelo fato que não tenho muita experiência em montar esse tipo de teste de desempenho | estudar mais esse tipo de teste, baixar projetos que já implementam testes de desempenho entre várias bibliotecas SPA, etc |
| **falta de artigos científicos sobre o state handling** | dificuldade em encontrar artigos científicos que abordem o tema específico de tratamento de estado no React, ou mesmo o tratamento de estado em geral | avaliar se documentação técnica como literatura cinza pode substituir totalmente a bibliografia acadêmica |



<br><br>
