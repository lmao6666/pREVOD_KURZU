import { useState } from 'react'

export const Prevod = () => {
    const [cislo, setCislo] = useState(0);

    return(
        <div>
            <h1>
                Převod EUR do jiné měny
            </h1>
            <div>
            <input
            type="number"
            value={cislo}
            onChange={(e) = setCislo(e.target.value)}
            style={{ padding: '5px' }}
            />

            <select></select>
            <button>Preved</button>

            </div>
        </div>
    )
}