export const GrammarTest = () => {
    return (
        <div className="max-w-md m-auto grid gap-5">
            <h2 className="text-3xl font-bold my-2 text-center">Grammar Test</h2>
            <div className="form-control grid gap-2">
                <label className="text-xl font-semibold">1. I _____ to Greece until Sally and I went there last Summer.</label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>have never been to</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>had never been to</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>was never being</span>
                </label>
            </div>
            <div className="form-control grid gap-2">
                <label className="text-xl font-semibold">2. I _____ couple of days ago.</label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>had my bike to be fixed</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>had my bike fix</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>had my bike fixed</span>
                </label>
            </div>
            <div className="form-control grid gap-2">
                <label className="text-xl font-semibold">3.George drives _____ than his brother.</label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>more recklessly</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>the most recklessly</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" />
                    <span>had my bike fixed</span>
                </label>
            </div>
        </div>
    )
}