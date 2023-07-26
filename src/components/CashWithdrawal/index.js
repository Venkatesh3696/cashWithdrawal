// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  getInitial = name => name.slice(0, 1)

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = this.getInitial(name)

    return (
      <div className="white-container">
        <div className="inner-container">
          <div className="profile-container">
            <div className="profile">{initial}</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="balance-heading">In Rupees</p>
            </div>
          </div>
          <p className="with-para">Withdraw</p>
          <p className="choose-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationDetails={each}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
