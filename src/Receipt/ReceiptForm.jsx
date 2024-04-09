import React from 'react'
import { useEffect, useState } from 'react';
import Receipt from '../API/Receipt';

export default function ReceiptForm() {
    const [recID, setRecID] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        console.log("Updated recID:", recID);
    }, [recID]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setRecID(e.target.data.value);
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='flex flex-col p-10 border border-3'>
                <p className='my-10 font-bold text-2xl'>กรอกรหัสใบเสร็จ</p>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='data' className='border mr-5'></input>
                    <button type='submit' className='bg-red-500 p-2 rounded-lg'>Submit</button>
                </form>
                {isSubmitted && <Receipt recID={recID} />}
            </div>
        </>
    )
}
