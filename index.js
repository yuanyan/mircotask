(function(global) {
  var MutationObserver = global.MutationObserver ||
          global.WebKitMutationObserver || 
          global.MozMutationObserver ||
          global.JsMutationObserver;
  
  var mutationObserverSupport = !!MutationObserver;
  var iterations = 0;
  var callbacks = [];
  var twiddle = document.createTextNode('');
  
  function microtask(callback) {
    twiddle.textContent = iterations++;
    callbacks.push(callback);
  }
  
  function executionMicrotask() {
    while (callbacks.length) {
      callbacks.shift()();
    }
  }
  
  if(mutationObserverSupport){
    new MutationObserver(executionMicrotask)
    .observe(twiddle, {characterData: true});
  }else{
    setTimeout(executionMicrotask, 1)
  }
  
  global.microtask = microtask;

})(this);
