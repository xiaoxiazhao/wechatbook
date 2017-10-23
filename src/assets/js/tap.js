const tap = function(ele, callback) {
  let start = 0,
    delay = 200,
    moved = false;
  ele.addEventListener("touchstart", function(e){
    moved = false;
    start = +new Date();
  }, { passive: true }, false);
  ele.addEventListener("touchmove", function(e){
    moved = true;
  }, { passive: true }, false);
  ele.addEventListener("touchend", function(e){
    if(moved) return;
    let cur = +new Date();
    if(cur - start > delay) return;
    callback(e);
  }, { passive: true }, false);
}

export default tap;