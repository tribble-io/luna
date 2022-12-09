import React, { useState, useEffect } from 'react'
const prepositions = [
  'без',
  'под',
  'и',
  'или',
  'в',
  'по',
  'на',
  'о',
  'про',
  'с',
]

function addNbsp(str) {
  return str.replace(
    /(\S+?)( )/g,
    (_, p) => p + (prepositions.includes(p.toLowerCase()) ? '\u00A0' : ' ')
  )
}

export function TextFormatter(props) {
  const [newText, setNewText] = useState('')
  const text = props.children

  useEffect(() => {
    setNewText(addNbsp(text))
  }, [text])

  return <>{newText}</>
}

// The function TextFormatter takes a string, replaces an ordinary space with a non-breaking space after the specified words
// *const prepositions* and returns the result
