import React,{useState} from 'react';
import './Model.css';


const Model = ({closeModal, onsubmit,defaultvalue}) => {
  const [formState,setFormState] = useState(defaultvalue||
    {EmployeeID :"",
    EmployeeFirstName:"",
    EmployeelasttName:"",
    EmailAddress:"",
    Phonenumber:"",
    Address:"",
    ZipCode:"",
    City:"",
    Country:"",
    status:"live",


  });

  const [errors,setErrors]= useState("")


  const validateForm =() =>{
    if(formState.EmployeeID && formState.EmployeeFirstName && formState.EmployeelasttName && formState.EmailAddress && formState.Phonenumber &&formState.Address && formState.ZipCode && formState.City && formState.Country && formState.status){
      setErrors("")
    return true;}
    else{
      let errorFileds =[];
      for(const [key,value] of Object.entries(formState)){
        if(!value){
          errorFileds.push(key);
        }
      }
      setErrors(errorFileds.join(","));
      return false;
    }
    
  };
  
  const handleChange = (e) =>{
    setFormState({
      ...formState,[e.target.name]:e.target.value
    });
   
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!validateForm()) return;
   onsubmit(formState)
   closeModal();

  };

  return (
    <div className="Model-container" onClick={(e) =>{
      if(e.target.className === "Model-container")closeModal()
    }}>
      <div className="Model">
       <form>
        <div className='form-group'>
            <label htmlFor='Employee ID'>Employee ID</label>
            <br></br>
            <input name='Employee ID'  value={formState.EmployeeID} onChange={handleChange} />
            <br></br>
            <label htmlFor='Employee First Name'>Employee First Name</label>
            <br/>
            <input  name='Employee First Name' type='text' value={formState.EmployeeFirstName} onChange={handleChange}/>
            <br/>
            <label htmlFor='Employee Last Name'>Employee Last Name</label>
            <br/>
            <input  name='Employee Last Name' type='text' value={formState.EmployeeLasttName} onChange={handleChange}/>
            <br/>
            <label htmlFor=' Email Address'>Email Address</label>
            <br/>
            <input name='Email Adress' type='email' value={formState.EmailAddress} onChange={handleChange}/>
            <br></br>
            <label htmlFor='Phone Number'>Phone Number</label>
            <br/>
            <input name='phone Number' type='number' inputMode='numeric' value={formState.Phonenumber} onChange={handleChange}/>
            <br/>
            <label htmlFor='Address'>Address</label>
            <br/>
            <input name='Address' type='text' className='lo' value={formState.Address} onChange={handleChange}/><br/>
            <label htmlFor='ZipCode'>Zip Code</label><br/>
            <input name='ZipCode' type='number'/>
            <br/>
            <label htmlFor='City'>City</label><br/>
            <input name='City' type='text'value={formState.City} onChange={handleChange}/><br/>
            <label htmlFor='Country'>Country</label><br/>
            <input name='Country' type='text' value={formState.Country} onChange={handleChange}/><br/>
            <label htmlFor='status'>Status</label><br/>
            <select name='Status' value={formState.status} onChange={handleChange} >
                <option value='live'>live</option>
                <option value='draft'>draft</option>
                <option value='error'>error</option>
            </select><br/><br/>
            {errors && <div className='err' >{`please include: $(errors)`}</div>}
            <button type='submit' id='sub' onClick={ handleSubmit}>Submit</button>

        
            


        </div>
       </form>

      </div>
    </div>
  )
}

export default Model
