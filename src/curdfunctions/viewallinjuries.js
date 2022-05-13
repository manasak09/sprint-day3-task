import { connect } from "react-redux";
import { findAllInjueries } from "../action/actionfun";
import { useEffect } from "react";


function ViewAllInjuries(props){
    useEffect(()=>{
        props.mydispatch(findAllInjueries())
        
    },[])
    return <>
    <ul>
        {/* {
        props.data.map((e)=>{
            return <li>{e.personName}{e.personAdderss}{e.mobile}</li>
        })
    } */}
        </ul></>
}
        const mapStateToProps=state=>({
            data:state
        })
        
        const mapDispatchToProps=dispatch=>({
            mydispatch:dispatch
        })
    
        export default connect(mapStateToProps,mapDispatchToProps)(ViewAllInjuries)
