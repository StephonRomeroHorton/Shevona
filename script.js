// JavaScript to toggle the dropdown menu
// JavaScript to toggle the dropdown menu and prevent scrolling
// JavaScript to toggle the dropdown menu and prevent scrolling on small screens
document.getElementById('mobile-menu').addEventListener('click', function() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('open');
  
  if (dropdown.classList.contains('open')) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
  } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
  }
});

// JavaScript to close the menu when a link is clicked
document.querySelectorAll('.dropdown-navbar-menu li a').forEach(link => {
  link.addEventListener('click', function() {
      // Remove the 'open' class from the dropdown
      document.querySelector('.dropdown').classList.remove('open');
      // Enable scrolling again
      document.body.style.overflow = 'auto';
  });
});

// JavaScript to ensure scrolling is enabled on larger viewports
window.addEventListener('resize', function() {
  if (window.innerWidth > 992) {
      // Enable scrolling when viewport is larger than 992px
      document.body.style.overflow = 'auto';
      // Ensure dropdown menu is closed on larger viewports
      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.remove('open');
  }
});



let serviceDiv = document.querySelectorAll(".service");
let mobileDiv = document.querySelectorAll(".mobile-service-description");
serviceDiv.forEach(div =>{
  div.addEventListener('click', () => {
    serviceDiv.forEach(d => d.classList.remove('service-clicked'))
    div.classList.add('service-clicked');
    
    serviceName.innerText = div.querySelector('span').innerText;
    servicePrice.innerHTML = div.querySelector('p').innerText;
    serviceDescription.innerHTML = div.querySelector('h6').innerText;

    mobileDiv.forEach(mobile => {
      if (mobile.querySelector('span').innerText === serviceName.innerText) {
        mobile.style.display = 'flex';
        serviceImg.src = mobile.querySelector('.service-description-img img').src;
        mobile.style.display = 'none'; // Update image
      }
    });
    
    if (window.matchMedia("(max-width: 730px)").matches) {
      // Show the corresponding mobile div and hide others
      mobileDiv.forEach(mobile => {
          if (mobile.querySelector('span').innerText === serviceName.innerText) {
              mobile.style.display = 'flex';
          } else {
              mobile.style.display = 'none';
          }
      });
      
  }
  })
});


  // Function to hide mobileDivs if the screen is larger than 730px
function hideMobileDivsOnResize() {
if (window.matchMedia("(min-width: 731px)").matches) {
mobileDiv.forEach(mobile => {
  mobile.style.display = 'none';
});
}
}

// Call the function initially to check screen size on page load
hideMobileDivsOnResize();

// Add event listener for window resize to hide mobileDivs on larger screens
window.addEventListener('resize', hideMobileDivsOnResize);




let aromaTherapy = document.querySelector(".aroma");
let skinCare = document.querySelector(".skin");
let tanning = document.querySelector(".tan");
let facialCare = document.querySelector(".face");
let nailTreatment = document.querySelector(".nail");
let hairStyling = document.querySelector(".hair");
let services = document.querySelector(".service-pricing");
let serviceName = document.querySelector(".style-name");
let servicePrice = document.querySelector(".price");
let serviceDescription = document.querySelector(".style-description");
let serviceImg = document.querySelector(".service-description-img-big img");
console.log(serviceImg);







