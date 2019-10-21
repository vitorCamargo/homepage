<template>
  <div>
    <a-affix class = "noselect" :offsetTop = "-100" @change = "changeAffix">
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
            <div v-bind:class = "scrollPage === 'contact' ? 'item-selected' : 'item'"> <a @click = "openContactModal"> {{ lang === 'en' ? 'Contact' : 'Contato' }} </a> </div>
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

    <div ref = "aboutMe" id = "aboutMe" style = "padding: 100px; display: flex; justify-content: space-around;">
      <div class = "aboutMe-title"> {{ lang === 'en' ? 'About Me' : 'Sobre mim' }} </div>

      <div class = "aboutMe-content">
        <p class = "aboutMe-text" v-if = "lang === 'en'">
          I am a student of <span style = "font-weight: 500">Computer Science</span> at the Federal Technological University of Paraná (UTFPR). I learned to enjoy the area during my high school computer technician, where I developed copied Wix websites and sold to my classmates who hadn’t done the lessons. In it I learned the basics of web design and development for web, mobile and desktop.
        </p>

        <p class = "aboutMe-text" v-else>
          Sou estudante de <span style = "font-weight: 500">Ciência da Computação</span> na Universidade Tecnológica Federal do Paraná (UTFPR). Aprendi a amar a área de tecnologia durante o meu técnico de informática no ensino médio, onde desenvolvia sites copiados do Wix e vendia para meus colegas que não haviam feito as lições. No técnico, aprendi o básico de web design e desenvolvimento para web, mobile e desktop.
        </p>

        <div style = "display: flex; justify-content: center;">
          <a href = "./assets/CV.pdf" download class = "button-primary"> {{ lang === 'en' ? 'Download CV' : 'Baixar CV' }} </a>
          <a href = "http://lattes.cnpq.br/0312842857318967" target = "_blank" class = "button-secondary" style = "margin-left: 40px;">
            <span> {{ lang === 'en' ? 'View Lattes' : 'Ver Lattes' }} </span>
          </a>
        </div>
      </div>
    </div>

    <div ref = "skills" id = "skills" style = "background: #F5F5F5; padding: 40px 100px;">
      <div class = "skills-title">
        <p> {{ lang === 'en' ? 'My Skills' : 'Habilidades' }} </p>
        <p class = "subtitle"> {{ lang === 'en' ? 'Programming Languages and Technologies' : 'Linguagens de Programação e Tecnologias' }} </p>
      </div>

      <div class = "skills-content">
        <img src = "./assets/skills.png" style = "width: 100%;" />
      </div>
    </div>

    <div ref = "portfolio" id = "portfolio">
      <div style = "margin: 40px 100px;" class = "portfolio-title"> {{ lang === 'en' ? 'My Portfolio' : 'Meu Portifolio' }} </div>

      <img v-if = "loading" class = "loading" src = "./assets/loader.gif" />

      <div v-else>
        <div class = "portfolio-slide-control">
          <div v-on:click = "prevSlide()">
            <img src = "./assets/slide-left.svg" />
            <span class = "noselect"> {{ lang === 'en' ? 'PREV' : 'ANTERIOR' }} </span>
          </div>

          <div v-on:click = "nextSlide()">
            <span class = "noselect"> {{ lang === 'en' ? 'NEXT' : 'PRÓXIMO' }} </span>
            <img src = "./assets/slide-right.svg" />
          </div>
        </div>

        <div :style = "{ backgroundImage: `url(${projects[currentSlide].background})` }" class = "portfolio-slide-projects">
          <div class = "portfolio-slide-title">
            {{ lang === 'en' ? projects[currentSlide].name.en : projects[currentSlide].name.pt }}
          </div>

          <div v-if = "projects[currentSlide].links.github || projects[currentSlide].links.url || projects[currentSlide].links.googlePlay || projects[currentSlide].links.others.length > 0" class = "portfolio-slide-links">
            <a v-if = "projects[currentSlide].links.github" target = "_blank" v-bind:href = "projects[currentSlide].links.github">
              <img src = "./assets/github-icon.svg" />
            </a>

            <a v-if = "projects[currentSlide].links.url" target = "_blank" v-bind:href = "projects[currentSlide].links.url">
              <img src = "./assets/web-icon.svg" />
            </a>

            <a v-if = "projects[currentSlide].links.googlePlay" target = "_blank" v-bind:href = "projects[currentSlide].links.googlePlay">
              <img src = "./assets/googlePlay-icon.svg" />
            </a>

            <div v-if = "projects[currentSlide].links.others.length > 0">
              <a v-for = "link in projects[currentSlide].links.others" v-bind:key = "link.url" target = "_blank" v-bind:href = "link.url">
                <img v-bind:src = "link.image" />
              </a>
            </div>
          </div>

          <div class = "portfolio-details">
            <div class = "portfolio-description-mobile" style = "display: none; max-width: 310px; text-align: center; font-weight: 500; font-size: 15px; letter-spacing: 0.03em; color: #FFFFFF; margin: 0 auto;">
              <span>
                {{ lang === 'en' ? projects[currentSlide].description.en : projects[currentSlide].description.pt }}
              </span>
            </div>

            <div v-if = "projects[currentSlide].images.mobile && projects[currentSlide].images.desktop" style = "position: relative;">
              <img class = "slide-desktop" v-bind:src = "projects[currentSlide].images.desktop" />
              <img class = "slide-mobile" v-bind:src = "projects[currentSlide].images.mobile" />
            </div>

            <div v-else-if = "projects[currentSlide].images.desktop">
              <img v-bind:src = "projects[currentSlide].images.desktop" />
            </div>

            <div v-else-if = "projects[currentSlide].images.mobile">
              <img v-bind:src = "projects[currentSlide].images.mobile" />
            </div>

            <div class = "portfolio-description" style = "max-width: 310px; text-align: center; font-weight: 500; font-size: 15px; letter-spacing: 0.03em; color: #FFFFFF; margin: 0 auto;">
              <span>
                {{ lang === 'en' ? projects[currentSlide].description.en : projects[currentSlide].description.pt }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div ref = "footer" id = "footer" style = "margin-top: 70px; margin-bottom: 20px; text-align: center; padding: 0 20px;">
      <p class = "footer-title">
        {{ lang === 'en' ? 'Interested in my work?' : 'Interressado no meu trabalho?' }}
      </p>

      <a @click = "openContactModal" class = "button-primary"> {{ lang === 'en' ? 'CONTACT ME' : 'CONTATE ME' }} </a>

      <div class = "footer-divider"></div>

      <div style = "display: flex; justify-content: center;">
        <a href = "https://www.facebook.com/vitorbueno.camargo" target = "_blank" class = "footer-buttons" style = "background-color: #3C599B;">
          <img src = "./assets/facebook-icon.svg" class = "footer-img-icon" />
        </a>

        <a href = "https://www.linkedin.com/in/vitor-bueno-de-camargo-b32195196/" target = "_blank" class = "footer-buttons" style = "background-color: #107AB6;">
          <img src = "./assets/linkedin-icon.svg" class = "footer-img-icon" />
        </a>

        <a href = "https://www.github.com/vitorCamargo" target = "_blank" class = "footer-buttons" style = "background-color: #0C2134;">
          <img src = "./assets/github-white-icon.svg" class = "footer-img-icon" />
        </a>

        <a href = "mailto:vitorcamargo@alunos.utfpr.edu.br" target = "_blank" class = "footer-buttons" style = "background-color: #DB4437;">
          <img src = "./assets/gmail-icon.svg" class = "footer-img-icon" />
        </a>

        <a href = "https://www.instagram.com/_vitorcamargo_/" target = "_blank" class = "footer-buttons instagram-background">
          <img src = "./assets/instagram-icon.svg" class = "footer-img-icon" />
        </a>
      </div>

      <p class = "footer-copyright"> © 2019. <span style = "font-style: italic; font-weight: 600;"> Vitor Camargo </span> </p>
    </div>

    <a-modal class = "contact-modal" :visible = "visibleContactModal" @cancel = "visibleContactModal = false" :footer = "null">
      <a-spin :spinning = "confirmContactModalLoading">
        <p style = "font-weight: 600; font-size: 35px; color: #0C2134; text-align: center; margin-bottom: 0;"> {{ lang === 'en' ? 'Contact me' : 'Contate me' }} </p>

        <p style = "text-align: center;"> {{ lang === 'en' ? 'I will get back to you within one to two days through email. Also please do not forget to check your spam account just in case!' : 'Eu retornarei o contato com um ou dois dias atrvés do email. Por favor, não se esqueça de checar seu spam.' }} </p>

        <a-form :autoFormCreate = "(form) => { this.form = form }">
          <a-form-item class = "input-contact-form" fieldDecoratorId = "name" v-bind:fieldDecoratorOptions = "{ rules: [{ required: true, message: lang === 'en' ? 'Field Required' : 'Campo Obrigatório' }] }">
            <a-input size = "large" v-bind:placeholder = "lang === 'en' ? 'Name' : 'Nome'" />
          </a-form-item>

          <a-form-item class = "input-contact-form" fieldDecoratorId = "email" v-bind:fieldDecoratorOptions = "{ rules: [{ required: true, message: lang === 'en' ? 'Field Required' : 'Campo Obrigatório' }, { type: 'email', message: lang === 'en' ? 'Email Invalid' : 'E-mail Inválido' }] }">
            <a-input size = "large" v-bind:placeholder = "lang === 'en' ? 'Email' : 'E-mail'" />
          </a-form-item>

          <a-form-item class = "input-contact-form" fieldDecoratorId = "subject" v-bind:fieldDecoratorOptions = "{ rules: [{ required: true, message: lang === 'en' ? 'Field Required' : 'Campo Obrigatório' }] }">
            <a-input size = "large" v-bind:placeholder = "lang === 'en' ? 'Subject' : 'Assunto'" />
          </a-form-item>

          <a-form-item class = "input-contact-form" fieldDecoratorId = "message" v-bind:fieldDecoratorOptions = "{ rules: [{ required: true, message: lang === 'en' ? 'Field Required' : 'Campo Obrigatório' }] }">
            <a-textarea v-bind:placeholder = "lang === 'en' ? 'Message' : 'Mensagem'" :rows = "4" />
          </a-form-item>

          <div style = "display: flex; justify-content: flex-end;">
            <a @click = "sendContactMessage" class = "button-primary"> {{ lang === 'en' ? 'Send' : 'Enviar' }} </a>
          </div>
        </a-form>
      </a-spin>
    </a-modal>
  </div>
</template>

<script>
  export default {
    name: 'Homepage',
    data() {
      return {
        lang: 'en',
        scrollPage: 'intro',
        languageDropdownVisible: false,
        affixed: false,
        projects: [],
        currentSlide: 0,
        intervalSlide: '',
        loading: true,
        visibleContactModal: false,
        confirmContactModalLoading: false
      }
    },
    created() {
      let _this = this
      this.$axios.get('https://api-v-homepage.herokuapp.com/api/projects').then(res => {
        _this.projects = res.data;
        _this.slide(0);
        _this.loading = false
      });

      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      clearInterval(this.intervalSlide);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      changeAffix: function(affixed) {
        this.affixed = affixed;
      },
      handleScroll: function(event) {
        if(window.scrollY >= this.$refs.intro.offsetTop && window.scrollY <= this.$refs.intro.offsetTop + this.$refs.intro.getBoundingClientRect().height) {
          this.scrollPage = "intro";
        }
        if(window.scrollY >= this.$refs.aboutMe.offsetTop && window.scrollY <= this.$refs.aboutMe.offsetTop + this.$refs.aboutMe.getBoundingClientRect().height) {
          this.scrollPage = "aboutMe";
        }
        if(window.scrollY >= this.$refs.skills.offsetTop && window.scrollY <= this.$refs.skills.offsetTop + this.$refs.skills.getBoundingClientRect().height) {
          this.scrollPage = "skills";
        }
        if(window.scrollY >= this.$refs.portfolio.offsetTop && window.scrollY <= this.$refs.portfolio.offsetTop + this.$refs.portfolio.getBoundingClientRect().height) {
          this.scrollPage = "portfolio";
        } 
      },
      slide: function() {
        let _this = this
        this.intervalSlide = setInterval(() => {
          _this.nextSlide();
        }, 5000);
      },
      prevSlide: function() {
        if(this.currentSlide > 0) {
          this.currentSlide = this.currentSlide - 1;
        } else {
          this.currentSlide = this.projects.length - 1;
        }
      },
      nextSlide: function() {
        if(this.currentSlide < this.projects.length - 1) {
          this.currentSlide = this.currentSlide + 1;
        } else {
          this.currentSlide = 0;
        }
      },
      openContactModal: function() {
        this.visibleContactModal = true;
        this.form.resetFields(['name', 'email', 'subject', 'message']);
      },
      sendContactMessage: function() {
        let _this = this;
        this.confirmContactModalLoading = true;

        this.form.validateFields(async (err, values) => {
          if (!err) {
            const { name, email, subject, message } = values;
            _this.$axios.post('https://api-v-homepage.herokuapp.com/api/messages', {
              name, email, subject, message
            }).then(res => {
              _this.confirmContactModalLoading = false;
              _this.visibleContactModal = false;

              _this.$message.success(_this.lang == 'en' ? 'Your message was sent. Thank you!' : 'Sua mensagem foi enviada. Obrigado!');
            }).catch(ex => {
              _this.confirmContactModalLoading = false;

              _this.$message.error(_this.lang == 'en' ? 'Your message wasn\'t sent. Try again.' : 'Sua mensagem não foi enviada. Tente novamente!');
            });
          }
          _this.confirmContactModalLoading = false;
        });
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
    outline: 0 !important;
    text-decoration: none !important;
    color: #0C2134 !important;
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
    justify-content: center;
  }

  .intro-box {
    max-width: 350px;
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    margin-left: 50px;
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
    color: #FFF !important;
    cursor: pointer;
  }

  .button-secondary {
    position: relative;
    border-radius: 105px;
    padding: 7px 27px;
    margin-top: 23.5px;
    cursor: pointer;
    background: #FFF;
  }

  .button-secondary span {
    background: linear-gradient(287.37deg, #404DE6 -20.96%, #72E9F3 125.08%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    vertical-align: middle;
  }

  .button-secondary::after {
    position: absolute;
    top: -1.5px;
    bottom: -1.5px;
    left: -1.5px;
    right: -1.5px;
    background: linear-gradient(287.37deg, #404DE6 -20.96%, #72E9F3 125.08%);
    content: '';
    z-index: -1;
    border-radius: 115px;
}

  .button-primary:active, .button-primary:hover {
    color: #FFF !important;
  }

  .aboutMe-title, .portfolio-title {
    font-weight: bold;
    background: url(assets/effect-1.svg);
    height: 93px;
    padding-top: 12px;
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 35px;
    font-size: 31px;
    color: #0C2134;
    letter-spacing: 0.03em;
  }

  .aboutMe-content {
    max-width: 500px;
  }

  .aboutMe-text {
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.03em;
    color: #666666;
    font-weight: 100;
  }
  
  .skills-title {
    text-align: center;
    padding-top: 38px;
    background: url(assets/effect-2.svg);
    background-size: auto 113px;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: top;
    font-weight: bold;
    font-size: 31px;
    letter-spacing: 0.03em;
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
  }

  .skills-title p {
    margin-bottom: 0;
  }

  .skills-title p.subtitle {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 0.03em;
    color: #666666;
    font-weight: 100;
  }

  .skills-content {
    max-width: 800px;
    margin: 70px auto 40px;
  }

  #portfolio img.loading {
    display: block;
    margin-top: 50px;
    margin: 100px auto;
    width: 85px;
  }

  .portfolio-slide-projects {
    background-size: 100% 100%;
  }

  .portfolio-slide-control {
    display: flex;
    justify-content: flex-end;
  }

  .portfolio-slide-control div {
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.03em;
    margin-right: 50px;
    cursor: pointer;
  }

  .portfolio-slide-control div img {
    height: 14px;
    vertical-align: middle;
  }

  .portfolio-slide-title {
    padding-top: 179px;
    padding-left: 50px;
    font-weight: 600;
    font-size: 30px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    color: #FFFFFF;
  }

  .portfolio-slide-links {
    margin-left: auto;
    width: fit-content;
    background: #FFF;
    border-radius: 115px 0 0 115px;
    padding: 10px 0 10px 25px;
  }

  .portfolio-details {
    display: flex;
  }

  .portfolio-slide-links img {
    height: 20px;
    margin-right: 15px;
  }

  .slide-desktop {
    height: 430px;
  }

  .slide-mobile {
    height: 350px;
    position: absolute;
    right: 0;
    bottom: -13px;
  }

  .footer-title {
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    letter-spacing: 0.03em;
    margin-bottom: 20px;
  }

  .footer-divider {
    border-bottom: 0.5px solid #0C21345B;
    width: 70%;
    margin: 50px auto;
  }

  .footer-buttons {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin: 0 5px;
  }

  .footer-img-icon {
    padding: 9px;
    width: 100%;
    height: 100%;
  }

  .instagram-background {
    background: radial-gradient(circle farthest-corner at 35% 90%,#fec564,transparent 50%),radial-gradient(circle farthest-corner at 0 140%,#fec564,transparent 50%),radial-gradient(ellipse farthest-corner at 0 -25%,#5258cf,transparent 50%),radial-gradient(ellipse farthest-corner at 20% -50%,#5258cf,transparent 50%),radial-gradient(ellipse farthest-corner at 100% 0,#893dc2,transparent 50%),radial-gradient(ellipse farthest-corner at 60% -20%,#893dc2,transparent 50%),radial-gradient(ellipse farthest-corner at 100% 100%,#d9317a,transparent),linear-gradient(#6559ca,#bc318f 30%,#e33f5f 50%,#f77638 70%,#fec66d 100%);
  }

  .footer-copyright {
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.03em;
    margin-top: 20px;
  }

  .contact-modal .ant-modal-body {
    background: url(assets/background-contact.png);
    background-repeat: no-repeat;
    background-size: 100%;
    padding-top: 100px;
  }

  @media only screen and (max-width: 1390px) {
    .slide-desktop {
      height: 330px;
    }

    .slide-mobile {
      height: 250px;
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

    #aboutMe {
      padding: 40px !important;
      display: block !important;
    }

    .portfolio-title {
      margin: 40px !important;
    }

    .aboutMe-content {
      margin-left: auto;
      margin-right: auto;
      margin-top: 25px;
    }

    .aboutMe-content .button-secondary {
      margin-left: 10px !important;
    }
    
    .portfolio-slide-title {
      padding-top: 80px;
    }

    .slide-desktop {
      height: 230px !important;
    }

    .slide-mobile {
      height: 150px !important;
    }
    
    .footer-title {
      font-size: 23px;
    }
  }

  @media only screen and (max-width: 820px) {
    .mobile-menu {
      display: none !important;
    }

    .mobile-menu-on {
      display: block;
    }

    #skills {
      padding: 40px 20px !important;
    }

    .skills-content {
      margin: 30px auto 10px !important;
    }

    .portfolio-slide-links {
      margin-bottom: 50px;
    }

    .portfolio-details {
      display: block;
    }

    .portfolio-description-mobile {
      display: block !important;
      margin-bottom: 40px !important;
    }

    .portfolio-description {
      display: none !important;
    }

    .slide-mobile {
      position: static !important;
      vertical-align: bottom !important;
      margin-left: -100px !important;
    }
  }

  @media only screen and (max-width: 460px) {
    .info-title {
      font-size: 31px;
    }

    .info-subtitle {
      font-size: 16px;
    }

    img.portfolio-slide-title {
      padding-top: 49px;
      font-size: 25px;
    }

    .slide-desktop {
      height: 160px !important;
    }

    .portfolio-slide-title {
      padding-top: 30px;
      font-size: 22px;
    }

    .portfolio-slide-links {
      margin-bottom: 20px;
      margin-top: 20px;
    }

    .portfolio-description-mobile {
      font-size: 12px;
    }

    .slide-mobile {
      height: 110px !important;
      margin-left: -90px !important;
    }
  }

  @media only screen and (max-width: 390px) {
    .intro-box {
      margin-top: -21px !important;
    }

    .aboutMe-content a {
      font-size: 10px;
    }
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
