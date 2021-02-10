import Link from 'next/link'
import queries from '../results.json'
console.log(queries)
const Queries = () => (
    <div className='md:flex bg-grey rounded-lg p-24 justify-center font-mono text-lg text-gray-800 text-center bg-teal-200 '>
        <div className='text-center md:text-left'>
            <br />
            <h1 className='font-mono text-3xl text-gray-800 text-center p-20'>WormBase metrics</h1>
            <ul>
                {Object.entries(queries).map((value, index) => {
                    return <li  key={index}>
                        <div class='grid grid-cols-12 gap-5 hover:bg-teal-500'>
                            <div class='col-start-1 col-span-7 '>{value[1]['title']}</div>
                            <div class='col-start-11 col-span-1 text-right'>{value[1]['value']}</div>
                            <div class='col-start-12 col-span-1 text-right'>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg' /></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </div>

);

export default Queries
