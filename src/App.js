import './App.css';

function App() {
  return (
    <div className='h-screen bg-gray-100 p-8'>
        <div className=''>
          <input className='p-4 text-gray-800 w-full mb-4' type="text" placeholder='Search...'/>
         <div className='flex justify-center'>
         <ul className='grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-12'>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John2
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John3
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John4
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John5
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John6
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John7
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John8
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John9
            </li>
            <li className='bg-white p-4 w-32 text-center rounded shadow-lg'>
              John10
            </li>
          </ul>
         </div>
        </div>
    </div>
  );
}

export default App;
