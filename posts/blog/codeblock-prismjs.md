---
title: '블로그 :: 코드 블럭 하이라이팅'
summary: 'prism.js 테스트 포스트'
date: 2022-10-28 12:00:00
tags: [blog, mdsvex]
---

[mdsvex](https://mdsvex.com)는 기본적으로 [prism.js](https://prismjs.com)를 통해 코드 블럭의 하이라이팅을 지원합니다.  
아래 내용은 코드 블럭 하이라이팅을 테스트하기 위해 일부 작성되었습니다.

---

> ### php
>
> ```php
> <?php
> echo "Hello World!";
> ?>
> ```

> ### html
>
> ```html
> <h1>Hello World!</h1>
> ```

> ### css
>
> ```css
> h1 {
>   color: red;
> }
> ```

> ### js
>
> ```js
> console.log('Hello World!');
> ```

> ### json
>
> ```json
> {
>   "name": "Hello World!"
> }
> ```

> ### bash
>
> ```bash
> echo "Hello World!"
> ```

> ### python
>
> ```python
> print("Hello World!")
> ```

> ### java
>
> ```java
> public class HelloWorld {
>    public static void main(String[] args) {
>        System.out.println("Hello World!");
>    }
> }
> ```

> ### c
>
> ```c
> #include <stdio.h>
>
> int main() {
>    printf("Hello World!");
>    return 0;
> }
> ```

> ### cpp
>
> ```cpp
> #include <iostream>
>
> int main() {
>    std::cout << "Hello World!";
>    return 0;
> }
> ```

> ### csharp
>
> ```csharp
> using System;
>
> namespace HelloWorld {
>    class Program {
>        static void Main(string[] args) {
>            Console.WriteLine("Hello World!");
>        }
>    }
> }
> ```

> ### go
>
> ```go
> package main
>
> import "fmt"
>
> func main() {
>    fmt.Println("Hello World!")
> }
> ```

> ### kotlin
>
> ```kotlin
> fun main() {
>    println("Hello World!")
> }
> ```

> ### swift
>
> ```swift
> print("Hello World!")
> ```

> ### ruby
>
> ```ruby
> puts "Hello World!"
> ```

> ### rust
>
> ```rust
> fn main() {
>    println!("Hello World!");
> }
> ```

> ### scala
>
> ```scala
> object HelloWorld {
>    def main(args: Array[String]) {
>        println("Hello World!")
>    }
> }
> ```

> ### sql
>
> ```sql
> SELECT * FROM table;
> ```

> ### diff
>
> ```diff
> - This is a red text
> + This is a green text
> ! This is an strong text
> This is normal text
> ```
