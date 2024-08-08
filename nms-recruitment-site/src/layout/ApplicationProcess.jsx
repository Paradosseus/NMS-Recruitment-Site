import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Button from "../components/Button"

import {PreScreening} from "../components/child-components/application-process/assessmentSteps/PreScreening.jsx"
import { AssessmentTitle, AssessmentInstruction } from "../components/child-components/application-process/assessmentSteps/AssessmentTitle.jsx"

export const ApplicationProcess = () => {

const [currentStep, setCurrentStep] = useState(0);



useEffect(()=> {
    // document.getElementById('my_modal_4').showModal()
},[])

    return(
        <div className="w-full h-screen bg-[#f7f7f7]">
           <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-4xl text-center py-4">Instructions for the Application</h3>
                <div className="py-6 overflow-auto h-[300px] grid gap-4">
                    <h2 className="text-center text-xl font-semibold py-2">READ BEFORE YOU PROCEEED</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus dictum risus, et feugiat nunc lacinia eget. Suspendisse sed purus quis orci tincidunt ullamcorper. Aliquam erat volutpat. Quisque id egestas sem. Donec cursus lorem eget tortor condimentum, in mollis lorem mollis. Aliquam eu nulla lacinia, malesuada nisi ut, ultrices enim. Proin lorem tortor, tempus nec iaculis id, posuere eu mi. Maecenas accumsan suscipit lacus, id efficitur neque. Pellentesque mattis scelerisque eros eu varius. Sed ac laoreet augue, non consequat ligula. Phasellus pellentesque magna at tellus auctor efficitur.
                    </p>
                    <p>
                        Phasellus sagittis lorem vel massa hendrerit, id hendrerit nibh consectetur. Etiam ut fringilla ante. Praesent et dui sem. Aliquam erat volutpat. Donec et risus porta, congue quam vitae, semper lacus. Aliquam imperdiet vehicula ipsum, ut sagittis neque laoreet et. Proin commodo lacinia cursus. Maecenas ac turpis non dolor gravida lobortis in eget tortor. Nunc quis est sem. Curabitur mollis commodo dui id egestas. Phasellus nec arcu urna.
                    </p>
                    <p>
                        Etiam mattis mollis augue. Aenean sit amet arcu elementum, vestibulum lectus sit amet, viverra lorem. Suspendisse vitae ante libero. Donec tempus sed felis a suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla blandit ligula eget neque dictum, ut dictum diam congue. Nulla fringilla hendrerit nulla a blandit. Aliquam ultricies ex dolor, sed ullamcorper lacus blandit ut. Nam ultricies tristique erat a vestibulum. Aliquam dapibus velit id sodales placerat. Maecenas eget tellus risus. Vestibulum ornare ligula in lacus placerat auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus dictum risus, et feugiat nunc lacinia eget. Suspendisse sed purus quis orci tincidunt ullamcorper. Aliquam erat volutpat. Quisque id egestas sem. Donec cursus lorem eget tortor condimentum, in mollis lorem mollis. Aliquam eu nulla lacinia, malesuada nisi ut, ultrices enim. Proin lorem tortor, tempus nec iaculis id, posuere eu mi. Maecenas accumsan suscipit lacus, id efficitur neque. Pellentesque mattis scelerisque eros eu varius. Sed ac laoreet augue, non consequat ligula. Phasellus pellentesque magna at tellus auctor efficitur.
                    </p>
                    <p>
                        Phasellus sagittis lorem vel massa hendrerit, id hendrerit nibh consectetur. Etiam ut fringilla ante. Praesent et dui sem. Aliquam erat volutpat. Donec et risus porta, congue quam vitae, semper lacus. Aliquam imperdiet vehicula ipsum, ut sagittis neque laoreet et. Proin commodo lacinia cursus. Maecenas ac turpis non dolor gravida lobortis in eget tortor. Nunc quis est sem. Curabitur mollis commodo dui id egestas. Phasellus nec arcu urna.
                    </p>
                    <p>
                        Etiam mattis mollis augue. Aenean sit amet arcu elementum, vestibulum lectus sit amet, viverra lorem. Suspendisse vitae ante libero. Donec tempus sed felis a suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla blandit ligula eget neque dictum, ut dictum diam congue. Nulla fringilla hendrerit nulla a blandit. Aliquam ultricies ex dolor, sed ullamcorper lacus blandit ut. Nam ultricies tristique erat a vestibulum. Aliquam dapibus velit id sodales placerat. Maecenas eget tellus risus. Vestibulum ornare ligula in lacus placerat auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus dictum risus, et feugiat nunc lacinia eget. Suspendisse sed purus quis orci tincidunt ullamcorper. Aliquam erat volutpat. Quisque id egestas sem. Donec cursus lorem eget tortor condimentum, in mollis lorem mollis. Aliquam eu nulla lacinia, malesuada nisi ut, ultrices enim. Proin lorem tortor, tempus nec iaculis id, posuere eu mi. Maecenas accumsan suscipit lacus, id efficitur neque. Pellentesque mattis scelerisque eros eu varius. Sed ac laoreet augue, non consequat ligula. Phasellus pellentesque magna at tellus auctor efficitur.
                    </p>
                    <p>
                        Phasellus sagittis lorem vel massa hendrerit, id hendrerit nibh consectetur. Etiam ut fringilla ante. Praesent et dui sem. Aliquam erat volutpat. Donec et risus porta, congue quam vitae, semper lacus. Aliquam imperdiet vehicula ipsum, ut sagittis neque laoreet et. Proin commodo lacinia cursus. Maecenas ac turpis non dolor gravida lobortis in eget tortor. Nunc quis est sem. Curabitur mollis commodo dui id egestas. Phasellus nec arcu urna.
                    </p>
                    <p>
                        Etiam mattis mollis augue. Aenean sit amet arcu elementum, vestibulum lectus sit amet, viverra lorem. Suspendisse vitae ante libero. Donec tempus sed felis a suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla blandit ligula eget neque dictum, ut dictum diam congue. Nulla fringilla hendrerit nulla a blandit. Aliquam ultricies ex dolor, sed ullamcorper lacus blandit ut. Nam ultricies tristique erat a vestibulum. Aliquam dapibus velit id sodales placerat. Maecenas eget tellus risus. Vestibulum ornare ligula in lacus placerat auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                </div>
                <div className="modal-action">
                <form method="dialog" className="m-auto">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>  
                <label className=" flex items-center cursor-pointer gap-2 mb-4">
                    <input type="checkbox" className="checkbox"  />
                    <span className="label-text">I accept the terms and agreements specified above</span>
                </label>
                <div className="w-fit m-auto"><Button label="Continue" /></div>               
                </form>
                </div>
            </div>
            </dialog>
            <Navbar/>


            <div className="w-[1000px] h-[750px] rounded-lg p-10 m-auto bg-custom-container my-10 border">
                <div className="text-center">
                    <ul className="steps w-full text-sm">
                        <li data-content="" className="step step-primary">Basic Information</li>
                        <li data-content="" className="step">Assessment</li>
                        <li data-content="" className="step">Application Form</li>
                    </ul>
                </div>

                {/* INSERT CHILD COMPONENT HERE */}
                <PreScreening   />

                {/* END SECTION HER */}

                <div className="text-center">
                        <Button label="Next" width="w-[28rem]"/>
                </div>
            </div>
        </div>
    )
}