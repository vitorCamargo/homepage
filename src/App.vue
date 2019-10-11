<template>
  <div>
    <a-affix :offsetTop = "-100" @change = "changeAffix">
      <div v-bind:class = "affixed ? 'menu-affixed' : 'menu'">
        <a href = "#">
          <img src = "./assets/logo.png" class = "menu-logo" />
        </a>

        <div style = "display: flex;">
          <div class = "navbar mobile-menu" style = "margin-right: 50px;">
            <div v-bind:class = "scrollPage === 'intro' ? 'item-selected' : 'item'"> <a href = "#intro"> Intro </a> </div>
            <div v-bind:class = "scrollPage === 'aboutMe' ? 'item-selected' : 'item'"> <a href = "#aboutMe"> {{ lang === 'en' ? 'About me' : 'Sobre' }} </a> </div>
            <div v-bind:class = "scrollPage === 'skills' ? 'item-selected' : 'item'"> <a href = "#skills"> {{ lang === 'en' ? 'Skills' : 'Habilidades' }} </a> </div>
            <div v-bind:class = "scrollPage === 'portfolio' ? 'item-selected' : 'item'"> <a href = "#portfolio"> {{ lang === 'en' ? 'Portfolio' : 'Portifólio' }} </a> </div>
            <div v-bind:class = "scrollPage === 'contact' ? 'item-selected' : 'item'"> <a> {{ lang === 'en' ? 'Contact' : 'Contato' }} </a> </div>
          </div>

          <div class = "language mobile-menu" @mouseover = "languageDropdownVisible = true" @mouseleave = "languageDropdownVisible = false">
            <img v-if = "lang === 'en'" src = "./assets/usa.svg" class = "language-flag">
            <img v-else src = "./assets/brazil.svg" class = "language-flag">

            <span class = "language-text"> {{ lang === 'en' ? 'EN' : 'PT' }} </span>

            <img src = "./assets/dropdown.svg" style = "margin-top: 7px;">

            <div class = "language-dropdown" v-show = "languageDropdownVisible">
              <span class = "language-dropdown-item language-dropdown-item-first" @click = "lang = 'en'; languageDropdownVisible = false;">
                <img src = "./assets/usa.svg" style = "margin-right: 10px;" class = "language-flag">

                <span class = "language-text"> English </span>
              </span>

              <span class = "language-dropdown-item language-dropdown-item-last" @click = "lang = 'pt'; languageDropdownVisible = false;">
                <img src = "./assets/brazil.svg" style = "margin-right: 10px;" class = "language-flag">

                <span class = "language-text"> Português </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </a-affix>

    <div ref = "intro" id = "intro">
      <img src = "./assets/me.svg" style = "max-width: 600px; width: 100%;" />

      <div class = "intro-box">
        <div style = " text-align: left; margin-bottom: 30px;">
          <span class = "info-title"> {{ lang === 'en' ? 'Hi. I\'m Vitor' : 'Oi. Eu sou Vitor' }} </span><br />
          <span class = "info-subtitle"> {{ lang === 'en' ? 'A Computer Science Padawan' : 'Apenas um estudante de Ciência da Computação' }} </span><br />
        </div>

        <a href = "#portfolio" class = "button-primary"> {{ lang === 'en' ? 'View Portfolio' : 'Ver Projetos' }} </a>
      </div>
    </div>

    <div ref = "aboutMe" id = "aboutMe" style = "padding-top: 700px; height: 100px;">kkk</div>
    <div ref = "skills" id = "skills" style = "padding-top: 700px; height: 100px;">kkk</div>
    <div ref = "portfolio" id = "portfolio" style = "padding-top: 700px; height: 100px;">kkk</div>
    <div ref = "footer" id = "footer" style = "padding-top: 700px; height: 100px;">kkk</div>
  </div>
</template>

