import { useState, forwardRef, useMemo, useCallback, useImperativeHandle, memo, useRef, useEffect } from 'react'
import type { JSX } from 'react'
import { useFocusController, useId } from '@pixel-ui-react/hooks'

import { PxIcon } from '../Icon'
import type { InputExpose, InputProps } from './types'
import styles from './style.module.css'

const Input = forwardRef<InputExpose, InputProps>((props: InputProps, ref: React.Ref<InputExpose>): JSX.Element => {
  const {
    id,
    value,
    type = 'text',
    rows,
    cols,
    wrap = 'soft',
    maxLength,
    minLength,
    size = 'default',
    disabled = false,
    clearable = false,
    showPassword = false,
    placeholder,
    readonly = false,
    autocomplete = 'off',
    autofocus = false,
    form,
    prefix,
    suffix,
    prepend,
    append,
    className,
    style,
    onChange,
    onInput,
    onFocus,
    onBlur
  } = props

  const inputId = useId()
  const [innerValue, setInnerValue] = useState(value)
  const [pwdVisible, setPwdVisible] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const _ref = useMemo(() => inputRef || textareaRef, [inputRef.current, textareaRef.current])
  // focusController 获取状态
  const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
    _ref as React.RefObject<HTMLInputElement | HTMLTextAreaElement>,
    {
      onFocus,
      onBlur,
      afterBlur() {
        // form 校验
        // formItem?.validate('blur').catch((err) => debugWarn(err))
      }
    }
  )

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(event.target.value)
    onInput?.(event.target.value)
  }, [onInput])

  const handleTextareaInput = useCallback((event: React.FormEvent<HTMLTextAreaElement>) => {
    setInnerValue((event.target as HTMLTextAreaElement).value)
    onInput?.((event.target as HTMLTextAreaElement).value)
  }, [onInput])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(event.target.value)
  }, [onChange])

  // 清除按钮显示
  const showClear = useMemo(() => (
    clearable &&
    !!innerValue &&
    !disabled &&
    isFocused
  ), [clearable, innerValue, disabled, isFocused])

  // 显示密码
  const showPwdArea = useMemo(() => (
    type === 'password' &&
    showPassword &&
    !disabled &&
    !!innerValue
  ), [type, showPassword, disabled, innerValue])

  const classNames = [
    className,
    styles['px-input'],
    type ? styles[`px-input--${type}`] : '',
    size ? styles[`px-input--${size}`] : '',
    disabled ? styles['is-disabled'] : '',
    prepend ? styles['is-prepend'] : '',
    append ? styles['is-append'] : '',
    prefix ? styles['is-prefix'] : '',
    suffix ? styles['is-suffix'] : '',
    suffix ? styles['is-focus'] : '',
  ].filter(Boolean).join(' ')

  // pwd 可见切换
  const togglePwdVisible = useCallback(() => {
    setPwdVisible(!pwdVisible)
  }, [pwdVisible, setPwdVisible])

  const focus = useCallback(() => {
    _ref.current?.focus()
  }, [_ref])
  const blur = useCallback(() => {
    _ref.current?.blur()
  }, [_ref])
  const select = useCallback(() => {
    _ref.current?.select()
  }, [_ref])

  const clear = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setInnerValue('')
    onChange?.('')
    // 继续聚焦
    // focus()
  }, [focus])

  useImperativeHandle<InputExpose, InputExpose>(ref, () => ({
    // _ref,
    focus,
    blur,
    select,
    clear,
  }), [])

  useEffect(() => {
    setInnerValue(value)
  }, [value])

  return (
    <div
      className={classNames}
      style={style}
    >
      {type !== 'textarea' ? (
        <>
          {prepend ? (
            <div className={styles['px-input__prepend']}>
              {prepend}
            </div>
          ) : null}
          <div className={styles['px-input__wrapper']} ref={wrapperRef}>
            {prefix ? (
              <span className={styles['px-input__prefix']}>
                {prefix}
              </span>
            ) : null}
            <input
              className={styles['px-input__inner']}
              ref={inputRef}
              id={id || inputId}
              type={showPassword ? (pwdVisible ? 'text' : 'password') : type}
              disabled={disabled}
              readOnly={readonly}
              autoComplete={autocomplete}
              placeholder={placeholder}
              autoFocus={autofocus}
              form={form}
              value={innerValue}
              maxLength={maxLength}
              minLength={minLength}
              onInput={handleInput}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {suffix || showClear || showPwdArea ? (
              <span className={styles['px-input__suffix']}>
                {suffix}
                {showClear && (
                  <PxIcon
                    icon="times-circle"
                    className={styles['px-input__clear']}
                    onClick={clear}
                    onMouseDown={e => e.preventDefault()}
                  />
                )}
                {showPwdArea && pwdVisible && (
                  <PxIcon
                    icon="eye"
                    className={styles['px-input__password']}
                    onClick={togglePwdVisible}
                  />
                )}
                {showPwdArea && !pwdVisible && (
                  <PxIcon
                    icon="eye-cross"
                    className={styles['px-input__password']}
                    onClick={togglePwdVisible}
                  />
                )}
              </span>
            ) : null}
          </div>
          {append ? (
            <div className={styles['px-input__append']}>
              {append}
            </div>
          ) : null}
        </>
      ) : (
        <>
          <textarea
            className={styles['px-textarea__wrapper']}
            ref={textareaRef}
            id={id || inputId}
            disabled={disabled}
            readOnly={readonly}
            autoComplete={autocomplete}
            placeholder={placeholder}
            autoFocus={autofocus}
            form={form}
            value={innerValue}
            maxLength={maxLength}
            minLength={minLength}
            rows={rows}
            cols={cols}
            wrap={wrap}
            onInput={handleTextareaInput}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
        </>
      )
      }
    </div >
  )
})

Input.displayName = 'PxInput'

export default memo(Input)