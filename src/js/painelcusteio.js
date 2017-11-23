var prefix = '/';
var config = {
    host: "paineldecusteio.planejamento.gov.br",
    prefix: prefix,
    port: 88,
    isSecure: true
};

require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
});

require(["js/qlik"], function(qlik) {
    qlik.setOnError(function(error) {
        console.log(error.message);
    });

    var app = qlik.openApp('b27f5224-45c0-4ee9-98f5-616fef28f755', config);

    // barra selecao
    app.getObject('CurrentSelections', 'CurrentSelections');

    
    //
    //get the first page of objects 
    app.visualization.get('EFXAAkr').then(function(vis) { vis.show('obj1'); });
    app.visualization.get('McjaJj').then(function(vis) { vis.show('obj2') });
    app.visualization.get('BWpqhjD').then(function(vis) { vis.show('obj3') });
    app.visualization.get('ZTDL').then(function(vis) { vis.show('obj4') });
    app.visualization.get('bZGjQj').then(function(vis) { vis.show('obj5') });
    app.visualization.get('gEmkJc').then(function(vis) { vis.show('obj6') });


    // menu filtros
    app.visualization.get('cnPVVP').then(function(vis) { vis.show('periodo-ano'); });
    app.visualization.get('gUZScX').then(function(vis) { vis.show('periodo-ano-mes') });
    app.visualization.get('evtEsp').then(function(vis) { vis.show('orgao-nome') });
    app.visualization.get('VDpFpjQ').then(function(vis) { vis.show('uo'); });
    app.visualization.get('RUBrQmG').then(function(vis) { vis.show('item-despesa'); });
    app.visualization.get('de3ddead-865c-446d-95dd-70e80bda2200').then(function(vis) { vis.show('sub-item-despesa'); });
    app.visualization.get('6a5d2a61-ce90-4f1e-a0ef-292b5ea25764').then(function(vis) { vis.show('area-atuacao'); });
    app.visualization.get('3546daed-0ef8-4da1-a80e-c937df588d78').then(function(vis) { vis.show('classificacao'); });
    //fim menu filtros
    app.visualization.get('LfQRySG').then(function(vis) {
        vis.show('gastoTotalItem');
        vis.show('gastoTotalItem2');
        vis.show('gastoTotalItem3');
        vis.show('gastoTotalItem4');
        vis.show('gastoTotalItem5');
    });

    //custom scripts
    var $ = jQuery.noConflict()
    $(document).ready(function() {
        var idsQlik = [];

        var ua = navigator.userAgent.toLowerCase();
        var edge = ua.indexOf('edge');
        var ie = ua.indexOf('trident');

        if (ie > 0 || edge > 0) {
            $('.btnTable').hide();
            $('#browserChange').show();
        }

        //fixar menu lateral e barra de titulo
        $(window).scroll(function(event) {
            console.log('to aqui')
            var scroll = $(window).scrollTop();
            if (scroll >= 202) {
                $('#topContent, .filter-btn, .holder-filtros').addClass('fixed');
            } else {
                $('#topContent, .filter-btn, .holder-filtros').removeClass('fixed');
            }
        });

        //criar tabela a partir do grafico ou tabela do qliksense
        function getTable(vis) {
            var table = vis.table;
            var model = vis.model;
            var htmlTable = '<html xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:x=\"urn:schemas-microsoft-com:office:excel\" xmlns=\"http://www.w3.org/TR/REC-html40\"><head></head><body><table id="tableToExport"><thead><tr>';

            switch (table.qHyperCube.qMode) {
                case 'S':
                    $.each(table.headers, function(index, header) {
                        htmlTable += '<th style="border: 1px solid #000">' + header.qFallbackTitle + '</th>';
                    });
                    htmlTable += '</tr></thead><tbody>';
                    if (table.qHyperCube.qDataPages == '') {
                        model.getHyperCubeData('/qHyperCubeDef', [{
                            qTop: 0,
                            qLeft: 0,
                            qWidth: 10,
                            qHeight: 1000
                        }]).then(function(data) {
                            $.each(data.qDataPages, function(index, page) {
                                $.each(page.qMatrix, function(hIndex, rows) {
                                    htmlTable += '<tr>';
                                    $.each(rows, function(index, row) {
                                        htmlTable += '<td style="border: 1px solid #000">' + row.qText + '</td>';
                                    });
                                    htmlTable += '</tr>';
                                });
                            });
                            htmlTable += '</tbody></table></body></html>';
                            tableToExcel(htmlTable, model.layout.title);
                        })
                    } else {
                        $.each(table.qHyperCube.qDataPages, function(index, page) {
                            $.each(page.qMatrix, function(hIndex, rows) {
                                htmlTable += '<tr>';
                                $.each(rows, function(index, row) {
                                    htmlTable += '<td style="border: 1px solid #000">' + row.qText + '</td>';
                                });
                                htmlTable += '</tr>';
                            });
                        });
                        htmlTable += '</tbody></table></body></html>';
                        tableToExcel(htmlTable, model.layout.title);
                    }
                    break;
                case 'K':
                    htmlObject = [];
                    $.each(table.headers, function(index, header) {
                        htmlTable += '<th style="border: 1px solid #000">' + header.qFallbackTitle + '</th>';
                    });
                    htmlTable += '</tr></thead><tbody>';
                    subNodes = table.qHyperCube.qStackedDataPages[0].qData[0].qSubNodes;
                    $.each(subNodes, function(index, node) {
                        $.each(node.qSubNodes, function(index, n) {
                            htmlObject.push('<td style="border: 1px solid #000">' + node.qText + '</td><td style="border: 1px solid #000">' + n.qText + '</td>');
                        });
                    });
                    model.getHyperCubeData('/qHyperCubeDef', [{
                        qTop: 0,
                        qLeft: 0,
                        qWidth: 10,
                        qHeight: 1000
                    }]).then(function(data) {
                        $.each(data.qDataPages, function(index, page) {
                            $.each(page.qMatrix, function(hIndex, rows) {
                                htmlTable += '<tr>';
                                $.each(rows, function(index, row) {
                                    htmlTable += htmlObject[hIndex] + '<td style="border: 1px solid #000">' + row.qText + '</td>';
                                });
                                htmlTable += '</tr>';
                            });
                        });
                        htmlTable += '</tbody></table></body></html>';
                        tableToExcel(htmlTable, model.layout.title);
                    })
                    break;
                case 'P':
                    pivotData = table.qHyperCube.qPivotDataPages[0];
                    $.each(table.qHyperCube.qDimensionInfo, function(index, header) {
                        if (index == 3)
                            return false;
                        else
                            htmlTable += '<th style="border: 1px solid #000">' + header.qFallbackTitle + '</th>';
                    });
                    $.each(pivotData.qTop, function(index, anoMes) {
                        htmlTable += '<th style="border: 1px solid #000">' + anoMes.qText + '</th>';
                    });
                    htmlTable += '</tr></thead><tbody>';

                    leftHTML = [];
                    $.each(pivotData.qLeft, function(index, leftElements) {
                        if (leftElements.qSubNodes != '' && leftElements.qSubNodes[0].qType != 'E') {
                            $.each(leftElements.qSubNodes, function(index, node) {
                                if (node.qSubNodes != '' && node.qSubNodes[0].qType != 'E') {
                                    $.each(node.qSubNodes, function(index, subnode) {
                                        leftHTML.push('<td style="border: 1px solid #000">' + leftElements.qText + '</td><td style="border: 1px solid #000">' + node.qText + '</td><td style="border: 1px solid #000">' + subnode.qText + '</td>')
                                    })
                                } else {
                                    leftHTML.push('<td style="border: 1px solid #000">' + leftElements.qText + '</td><td style="border: 1px solid #000">' + node.qText + '</td><td style="border: 1px solid #000"></td>')
                                }
                            });
                        } else {
                            leftHTML.push('<td style="border: 1px solid #000">' + leftElements.qText + '</td><td style="border: 1px solid #000"></td><td style="border: 1px solid #000"></td>')
                        }
                    });
                    $.each(pivotData.qData, function(fIndex, datas) {
                        $.each(datas, function(index, data) {
                            leftHTML[fIndex] += '<td style="border: 1px solid #000">' + data.qText + '</td>';
                        });
                    });
                    $.each(leftHTML, function(index, element) {
                        htmlTable += '<tr>' + element + '</tr>';
                    });
                    htmlTable += '</tbody></table></body></html>';
                    tableToExcel(htmlTable, model.layout.title);
                    break;
            }
        }

        //checar se existe filtro selecionado
        function checkFiltros() {
            if ($('.no-selection').length) {
                toTop();
                $('.alert').show();
                return false;
            } else {
                $('.alert').hide();
                return true;
            }
        }

        //leva o usuario ao topo da analise
        function toTop() {
            $("html, body").animate({ scrollTop: 202 }, 300);
            return false;
        }

        //abre o menu lateral quando fechado
        function abreMenu() {
            $('#mainContainer').removeClass('filterHide');
            $('.filter-btn').removeClass('active');
            $('.fa-angle-double-right').addClass('fa-angle-double-left');
            $('.fa-angle-double-left').removeClass('fa-angle-double-right');
        }

        //fecha o menu lateral quando aberto
        function closeMenu() {
            $('#mainContainer').addClass('filterHide');
            $('.filter-btn').addClass('active');
            $('.fa-angle-double-left').addClass('fa-angle-double-right');
            $('.fa-angle-double-right').removeClass('fa-angle-double-left');
        }

        //buscar os objetos no qliksense toda vez que o usuario avança na analise
        function getNewObject(idsQlik, idQlikLabel) {
            $.each(idsQlik, function(index, idObject) {
                index++;
                nameObj = 'obj' + index;
                if (idQlikLabel) {

                    $('#' + nameObj).prev().attr('html-get', '{ "objects" : [{ "divID" : "objModal", "qlikID" : "' + idObject + '" }, { "divID" : "objModalLt", "qlikID" : "' + idQlikLabel + '" }] }');
                    $('#' + nameObj).prev().prev().attr('html-get', '{ "object" : [{ "divID" : "objTable", "qlikID" : "' + idObject + '" }] }');
                } else {
                    $('#' + nameObj).prev().attr('html-get', '{ "objects" : [{ "divID" : "objModal", "qlikID" : "' + idObject + '" }] }');
                    $('#' + nameObj).prev().prev().attr('html-get', '{ "object" : [{ "divID" : "objTable", "qlikID" : "' + idObject + '" }] }');
                }

                app.getObject(nameObj, idObject);
            })
        }

        //mudar o titulo, definir quais sao os proximos objetos na analise
        function changeTitle(nextBox, thisBox) {
            tituloAba = '';
            idQlikLabel = '';
            switch (nextBox) {
                case 'box1':
                    $('.boxObject').each(function(index, el) {
                        objID = $(this).attr('id').substring(6, 7);
                        $(this).children(0).attr('graf-id', 'p1_' + objID);
                    });
                    $('.btnVoltar').attr('next-box', 'box1').attr('this-box', 'box1');
                    $('.btnAvancar').attr('next-box', 'box2').attr('this-box', 'box1');
                    idQlikLabel = 'LfQRySG';
                    idsQlik = ['EFXAAkr', 'McjaJj', 'BWpqhjD', 'ZTDL', 'bZGjQj', 'gEmkJc'];
                    tituloAba = 'Visão Geral';
                    break;
                case 'box2':
                    $('.boxObject').each(function(index, el) {
                        objID = $(this).attr('id').substring(6, 7);
                        $(this).children(0).attr('graf-id', 'p2_' + objID);
                    });
                    $('.btnVoltar').attr('next-box', 'box1').attr('this-box', 'box2');
                    $('.btnAvancar').attr('next-box', 'box3').attr('this-box', 'box2');
                    idsQlik = ['XrJeB', 'ZTDL', 'HtRcxn', 'TPFGmm'];
                    tituloAba = 'Análise de Custeio por Órgão';
                    break;
                case 'box3':
                    $('.boxObject').each(function(index, el) {
                        objID = $(this).attr('id').substring(6, 7);
                        $(this).children(0).attr('graf-id', 'p3_' + objID);
                    });
                    $('.btnVoltar').attr('next-box', 'box2').attr('this-box', 'box3');
                    $('.btnAvancar').attr('next-box', 'box4').attr('this-box', 'box3');
                    idsQlik = ['3db78cf5-1309-47fd-a370-c729be77ee25', 'ptcJuP', 'f8e60a8e-623b-4ee9-a30f-d588ebb463ee', '88b32ef2-492a-4621-b8df-c5e6351f2546'];
                    tituloAba = 'Análise de Custeio por Unidade Orçamentária';
                    break;
                case 'box4':
                    $('.boxObject').each(function(index, el) {
                        objID = $(this).attr('id').substring(6, 7);
                        $(this).children(0).attr('graf-id', 'p4_' + objID);
                    });
                    $('.btnVoltar').attr('next-box', 'box3').attr('this-box', 'box4');
                    $('.btnAvancar').attr('next-box', 'box4').attr('this-box', 'box4');
                    idsQlik = ['YJTz', 'LxWyDxE', 'ZYrqpJ'];
                    tituloAba = 'Série Histórica Mensal';
                    break;
            }
            getNewObject(idsQlik, idQlikLabel);
            $('#tituloAba').html(tituloAba);
        }

        //chamada do clique para abrir ou fechar o menu lateral
        $('.filter-btn').click(function() {
            if ($('.filterHide').length)
                abreMenu();
            else
                closeMenu();
        });

        //avancar ou voltar na analise do painel
        $('.btnClick').click(function() {
            nextBox = $(this).attr('next-box');
            thisBox = $(this).attr('this-box');
            if (thisBox > nextBox)
                var check = true;
            else
                var check = checkFiltros();
            if (check == true) {
                $('#' + thisBox).attr('id', nextBox);
                changeTitle(nextBox, thisBox);
                toTop();
            }
        });

        //expandir o objeto
        $('.btnExpand').click(function() {
            $('.myModal').addClass('modalShow');
            $('.backdrop').addClass('show');
            objID = $(this).attr('html-get');            
            $('body').addClass('modal-open');
            var arrayObj = $.parseJSON(objID);
            if (Object.keys(arrayObj.objects).length == 1) {
                $('#objModalLt').hide();
                windowHeight = $(window).height();
                expandHeight = (85 * windowHeight) / 100;
                $('.qvgdobject').css("height", expandHeight + "px");
            } else {
                $('#objModalLt').show();
                windowHeight = $(window).height();
                expandHeight = (75 * windowHeight) / 100;
                $('.qvgdobject').css("height", expandHeight + "px");
            }
            $.each(arrayObj.objects, function(index, object) {
                app.getObject(object.divID, object.qlikID);
            })
        });

        $('.btnDexpand').click(function(){
            $('.myModal').removeClass('modalShow');
            $('.myModal').removeClass('modalInfo');
            $('.backdrop').removeClass('show');
            $('body').removeClass('modal-open');
        });

        

        //transformar html gerado dos graficos em excel
        function tableToExcel(tab_text, fileTitle) {

            fileTitle = fileTitle.toLowerCase().replace(/ /g, '_');
            if (!fileTitle)
                fileTitle = 'painel_de_custeio';
            var a = document.createElement('a');
            var data_type = 'data:application/vnd.ms-excel;base64,';
            var table_html = base64_encode(tab_text);
            $('#tableExport').html(tab_text);
            a.href = data_type + table_html;
            a.download = fileTitle + '.xls';

            var ua = navigator.userAgent.toLowerCase();

            var mozilla = ua.indexOf('firefox');
            var ie = ua.indexOf('edge');

            if (ie > 0) {

                $('.btnTable').hide();
            }
            if (mozilla > 1)
                $('#tableToExport').tableExport({ type: 'excel', escape: 'false' });
            else
                a.click();
        };

        //get the base64 code of the html table
        function base64_encode(data) {
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                enc = "",
                tmp_arr = [];

            if (!data) {
                return data;
            }

            do { // pack three octets into four hexets
                o1 = data.charCodeAt(i++);
                o2 = data.charCodeAt(i++);
                o3 = data.charCodeAt(i++);

                bits = o1 << 16 | o2 << 8 | o3;

                h1 = bits >> 18 & 0x3f;
                h2 = bits >> 12 & 0x3f;
                h3 = bits >> 6 & 0x3f;
                h4 = bits & 0x3f;

                // use hexets to index into b64, and append result to encoded string
                tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            } while (i < data.length);

            enc = tmp_arr.join('');

            var r = data.length % 3;

            return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

        }

        //exportar os dados do grafico
        $('.btnTable').click(function() {
            objTabID = $(this).attr('html-get');
            var arrayTabObj = $.parseJSON(objTabID);

            $.each(arrayTabObj.object, function(index, object) {

                app.visualization.get(object.qlikID).then(function(vis) {
                    getTable(vis);
                });
            })
        });

        //mudar o grafico nas paginas 2 e 3
        $('.nav-tabs li a').click(function() {
            divToShow = $(this).attr('aria-controls');
            divToHide = $('.boxObject.' + divToShow).attr('div-hide');
            $('.boxObject.' + divToShow).removeClass('changeGraph');
            $('.boxObject.' + divToHide).addClass('changeGraph');
        })

        //quando o usuario clicar no botao limpar, voltar a analise à primeira pagina
        $('body').click(function(e) {
            thisBox = $('.content-analise').attr('id');
            if (e.target.id == 'clearselections' && thisBox != 'box1') {
                nextBox = 'box1';
                if (thisBox > nextBox)
                    var check = true;
                else
                    var check = checkFiltros();
                if (check == true) {
                    $('#' + thisBox).attr('id', nextBox);
                    changeTitle(nextBox, thisBox);
                    toTop();
                }
            }
        })

    })
});