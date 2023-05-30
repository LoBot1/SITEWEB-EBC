import md5 from "md5";
import { userInsert_ } from "../components/user/userInsert";
import { userList_ } from "../components/user/userList";
import { useMemo, useState } from "react";

export default function SignUp(props) {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();

    const changePassword = (params) => {
        setPassword(params.target.value)
    }
    const changeConfirmPassword = (params) => {
        setConfirmPassword(params.target.value)
    }
    const changeEmail = (params) => {
        setEmail(params.target.value)
    }
    const changeLastName = (params) => {
        setLastName(params.target.value)
    }
    const changeFirstName = useMemo( () => (params) => {
        console.log(params.target.value)
        setFirstName(params.target.value)
    }, [firstName])
    const onSubmitNewUser = async () => {

        let datas = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password
        };
        let confirmPasswordData = {
            "confirmpassword": confirmPassword
        };
        const userList = await userList_();
        if (userList.filter(user => user.email.match(datas["email"])).length == 0) {
            if (regularExpression.test(datas["password"])) {
                if (datas["password"] == confirmPasswordData["confirmpassword"] & datas["password"].length > 0) {
                    datas["password"] = await md5(datas["password"]);
                    userInsert_(datas);
                    props.setAlerts(16); //toast d'alerte
                    props.setShow(true); //toast afficher
                    props.setColors(0); //toast vert
                    setTimeout(() => { window.location.replace('/login'); }, 3000);
                }
                else {
                    props.setAlerts(4); //toast d'alerte
                    props.setShow(true); //toast afficher
                    props.setColors(1); //toast rouge
                    setTimeout(() => { props.setShow(false); }, 3000);
                }
            }
            else {
                props.setAlerts(7); //toast d'alerte
                props.setShow(true); //toast afficher
                props.setColors(1); //toast rouge
                setTimeout(() => { props.setShow(false); }, 3000);
            }
        }
        else {
            props.setAlerts(6); //toast d'alerte
            props.setShow(true); //toast afficher
            props.setColors(1); //toast rouge
            setTimeout(() => { props.setShow(false); }, 3000);

        }
    }

    return <div className="login-page">
        <div className="login-contain">
            <div className="box">
                <form>
                    <div className="login-input">
                        <h1>S'inscire</h1>
                        <div className="input">
                            <input placeholder="Prénom" type="text" id="first_name" onChange={changeFirstName} />
                            <input placeholder="Nom" type="text" id="last_name" onChange={changeLastName} />
                            <input placeholder="Adresse email" type="text" id="email" onChange={changeEmail} />
                            <input placeholder="Mot de passe" type="password" id="password" onChange={changePassword} />
                            <input placeholder="Comfirmer mot de passe" type="password" id="password-confirm" onChange={changeConfirmPassword} />
                            <input type="button" value="Créer un compte" onClick={onSubmitNewUser} />
                        </div>
                    </div>

                </form>
            </div>

        </div>

    </div>
}