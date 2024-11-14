import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className="text-center my-6 font-bold text-3xl">Login Your Account</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
        </div>
      </form>
      <p className="text-center font-semibold mb-3">Do Not Have An Account? <Link className="text-red-400" to='/auth/register'>Register</Link></p>
    </div>
    </div>
  )
}

export default Login