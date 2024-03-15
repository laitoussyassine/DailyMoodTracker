

const Message = ({confirmationMessage}) => {
    return (
        <>
           
                <div className="mt-4 text-green-500 flex min-h-screen items-center justify-center">
                    <h1 className="font-semibold text-xl">{confirmationMessage}</h1>
                </div>
             
        </>
    )
}

export default Message