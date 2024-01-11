$(function() {
    // id属性：change-colorのボタンを押したら
    $("#change-color").click(function() {
        
        // 文字色を黄色に変える
        $("#target").css("color","#0000ff");
    });
    
    // id属性：change-textのボタンを押したら
    $("#change-text").click(function(){
        
        // テキストを「Good morning!」に変える
        $("#target").text("Good morning!");
    });

    // id属性：fade-outのボタンを押したら
    $('#fade-out').on('click', function() {
        
        // 文字色をフェードアウトさせる
        $('#target').fadeOut();
    });

    // id属性：fade-inのボタンを押したら
    $('#fade-in').on('click', function() {
        
        // 文字色をフェードアウトさせる
        $('#target').fadeIn();
    });

});