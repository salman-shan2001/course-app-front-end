import React from 'react'
import NAvbar from './NAvbar'

const SearchCourse = () => {
  return (
    <div>
      <div>
      <div className="container">
        <div className="row">
            <NAvbar/>
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
                    <input type="text" className="form-control" />
                </div>
                
                <center>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">SEARCH</button>
                </div>
                </center>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchCourse
