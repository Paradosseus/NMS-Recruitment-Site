export const EssayTest = () => {
    return (
        <div className="my-auto grid gap-5">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Essay Test</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <label className="form-control  max-w-full">
                    <div className="label">
                        <span className="label-text text-lg font-semibold">Describe your most embarassing moment?</span>
                    </div>
                    <textarea
                        placeholder="Start here"
                        className="textarea textarea-bordered textarea-md w-full max-w-full h-[150px]"></textarea>
                </label>
            </div>
            <div>
                <label className="form-control max-w-full">
                <div className="label">
                    <span className="label-text text-lg font-semibold">I am a good person. Berate me.</span>
                </div>
                <textarea
                    placeholder="Start here"
                    className="textarea textarea-bordered textarea-md w-full max-w-full h-[150px]"></textarea>
            </label>
            </div>
        </div>
    )
}