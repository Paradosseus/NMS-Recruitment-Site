import Button from "../components/Button"
import Navbar from "../components/Navbar"

export const SignIn = () => {
    return (
        <div className="w-full h-screen bg-[#f7f7f7]">
            <Navbar/>
            <div className="w-[1000px] h-[750px] rounded-lg p-10 m-auto bg-custom-container my-10 flex flex-col justify-center items-center">
                <div className="w-[450px] grid gap-2">
                    <h2 className="text-3xl font-semibold text-center">Sign in your Account</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
                    <div className="my-2">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                            <span className="label-text font-semibold">Email:</span>
                            </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                            <div className="label">
                            </div>
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                            <span className="label-text font-semibold">Password:</span>
                            </div>
                                <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                            <div className="label">
                            </div>
                        </label>
                    </div>
                    <Button label="Login" width="w-full"/>
                </div>
            </div>
        </div>
    )
}