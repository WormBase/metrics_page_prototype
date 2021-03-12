import Link from 'next/link'
import queries from '../section_01.json'
import queries2 from '../section_02.json'
import queries3 from '../section_03.json'
import queries4 from '../section_04.json'
import queries5 from '../section_05.json'
import queries6 from '../section_06.json'
import queries7 from '../section_07.json'

console.log(queries)
const Queries = () => (
    <div className='md:flex bg-grey rounded-lg p-24 justify-center font-mono text-lg text-gray-800 text-center '>
        <div className='text-center md:text-left'>
            <br />
            <h1 className='font-mono text-3xl text-gray-800 text-center p-20'>WormBase metrics</h1>
            <h4 className='font-mono  text-gray-800 p-5 bg-gray-200'>Genes</h4>
            <ul>
                {Object.entries(queries).map((value, index) => {
                    return <li  key={index}>
                        <div class='grid grid-cols-12 gap-5 hover:bg-teal-200'>
                            <div class='col-start-1 col-span-7'>{value[1]['title']}</div>
                            <div class='col-start-11 col-span-1 text-right'>{value[1]['value']}</div>
                            <div class='col-start-12 col-span-1 text-right'>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg' /></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            <br />
            <h4 className='font-mono  text-gray-800 p-5 bg-gray-200'>RNA</h4>
            <ul>
                {Object.entries(queries2).map((value, index) => {
                    return <li  key={index}>
                        <div class='grid grid-cols-12 gap-5 hover:bg-teal-200'>
                            <div class='col-start-1 col-span-7'>{value[1]['title']}</div>
                            <div class='col-start-11 col-span-1 text-right'>{value[1]['value']}</div>
                            <div class='col-start-12 col-span-1 text-right'>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg' /></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            <br />
            <h4 className='font-mono  text-gray-800 p-5 bg-gray-200'>GO</h4>
            <ul>
                {Object.entries(queries3).map((value, index) => {
                    return <li key={index}>
                        <div className='grid grid-cols-12 gap-5 hover:bg-teal-200'>
                            <div className='col-start-1 col-span-7'>{value[1]['title']}</div>
                            <div className='col-start-11 col-span-1 text-right'>{value[1]['value']}</div>
                            <div className='col-start-12 col-span-1 text-right'>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img
                                        src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg'/></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            <br />
            <h4 className='font-mono  text-gray-800 p-5 bg-gray-200'>Chromosomes</h4>
            <ul>
                {Object.entries(queries4).map((value, index) => {
                    return <li key={index}>
                        <div className='grid grid-cols-12 gap-5 hover:bg-teal-200'>
                            <div className='col-start-1 col-span-7'>{value[1]['title']}</div>
                            <div className='col-start-11 col-span-1 text-right'>{value[1]['value']}</div>
                            <div className='col-start-12 col-span-1 text-right'>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img
                                        src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg'/></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            <br />
            <h4 className='font-mono  text-gray-800 p-5 bg-gray-200'>Proteins</h4>
            <ul>
                {Object.entries(queries5).map((value, index) => {
                    return <li key={index}>
                        <div className='grid grid-cols-12 gap-5 hover:bg-teal-200'>
                            <div className='col-start-1 col-span-7'>{value[1]['title']}</div>
                            <div className='col-start-11 col-span-1 text-right'>{value[1]['value']}</div>
                            <div className='col-start-12 col-span-1 text-right'>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img
                                        src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg'/></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            <br />
            <h4 className='font-mono  text-gray-800 p-5 bg-gray-200'>Strains</h4>
            <ul>
                {Object.entries(queries6).map((value, index) => {
                    return <li key={index}>
                        <div className='grid grid-cols-12 gap-5 hover:bg-teal-200'>
                            <div className='col-start-1 col-span-7'>{value[1]['title']}</div>
                            <div className='col-start-11 col-span-1 text-right'>{value[1]['value']}</div>
                            <div className='col-start-12 col-span-1 text-right'>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img
                                        src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg'/></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            <br />
            <h4 className='font-mono  text-gray-800 p-5 bg-gray-200'>Alelles</h4>
            <ul>
                {Object.entries(queries7).map((value, index) => {
                    return <li key={index}>
                        <div className='grid grid-cols-12 gap-5 hover:bg-teal-200'>
                            <div className='col-start-1 col-span-7'>{value[1]['title']}</div>
                            <div className='col-start-11 col-span-1 text-right'>{value[1]['value']}</div>
                            <div className='col-start-12 col-span-1 text-right'>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img
                                        src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg'/></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </div>
);




export default Queries
