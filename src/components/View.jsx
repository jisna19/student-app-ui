import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const [data, changedata] = useState([
        {
            "name": "jisna",
            "rollNo": "5",
            "admNo": "123",
            "college": "Dist",
            "url": "https://i.pinimg.com/736x/50/05/58/500558995306c0faa5a9a5600ed29fb9.jpg"
        },
        {
            "name": "jini",
            "rollNo": "3",
            "admNo": "329",
            "college": "Fisat",
            "url": "https://cdn4.sharechat.com/compressed_gm_40_img_565801_274bf4f9_1696551563577_sc.jpg?tenant=sc&referrer=tag-service&f=577_sc.jpg"
        },
        {
            "name": "swathy",
            "rollNo": "15",
            "admNo": "353",
            "college": "Dist",
            "url": "https://ashisheditz.com/wp-content/uploads/2023/11/hide-face-attitude-girl-dp.jpg"
        },
        {
            "name": "Rose",
            "rollNo": "36",
            "admNo": "653",
            "college": "Fisat",
            "url": "https://ashisheditz.com/wp-content/uploads/2023/11/cool-attitude-girl-dp-hidden-face.jpg"
        }
        
    ])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.url} class="card-img-top" alt="..." height="250px" />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.rollNo}</p>
                                                <p class="card-text">{value.admNo}</p>
                                                <p class="card-text">{value.college}</p>
                                                <a href="#" class="btn btn-primary">click Here</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View