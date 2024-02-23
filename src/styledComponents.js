import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => (props.selected ? '#faff00' : '#f1f5f9')};
`
export const Input = styled.input`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.under ? 'underline' : 'normal')};
  color: #ffffff;
`
