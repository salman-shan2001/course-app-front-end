import React, { useState } from 'react'
import NAvbar from './NAvbar'
import axios from 'axios'

const SearchCourse = () => {

  const [course, changecourse] = useState(
    {
      "title": ""
    }
  )

  const [result, changereselt] = useState([
    {
    
      "title": "",
      "description": "",
      "date": "",
      "duration": "",
      "venue": "",
      "trainer-name": ""
    }
  ]
  
)


const deleteCourse=(id)=>{
  let input={"_id":id}
  axios.post("http://localhost:8055/delete",input).then(
    (response)=>{
      console.log(response.data)
      if (response.data.status=="success") {
        alert("successfuly deleted")
      } else {
        alert("error in deletion")
      }
    }
  ).catch().finally()
}


const inputHandler = (event) => {
  changecourse({ ...course, [event.target.name]: event.target.value })
}

const readvalue = () => {
  console.log(course)
  axios.post("http://localhost:8055/search",course ).then(
   (response)=>{
    changereselt(response.data)
   }
  ).catch(
    (error)=>{
      console.log(error)
    }
  ) 

}
return (
  <div>
    <div>
      <div className="container">
        <div className="row">
          <NAvbar />
          <center>
            <h1>
              Search Course
            </h1>
          </center>
          <br></br><br></br>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Title</label>
                <input type="text" className="form-control" name='title' value={course.title} onChange={inputHandler} />
              </div>

              <center>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-primary" onClick={readvalue}>SEARCH</button>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Duration</th>
                <th scope="col">Data</th>
                <th scope="col">venue</th>
              </tr>
            </thead>
            <tbody>
             {
              result.map(
                (value,index)=>{
                  return  <tr>
                  <th scope="row">{value.title}</th>
                  <td>{value.description}</td>
                  <td>{value.date}</td>
                  <td>{value.venue}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>DELETE</button>
                  </td>
                </tr>
                }
              )
             }
              
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
)
}

export default SearchCourse
