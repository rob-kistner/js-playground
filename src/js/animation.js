import anime from 'animejs/lib/anime.es.js'

const thecontent = document.getElementById('mycontent')
const thebacker = document.getElementById("content-backer")

document.querySelector('#changeContent').addEventListener('click', runAnim)

function runAnim() {
  console.log('running animation')
  const t1 = anime.timeline({
    easing: 'easeInOutExpo'
  })
  t1
    .add({
      targets: '#mycontent',
      opacity: 0,
      duration: 750
    })
    .add({
      targets: '#mycontent2',
      opacity: 1,
      duration: 750,
      begin: function() {
        document.querySelector('#mycontent').style.display = 'none'
        document.querySelector('#mycontent2').style.display = 'block'
      }
    })

}