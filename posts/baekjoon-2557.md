---
title: "백준 2557 :: Hello World"
summary: "백준 단계별로 문제 풀기 - 01단계 01번 문제: Hello World"
date: 2022-11-04 12:55:00
tags: [baekjoon, algorithm, cpp, php, javscript]
---

## 문제

Hello World!를 출력하시오.

## 입력

없음

## 출력

Hello World!를 출력하시오.

```예제_입력

```

```예제_출력
Hello World!
```

## 알고리즘 분류

- 구현

---

## 풀이

단순히 Hello World! 를 출력하면 된다

```php
<? echo "Hello World!";
```

> 사실 php는 `<?` 태그로 열지 않으면 문자 그대로 출력하기 때문에 아래 코드도 정답으로 처리된다
> ```php
> Hello World!
> ```

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    return 0;
}
```

```javascript
console.log("Hello World!");
```