import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"

// https://jsonplaceholder.typicode.com/users

const About = () => {
    const [Users, setUsers] = useState([])

    const [Loading, setLoading] = useState(true)

    const GetData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                // console.log(response);
                setUsers([...response.data])

                setLoading(false)
            })
    }

    useEffect(() => {
        GetData()
    }, [])

    const user = Users.map(({ id, name }) => {
        return <li key={id}> <Link to={`/about/${id}`}> {name} </Link> </li>
    })
    return (
        <Fragment>
            <section className="py-5">
                <div className="container">
                    <h1>About</h1>
                    {
                        Loading ? "Loading user info ..." : <ol>{user}</ol>
                    }
                </div>
            </section>
        </Fragment>
    )
}

export default About;