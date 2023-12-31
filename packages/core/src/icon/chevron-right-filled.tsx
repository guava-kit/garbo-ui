import type { JSX } from 'solid-js'

export function ChevronRightFilled(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16' {...props}>
      <path d='M5.46967 2.46967C5.17678 2.76256 5.17678 3.23744 5.46967 3.53033L9.93934 8L5.46967 12.4697C5.17678 12.7626 5.17678 13.2374 5.46967 13.5303C5.76256 13.8232 6.23744 13.8232 6.53033 13.5303L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967Z' fill='currentColor' fill-opacity='0.85' />
    </svg>
  )
}