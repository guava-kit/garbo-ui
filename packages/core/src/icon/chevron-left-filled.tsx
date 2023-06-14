import type { JSX } from 'solid-js'

export function ChevronLeftFilled(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16' {...props}>
      <path d='M10.5303 2.46967C10.8232 2.76256 10.8232 3.23744 10.5303 3.53033L6.06066 8L10.5303 12.4697C10.8232 12.7626 10.8232 13.2374 10.5303 13.5303C10.2374 13.8232 9.76256 13.8232 9.46967 13.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967L9.46967 2.46967C9.76256 2.17678 10.2374 2.17678 10.5303 2.46967Z' fill='currentColor' fill-opacity='0.85' />
    </svg>
  )
}