aromaTherapy.onclick = function aroma(){
aromaTherapy.classList.add('service-chosen')
skinCare.classList.remove('service-chosen')
tanning.classList.remove('service-chosen')
facialCare.classList.remove('service-chosen')
nailTreatment.classList.remove('service-chosen')
hairStyling.classList.remove('service-chosen')
  services.innerHTML = 
  `
        <div class="service-name service-divs">
          <h4>Service Name</h4>
          <div class="p-div">
            <p>Pricing</p>
          </div>
        </div>
        <div class="service service-divs .aromatherapy-massage">
          <span>Aromatherapy Massage</span>
          <p>$90.00</p>
          <h6 style="display: none;">A full-body massage using essential oils tailored to your needs.(60 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Aromatherapy Massage</span>
              <div class="service-description-img">
               <img src="images/pexels-tima-miroshnichenko-6187417.jpg" alt="">
              </div>
              <h6>A full-body massage using essential oils tailored to your needs.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Aromatherapy Facial</span>
          <p>$75.00</p>
          <h6 style="display: none;">A facial treatment that incorporates essential oils to nourish and rejuvenate the skin.(60 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Aromatherapy Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-cottonbro-4156299.jpg" alt="">
              </div>
              <h6>A facial treatment that incorporates essential oils to nourish and rejuvenate the skin.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Aromatherapy Scalp Treatment</span>
          <p>$50.00</p>
          <h6 style="display: none;">A relaxing scalp massage using essential oils to promote hair growth and relieve tension.(30 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Aromatherapy Scalp Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A relaxing scalp massage using essential oils to promote hair growth and relieve tension.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Aromatherapy Bath</span>
          <p>$60.00</p>
          <h6 style="display: none;">A soothing bath infused with essential oils to promote relaxation and detoxification.(45 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Aromatherapy Bath</span>
              <div class="service-description-img">
               <img src="images/pexels-tima-miroshnichenko-6187417.jpg" alt="">
              </div>
              <h6>A soothing bath infused with essential oils to promote relaxation and detoxification.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Aromatherapy Couples Massage</span>
          <p>$180.00</p>
          <h6 style="display: none;">A shared massage experience for two, with customized essential oil blends.(60 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Aromatherapy Couples Massage</span>
              <div class="service-description-img">
               <img src="images/pexels-cottonbro-4156299.jpg" alt="">
              </div>
              <h6>A shared massage experience for two, with customized essential oil blends.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Steam Room Session</span>
          <p>$40.00</p>
          <h6 style="display: none;">A steam session enhanced with essential oils to clear the mind and improve respiratory function.(30 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Steam Room Session</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A steam session enhanced with essential oils to clear the mind and improve respiratory function.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Hand & Foot Treatment</span>
          <p>$55.00</p>
          <h6 style="display: none;">A luxurious treatment for hands and feet, combining massage and essential oils.(45 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Hand & Foot Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-tima-miroshnichenko-6187417.jpg" alt="">
              </div>
              <h6>A luxurious treatment for hands and feet, combining massage and essential oils.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Aromatherapy Body Scrub</span>
          <p>$65.00</p>
          <h6 style="display: none;">An exfoliating body scrub infused with essential oils, leaving skin soft and revitalized.(45 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Aromatherapy Body Scrub</span>
              <div class="service-description-img">
               <img src="images/pexels-cottonbro-4156299.jpg" alt="">
              </div>
              <h6>An exfoliating body scrub infused with essential oils, leaving skin soft and revitalized.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Aromatherapy Reflexology</span>
          <p>$70.00</p>
          <h6 style="display: none;">A reflexology session enhanced with essential oils to promote overall wellness.(60 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Aromatherapy Reflexology</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A reflexology session enhanced with essential oils to promote overall wellness.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Aromatherapy Candle Massage</span>
          <p>$95.00</p>
          <h6 style="display: none;">A warm oil massage using aromatherapy candles that melt into nourishing oils.(60 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Aromatherapy Candle Massage</span>
              <div class="service-description-img">
               <img src="images/pexels-tima-miroshnichenko-6187417.jpg" alt="">
              </div>
              <h6>A warm oil massage using aromatherapy candles that melt into nourishing oils.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Back and Shoulder Massage</span>
          <p>$60.00</p>
          <h6 style="display: none;">Targeted massage focusing on the back, neck, and shoulders, using essential oils for stress relief.(45 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Back and Shoulder Massage</span>
              <div class="service-description-img">
               <img src="images/pexels-cottonbro-4156299.jpg" alt="">
              </div>
              <h6>Targeted massage focusing on the back, neck, and shoulders, using essential oils for stress relief.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Hot Stone Massage</span>
          <p>$110.00</p>
          <h6 style="display: none;">A massage that combines the benefits of hot stones and essential oils for deep relaxation.(75 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Hot Stone Massage</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A massage that combines the benefits of hot stones and essential oils for deep relaxation.(75 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
        <div class="service service-divs">
          <span>Chakra Balancing</span>
          <p>$85.00</p>
          <h6 style="display: none;">A holistic treatment using essential oils to align and balance the body’s chakras.(60 minutes)</h6>
        </div>
        <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Chakra Balancing</span>
              <div class="service-description-img">
               <img src="images/pexels-tima-miroshnichenko-6187417.jpg" alt="">
              </div>
              <h6>A holistic treatment using essential oils to align and balance the body’s chakras.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>`;

        let serviceDiv = document.querySelectorAll(".service");
        let mobileDiv = document.querySelectorAll(".mobile-service-description");
        serviceDiv.forEach(div =>{
          div.addEventListener('click', () => {
            serviceDiv.forEach(d => d.classList.remove('service-clicked'))
            div.classList.add('service-clicked');
            
            serviceName.innerText = div.querySelector('span').innerText;
            servicePrice.innerHTML = div.querySelector('p').innerText;
            serviceDescription.innerHTML = div.querySelector('h6').innerText;


            mobileDiv.forEach(mobile => {
              if (mobile.querySelector('span').innerText === serviceName.innerText) {
                mobile.style.display = 'flex';
                serviceImg.src = mobile.querySelector('.service-description-img img').src;
                mobile.style.display = 'none'; // Update image
              }
            });
            
            if (window.matchMedia("(max-width: 730px)").matches) {
              // Show the corresponding mobile div and hide others
              mobileDiv.forEach(mobile => {
                  if (mobile.querySelector('span').innerText === serviceName.innerText) {
                      mobile.style.display = 'flex';
                  } else {
                      mobile.style.display = 'none';
                  }
              });
              
          }
          })
        })
          // Function to hide mobileDivs if the screen is larger than 730px
function hideMobileDivsOnResize() {
  if (window.matchMedia("(min-width: 731px)").matches) {
      mobileDiv.forEach(mobile => {
          mobile.style.display = 'none';
      });
  }
}

// Call the function initially to check screen size on page load
hideMobileDivsOnResize();

// Add event listener for window resize to hide mobileDivs on larger screens
window.addEventListener('resize', hideMobileDivsOnResize);

        
}

