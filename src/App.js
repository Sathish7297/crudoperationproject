import React, { useState } from 'react'

const App = () => {
  const [name,setname]=useState("")
  const [id,setid]=useState("")
  const [location,setlocation]=useState("")
  const[click,setclick]=useState(false)
  // const [name1,setname1]=useState("")
  // const [id1,setid1]=useState("")
  // const [location1,setlocation1]=useState("")
 const [stati,dynamic]=useState([])
  const onchanges=(event)=>{
     setname(event.target.value)
    }
    const onchanges1=(event)=>{
      setid(event.target.value)
     }
     const onchanges2=(event)=>{
      setlocation(event.target.value)
     }

  const submit=()=>{
    console.log("submitted")
    // if(name===""||id===""||location===""){
    //   alert("please fill all the details")
    //   return
      
    // }
    if(name===""){
      alert("enter the name must")
      setid("")
      setlocation("")
      setname("")
      return
    }
    if(id===""){
      alert("enter the id must")
     
      setid("")
      setlocation("")
      setname("")
      return
    }
    if(location===""){
      alert("enter the location must")
      setid("")
      setlocation("")
      setname("")
      return
    }
    dynamic([...stati,{Name:name,Id:id,Location:location}])
   setname("")
   setid("")
  setlocation("")
  setclick(true)
  
  //  if(edit){
  //   dynamic(stati.replace("hi"))
  //  }
  }
  const cancel=()=>{
    setname("")
    setid("")
   setlocation("")
  }
  // const deleterow=()=>{
    
  //   console.log("deleted")
  //   console.log()
  //   dynamic(stati.splice())
  // }
  // const edit=()=>{
  // setname(stati[0].Name)
  // setid(stati[0].Id)
  // setlocation(stati[0].Location)
  

  // console.log(stati[0].Name)
  // }
  const deleteitem=(id)=>{
    alert("Are you sure to delete")
    dynamic(stati.filter((e)=>((e.Id!==id))))

  }
  const deleteall=()=>{
    
      alert("This action will delete all the data")
     return dynamic(stati.splice())
    
   
   
  }
  // const edititem=(id)=>{
  //   console.log("edited")
  //  const edited=[setname(stati[0].Name,setid(stati[0].Id,setlocation(stati[0].Location)))]
  // //  dynamic(edited)
  //   console.log(dynamic(edited[name]))
    
  // }
  return (
   <><div className='d'> LOGIN DETAILS
  <input type='text' placeholder='Enter the name' value={name.toUpperCase()}  onChange={ onchanges} className='ip1'/><br/>
 <input type='text' placeholder='Enter the Id' value={id}  onChange={ onchanges1} className='ip2'/><br/>
 <input type='text' placeholder='Enter the location' value={location.toUpperCase()}  onChange={ onchanges2} className='ip3'/><br/>
  <div>
  <button onClick={submit} className='button1'> submit</button> <button onClick={cancel} className='button2'>cancel</button>
  <button onClick={deleteall} className='button3' >Delete all</button>
  
   </div>
    </div>


 <div style={{display:click?"block":"none"}}>
 <table>
    <tbody>
      <tr className='table'>
        <th>NAME</th>
        <th>ID</th>
        <th>LOCATION</th>
        <th>ACTION</th>

      </tr> 
      {/* <tr className='table1'> */}
        {stati.map((e)=>(<tr className='table1'>
          <td>{e.Name}<br/></td>
        <td>{e.Id}</td>
        <td>{e.Location}</td>
        <td>
          <button>Edit</button>
           <button onClick={()=>deleteitem(e.Id)}>Delete</button>
        </td>
        </tr> ))}
      

       
         
    
    </tbody>
  </table>
    
  
 </div>
    
   
   </>
  )
}

export default App