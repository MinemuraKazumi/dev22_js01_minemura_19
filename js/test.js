
// グーを出した時のコード

$("#r").on("click", function () {
    //alert(111);
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");

    


if (random === 0){
    $("h2").html("gu");
    $("h3").html("あいこ");
    $('#demo3').html('<img src="img/janken.gu.png" " alt="グー">' );
    // あいこ って音が出る。htmlのaudioと連動
    $("#audioaiko").get(0).play();


    console.log("gu")
}else if (random === 1){
    $("h2").html("tyoki");
    $("h3").html("かち");
    $('#demo3').html('<img src="img/janken.choki.png" " alt="チョキ">' );
    $("#audiokati").get(0).play();  
    // じぶん のスコアに加点
    $("#user-score").text(Number($("#user-score").text())  + 1);

    console.log("tyoki")
}else if (random === 2){
    $("h2").html("pa");
    $("h3").html("まけ");
    $('#demo3').html('<img src="img/janken.pa.png" " alt="パー">' );
    $("#audiomake").get(0).play();   
    // あいて のスコアに加点
    $("#computer-score").text(Number($("#computer-score").text())  + 1);

    console.log("pa")
}
    
});

// チョキを出した時のコード

$("#s").on("click", function () {
    //alert(111);
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");

if (random === 0){
    $("h2").html("gu");
    $("h3").html("まけ");
    $('#demo3').html('<img src="img/janken.gu.png" " alt="グー">' );
    $("#audiomake").get(0).play();   
    // あいて のスコアに加点
    $("#computer-score").text(Number($("#computer-score").text())  + 1);


    console.log("gu")
}else if (random === 1){
    $("h2").html("tyoki");
    $("h3").html("あいこ");
    $('#demo3').html('<img src="img/janken.choki.png" " alt="チョキ">' );
    $("#audioaiko").get(0).play();


    console.log("tyoki")
}else if (random === 2){
    $("h2").html("pa");
    $("h3").html("かち");
    $('#demo3').html('<img src="img/janken.pa.png" " alt="パー">' );
    $("#audiokati").get(0).play();   
    // じぶん のスコアに加点
    $("#user-score").text(Number($("#user-score").text())  + 1);

    console.log("pa")
}
    
});

// パーを出した時のコード

$("#p").on("click", function () {
    //alert(111);
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");

if (random === 0){
    $("h2").html("gu");
    $("h3").html("かち");
    $('#demo3').html('<img src="img/janken.gu.png" " alt="グー">' );
    $("#audiokati").get(0).play();   
    // じぶん のスコアに加点
    $("#user-score").text(Number($("#user-score").text())  + 1);

    console.log("gu")
}else if (random === 1){
    $("h2").html("tyoki");
    $("h3").html("まけ");
    $('#demo3').html('<img src="img/janken.choki.png" " alt="チョキ">' );
    $("#audiomake").get(0).play();   
    // あいて のスコアに加点
    $("#computer-score").text(Number($("#computer-score").text())  + 1);


    console.log("tyoki")
}else if (random === 2){
    $("h2").html("pa");
    $("h3").html("あいこ");
    $('#demo3').html('<img src="img/janken.pa.png" " alt="パー">' );
    $("#audioaiko").get(0).play();
    



    console.log("pa")
}
    
});