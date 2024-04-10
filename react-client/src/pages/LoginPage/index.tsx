import "../LoginPage/Login.css"
const LoginPage = () => {
  return (
    <section className="login-container ">
            <div className="login-title">Login</div>
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
                <button type="submit">Continue</button>
            </form>
            <div className="login-register">Don't have an account yet?</div>
            {/* <Link to="/register" className="login-register-link">Đăng ký</Link> */}
            {/* <div className="login-register-link">Đăng ký</div> */}

        </section>
  )
}

export default LoginPage