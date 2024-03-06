import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleUser = () => {
    const { id } = useParams();

    const [User, setUser] = useState({})

    const GetData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                
                setUser({...response.data} )
            })
    }

    useEffect(() => {
        GetData()
    }, [id])

    return (
        <Fragment>
            <section className="py-5">
                <div className="container">
                    <h1>User Name {User.name}</h1>

                    
                </div>
            </section>
        </Fragment>
    )
}

export default SingleUser;