---
title: '📝 Giscus로 댓글 시스템을 추가해보자!'
summary: 'SvelteKit으로 제작된 블로그에 Gisus를 이용해 댓글 시스템을 추가하는 과정에 대해 설명합니다.'
date: 2023-01-20 17:41:00
tags: [블로그]
draft: true
---

![I NEED TO TALK TO YOU ABOUT THIS POST](comment-via-giscus_title.gif)
_I NEED TO TALK TO YOU ABOUT THIS POST_

## ❕ 블로그에 댓글 시스템이 없다구요?

천천히 블로그를 디자인하고 구조를 잡아가던 도중 댓글 시스템이 없다는 사실을 깨달았습니다 😧  
댓글 시스템 자체가 없어 제 게시글에 대해 할말이 있거나 궁금한게 생긴 분들과 소통이 아예 불가능하다는 문제가 있었죠  
~~언젠가 생길~~ 블로그 이용객과 댓글러들을 위해 미리미리 블로그에 댓글 시스템을 추가해야겠다는 생각이 들었습니다.

---

## ❔ 어떤 댓글 시스템을 사용할 건가요?

제 블로그는 현재 깃헙 페이지를 통해 정적 페이지로 제공되고 있어요.
제가 서버 유지·운영까지 신경쓰면서는 블로그를 시작도 못할 것 같다는 생각 때문이였죠.
이런 상황에 댓글 시스템을 위해 이제와서 백엔드 서버를 구성하는 건 계획을 벗어나는 일이죠.

다행히도 우리 개발자 세상을 널리 이롭게 하기 위해 활동 중이신 분들이 분들이 정적 페이지에서도 사용 가능한 여러 댓글 시스템을 만들어 두셨습니다.  
특히 아예 깃헙 페이지로 제작된 블로그를 대상으로 한 댓글 시스템이 여러가지 있더라구요!

SvelteKit으로 제작된 블로그에 Gisus를 이용해 댓글 시스템을 추가하는 과정에 대해 설명합니다.
정적 페이지에 추가할 수 있는 여러 댓글 시스템을 확인해 본 결과 Giscus가 가장 마음에 들었기 때문에 Giscus를 사용하기로 결심했습니다ㅎㅎ
