$(function () {
  const kepTomb = [
    {
      cim: ' 1 kép',
      eleresiut: 'kepek/_DSC3977.jpeg',
      leiras: '1.kép leírása',
    },
    {
      cim: ' 2 kép',
      eleresiut: 'kepek/_DSC5109.jpeg',
      leiras: '2.kép leírása',
    },
    {
      cim: ' 3 kép',
      eleresiut: 'kepek/_DSC5826.jpeg',
      leiras: '3.kép leírása',
    },
  ]
  const nagyKartyaSzulo = $('#fokep')
  const galeria = $('#galeria')
  const sablonElem = $('.kartya')

  kepTomb.forEach(function (tombelem) {
    let ujElem = sablonElem.clone().appendTo(galeria)
    let ujKartya = new Kartya(ujElem, tombelem)
  })

  let nagyKartyaElem = sablonElem.clone().appendTo(nagyKartyaSzulo)
  let nagyKartya = new NagyKartya(nagyKartyaElem, kepTomb[1])
  sablonElem.remove()

  $(window).on('KepValasztas', function (event) {
    console.log(event.detail)
    nagyKartya.setAdat(event.detail)
  })
})
