## What is Accredii 

What is Accredii: Accredii is an innovative Investor Management System (IMS) that enables law firms, companies, investors, and funds to manage the accreditation process including all documents and subscriptions. Accredii empowers attorneys to easily create custom subscription agreements and distribute them to investors and companies while managing the entire workflow. . The days of manually building subscription agreements are over. Accredii abstracts the complexities of fund agreements into a simple portal, allowing all parties to gain insight into the state of each agreement. Due to our centralized architecture, our system remembers an investor’s responses to a subscription and can automatically populate subsequent subscriptions.  Nearly every accredited investor understands the frustration of filling out repetitive personal information for different agreements and Accredii eliminates this problem and greatly improves the investor experience.   The Accredii IMS seamlessly connects investors and companies to their attorneys via an API and user-friendly robust portal. 


## Application Highlights:

#### Attorney Dashboard: `path: /`  (if authenticated)
The below image is a screenshot of what an attorney will see on their homepage. They will be able to create agreements / subscriptions, add investors / companies, view high level document information, and drill into spacific documents. 

![image](https://user-images.githubusercontent.com/48835180/121745892-382ef600-cac2-11eb-92b9-591b205133ad.png)

#### Document Status Cards: `path: /documents`  (if authenticated)
The below image allows users to see the status of their documents a row of formatted cards. 

![image](https://user-images.githubusercontent.com/48835180/121746709-84c70100-cac3-11eb-8750-e5a977523b5d.png)

#### Document Detail Page: `path: /documents/:documentId` (if authenticated)
The below image shows the document detail page for the spacific document / subscription. The attorney can see the document status, details, history, and download the current version from S3. 

![image](https://user-images.githubusercontent.com/48835180/121747157-2ea68d80-cac4-11eb-8467-48fc50e32fc4.png)


## Directory Overview

The web app has many top level `src` directories:

### Accredii Directory Structure 

- ### Company

  - `CompanyAppContainer.js` (handles authentication from Auth0)
    - `CompanyApp.js` (renders if user is authenticated)
    - `CompanyRoutes.js` (route handler for all company routes)

- ### Lawfirm

  - `LawfirmAppContainer.js` (handles authentication from Auth0)
    - `LawfirmApp.js` (renders if user is authenticated)
    - `LawfirmRoutes.js` (route handler for all `attorney` routes)

- ### Investor
  - `InvestorAppContainer.js` (handles authentication from Auth0)
    - `InvestorApp.js` (renders if user is authenticated)
    - `InvestorRoutes.js` (route handler for all `investor` routes)

### Accredii Helper Directories

- ### Assets
  - `main.css` contains tailwind.css bundle
  - `tailwind.css` contains `tailwind` imports
- ### Components

  - `/Controls` (handle's control html elements (inputs, textbox, buttons)
  - `/Dashboard` (handle's dashboard elements on the `/` and other pages
  - `/Documents` (handle's all of the jsx files that render `/document/:id` page
  - `/AppComponents` (handle's global application components such like reports and company / document grid logic.
  - `/Form` (handle's all form components)
  - `/GridList` (handle's all grid list pages)
  - `/Table` (handle's all under the hood table logic ... `/AppComponents/Report.js` calls `Table.js`)
  - `Popup.js` (handle's all pop up logic)
  - `Search.js` (handle's the searchbar)
  - `Paper.js` (Allows for a white background for other components)

- ### LandingPage

  #### This is static content. Will be migrated to a server framework for SEO purposes

  - `/Components` (inside files make up `landingPage.js`

- ### Service

  - `backend.js` (includes all HTTP callouts to the protected Accredii API.)
  - `fileParsing.js` (includes the logic for base64 encoding / decoding uploaded files.)

- ## Navbar
  - `/Mobile` (Mobile navbar functionality nested in this directory)
  - `/Container.js` (acts as a container for the navbar)
  - `/Items.js` (handle's each component of the navbar)


### Backend API 

Our backend API is a python flask web app with a mongoDB database. API documentation can be viewed [here](https://accredii.readme.io/reference)
