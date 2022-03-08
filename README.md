# ukraine-warmap

Ukraine's latitude is 48.3794° N, and the country's longitude is 31.1656° E.
https://latitude.to/map/ua/ukraine

https://docs.mapbox.com/help/tutorials/style-single-country/#step-6-add-country-borders

   <div id="map"></div>
       <div class="mapClass" id="map"></div>
https://www.youtube.com/watch?v=dIyVTjJAkLw
#palette 
https://coolors.co/palette/ffffff-00171f-003459-007ea7-00a8e8

        <nav class="navigation-bar">
            <div class="navigation-container">
                <div class="datum-container">
                    <div class="datum">
                        <span id="veckodag">Dag</span>,
                        <span id="manad">Månad</span>
                        <span id="dag">00</span>,
                        <span id="ar">År</span>
                    </div>
                    <div class="tid">
                        <span id="timme">00</span>:
                        <span id="minut">00</span>:
                        <span id="sekund">00</span>
                    </div>
                </div>
                <div><h1>UKRAINE-RUSSIA CONFLICT</h1></div>
                <ul class="navigation-menu">
                    <li class="navigation-item">
                        <a href=""></a>
                    </li>
                    <li class="navigation-item">
                        <a href=""></a>
                    </li>
                    <li class="navigation-item">
                        <a href=""></a>
                    </li>
                </ul>
            </div>
        </nav>

            <a class="twitter-timeline" data-lang="en" data-height="685" data-theme="dark" href="https://twitter.com/ZelenskyyUa?ref_src=twsrc%5Etfw">Tweets by ZelenskyyUa</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<a class="twitter-timeline" data-lang="en" data-height="685" data-theme="dark" href="https://twitter.com/POTUS?ref_src=twsrc%5Etfw">Tweets by POTUS</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


NAVIGATION CODE

        <ul class="navigation-list">
                <a href="#">Live News</a>
                <a href="#">Twitter News</a>
                <a href="#">Information</a>
                <a href="#">Help</a>

                <div class="animation start-home"></div>
        </ul>
        <button type="button" onclick="toggleBtn()" id="btn"><span></span></button>
<<<<<<< Updated upstream
=======


TWITTER ACCOUNTS
            <a  id="tweeter-source" class="twitter-timeline" data-lang="en" data-height="685" data-theme="dark" href="https://twitter.com/ZelenskyyUa?ref_src=twsrc%5Etfw">Tweets by ZelenskyyUa</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



--------------------------------------------------------------------------------------------------------------------------------------------


NAVIGATOR
    <!----- NAVIGATION BAR -------------------->
    <div class="huvud">
        <nav>

        <div class="datum-container">
            <div class="datum">
                <span id="veckodag">Dag</span>,
                <span id="manad">Månad</span>
                <span id="dag">00</span>,
                <span id="ar">År</span>
            </div>
            <div class="tid">
                <span id="timme">00</span>:
                <span id="minut">00</span>:
                <span id="sekuµnd">00</span>
            </div>
        </div>
        <div class="title-container">
            <h1 class="title-text">UKRAINE WAR MAP</h1>
        </div>
        <div class="dropdown" data-dropdown>
            <button class="link" data-dropdown-button></button>
            <div class="dropdown-menu information-grid">
                <div class="dropdown-heading">
                    Twitter Accounts
                </div>
                <div class="dropdown-links">
                        <a href="#" class="link">President of Ukraine - Volodymyr Zelenskyj </a>
                        <br>
                        <a href="#" onclick="toggleTweetSource()" class="link">President of USA - Joe Biden </a>
                        <br>
                        <a href="#" class="link">Kiyv Indepence</a>

                </div>
            </div>
        </div>
        <ul class="navigation-list">
            <a href="#">Live News |</a>
            <a href="#">Country |</a>
            <a href="#" class="link">Twitter Accounts |</a>

            <div class="animation start-home"></div>
    </ul>


        
        <button type="button" onclick="toggleBtn()" id="btn"><span></span></button>
        </nav>
    </div>

CSS
.navigation-list{
    border-radius: 8px;
    align-items: center;
}

.link:hover{
    font-weight: 800;
}

a:after{
    content: "";
    position:absolute;
    background-color: red;
    height: 5px;
    width: 0%;
    left:0;
    bottom: -10px;
    transition: 0.3s;
}

a:hover:after{
    width: 100%;
}
nav a{
    position: relative;
    z-index: 2;
    font-family: 'Roboto Serif', sans-serif;
    text-decoration: none;
    color: var(--text-main-color);
}


.navigation-container{
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    max-height: 80px;
    margin: 0 auto;
}


.title-text{
    font-family: 'Khand', sans-serif;
    font-size: 100%;
}


.link{
cursor:pointer;
}

.dropdown {
    position: relative;
}

.dropdown-menu{
    position: absolute;
    left: 0;
    top: calc(100% + .25rem);
    background-color: #ffffff;
    padding:.75rem;
    border-radius: .25rem;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
    opacity: 0;
    pointer-events: none;
    z-index: 100;
    transform: translateY(-10px);
    transition: opacity 150ms ease-in-out, transform 150s ease-in-out;
}

.dropdown.active > .link + .dropdown-menu{
    opacity: 1;
    transform:translateY(0);
    pointer-events: auto;
    width: 400px;
}

/* ---------------DATUM OCH KLOCKA-----------*/
.datum-container{
    font-family: 'Roboto Serif', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin: 5px;
}

.datum{
font-size: 10px;
color: #000000;
}

.tid{
    font-size: 15px;
    color: #000000;
}

.tid span:not(:last-child){
    position: relative;
    text-align: left;

}  


button
        <button type="button" onclick="toggleBtn()" id="btn"><span></span></button>
        </nav>



        /*===========******--- H_E_A_D_E_R -------****==========*/

nav{
    display: flex;
    max-height: 75px;
}

nav ul li{
    display: inline-block;
    list-style: none;
    margin: 0 20px;
}



button{
    background-color: rgb(39, 49, 39);
    height: 30px;
    width: 50px;
    border-radius: 20px;
    border: 0;
    outline: 0;
    cursor: pointer;
}

button span{
    display: block;
    background: #999;
    height: 26px;
    width: 25px;
    border-radius: 50%;
    margin-left: 2px;
}

.active{
    background-color: #2b9348;
}

.active span{
    background: #fff;
    margin-left: 15px;
}
>>>>>>> Stashed changes
