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

Os Stateful Objects são implementado no framework Reactful, aprimorando não apenas a manutenibilidade através da simplificação do gerenciamento de estado no React, como também seu desempenho, através de renderização server-side e otimizada para Stateful Objects. 

## OBJETIVOS

Solucionar a complexidade e verbosidade no tratamento de estado da biblioteca React, em  uma solução compatível com componentes funcionais, através dos seguintes objetivos específicos:

- apresentar a revisão de literatura com as fundamentações conceituais do problema;
- comparar a sintaxe de tratamento de estado entre React e Angular (concorrente);
- demonstrar as vantagens do Stateful Objects para tratamento de estados no React;
- apresentar o Stateful Object em um projeto real através do framework Reactful;

## METODOLOGIA

Como metodologia, esta pesquisa abrange revisão de literatura e caso de estudo empírico utilizando comparativos quantitativos de desempenho e qualitativos de manutenibilidade.

- **caso de estudo** com uso do framework em uma aplicação real;
- **revisão da literatura** dos fundamentos conceituais do problema;
- **comparação quantitativa** do desempenho do algoritmo de renderização;
- **comparação qualitativa** da sintaxe de tratamento de estado;

## RELEVÂNCIA

O tema tem grande alcance, dado o domínio do React no desenvolvimento frontend e sua inferioridade no tratamento de estado em relação a tecnologias concorrentes.

- mais de 80% de todo desenvolvimento frontend é feito em React;
- tratamento de estado em React é muito inferior a outras libs;
- frameworks React atuais não abordam o problema;

A solução resolve um dos maiores pontos fracos do React, melhorando sua: 

* **produtividade**, ao permitir uma codificação mais enxuta e simples; 
* **manutenibilidade**, ao reduzir sua propensão ao erro dado sua complexidade; 
* **competitividade**, dado que esse aspecto é inferior a seus principais concorrentes;

## CONTRIBUIÇÕES

Algo é stateful no contexto do React, quando ao mudar o seu estado (mudança de valor de uma variável), os componentes relacionados ao estado invocam uma nova renderização, para assim permitir redesenhar os componentes com a nova informação alterada.

Após os  `class components` e os `function hooks`, `stateful objects` seriam uma terceira geração no tratamento de estados no React, que encapsula a complexidade do tratamento de estado dentro de uma classe Proxy do JavaScript usando um algorítmo otimizado de renderização.

Através de estados na forma de campos de um objeto, ele consegue resumir todas as várias regras pouco intuitivas dos hooks a uma única: para se manter stateful, basta se manter objeto. Ou seja, se o objeto for desconstruído (destructuring), assim deixando de ser objeto, ele deixa de ser stateful.

Conceitos aplicados que aprimoram a manutenibilidade (simplicidade):

* **object store**: na forma de objeto, oferece vários estados na forma de campos de objeto, ao invés de uma invocacao de hook para cada estado individual;
* **stateful props**: reusa as propriedades do componente como estados locais, por tornar automaticamente o objeto de propriedades em **stateful objects**;
* **hookless design**: substitui a maioria dos principais hooks de estado (useState, useContext e useReducer), desempenho (useMemo, useCallback) e fetching (use);

Conceitos aplicados que aprimoram o desempenho (responsividade):

* **server rendering**: suporta server-side rendering de componentes React através do Reactful framework, reduzindo a renderização do client-side ao mínimo;
* **delayed render**: algoritmo de renderização que disponibiliza alto desempenho no fluxo de renderização para o uso de  **stateful objects**;
* **render refocus**: recupera o foco nos elementos de formulário em componentes-filho quando o componente-pai dispara um novo render para responder a mudança de estado;

## FUNDAMENTAÇÃO

Revisão bibliográfica dos seguintes conceitos relacionados:

* **multi-page application** (MPA): arquitetura tradicional para aplicações web ;
* **single-page application** (SPA): arquitetura moderna usada pelo React;
* **asynchronous javascript** (AJAX): tecnologia que possibilita os SPAs;
* **custom elements**: conceito aplicado em component-based SPA;
* **state handling**: conceito de tratamento de estado do React;
* **unidirectional data flow**: arquitetura de dados do React;
* **bidirectional data flow**: arquitetura concorrente ao do React;
* **stateless component**: componentes sem estado (imutáveis);
* **stateful component**: componentes com estado (view-model);
* **class component**: primeira geração de stateful components;
* **function hooks**: segunda e atual geração de stateful components;
* **server-side rendering**: renderização de componentes no servidor;
* **react server component**: executa componentes no lado do servidor;

## LIMITAÇÕES

Há algumas limitações não relacionadas aos Stateful Objects em si, mas ao framework Reactful que fornece renderizações server-side aos Stateful Objects. São eles:

<style>
   table { zoom: 0.9 }
</style>

| recurso | problema | contorno |
|-:|-|-|
| **props directive** | não suporta importações | correção agendada para futuras versões |
| **function decorators** | warning de sintaxe no IDE | ignorar adicionando comentário `//@ts-ignore` |
| **@reactful/web** | suporta apenas aplicações web | suporte mobile em futuras versões |
| **modular CSS** | não suporta pseudo-selectors | usar HTML link[href] nesses casos |


## CRONOGRAMA 

Segue o status atual de alguns tópicos relacionado a esse projeto.

| atividade                |  status  | estimativa | relacionado |
| ------------------------ | :------: | :--------: | ----------- |
| video introdutório       | **100%** |   pronto   | framework   |
| slide de apresentação    | **85%**  |   3 dias   | pesquisa    |
| protótipo funcional      | **95%**  | 2 semanas  | framework   |
| documentação técnica     | **95%**  |  1 semana  | framework   |
| projeto usando framework | **15%**  |  2 meses   | framework   |
| projeto de pesquisa      | **58%**  |  1 semana  | pesquisa    |
| artigo da dissertação    |  **0%**  |  3 meses   | pesquisa    |

## RISCOS

Listado alguns riscos de impedimento ou atraso relacionado a esse tema.

| risco | descrição | mitigação |
|-:|-|-|
| **montagem do comparativo de desempenho** | montar o ambiente e monitorar o desempenho de em vários cenários de uso pode ser desafiador, complicado pelo fato que não tenho muita experiência em montar esse tipo de teste de desempenho | estudar mais esse tipo de teste, baixar projetos que já implementam testes de desempenho entre várias bibliotecas SPA, etc |
| **falta de artigos científicos sobre o state handling** | dificuldade em encontrar artigos científicos que abordem o tema específico de tratamento de estado no React, ou mesmo o tratamento de estado em geral | avaliar se documentação técnica como literatura cinza pode substituir totalmente a bibliografia acadêmica |

<br><br>
