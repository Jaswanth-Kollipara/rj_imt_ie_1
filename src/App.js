import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, Input} from './styledComponents'
import './App.css'

class App extends Component {
  state = {
    bold: false,
    italic: false,
    under: false,
    input: '',
  }

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnder = () => {
    this.setState(prevState => ({under: !prevState.under}))
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {bold, italic, under, input} = this.state

    return (
      <>
        <div>
          <h1>Text Editor</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </div>
        <div className="con">
          <ul>
            <li>
              <Button
                data-testid="bold"
                selected={bold}
                onClick={this.onClickBold}
              >
                <VscBold size={25} />
              </Button>
            </li>
            <li>
              <Button
                data-testid="italic"
                selected={italic}
                onClick={this.onClickItalic}
              >
                <GoItalic size={25} />
              </Button>
            </li>
            <li>
              <Button
                data-testid="underline"
                selected={under}
                onClick={this.onClickUnder}
              >
                <AiOutlineUnderline size={25} />
              </Button>
            </li>
          </ul>
          <hr />
          <Input
            type="textarea"
            cols="24"
            rows="10"
            bold={bold}
            italic={italic}
            under={under}
            value={input}
            onChange={this.onChangeInput}
          ></Input>
        </div>
      </>
    )
  }
}

export default App
