---
title: "백준 1008 :: A/B"
summary: "백준 단계별로 문제 풀기 - 01단계 05번 문제: A/B"
date: 2022-11-04 14:02:00
tags: baekjoon, algorithm, cpp, php, javscript
---

## 문제

두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

## 출력

첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.

```예제_입력_1
1 3
```

```예제_출력_1
0.33333333333333333333333333333333
```

```예제_입력_2
4 5
```

```예제_출력_2
0.8
```

## 알고리즘 분류

- 수학
- 구현
- 사칙연산

<br/>
<hr/>
<br/>

## 풀이

한줄로 입력된 두 숫자를 구하고 결과를 출력한다

```php
<?
fscanf(STDIN, "%d %d", $a, $b);
echo $a / $b;
```

출력 소수 자릿수가 9개 이상 나와야하기 때문에 `iomanip`의 `setprecision`을 사용해야한다

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main(){
  double a, b;
  cin >> a >> b;
  cout << setprecision(9) << a / b;

  return 0;
}
```

> 사실 그냥 `scanf`와 `printf`를 사용하는 방법이 더 간단하다
> ```cpp
> #include <ios>
> 
> int main(){
>   double a, b;
>   scanf("%lf %lf", &a, &b);
>   printf("%.9lf", a / b);
> 
>   return 0;
> }
> ```
>
>
>
>

```javascript
const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
const a = parseInt(inputData[0]), b = parseInt(inputData[1]);
console.log(a / b);
```