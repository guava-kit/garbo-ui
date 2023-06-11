import { Show, createEffect, createSignal } from 'solid-js'
import { CheckFilled } from '../icon/check-filled'
import { ComponentPropsWithChildren } from '../types'
import { customEventHandlersName, generateProps } from '../utils'
import styles from './checkbox.module.css'

export interface CheckboxProps extends ComponentPropsWithChildren<HTMLDivElement> {
  size: number
  checked: boolean
  indeterminate: boolean
  disabled: boolean
}
export const Checkbox = (propsRaw: Partial<CheckboxProps>) => {
  const [eventHandlers, props] = generateProps(
    propsRaw,
    {
      size: 16,
      checked: false,
      indeterminate: false,
      disabled: false,
    },
    customEventHandlersName
  )

  const [checked, setChecked] = createSignal(false)

  createEffect(() => {
    setChecked(props.checked)
  })

  const checkStyles = () => {
    return `--checkbox-font-size:${props.size}px;${props.style}`
  }

  const checkClasses = () => {
    let classes = `${props.class} ${styles.gCheckbox}`
    if (checked()) {
      classes += ` ${styles.gCheckboxChecked}`
    } else if (props.indeterminate) {
      classes += ` ${styles.gCheckboxIndeterminateBorder}`
    }
    return classes
  }

  function checkedChange() {
    setChecked(!checked())
  }

  return (
    <div
      class={checkClasses()}
      classList={props.classList}
      style={checkStyles()}
      ref={props.ref}
      {...eventHandlers}
      onClick={checkedChange}
    >
      <Show when={checked()}>
        <CheckFilled class={styles.gCheckboxIcon} />
      </Show>
      <Show when={!checked() && props.indeterminate}>
        <div class={styles.gCheckboxIndeterminate}></div>
      </Show>
    </div>
  )
}