
export default function Error() {
    console.log('error')
    return (
        <>
            <div className="modalBackdrop" />
            <section>
                <div className="modal-container">
                <header>
                    <h2>An error occured!</h2>
                </header>
                <div className="error-msg">
                    <p>All fields are require</p>
                </div>
                <footer className="modal-close">
                    <button type="button">close</button>
                </footer>
                </div>
            </section>
        </>
    )
}