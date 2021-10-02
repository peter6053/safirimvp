import React from 'react'
import AccountForm from '../../components/account/AccountForm'
import AccountHeader from '../../components/account/AccountHeader'
import AccountStyle from './AccountStyle'

function Account() {
       return (
              <AccountStyle>
                     <AccountHeader/>
                     <AccountForm/>
              </AccountStyle>
       )
}

export default Account
