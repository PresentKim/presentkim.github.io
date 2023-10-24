---
title: '🐘 PHP : 간단하게 알아보는 PHP의 역사'
summary: 'PHP는 1994년부터 꾸준한 발전을 거듭하여 현재까지도 업데이트되고 있는 프로그래밍 언어입니다.많은 개발자들에게 레거시 언어라는 악명으로 유명한 언어인데, 그럼에도 꾸준한 개선이 이뤄지고 있다는 점이 꽤 매력적이었습니다.이번 기회에 28년이라는 긴 세월 동안 수많은 개발자들의 기여로 발전해온 PHP의 역사를 정리해보고자 이 포스트를 작성하게 되었습니다.'
date: 2023-10-24 12:43:00
tags: [php]
---

## _**![PHP Logo](php-history_title.png)**_

<br/>

## 🚩 개요

`PHP`는 1994년부터 꾸준한 발전을 거듭하여 현재까지도 업데이트되고 있는 프로그래밍 언어입니다.
많은 개발자들에게 레거시 언어라는 악명으로 유명한 언어인데, 그럼에도 꾸준한 개선이 이뤄지고 있다는 점이 꽤 매력적이었습니다.
이번 기회에 28년이라는 긴 세월 동안 수많은 개발자들의 기여로 발전해온 PHP의 역사를 정리해보고자 이 포스트를 작성하게 되었습니다.

---

## 📜 PHP의 역사

<br/>

### PHP 1.0 `PHP Tools` [(1995년 6월 8일)](https://groups.google.com/g/comp.infosystems.www.authoring.cgi/c/PyJ25gZ6z7A/m/M9FkTUVDfcwJ?pli=1)

PHP는 Rasmus Lerdorf가 1994년 개인 웹페이지 개발(이력서 방문 추적)을 위해 Perl 언어로 작성된 CGI(Common Gateway Interface) 도구로부터 시작되었습니다.
자신에게 필요한 기능을 그때그때 만들어 사용하던 중 웹서버의 과부하와 개발의 복잡성을 해결하기 위해 C언어로 Perl 래퍼를 만들었고,
이를 알게된 주변 개발자들의 기여와 기능 요청으로 계속해서 개발되었습니다.

