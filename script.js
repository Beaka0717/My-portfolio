
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
            home: '홈',
            aboutMe: '자기소개',
            portfolio: '포트폴리오',
            contact: '연락처',
            logo:'민지.D'
          },
          textBox :{
            hello :  "안녕하세요",
            shortName : "신입 프론트 앤드 개발자 D.민지입니다.",
            shortName2: "저의 포트폴리오 사이트에 오신것을 환영합니다.",
            shortName3: "능력 있는 개발자가 되기 위해 재미있게 공부 하고 있습니다.",
            shortName4: "저와 회사가 같이 성장할 수 있는 좋은 회사를 찾고 있습니다.",

          },
          dflex :{
            shool_name : "방송정보국제교육원",
            major : "스마트 웹 & 웹 컨텐츠",
            timing : "2022.05.12 ~ 2022.11.17",
            location : "한국",
            process : "HTML5, CSS3, SCSS, JS, JAVA, ORACLE, JSP 등을 배우고 현재 포트폴리오 진행 중",
            shool_name2 : "숭실대학교 정보 과학대학원",
            major2 : "IT 경영",
            timing2 : "2022.05.12 ~ 2022.11.17",
            location2 : "한국",
            process2 : "학점 평균 : 4.28/4.5, 이수과목 : 빅데이터, 암호학, 리눅스, IT경영론 등",
            shool_name3 : "상명대학교 어학당",
            major3 : "한국어과정",
            timing3 : "2022.05.12 ~ 2022.11.17",
            location3 : "한국",
            process3 : "한국어, 한국에 대한 전반적인 문화 등",
            shool_name4 : "University of the Humanities",
            major4 : "영어영문학과",
            timing4 : "2022.05.12 ~ 2022.11.17",
            location4 : "몽골",
            process4 : "영어교육학, 통역학 복수전공 학점 평균 : 3.4/4"
          }
        }
      },
      mongolian: {
        translation: {
          nav: {
            language: 'Language :',
            home: 'Нүүр',
            aboutMe: 'Миний тухай',
            portfolio: 'Портфолио',
            contact: 'Холбоо барих',
            logo:'Д.Нинжинболор'
          },
          textBox :{
            hello :  "Сайн байна уу",
            shortName : "Намайг Нинжинболор гэдэг",
            shortName2: "Миний портфолиод тавтай морил",
            shortName3: "Би Front-end веб хөгжүүлэгч",
            shortName4: "Өөрийгөө хөгжүүлэхэд нээлттэй ажлын байр хайж байна "

          },
          dflex :{
            shool_name : "Technical education academy",
            major : "Смарт веб болон веб контент",
            timing : "2022.05.12 ~ 2022.11.17",
            location : "Солонгос",
            process : "HTML5, CSS3, SCSS, JS, JAVA, ORACLE, JSP 등을 배우고 현재 포트폴리오 진행 중",
            shool_name2 : "Сүншил их сургууль",
            major2 : "IT менежмент",
            timing2 : "2022.05.12 ~ 2022.11.17",
            location2 : "Солонгос",
            process2 : "Coding subjects using HTML5, CSS3, SCSS, JS, JAVA, ORACLE, JSP The academy is in process",
            shool_name3 : "Sangmyoung их сургууль",
            major3 : "Солонгос хэлний бэлтгэл",
            timing3 : "2022.05.12 ~ 2022.11.17",
            location3 : "Солонгос",
            process3 : "Солонгос хэл болон соёл",
            shool_name4 : "University of the Humanities",
            major4 : "Англи хэлний шинжлэл",
            timing4 : "2022.05.12 ~ 2022.11.17",
            location4 : "Монгол",
            process4 : "Англи хэлний шинжлэл Голч оноо : 3.4/4"
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
