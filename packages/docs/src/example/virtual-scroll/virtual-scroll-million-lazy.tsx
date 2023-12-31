import { CodeExample } from '../../components/code-example'
import { GVirtualScroll, GVirtualList } from '@lingjhf/guava'

const VirtualScrollMillionLazy = () => {
  const code = `
  `
  const items = Array.from({ length: 1000000 }).map((_, index) => ({ key: `${index + 1}`, height: 20 }))
  return (
    <CodeExample code={code} language='jsx'>
      <div class='h-300px'>
        <GVirtualScroll>
          <GVirtualList items={items}>{
            (key) => {
              return <div class='bg-[var(--bg-brand-light-default)] h-16px text-12px flex items-center justify-center'>{key}</div>
            }
          }</GVirtualList>
        </GVirtualScroll>
      </div>
    </CodeExample>
  )
}

export default VirtualScrollMillionLazy