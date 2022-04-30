import {useState, useEffect} from "react"
import "./ShowData.css" 

export const ShowData = () =>{

    const [data,setData] = useState([])

    const getData = async()=>{
        const res = await fetch("http://localhost:8080/users").then((d)=>d.json())
        setData(res)
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            {data.map((e)=>{
                return <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                        <td>{e.salary}</td>
                        <td>{e.department}</td>
                    </tr>
                </table>
            })}
        </div>
    )

}
