import React , { useState} from 'react'

import Button from '../../ui/button/Button'
import './AccountForm.css'

function AccountForm(props) {

       const [destination , setDestination] = useState('');
       const [budget , setBudget] = useState('');
       const [savePreference , setSavePreference] = useState('');
       const [amount, setAmount] = useState('');
       const [date , setDate] = useState('');
       const [preferredTime , setPreferredTime] = useState('');
       const [startTime , setStartTime] = useState('');
       const [payment , setPayment] = useState('');

       const destinationChangeHandler = (event) => {
              setDestination(event.target.value)
       }
       const budgetChangeHandler = (event) => {
              setBudget(event.target.value)
       }
       const savePreferenceChangeHandler = (event) => {
              setSavePreference(event.target.value)
       }
       const amountChangeHandler = (event) => {
              setAmount(event.target.value)
       }
       const dateChangeHandler = (event) => {
              setDate(event.target.value)
       }
       const preferredTimeChangeHandler = (event) => {
              setPreferredTime(event.target.value)
       }
       const startTimeChangeHandler = (event) => {
              setStartTime(event.target.value)
       }

       const paymentChangeHandler = (event) => {
              setPayment(event.target.value)
       }

       const submitFormHandler = (event) => {
              event.preventDefault();

              const accountData = {
                     destination : destination ,
                     budget : budget,
                     savePreference : savePreference,
                     amount : amount,
                     date: date,
                     preferredTime : preferredTime,
                     startTime : startTime,
                     payment : payment,
              }

              console.log(accountData);

              setDestination('')
              setBudget('')
              setSavePreference ('')
              setAmount('')
              setDate('')
              setPreferredTime('')
              setStartTime('')
              setPayment('')

       }

       return (
              <section className = "account-form">
                     <h1>Set up your account details</h1>
                     <form  className = "formwrap"  onSubmit = {submitFormHandler}>
                            <div className="formwrap-content">
                                   
                                   <div className="formwrap-left">
                                          <div className="form-group">
                                                 <label htmlFor="destination">Destination</label>
                                                 <select name="destination" id="destination" onChange = {destinationChangeHandler} value = {destination}>
                                                        <option value="Nigeria" placeholder>Nigeria</option>
                                                        <option value="Ghana">Ghana</option>
                                                        <option value="Tanzania">Tanzania</option>
                                                        <option value="Mexico">Mexico</option>
                                                 </select>
                                          </div>
                                          <div className="form-group">
                                                 <label htmlFor="budget">Budget</label>
                                                 <input type="number"   min="100" step="50.00"  max="250,000" placeholder ="$100"  onChange = {budgetChangeHandler} value = {budget}/>
                                          </div>
                                          <div className="form-group">
                                                 <label>How will you prefer to save? </label>
                                                 <select name="savePreference" id="savePreference" onChange = {savePreferenceChangeHandler} value = {savePreference}>
                                                        <option value="Daily" placeholder = "Daily">Daily</option>
                                                        <option value="Weekly" >Weekly</option>
                                                        <option value="Fortnightly" >Fortnightly</option>
                                                        <option value="Monthly">Monthly</option>
                                                        <option value="Quarterly">Quarterly</option>
                                                        <option value="Yearly">Yearly</option>
                                                 </select>
                                          </div>
                                          <div className="form-group">
                                                 <label >Amount to save per time </label>
                                                 <input type="number"   min="100" step="50.00"  max="250,000" onChange = {amountChangeHandler}  value = {amount} />
                                          </div>
                                   </div>
                                   <div className="formwrap-right">
                                          <div className="form-group">
                                                 <label >Date</label>
                                                 <input type="date"  min="2020-01-01"  onChange = {dateChangeHandler} value = {date} />
                                          </div>
                                          <div className="form-group">
                                                 <label for = "preferredTime">Preferred time</label>
                                                 <input type="time" placeholder ="08:00" onChange = {preferredTimeChangeHandler} value = {preferredTime} />
                                          </div>
                                          <div className="form-group">
                                                 <label  for ="payment"> Where should the funds come from ?</label>
                                                 <select name="payment" id="payment" onChange = {paymentChangeHandler} value = {payment}>
                                                        <option value="Bank Card" placeholder = "Use Bank Card">Use Bank Card</option>
                                                        <option value="saab">Cash</option>
                                                 </select>
                                          </div>
                                          <div className="form-group">
                                                 <label  for = "startTime"> When do you want to start ?</label>
                                                 <input type="month"  onChange = {startTimeChangeHandler}  value = {startTime}/>
                                          </div>
                                   </div>
                            </div>
                            <Button backgroundColor = '#0692C4' text = 'DONE'  textColor="#fff"   borderColor = '#0692C4'  borderRadius = '4px' 
                                          extraStyle ={{
                                                 height: '55px' , 
                                                 width: '180px',
                                                 fontSize : '18px',
                                          }}

                            />

                     </form>
              </section>
       )
}

export default AccountForm
