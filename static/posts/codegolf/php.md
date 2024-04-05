---
title: 'PHP로 숏코딩 하기'
summary: 'PHP에서 사용 가능한 여러 숏코딩 방식을 서술합니다'
date: 2022-11-09 12:43:00
tags: [ php, codegolf ]
draft: true
---

## 01. 출력 짧게하기

PHP에선 콘솔에 문자를 출력할 수 있는 다양한 방법이 있다.

1. 키워드: `echo`, `print` **(함수가 아니라 키워드입니다)**
2. 함수: `print_r`, `sprintf`, `vprintf`, `vsprintf`, ...

이 중 주로 사용되는 것은 값을 그대로 출력하는 `echo`와 `print` 키워드이다.

> 이 두 키워드를 함수로 오해하여 `()`를 붙여 사용하는 경우도 있지만 키워드이기 때문에 `()`가 불필요하다.
>
> ```php
> echo("Hello World!"); //정상 출력
> echo "Hello World!"; //정상 출력
> ```

하지만 두 키워드의 작동 방식에는 몇가지 차이점이 있다.  
`echo`는 여러 개의 값을 출력할 수 있고, `print`는 한 개의 값을 출력할 수 있다.

````PHP

## 입력

없음

## 출력

Hello World!를 출력하시오.

```예제_입력

````

```예제_출력
Hello World!
```

## 알고리즘 분류

- 구현

---

## 풀이

단순히 Hello World! 를 출력하면 된다

```PHP
<? echo "Hello World!";
```

> 사실 php는 `<?` 태그로 열지 않으면 문자 그대로 출력하기 때문에 아래 코드도 정답으로 처리된다
>
> ```PHP
> Hello World!
> ```

```C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    return 0;
}
```

```JavaScript
console.log("Hello World!");
```
