export default function ShowSearch({users, click}){
    return(
        <div>
            <ul>
                {
                    (users?.length) ?
                    users.map(user => (
                        <li className="text-white cursor-pointer"
                        onClick={() => click(user)}>
                            {user}
                        </li>
                    )) :
                    null
                }
            </ul>
        </div>
    )
}