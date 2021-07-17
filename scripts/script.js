// DATA
const items = [
	{
		item_id: 1,
		name: "air jordan 1 mid se",
		price: 100,
		color: ["black", "green"],
		brand: "nike",
		imageURL: "https://i.imgur.com/PrF3oge.jpg",
		desc: "1. Vivamus quis auctor velit, id condimentum lorem."
	},
	{
		item_id: 2,
		name: "air max 2090",
		price: 90,
		color: ["blue", "red", "mix"],
		brand: "nike",
		imageURL: "https://i.imgur.com/1yah8fl.jpg",
		desc: "2. Vivamus quis auctor velit, id condimentum lorem."
	},
		{
			item_id:3,
			name:"kyrie 6 asia irving v1",
			price:80,
			color:["black"],
			brand:"nike",
			imageURL:"https://i.imgur.com/vmPR8Xo.jpg",
			desc:"3. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:4,
			name:"kyrie 6 asia irving v2",
			price:80,
			color:["gray"],
			brand:"nike",
			imageURL:"https://i.imgur.com/bAJ88C3.jpg",
			desc:"4. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:5,
			name:"lebron 17",
			price:100,
			color:["white","mix"],
			brand:"nike",
			imageURL:"https://i.imgur.com/UHPhp32.jpg",
			desc:"5. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:6,
			name:"dbreak type",
			price:50,
			color:["red","blue","mix"],
			brand:"nike",
			imageURL:"https://i.imgur.com/dPeWQQd.jpg",
			desc:"6. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:7,
			name:"sb bruin react t",
			price:120,
			color:["gray","blue"],
			brand:"nike",
			imageURL:"https://i.imgur.com/jLjjOh1.jpg",
			desc:"7. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:8,
			name:"zoom freak 2 naija",
			price:40,
			color:["green","white"],
			brand:"nike",
			imageURL:"https://i.imgur.com/NXmr6oF.jpg",
			desc:"8. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:9,
			name:"air vapormax 360",
			price:130,
			color:["gray","red"],
			brand:"nike",
			imageURL:"https://i.imgur.com/37uVfk0.jpg",
			desc:"9. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:10,
			name:"3mc",
			price:65,
			color:["black"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/W7dtEpm.jpg",
			desc:"10. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:11,
			name:"adidas 4d",
			price:110,
			color:["red"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/3M9ATFQ.jpg",
			desc:"11. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:12,
			name:"nova motion",
			price:90,
			color:["blue"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/PYY7fif.jpg",
			desc:"12. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:13,
			name:"ultra boost 20",
			price:55,
			color:["white","black"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/aY514GD.jpg",
			desc:"13. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:14,
			name:"lite racer adapt 3",
			price:120,
			color:["black"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/bnl47ZM.jpg",
			desc:"14. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:15,
			name:"nmd r1",
			price:30,
			color:["red"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/cs45FA1.jpg",
			desc:"15. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:16,
			name:"stan smith",
			price:100,
			color:["black"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/jOTutTO.jpg",
			desc:"16. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:17,
			name:"zx 2k 4d",
			price:75,
			color:["gray","black"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/Hpwbs2u.png",
			desc:"17. Vivamus quis auctor velit, id condimentum lorem."
		},
		{
			item_id:18,
			name:"busenitz vulc 2",
			price:45,
			color:["black"],
			brand:"adidas",
			imageURL:"https://i.imgur.com/QNPb7lA.png",
			desc:"18. Vivamus quis auctor velit, id condimentum lorem."
		}
];
// variables
// containers
let mainContainer = document.getElementById("main-container"),
    overlay = document.getElementById("overlay"),
    navbar = document.getElementById("navbar-container"),
    content = document.getElementById("content-container"),
    checkout = document.getElementById("checkout-container"),
    footer = document.getElementById("footer-container"),
    filter = document.getElementById("filter"),
    cart = document.getElementById("cart");
    summaryContainer = document.querySelectorAll(".summary");
    cartTotals = document.getElementById("cart-totals"),
    summaryN = document.querySelectorAll(".sIN"),
    summaryQ = document.querySelectorAll(".sIQ");
// modals
let modals = document.querySelectorAll(".modal"),
    regModal = document.getElementById("modal-reg"),
    logModal = document.getElementById("modal-log"),
    successModal = document.getElementById("modal-success"),
    failModal = document.getElementById("modal-fail"),
    addedModal = document.getElementById("modal-added"),
    viewModal = document.getElementById("modal-view"),
    addedModalImg = document.getElementById("modal-added-img"),
    viewModalImg = document.getElementById("modal-view-img"),
    viewModalTxt = document.getElementById("modal-view-txt");
// navbar icons
let filterIcon = document.getElementById("filter-icon"),
    cartIcon = document.getElementById("cart-icon"),
    menuIcon = document.getElementById("menu-icon"),
    userIcon = document.getElementById("user-icon");
// buttons
let addBtns = document.querySelectorAll(".add-btn"),
    viewBtns = document.querySelectorAll(".view-btn"),
    backBtns = document.querySelectorAll(".back-btn"),
    checkoutBtns = document.querySelectorAll(".checkout-btn"),
    homeBtns = document.querySelectorAll(".home-btn"),
    regBtn = document.getElementById("reg-btn"),
    regModalBtn = document.getElementsByClassName("reg-modal-btn"),
    logBtn = document.getElementById("log-btn"),
    logModalBtn = document.getElementsByClassName("log-modal-btn"),
    homeBtn = document.getElementsByClassName("home-btn"),
    retryBtn = document.getElementById("retry-btn"),
    payBtn = document.getElementById("pay-btn"),
    modBtn = document.getElementById("mod-btn"),
    pROneBtn = document.getElementById("range-one"),
    pRTwoBtn = document.getElementById("range-two"),
    clearCartBtn = document.getElementById("clear-cart-btn"),
    brandBtns = document.querySelectorAll(".brand-btn"),
    decrementBtn = document.querySelectorAll(".decrement"),
    incrementBtn = document.querySelectorAll(".increment");
// inputs
let minPInput = document.getElementById("min"),
    maxPInput = document.getElementById("max"),
    colorOptions = document.getElementsByClassName("options")[0],
    pROneMax = Number(document.getElementById("range-one").getAttribute("data-max")),
    pRTwoMax = Number(document.getElementById("range-two").getAttribute("data-max")),
    shipNInput = document.getElementById("shipment-name"),
    shipAInput = document.getElementById("shipment-address"),
    payNInput = document.getElementById("payment-name"),
    payCInput = document.getElementById("payment-card"),
    payDInput = document.getElementById("payment-date");
// content/cart items
let contentItems = document.querySelectorAll(".content-item"),
    cartItems = document.querySelectorAll(".cart-item");
// end varibles
// content items
contentItems.forEach(content_item => {
	items.forEach(item => {
		if (content_item.id == item.item_id) {
			let image = content_item.children[0].children[0].children[0];
			let name = content_item.children[0].children[1].children[0];
			let price = content_item.children[0].children[1].children[1];
			image.setAttribute("data-src", item.imageURL);
			name.textContent = item.name;
			price.textContent = item.price;
		}
	})
});
// functions
let options = {
  root:null,
  rootMargin:"0px",
  threshold:0.5
};
let callback = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting && entry.target.classList.contains("card-img")){
      let imageUrl = entry.target.getAttribute("data-src");
      if(imageUrl){
        entry.target.src = imageUrl;
        observer.unobserve(entry.target);
      }
    }
  })
};
let observer = new IntersectionObserver(callback, options);
setTimeout(function(){
  document.querySelectorAll(".content-img").forEach(img => {
    observer.observe(img);
  })
},1200);
let updateSummary = () => {
  let sumQuan = document.querySelectorAll(".sQ");
  let sumTotal = document.querySelectorAll(".sT");
  sumQuan.forEach(sQ=>{
    sQ.textContent = document.getElementById("qTC").textContent;
    sQ.parentElement.style.display = "block";
  })
  sumTotal.forEach(sT=>{
    sT.textContent = Number(document.getElementById("tC").textContent);
    sT.parentElement.style.display = "block";
  })
  cartItems.forEach(cart_item=>{
    let cartItemName = cart_item.children[0].children[1].children[0].textContent;
    let cartItemQuan = cart_item.children[0].children[2].children[1].textContent;
    if(cart_item.style.display == "grid"){
        summaryN.forEach(sum_name=>{
          if(cart_item.id == sum_name.parentElement.id){
            sum_name.parentElement.style.display = "block";
            sum_name.textContent = cartItemName;
          };
        });
      }
    summaryQ.forEach(sum_quan=>{
        if(cart_item.id == sum_quan.parentElement.id){
          sum_quan.textContent = cartItemQuan;
          if(Number(sum_quan.textContent) < 1){
            sum_quan.parentElement.style.display = "none";
          }
        };
      });
  })
};
let priceFilter = () => {
	contentItems.forEach(content_item => {
		let itemPrice = Number(content_item.children[0].children[1].children[1].textContent);
		if (itemPrice < Number(minPInput.value)) {
			content_item.classList.remove("show");
		} else {
			content_item.classList.add("show");
		}
		if (itemPrice > Number(maxPInput.value) && maxPInput.value !== "") {
			content_item.classList.remove("show");
		} else {
			content_item.classList.add("show");
		}
		if (itemPrice < Number(minPInput.value)) {
			content_item.classList.remove("show");
		}
		if (minPInput.value === "" && maxPInput.value === "") {
			content_item.classList.add("show");
		}
	})
};
let disableScrolling = () => {
  window.scrollTo(0, 0);
  window.onscroll = function () { window.scrollTo(0, 0); };
};
let enableScrolling = () => {
  window.onscroll = function () { };
};
let sStorage = () =>{
  let added_key = event.target.parentElement.parentElement.parentElement.id;
  cartItems.forEach(cart_item=>{
    if(cart_item.id == added_key){
      let added_value = cart_item.children[0].children[2].children[1].textContent;
      if(added_value < 1){
        sessionStorage.removeItem(added_key);
      }else{
        sessionStorage.setItem(added_key,added_value);
      }
    }
  })
};
let checkSStorage = () => {
  let keys = Object.keys(sessionStorage);
  let qT = 0;
  let sT = 0;
  let tT = 0;
  let t = 0;
  for(let key of keys){
    qT += Number(sessionStorage.getItem(key));
    contentItems.forEach(content_item=>{
      if(key == content_item.id){
				let contentImgURL = content_item.children[0].children[0].children[0].src;
				let contentName = content_item.children[0].children[1].children[0].textContent;
				let contentPrice = Number(content_item.children[0].children[1].children[1].textContent);
        sT += contentPrice * Number(sessionStorage.getItem(key));
        cartItems.forEach(cart_item=>{
          if(key == cart_item.id){
            // console.log("triggered");
            document.getElementById("cart-empty").style.display = "none";
            let cartImg = cart_item.children[0].children[0].children[0];
					  let cartName = cart_item.children[0].children[1].children[0];
					  let cartPrice = cart_item.children[0].children[1].children[1];
					  cartImg.setAttribute("src", contentImgURL);
					  cartName.textContent = contentName;
					  cartPrice.textContent = contentPrice;
					  cart_item.children[0].children[2].children[1].textContent = sessionStorage.getItem(key);
					  cart_item.style.display = "grid";
          }
        })
      }
    })
  }
  tT = sT * 0.1;
  t = sT + tT;
	cartTotals.innerHTML = `
	    <div>quantity:<span id="qTC">${qT}</span></div>
	    <div>subtotal:$<span id="sTC">${sT}</span></div>
	    <div>tax:$<span id="tTC">${tT}</span></div>
	    <div>total:$<span id="tC">${t}</span></div>
	`;
	updateSummary();

};
let registeration = () => {
  let regName = document.getElementById("reg-username");
  let regPW = document.getElementById("reg-pw");
  let regCPW = document.getElementById("reg-cpw");
  let keys = Object.keys(localStorage);
  if(regName.value.length < 5 || regPW.value.length < 5 || regCPW.value.length < 5){
    alert("minLength=5");
  }else{
    if(keys.includes(regName.value)){
      alert("username not available");
    }else{
      if(regPW.value == regCPW.value){
        localStorage.setItem(regName.value,regPW.value);
        regModal.classList.remove("show");
        logModal.classList.add("show");
      }else{
        alert("password mismatch");
      }
    }
  }
};
let login = () => {
  let logName = document.getElementById("log-username");
  let logPW = document.getElementById("log-pw");
  let keys = Object.keys(localStorage);
  if(logName.value.length < 5 || logPW.value.length < 5){
    alert("minLength=5");
  }else{
    if(localStorage.getItem(logName.value) == logPW.value){
      localStorage.setItem("loggedIn",true);
      username = logName.value;
      logModal.classList.remove("show");
      overlay.classList.remove("show");
      enableScrolling();
      alert("Logged in!");
    }else{
     alert("username or password incorrect");
    };
  }
};

let idSetM = [["1","2","3","4"],["5","6","7","8"],["9","10","11","12"],["13","14","15","16"],["17","18"]];
let idSetL = [["1","2","3","4","5","6"],["7","8","9","10","11","12"],["13","14","15","16","17","18"]];
let idSetD = [["1","2","3","4","5","6","7","8"],["9","10","11","12","13","14","15","16"],["17","18"]];
let contentSet = () => {
  if(window.screen.width < 500){
	contentItems.forEach(content_item=>{
			if(content_item.classList.contains("show")){
					content_item.classList.remove("show");
			}
			if(idSetM[0].includes(content_item.id)){
					content_item.classList.add("show");
			}
	})
  }else if(window.screen.width < 1100){
	contentItems.forEach(content_item=>{
			if(content_item.classList.contains("show")){
					content_item.classList.remove("show");
			}
			if(idSetL[0].includes(content_item.id)){
					content_item.classList.add("show");
			}
	})
  }else{
	contentItems.forEach(content_item=>{
			if(content_item.classList.contains("show")){
					content_item.classList.remove("show");
			}
			if(idSetD[0].includes(content_item.id)){
					content_item.classList.add("show");
			}
	})

};
};
contentSet();
// event listener
window.addEventListener("resize", event=>{
  contentSet();
});

mainContainer.addEventListener("click", event => {
  let qT = document.getElementById("qTC").textContent,
		  sT = Number(document.getElementById("sTC").textContent),
		  tT = Number(document.getElementById("tTC").textContent),
		  t = Number(document.getElementById("tC").textContent);
	let username = document.getElementById("log-username").value;
  checkSStorage();
	switch (event.target.id) {
	  // registeration
    case "reg-btn":
      registeration();
      break;
    // login
    case "log-btn":
      login();
      break;
	  // arrows
	  case "next-arrow":
				if(window.screen.width < 500){
						idSetM.push(idSetM[0]);
						idSetM.shift();
						contentItems.forEach(content_item=>{
								if(content_item.classList.contains("show")){
										content_item.classList.remove("show");
								}
								if(idSetM[0].includes(content_item.id)){
										content_item.classList.add("show");
								}
						})
				}else if(window.screen.width < 1100){
						idSetL.push(idSetL[0]);
						idSetL.shift();
						contentItems.forEach(content_item=>{
								if(content_item.classList.contains("show")){
										content_item.classList.remove("show");
								}
								if(idSetL[0].includes(content_item.id)){
										content_item.classList.add("show");
								}
						})
				}else{
						idSetD.push(idSetD[0]);
						idSetD.shift();
						contentItems.forEach(content_item=>{
								if(content_item.classList.contains("show")){
										content_item.classList.remove("show");
								}
								if(idSetD[0].includes(content_item.id)){
										content_item.classList.add("show");
								}
						})
				}
	   // console.log(idSetM);
	    break;
	  case "prev-arrow":
				if(window.screen.width < 500){
	    idSetM.unshift(idSetM[idSetM.length-1]);
	    idSetM.pop();
	    contentItems.forEach(content_item=>{
	      if(content_item.classList.contains("show")){
	        content_item.classList.toggle("show");
	      }
	      if(idSetM[0].includes(content_item.id)){
	        content_item.classList.add("show");
	      }
	    })
				}else if(window.screen.width < 1100){
	    idSetL.unshift(idSetL[idSetL.length-1]);
	    idSetL.pop();
	    contentItems.forEach(content_item=>{
	      if(content_item.classList.contains("show")){
	        content_item.classList.toggle("show");
	      }
	      if(idSetL[0].includes(content_item.id)){
	        content_item.classList.add("show");
	      }
	    })
				}else{
	    idSetD.unshift(idSetD[idSetD.length-1]);
	    idSetD.pop();
	    contentItems.forEach(content_item=>{
	      if(content_item.classList.contains("show")){
	        content_item.classList.toggle("show");
	      }
	      if(idSetD[0].includes(content_item.id)){
	        content_item.classList.add("show");
	      }
	    })
				}
	    break;
	   // logo
		case "logo-icon":
		  filterIcon.style.display = "inline-block";
			checkout.classList.remove("show");
			content.classList.add("show");
			checkoutBtns.forEach(btn => {
				btn.classList.add("checkout-btn");
				btn.classList.remove("home-btn");
				btn.textContent = "checkout";
			});
			break;
		// filter
		case "filter-icon":
		  if(!checkout.classList.contains("show")){
			  filter.classList.toggle("show");
			  cart.classList.remove("show");
		  }
			break;
		// cart
		case "cart-icon":
			cart.classList.toggle("show");
			filter.classList.remove("show");

		document.querySelectorAll(".card-img").forEach(img => {
						observer.observe(img);
				})
			break;
		// user
		case "user-icon":
		  if(localStorage.getItem("loggedIn")=="true"){
		    alert("Already logged in!");
		    if(confirm("Logout?")){
		      localStorage.setItem("loggedIn", false);
		      location.reload();
		    }
		  }else{
		    disableScrolling();
			  overlay.classList.toggle("show");
			  logModal.classList.toggle("show");
			  cart.classList.remove("show");
		  }
			break;
		case "reg-modal-btn":
		  disableScrolling();
			regModal.classList.add("show");
			logModal.classList.remove("show");
			break;
		case "log-modal-btn":
		  disableScrolling();
			logModal.classList.add("show");
			regModal.classList.remove("show");
			break;
		case "pay-btn":
		  if(!localStorage.getItem("loggedIn") || localStorage.getItem("loggedIn")=="false"){
  		  alert("Login to continue!");
		    disableScrolling();
			  overlay.classList.add("show");
		    logModal.classList.add("show");
		  }else if(!shipNInput.value){
		    alert("Missing information!");
		  }else{
  			 overlay.classList.add("show");
  			 document.getElementById("loadingGIF").style.display = "block";
			  setTimeout(function () {
			    overlay.classList.remove("show");
  			  document.getElementById("loadingGIF").style.display = "none";
			  	if (Math.floor(Math.random() * 10) < 7) {
			  		disableScrolling();
			      overlay.classList.add("show");
			  		failModal.classList.remove("show");
			  		successModal.classList.add("show");
			  	} else {
			  		document.getElementById("modal-fail-btns").children[1].textContent = "checkout";
			  		document.getElementById("modal-fail-btns").children[1].classList.add("checkout-btn");
			  		document.getElementById("modal-fail-btns").children[1].classList.remove("home-btn");
			  		disableScrolling();
			      overlay.classList.add("show");
			  		failModal.classList.add("show");
			  	}
			  }, 2000);
		  }
			break;
		case "mod-btn":
			cart.classList.add("show");
			break;
		case "clear-cart-btn":
		  if(qT > 0){
		    if(confirm("Are you sure?")){
			    document.querySelectorAll(".cart-item").forEach(item => {
			    	item.style.display = "none";
			    	document.querySelectorAll(".cQT").forEach(span => {
			    		span.textContent = "0";
			    	});
			    });
			    document.getElementById("cart-empty").style.display = "block";
			    cartTotals.innerHTML = `
			    		<div>quantity:<span id="qTC">0</span></div>
			    		<div>subtotal:$<span id="sTC">0</span></div>
			    		<div>tax:$<span id="tTC">0</span></div>
			    		<div>total:$<span id="tC">0</span></div>
			    	`;
			    sessionStorage.clear();
					updateSummary();
					location.reload();
		    }
		  }else{
		    alert("-cart is empty-");
		  }
			break;
		case "retry-btn":
		  payBtn.click();
		default:
		// console.log(event.target);
	}
	let classes = Array.from(event.target.classList);
	classes.forEach(xclassx => {
		switch (xclassx) {
			case "add-btn":
				// add button
				disableScrolling();
				document.getElementById("cart-empty").style.display = "none";
				overlay.classList.add("show");
				addedModal.classList.add("show");
				viewModal.classList.remove("show");
				cart.classList.remove("show");
				filter.classList.remove("show");
				let idAdd = event.target.parentElement.parentElement.parentElement.id;
				// add
				contentItems.forEach(content_item => {
					if (idAdd == content_item.id) {
						cartItems.forEach(cart_item => {
							if (idAdd == cart_item.id) {
								let cartImg = cart_item.children[0].children[0].children[0];
								let contentImgURL = content_item.children[0].children[0].children[0].src;
								cartImg.setAttribute("src", contentImgURL);
								let cartName = cart_item.children[0].children[1].children[0];
								let contentName = content_item.children[0].children[1].children[0].textContent;
								cartName.textContent = contentName;
								let cartPrice = cart_item.children[0].children[1].children[1];
								let contentPrice = Number(content_item.children[0].children[1].children[1].textContent);
								cartPrice.textContent = contentPrice;
								cart_item.style.display = "grid";
								cart_item.children[0].children[2].children[1].textContent++;
								sStorage();
								qT++;
								sT += contentPrice;
								tT += contentPrice * 0.1;
								t = sT + tT;
								cartTotals.innerHTML = `
				            <div>quantity:<span id="qTC">${qT}</span></div>
				            <div>subtotal:$<span id="sTC">${sT}</span></div>
				            <div>tax:$<span id="tTC">${tT}</span></div>
				            <div>total:$<span id="tC">${t}</span></div>
				          `;
								addedModalImg.setAttribute("src", contentImgURL);
							}
						})
					}
				});
				//
				updateSummary();
				break;
			case "view-btn":
				// view button
				disableScrolling();
				overlay.classList.add("show");
				viewModal.classList.add("show");
				addedModal.classList.remove("show");
				cart.classList.remove("show");
				filter.classList.remove("show");
				let idView = event.target.parentElement.parentElement.parentElement.id;
				viewModal.setAttribute("id", idView);
				items.forEach(item => {
					if (idView == item.item_id) {
						viewModalTxt.textContent = item.desc;
						viewModalImg.setAttribute("src", item.imageURL);
					}
				});
				break;
			case "close-icon":
			  enableScrolling();
				overlay.classList.remove("show");
				// close button
				if (event.target.parentElement.id == "filter-close") {
					// filter
					filter.style.display = "none";
					filter.classList.remove("show");
				} else if (event.target.parentElement.id == "cart-close") {
					// cart
					cart.style.display = "none";
					cart.classList.remove("show");
				} else {
					// log/reg
					event.target.parentElement.parentElement.parentElement.style.display = "none";
					event.target.parentElement.parentElement.parentElement.classList.remove("show");
				}
				break;
			case "back-btn":
			  enableScrolling();
			  overlay.classList.remove("show");
				event.target.parentElement.parentElement.parentElement.classList.remove("show");
				break;
			case "cart-btn":
			  enableScrolling();
			  overlay.classList.remove("show");
				event.target.parentElement.parentElement.parentElement.classList.remove("show");
				cart.classList.add("show");
				break;
			case "checkout-btn":
			  if(document.getElementById("cart-empty").style.display == "none"){
				  enableScrolling();
			    overlay.classList.remove("show");
				  content.style.display = "none";
				  content.classList.remove("show");
				  cart.classList.remove("show");
				  checkout.classList.add("show");
				  event.target.parentElement.parentElement.parentElement.classList.remove("show");
				  checkoutBtns.forEach(btn => {
				  	btn.textContent = "home";
				  	btn.classList.add("home-btn");
				  	btn.classList.remove("checkout-btn");
				  });
						filterIcon.style.display = "none";
				  document.getElementById("shipment-name").value = "Bart Simpson";
				  document.getElementById("shipment-address").value = "742 Evergreen Terrace";
				  document.getElementById("payment-name").value = "Homer Simpson";
				  document.getElementById("payment-card").value = "4783-0000-0000-0000";
				  document.getElementById("payment-date").value = "11/27";
			  }else{
			    enableScrolling();
			    overlay.classList.remove("show");
			    alert("-cart is empty-");
			  }
				break;
			case "home-btn":
			  filterIcon.style.display = "inline-block";
			  enableScrolling();
			  overlay.classList.remove("show");
				homeBtns.forEach(btn => {
					content.style.display = "block";
					checkout.classList.remove("show");
					event.target.parentElement.parentElement.parentElement.classList.remove("show");
					checkoutBtns.forEach(btn => {
						btn.textContent = "checkout";
						btn.classList.add("checkout-btn");
						btn.classList.remove("home-btn");
					});
				});

				if(event.target.parentElement.id == "modal-success-btn"){
				  document.getElementById("cart-empty").style.display = "block";
				  cartTotals.innerHTML = `
				    <div>quantity:<span id="qTC">0</span></div>
				    <div>subtotal:$<span id="sTC">0</span></div>
				    <div>tax:$<span id="tTC">0</span></div>
				    <div>total:$<span id="tC">0</span></div>
				  `;
				  cartItems.forEach(cart_item=>{
				    cart_item.children[0].children[2].children[1].textContent = 0;
				    cart_item.style.display = "none";
				  });
				  sessionStorage.clear();
				  updateSummary();
				  location.reload();
				};

				break;
			case "decrement":
				let idD = event.target.parentElement.parentElement.parentElement.id;
				cartItems.forEach(cart_item => {
					if (idD == cart_item.id) {
						priceD = Number(cart_item.children[0].children[1].children[1].textContent);
					}
				})
				qT--;
				sT -= priceD;
				tT -= priceD * 0.1;
				t = sT + tT;
				cartTotals.innerHTML = `
				    <div>quantity:<span id="qTC">${qT}</span></div>
				    <div>subtotal:$<span id="sTC">${sT}</span></div>
				    <div>tax:$<span id="tTC">${tT}</span></div>
				    <div>total:$<span id="tC">${t}</span></div>
				  `;
				event.target.parentElement.children[1].textContent--;
				sStorage();
				if (Number(event.target.parentElement.children[1].textContent) < 1) {
					event.target.parentElement.parentElement.parentElement.style.display = "none";
					if (qT < 1) {
						document.getElementById("cart-empty").style.display = "block";
						homeBtns.forEach(btn => {
				  	content.style.display = "block";
				  	checkout.classList.remove("show");
				  	event.target.parentElement.parentElement.parentElement.classList.remove("show");
				  	checkoutBtns.forEach(btn => {
				  		btn.textContent = "checkout";
				  		btn.classList.add("checkout-btn");
				  		btn.classList.remove("home-btn");
				  	});
				  });
						checkout.classList.remove("show");
						content.classList.add("show");
					}
				}
				updateSummary();
				break;
			case "increment":
				let idI = event.target.parentElement.parentElement.parentElement.id;
				cartItems.forEach(cart_item => {
					if (idI == cart_item.id) {
						priceI = Number(cart_item.children[0].children[1].children[1].textContent);
					}
				})
				qT++;
				sT += priceI;
				tT += priceI * 0.1;
				t = sT + tT;
				cartTotals.innerHTML = `
				    <div>quantity:<span id="qTC">${qT}</span></div>
				    <div>subtotal:$<span id="sTC">${sT}</span></div>
				    <div>tax:$<span id="tTC">${tT}</span></div>
				    <div>total:$<span id="tC">${t}</span></div>
				  `;
				event.target.parentElement.children[1].textContent++;
				sStorage();
				updateSummary();
				break;
			default:
			// console.log(xclassx);
		}
	});
});
// filter by
// price
minPInput.addEventListener("keyup", event => {
	priceFilter();
});
maxPInput.addEventListener("keyup", event => {
	priceFilter();
});
pROneBtn.addEventListener("click", event => {
	contentItems.forEach(content_item => {
		let itemPrice = Number(content_item.children[0].children[1].children[1].textContent);
		if (itemPrice > pROneMax) {
			content_item.classList.remove("show");
		}
	})
	let total = 0;
	contentItems.forEach(content_item => {
		if (!content_item.classList.contains("show")) {
			total++
		} else {
			return;
		}
		if (total == contentItems.length) {
			contentItems.forEach(content_item => {
			content_item.classList.add("show");
			});
		}
	});
	contentItems.forEach(content_item => {
		let itemPrice = Number(content_item.children[0].children[1].children[1].textContent);
		if (itemPrice > pROneMax) {
			content_item.classList.remove("show");
		}
	})
});
pRTwoBtn.addEventListener("click", event => {
	contentItems.forEach(content_item => {
		let itemPrice = Number(content_item.children[0].children[1].children[1].textContent);
		if (itemPrice <= pROneMax || itemPrice > pRTwoMax) {
			content_item.classList.remove("show");
		}
	})
	let total = 0;
	contentItems.forEach(content_item => {
		if (!content_item.classList.contains("show")) {
			total++
		} else {
			return;
		}
		if (total == contentItems.length) {
			contentItems.forEach(content_item => {
			content_item.classList.add("show");
			});
		}
	});
	contentItems.forEach(content_item => {
		let itemPrice = Number(content_item.children[0].children[1].children[1].textContent);
		if (itemPrice <= pROneMax || itemPrice > pRTwoMax) {
			content_item.classList.remove("show");
		}
	})
});
// color
colorOptions.addEventListener("change", function () {
	let ids = [];
	items.forEach(item => {
		if (item.color.includes(this.value)) {
			ids.push(item.item_id);
		}
	});
	contentItems.forEach(content_item => {
			content_item.classList.add("show");
		if (!ids.includes(Number(content_item.id))) {
			content_item.classList.remove("show");
		}
		if (this.value == "all") {
			content_item.classList.add("show");
		}
	});
});
// brand
brandBtns.forEach(btn => {
	btn.addEventListener("click", function () {
		let ids = [];
		items.forEach(item => {
			if (item.brand == this.textContent) {
				ids.push(item.item_id);
			}
		})
		contentItems.forEach(content_item => {
			content_item.classList.add("show");
			if (!ids.includes(Number(content_item.id))) {
  			content_item.classList.remove("show");
			}
			if (this.textContent == "all") {
				content_item.classList.add("show");
			}
		})
	})
});