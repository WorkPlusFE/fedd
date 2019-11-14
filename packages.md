---
sidebar: auto
---

# 公共库/工具

## @w6s

`@w6s` 为团队所使用的默认 [npm-scope](https://docs.npmjs.com/misc/scope), 所有以团队名义发布到 npm 的包，名字都应该以 @w6s/[package-name] 的方式命名！如：`@w6s/fedd`。

<hr>

### [codash](https://github.com/WorkPlusFE/codash。) 
<a href="https://www.npmjs.com/package/@workplus/codash"><img alt="npm" src="https://img.shields.io/npm/v/@workplus/codash.svg?style=flat-square"></a> 

> A Cordova utility library. 

* 可配置，易用，轻松实现cordova promisify;
* 可添加拦截器，处理流程更方便；
* 接口可模拟，无需写两套同名方法；
* 提供常用方法，如绑定物理返回按钮，文件上传下载等。

<hr>

### [vddl](https://github.com/hejianxian/vddl)

> Vue components for modifying lists with the HTML5 drag & drop API. 

* Supports VueJs versions 1.0 and 2.0
* Supports all modern browsers and Internet Explorer 9+
* Supports nested lists for building trees and other fancy structures

<hr>

### [compare-versions](https://github.com/WorkPlusFE/compare-versions)

> A simple version comparison tool.

The comparison principle is very simple, the version string is converted into a string of the same length, the default is 10, and then directly determine the size. But if the version of the type is inconsistent, such as 3.13.1 and 3.14, may get unexpected results, So, please make sure the version type you entered is the same.

`'3.13.1' => '0000000003.0000000013.0000000001'`

Judgment rules and return results are as follows:

* if a > b, return 1
* if a === b, return 0
* if a < b, return -1
* if (versions type is inconsistent) return null

<hr>

### [simple-storage](https://github.com/WorkPlusFE/simple-storage)

> Base on localStorage and sessionStorage.

<hr>

### [query-string](https://github.com/WorkPlusFE/query-string)

> Parse and stringify URL

<hr>

### [escape](https://github.com/WorkPlusFE/escape)

> Toggle escape string and object for use in HTML. 

<hr>