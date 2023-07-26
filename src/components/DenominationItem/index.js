// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {denominationDetails, updateBalance} = this.props
    const {value} = denominationDetails
    const onWithdraw = () => {
      updateBalance(value)
    }
    return (
      <li className="button-container">
        <button type="button" className="button" onClick={onWithdraw}>
          <p>{value}</p>
        </button>
      </li>
    )
  }
}

export default DenominationItem
