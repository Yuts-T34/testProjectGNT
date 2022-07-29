// Countdown functions
(() => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
  
    function setElementInnerText(id, text) {
      const element = document.getElementById(id);
      element.innerText = text;
    }
  
    function countDown() {
      const now = new Date().getTime();
      const newYear = new Date('July 30, 2022 19:00:00').getTime();
      const unixTimeLeft = newYear - now;

      if(unixTimeLeft < 0){

        setElementInnerText('days', '00');
        setElementInnerText('hours', '00');
        setElementInnerText('minutes', '00');
        setElementInnerText('seconds', '00');
        document.getElementById('click-active').innerHTML = '<a href="https://apetimism.com/launchpad/oppabear" target="_blank" class="btn btn-primary py-md-3 px-md-5 border-square font-size-36 box-sado text-sado">> Mint Now <</a>';

      }else{

        setElementInnerText('days', (Math.floor(unixTimeLeft / DAY) < 10) ? '0' + Math.floor(unixTimeLeft / DAY) : Math.floor(unixTimeLeft / DAY));
        setElementInnerText('hours', (Math.floor(unixTimeLeft % DAY / HOUR) < 10) ? '0' + Math.floor(unixTimeLeft % DAY / HOUR) : Math.floor(unixTimeLeft % DAY / HOUR));
        setElementInnerText('minutes', (Math.floor(unixTimeLeft % HOUR / MINUTE) < 10) ? '0' + Math.floor(unixTimeLeft % HOUR / MINUTE) : Math.floor(unixTimeLeft % HOUR / MINUTE));
        setElementInnerText('seconds', (Math.floor(unixTimeLeft % MINUTE / SECOND) < 10) ? '0' + Math.floor(unixTimeLeft % MINUTE / SECOND) : Math.floor(unixTimeLeft % MINUTE / SECOND));
        document.getElementById('click-active').innerHTML = '<a href="#none" class="btn btn-primary py-md-3 px-md-5 border-square font-size-36 box-sado text-sado">> Are you ready? <</a>';

      }
      

    }
  
    function run() {
      countDown();
      setInterval(countDown, SECOND);
    }
  
    run();
  })();