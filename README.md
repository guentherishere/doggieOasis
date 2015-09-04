# doggieOasis


<h4>Overview</h4>
This project was submitted for my personal full-stack project utilizing the <a href="http://mean.io/#!/" target="new">MEAN</a> stack at DevMountain. This website was created for the Doggie Oasis, a pet shop, groomer, and dog daycare facility located in Texas.

One of the primary features that I implemented in this project was the ability for the store owner to modify elements on the front end without any programming experience. I made this process very simple for the end-user allowing simple plain-text entry into the form elements. This was achieved using update and post operations to the data that was stored on the back end. As a result, the store, welcome message, daycare packages, spa packages, and contact information are able to be modified by the store owner when logged in to the website.

The biggest challenge with this project was implementing the product ratings. I was able to store the ratings in a separate database collection while having the item that was rated store a reference to the rating document's objectID. This allowed me to populating the coressponding ratings and then be able to perorm the required mathematical operations to calculate the average for each product.

<h4>Lessons Learned</h4>
One of my objectives for this project was to spend extra time and careful attention to planning and designing the back end. I did this by drawing wireframes and block diagrams of the flow control. However, I decided to separate tasks by building out the entire back end and then jumping to the front end to wire everything together. This was a bit problematic since it made some of the backend work unneccessary as objectives were achieved in ways that differed from the original plan. In the future I will prevent this from happening by building out entire features from front end to back-end before moving on. This will ensure that any challenges will be addressed immediately to optimize efficieny.

<h4>Screenshots</h4>
<a href="http://imgur.com/4hbf8ly" target="new">Landing page as a normal user</a>
<br>
<a href="http://imgur.com/9bL2Rfr" target="new">Landing page as admin. Admin can customize welcome message</a>
<br>
<a href="http://imgur.com/mOLe3um" target="new">Store as a normal user</a>
<br>
<a href="http://imgur.com/NxcUhfW" target="new">Store as admin</a>
<br>
<a href="http://imgur.com/xRJxy44" target="new">Edit product</a>
<br>
<a href="http://imgur.com/nvVj6Ic" target="new">Shopping Cart</a>
<br>
<a href="http://imgur.com/YG6Lz2S" target="new">DB Collections</a>

<h4>Libraries/Frameworks/Resources Used</h4>
<a href="https://angularjs.org/">AngularJS</a>
<br>
<a href="http://cdnjs.com/libraries/angular.js/">Angular Routes</a>
<br>
<a href="http://www.firebase.com">Firebase</a>
<br>
<a href="https://fortawesome.github.io/Font-Awesome/">FontAwesome</a>
<br>
<a href="https://jquery.com/">jQuery</a>
<br>
<a href="http://materializecss.com/" target="new">MaterializeCSS</a>
<br>
<a href="https://www.mongodb.org/" target="new">MongoDB</a>
<br>
<a href="http://mongoosejs.com/" target="new">Mongoose</a>
<br>
<a href="https://github.com/snapjay/ngCart" target="new">ngCart</a>
<br>
<a href="https://nodejs.org/en/" target="new">NodeJS</a>


