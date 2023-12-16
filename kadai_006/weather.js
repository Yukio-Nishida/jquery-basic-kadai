$(function() {
    //id属性：targetの要素がクリックされたら
    $('#target').on('click', function(){
        
        //id属性：targetの要素にclass属性：heを追加
        $('#target').addClass('heading');
    });
});