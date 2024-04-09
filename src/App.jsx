import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SellReport from './Report/SellReport'; // ตรวจสอบว่าคุณได้ import component Home แล้ว
import ReceiptForm from './Receipt/ReceiptForm';
import './tailwind.css';

export default function App() {
  return (
    <>
      <Router>
        <div className='w-full h-screen' style={{height: '1200px'}}>
          <div className='flex h-full'>
            <div className='flex w-52 flex-col bg-zinc-900 sticky top-0'>
              <div className='py-2'>
                <nav>
                  <div className='text-center'>
                    <p className='p-5 font-bold text-white'>SMITI SHOP</p>
                  </div>
                  <ul>
                    <li className='p-2 hover:bg-red-500 text-white font-semibold my-5'>
                      <Link to="/SellReport">
                        <i class='bx bxs-home'></i>     รายงาน
                      </Link>
                    </li>
                    <li className='p-2 hover:bg-red-500 text-white font-semibold my-5'>
                      <Link to="/Receipt">
                      <i class='bx bxs-receipt'></i>     ใบ Receipt
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

            </div >
            <div className='flex-1'>
              <Routes>
                <Route path="/SellReport" element={<SellReport />} />
                <Route path="/Receipt" element={<ReceiptForm />} />
              </Routes>
            </div>
          </div >
        </div>
      </Router>
    </>
  );
}