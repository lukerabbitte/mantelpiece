import LoginForm from "@/components/LoginForm";
import { login } from "@/utils/serverActions/login";
import { signup } from "@/utils/serverActions/signup";

const LoginPage = () => {
    return (
        <div className="flex flex-col w-full h-screen-minus-navbar-and-footer items-center justify-center">
            <LoginForm login={login} signup={signup} />
        </div>
    );
};

export default LoginPage;
