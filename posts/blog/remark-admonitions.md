---
title: '블로그 :: 정보 블럭 기능 추가'
summary: 'remark-admonitions 테스트 포스트'
date: 2022-12-02 17:47:00
tags: [blog, mdsvex]
---

블로그에 [remark-admonitions](https://www.npmjs.com/package/remark-admonitions)를 추가했습니다.

이제 블로그 포스트에서 아래와 같은 문법으로 정보 블럭을 사용할 수 있습니다.

```markdown
\:::{type} {Title}
{Something}
\:::
```

---

지원하는 블럭은 아래와 같습니다.

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
