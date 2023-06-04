//tags #{"iataCode":"SQ", "scriptType": "FRP", "versions":["sq_v_ow_3.11", "sq_v_rtp_3.12", "sq_v_rtus_3.12"],"hardcode":false}#
(function () {

  var raFallback = function raFallback(f) {
    return setTimeout(f, 1000 / 10);
  };

  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    raFallback;
  var MAX_WAITING_TIME = 300;
  var INIT_TIME = Date.now();

  const reduceRight = ([arr, req]) => {
    return arr.reduceRight((a, _) => {
      if (a) {
        return a
      }
      const satisfies = req.every(c => {
        if (Object.prototype.hasOwnProperty.call(c, 'value')) {
          return Object.prototype.hasOwnProperty.call(_, c.key) && _[c.key] === c.value
        }
        if (!Object.prototype.hasOwnProperty.call(c, 'value')) {
          return Object.prototype.hasOwnProperty.call(_, c.key)
        }
        return false
      })
      if (satisfies) {
        return _
      }
    }, null)
  }
  
  const getDataLayer = () => reduceRight([window.dataLayer, [
    { key: 'typeOfSearch' },
    { key: 'typeOfFare' },
    { key: 'typeOfTrip' },
    { key: 'origin' },
    { key: 'numOfAdults' },
    { key: 'numOfChildren' },
    { key: 'numOfInfants' },
    { key: 'language' },
    { key: 'destination' },
    { key: 'departureDate' },
    { key: 'currencyOfFares' },
    { key: 'cabin' }
  ]])
  const dataLayer = getDataLayer()

  var loadScript = function loadScript() {
    var src = [];
    var currentTime = Date.now();
    var elapseTime = (currentTime - INIT_TIME) / 1000;

    if (dataLayer && Object.keys(dataLayer).length > 0) {
      if (dataLayer.typeOfTrip === 'One-way') {
        src.push('https://www.securitytrfx.com/js/sq/sq_ow_v3.11.js')
      }
      if (dataLayer.typeOfTrip === 'Return') {
        src.push('https://www.securitytrfx.com/js/sq/sq_rtp_v3.12.js');
        src.push('https://www.securitytrfx.com/js/sq/sq_rtus_v3.12.js');
      }
       
      for (let index = 0; index < src.length; index++) {
        const element = src[index];
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = element;
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      }
    }

    if ((!dataLayer || Object.keys(dataLayer).length === 0) && elapseTime < MAX_WAITING_TIME) {
      window.requestAnimationFrame(function () {
        loadScript();
      });
    }
  };

  loadScript();
})();
