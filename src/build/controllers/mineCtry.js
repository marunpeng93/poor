define(["app"],function(n){return n.controller("mineCtry",["$scope",function(n){var o=0;n.bol=!1,n.showClick=function(){n.bol=!0,o++},n.hideClick=function(){n.bol=!1},n.classfn=function(){return 0==o?(console.log(o),"none"):n.bol?"mine-show":"mine-hide"}}])});