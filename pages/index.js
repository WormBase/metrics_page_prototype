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

    <div>
        <img id="logo" src="model/images/logo_wb.png" height="34px" alt="Logo" />
        <div>
            <br />
            <h1>WormBase metrics</h1>
            <h4>Genes</h4>
            <ul>
                {Object.entries(queries).map((value, index) => {
                    return <li  key={index}>
                        <div>
                            <div>{value[1]['title']}</div>
                            <div>{value[1]['value']}</div>
                            <div>
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
                        <div>
                            <div>{value[1]['title']}</div>
                            <div>{value[1]['value']}</div>
                            <div>
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
                        <div>
                            <div>{value[1]['title']}</div>
                            <div>{value[1]['value']}</div>
                            <div>
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
                        <div>
                            <div>{value[1]['title']}</div>
                            <div>{value[1]['value']}</div>
                            <div>
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
                        <div>
                            <div>{value[1]['title']}</div>
                            <div>{value[1]['value']}</div>
                            <div>
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
                        <div>
                            <div>{value[1]['title']}</div>
                            <div>{value[1]['value']}</div>
                            <div>
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
                        <div>
                            <div>{value[1]['title']}</div>
                            <div>{value[1]['value']}</div>
                            <div>
                                <Link href={value[1]['url']} passHref={true}>
                                    <img
                                        src='https://raw.githubusercontent.com/angular/material-icons/master/icons/system_icons/content/res-export/ic_link_24px.svg'/></Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
        <div id="footer">
            <div id="footer-nav">
                <div className="footer-column">
                    <div className="footer-title">About</div>
                    <ul>
                        <li><span>Nematodes</span></li>
                        <li><a href="/about/userguide/nomenclature">Nomenclature</a></li>
                    </ul>

                    <ul>
                        <li><span>WormBase</span></li>
                        <li><a href="/about#0--10">Mission</a></li>
                        <li><a href="/about/advisory_board#01--10">Advisory Board</a></li>
                        <li><a href="/about/policies#1--10">Privacy</a></li>
                        <li><a href="/about/policies#0--10">Acceptable Use</a></li>
                        <li><a href="/about/policies#2--10">Copyright</a></li>
                        <li><a href="/about/release_schedule#01--10">Release Schedule</a></li>
                        <li><a href="/about/citing_wormbase#012--10">How to Cite</a></li>
                        <li><a href="/about/acknowledgments#0--10">Acknowledgments</a></li>
                        <li><a href="/about/staff#01--10">WormBase Staff</a></li>
                        <li><a href="http://legacy.wormbase.org/"
                               target="_blank"><span className="wb-ext">Legacy Site</span></a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <div className="footer-title">Support</div>
                    <ul>
                        <li><a href="/about/userguide/submit_data#01--10">Submit Data</a></li>
                        <li><a href="mailto:help@wormbase.org">Email</a></li>
                        <li><a href="/about/Frequently_asked_questions">FAQ</a></li>
                        <li><a href="/about/userguide">User Guide</a></li>
                        <li><a href="/tools/webinar.cgi">Webinar</a></li>
                        <li><a href="https://www.youtube.com/user/WormBaseHD"
                               target="_blank"><span className="wb-ext">WormBaseHD YouTube</span></a></li>
                        <li><a href="/tools/support?url=/footer">Contact Help</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <div className="footer-title">Community</div>
                    <ul>
                        <li><a href="https://wiki.wormbase.org/index.php/WormBoard"
                               target="_blank"><span className="wb-ext">WormBoard</span></a></li>
                        <li><a href="http://www.wormbook.org/"
                               target="_blank"><span className="wb-ext">WormBook</span></a></li>
                        <li><a href="http://forums.wormbase.org"
                               target="_blank"><span className="wb-ext">Forum</span></a></li>
                        <li><a href="/resources/laboratory#012--10">Worm Labs</a></li>
                        <li><a href="http://blog.wormbase.org"
                               target="_blank"><span className="wb-ext">Blog</span></a></li>
                        <li><a href="http://twitter.com/wormbase"
                               target="_blank"><span className="wb-ext">Twitter</span></a></li>
                        <li><a href="/species/c_elegans#1--10">Key Papers</a></li>
                    </ul>

                    <ul>
                        <li><span>Friends</span></li>
                        <li><a href="https://cgc.umn.edu/"
                               target="_blank"><span className="wb-ext">CGC</span></a></li>
                        <li><a href="http://www.wormatlas.org"
                               target="_blank"><span className="wb-ext">WormAtlas</span></a></li>
                        <li><a href="http://www.nematodes.org/"
                               target="_blank"><span className="wb-ext">Nematodes.org</span></a></li>
                        <li><a href="http://www.ipm.ucdavis.edu/NEMABASE/"
                               target="_blank"><span className="wb-ext">NEMABASE</span></a></li>
                        <li><a href="http://nematode.net/"
                               target="_blank"><span className="wb-ext">Nematode.net</span></a></li>
                        <li><a href="http://www.smid-db.org/"
                               target="_blank"><span className="wb-ext">SMID-DB</span></a></li>
                    </ul>
                </div>


                <div className="footer-column">
                    <div className="footer-title">Developer</div>
                    <ul>
                        <li><a href="/about/userguide/for_developers">Developer Documentation</a></li>
                        <li><a href="/about/userguide/for_developers/api-rest">RESTful API</a></li>
                        <li><a href="http://github.com/WormBase"
                               target="_blank"><span className="wb-ext">Code Repositories (Github)</span></a></li>
                        <li><a href="/about/internal_documentation">Staff Documentation</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <div className="footer-title">Downloads</div>
                    <ul>
                        <li><a href="ftp://ftp.wormbase.org/pub/wormbase/">FTP site</a></li>
                    </ul>
                </div>


            </div>

            <br clear="all"/>


            <div id="footermeta">
                <a id="footer-mail" href="mailto:help@wormbase.org">
                    <div className="social-icons"></div>
                </a>
                <a id="footer-tweet" href="http://twitter.com/wormbase">
                    <div className="social-icons"></div>
                </a>
                <a id="footer-rss" href="http://feeds.feedburner.com/wormbase">
                    <div className="social-icons"></div>
                </a>
            </div>
            <div id="footercredit">
                <div className="credit-badge-container">
                    <div className="credit-badge"><a href="http://www.alliancegenome.org/"
                                                     target="_blank"><span className="wb-ext"><img width="200px"
                                                                                                   src="/img/agr_founding_member_badge.png"
                                                                                                   alt="Alliance of Genome Resources"/></span></a>
                    </div>
                    <div className="credit-badge"><a href="http://www.caltech.edu/"
                                                     target="_blank"><span className="wb-ext"><img width="150px"
                                                                                                   src="/img/caltech_logo.png"
                                                                                                   alt="Caltech"/></span></a>
                    </div>
                    <div className="credit-badge"><a href="https://www.ebi.ac.uk/"
                                                     target="_blank"><span className="wb-ext"><img width="200px"
                                                                                                   src="/img/embl_ebi_logo_white.svg"
                                                                                                   alt="European Bioinformatics Institute"/></span></a>
                    </div>
                    <div className="credit-badge"><a href="https://oicr.on.ca/"
                                                     target="_blank"><span className="wb-ext"><img height="65px"
                                                                                                   src="/img/oicr_logo_white.png"
                                                                                                   alt="Ontario Institute for Cancer Research"/></span></a>
                    </div>
                </div>
                <div className="credit-text-container">
        <span>
          WormBase is supported by grant #U24 HG002223 from the <a href="http://www.genome.gov/"
                                                                   target="_blank"><span className="wb-ext">National Human Genome Research Institute</span></a> </span><br/>
                    <span>at the <a href="http://www.nih.gov/"
                                    target="_blank"><span className="wb-ext">US National Institutes of Health</span></a>,
          the <a href="http://www.mrc.ac.uk/"
                 target="_blank"><span className="wb-ext">UK Medical Research Council</span></a> and the <a
                            href="http://www.bbsrc.ac.uk/home/home.aspx"
                            target="_blank"><span className="wb-ext">UK Biotechnology and Biological Sciences Research Council</span></a>.
        </span>
                </div>
            </div>


        </div>
    </div>






);




export default Queries
