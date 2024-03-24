let nr = 0;

const item = {
    name: "Item",
    description: "Desc",
    price: 50,
    info: "Info",
    image: "images/ballon768x482.jpg"
  };

  function addCard(){
    const pris = document.createElement("p");
    const info = document.createElement("p");
    const pic = document.createElement("img");
    const h = document.createElement("h4");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    pris.classList.add("card-text");
    info.classList.add("card-text");
    div1.classList.add("card-body");
    div2.classList.add("card");
    div2.classList.add("card-prop");
    div3.classList.add("col");
    let node = document.createTextNode(item.price);
    pris.appendChild(node);
    node = document.createTextNode(item.info);
    info.appendChild(node);
    pic.src = item.image;
    pic.style="width:100%";
    node = document.createTextNode(item.name);
    h.appendChild(node);
    div1.appendChild(h);
    div1.appendChild(pic);
    div1.appendChild(info);
    div1.appendChild(pris);
    div2.appendChild(div1);
    div3.appendChild(div2);
    let myId = "card"+nr.toString();
    div1.setAttribute('id', myId);
    div1.setAttribute('onclick', "javascript: itemClicked(this.id)");
    const element = document.getElementById("tabell");
    element.appendChild(div3);
    alert(document.getElementById(myId).id);
    nr++;
  }

  function createImage(){
    const myImage = new Image(100, 200);
    myImage.src = "picture.jpg";
    document.body.appendChild(myImage);
  }

  //document.getElementsByClassName("card-prop").onClick = itemClicked(id);
  //document.getElementById("card-mouse-over").addEventListener("mouseover", mouseOver);
   

  function itemClicked(id){
    //alert("Mouse over: " + id);
    //let pic = document.getElementById("id").getElementsByTagName("img").src;
    //let name = document.getElementById(id).childNodes[0].textContent;
    console.log("Id: " + id);
    let childs = document.getElementById(id).childNodes;
    childs.forEach((child, index) => {
        console.log("index: " + index + " " + child);
        console.log("index: " + index + " " + child.textContent);
    });
    let name = document.getElementById(id).childNodes[1].textContent;
    let imgSrc = document.getElementById(id).childNodes[3].src;
    let info = document.getElementById(id).childNodes[5]. textContent;
    let pris = document.getElementById(id).childNodes[7]. textContent;
    //alert("id:" + id + "Name: " + name);
    //let node = document.createTextNode(name);
    //pris.appendChild(node);
    document.getElementById("info-card").childNodes[1].textContent = name;
    //document.getElementById("info-card").childNodes[3].textContent = name;
    document.getElementById("info-card").childNodes[5].textContent = info + " " + pris;
    //console.log(document.target.id);
  }