skinCare.onclick = function skin(){
  skinCare.classList.add('service-chosen')
  aromaTherapy.classList.remove('service-chosen')
  tanning.classList.remove('service-chosen')
  facialCare.classList.remove('service-chosen')
  nailTreatment.classList.remove('service-chosen')
  hairStyling.classList.remove('service-chosen')
    services.innerHTML = 
    `
          <div class="service-name service-divs">
            <h4>Service Name</h4>
            <div class="p-div">
              <p>Pricing</p>
            </div>
          </div>
          <div class="service service-divs">
            <span>Full-Body Exfoliation</span>
            <p>$90.00</p>
            <h6 style="display: none;">A thorough exfoliation treatment that removes dead skin cells, improves circulation, and leaves your skin feeling smooth and refreshed.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Full-Body Exfoliation</span>
              <div class="service-description-img">
               <img src="images/pexels-karolina-grabowska-6629606.jpg" alt="">
              </div>
              <h6>A thorough exfoliation treatment that removes dead skin cells, improves circulation, and leaves your skin feeling smooth and refreshed.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Back Facial</span>
            <p>$120.00</p>
            <h6 style="display: none;">Similar to a traditional facial but for your back, this treatment includes cleansing, exfoliation, extraction, and moisturizing, targeting acne and blemishes.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Back Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-liksunenok-11894617.jpg" alt="">
              </div>
              <h6>Similar to a traditional facial but for your back, this treatment includes cleansing, exfoliation, extraction, and moisturizing, targeting acne and blemishes.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Body Wrap</span>
            <p>$130.00</p>
            <h6 style="display: none;">A treatment that involves wrapping the body in hydrating or detoxifying products to nourish and rejuvenate the skin while promoting relaxation.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Body Wrap</span>
              <div class="service-description-img">
               <img src="images/pexels-sergey-torbik-42706484-7365442.jpg" alt="">
              </div>
              <h6>A treatment that involves wrapping the body in hydrating or detoxifying products to nourish and rejuvenate the skin while promoting relaxation.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Cellulite Reduction Treatment</span>
            <p>$165.00</p>
            <h6 style="display: none;">Uses specialized techniques like massage, radiofrequency, or creams to reduce the appearance of cellulite on areas like thighs and buttocks</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Cellulite Reduction Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-karolina-grabowska-6629606.jpg" alt="">
              </div>
              <h6>Uses specialized techniques like massage, radiofrequency, or creams to reduce the appearance of cellulite on areas like thighs and buttocks</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Full-Body Massage</span>
            <p>$130.00</p>
            <h6 style="display: none;">A relaxing massage combined with a deeply hydrating moisturizer application, leaving the skin soft and supple.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Full-Body Massage</span>
              <div class="service-description-img">
               <img src="images/pexels-liksunenok-11894617.jpg" alt="">
              </div>
              <h6>A relaxing massage combined with a deeply hydrating moisturizer application, leaving the skin soft and supple.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Hand Rejuvenation</span>
            <p>$70.00</p>
            <h6 style="display: none;">Focuses on the hands, using exfoliation, hydration, and sometimes light therapy to reduce signs of aging and improve skin texture.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Hand Rejuvenation</span>
              <div class="service-description-img">
               <img src="images/pexels-sergey-torbik-42706484-7365442.jpg" alt="">
              </div>
              <h6>Focuses on the hands, using exfoliation, hydration, and sometimes light therapy to reduce signs of aging and improve skin texture.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Foot Treatment</span>
            <p>$70.00</p>
            <h6 style="display: none;">Includes exfoliation and deep moisturizing of the feet, leaving them soft and smooth.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Foot Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755544.jpg" alt="">
              </div>
              <h6>Includes exfoliation and deep moisturizing of the feet, leaving them soft and smooth.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Stretch Mark Reduction</span>
            <p>$200.00</p>
            <h6 style="display: none;">Utilizes microneedling, lasers, or specialized creams to reduce the appearance of stretch marks on areas like the abdomen, thighs, and hips.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Stretch Mark Reduction</span>
              <div class="service-description-img">
               <img src="images/pexels-karolina-grabowska-6629606.jpg" alt="">
              </div>
              <h6>Utilizes microneedling, lasers, or specialized creams to reduce the appearance of stretch marks on areas like the abdomen, thighs, and hips.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Underarm Brightening</span>
            <p>$60.00</p>
            <h6 style="display: none;">A treatment designed to lighten dark underarms using exfoliation and brightening agents.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Underarm Brightening</span>
              <div class="service-description-img">
               <img src="images/pexels-liksunenok-11894617.jpg" alt="">
              </div>
              <h6>A treatment designed to lighten dark underarms using exfoliation and brightening agents.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Body Microdermabrasion</span>
            <p>$125.00</p>
            <h6 style="display: none;">A gentle exfoliation treatment using a microdermabrasion device to smooth and renew the skin on areas like the arms, legs, or back.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Body Microdermabrasion</span>
              <div class="service-description-img">
               <img src="images/pexels-sergey-torbik-42706484-7365442.jpg" alt="">
              </div>
              <h6>A gentle exfoliation treatment using a microdermabrasion device to smooth and renew the skin on areas like the arms, legs, or back.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Bikini Area Skin Treatment</span>
            <p>$80.00</p>
            <h6 style="display: none;">Focuses on soothing and preventing ingrown hairs and dark spots in the bikini area through exfoliation, hydration, and brightening treatments.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Bikini Area Skin Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-karolina-grabowska-6629606.jpg" alt="">
              </div>
              <h6>Focuses on soothing and preventing ingrown hairs and dark spots in the bikini area through exfoliation, hydration, and brightening treatments.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Scar Reduction Treatment</span>
            <p>$200.00</p>
            <h6 style="display: none;">Targets scars on the body using treatments like microneedling, lasers, or chemical peels to reduce their appearance.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Scar Reduction Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-liksunenok-11894617.jpg" alt="">
              </div>
              <h6>Targets scars on the body using treatments like microneedling, lasers, or chemical peels to reduce their appearance.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
          <div class="service service-divs">
            <span>Body Contouring Treatment</span>
            <p>$320.00</p>
            <h6 style="display: none;">Non-surgical treatment using techniques like radiofrequency, ultrasound, or cryolipolysis to contour and tighten the skin on areas like the abdomen, thighs, and arms.</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Body Contouring Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-sergey-torbik-42706484-7365442.jpg" alt="">
              </div>
              <h6>Non-surgical treatment using techniques like radiofrequency, ultrasound, or cryolipolysis to contour and tighten the skin on areas like the abdomen, thighs, and arms.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>`;

          let serviceDiv = document.querySelectorAll(".service");
          let mobileDiv = document.querySelectorAll(".mobile-service-description");
          serviceDiv.forEach(div =>{
            div.addEventListener('click', () => {
              serviceDiv.forEach(d => d.classList.remove('service-clicked'))
              div.classList.add('service-clicked');
              
              serviceName.innerText = div.querySelector('span').innerText;
              servicePrice.innerHTML = div.querySelector('p').innerText;
              serviceDescription.innerHTML = div.querySelector('h6').innerText;


              mobileDiv.forEach(mobile => {
                if (mobile.querySelector('span').innerText === serviceName.innerText) {
                  mobile.style.display = 'flex';
                  serviceImg.src = mobile.querySelector('.service-description-img img').src;
                  mobile.style.display = 'none'; // Update image
                }
              });
              
              if (window.matchMedia("(max-width: 730px)").matches) {
                // Show the corresponding mobile div and hide others
                mobileDiv.forEach(mobile => {
                    if (mobile.querySelector('span').innerText === serviceName.innerText) {
                        mobile.style.display = 'flex';
                    } else {
                        mobile.style.display = 'none';
                    }
                });
                
            }
            })
          })
            // Function to hide mobileDivs if the screen is larger than 730px
  function hideMobileDivsOnResize() {
    if (window.matchMedia("(min-width: 731px)").matches) {
        mobileDiv.forEach(mobile => {
            mobile.style.display = 'none';
        });
    }
}

// Call the function initially to check screen size on page load
hideMobileDivsOnResize();

// Add event listener for window resize to hide mobileDivs on larger screens
window.addEventListener('resize', hideMobileDivsOnResize);
  }

  tanning.onclick = function tan(){
    tanning.classList.add('service-chosen')
    skinCare.classList.remove('service-chosen')
    aromaTherapy.classList.remove('service-chosen')
    facialCare.classList.remove('service-chosen')
    nailTreatment.classList.remove('service-chosen')
    hairStyling.classList.remove('service-chosen')
      services.innerHTML = 
      `
            <div class="service-name service-divs">
              <h4>Service Name</h4>
              <div class="p-div">
                <p>Pricing</p>
                <h6 style="display: none;"></h6>
              </div>
            </div>
            <div class="service service-divs">
              <span>Sunbed Tanning Session</span>
              <p>$25.00</p>
              <h6 style="display: none;">A session in a traditional tanning bed, offering controlled UV exposure for a natural tan.(15 minutes)</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Sunbed Tanning Session</span>
              <div class="service-description-img">
               <img src="images/pexels-lespa-s-1-v-di-u-tr-m-n-nam-s-o-r-3370719-5042619.jpg" alt="">
              </div>
              <h6>A session in a traditional tanning bed, offering controlled UV exposure for a natural tan.(15 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Spray Tan (Full Body)</span>
              <p>$45.00</p>
              <h6 style="display: none;">A professional spray tan application for a full-body, even glow.(30 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Spray Tan (Full Body)</span>
              <div class="service-description-img">
               <img src="images/pexels-shvets-production-9774872.jpg" alt="">
              </div>
              <h6>A professional spray tan application for a full-body, even glow.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Custom Airbrush Tan</span>
              <p>$60.00</p>
              <h6 style="display: none;">A personalized airbrush tanning session tailored to your desired shade and skin type.(30 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Custom Airbrush Tan</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A personalized airbrush tanning session tailored to your desired shade and skin type.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Rapid Spray Tan</span>
              <p>$50.00</p>
              <h6 style="display: none;">A fast-developing spray tan that allows you to shower in 1-3 hours after application.(30 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Rapid Spray Tan</span>
              <div class="service-description-img">
               <img src="images/pexels-lespa-s-1-v-di-u-tr-m-n-nam-s-o-r-3370719-5042619.jpg" alt="">
              </div>
              <h6>A fast-developing spray tan that allows you to shower in 1-3 hours after application.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Sunless Tanning Lotion</span>
              <p>$35.00</p>
              <h6 style="display: none;">A professional application of sunless tanning lotion for an even, streak-free finish.(30 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Sunless Tanning Lotion</span>
              <div class="service-description-img">
               <img src="images/pexels-shvets-production-9774872.jpg" alt="">
              </div>
              <h6>A professional application of sunless tanning lotion for an even, streak-free finish.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Tanning Bed Package</span>
              <p>$200.00</p>
              <h6 style="display: none;">A discounted package of 10 sunbed tanning sessions.(10 sessions)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Tanning Bed Package</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A discounted package of 10 sunbed tanning sessions.(10 sessions)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Spray Tan (Half Body)</span>
              <p>$30.00</p>
              <h6 style="display: none;">A spray tan application focused on either the upper or lower body.(20 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Spray Tan (Half Body)</span>
              <div class="service-description-img">
               <img src="images/pexels-lespa-s-1-v-di-u-tr-m-n-nam-s-o-r-3370719-5042619.jpg" alt="">
              </div>
              <h6>A spray tan application focused on either the upper or lower body.(20 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Organic Spray Tan</span>
              <p>$65.00</p>
              <h6 style="display: none;">A spray tan using organic, natural ingredients for a healthy, glowing tan.(30 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Organic Spray Tan</span>
              <div class="service-description-img">
               <img src="images/pexels-shvets-production-9774872.jpg" alt="">
              </div>
              <h6>A spray tan using organic, natural ingredients for a healthy, glowing tan.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Contouring Airbrush Tan</span>
              <p>$75.00</p>
              <h6 style="display: none;">A specialized airbrush tan that includes body contouring to highlight muscles and create a sculpted look.(45 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Contouring Airbrush Tan</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A specialized airbrush tan that includes body contouring to highlight muscles and create a sculpted look.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Face-Only Tanning</span>
              <p>$20.00</p>
              <h6 style="display: none;">A quick tanning session focused on achieving a natural glow on the face.(15 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Face-Only Tanning</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A quick tanning session focused on achieving a natural glow on the face.(15 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Pre-Tan Exfoliation Treatment</span>
              <p>$40.00</p>
              <h6 style="display: none;">A full-body exfoliation treatment to prepare the skin for a more even and longer-lasting tan.(30 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Pre-Tan Exfoliation Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-shvets-production-9774872.jpg" alt="">
              </div>
              <h6>A full-body exfoliation treatment to prepare the skin for a more even and longer-lasting tan.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Tan-Extending Moisturizer</span>
              <p>$25.00</p>
              <h6 style="display: none;">A professional application of tan-extending moisturizer to prolong the life of your tan.(20 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Tan-Extending Moisturizer</span>
              <div class="service-description-img">
               <img src="images/pexels-polina-tankilevitch-3736398.jpg" alt="">
              </div>
              <h6>A professional application of tan-extending moisturizer to prolong the life of your tan.(20 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>
             <div class="service service-divs">
              <span>Bridal Spray Tan Package</span>
              <p>$120.00</p>
              <h6 style="display: none;">A specialized tanning package for brides, including a trial spray tan and final tan before the big day.(includes 2 sessions)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Bridal Spray Tan Package</span>
              <div class="service-description-img">
               <img src="images/pexels-shvets-production-9774872.jpg" alt="">
              </div>
              <h6>A specialized tanning package for brides, including a trial spray tan and final tan before the big day.(includes 2 sessions)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
             </div>`;

            let serviceDiv = document.querySelectorAll(".service");
            let mobileDiv = document.querySelectorAll(".mobile-service-description");
            serviceDiv.forEach(div =>{
              div.addEventListener('click', () => {
                serviceDiv.forEach(d => d.classList.remove('service-clicked'))
                div.classList.add('service-clicked');
                
                serviceName.innerText = div.querySelector('span').innerText;
                servicePrice.innerHTML = div.querySelector('p').innerText;
                serviceDescription.innerHTML = div.querySelector('h6').innerText;

                mobileDiv.forEach(mobile => {
                  if (mobile.querySelector('span').innerText === serviceName.innerText) {
                    mobile.style.display = 'flex';
                    serviceImg.src = mobile.querySelector('.service-description-img img').src;
                    mobile.style.display = 'none'; // Update image
                  }
                });
                
                if (window.matchMedia("(max-width: 730px)").matches) {
                  // Show the corresponding mobile div and hide others
                  mobileDiv.forEach(mobile => {
                      if (mobile.querySelector('span').innerText === serviceName.innerText) {
                          mobile.style.display = 'flex';
                      } else {
                          mobile.style.display = 'none';
                      }
                  });
                  
              }
              })
            })
              // Function to hide mobileDivs if the screen is larger than 730px
    function hideMobileDivsOnResize() {
      if (window.matchMedia("(min-width: 731px)").matches) {
          mobileDiv.forEach(mobile => {
              mobile.style.display = 'none';
          });
      }
  }

  // Call the function initially to check screen size on page load
  hideMobileDivsOnResize();

  // Add event listener for window resize to hide mobileDivs on larger screens
  window.addEventListener('resize', hideMobileDivsOnResize);
    }

    facialCare.onclick = function face(){
      facialCare.classList.add('service-chosen')
      skinCare.classList.remove('service-chosen')
      tanning.classList.remove('service-chosen')
      aromaTherapy.classList.remove('service-chosen')
      nailTreatment.classList.remove('service-chosen')
      hairStyling.classList.remove('service-chosen')
        services.innerHTML = 
      `
          <div class="service-name service-divs">
            <h4>Service Name</h4>
            <div class="p-div">
              <p>Pricing</p>
              <h6 style="display: none;"></h6>
            </div>
          </div>
          <div class="service service-divs">
            <span>Classic Facial</span>
            <p>$75.00</p>
            <h6 style="display: none;">A basic facial including cleansing, exfoliation, extraction, mask, and moisturizer.(60 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Classic Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-lespa-s-1-v-di-u-tr-m-n-nam-s-o-r-3370719-5042588.jpg" alt="">
              </div>
              <h6>A basic facial including cleansing, exfoliation, extraction, mask, and moisturizer.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
          </div>
          <div class="service service-divs">
            <span>Deep Cleansing Facial</span>
            <p>$90.00</p>
            <h6 style="display: none;">A thorough facial treatment designed to deeply cleanse pores, remove impurities, and prevent acne.(75 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Deep Cleansing Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-rosa-isela-sias-talamantes-566198525-20683632.jpg" alt="">
              </div>
              <h6>A thorough facial treatment designed to deeply cleanse pores, remove impurities, and prevent acne.(75 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Anti-Aging Facial</span>
            <p>$100.00</p>
            <h6 style="display: none;">A rejuvenating facial that targets fine lines, wrinkles, and aging skin using specialized serums and masks.(75 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Anti-Aging Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-karolina-grabowska-5240460.jpg" alt="">
              </div>
              <h6>A rejuvenating facial that targets fine lines, wrinkles, and aging skin using specialized serums and masks.(75 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Hydrating Facial</span>
            <p>$85.00</p>
            <h6 style="display: none;">A moisture-boosting facial that hydrates and revitalizes dry, dull skin.(60 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Hydrating Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-lespa-s-1-v-di-u-tr-m-n-nam-s-o-r-3370719-5042588.jpg" alt="">
              </div>
              <h6>A moisture-boosting facial that hydrates and revitalizes dry, dull skin.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Brightening Facial</span>
            <p>$95.00</p>
            <h6 style="display: none;">A facial that uses vitamin C and other brightening agents to even skin tone and reduce dark spots.(60 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Brightening Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755546.jpg" alt="">
              </div>
              <h6>A facial that uses vitamin C and other brightening agents to even skin tone and reduce dark spots.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Microdermabrasion</span>
            <p>$110.00</p>
            <h6 style="display: none;">A non-invasive exfoliation treatment that removes dead skin cells and improves skin texture.(60 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Microdermabrasion</span>
              <div class="service-description-img">
               <img src="images/pexels-rosa-isela-sias-talamantes-566198525-20683632.jpg" alt="">
              </div>
              <h6>A non-invasive exfoliation treatment that removes dead skin cells and improves skin texture.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Chemical Peel</span>
            <p>$120.00</p>
            <h6 style="display: none;">A treatment that uses a chemical solution to exfoliate and improve the appearance of the skin.(45 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Chemical Peel</span>
              <div class="service-description-img">
               <img src="images/pexels-karolina-grabowska-5240460.jpg" alt="">
              </div>
              <h6>A treatment that uses a chemical solution to exfoliate and improve the appearance of the skin.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Acne Treatment Facial</span>
            <p>$85.00</p>
            <h6 style="display: none;">A facial specifically designed to treat and prevent acne, using anti-bacterial and anti-inflammatory ingredients.(60 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Acne Treatment Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-lespa-s-1-v-di-u-tr-m-n-nam-s-o-r-3370719-5042588.jpg" alt="">
              </div>
              <h6>A facial specifically designed to treat and prevent acne, using anti-bacterial and anti-inflammatory ingredients.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Oxygen Facial</span>
            <p>$125.00</p>
            <h6 style="display: none;">A facial that infuses oxygen and nutrients into the skin, promoting collagen production and a radiant complexion.(75 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Oxygen Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-rosa-isela-sias-talamantes-566198525-20683632.jpg" alt="">
              </div>
              <h6>A facial that infuses oxygen and nutrients into the skin, promoting collagen production and a radiant complexion.(75 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Collagen Facial</span>
            <p>$110.00</p>
            <h6 style="display: none;">A facial that boosts collagen production, firming and tightening the skin for a more youthful appearance.(75 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Collagen Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-rosa-isela-sias-talamantes-566198525-20683632.jpg" alt="">
              </div>
              <h6>A facial that boosts collagen production, firming and tightening the skin for a more youthful appearance.(75 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>LED Light Therapy Facial</span>
            <p>$100.00</p>
            <h6 style="display: none;">A facial that uses LED light to treat various skin concerns like acne, redness, and aging.(60 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">LED Light Therapy Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755546.jpg" alt="">
              </div>
              <h6>A facial that uses LED light to treat various skin concerns like acne, redness, and aging.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Dermaplaning</span>
            <p>$95.00</p>
            <h6 style="display: none;">A non-invasive exfoliation treatment that removes dead skin cells and peach fuzz for a smooth, glowing complexion.(45 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Dermaplaning</span>
              <div class="service-description-img">
               <img src="images/pexels-rosa-isela-sias-talamantes-566198525-20683632.jpg" alt="">
              </div>
              <h6>A non-invasive exfoliation treatment that removes dead skin cells and peach fuzz for a smooth, glowing complexion.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
          <div class="service service-divs">
            <span>Luxury Facial</span>
            <p>$150.00</p>
            <h6 style="display: none;">An indulgent facial experience that includes advanced techniques, high-end products, and a relaxing massage.(90 minutes)</h6>
          </div>
          <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Luxury Facial</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755546.jpg" alt="">
              </div>
              <h6>An indulgent facial experience that includes advanced techniques, high-end products, and a relaxing massage.(90 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>`;

          let serviceDiv = document.querySelectorAll(".service");
          let mobileDiv = document.querySelectorAll(".mobile-service-description");
          serviceDiv.forEach(div =>{
            div.addEventListener('click', () => {
              serviceDiv.forEach(d => d.classList.remove('service-clicked'))
              div.classList.add('service-clicked');
              
              serviceName.innerText = div.querySelector('span').innerText;
              servicePrice.innerHTML = div.querySelector('p').innerText;
              serviceDescription.innerHTML = div.querySelector('h6').innerText;

              mobileDiv.forEach(mobile => {
                if (mobile.querySelector('span').innerText === serviceName.innerText) {
                  mobile.style.display = 'flex';
                  serviceImg.src = mobile.querySelector('.service-description-img img').src;
                  mobile.style.display = 'none'; // Update image
                }
              });
              
              if (window.matchMedia("(max-width: 730px)").matches) {
                // Show the corresponding mobile div and hide others
                mobileDiv.forEach(mobile => {
                    if (mobile.querySelector('span').innerText === serviceName.innerText) {
                        mobile.style.display = 'flex';
                    } else {
                        mobile.style.display = 'none';
                    }
                });
                
            }
            })
          })
            // Function to hide mobileDivs if the screen is larger than 730px
  function hideMobileDivsOnResize() {
    if (window.matchMedia("(min-width: 731px)").matches) {
        mobileDiv.forEach(mobile => {
            mobile.style.display = 'none';
        });
    }
}

// Call the function initially to check screen size on page load
hideMobileDivsOnResize();

// Add event listener for window resize to hide mobileDivs on larger screens
window.addEventListener('resize', hideMobileDivsOnResize);
      }

      nailTreatment.onclick = function nail(){
        nailTreatment.classList.add('service-chosen')
        skinCare.classList.remove('service-chosen')
        tanning.classList.remove('service-chosen')
        facialCare.classList.remove('service-chosen')
        aromaTherapy.classList.remove('service-chosen')
        hairStyling.classList.remove('service-chosen')
          services.innerHTML = 
         `
            <div class="service-name service-divs">
              <h4>Service Name</h4>
              <div class="p-div">
                <p>Pricing</p>
              </div>
            </div>
            <div class="service service-divs">
              <span>Classic Manicure</span>
              <p>$25.00</p>
              <h6 style="display: none;">A basic manicure that includes nail shaping, cuticle care, and polish application.(30 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Classic Manicure</span>
              <div class="service-description-img">
               <img src="images/pexels-gustavo-fring-7446905.jpg" alt="">
              </div>
              <h6>A basic manicure that includes nail shaping, cuticle care, and polish application.(30 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Classic Pedicure</span>
              <p>$35.00</p>
              <h6 style="display: none;">A basic pedicure that includes nail shaping, cuticle care, exfoliation, and polish application.(45 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Classic Pedicure</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755544.jpg" alt="">
              </div>
              <h6>A basic pedicure that includes nail shaping, cuticle care, exfoliation, and polish application.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Gel Manicure</span>
              <p>$40.00</p>
              <h6 style="display: none;">A manicure with gel polish that provides long-lasting color and shine.(45 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Gel Manicure</span>
              <div class="service-description-img">
               <img src="images/pexels-gustavo-fring-7446905.jpg" alt="">
              </div>
              <h6>A manicure with gel polish that provides long-lasting color and shine.(45 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Gel Pedicure</span>
              <p>$50.00</p>
              <h6 style="display: none;">A pedicure with gel polish that offers long-lasting color and a high-gloss finish.(60 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Gel Pedicure</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755544.jpg" alt="">
              </div>
              <h6>A pedicure with gel polish that offers long-lasting color and a high-gloss finish.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>French Manicure</span>
              <p>$30.00</p>
              <h6 style="display: none;">A classic manicure with a white tip for a natural, elegant look.(40 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">French Manicure</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755653.jpg" alt="">
              </div>
              <h6>A classic manicure with a white tip for a natural, elegant look.(40 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Acrylic Full Set</span>
              <p>$60.00</p>
              <h6 style="display: none;">A full set of acrylic nails, including shaping and polish.(90 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Acrylic Full Set</span>
              <div class="service-description-img">
               <img src="images/pexels-gustavo-fring-7446905.jpg" alt="">
              </div>
              <h6>A full set of acrylic nails, including shaping and polish.(90 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Acrylic Fill-In</span>
              <p>$35.00</p>
              <h6 style="display: none;">Maintenance service for acrylic nails, filling in the growth area.(60 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Acrylic Fill-In</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755653.jpg" alt="">
              </div>
              <h6>Maintenance service for acrylic nails, filling in the growth area.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Dip Powder Manicure</span>
              <p>$45.00</p>
              <h6 style="display: none;">A manicure using dip powder for a durable, long-lasting finish.(60 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Dip Powder Manicure</span>
              <div class="service-description-img">
               <img src="images/pexels-gustavo-fring-7446905.jpg" alt="">
              </div>
              <h6>A manicure using dip powder for a durable, long-lasting finish.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Paraffin Wax Treatment</span>
              <p>$20.00</p>
              <h6 style="display: none;">A moisturizing treatment for hands or feet using warm paraffin wax.(add-on, 15 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Paraffin Wax Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755544.jpg" alt="">
              </div>
              <h6>A moisturizing treatment for hands or feet using warm paraffin wax.(add-on, 15 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Nail Art</span>
              <p>$20.00</p>
              <h6 style="display: none;">Customized nail designs and art, ranging from simple to intricate.(add-on, price depending on design complexity)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Nail Art</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755653.jpg" alt="">
              </div>
              <h6>Customized nail designs and art, ranging from simple to intricate.(add-on, price depending on design complexity)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Spa Manicure</span>
              <p>$45.00</p>
              <h6 style="display: none;">A luxurious manicure that includes exfoliation, mask, massage, and polish.(60 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Spa Manicure</span>
              <div class="service-description-img">
               <img src="images/pexels-gustavo-fring-7446905.jpg" alt="">
              </div>
              <h6>A luxurious manicure that includes exfoliation, mask, massage, and polish.(60 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Spa Pedicure</span>
              <p>$60.00</p>
              <h6 style="display: none;">A luxurious pedicure that includes exfoliation, mask, massage, and polish.(75 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Spa Pedicure</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755544.jpg" alt="">
              </div>
              <h6>A luxurious pedicure that includes exfoliation, mask, massage, and polish.(75 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Gel-X Nail Extensions</span>
              <p>$70.00</p>
              <h6 style="display: none;">Soft gel extensions that provide a natural look with the strength of gel.(90 minutes)</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Gel-X Nail Extensions</span>
              <div class="service-description-img">
               <img src="images/pexels-rdne-7755653.jpg" alt="">
              </div>
              <h6>Soft gel extensions that provide a natural look with the strength of gel.(90 minutes)</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>`;

            let serviceDiv = document.querySelectorAll(".service");
            let mobileDiv = document.querySelectorAll(".mobile-service-description");
            serviceDiv.forEach(div =>{
              div.addEventListener('click', () => {
                serviceDiv.forEach(d => d.classList.remove('service-clicked'))
                div.classList.add('service-clicked');
                
                serviceName.innerText = div.querySelector('span').innerText;
                servicePrice.innerHTML = div.querySelector('p').innerText;
                serviceDescription.innerHTML = div.querySelector('h6').innerText;

                mobileDiv.forEach(mobile => {
                  if (mobile.querySelector('span').innerText === serviceName.innerText) {
                    mobile.style.display = 'flex';
                    serviceImg.src = mobile.querySelector('.service-description-img img').src;
                    mobile.style.display = 'none'; // Update image
                  }
                });
                
                if (window.matchMedia("(max-width: 730px)").matches) {
                  // Show the corresponding mobile div and hide others
                  mobileDiv.forEach(mobile => {
                      if (mobile.querySelector('span').innerText === serviceName.innerText) {
                          mobile.style.display = 'flex';
                      } else {
                          mobile.style.display = 'none';
                      }
                  });
                  
              }
              })
            })
              // Function to hide mobileDivs if the screen is larger than 730px
    function hideMobileDivsOnResize() {
      if (window.matchMedia("(min-width: 731px)").matches) {
          mobileDiv.forEach(mobile => {
              mobile.style.display = 'none';
          });
      }
  }

  // Call the function initially to check screen size on page load
  hideMobileDivsOnResize();

  // Add event listener for window resize to hide mobileDivs on larger screens
  window.addEventListener('resize', hideMobileDivsOnResize);
}




        hairStyling.onclick = function hair(){
          hairStyling.classList.add('service-chosen')
          skinCare.classList.remove('service-chosen')
          tanning.classList.remove('service-chosen')
          facialCare.classList.remove('service-chosen')
          nailTreatment.classList.remove('service-chosen')
          aromaTherapy.classList.remove('service-chosen')
            services.innerHTML = 
            `
            <div class="service-name service-divs">
              <h4>Service Name</h4>
              <div class="p-div">
                <p>Pricing</p>
                <h6 style="display: none;"></h6>
              </div>
            </div>
            <div class="service service-divs">
              <span>Women's Haircut and Style</span>
              <p>$55.00</p>
              <h6 style="display: none;">A customized haircut followed by a blow-dry and style.</h6>
            </div>
            <div style="display: none;" class="js-img mobile-service-description">
              <span style="display: none;">Women's Haircut and Style</span>
              <div class="service-description-img">
               <img src="black-woman-touches-her-curly-hair.jpg" alt="">
              </div>
              <h6>A customized haircut followed by a blow-dry and style.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
            <div class="service service-divs">
              <span>Men's Haircut</span>
              <p>$35.00</p>
              <h6 style="display: none;">A precision haircut tailored to the client's preferences.</h6>
            </div>
            <div style="display: none;" class="mobile-service-description js-img">
              <span style="display: none;">Men's Haircut</span>
              <div class="service-description-img">
               <img src="images/pexels-izzet-cakalli-239176330-12464840.jpg" alt="">
              </div>
              <h6>A precision haircut tailored to the client's preferences.</h6>
              <a href="#contact"><button class="service-description-btn">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Children's Haircut</span>
              <p>$25.00</p>
              <h6 style="display: none;">A haircut for children aged 12 and under, including styling.</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Children's Haircut</span>
              <div class="service-description-img">
               <img src="images/pexels-enginakyurt-3065171.jpg" alt="">
              </div>
              <h6>A haircut for children aged 12 and under, including styling.</h6>
              <a href="#contact"><button class="service-description-btn">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Blowout</span>
              <p>$40.00</p>
              <h6 style="display: none;">A professional blow-dry and style for smooth, voluminous hair.</h6>
            </div>
            <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Blowout</span>
              <div class="service-description-img">
               <img src="black-woman-touches-her-curly-hair.jpg" alt="">
              </div>
              <h6>A professional blow-dry and style for smooth, voluminous hair.</h6>
              <a href="#contact"><button class="service-description-btn">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Hair Color (Full)</span>
              <p>$85.00</p>
              <h6 style="display: none;">A full hair color application, including consultation, color, and style.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Hair Color (Full)</span>
              <div class="service-description-img">
               <img src="images/pexels-enginakyurt-3065171.jpg" alt="">
              </div>
              <h6>A full hair color application, including consultation, color, and style.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Root Touch-Up</span>
              <p>$65.00</p>
              <h6 style="display: none;">Color application to cover new hair growth at the roots.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Root Touch-Up</span>
              <div class="service-description-img">
               <img src="images/pexels-mikhail-nilov-7819734.jpg" alt="">
              </div>
              <h6>Color application to cover new hair growth at the roots.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Balayage/Ombre</span>
              <p>$150.00</p>
              <h6 style="display: none;">A hand-painted coloring technique for a natural, sun-kissed look.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Balayage/Ombre</span>
              <div class="service-description-img">
               <img src="images/pexels-mikhail-nilov-7819734.jpg" alt="">
              </div>
              <h6>A hand-painted coloring technique for a natural, sun-kissed look.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Highlights (Full)</span>
              <p>$130.00</p>
              <h6 style="display: none;">Full head highlights to add dimension and brightness to hair.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Highlights (Full)</span>
              <div class="service-description-img">
               <img src="images/pexels-enginakyurt-3065171.jpg" alt="">
              </div>
              <h6>Full head highlights to add dimension and brightness to hair.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Partial Highlights</span>
              <p>$95.00</p>
              <h6 style="display: none;">Highlights applied to specific sections of hair for a subtle effect.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Partial Highlights</span>
              <div class="service-description-img">
               <img src="black-woman-touches-her-curly-hair.jpg" alt="">
              </div>
              <h6>Highlights applied to specific sections of hair for a subtle effect.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Gloss/Toner Treatment</span>
              <p>$40.00</p>
              <h6 style="display: none;">A treatment to enhance shine and correct or adjust hair color tone.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Gloss/Toner Treatment</span>
              <div class="service-description-img">
               <img src="black-woman-touches-her-curly-hair.jpg" alt="">
              </div>
              <h6>A treatment to enhance shine and correct or adjust hair color tone.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Keratin Treatment</span>
              <p>$200.00</p>
              <h6 style="display: none;">A smoothing treatment that reduces frizz and adds shine, lasting up to three months.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Keratin Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-mikhail-nilov-7819734.jpg" alt="">
              </div>
              <h6>A smoothing treatment that reduces frizz and adds shine, lasting up to three months.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Brazilian Blowout</span>
              <p>$250.00</p>
              <h6 style="display: none;">A smoothing treatment that leaves hair sleek and shiny for up to 12 weeks.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Brazilian Blowout</span>
              <div class="service-description-img">
               <img src="black-woman-touches-her-curly-hair.jpg" alt="">
              </div>
              <h6>A smoothing treatment that leaves hair sleek and shiny for up to 12 weeks.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
             <div class="service service-divs">
              <span>Hair Extensions (Installation)</span>
              <p>$300.00</p>
              <h6 style="display: none;">Professional installation of hair extensions for added length and volume.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Hair Extensions (Installation)</span>
              <div class="service-description-img">
               <img src="images/pexels-enginakyurt-3065171.jpg" alt="">
              </div>
              <h6>Professional installation of hair extensions for added length and volume.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
            <div class="service service-divs">
              <span>Braiding</span>
              <p>$60.00+</p>
              <h6 style="display: none;">Customized braids, such as box braids, cornrows, or French braids.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Braiding</span>
              <div class="service-description-img">
               <img src="images/pexels-mikhail-nilov-7819734.jpg" alt="">
              </div>
              <h6>Customized braids, such as box braids, cornrows, or French braids.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
            <div class="service service-divs">
              <span>Perm</span>
              <p>$100.00</p>
              <h6 style="display: none;">A chemical treatment to create permanent waves or curls.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Perm</span>
              <div class="service-description-img">
               <img src="black-woman-touches-her-curly-hair.jpg" alt="">
              </div>
              <h6>A chemical treatment to create permanent waves or curls.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
            <div class="service service-divs">
              <span>Scalp Treatment</span>
              <p>$50.00</p>
              <h6 style="display: none;">A revitalizing treatment to nourish the scalp and promote healthy hair growth.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Scalp Treatment</span>
              <div class="service-description-img">
               <img src="images/pexels-mikhail-nilov-7819734.jpg" alt="">
              </div>
              <h6>A revitalizing treatment to nourish the scalp and promote healthy hair growth.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
            <div class="service service-divs">
              <span>Hair Detox Treatment</span>
              <p>$55.00</p>
              <h6 style="display: none;">A treatment that removes product buildup and detoxifies the hair and scalp.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Hair Detox Treatment</span>
              <div class="service-description-img">
               <img src="black-woman-touches-her-curly-hair.jpg" alt="">
              </div>
              <h6>A treatment that removes product buildup and detoxifies the hair and scalp.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>
            <div class="service service-divs">
              <span>Special Occasion Styling</span>
              <p>$75.00</p>
              <h6 style="display: none;">A formal hairstyle for weddings, proms, or special events.</h6>
            </div>
             <div style="display: none;" class="mobile-service-description">
              <span style="display: none;">Special Occasion Styling</span>
              <div class="service-description-img">
               <img src="images/pexels-enginakyurt-3065171.jpg" alt="">
              </div>
              <h6>A formal hairstyle for weddings, proms, or special events.</h6>
              <a href="#contact"><button class="">Book Appointment</button></a>
            </div>`;

            let serviceDiv = document.querySelectorAll(".service");
            let mobileDiv = document.querySelectorAll(".mobile-service-description");
            
            serviceDiv.forEach(div =>{
              div.addEventListener('click', () => {
                serviceDiv.forEach(d => d.classList.remove('service-clicked'))
                div.classList.add('service-clicked');
                
                serviceName.innerText = div.querySelector('span').innerText;
                servicePrice.innerHTML = div.querySelector('p').innerText;
                serviceDescription.innerHTML = div.querySelector('h6').innerText;
                
                mobileDiv.forEach(mobile => {
                  if (mobile.querySelector('span').innerText === serviceName.innerText) {
                    mobile.style.display = 'flex';
                    serviceImg.src = mobile.querySelector('.service-description-img img').src;
                    mobile.style.display = 'none'; // Update image
                  }
                });
                
                if (window.matchMedia("(max-width: 730px)").matches) {
                  // Show the corresponding mobile div and hide others
                  mobileDiv.forEach(mobile => {
                      if (mobile.querySelector('span').innerText === serviceName.innerText) {
                          mobile.style.display = 'flex';
                          serviceImg.src = mobile.querySelector('.service-description-img img').src; 
                      } else {
                          mobile.style.display = 'none';
                      }
                  });
                  
              }
              })
            })
              // Function to hide mobileDivs if the screen is larger than 730px
    function hideMobileDivsOnResize() {
      if (window.matchMedia("(min-width: 731px)").matches) {
          mobileDiv.forEach(mobile => {
              mobile.style.display = 'none';
          });
      }
  }

  // Call the function initially to check screen size on page load
  hideMobileDivsOnResize();

  // Add event listener for window resize to hide mobileDivs on larger screens
  window.addEventListener('resize', hideMobileDivsOnResize);

}


