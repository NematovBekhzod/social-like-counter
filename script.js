counters = document.querySelectorAll("h2")
counters.forEach(counter => {
  counter.innerText = '0'

  
  
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText

    console.log(c);

    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
});