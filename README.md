# AmazonClone

Building a Full Stack Clone of Amazon (accounts, checkout, payment processing, order history, etc)

1. To Get Started use
   npx create-react-app nameofapp

2. create a data base with firebase
   click </>

3. use sudo npm install -g firebase-tools (sudo helps with installing globally

4. click settings icon > project settings > click config (copy config snippet)

5. Create Firebase.js in src folder

6. Start creating components, add in App.js

7. install material UI /material-ui.com npm install @material-ui/core
   then install icons with npm install @material-ui/icons or if for fonts use correct npm install command and import each icon as you would and use like a component

8. using props to render different products to <product/>, pass in props into the product function product.js

9. install React Router, this is to give your pages different routes like /checkout
   npm install react-router-dom
   import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; in app js

10. Use router like this <Router>

    ````<div className="app">
     <Header />
     <Switch>
        <Route path="/checkout">
          <h1>I am checkout</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>```
    MAKE SURE TO PUT THE DEFAULT OR EMPTY '/' AT THE BOTTOM OR IT WILL NOT RENDER THE OTHERS.

    ````

11. Create Checkout page and subtotal install react currency format with npm install react-currency-format

12. Now we have to use React Context API/REDUX for when we add to cart, everytime I add to cart it will push the product into the data layer(react context api/redux). After it is stored inside that data layer we can put it into any component we need like the basket/checkout

13. Add stripe payment processing to project with api key in app.js
