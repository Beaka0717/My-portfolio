
window.onload = function () {
    let stars = document.querySelector('.stars');
    let moon = document.querySelector('.moon')
    let mountains_behind = document.querySelector('.mountains_behind');
    let mountains_front = document.querySelector('.mountains_front');
    let text = document.querySelector('.text');
    let btn = document.querySelector('.btn');
    let header = document.querySelector('header');
    
    
    window.addEventListener('scroll',function(){
        let value = window.scrollY;
        stars.style.left = value * 0.25  + 'px';
        moon.style.top = value * 1.05  + 'px';
        mountains_behind.style.top = value * 0.5 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        text.style.marginRight = value * 4 + 'px';
        text.style.marginTop = value * 1.5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        header.style.top = value * 0.5 + 'px';
        console.log("scrolling");
    
    })   

    // language select event
    $("#langSelect li").click(function() {
        var language = $(this).find("span").text();

        $(".sl-nav b").text(language);

        $('.sl-nav li').addClass("disabled");
    });

    // language hover event
    $("#langSelect li").hover(function() {
        $('.sl-nav li').removeClass("disabled");
    });

   

}

i18next.init({
    lng: 'mongolian',
    resources: {
        english: {
        translation: {
          nav: {
            language: 'Language :',
            home: 'HOME',
            aboutMe: 'ABOUT ME',
            portfolio: 'PORTFOLIO',
            contact: 'CONTACT',
            logo:'NINJINBOLOR.D'
          },
          textBox :{
            hello :  "Hi, I'm Ninjinbolor.D",
            shortName : "Call me Minjee",
            shortName2 :"Junior front-end developer based in South Korea",
            shortName3 :"i am 27. Born and raised in Ulaanbaatar Mongolia.",
            shortName4 :"I have a strong confidence about self improvement."
            // shortName5 :"I am well educated and bright enough to be front-end developer.
          },
          dflex :{
            shool_name : "Technical education academy",
            major : "Smart web & Web Content",
            timing : "2022.05.12 ~ 2022.11.17",
            location : "South Korea",
            process : "Coding subjects using HTML5, CSS3, SCSS, JS, JAVA, ORACLE, JSP The academy is in process",
            shool_name2 : "Soongsil University master",
            major2 : "IT management",
            timing2 : "2022.05.12 ~ 2022.11.17",
            location2 : "South Korea",
            process2 : "2.5 years master of IT management GPA 4.28 form 4.5 learned IT managementing and working on with HTML, CSS, Database, BigData, linux etc",
            shool_name3 : "Sangmyoung",
            major3 : "Korean language Course",
            timing3 : "2022.05.12 ~ 2022.11.17",
            location3 : "South Korea",
            process3 : "Korean language courses for 2 years. Good at speaking korean",
            shool_name4 : "University of the Humanities",
            major4 : "English linguistics",
            timing4 : "2022.05.12 ~ 2022.11.17",
            location4 : "Mongolia",
            process4 : "English teaching and translating 4 years bachelor GDA 3.4 from 4.0"
          },
         
        }
      },
      korean: {
        translation: {
          nav: {
            language: 'Language :',
            home: '???',
            aboutMe: '????????????',
            portfolio: '???????????????',
            contact: '?????????',
            logo:'??????.D'
          },
          textBox :{
            hello :  "???????????????",
            shortName : "?????? ????????? ?????? ????????? D.???????????????.",
            shortName2: "?????? ??????????????? ???????????? ???????????? ???????????????.",
            shortName3: "?????? ?????? ???????????? ?????? ?????? ???????????? ?????? ?????? ????????????.",
            shortName4: "?????? ????????? ?????? ????????? ??? ?????? ?????? ????????? ?????? ????????????.",

          },
          dflex :{
            shool_name : "???????????????????????????",
            major : "????????? ??? & ??? ?????????",
            timing : "2022.05.12 ~ 2022.11.17",
            location : "??????",
            process : "HTML5, CSS3, SCSS, JS, JAVA, ORACLE, JSP ?????? ????????? ?????? ??????????????? ?????? ???",
            shool_name2 : "??????????????? ?????? ???????????????",
            major2 : "IT ??????",
            timing2 : "2022.05.12 ~ 2022.11.17",
            location2 : "??????",
            process2 : "?????? ?????? : 4.28/4.5, ???????????? : ????????????, ?????????, ?????????, IT????????? ???",
            shool_name3 : "??????????????? ?????????",
            major3 : "???????????????",
            timing3 : "2022.05.12 ~ 2022.11.17",
            location3 : "??????",
            process3 : "?????????, ????????? ?????? ???????????? ?????? ???",
            shool_name4 : "University of the Humanities",
            major4 : "??????????????????",
            timing4 : "2022.05.12 ~ 2022.11.17",
            location4 : "??????",
            process4 : "???????????????, ????????? ???????????? ?????? ?????? : 3.4/4"
          }
        }
      },
      mongolian: {
        translation: {
          nav: {
            language: 'Language :',
            home: '????????',
            aboutMe: '?????????? ??????????',
            portfolio: '??????????????????',
            contact: '???????????? ??????????',
            logo:'??.??????????????????????'
          },
          textBox :{
            hello :  "???????? ?????????? ????",
            shortName : "???????????? ?????????????????????? ??????????",
            shortName2: "?????????? ???????????????????? ???????????? ??????????",
            shortName3: "???? Front-end ?????? ????????????????????",
            shortName4: "???????????????? ?????????????????????? ???????????????? ?????????? ???????? ???????? ?????????? "

          },
          dflex :{
            shool_name : "Technical education academy",
            major : "?????????? ?????? ?????????? ?????? ??????????????",
            timing : "2022.05.12 ~ 2022.11.17",
            location : "????????????????",
            process : "HTML5, CSS3, SCSS, JS, JAVA, ORACLE, JSP ?????? ????????? ?????? ??????????????? ?????? ???",
            shool_name2 : "???????????? ???? ????????????????",
            major2 : "IT ??????????????????",
            timing2 : "2022.05.12 ~ 2022.11.17",
            location2 : "????????????????",
            process2 : "Coding subjects using HTML5, CSS3, SCSS, JS, JAVA, ORACLE, JSP The academy is in process",
            shool_name3 : "Sangmyoung ???? ????????????????",
            major3 : "???????????????? ???????????? ??????????????",
            timing3 : "2022.05.12 ~ 2022.11.17",
            location3 : "????????????????",
            process3 : "???????????????? ?????? ?????????? ????????",
            shool_name4 : "University of the Humanities",
            major4 : "?????????? ???????????? ??????????????",
            timing4 : "2022.05.12 ~ 2022.11.17",
            location4 : "????????????",
            process4 : "?????????? ???????????? ?????????????? ???????? ???????? : 3.4/4"
          },
         
        }
      }
    }
  }, function(err, t) {
      jqueryI18next.init(i18next, $, {
        i18nName: 'i18next'
    });

    $('.nav').localize();
    $('.textBox').localize();
    $('.dflex').localize();
    

    $('.lang-select').click(function() {
        
        var lang = $(this).find("div").attr("id");

        console.log("id : " +lang );
        i18next.changeLanguage(lang);
        $('.nav').localize();
        $('.textBox').localize();
        $('.dflex').localize();
        
    });
  });
