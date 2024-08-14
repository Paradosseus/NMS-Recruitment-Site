import Button from "../../components/Button"
import adminSignInBanner from "../../assets/img/admin-sign-in-banner.jpg"
import companyLogo from "../../assets/img/Logo-admin.png"
import { AdminContainer } from "./AdminContainer"
export const Auth = () => {
    return(
        <div className="grid grid-cols-[auto,1fr] h-screen">
            <div className="flex flex-col justify-center  w-[500px]">
                <div className="p-10 grid gap-4">
                    <div className="text-center ">
                        <h1 className="font-bold text-3xl">WELCOME ADMIN</h1>
                        <p className="text-custom-red font-medium">To continue, please provide <br/> your credentials below</p>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                            </label>
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text font-semibold">Password:</span>
                                </div>
                                <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                            </label>
                        </div>
                        <a href="/admin"><Button label="Log in" width="w-full"/></a>
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-center relative" style={{ backgroundImage: `url(${adminSignInBanner})`}}>
                <div className="absolute bg-[#ffffff] opacity-45  h-full w-full"></div>
                <div className="absolute z-20 h-full w-full flex flex-col justify-center items-center">
                    <img src={companyLogo} alt="" className="max-w-[450px]" />

                </div>
            </div>
        </div>
    )
}