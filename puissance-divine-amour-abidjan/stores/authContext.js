import {createContext, useEffect, useState} from 'react'
// import netlifyIdentity from 'netlify-identity-widget'

/*
const AuthContext = createContext({
    user: null,
    login: ()=>{},
    logout: ()=>{},
    authReady: false
})
export default AuthContext
*/
const AuthContext = createContext({
    // ok: null,
    // cartBox: null,
    // setCartBox: null,
})
export default AuthContext

export const AuthContextProvider = ({children}) => {
    let [cartBox, setCartBox] = useState(<ul className="miniCart"></ul>)
    /*
    const [user, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)

    useEffect(()=>{
        netlifyIdentity.on('login',(user)=>{
            setUser(user)
            netlifyIdentity.close()
            console.log("login event");
        })
        netlifyIdentity.on('logout',(user)=>{
            setUser(null)
            console.log("logout event");
        })
        netlifyIdentity.on('init', (user)=>{
            setUser(user)
            setAuthReady(true)
            console.log(user);
            console.log('init event');
        })
        //init netlify identity connection
        netlifyIdentity.init()


        return ()=>{
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
    }, [])
    
    const login = () => {netlifyIdentity.open()}
    const logout = () => {netlifyIdentity.logout()}
    const context = {user,login,logout,authReady}
    */
    const context = {ok:"okokok",cartBox, setCartBox}
    
    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}


