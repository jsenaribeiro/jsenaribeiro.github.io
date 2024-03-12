<style>
@import url(./index.css);
@import url(../overview.css);
@import url(../readme/overview.css);
</style>

# **ESBOÇO DE PROJETO DE PESQUISA**

<p subtitle>Stateful Objects como tratamento de estado enxuto no React</p>

## RESUMO

Mais de 80% desenvolvimento frontend é feito em React, contudo, essa tecnologia detém um dos tratamentos de estado mais complexo e verboso em comparação a seus concorrentes SPA component-base como Angular, Vue, entre outros.

Esta pesquisa propõe os 'stateful objects', uma nova geração de tratamento de estados no React que encapsula sua complexidade em um Proxy adotando uma abordagem orientada a objetos compatível com componentes funcionais através do framework Reactful.

A proposta aprimora não apenas a manutenibildiade, simplificando o tratamento de estados mas também garantindo alto desempenho através de renderização otimizada e server-side dos Stateful Objects.

**palavras-chaves**: single-page application, state handling, frontend, React

## OBJETIVOS

Propor uma solução para a complexidade e verbosidade do tratamento de estado no desenvolvimento frontend com React, através dos seguintes objetivos específicos:

- apresentar a revisão de literatura com as fundamentações conceituais do problema;
- comparar a sintaxe de tratamento de estado entre React e Angular (concorrente);
- demonstrar as vantagens do Stateful Objects para tratamento de estados no React;
- apresentar o Stateful Object em um projeto real através do framework Reactful;

## METODOLOGIA

Como metodologia, esta pesquisa realizará uma revisão de literatura com caso de estudo e comparativos quantitativos e qualitativos de manutenibilidade.

- **caso de estudo** com uso do framework em uma aplicação real;
- **revisão da literatura** dos fundamentos conceituais do problema;
- **comparação quantitativa** do desempenho do algoritmo de renderização;
- **comparação qualitativa** da sintaxe de tratamento de estado;

## RELEVÂNCIA

O domínio do React no desenvolvimento frontend e sua inferioridade no tratamento de estado em relação a tecnologias concorrentes atrai muito interesse e relevância a esse tema.

- mais de 80% de todo desenvolvimento frontend é feito em React;
- tratamento de estado em React é muito inferior a outras libs;
- frameworks React atuais não abordam o problema;

A solução resolve um dos maiores pontos fracos do React, melhorando sua: 

* **produtividade**, ao permitir uma codificação mais enxuta e simples; 
* **manutenibilidade**, ao reduzir sua propensão ao erro dado sua complexidade; 
* **competitividade**, dado que esse aspecto é inferior a seus principais concorrentes;

## CONTRIBUIÇÕES

No React, algo é stateful quando o estado (variável) inicia uma nova renderização do componente para mostrar o novo valor atualizado. Os  `stateful objects` seriam uma terceira geração no tratamento de estados no React após os legados `class components` e os atuais `function hooks`, compatíveis com componentes funcionais, e com ainda maior praticidade que os hooks.

Enquanto objeto que encapsula a complexidade do tratamento em uma classe Proxy, ele resume as várias regras pouco intuitivas dos hooks a uma única: para se manter stateful, basta se manter objeto. Ou seja, ele não suporta destructuring.

Stateful Objects melhoram a manutenibilidade com sua maior simplicidade, oferecendo bom desempenho e trazendo melhoria na recuperação de foco após o render nos elementos de formulário.

**Melhora manutenibilidade**

* **object store**: como objeto, reúne múltiplos estados na forma de campos de objeto, ao invés de criar cada estado individualmente em uma invocacao de hook;
* **stateful props**: reusa as propriedades do componente como estados locais, por tornar automaticamente o objeto de propriedades em **stateful objects**;
* **hookless design**: substitui a maioria dos principais hooks de estado (useState, useContext e useReducer), desempenho (useMemo, useCallback) e fetching (use);

**Aprimora desempenho**

* **server rendering**: suporta server-side rendering de componentes React através do Reactful framework, reduzindo a renderização do client-side ao mínimo;
* **delayed render**: algoritmo de renderização que disponibiliza alto desempenho no fluxo de renderização para o uso de  **stateful objects**;

**Recupera foco**

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

Não há limitações identificadas no Stateful Objects, mas ocorre algumas relacionadas a alguns recursos do framework Reactful. O framework é necessário para suprir server-side render nos Stateful Objects. 

<style>
   table { zoom: 0.9 }
   table th { font-weight:100 }
</style>

| RECURSO | PROBLEMA | CONTORNO |
|-:|-|-|
| **props directive** | não suporta importações | correção agendada para futuras versões |
| **function decorators** | warning de sintaxe no IDE | ignorar adicionando comentário `//@ts-ignore` |
| **@reactful/web** | suporta apenas aplicações web | suporte mobile em futuras versões |
| **modular CSS** | não suporta pseudo-selectors | usar HTML link[href] nesses casos |


## CRONOGRAMA 

Segue o status atual de alguns tópicos relacionado a esse projeto.

| ATIVIDADE                |  STATUS  | ESTIMATIVA | RELACIONADO |
| ------------------------ | :------: | :--------: | ----------- |
| video introdutório       | **100%** |   pronto   | framework   |
| slide de apresentação    | **85%**  |   3 dias   | pesquisa    |
| protótipo funcional      | **95%**  | 2 semanas  | framework   |
| documentação técnica     | **95%**  |  1 semana  | framework   |
| projeto usando framework | **15%**  |  2 meses   | framework   |
| projeto de pesquisa      | **58%**  |  1 semana  | pesquisa    |
| artigo da dissertação    |  **0%**  |  3 meses   | pesquisa    |

## RISCOS

Listado alguns riscos de impedimento ou atraso relacionado a esse tema. As estratégias de mitigação serão aplicadas apenas se houver aprovação do tema proposto.

| RISCO | DESCRIÇÃO | MITIGAÇÃO |
|-:|-|-|
| **montagem do comparativo de desempenho** | ambiente para monitorar desempenho pode ser desafiador por eu não ter muita experiência nesse tipo de teste | estudar mais esse tipo de teste, baixar projetos do github que implementa comparativos |
| **falta de artigos científicos sobre o state handling** | artigos científicos não encontrados sobre tratamento de estado, seja no React, seja no geral | avaliar literatura cinza via documentação como substituto da literatura acadêmica |
| **implementação do framework ainda não está totalmente estável** | framework ainda com cobertura baixa de testes automatizados e ainda sem aplicação concluída em um projeto real | aplicar amplamente o framework em um projeto já em andamento e melhorar a cobertura de testes |

<br><br>
