import * as React from 'react'
import { useCMS } from 'tinacms'

// <ExitButton /> is assumed to be nested inside of the <TinaProvider> context
export default function ExitTina() {
  const cms = useCMS()
  if(cms.enabled){
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? `Exit Tina` : `Edit with Tina`}
    </button>
  )
  }
  else{
      return(<div></div>)
  }
}