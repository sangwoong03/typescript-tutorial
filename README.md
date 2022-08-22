## 레포지토리 개요

해당 레포지토리는 `Typescript` 튜토리얼 레포지토리입니다.

<br>
<br>

### ✅ Typescript 개요

- 오픈소스 프로그래밍 언어
- `Javascript`의 상위 집합으로 ECMA스크립트의 최신 표준을 지원
- 정적인 언어로 컴파일 시간에 타입을 검사
- 장점
    - 강력한 타입으로 대규모 어플리케이션 개발에 용이하다.  
      (여러명이 개발할 때 특정 메서드에서 요구하는 데이터 타입을 통일할 수 있다.)
    - 유명한 Javascript 라이브러리와의 호환으로 편리한 개발이 가능하다.
    - 개발 도구에서의 강력한 지원이 뒷받침된다.

- Typescript Compiler는 Node.Js 기반으로 구동되기 때문에 `Node.Js`를 설치해주어야 한다.

<br>
<br>

### ✅ 개발환경 구축

1. Node.Js 설치

2. 개발 프로젝트 생성

3. `typescript` 설치

global (전역) 설치

```
(sudo) npm install typescript -g
```

4. 컴파일

```
tsc 컴파일대상파일.ts
```

이후 js 파일 생성 확인

<br>
<br>

### ✅ 컴파일 설정: tsconfig.json

- Typescript compilier의 기본 설절을 할 수 있는 파일입니다.
- 명령어를 통한 `tsconfig.json` 파일 설치
```
npx tsc --init
```

- 최상위루트의 `tsconfig.json` 파일을 참고해주세요.
- 기본 설정 속성에 대한 설명만 포함되어 있습니다.  
  자세한 설명은 [공식문서](https://www.typescriptlang.org/ko/docs/handbook/tsconfig-json.html)를 확인해주세요.

- 기본 설정 이후 해당 명령어를 통해 컴파일하기
```
tsc
```

<br>
<br>

### ✅ 변수선언

`Typescript`는 `Javascript`의 상위 집합이므로 `var`, `let`, `const` 키워드를 통해 변수를 선언할 수 있습니다.

```
함수 단위 scope : var
블록 단위 scope:: let, const
```

다만, 일반적인 `Javscript`의 변수 선언 방식과 달리 `Typescript`에서는 다음 방식이 적용됩니다.

1. 변수를 선언하고 값을 할당하였다면, 값의 데이터 타입이 변수의 타입으로 지정됩니다. 
2. 만약 아무런 값을 할당하지 않았다면 (let, var의 경우),  
  - 타입 지정하지 않은 경우: `any` 타입으로 어떠한 값을 할당할 수 있습니다.
  - 타입을 지정한 경우: 지정한 데이터 타입의 값만 할당할 수 있습니다.

자세한 내용은 [블로그](https://velog.io/@sangwoong/JS-TS-variables)를 확인해주세요.

<br>
<br>

### ✅ 기본 타입

`Typescript`는 기본적으로 `Javascript`의 원시형 및 객체 타입을 지원합니다.

``` typescript
let numValue: number; // int, float, decimal
let strValue: string; // "", '', template literal
let booleanValue: boolean; // true or false
let undefinedValue: undefined;
let nullValue: null; 
let objectValue: object;
let symbolValue: symbol;
```

📌 `undefined`와 `null`
- 모든 데이터타입의 하위 타입입니다.
그렇기 때문에 `number`, `string`, `boolean` 타입으로 지정된 변수에 `undefined`, `null`을 할당할 수 있습니다.

- 반면, `any`는 모든 데이터타입의 상위 타입입니다.
위에서 설명한 7가지 데이터 타입의 값을 모두 할당할 수 있습니다.

📌 `object` 
- 원시형 데이터 타입은 값으로 할당할 수 없으며, `{} 중괄호`로 감싼 데이터를 할당할 수 있습니다.

- `new String()`은 object 타입을 반환하기 때문에 변수에 할당할 수 있습니다.

- `Inline Type` 설정
  ``` Typescript
  let object1: { name: string, age: number };
  object1 = {
    name = "sangwoong",
    age = 27
  }
  ```

📌 `array`
- 배열을 데이터 타입으로 선언하는 방법은 다음 방식이 있습니다.
```typescript
let stringArr: string[];
let anyArr: any[];
```
- `stringArr: string:[]`
  - 배열의 각 요소로 문자열 (숫자 지정 시 숫자) 형태의 데이터만 넣을 수 있습니다.
  ``` typescript
  stringArr = ["1", "2", "3"] // 가능
  stringArr.push("String") // 가능
  stringArr = [1, 2, 3] // 불가능 
  ```
- `anyArr: any[]`
  - 각 요소로 모든 타입의 데이터를 넣을 수 있습니다.
  ```typescript
  anyArr = [1, "String", true]
  anyArr.push(5)
  ```

📌 `tuple`
  - 배열을 지정하는 방식과 비슷합니다.
  - 하지만 `tuple` 타입은 지정한 원소의 개수만큼의 데이터를 할당할 수 있습니다.
  ``` typescript
  let tupleTwo: [number, string]
  tupleTwo = [27, "sangwoong"]

  let tupleThree: [number, string, string]
  tupleThree = [27, "sangwoong", "Kim"]
  ```

📌 `Alias (별칭)`

- `Alias`는 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미합니다.
- 반복되는 타입 설정을 줄일 수 있습니다.
``` typescript
type User = {
  name: string,
  age?: number // optional type
}

const user1: User = {
  name: "sangwoong",
  age: 27
}
```