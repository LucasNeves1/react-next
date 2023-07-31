interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    return (
        <div className={`
            flex justify-center items-center h-64 w-64 bg-cyan-600 text-black text-3xl
            ${props.quasePerfeito ? 'rounded-lg' : 'rounded-full'}
        `}>
        {props.texto}
        </div>
    )
}