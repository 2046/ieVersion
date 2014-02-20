define(function(require, exports, module){
  var v, expect, ieVersion;

  expect = require('expect');
  ieVersion = require('ieVersion');
  v = (function() { if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) { return parseFloat( RegExp.$1 ); } else { return false; } })();

  describe('ieVersion', function(){
    it('测试JS变量', function(){
      if(!v){
        expect(ieVersion).to.equal(undefined);
      }else{
        expect(ieVersion).to.equal(v === 10 ? undefined : v);
      }
    });

    it('测试根元素有没有相应的Class', function(){
      var classNames = document.documentElement.className.split(' ');

      if(!v){
        expect(contain(classNames, 'ie' + ieVersion)).to.equal(false);
      }else{
        expect(contain(classNames, 'ie' + ieVersion)).to.equal(v === 10 ? false : true);
      }
    });

    function contain(arr, value){
      for(var i in arr){
        if(arr[i] === value){
          return true;
        }
      }
      return false;
    }
  });
});