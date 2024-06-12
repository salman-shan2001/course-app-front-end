import React, { useState } from 'react'
import NAvbar from './NAvbar'
import axios from 'axios'

const AddCourse = () => {

const [course,changecourse]=useState(
    {
        "title":"",
        "description":"",
        "date":"",
        "duration":"",
        "venue":"",
        "trainerName":""
    }
)

const inputHandler=(event)=>{
    changecourse({...course,[event.target.name]:event.target.value})
}

const readvalue=()=>{
    axios.post("http://localhost:8055/add",course).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("course added successfully")
            } else {
                alert("error")
            }
        }
    ).catch(
       
    )
}

  return (
    <div>
      <div className="container">
        <div className="row">
            <NAvbar/>
            <center>
                <h1>
                    Add New Course
                </h1>
            </center>
            <br></br><br></br>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' value={course.title} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Description</label>
                <textarea name="description" id="" className="form-control" value={course.description} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Date</label>
                <input type="date" name="date" id="" className="form-control" value={course.date} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Duration</label>
                <input type="text" className="form-control" name='duration' value={course.duration} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Venue</label>
                <input type="text" className="form-control" name='venue'  value={course.venue} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">TrainerName</label>
                <input type="text" className="form-control" name='trainerName' value={course.trainerName} onChange={inputHandler}/>
                </div>
                <center>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readvalue}>ADD</button>
                </div>
                </center>
                
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddCourse
