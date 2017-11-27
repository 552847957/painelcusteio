// import '../css/painelcusteio.css';
import '../css/public.less';
// import '../css/bootstrap.css';
// import '../css/style.css';
// import '../css/font-awesome.css';
// import '../css/swiper.css';


import './barra.js';
import 'bootstrap';
import './swiper.jquery.min.js';
import './jquery.cookie.js';

import { jq } from './default';
import { descs } from './graphDesc';

var $ = jQuery.noConflict()
$(document).ready(function() {
    $('.btnInfo').click(function() {
        $('#objModalLt').hide();
        var windowHeight = $(window).height();
        var expandHeight = (85 * windowHeight) / 100;
        $('.qvgdobject').css("height", expandHeight + "px");
        $('.myModal').addClass('modalShow modalInfo');
        $('.backdrop').addClass('show');
        $('#objModalLt').hide();
        var passoID = $(this).attr('graf-id');
        var passo = getGrafInfo(passoID);
        $('#objModal').html(passo);
    });

    function getGrafInfo(id) {
        var htmlPasso = '<div class="info-box"><span class="titulo">' +descs[id].title+ '</span><br/><p>' +descs[id].text+ '</p></div>';
       return htmlPasso;     
    }

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll >= 413) {
            $('.analise').addClass('fixed');
        } else {
            $('.analise').removeClass('fixed');
        }
    });
    
})