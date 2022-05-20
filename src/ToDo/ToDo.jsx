import React ,{useState}from 'react'


function ToDO() {
    const [input,setInput]=useState("")
    const [sendmess,setSendmess]=useState([])

    let SendMessage=(event)=>
    {
        event.preventDefault();
       setSendmess([...sendmess,input]);
       setInput("");
    }

    let DeleteToDo=()=>
    {
    
    }

    
  return (
      <div className="" id='container'>
       <div className="row">
           
           <div className="col">
                <div className="row">

                   <div className="col-12">
                   <input value={input} onChange={(event)=>setInput(event.target.value) } id='inputChat' style={{border:"none",background:"#F2F3F5",width:"80%",borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px"}} placeholder="Aa"type="text" />
                                <button type="submit" onClick={SendMessage} id='inputChat'style={{background:"#AAC9FF",border:"none",width:"20%",borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}}>ToDo</button>
                   </div>

                   <div className="col-12">
                   {sendmess.map((sendmess,index)=> <p className="text-start" style={{height:"40px", maxWidth :"100%",background:"#1877F2",color:"white", borderTopLeftRadius :"20px",borderTopRightRadius:"20px",borderBottomRightRadius:"20px",marginLeft:"10px",marginTop:"30px"}} key={index}>{sendmess}<span className='text-end'><button onClick={DeleteToDo} className="text-end" style={{marginRight:"0px"}} >Delete</button></span></p>)} 
                
                   </div>

                  
                </div> 
           </div>

        </div>         
    </div>
                   
                    
  )
}

export default ToDO



{/* <div className="col-2"><img className='nav-image img-fluid' src="https://scontent.fblr20-2.fna.fbcdn.net/v/t1.18169-9/25994774_318346575320066_3682402949678025224_n.jpg?stp=c0.5.460.460a_dst-jpg&_nc_cat=103&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=dXq_ntngI-sAX_ho0Nu&_nc_ht=scontent.fblr20-2.fna&oh=00_AT9dx5OkQ71p2zlkm1FdhpPrZRADZ0W0Ehgf7UvQ-0RR0w&oe=62A01D10" alt="" /></div>
                            <div className='col-10'><strong><h1>Harsha</h1></strong></div>
                       

                        <input value={input} onChange={(event)=>setInput(event.target.value) } id='inputChat' style={{border:"none",background:"#F2F3F5",width:"80%",borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px"}} placeholder="Aa"type="text" />
                                <button type="submit" onClick={SendMessage} id='inputChat'style={{background:"#AAC9FF",border:"none",width:"20%",borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}}>Send</button>
                                
                        
                          
                               {sendmess.map((sendmess,index)=> <p className="text-center" style={{height:"40px", maxWidth :"200px",background:"#1877F2",color:"white", borderTopLeftRadius :"20px",borderTopRightRadius:"20px",borderBottomRightRadius:"20px",marginLeft:"10px",marginTop:"30px"}} key={index}>{sendmess}</p>)}
                       
                        */}