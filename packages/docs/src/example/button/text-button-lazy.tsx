import { CodeExample } from '../../components/code-example'
import { GButton } from '@lingjhf/guava'

const code = `
export const Example = () => {
  return (
    <div>
      <GButton variant='text'>Button</GButton>
      <GButton type='success' variant='text'>Button</GButton>
      <GButton type='warn' variant='text'>Button</GButton>
      <GButton type='danger' variant='text'>Button</GButton>
    </div>
  )
}
`
const TextButtonLazy = () => {
  return (
    <CodeExample code={code} language='jsx'>
      <div class='flex'>
        <div class='m-2'>
          <GButton variant='text'>Button</GButton>
        </div>
        <div class='m-2'>
          <GButton type='success' variant='text'>Button</GButton>
        </div>
        <div class='m-2'>
          <GButton type='warn' variant='text'>Button</GButton>
        </div>
        <div class='m-2'>
          <GButton type='danger' variant='text'>Button</GButton>
        </div>
      </div>
    </CodeExample>
  )
}

export default TextButtonLazy