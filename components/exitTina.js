import * as React from 'react'
import { useCMS } from 'tinacms'
import {Button} from "@chakra-ui/react"
// <ExitButton /> is assumed to be nested inside of the <TinaProvider> context
export default function ExitTina() {
  const cms = useCMS()
  if(cms.enabled){
  return (
    <Button size="lg" minW="210px" bg="primary.400" color="white" height="14" px="8"  _hover={{
      bg: 'primary.100', color:"black",
    }} onClick={() => cms.toggle()}>
      {cms.enabled ? `Exit Tina` : `Edit with Tina`}
    </Button>
  )
  }
  else{
      return(<div></div>)
  }
}