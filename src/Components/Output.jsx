import React from 'react'

const Output = ({ input, setInput, answer }) => {
    const handleChange =()=>{
        if(e.target.value === "")
        setInput(e.target.value);
    }
    return (
        <>
            {
                answer === "" ? (
                    <div className='output'>
                        <input
                            type="text"
                            value={input}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </div>
                ) :(
                    <div className='output'>
                        <input
                            type="text"
                            value={input}
                            maxLength={12}
                            disabled
                        /> 
                        <div className='answer' maxLength={12}
                            disabled>
                        {answer}
                        </div>
                     
                    </div>
                )
        }
        </>
    )
}

export default Output;