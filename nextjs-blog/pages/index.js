import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {

    const router = useRouter();

    //ログイン処理（CookieにsignedIn=trueとする）
    const login = () => {
        Cookies.set("signedIn", "true");
        router.replace("/private");
    }

    return (
        <>
            <h1>Login</h1>
            <button onClick={login}>ログイン</button>
            <div>
                <Link href="/"><a>Homeへ</a></Link>
            </div>
        </>
    );
}