function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let ms = padZero(dateTime.getMinutes());
    let ss = padZero(dateTime.getSeconds());
    let ampm = document.getElementById('ampm');
    
    if (hr >= 12) {
      ampm.innerHTML = 'PM';
      if (hr > 12) {
        hr = hr - 12;
      }
    } else {
      ampm.innerHTML = 'AM';
    }

    hr = padZero(hr);
    document.getElementById('hours').innerHTML = hr;
    document.getElementById('mins').innerHTML = ms;
    document.getElementById('seconds').innerHTML = ss;
  }

  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }
  

  setInterval(displayTime, 500);