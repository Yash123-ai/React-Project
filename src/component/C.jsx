import React, { useEffect, useState } from 'react'
import axios from 'axios'

function C() {
    const [recipes, setRecipes] = useState(null);
    useEffect(() => {
        axios.get("https://dummyjson.com/recipes")
            .then(res => setRecipes(res.data.recipes));
    }, [])

    return (
        <div>
            {recipes && recipes.map((r, i) => {
                return <>
                    <p>
                        {r.id} {r.name} {r.ingredients}
                    </p>

                    <img src={r.image} />
                    <hr />
                </>
            })}
        </div>
    )
}

export default C;