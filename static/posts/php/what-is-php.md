---
title: '🐘 PHP에 대한 매우 짧은 소개'
summary: 'PHP 관련된 글은 많이 작성했지만 정작 PHP 자체는 다룬적이 없습니다. 어머나...'
date: 2023-11-07 12:43:00
tags: [ php ]
draft: true
---

## 📖 서문

제가 [🐘 PHP : 간단하게 알아보는 PHP의 역사](/posts/php/php-history)나
[🐘 PHP? 그거 개그용 언어 아니야?](/posts/php/why-php-blamed) 같은 `PHP`와 관련된 글은 작성해놓고,
정작 PHP 자체를 설명하는 글은 작성하지 않았더라구요. 어머나...

이 글 ~(제목대로 매우 짧게 작성된...)~ 을 통해 간단하게 PHP에 대해 알아보도록 합시다.

## 일단, 그래서 PHP 언어가 뭔가요?

`PHP`는 신속한 웹 응용 프로그램 제작을 위해 개발되어 1995년 공개된 오픈소스 인터프리터 언어입니다.
당시 웹 사이트를 만들기 위해 사용된 CGI(Common Gateway Interface)는 C와 Perl 언어를 통해 
복잡한 방식으로 웹페이지를 만들었기 때문에 개발이 어려웠습니다.
이에 비해 훨씬 간단하게 웹 사이트를 만들어 낼 수 있는 PHP는 웹 개발 세계에서 높은 인기를 
누리며 퍼져나갔고 현재까지도 활발하게 개발이 진행되고 있습니다.

PHP는 현재 `The PHP Group`에서 개발 및 관리를 맡고 있고, 
[php.net](http://www.php.net)에서 문서를 제공하고 있습니다.
이곳에서는 3.0 이상의 버전만 관리하기 때문에 1.0과 2.0는 
[PHP 박물관](https://museum.php.net)에서 확인하실 수 있습니다.
(PHP의 자세한 역사를 알고싶다면 기존에 작성한 [**PHP의 역사**](/posts/php/php-history)를 읽으시면 좋습니다.)

**![The elePHPant](what-is-php_mascot.png) _The elePHPant_**
PHP의 마스코트는 위에 있는 `elePHPant`라는 이름의 파란 코끼리입니다.
Vincent Pontier에 의해 디자인된 이 마스코트는 문득 `PHP`를 옆에서 보면 코끼리처럼 보인다는 생각에 만들어졌습니다.
저처럼 _"엥 이게 무슨 말이야?"_ 라고 생각하신 분이 있다면, 저도 디자이너의 머리속은 상상이 안가기 때문에 이해를 돕는 아래 사진을 보시기
바랍니다.

![How to design elePHPant](what-is-php_mascot_from_php.png) _"The (PHP) letters
were forming the shape of an elephant if viewed in a sideways angle."_

---

### 📊 PHP 관련 통계

[![W3Techs : 2022.01 ~ 2023.01 서버 사이드 언어 점유율](what-is-php_w3techs-server-side.png)
_📊W3Techs : 2022.01 ~ 2023.01 서버 사이드 언어
점유율_](https://w3techs.com/technologies/history_overview/programming_language)

![stackoverflow : 2022 스크립트·마크업 언어 선호도·기피도](what-is-php_stackoverflow-loved-dreaded-survey.png)
_📊stackoverflow : 2022 스크립트·마크업 언어 선호도·기피도_

[W3Techs](https://w3techs.com/technologies/details/pl-php)의 통계에 따르면 2023년에도 PHP는
77.8%의 높은 점유율로 1위를 꾸준히 유지하고 있고, 수많은 메이저 사이트에서도 사용되고 있습니다.
하지만 [Stackoverflow](https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages)
의 설문조사 결과를 보면 높은 기피도(dreaded)로 무려 하위 9위에 랭크했습니다.
이처럼 PHP는 높은 점유율에 비해 개발자들에게는 미움받는 언어에 속합니다. 그렇기에 많은 밈들을 통해 대차게 욕을 먹고 있는 중인 거죠.

> PHP로 운영중인 사이트 목록:
>
> - [Wikipedia.org](https://Wikipedia.org), [Whatsapp.com](https://Whatsapp.com), [WordPress.org](https://Wordpress.org),
    > [XpressEngine.com](https://www.xpressengine.com), [Pinterest.com](https://Pinterest.com), [Vimeo.com](https://Vimeo.com),
    > [Pixiv.net](https://www.pixiv.net), [Mozilla.org](https://Mozilla.org), [Tumblr.com](https://Tumblr.com)

> 읽으면 좋은 포스트 : [PHP의 역사](/posts/php/php-history)

---

### ✨ PHP의 특징

- #### C와 Perl의 문법을 기반으로 작성됨

  PHP의 문법은 기존 개발자들의 유입을 위해 [C](http://clang.org/)와 [Perl](https://www.perl.org/)
  언어의 문법을 많이 차용했습니다.
  특히 변수명 앞에 `$`을 붙여야 하는 것과 모든 배열이 연관 배열(map)로 작동한다는 점, 그리고 문자열 결합 연산자가 `+`가
  아닌 `.`이라는 점 등이 Perl에서 차용된 대표적인 문법이죠.

- #### `<?php ... ?>` 태그로 감싸주어야 함

  PHP는 프로그래밍 언어가 아닌 일종의 템플릿 언어로 시작되어 PHP 2.0에 들어서며 프로그래밍 언어로 재설계되었습니다. 이러한 역사로
  인해 일반적인 프로그래밍 언어와 달리 HTML 문서 내에 삽입되는 구조를 갖고 있는데요.
  PHP 파일은 아래와 같이 `<?php ... ?>` 태그 안에 PHP 코드가 삽입되고, 이 외의 부분은 `echo`문법으로 출력된 것과
  동일하게 처리됩니다.

  :::info HTML 내에 삽입된 예시

    - PHP 코드 내용
      ```php
      <html>
          <body>
              <?php
                  echo "Hello World!";
              ?>
          </body>
      </html>
      ```
    - 출력 결과
      ```text
      <html>
          <body>
              Hello World!
          </body>
      </html>
      ```

  :::

---
