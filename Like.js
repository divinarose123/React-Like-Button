import React, { useState } from 'react' //useState is provided by react

function Like(props) {
    const [count, setCount] = useState(0) // passes [variable, functionToChangeVariable]
    const [likes, setLikes] = useState('likes')


    
    function incrementCount() {
        setCount(count + 1)
        console.log(count)
        if(count === 0) {
            setLikes('like')
        }else {
            setLikes('likes')
        }
    }
    
    return <button className="buttons" onClick={incrementCount}>
    {count} {likes}
    </button>
}

export default Like