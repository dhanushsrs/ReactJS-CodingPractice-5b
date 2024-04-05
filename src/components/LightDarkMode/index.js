// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
    lightTheme: 'light-card-container',
    darkTheme: 'dark-card-container',
    darkHeading: 'dark-heading',
    lightHeading: 'light-heading',
  }

  onDarkMode = () => {
    this.setState(preState => ({isDarkMode: !preState.isDarkMode}))
  }

  render() {
    const {isDarkMode, lightTheme, darkTheme, lightHeading} = this.state
    const {darkHeading} = this.state

    let themeBtn
    let themeBg
    let themeHeading

    if (isDarkMode) {
      themeBtn = 'Light Mode'
      themeBg = `${darkTheme}`
      themeHeading = `${darkHeading}`
    } else {
      themeBtn = 'Dark Mode'
      themeHeading = `${lightHeading}`
      themeBg = `${lightTheme}`
    }

    return (
      <div className="bg-container">
        <div className={`${themeBg}`}>
          <h1 className={`${themeHeading}`}>Click To Change Mode</h1>
          <div className="btn-container">
            <button className="button" type="button" onClick={this.onDarkMode}>
              {themeBtn}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
