import Button from "../../Button"

export const ApplicationDoneStep = () => {
    return (
        <div className=" text-center h-full flex justify-center flex-col items-center gap-4">
            <div>
                <h2 className="text-3xl font-semibold">Thank you for completing your application!</h2>
                <p className="text-lg">An email has sent your inbox. We’ll update you regarding your application after 3 days.</p>
            </div>
            <a href="/"><Button label="Go Back to Home" /></a>
        </div>
    )
}