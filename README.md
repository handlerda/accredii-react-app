# Accredii Front End Web App

The Accredii front end web app is the public facing web browser app when a user goes to accredii.com

## Directory Overview

The web app has many top level `src` directories: 

### Accredii Specific Apps

* ### Company
    * `CompanyAppContainer.js` (handles authentication from Auth0)
        * `CompanyApp.js` (renders if user is authenticated)
        * `CompanyRoutes.js` (route handler for all company routes)

* ### Lawfirm
    * `LawfirmAppContainer.js` (handles authentication from Auth0)
        * `LawfirmApp.js` (renders if user is authenticated)
        * `LawfirmRoutes.js` (route handler for all `attorney` routes)

* ### Investor
    * `InvestorAppContainer.js` (handles authentication from Auth0)
        * `InvestorApp.js` (renders if user is authenticated)
        * `InvestorRoutes.js` (route handler for all `investor` routes)

### Accredii Helper Directories 

* ### Assets
    * `main.css` contains tailwind.css bundle
    *  `tailwind.css` contains `tailwind` imports
    
* ### Components 
    * `/Controls` (handle's control html elements (inputs, textbox, buttons)
    * `/Dashboard` (handle's dashboard elements on the `/` and other pages
    * `/Documents` (handle's all of the jsx files that render `/document/:id` page
    * `/AppComponents` (handle's global application components such like reports and company / document grid logic. 
    * `/Form` (handle's all form components)
    * `/GridList` (handle's all grid list pages)
    * `/Table` (handle's all under the hood table logic ... `/AppComponents/Report.js` calls `Table.js`)
    * `Popup.js` (handle's all pop up logic)
    * `Search.js` (handle's the searchbar)
    * `Paper.js` (Allows for a white background for other components) 
    
    

* ### LandingPage
    #### This is static content. Will be migrated to a server framework for SEO purposes
    *  `/Compoents` (inside files make up `landingPage.js`

* ### Service
    * `backend.js` (includes all HTTP callouts to the protected Accredii API.)
    * `fileParsing.js` (includes the logic for base64 encoding / decoding uploaded files.) 

* ### Navbar
    * `/Mobile` (Mobile navbar functionality nested in this directory)
    * `/Container.js` (acts as a container for the navbar)
    * `/Items.js` (handle's each component of the navbar)
    
