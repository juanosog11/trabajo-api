
import { registerRequest, loginRequest,verifyTokenRequest} from '../api/auth';
import { createContext, useState, useContext, useEffect } from "react";
import Cookies from 'js-cookie';


export const Authcontext = createContext()
var errores = null
export const useAuth = () => {
    const context = useContext(Authcontext)
    if (!context) {
        throw new Error('useAuth must be used within a Authcontext')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAutheticated, setAutheticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [esEmpresa, setEsEmpresa] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);


    const signup = async (user) => {
        try {

            const res = await registerRequest(user);
            console.log(res.data)
            setUser(res.data)
            console.log(setUser)
            setAutheticated(true);
        } catch (error) {

            if (Array.isArray(error.response.data.errors)) {
                console.log(error.response.data.errors)
                return setErrors(error.response.data.error)
            }
            else {
                console.log(error)
                return setErrors([error.response.data])
            }
        }
    }


    const signin = async (user) => {
        try {
            console.log(user)
            const res = await loginRequest(user);
            console.log(res.data)
            setUser(res.data)
            setAutheticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data.errors)) {
                console.log(error.response.data.errors)
                return setErrors(error.response.data.error)
            }
            else {
                console.log(error)
                return setErrors([error.response.data])
            }

        }
    }

    useEffect(() => {
        const checkLogin = async () => {

            const cookies = Cookies.get();
            try {
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
                
            }

            
                const res = await verifyTokenRequest(cookies.token);
                console.log(res);
                
                if (!res.data)
                { return setIsAuthenticated(false);
                    
                }
                setAutheticated(true);
                setUser(res.data);
                setLoading(false);
                console.log(isAutheticated)
                
                return;
                
            } catch (error) {
                setAutheticated(false);
                setLoading(false);
                
                return;
            }
        };
        checkLogin();
        
    }, []);


    return (

        <Authcontext.Provider
            value=
            {{ user, signup, signin, setUser, isAutheticated, errors, esEmpresa, setEsEmpresa }}
        >
            {children}
        </Authcontext.Provider>

    )
}