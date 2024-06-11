import React, { useEffect, useState } from 'react'
import NAvbar from './NAvbar'
import axios from 'axios'

const ViewCourse = () => {
    const [course, changecourse] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:8055/view").then(
            (response) => {
                changecourse(response.data)
            }
        ).catch().finally()
    }

    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <NAvbar />
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
                                    course.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.title}</th>
                                                <td>J{value.duration}</td>
                                                <td>{value.date}</td>
                                                <td>{value.venue}</td>
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

export default ViewCourse