<script>
  export default {
    name: 'Homepage',
    data() {
      return {
        lang: 'pt',
        scrollPage: 'intro',
        languageDropdownVisible: false,
        affixed: false
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      changeAffix: function(affixed) {
        this.affixed = affixed
      },
      handleScroll: function(event) {
        if(window.scrollY >= this.$refs.intro.offsetTop && window.scrollY <= this.$refs.intro.offsetTop + this.$refs.intro.getBoundingClientRect().height) {
          this.scrollPage = "intro"
        }
        if(window.scrollY >= this.$refs.aboutMe.offsetTop && window.scrollY <= this.$refs.aboutMe.offsetTop + this.$refs.aboutMe.getBoundingClientRect().height) {
          this.scrollPage = "aboutMe"
        }
        if(window.scrollY >= this.$refs.skills.offsetTop && window.scrollY <= this.$refs.skills.offsetTop + this.$refs.skills.getBoundingClientRect().height) {
          this.scrollPage = "skills"
        }
        if(window.scrollY >= this.$refs.portfolio.offsetTop && window.scrollY <= this.$refs.portfolio.offsetTop + this.$refs.portfolio.getBoundingClientRect().height) {
          this.scrollPage = "portfolio"
        } 
      }
    }
  }
</script>

<style>
  .menu {
    background: #FFF;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 80px;
    line-height: 80px;
    -webkit-box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1) !important;
    box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1) !important;
    transition-timing-function: ease-in;
    transition: 0.2s;

    padding: 0 30px;
    vertical-align: middle;
  }

  .menu-affixed {
    background: #FFF;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 60px;
    line-height: 60px;
    -webkit-box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1) !important;
    box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1) !important;
    transition: 0.25s;
    transition-timing-function: ease-out;

    padding: 0 30px;
    vertical-align: middle;
  }

  .menu .menu-logo {
    width: 50px;
    height: 50px;
    transition-timing-function: ease-in;
    transition: 0.2s;
  }

  .menu-affixed .menu-logo {
    width: 40px;
    height: 40px;
    transition: 0.25s;
    transition-timing-function: ease-out;
  }

  .menu .navbar {
    display: flex;
  }

  .mobile-menu-on {
    display: none;
    cursor: pointer;
  }

  .menu-affixed .navbar {
    display: flex;
  }

  .navbar .item {
    font-weight: 300;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }

  a:active, a:hover, a {
    outline: 0;
    text-decoration: none;
    color: #0C2134;
  }

  .navbar .item-selected {
    margin-left: 20px;
    margin-right: 20px;
    font-weight: 600;
    cursor: pointer;
  }

  .navbar .item-selected a {
    color: #3465D2 !important;
  }

  .navbar .item-selected a::before {
    content: "";
    width: 34px;
    display: block;
    position: absolute;
    height: 0px;
    top: calc(50% + 12px);
    border: 1.5px solid #3465D2;
  }

  .language {
    cursor: pointer;
  }
  
  .menu .language-flag {
    width: 30px;
    height: 30px;
    transition-timing-function: ease-in;
    transition: 0.2s;
  }

  .menu-affixed .language-flag {
    width: 25px;
    height: 25px;
    transition: 0.25s;
    transition-timing-function: ease-out;
  }

  .language-text {
    font-weight: 700;
    font-size: 11px;
  }

  .language-dropdown-item {
    display: flex;
    height: 30px;
    line-height: 30px;
  }

  .language-dropdown-item-first {
    margin-bottom: 15px;
  }

  .language-dropdown-item-last {
    margin-top: 15px;
  }

  .language-dropdown-item .language-text {
    font-weight: 100;
  }

  .language-dropdown-item:hover .language-text {
    font-weight: 600;
  }

  .language-dropdown {
    width: 140px !important;
    position: absolute;
    right: 18px;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 27px rgba(218, 218, 218, 0.3);
    z-index: 9;
  }
  
  .menu .menu-hamburguer {
    width: 25px;
    height: 25px;
    transition-timing-function: ease-in;
    transition: 0.2s;
  }

  .menu-affixed .menu-hamburguer {
    width: 20px;
    height: 20px;
    transition: 0.25s;
    transition-timing-function: ease-out;
  }

  #intro {
    background: #FFF url(./assets/background-info.svg);
    background-position: bottom;
    background-size: cover;
    padding: 20px;
    padding-bottom: 150px;
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
  }

  .intro-box {
    max-width: 350px;
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
  }

  .info-title {
    font-weight: 800;
    font-size: 42px;
  }

  .info-subtitle {
    font-weight: 100;
    font-size: 21px;
    color: #666;
  }

  .button-primary {
    background: linear-gradient(287.37deg, #404DE6 -20.96%, #72E9F3 125.08%);
    box-shadow: 0px 0px 27px rgba(64, 77, 230, 0.3);
    border-radius: 105px;
    border: none;
    padding: 10px 30px;
    margin-top: 22px;
    color: #FFF;
    cursor: pointer;
    outline: none;
  }

  .button-primary:active, .button-primary:hover {
    color: #FFF;
  }
  @media only screen and (max-width: 390px) {
    .intro-box {
      margin-top: -21px !important;
    }
  }

  @media only screen and (max-width: 460px) {
    .info-title {
      font-size: 31px;
    }

    .info-subtitle {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 820px) {
    .mobile-menu {
      display: none !important;
    }

    .mobile-menu-on {
      display: block;
    }
  }

  @media only screen and (max-width: 1040px) {
    #intro {
      display: block;
      text-align: center;
    }

    .intro-box {
      margin-left: auto;
      margin-right: auto;
      margin-top: -28px;
      margin-bottom: -30px;
    }
  }
</style>
