import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SellReport from './Report/SellReport'; // ตรวจสอบว่าคุณได้ import component Home แล้ว
import './tailwind.css';

export default function App() {
    return (
        <>
            <Router>
                <div className='w-full h-screen'>
                    <div className='flex h-full'>
                        <div className='flex w-52 flex-col h-screen bg-zinc-900'>
                            <div className='py-2'>
                                <nav>
                                    <div className='text-center'>
                                        <p className='p-5 font-bold text-white'>SMITI SHOP</p>
                                    </div>
                                    <ul>
                                        <li className='p-2 hover:bg-red-500 text-white font-semibold mt-2'>
                                            <Link to="/Home">
                                                <i class='bx bxs-home'></i>     หน้าแรก
                                            </Link>
                                        </li>
                                        <li className='p-2 hover:bg-red-500 text-white font-semibold my-5'>
                                            <Link to="/SellReport">
                                                <i class='bx bxs-home'></i>     รายงาน
                                            </Link>
                                        </li>
                                        <li className='p-2 hover:bg-red-500 text-white font-semibold my-5'>
                                            <Link to="/Home">
                                                <i class='bx bxs-home'></i>     ใบ Invoice
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>


                            </div>

                        </div >
                        <div className='flex-1'>
                            <Routes>
                                <Route path="/SellReport" element={<SellReport />} />
                            </Routes>
                        </div>
                    </div >
                </div>
            </Router>
        </>
    );
}