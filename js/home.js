let header = document.querySelector("header");


document.addEventListener("DOMContentLoaded",function(){
    let time = 500;
    let welcome = document.createElement("h1");
    welcome.classList.add("title");
    welcome.appendChild(document.createTextNode("Bienvenue !"))

    // Append //
    header.appendChild(welcome);

    setTimeout(function(){
        welcome.style.opacity = "0.75";
        welcome.style.top = "15%";
    },time)

    time += 1500;

    setTimeout(function(){
        welcome.style.top = "18%";
    },time)
    
    let shortDecription = document.createElement("div");
    shortDecription.appendChild(document.createTextNode("Immergez vous au sein d'une aventure et apprenez les règles de la survie."));
    shortDecription.classList.add("shortDecription");

    //Append
    header.appendChild(shortDecription);

    time += 1000;
    setTimeout(function(){
        shortDecription.style.opacity = "1";
        shortDecription.style.top = "32%";
    },time)

    let discover = document.createElement("div");
    discover.classList.add("discover");
    let discoverGame = document.createElement("p");
    discoverGame.style.marginRight = "0.2%";

    let arrow = document.createElement("i");
    arrow.classList.add("fa");
    arrow.classList.add("fa-arrow-right")
    
    discover.style.transition = "all 1.5s ease";
    discoverGame.appendChild(document.createTextNode("Rejoindre l'aventure"));

    discover.appendChild(discoverGame);
    discover.appendChild(arrow);

    //Append
    header.appendChild(discover);

    time += 1000;
    setTimeout(function(){
        discover.style.opacity = "1";
        discover.style.bottom = "20%";
    },time)
    
    
    let scale = 1;
    let first = 1200;

    time += 1000;
    setTimeout(function(){
        scaleDiscover(discover,scale,first,arrow)
    },time)

    let nav = document.querySelector("#content");

    discover.addEventListener("click",function(){
        header.style.width = "0";
        header.style.opacity = "0";
        nav.style.display = "block";
        nav.style.opacity = "1";
        nav.style.width = "100%";

        setTimeout(function(){
            header.style.display = "none";
        },1000)
    })


    /*Navigation initialisation*/
        let card = document.getElementsByClassName("card");

            for(let oneCard of card)
            {
                oneCard.addEventListener("click",function()
                {
                    if(this.id == "_play")
                    {
                        console.log('ok');
                        document.location.replace('game.html');
                    }

                    functionCard(this,this.id.substring(1),card);
                });
            }
            
        let totem_image = document.querySelector("#totem_image");
        totem_image.addEventListener("mouseover", functionOver);
        function functionOver()
        {
            totem_image.src = "ressources/img/Totem/vipi.png";
            totem_image.style.left  = "1%";
        }
        totem_image.addEventListener("mouseout", functionOut);
        function functionOut()
        {
            totem_image.src = "ressources/img/Totem/totem.png";
            totem_image.style.left  = "2%";
        }
    
    
})

/*--- Home ---*/
    function scaleDiscover(element,scale,first,fa)
    {

        let discoverZoom = setInterval(function(){
            if(scale != 1.2)
            {
                scale = 1.2;
            }
            else
            {
                scale = 1;
            }
            element.style.transform = "translateX(-50%) scale("+scale+")";
        },first)

        element.addEventListener("mouseover",function(){
            clearInterval(discoverZoom);
            fa.style.opacity = "1";
            fa.style.fontStyle = "2em";
            element.style.transform = "translateX(-50%) scale(1.2)";
            
        })

        element.addEventListener("mouseout",function(){
            scaleDiscover(element,scale,first,fa)
            fa.style.opacity = "0";
            fa.style.fontStyle = "0";
        })

    }

/*--- Navigation ---*/
    function functionCard(element,hash,card)
    {
        let card4 = document.querySelector("#_play");

        let card_container = document.getElementsByClassName("card_container");
        let title_cards = document.getElementsByClassName("title_cards");

        if(!element.classList.contains("petit"))
        {

            for(let oneCard of card)
            {
                oneCard.style.width = "10%";
                oneCard.style.height = "100px";
                oneCard.style.opacity = "0.2";
                oneCard.style.fontSize = "20px";
                oneCard.classList.remove("petit");
            }

            element.style.opacity = "1";
            element.className += " petit"
            card4.style.width = "31%";
        }
        else
        {
            for(oneCard of card)
            {
                oneCard.style.width = "32%";
                oneCard.style.height = "350px";
                oneCard.style.opacity = "1";
                oneCard.style.fontSize = "50px";
            }

            element.classList.remove("petit");
            card4.style.width = "96%";

        }

        if(!element.classList.contains("selected"))
        {
            let cardSelected = document.querySelector(".selected");
            if(cardSelected != null)
            {
                cardSelected.classList.remove("selected");
            }

            element.classList.add("selected");

            assoContent = document.querySelector("#"+hash)
            if(assoContent != null)
            {
                
                DisplayContent(assoContent);
            }
        }
        else
        {   
            assoContent = document.querySelector("#"+hash)
            if(assoContent != null)
            {
                assoContent.style.display = "none";
            }
            element.classList.remove("selected");
            
        }
        
    }

    function DisplayContent(content)
    {
        let displayed = "displayed";
        let contentDisplayed = document.querySelector("."+displayed);

        if(contentDisplayed != null)
        {
            contentDisplayed.style.opacity = "0";
            contentDisplayed.classList.remove(displayed);
        }

        setTimeout(function(){
            if(contentDisplayed != null)
            {
                contentDisplayed.style.display = "none"
            }

            if(content != null)
            {
                content.classList.add(displayed);
                content.style.display = "block"
                content.style.opacity = "1";
            }
            
        },500)
    
    }
    

    