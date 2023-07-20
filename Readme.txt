The following components can be used in this package:

Main.js
- This is the primary content page and contains a list of components which appear vertically on the page
- This page is already included in the package build list and does not need to be included in your specification or component list

Difficult to modify components:

heroApp.js
- A section of the page which contains a hero image of the product in an iphone surrounding
- Ideal for showcasing how a product will be used and for grabbing attention
- It contains a headline and tag line for the product
- It contains a bullet point list with 3 key features of the product
- It also contains an email sign up box and submit button
- Can be used without modification.

headline.js 
- A descriptive headline and sub text that are both centered in the middle of the page
- Can be used to describe products, features or the ethos or details of the business

fullBleedImage.js 
- a full page width image which is perfect for showcasing product usage or for showing artwork or product details
- even without fixed purpose it is good to have at least one fullbleedimage to provide color and an engaging style
 
Easy to modify Components (templates):

customSection.js
- TemplateFilePath: landingPageComponents/customSection.js.
- A template file for when none of the other sections fit the requirement
- Can be customised with any HTML or javascript content required.
- Has access to MaterialUI components, React components and any other packages available as part of CreateReactApp
- Appears vertically in the page just like the other packages
- Where required a solution can include multiple customSection.js sections - all with different file names and component names.

Deploy inputs:
- If you choose to use a hero image / sign up box, the solution will also require a deployinput from a database and an admin website.
- To do this, add the following two deployInputs:  
{
"type": "Database.API.PostOnly",
"envName": "REACT_APP_API_URL"
},
{
"type": "Database.Dynamo.Admin.SiteUrl",
"envName": "DEPENDS_ON"
}
- If no sign up box is present, then these are not required.


