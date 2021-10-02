import React from 'react'
import { Link } from 'react-router-dom'
import './HomeSection.css'
import photographer from '../../assets/camboy.svg'
import Button from '../../ui/button/Button'
import  car from '../../assets/car.svg'
import  pillartent from '../../assets/pillartent.svg'
import bridge from '../../assets/bridge.svg'
import food from '../../assets/food.svg'
import flight from '../../assets/flight.svg'
import hotel from '../../assets/hotel.svg'
import Card from '../../ui/card/Card'

function HomeSection() {

       const destinations =[
              {
                     image: '',
                     country: "Kenya",
                     price: "$1455.99"
              },
              {
                     image: '',
                     country: "Ghana",
                     price: "$1455.99"
              },
              {
                     image: '',
                     country: "South Africa",
                     price: "$2150.99"
              },
              {
                     image: '',
                     country: "Rwanda",
                     price: "$1600.99"
              },
              {
                     image: '',
                     country: "Maldivez",
                     price: "$16005.99"
              },
              {
                     image: '',
                     country: "Ethiopia",
                     price: "$1780.99"
              },
       ]
       
       return (
              <section className= "home-section">
                     <div className="home-section__container">
                            <div className="home-section__embark">
                                   <div className="home-section__embark--img">
                                          <img src={photographer} alt="Photographer" />
                                   </div>
                                   <div className="home-section__embark--text">
                                          <h2>Embark on budget friendly trips and carry out cost effective transaction</h2>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id accusamus. Fugit unde reiciendis asperiores error commodi perspiciatis molestias repudiandae. Voluptatem accusantium ducimus et, temporibus unde natus ipsam nemo perferendis aut, tenetur, distinctio pariatur praesentium? Tenetur sequi veritatis cum quasi ad sapiente expedita. Fugiat corrupti ducimus, dolores ut dolor blanditiis!</p>
                                          <Button backgroundColor = '#0692C4' text = 'Get Started'  borderColor = '#0692C4'  borderRadius = '4px'
                                          extraStyle ={{
                                                 height: '55px' , 
                                                 width: '162px',
                                                 fontSize : '18px',
                                          }}
                                          />
                                   </div>
                            </div>
                            <div className="home-section__available">
                                          <div className="home-section__available--text">
                                                 <h1>Available Travel Packages</h1>
                                                 <Link to = '/'>See More</Link>
                                          </div>
                                          <div className="home-section__tour">
                                          {
                                                 destinations.map((destination) => 
                                                 <Card className = "home-section__destination">
                                                        <img src= {destination.image + car} alt="img" />
                                                        <div className="home-section__destination--rate">
                                                               <p>{destination.country}</p>
                                                               <p>{destination.price}</p>
                                                        </div>
                                                        <div className="home-section__destination--flight">
                                                               <span><img src={flight} alt="flight" /><p>Flight: $873(2-way)</p></span>
                                                               <span><img src={hotel} alt="hotel" /><p>Hotel: $242( Per Night)</p></span>
                                                               <span><img src={food} alt="food" /><p>Food: $43(Per meal)</p></span>
                                                        </div>
                                                        <Button  text ="SELECT" borderColor="#222428" textColor ="#0692C4" borderRadius ="4px"
                                                                      extraStyle = {{
                                                                             height: "4rem", width: "12rem",
                                                                             cursor: "pointer",
                                                                             float: "left",
                                                                             marginLeft: "2.5rem"
                                                                             
                                                                      }} />
                                                        
                                                 </Card>
                                                 )
                                          }
                                          </div>
                            </div>
                     </div>
              </section>
       )
}

export default HomeSection
