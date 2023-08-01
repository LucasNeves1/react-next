export default function Evento() {
    let contador = 0;

    function incrementar() {
        console.log(contador++);
    }
    return (
        <button className={`
            h-72 w-72 flex justify-center items-center text-4xl bg-green-700
        `} onClick={incrementar}>
            Evento
        </button>
    )
}