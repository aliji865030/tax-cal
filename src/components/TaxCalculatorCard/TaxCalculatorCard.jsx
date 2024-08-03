import React, { useEffect, useState } from 'react'
import "./TaxCalculatorCard.scss"

const TaxCalculatorCard = () => {
    const countryData=["Australia","UK"]
    const financialYearData=["FY 2023-24"]
    const annualIncomeForAustralia=["$0-$18,200","$18,201-$45,000","$45,001-$120,000","$120,001-$180,000","$180,001+"]
    const annualIncomeForUK=["£0-£12,570","£12,571-£50,270","£50,271-£150,000","£150,001+"]

    const [country,setCountry]=useState("Australia")
    const [year,setYear]=useState("FY 2023-24")
    const [purchasePrice,setPurchasePrice]=useState(30000)
    const [salePrice,setSalePrice]=useState(20000)
    const [expenses,setExpenses]=useState(5000)
    const [term,setTerm]=useState(true)
    const [annualIncome,setAnnualIncome]=useState(annualIncomeForAustralia)
    const [capitalGains,setCapitalGains]=useState("$ 5,000")
    const [discountAmount,setDiscountAmount]=useState("$ 2,500")
    const [netCapitalGain,setNetCapitalGain]=useState("$ 2,500")
    const [taxNeedToPay,setTaxNeedToPay]=useState("$ 812.5")

    const termHandler=()=>{
       setTerm(!term)
    }

    

    useEffect(()=>{
        const countryHandler=()=>{
            switch (country){
                case "Australia":
                    setAnnualIncome(annualIncomeForAustralia)
                break;
    
                case "UK":
                    setAnnualIncome(annualIncomeForUK)
                break;
    
                case "India":
                    setAnnualIncome(annualIncomeForIndia)
                break;
    
                default:
                    setAnnualIncome(annualIncomeForAustralia)
            }
        }

        countryHandler()
    },[term,country])
  return (
    <div className='tax-calculator-card'>
        <h1>Free Crypto Tax Calculator {country}</h1>
        <div className="financial-year">
            <div className="financial-year-select">
                <label>Financial Year</label>
                <select onChange={(e)=>setYear(e.target.value)}>
                    
                        {financialYearData.map((item,index)=>{
                            return(
                                <option key={index}>{item}</option>
                            )
                        })}
                    
                </select>
            </div>
            <div className="financial-year-country">
                <label>Country</label>
                <select onChange={(e)=>setCountry(e.target.value)}>
                    {countryData.map((item,index)=>{
                        return(
                            <option key={index}>{item}</option>
                        )
                    })}
                </select>
            </div>
        </div>
        <div className="purchase-price">
            <div>
                <label>Enter purchase price of Crypto</label>
                <input type="text" onChange={(e)=>setPurchasePrice(e.target.value)} value={purchasePrice} />
            </div>

            <div>
                <label>Enter purchase price of Crypto</label>
                <input type="text" onChange={(e)=>setSalePrice(e.target.value)} value={salePrice} />
            </div>
        </div>
        <div className="expenses">
            <div>
                <label>Enter your Expenses</label>
                <input type="text" onChange={(e)=>setExpenses(e.target.value)} value={expenses}/>
            </div>
            <div >
                <label>Investment Type</label>
                <div className='investment-type'>
                    <span>
                        <span>
                            <p onClick={termHandler} style={{color:!term?"blue":"black", borderColor:!term?"blue":"black"}}>Short Term {!term?<i class="fa-solid fa-check"></i>:null}</p>
                            <label >{"< 12 months"}</label>
                        </span>
                    </span>
                    <span>
                        <span>
                            <p onClick={termHandler} style={{color:term?"blue":"black", borderColor:term?"blue":"black"}}>Long Term {term?<i class="fa-solid fa-check"></i>:null}</p>
                            <label >{"> 12 months"}</label>
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div className="annual-Income">
            <div>
                <label>Select Your Annual Income</label>
                <select>
                    {annualIncome.map((item,index)=>{
                        return(
                            <option key={index}>{item}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label>Tax Rate</label>
                <label>$ 5,902 + 32.5% of excess over $45,001 </label>
            </div>
        </div>
        <div className="capital-gains" style={{display:term?"flex":"none"}}>
            <div>
                <label>Capital gains amount</label>
                <p>{capitalGains}</p>
            </div>
            <div>
                <label>Discount for long term gains</label>
                <p>{discountAmount}</p>
            </div>
        </div>
        <div className="net-capital">
            <div>
                <p>
                <label>Net Capital gains tax amount</label>
                        <br />
                    <span style={{color:'green'}}>{netCapitalGain}</span>
                </p>
            </div>
            <div>
                <p>
                <label>The tax you need to pay*</label>
                        <br />
                    <span style={{color:'blue'}}>{taxNeedToPay}</span>
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default TaxCalculatorCard
