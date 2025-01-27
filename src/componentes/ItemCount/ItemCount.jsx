import { useState } from "react"

const ItemCount = ({stock}) => {

    const [contador, setcontador] = useState(1)


    const incrementar = () => {
       if (contador < stock){setcontador (contador + 1)}
    }

    const descrementar = () => {
        if (contador > 1){setcontador (contador - 1)}
    }

  return (
    <div>

    <button onClick={incrementar}> + </button>
    <p>{contador}</p>
    <button onClick={descrementar}> - </button>

    </div>
  )
}

export default ItemCount