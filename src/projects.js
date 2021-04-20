const all = [
    {
        name: "This Webpage!",
        media: {
            type: "none"
        },
        type: "code",
        text: "I wrote this portfolio page myself! The page itself is written in HTML and is operated by JavaScript, with styling in CSS. I utilized Bootstrap for some simple components and to make the styling a bit easier for myself, but the rest of the page is entirely from scratch! </p><p> I recently rewrote most of the page's JavaScript, so now all of the projects are stored in an array of objects that I can filter and display as necessary. Originally, I had them hardcoded in; now, I can easily add new projects without needing to worry about screwing up my code!",
        link: {
            type: "none"
        }
    }, 
    {
        name: "Rosie's Recipes",
        media: {
            type: "none"
        },
        type: "code, writing",
        text: "This is a personal project that means a lot to me. My grandmother's cooking shaped my childhood and this website is an attempt to share that cooking. It's still a work in progress, but I built the entire site from scratch.",
        link: {
            type: "link",
            href: "http://rosiesrecipes.net/",
            text: "You can find it here!"
        }
    },
    {
        name: "Daraz's Guide to the World",
        media: {
            type: "none"
        },
        type: "writing",
        text: 'Daraz\'s Guide to the World is a sourcebook for the 5th edition of Dungeons and Dragons. I\'ve been working on it since 2018, and so far I\'ve written three distinct playable races, a complete playable class, and a subclass for Sorcerers. The document has been written using Markdown processed by a tool called The Homebrewery, which can be found <a href="https://homebrewery.naturalcrit.com/" target="_blank">here</a>.',
        link: {
            type: "modal",
            href: '<p class="link" data-toggle="modal" data-target="#darazguide">Give the guide a read here!</p>'
        }
    },
    {
        name: "The Statue's Song",
        media: {
            type: "none"
        },
        type: "writing",
        text: "The Statue's Song is a poem that I wrote in 2019. I initially wrote it for an assignment, but I really enjoy it as more than just an assigned piece of writing.",
        link: {
            type: "modal",
            href: '<p class="link" data-toggle="modal" data-target="#song">Read it here!</p>'
        }
    },
    {
        name: "Saris Act I",
        media: {
            type: "embed",
            embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2912282076/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://dancinbear.bandcamp.com/album/prologue-moros-rest">Prologue: Moro&#39;s Rest by Dancin Bear</a></iframe>'
        },
        type: "music",
        text: "Saris Act I is a soundtrack for an RPG that doesn't and likely never will exist. It aims to tell a story through music, utilizing recurring themes and motifs to represent characters and events. I plan to release it in parts, as it is a very large project.",
        link: {
            type: "link",
            href: "https://dancinbear.bandcamp.com/",
            text: "Check out more of my music on my Bandcamp here!"
        }
    },
    {
        name: "My Demo Reel",
        media: {
            type: "embed",
            embed: '<iframe width="100%" src="https://www.youtube.com/embed/yh7gwo4O8Ps" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        type: "music",
        text: "Beyond my officially released music, I have also composed for and scored several projects. This demo reel is a small sampler of that!",
        link: {
            type: "none"
        }
    },
    {
        name: "Gerald's Perfect Day",
        media: {
            type: "embed",
            embed: '<iframe width="100%" src="https://sofatube.cias.rit.edu/videos/embed/37233" frameborder="0" allowfullscreen></iframe>'
        },
        type: "music",
        text: "This is a film that I composed the score for in 2019!",
        link: {
            type: "none"
        }
    },
    {
        name: "Self",
        media: {
            type: "embed",
            embed: `<div id="selfCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#selfCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#selfCarousel" data-slide-to="1"></li>
    <li data-target="#selfCarousel" data-slide-to="2"></li>
    <li data-target="#selfCarousel" data-slide-to="3"></li>
    <li data-target="#selfCarousel" data-slide-to="4"></li>
    <li data-target="#selfCarousel" data-slide-to="5"></li>
    <li data-target="#selfCarousel" data-slide-to="6"></li>
    <li data-target="#selfCarousel" data-slide-to="7"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="media/self/aswithin.jpg" class="d-block w-100" alt="As Within, So Without">
      <div class="carousel-caption d-none d-md-block">
        <h5>As Within, So Without</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media/self/glimpse.jpg" class="d-block w-100" alt="A Glimpse of Fortune">
      <div class="carousel-caption d-none d-md-block">
        <h5>A Glimpse of Fortune</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media/self/sight.jpg" class="d-block w-100" alt="Sight">
      <div class="carousel-caption d-none d-md-block">
        <h5>Sight</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media/self/agony.jpg" class="d-block w-100" alt="Agony">
      <div class="carousel-caption d-none d-md-block">
        <h5>Agony</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media/self/ddb.jpg" class="d-block w-100" alt="Deaf, Dumb, and Blind">
      <div class="carousel-caption d-none d-md-block">
        <h5>Deaf, Dumb, and Blind</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media/self/inquisitive.jpg" class="d-block w-100" alt="The Inquisitive">
      <div class="carousel-caption d-none d-md-block">
        <h5>The Inquisitive</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media/self/depression.jpg" class="d-block w-100" alt="Depression">
      <div class="carousel-caption d-none d-md-block">
        <h5>Depression</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media/self/duality.jpg" class="d-block w-100" alt="Duality">
      <div class="carousel-caption d-none d-md-block">
        <h5>Duality</h5>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#selfCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#selfCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`
        },
        type: "art",
        text: "This is a project that I put together back in 2017, asking the question of what it means to be a person. The photos were taken by me and then manipulated in Adobe Photoshop and Camera Raw.",
        link: {
            type: "none"
        }
    },
    {
        name: "Becoming More",
        media: {
            type: "embed",
            embed: '<iframe width="100%" src="https://www.youtube.com/embed/v9U5glsArBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        type: "art, music",
        text: "Becoming More is a brief stop-motion animation that I made in 2017. The film was put together in Dragonframe, Adobe After Effects, and Adobe Premiere, and I composed the soundtrack in Ableton Live.",
        link: {
            type: "none"
        }
    },
    {
        name: "Lorenz Attractor Simulation",
        media: {
            type: "none"
        },
        type: "code",
        text: "This was the first project for my webapp design course. The assignment was to make a program that drew procedurally on a canvas, and I decided to make a Lorenz Attractor that can be viewed on 3 different axes.",
        link: {
            type: "link",
            href: "https://people.rit.edu/~dbf6107/330/lorenz/",
            text: "You can check it out here!"
        }
    },
    {
        name: "D&amp;D Finder",
        media: {
            type: "none"
        },
        type: "code",
        text: "This is a site that I worked on with Ben Goldfeder for a group project. It grabs user queries and searches an API full of D&amp;D resources for relevant content. I wrote most of the HTML and all of the JavaScript for the page, while Ben wrote all of the CSS.",
        link: {
            type: "link",
            href: "https://people.rit.edu/~dbf6107/230/project2/",
            text: "You can find the site here!"
        }
    },
    {
        name: "Facet",
        media: {
            type: "embed",
            embed: '<iframe src="https://player.vimeo.com/video/270171640" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
        },
        type: "code",
        text: "Facet is a project I worked on in 2018, before I transferred to RIT. I sculpted the assets for it in Blender, composed the music in Ableton Live, and tied everything together in Unreal Engine 4.",
        link: {
            type: "none"
        }
    }
];

export {
    all
};
