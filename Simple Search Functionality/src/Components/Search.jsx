import { useEffect, useState } from "react"
import ShowSearch from "./ShowSearch"

export default function Search(){

    const [loading,setLoading] = useState(false)
    const [queryParam, setQueryParam] = useState('')
    const [fetchedUsers, setFetchedUsers] = useState([])
    const [dropList,setDropList] = useState([])
    const [showDropList, setShowDropList] = useState(false)


    useEffect(() => {
        fetchUsers();
    },[])

    const fetchUsers = async () => {
        try{
            setLoading(true)
            const response = await fetch("https://dummyjson.com/users")
            const userList = await response.json()
            
            if(userList){
                setFetchedUsers(userList.users.map((user) => user.firstName.toLowerCase()))
                setLoading(false)
            }
        } catch (e) {
            console.log("Error ",e)
            setLoading(false)
        }
    }

    console.log(fetchedUsers, dropList)

    const handleChange = (event) => {
        const query = event.target.value.toLowerCase()
        setQueryParam(query)
        if(query.length > 1){
        const list = (fetchedUsers?.length) ?
           fetchedUsers.filter((data) => data.toLowerCase().indexOf(query) > -1)
           : []
           setDropList(list)
           setShowDropList(true)
        } else {
            setShowDropList(false)
        }
    }

    if(loading){
        <div>Loading data! Please wait...</div>
    }

    const HandleClick = (user) => {
        setShowDropList(false)
        user ?
        setQueryParam(user)
        : setQueryParam('')
    }

    return(
        <div className="justify-items-center bg-gray-800 w-screen h-screen">
            <div className="pt-10">
                <input
                    type="text"
                    placeholder="Search username"
                    value={queryParam}
                    onChange={handleChange}
                    className="text-center border-red-500 border-2"
                />
            </div>
            <div>
                {
                    showDropList ? 
                    <ShowSearch users={dropList} click={HandleClick}/> :
                    null
                }
            </div>
        </div>
    )
}