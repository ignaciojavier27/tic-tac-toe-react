import CardJuegos from "../components/CardJuegos"

const MainScreen = () => {
    return (
    <main className="app container-md my-5">
        <h1 className="fw-bold">Juegos</h1>
        <section className="container-games mt-5 d-flex gap-3">
            <CardJuegos nombre="Tic-Tac-Toe" />
        </section>
    </main>
    )
}

export default MainScreen
