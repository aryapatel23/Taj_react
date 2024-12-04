import "./style.css"
import arya1 from './Assetsforhome/white-downarrow.png'
import arya2 from'./Assetsforhome/search-icon-white.png'
import arya3 from"./Assetsforhome/hoverimg.png"
import arya4 from "./Assetsforhome/right-arrow.png"



function HomePage() {

    return (

        <>
            <div className="video">
                <video
                    src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High"
                    autoplay loop muted></video>
            </div>
            <div className="nevbar">
                <div className="logo"><img
                    src="https://cdn.sanity.io/images/ocl5w36p/prod2/eaf9ae941361d173fdbd613ba600197b69471d50-100x88.png"
                    alt="" />
                </div>
                <div className="nevflexleft">
                    <div className="nevspace">DESTINATIONS</div>
                    <div className="nevspace">HOTELS</div>
                    <div className="nevspace">DINING</div>
                    <div className="nevspace">OFFERS</div>
                    <div className="nevspace">MEMBERSHIPS <img src={arya1} alt="" width='12px' /> </div>
                    <div className="nevspace">MORE <img src={arya1} alt="" width='12px' /></div>
                </div>
                <div className="nevflexright">
                    <div>LOGIN / JOIN</div>
                    <button id="book">BOOK A STAY</button>

                </div>

            </div>


            <div class="firstsearchicon">
                <div><img src={arya2} alt="" /></div>
            </div>

            <div className="firstbody">
                <div className="globalicon">
                    <hr
                        width="100px"
                        style={{
                            backgroundColor: 'black',
                            height: '1px',
                            opacity: 0.3,
                        }}
                    />
                    <div>GLOBAL ICON OF INDIAN HOSPITALITY</div>
                    <hr
                        width="100px"
                        style={{
                            backgroundColor: 'black',
                            height: '1px',
                            opacity: 0.3,
                        }}
                    />
                </div>
                <div className="globaltxt">
                    <span>
                        Enter a realm of storied halls, sophisticated delights, and unrivalled indulgence. <br />
                        Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts, <br />
                        and safaris.
                    </span>
                </div>
                <div className="globalimage">
                    <img src={arya3} alt="Global Icon" />
                </div>
            </div>
            <div className="latestofferblock">
                <div className="latestoffer">
                    <hr
                        className="latestofferhr"
                        width="100px"
                        style={{
                            backgroundColor: 'black',
                            height: '1px',
                            opacity: 0.3,
                        }}
                    />
                    <div className="latest">LATEST OFFERS</div>
                </div>

                <div className="latestoffertxt">
                    Dive into cool adventures at our picture-perfect destinations with Taj <br /> Hotels.
                </div>

                <div className="latestofferimgs">
                    <div>
                        <img
                            src="https://cdn.sanity.io/images/ocl5w36p/prod2/ee98c0c6c2de04edc4e2a4d20177a16952bc1945-800x640.jpg?w=480&fm=webp&dpr=2"
                            alt="Offer 1"
                            width="490px"
                            height="400px"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.sanity.io/images/ocl5w36p/prod2/43daba648c6f6820c736b1967811868fc581cae1-800x640.jpg?w=480&fm=webp&dpr=2"
                            alt="Offer 2"
                            width="490px"
                            height="400px"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.sanity.io/images/ocl5w36p/prod2/d55d1f286ce371fb78583147b2bacf2448cc3674-1400x1120.jpg?w=480&fm=webp&dpr=2"
                            alt="Offer 3"
                            width="490px"
                            height="400px"
                        />
                    </div>
                </div>
            </div>

            <div className="overlapeele">
                <div className="overlapewhite1">
                    <div className="overlapetxt">
                        CYBER MONDAY OFFER
                        <div className="more">
                            MORE <img src={arya4} alt="More" width="12px" />
                        </div>
                    </div>
                </div>
                <div className="overlapewhite2">
                    <div className="overlapetxt">
                        NEW BEGINNING
                        <div className="more">
                            MORE <img src={arya4} alt="More" width="12px" />
                        </div>
                    </div>
                </div>
                <div className="overlapewhite3">
                    <div className="overlapetxt">
                        SUITE SURPRISES
                        <div className="more">
                            MORE <img src={arya4} alt="More" width="12px" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Exclusive Section */}
            <div className="exclusive">
                <div className="exclusivetxtmain">
                    <hr
                        className="exclusivelyhr"
                        width="100px"
                        style={{ backgroundColor: 'white', height: '1px', opacity: 0.8 }}
                    />
                    <div className="firstexclusivetxt">EXCLUSIVELY</div>
                    <div className="secondexclusivetxt">FOR YOU</div>
                    <div className="smallexclusivetxt">
                        Refinement and creativity intertwine with dreamlike destinations and <br />
                        soulful moments on each sojourn with Taj.
                    </div>
                </div>

                <div className="exclusiveallimg">
                    <div className="exclusiveimg">
                        <img
                            src="https://cdn.sanity.io/images/ocl5w36p/prod2/58f8418d3475dcb62f3a731c464df29d8f3e0eb1-1892x860.jpg?w=768&fm=webp&dpr=2"
                            alt="Exclusive Offer"
                            width="650px"
                            height="305px"
                        />
                    </div>
                    <div className="imgtxt">
                        <h3 className="h3exclusive">EPICURE</h3>
                        <span className="spantxt">
                            A world of benefits designed to indulge with member-only savings, unique <br />
                            vouchers, exclusive benefits and more.
                        </span>
                        <div className="moreexclusive">
                            MORE <img src="./img/right-arrow.png" alt="More" width="12px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="exploremore">
            {/* Header Section */}
            <div className="headerexplore">
                <hr
                    className="explorehr"
                    width="100px"
                    style={{ backgroundColor: 'black', height: '1px', opacity: 0.8 }}
                />
                <div className="exploretxt">EXPLORE</div>
                <div className="moretxt">More</div>
                <div className="exploresmalltxt">
                    Relaxing beach paradises, thrilling urban getaways, exotic hill <br />
                    stations and historic homes of royalty are all within reach.
                </div>
            </div>

            {/* Image Section */}
            <div className="exploreimg">
                <div>
                    <img
                        src="https://cdn.sanity.io/images/ocl5w36p/prod2/3b74fa2b40d6320560ced0ba2122deb31512b888-1400x1120.jpg?w=480&fm=webp&dpr=2"
                        alt="Beach Paradise"
                        width="500px"
                        height="400px"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.sanity.io/images/ocl5w36p/prod2/0ce7584dc1d8f84ac0f86ae3896220ed22740697-1400x1120.jpg?w=480&fm=webp&dpr=2"
                        alt="Urban Getaway"
                        width="500px"
                        height="400px"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.sanity.io/images/ocl5w36p/prod2/096822829bd29fcd188c6d83d8fb1152d95393b0-1425x1140.jpg?w=480&fm=webp&dpr=2"
                        alt="Hill Station"
                        width="500px"
                        height="400px"
                    />
                </div>
            </div>

            {/* Overlay Elements */}
            <div className="overlapeele">
                <div className="overlapewhite1">
                    <div className="overlapetxt">
                        CITY HOTELS
                        <div className="more">
                            MORE <img src={arya4} alt="More" width="12px" />
                        </div>
                    </div>
                </div>
                <div className="overlapewhite2">
                    <div className="overlapetxt">
                        ENCHANTING SAFARIS
                        <div className="more">
                            MORE <img src={arya4} alt="More" width="12px" />
                        </div>
                    </div>
                </div>
                <div className="overlapewhite3">
                    <div className="overlapetxt">
                        IDYLLIC RESORTS
                        <div className="more">
                            MORE <img src={arya4} alt="More" width="12px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="eventsandconsferences">
            {/* Header Section */}
            <div className="headerevents">
                <hr
                    className="eventshr"
                    width="100px"
                    style={{ backgroundColor: 'black', height: '1px', opacity: 0.8 }}
                />
                <div className="event">EVENTS AND</div>
                <div className="conferences">CONFERENCES</div>
                <div className="eventssmalltxt">
                    Taj elevates every occasion into an awe-inspiring, immersive <br />
                    experience to cherish forever.
                </div>
            </div>

            {/* Image Section */}
            <div className="eventsandconferences">
                <div>
                    <img
                        src="https://cdn.sanity.io/images/ocl5w36p/prod2/6d34584a52ea8140cfca9cc30d693325abca5925-1400x1080.jpg?w=768&fm=webp&dpr=2"
                        alt="Event Image 1"
                        width="359px"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.sanity.io/images/ocl5w36p/prod2/d451ef209272bc10c3665a819b4865034801d2a2-1400x1080.jpg?w=768&fm=webp&dpr=2"
                        alt="Event Image 2"
                        width="359px"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.sanity.io/images/ocl5w36p/prod2/8458083aed28ec653b7d55ebe021378a6fe40b17-1400x1080.jpg?w=768&fm=webp&dpr=2"
                        alt="Event Image 3"
                        width="359px"
                    />
                </div>
            </div>

            {/* White Block Section */}
            <div className="eventwhiteblock">
                <div className="eventwhiteblockele">
                    MEETINGS & <br /> CONFERENCES
                </div>
                <div className="eventwhiteblockele">EVENTS</div>
                <div className="eventwhiteblockele">TIMELESS WEDDINGS</div>
            </div>
        </div>

        </>
    )
}
export default HomePage