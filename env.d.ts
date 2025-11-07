declare const PROD: boolean
declare const DEV: boolean
declare const TEST: boolean

// CSS Modules 类型声明
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.css' {
  const content: string
  export default content
}

// Testing Library Jest DOM 类型声明
import '@testing-library/jest-dom'