class NagyKartya{
  constructor(htmlDomElem, adat) {
    this.elem = htmlDomElem
    this.adat = adat
    /*  console.log(this.adat)
    console.log(this.elem) */
    this.cimElem = this.elem.children('h3')
    this.kepElem = this.elem.children('img')
    this.leirasElem = this.elem.children('p')

    this.setAdat(this.adat)
    /*  this.cimElem.html(this.adat.cim)
    this.leirasElem.html(this.adat.leiras)
    this.kepElem.attr('src', this.adat.eleresiut) */

  }
  setAdat(ertek) {
    this.cimElem.html(ertek.cim)
    this.leirasElem.html(ertek.leiras)
    this.kepElem.attr('src', ertek.eleresiut)
  }





}




class Kartya extends NagyKartya {
  constructor(htmlDomElem, adat) {
    super(htmlDomElem, adat);
    

    this.elem.on('click', () => {
      this.kattintasFigyelo()
    })
  }
  
  kattintasFigyelo() {
    let esemeny = new CustomEvent('KepValasztas', { detail: this.adat })
    window.dispatchEvent(esemeny)
  }
}
