---
title: '📝 mdsvex에 정보 블럭을 추가했어요'
summary: ''
date: 2022-12-02 17:47:00
tags: [ 블로그 ]
---

블로그에 [remark-admonitions](https://www.npmjs.com/package/remark-admonitions)를
추가했습니다.

이제 블로그 포스트에서 아래와 같은 문법으로 정보 블럭을 사용할 수 있습니다.

```markdown
\:::{type} {Title}
{Something}
\:::
```

---

## Default Hint Block

:::info Information
`info` : 일반 정보나 팁 정보
:::

:::help Helpppppp
`help` : 안내 사항이나 도움말
:::

:::warning Warning
`warning` : 약한 경고나 주의사항
:::

:::danger Dangerous
`danger` : 강한 경고나 금지사항
:::

:::success Success :smile:
`success` : 성공이나 정답 긍정적인 내용
:::

:::failure Failure :cry:
`failure` : 실패나 오답 부정적인 내용
:::

---

## BOJ Hint Block

:::boj-input 예제 입력
:::

:::boj-output 예제 출력

```text
Hello World!
```

:::

:::boj-code PHP

```php
<?
echo "Hello World!";
```

:::
