// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs

$(document).ready(function(){
  last();

  //変数定義
  var cardlist = '.col1, .col2, .col3, .col4';
  var r_allowlist = '.right1, .right2, .right3, .right4, .right5, .right6, .right7, .right8, .right9, .right10, .right11, .right12, .right13'
  var u_allowlist = '.unders, .underc, .underh, .underd'

  //単体クリック時
  $("img"+cardlist).on("click",function(){
    $(this).toggleClass("selected");
    last();
  });

  //縦列矢印クリック時
  $("img"+u_allowlist).on("click",function(){
    if($(this).attr("class") == "unders") {
      var change = '.col1';
    } else if($(this).attr("class") == "underc") {
      var change = '.col2';
    } else if($(this).attr("class") == "underh") {
      var change = '.col3';
    } else if($(this).attr("class") == "underd") {
      var change = '.col4';
    }
    var count = $(change+".selected").length;
    if(count == 13) {
      $(change).removeClass("selected");
    }else{
      $(change).addClass("selected");
    }
    last();
  });

  //横列矢印クリック時
  $("img"+r_allowlist).on("click",function(){
    var change_r = $(this).attr("class").slice(5);
    var count = $(".raw"+change_r+".selected").length;
    if(count == 4){
      $(".raw"+change_r).removeClass("selected");
    }else {
      $(".raw"+change_r).addClass("selected");
    }
    last();
  });

  //リセットボタンクリック時
  $("p.reset").on("click",function(){
    $(".col1").removeClass("selected");
    $(".col2").removeClass("selected");
    $(".col3").removeClass("selected");
    $(".col4").removeClass("selected");
    last();
  });

});

function　last(){
  var notselected_all = 52-$(".col1.selected").length+$(".col2.selected").length+$(".col3.selected").length+$(".col4.selected").length;
  for(var i=1;i<14;i++){
    eval("var right" + i + "=" + "4-"+ "$('.raw" + i + ".selected').length" + ";");
    target = document.getElementById("r"+i);
    eval("var per =" + "100*right"+ i + "/" + notselected_all);
    target.innerHTML = per.toFixed(2)+"%";
  }
  target = document.getElementById("left");
  target.innerHTML = notselected_all;
}
