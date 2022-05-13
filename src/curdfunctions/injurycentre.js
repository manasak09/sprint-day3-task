import { Button, List } from "@mui/material";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addInjury, findAllInjueries } from "../action/actionfun";
import { Outlet } from "react-router-dom";
function AddInjury(props) {

    // const[injuryId,setInjuryId]=useState('')
    const [personName, setPersonName] = useState('')
    const [personAddress, setPersonAddress] = useState('')
        // const[injuryDate,setInjuryDate]=useState('')
    const [mobile, setMobile] = useState('')
    const [nameError, setNameError] = useState('')
    const [addressError, setAddressError] = useState('')
        // const[dateError,setError]=useState('')
    const [mobileError, setMobileError] = useState('')
        useEffect(()=>{
            props.mydispatch(findAllInjueries())
        },[])
    return (<>
        {/* <form onSubmit = {
            (e) => {
                e.preventDefault()
                var inju = {
                    //  "injuryId" :injuryId,
                    " personName": personName,
                    "personAdderss": personAddress,
                    //  "injuryDate":injuryDate,
                    "mobile": mobile

                }
                props.mydispatch(addInjury(inju))
                console.log(inju)
            }
        }> */}
        <span style = {
            {color: "black"}} > <h3> Enter Person Name </h3></span>

        <input type = 'text'
        style = {{ height:40, width:250, top:200 }}
        onChange = {
            (e) => {
                let nam = e.target.value

                if (nam.length < 4 || nam.length >= 20) {
                    setNameError('name should be more than 4 charatcters')
                } else {
                    setPersonName(e.target.value)
                    setNameError('')
                }

            }
        }
        /><br/>
        <span style = {{ color: 'red'}} > { nameError } </span><br/>

        <span style = {
            { color: 'black' } } > <h3> Enter Person Address </h3></span >
        <input type = 'text'
        style = {
            { height: 60, width: 250 } }
        onChange = {
            (e) => {
                let add = e.target.value
                var addexp = String(add).toLowerCase().match("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s)$")
                if (addexp || add <= 200 || add == null) {
                    setAddressError('address is mandatory ')
                } else {
                    setPersonAddress(e.target.value)
                    setAddressError('')
                }
            }
        }
        /><br/>
        <span style = {
            { color: 'red' } } > { addressError } </span><br/>

        <span style = {
            { color: 'black' } } > <h3> Enter Mobile Number </h3></span >
        <input type = 'text'
        style = {
            { height: 30, width: 250 } }
        onChange = {
            (e) => {
                let mob = e.target.value
                var exp = String(mob).match("^(?=.[0-9]).{10}$")
                if (exp || mob.length == 10) {
                    setMobile(e.target.value)
                    setMobileError('')
                } else {
                    setMobileError('Enter valid mobile number')
                }
            }
        }
        /><br/>
        <span style = {
            { color: 'red' } } > { mobileError } </span><br/>
        <div style = {
            { margin: 30 } } >
        < input type = 'button' style = {{ backgroundColor: 'bisque' }} onClick={()=>{ var inju = {
                    //  "injuryId" :injuryId,
                    "personName": personName,
                    "personAddress": personAddress,
                    //  "injuryDate":injuryDate,
                    "mobile": mobile

                }
                props.mydispatch(addInjury(inju))
                console.log(inju)

        }}
        value = 'Add Details'  />
        </div> 
        
        {/* {
            props.data.map((e)=>{
                return <li>{e.personName} {e.personAdderss}
                {e.mobile}</li>
            })
        } */}
          <Link to='/home/injurycentre/view'><Button variant='contained'>View</Button></Link>
          <Link to='/home/updateinjury/update'><Button variant='contained'>Update</Button></Link>
         <Outlet/>
        </>)

    }
    const mapDispatchToProps = dispatch => ({
        mydispatch: dispatch
    })
    const mapStateToProps = state => ({
        data: state
    })

    export default connect(mapStateToProps, mapDispatchToProps)(AddInjury);