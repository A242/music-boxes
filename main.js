var cNote = document.getElementById("c_note");

$("#c").click(function(){
  cNote.currentTime = 0;
  cNote.play();
});

var dNote = document.getElementById("d_note");

$("#d").click(function(){
  dNote.currentTime = 0;
  dNote.play();
});

var eNote = document.getElementById("e_note");

$("#e").click(function(){
  eNote.currentTime = 0;
  eNote.play();
});

var fNote = document.getElementById("f_note");

$("#f").click(function(){
  fNote.currentTime = 0;
  fNote.play();
});

var gNote = document.getElementById("g_note");

$("#g").click(function(){
  gNote.currentTime = 0;
  gNote.play();
});

var aNote = document.getElementById("a_note");

$("#a").click(function(){
  aNote.currentTime = 0;
  aNote.play();
});

var bNote = document.getElementById("b_note");

$("#b").click(function(){
  bNote.currentTime = 0;
  bNote.play();
});

$(document).keydown(function(e){
  if (e.key == "q") {
    $("#c").trigger("click").addClass("cactive");
  }
  if (e.key == "w"){
    $("#d").trigger("click").addClass("dactive");
  }
  if (e.key == "e"){
    $("#e").trigger("click").addClass("eactive");
  if (e.key == "r"){
    $("#f").trigger("click").addClass("factive");
  if (e.key == "t"){
    $("#g").trigger("click").addClass("gactive");
  }
  if (e.key == "y"){
    $("#a").trigger("click").addClass("aactive");
  }
  if (e.key == "u"){
    $("#b").trigger("click").addClass("bactive");
  }
});

$(document).keyup(function(e){
  $(".box").removeClass("cactive");
});

$(document).keyup(function(e){
  $(".box").removeClass("dactive");
});

$(document).keyup(function(e){
  $(".box").removeClass("eactive");
});

$(document).keyup(function(e){
  $(".box").removeClass("factive");
});

$(document).keyup(function(e){
  $(".box").removeClass("gactive");
});

$(document).keyup(function(e){
  $(".box").removeClass("aactive");
});

$(document).keyup(function(e){
  $(".box").removeClass("bactive");
});
