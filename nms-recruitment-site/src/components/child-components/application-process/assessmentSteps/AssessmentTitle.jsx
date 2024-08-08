export const AssessmentTitle = () => {
    return (
        <div className="max-w-md m-auto text-center h-[600px] flex justify-center flex-col">
            <h2 className="text-5xl font-semibold">Assessment</h2>
            <p className="text-xl">As part of the application, you are required to answer the following question</p>
        </div>
    )
}

export const AssessmentInstruction = () => {
    return(
        <div className="max-w-md m-auto grid gap-5 mb-4 py-4">
            <h2 className="text-3xl font-bold">The Assessment will consist of 4 Parts:</h2>
            <div>
                <h3 className="text-xl font-semibold">Pre-screening</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a  fermentum ligula. </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Grammar Test</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a  fermentum ligula. Nam non nisi turpis. Nullam AssessmentInstruction dignissim  risus, in venenatis urna fermentum a.</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Typing Test</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a  fermentum ligula. Nam non nisi turpis. </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Essay</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a  fermentum ligula. Nam non nisi turpis. </p>
            </div>
        </div>
    )
}