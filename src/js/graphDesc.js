export var descs = {
        p1_1: { 
        	title: 'Gráfico de distribuição do montante das despesas por Item de despesa', 
        	text: 'O gráfico exibe o percentual de gasto por item de despesa. O item de despesa tem como objetivo agrupar despesas de mesma natureza para facilitar a análise de forma mais agregada. Por exemplo, o item Diárias agrupa despesas como: diárias no país, diárias a colaboradores eventuais no país, diárias no exterior, diárias de pessoal civil, diárias de pessoal militar, diárias a conselheiros, diárias a colaboradores eventuais (não servidores) no exterior, diárias não compensáveis e outras diárias.'
        },
        p1_2: {
            title: 'Gráfico de distribuição do montante das despesas por Subelemento de Despesa',
            text: 'O gráfico exibe o percentual de gasto por subelemento de despesa. O subelemento de despesa é o menor nível de classificação da despesa na contabilidade pública. Por exemplo: diárias de pessoal civil.'
        },
        p1_3: { //este grafico no manual é o 1.5
            title: 'Gráfico de distribuição do montante das despesas por Órgão Superior',
            text: 'O gráfico exibe o percentual de gasto por órgãos superiores, permitindo classificá-los de acordo com a proporção de suas despesas administrativas, possibilitando identificar rapidamente onde elas se concentram. Vale ressaltar que a diferença de volume ou proporção observadas nas despesas de determinado órgão pode ser justificada pelo tamanho ou natureza da atividade exercida pelos órgãos. Por exemplo, os ministérios da Educação, Saúde e Defesa apresentam maiores volumes de despesas devido a sua grande estrutura descentralizada, com unidades administrativas espalhadas por todo o território nacional.'
        },
        p1_4: { //este grafico no manual é o 1.6
            title: 'Gráfico Comparativo do montante das despesas por Órgão Superior',
            text: 'O gráfico exibe o volume total gasto em reais por órgão superior e uma linha de referência indicando a média de gasto dos órgãos apresentados. Esse gráfico permite comparar os gastos de determinado órgão entre si e em relação à média geral de gastos.'
        },
        p1_5: { // esse grafico no manual é o grafico 1.3, porém na implementação ele eh o grafico p1_5 por causa do numero do objeto dele no html PRESTAR ATENÇÃO AO ALTERAR O CONTEUDO
            title: 'Gráfico de distribuição do montante das despesas por Área de atuação do Órgão Superior',
            text: 'O gráfico exibe o percentual de gasto por área de atuação dos órgãos superiores. Por exemplo, os órgãos da área social são os ministérios da Saúde, Educação, Trabalho, Esporte, Cultura, entre outros.'
        },
        p1_6: { // esse grafico no manual é o grafico 1.4, porém na implementação ele eh o grafico p1_6 por causa do numero do objeto dele no html PRESTAR ATENÇÃO AO ALTERAR O CONTEUDO
            title: 'Gráfico de distribuição do montante das despesas por classificação da Unidade Orçamentária',
            text: 'O gráfico exibe o percentual de gasto por classificação da Unidade Orçamentária. As unidades orçamentárias representam subdivisões do órgão superior para efeito de gestão orçamentária. Geralmente cada unidade orçamentária representa um órgão, ente ou entidade subordinada ao órgão superior.  Por exemplo, o orçamento do Ministério do Planejamento é subdivido nas seguintes unidades orçamentárias: O próprio órgão central, o Ministério do Planejamento, Desenvolvimento e Gestão (Administração Direta), a Fundação Instituto Brasileiro de Geografia e Estatística (IBGE), o Instituto de Pesquisa Econômica Aplicada (IPEA), a Fundação Escola Nacional De Administração Pública (ENAP) e o Fundo de Garantia para Promoção da Competitividade (FGPC).'
        },
        p2_1: {
            title: 'Gráfico Comparativo da proporção dos gastos de cada Órgão Superior',
            text: 'O gráfico exibe um comparativo da proporção dos gastos de cada órgão superior com determinado item ou conjunto de itens de despesas.  A proporção é calculada em relação ao total da despesa administrativa de cada órgão. Ou seja, essa proporção representa quanto o gasto desses itens consome do total de gastos administrativos de cada órgão. De modo geral, órgãos que exercem atividades de natureza similares, devem apresentar proporções semelhantes para um mesmo item ou conjunto de despesas administrativas. O gráfico também exibe uma linha de referência indicando a média de gasto dos órgãos apresentados, permitindo comparar a proporção dos gastos de determinado órgão entre si e em relação à média geral de gastos.'
        },
        p2_2: {
            title: 'Gráfico Comparativo do volume dos gastos de cada Órgão Superior',
            text: 'O gráfico exibe um comparativo do volume dos gastos de cada órgão superior com determinado item ou conjunto de itens de despesa, como também uma linha de referência indicando a média de gasto dos órgãos apresentados, permitindo comparar o volume dos gastos de determinado órgão entre si e em relação à média geral de gastos. Este gráfico possibilita duas formas de ordenação dos órgãos: pelo total ou pela proporção do gasto no item ou conjunto de itens.'
        },
        p2_4: { // esse grafico no manual é o grafico 2.3, porém na implementação ele eh o grafico p2_4 por causa do numero do objeto dele no html PRESTAR ATENÇÃO AO ALTERAR O CONTEUDO
            title: 'Tabela comparativa do volume e proporção dos gastos de cada Órgão Superior',
            text: 'A tabela apresenta todas as informações contidas nos gráficos anteriores com o objetivo de permitir a fácil exportação dos resultados pelo usuário.'
        },
        p3_1: {
            title: 'Gráfico Comparativo da proporção dos gastos de cada Unidade Orçamentária',
            text: 'O gráfico exibe um comparativo da proporção dos gastos de cada unidade orçamentária com determinado item ou conjunto de itens de despesas.  Essa proporção é calculada em relação ao total da despesa administrativa de cada unidade orçamentária. Ou seja, essa proporção representa quanto o gasto desses itens consome do total de gastos administrativos de cada unidade orçamentária. De modo geral, unidades orçamentárias que exercem atividades de natureza similares, devem apresentar proporções semelhantes para um mesmo item ou conjunto de despesas administrativas. O gráfico também exibe uma linha de referência indicando a média de gasto das unidades orçamentárias apresentadas, permitindo comparar a proporção dos gastos de determinado órgão entre si e em relação à média geral de gastos.'
        },
        p3_2: {
            title: 'Gráfico Comparativo do volume dos gastos de cada Unidade Orçamentária',
            text: 'O gráfico exibe um comparativo do volume dos gastos de cada unidade orçamentária com determinado item ou conjunto de itens de despesa, como também uma linha de referência indicando a média de gasto das unidades orçamentárias apresentados, permitindo comparar o volume dos gastos de determinada unidade entre si e em relação à média geral de gastos. Este gráfico possibilita duas formas de ordenação das unidades orçamentárias: pelo total ou pela proporção do gasto no item ou conjunto de itens.'
        },
        p3_4: { // esse grafico no manual é o grafico 3.3, porém na implementação ele eh o grafico p3_4 por causa do numero do objeto dele no html PRESTAR ATENÇÃO AO ALTERAR O CONTEUDO
            title: 'Tabela Comparativa do volume e proporção dos gastos de cada Unidade Orçamentária',
            text: 'A tabela apresenta todas as informações contidas nos gráficos anteriores com o objetivo de permitir a fácil exportação dos resultados pelo usuário.'
        },
        p4_1: { 
            title: 'Gráfico de volume mensal de gastos',
            text: 'O gráfico exibe o comportamento mensal do volume dos gastos para o item ou conjunto de itens de despesas pré-selecionados.'
        },
        p4_2: {
            title: 'Tabela de volume mensal de gastos por Item de Despesa, Órgão Superior e Unidade Orçamentária.',
            text: 'O gráfico apresenta o comportamento mensal do volume dos gastos detalhados por item de despesa, órgão superior e unidade orçamentária.'
        },
        p4_3: { // esse grafico no manual é o grafico 4.3, porém na implementação ele eh o grafico p4_4 por causa do numero do objeto dele no html PRESTAR ATENÇÃO AO ALTERAR O CONTEUDO
            title: 'Tabela de volume mensal de gastos por Item e Subelemento de despesa',
            text: 'O gráfico apresenta o comportamento mensal do volume dos gastos detalhados por item de despesa e subelemento de despesa.'
        },
    }