시간이 지나 많은 기능을 추가하고 점차 개선해, 마침내 `Personal Home Page Tools`라 명명한 배포판을 만들었고,
최종적으로 1995년 [PHP Tools의 소스를 공개](http://groups.google.com/group/comp.infosystems.www.authoring.cgi/msg/cc7d43454d64d133)해 최초의 PHP가 릴리즈 되었습니다.

이 버전의 PHP는 프로그래밍 언어가 아닌 동적 웹 페이지를 손쉽게 작성하기 위해 개발된 도구일 뿐이었고,
구체적인 설계 없이 요구 기능 구현을 위한 많은 수정으로 만들어진 탓에 함수의 이름이나 매개변수의 순서가 일관되지 않은 문제를 갖게 되었습니다.
라스무스는 회고록에서 이에 대해 _"저는 프로그래밍 언어를 작성할 의도가 전혀 없었지만, 이것을 멈추는 방법을 몰랐습니다. [...] 저는 프로그래밍 언어를 작성하는 방법을 전혀 모릅니다. 저는 그저 계속해서 다음 논리적 단계를 추가했습니다."_ 라고 말했습니다.

- 회고록 원문 : _"I don't know how to stop it, there was never any intent to write a programming language [...] I have absolutely no idea how to write a programming language, I just kept adding the next logical step on the way."_

- 작성 예제

  ```text
  <!--getenv HTTP_USER_AGENT-->
  <!--ifsubstr $exec_result Mozilla-->
  Hey, you are using Netscape!<p>
  <!--endif-->

  <!--sql database select * from table where user='$username'-->

  <!--ifless $numentries 1-->
  Sorry, that record does not exist<p>
  <!--endif exit-->

  Welcome <!--$user-->!<p>
  You have <!--$index:0--> credits left in your account.<p>

  <!--include /text/footer.html-->
  ```

  - 출처: [Lerdorf, Rasmus (2007). "Slide 3". slides for 'PHP on Hormones' talk. The PHP Group](http://talks.php.net/show/mysql07key/3)

---

### PHP 2.0 `PHP/FI` (1997년 11월 1일)

Rasmus Lerdorf는 PHP Tools를 배포함과 동시에 데이터베이스를 쉽게 사용할 방법을 찾고 있었고,
SQL 쿼리를 구문 분석하고 그 결과를 통해 양식과 테이블을 쉽게 만들 수 있도록 도와주는 새로운 CGI 도구를 만들었습니다.
`Form Interpreter`라 명명된 이 도구는 이후 PHP와 하나의 프로그램으로 결합되어 `Personal Home Page Construction Kit/Form Interpreter`라는 이름으로 완전히 재작성 되었습니다.

이 버전부터 프로그래밍 언어로 발전한 `PHP/FI`는 간단한 스크립트를 직접 HTML 파일에 배치할 수 있어, C와 Perl 언어로 CGI를 사용해 복잡하게 웹페이지를 작성하던 기존 방식에 비해 매우 쉬운 편이였습니다.
또한, 수많은 CGI 도구를 사용할 때와 달리 오버헤드가 많이 제거되어 웹페이지의 성능이 개선되었고, 기존 개발자가 쉽게 배울 수 있도록 의도적으로 C와 Perl의 구조와 유사하게 설계되었습니다.

- 변수명이 `$`로 시작하는 것과 모든 배열(array)이 연관 배열(map)로 작동한다는 점,
  문자열 결합을 `+`가 아닌 `.`로 한다는 점 등이 Perl의 영향을 받은 대표적인 문법입니다.

---

### PHP 3.0 `PHP` (1998년 6월 6일)

Andi Gutmans와 Zeev Suraski는 PHP/FI의 부족한 기능을 채우고, 엔진을 개선하기 위해 라스무스와 힘을 합쳐 프로그래밍 언어 개발에 협력했습니다.
이 새로운 버전의 이름은 `PHP`라는 약어를 그대로 사용하되, 개인 사용의 의미를 제거한 `PHP:Hypertext Preprocessor`의 재귀적 약어로 정해졌습니다.

PHP 3.0에 이르러 객체 지향 프로그래밍의 지원과 강력하고 일관화된 언어 구문으로 더욱 개선되었고, 이에 더해 강력한 확장성으로 수많은 모듈 개발자들의 유입을 불러왔습니다.
이 버전부터 우리가 아는 PHP와 유사한 모습을 갖추게 되었습니다.

---

### PHP 4.0 `PHP` [(2000년 5월 22일)](https://news-web.php.net/php.announce/22)

PHP 3.0이 공식적으로 출시된 직후 복잡한 애플리케이션의 성능을 개선하고 PHP 코드 베이스의 모듈성을 개선하기 위해 PHP 코어 재작성 작업이 시작되었습니다.
Andi Gutmans와 Zeev Suraski는 본인들의 이름 _Zeev_ 와 _Andi_ 로부터 따온 `Zend Engine`이라는 이름의 새로운 엔진을 만들어 냈고, 성능과 확장성을 크게 개선해 냈습니다.

더 많은 웹 서버, HTTP 세션, 출력 버퍼링, 사용자 입력을 처리하는 보다 안전한 방법 및 몇 가지 새로운 언어 구조에 대한 지원과 같은 기타 주요 기능이 포함된 4.0 버전은 꾸준히 업데이트되어,
CLI(Command Line Interface) 지원, `SuperGlobal`변수 지원 등 꾸준한 업데이트로 2008년 8월까지 유지보수 되었습니다.

---

### PHP 5.0 `PHP` [(2004년 7월 13일)](https://news-web.php.net/php.announce/50)

새로 출시된 Zend Engine 2.0으로 구동되는 PHP 5는 객체지향 프로그래밍에 대한 더 많은 지원과 수많은 기능의 추가와 성능 개선, 그리고 보안 강화가 이루어졌습니다.

- 주요 사항: 네임스페이스(Namespace), 코드 조각(trait), 삼항 연산자(`?:`), 제네레이터(Generators), 클로저(Native closures), 단축 배열 구문(`[]`), 상수(const),
  가변 길이 인수, PDO(PHP Data Object), JSON 함수, 내장 개발 서버, 가비지 컬렉션(Garbage Collection), Phar(php 묶음파일), SQLite3, ...

후속 버전인 PHP6의 개발이 2005년부터 시작되어 유니코드를 기반으로 작동하도록 설계하였는데, 이때 `UTF-16`를 차기 유니코드 인코딩으로 채택해 개발하는 사이,
웹의 표준 유니코드 인코딩 방식이 `UTF-8`로 굳혀지면서 개발자들의 참여가 저조해졌기 때문에 개발이 지체되다 결국 2010년 취소되었습니다.

이후 2015년까지 10년 동안 PHP5 버전에 머무르게 되면서 PHP6에 추가하기 위해 논의되었던 많은 기능이 PHP5 버전에 통합되었지만,
10년이라는 기간 동안 큰 개선이 없던 엔진에 의해 다른 언어에 비해 성능 부분에서 크게 밀려나게 되었습니다.

PHP6부터 지원할 예정이었던 유니코드 기능을 5.4에 병합하며 UTF-8을 기본 인코딩으로 채택해 다시 사용자들을 유지하며 2014년 8월 28일 PHP 5.6까지 출시했습니다.

---

### PHP 7.0 `PHP` [(2015년 12월 3일)](https://news-web.php.net/php.announce/167)

PHP6으로 출시 예정이었던 차기 버전이 지체되어 10년이 지난 탓에 다음 버전의 이름을 어떻게 정할지에 대한 논의가 활발히 일어났었습니다.
긴 시간 동안 PHP6이 출시되지 않았던 탓에 PHP6을 대상으로 계획되었던 많은 기능들이 5.x 버전에 통합되어버린 상황이었습니다.
문제는 이렇게 추가된 기능들을 PHP6이라고 지칭하는 많은 자료들이 존재하게 되었기 때문에, PHP6이라는 버전을 사용하면 큰 혼동을 야기할 수 있다는 우려가 많았습니다.

특히 PHP6은 실패한 버전이라는 이미지가 너무 강하다는 주장이 힘을 얻어 결국 [투표 결과](https://wiki.php.net/rfc/php6) PHP7이 새로운 릴리즈의 이름으로 채택되었습니다.

- 동적 언어의 세계에는 `버전6이 저주받았다`는 미신이 있습니다. 출시되지않은 `MySQL 6`과 실패한 `Perl 6`, 그리고 당사자인 `PHP 6`
- 그리고 사실 이미 많은 프로젝트가 여러 이유로 메이저 버전을 건너뛰었기 때문에 크게 상관이 없어 보이기도 했습니다.

PHP7의 기반은 _"차세대 PHP" `phpng`_ 라고 불렸던 PHP 브랜치입니다.
Dmitry Stogov, Xinchen Hui, Nikita Popov가 참여한 이 브랜치의 목적은 완전한 언어 호환성을 유지하면서 PHP의 성능을 최적화하는 것이었습니다.
이를 위해 Zend 엔진을 리팩토링해 성능은 PHP5.6 대비 2배 향상되고, 메모리 사용량은 80% 감소되었습니다.

오랜 기간에 쌓여온 레거시 프로젝트들이 많은 탓에 이 버전부터를 `ModernPHP`라고 부르기도 합니다.

- 주요 사항 :
  - 함수의 인수와 반환 타입, 클래스의 프로퍼티 타입 명시 지원
  - 치명적인 문제를 일으킬 수 있었던 다양한 오류 매커니즘을 `try-catch`가 가능한 예외(Exception)으로 대체
  - 화살표 함수(람다식), 널 병합 연산자(`??`), 우주선 연산자(`<=>`), 문자열 음수 오프셋, 익명 클래스, 네임스페이스 그룹화 등 다양한 문법 추가

---

### PHP 8.0 `PHP` [(2020년 11월 26일)](https://www.php.net/releases/8.0/en.php)

PHP7부터 준비해 온 `JIT`(Just-In-Time) 컴파일러가 도입되어 다시 성능이 2배 상승되었습니다.
또한, 읽기 전용 접근자(readonly), 열거형(Enum) 지원, `match`표현식, 널 세이프 연산자 (`?->`), `Attributes` (Java의 Anotation) 등 다양한 기능이 추가되었고,
PHP7에 이어 더 다양한 오류가 예외로 변경되었고, `assert`와 같은 예외 처리와 관련된 요소들이 개선되었습니다.

---

## 🖐️마침

이 포스트를 작성하기 위해 많은 문서와 글들을 보며 최대한 정확한 내용으로 작성하려고 노력했지만,
혹시라도 잘못된 정보가 있다면 댓글로 지적해주시면 확인하는대로 정정하도록 하겠습니다.

일단 이 포스트에선 이렇게 큰 틀의 변화만 작성하고 마무리 하도록 하겠습니다.
다음에 시간이 된다면 각 버전마다의 세세한 변경사항을 정리하는 포스트를 작성해보도록 하겠습니다.

## :pushpin: 참고 문헌

- [https://en.wikipedia.org/wiki/PHP](https://en.wikipedia.org/wiki/PHP)
- [https://www.php.net/manual/en/history.php.php](https://www.php.net/manual/en/history.php.php)
- [https://www.php.net/manual/phpfi2.php](https://www.php.net/manual/phpfi2.php)
- [https://www.php.net/manual/php3.php](https://www.php.net/manual/php3.php)
