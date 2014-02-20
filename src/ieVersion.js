(function(){
  "use strict"

  // Thanks:
  // -- https://github.com/knockout/knockout/blob/master/src/utils.js

  var ieVersion = document && (function(){
    var version = 3, div = document.createElement('div'), iElems = div.getElementsByTagName('i'), root = document.documentElement;

    while(
      div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->',
      iElems[0]
    ){};

    if(version > 4){
      root.className = root.className + ' ie' + version;
      return version;
    }
  }());

  if(typeof define === 'function' && (define.amd || define.cmd)){
    define(function(require, exports, module){
      module.exports = ieVersion;
    });
  }else if(typeof window === 'object' && typeof window.document === 'object'){
    this.ieVersion = ieVersion;
  }
}).call(this);