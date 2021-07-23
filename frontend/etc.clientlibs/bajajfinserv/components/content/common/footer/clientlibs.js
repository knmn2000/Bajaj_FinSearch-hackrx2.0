document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('.wb-f-acc-l0-fn').addEventListener('click', function () {
        $(this).toggleClass('active').next().slideToggle();
    });
    if (window.matchMedia("(min-width: 992px)").matches) {
        var mediaLength = 6;
        document.querySelectorAll('.wb-f-acc-l1-wrapper').forEach(function (eachwrapper) {
            var x = $(eachwrapper).find('.wb-acc-l1-content');
            var y = $(eachwrapper).find('.wb-acc-l1-head');
            var loop = Math.ceil(x.length / mediaLength);
            for (var i = 0; i < loop; i++) {
                x.slice(i * mediaLength, (i + 1) * mediaLength).css('order', "".concat(i + 1));
                y.slice(i * mediaLength, (i + 1) * mediaLength).css('order', "".concat(i));
            }
        });
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        var mediaLength = 4;
        document.querySelectorAll('.wb-f-acc-l1-wrapper').forEach(function (eachwrapper) {
            var x = $(eachwrapper).find('.wb-acc-l1-content');
            var y = $(eachwrapper).find('.wb-acc-l1-head');
            var loop = Math.ceil(x.length / mediaLength);
            for (var i = 0; i < loop; i++) {
                x.slice(i * mediaLength, (i + 1) * mediaLength).css('order', "".concat(i + 1));
                y.slice(i * mediaLength, (i + 1) * mediaLength).css('order', "".concat(i));
            }
        });
    }
    document.querySelectorAll('.wf-content-head-plus').forEach(function (eachhead) {
        eachhead.addEventListener('click', function () {
            $(eachhead).parent().toggleClass('selected');
            $(eachhead).parents('.wb-f-acc-10-content-m').siblings().find('.wb-f-content-head').removeClass('selected');
            $(eachhead).parent().next().slideToggle();
            $(eachhead).parents('.wb-f-acc-10-content-m').siblings().find('.wb-f-acc-l1-wrapper').slideUp();
        })
    })
    document.querySelectorAll('.wb-acc-l1-head').forEach(function (eachhead) {
        eachhead.addEventListener('click', function () {
            $(eachhead).toggleClass('selected').siblings().removeClass('selected');
            $(eachhead).next().slideToggle().siblings('.wb-acc-l1-content').hide();
        })
    })
})