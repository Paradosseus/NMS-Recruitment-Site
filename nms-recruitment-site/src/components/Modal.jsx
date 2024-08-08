import { useState } from "react"
import Button from "./Button"

export const Modal = () => {
    const [termsChecked, setTermsChecked] = useState(false)

    const handleCheckbox = (event) => {
        setTermsChecked(event.target.checked)
    }

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-4xl text-center py-4">Important</h3>
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
                    <input type="checkbox" className="checkbox" onChange={handleCheckbox} />
                    <span className="label-text">I accept the terms and agreements specified above</span>
                </label>
                <div className="w-fit m-auto"><Button label="Continue" disabled={!termsChecked}/></div>               
                </form>
                </div>
            </div>
            </dialog>
        </div>
    )
}