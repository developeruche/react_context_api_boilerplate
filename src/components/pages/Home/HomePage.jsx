import {useState} from "react"
import { useStateValue } from "../../stateManager/StateProvider"
import { actionType } from "../../stateManager/reducer"

const Home = () => {
    const [name_, setName_] = useState("")
    const [email_, setEmail_] = useState("")


    const [{user}, dispatch] = useStateValue()

    const onClick__ = (e) => {

        // The dispatching action would happen here
        dispatch({
            type: actionType.SET_USER,
            user: {
                name_,
                email_
            }
        })
    }
    return(
        <>
            <h1>This is the HomePage</h1>
            <p>For testing this context api (There would be a form you can fill that would dispatch data into the data layer and another section would be implemented to retreive the data from that layer)</p>
            <input type="text" name="test_name" id="test_name" value={name_} onChange={(e) => {
                setName_(e.target.value)
            }}  placeholer="name"/>
            <input type="email" name="test_email" id="test_email" value={email_} onChange={(e) => {
                setEmail_(e.target.value)
            }} placeholer="email"/>
            <button onClick={() => {
                onClick__()
            }}>DISPATCH</button>
            <h3>Display Section</h3>
            <span>Name</span> - <h4>{user ? user.name_ : "No value"}</h4>
            <span>Email</span> - <h4>{user ? user.email_ : "No value"}</h4>
        </>
    )
}
export default Home