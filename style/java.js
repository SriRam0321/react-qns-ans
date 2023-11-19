1. What is React?

	* React is a free and open-source front-end JavaScript library for building user interfaces based on components. 

	* It is maintained by facebook and a community of individual developers and companies.

	* React was Created by Jordan Walke. He was Worked Facebook in Software Engineer. 

	* He Created React app in 2011 , He Officially Released in 2013.

2. What are the advantages of using React?

    * Easy to Learn and USe.
 
    * Creating Dynamic Web Applications Becomes Easier.
  
    * Reusable Components.
  
    * Performance Enhancement.
 
    * The Support of Handy Tools.
 
    * Known to be SEO Friendly.
 
    * The Benefit of Having JavaScript Library.
 
    * Scope for Testing the Codes.	

 3. What is JSX?

    * JSX stands for JavaScript XML.

    * It is simply a syntax extension of JavaScript.

    * It allows us to directly write HTML in React (within JavaScript code).

    * It is easy to create a template using JSX in React, but it is not a simple template language instead it comes with the full power of JavaScript.

4. What are keys in React?

	* In React, keys are like a Special String attribute that is included in the Creation of List of Elements. 

	* Keys play a great significance in React, and they help us to know what are the items in the given list of elements that have changed or are updated or removed.

5. What is React-Components?

	* Components are independent and reusable bits of code.

	*  They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
   
  There are Two types of components:

    * Function Component

    * Class Component
 
6. What is classComponent and functionalComponent differnce?

  Functional Component :
	
	* A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
	
	* There is no render method used in functional components.
	
	* Functional components run from top to bottom and once the function is returned it can’t be kept alive.
	
	* Also known as Stateless components as they simply accept data and display them in some form, they are mainly responsible for rendering UI.
	
	* React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
	
	* Constructors are not used.

  Class Component :
	
	* A class component requires you to extend from React. Component and create a render function that returns a React element.
	
	* It must have the render() method returning JSX (which is syntactically similar to HTML)
	
	* The class component is instantiated and different life cycle method is kept alive and is run and invoked depending on the phase of the class 	   component.
	
	* Also known as Stateful components because they implement logic and state.
	
	* React lifecycle methods can be used inside class components (for example, componentDidMount).

	* Constructor is used as it needs to store state. 

8. What is Constructor?

	* A constructor is a special method of a class or structure in object-oriented programming that initializes a newly created object of that type.

	* Whenever an object is created, the constructor is called automatically.

9. What is super keyword?

	* A super keyword in Java is a keyword that allows access to the superclass or parent class of an object.

	* It can also call superclass methods and access superclass variables.

10. what is render function?

	* React renders HTML to the web page by using a function called render().

	* The purpose of the function is to display the specified HTML code inside the specified HTML element. 

	* In the render() method, we can read props and state and return our JSX code to the root component of our app.

11. How to change of state value?

	* To change a value in the state object, use the this. setState() method.

	* When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

12. What is use of Life Cyle Methods?

	* In React, components have a lifecycle that consists of different phases.

	* Each phase has a set of lifecycle methods that are called at specific points in the component lifecycle.
	
	* These methods allow you to control the component behavior and perform specific actions at different stages of its lifecycle.

13. List of Life Cycle Methods?

	There are three categories of lifecycle methods: 

	* Mounting Phase
	
	* Updating Phase 
	
	* Un-Mounting Phase

14. What is use of useEffect?

	* The useEffect Hook allows you to perform side effects in your components.

	* Some examples of side effects are: fetching data, directly updating the DOM, and timers.

	* useEffect accepts two arguments. The second argument is optional.

15. What are props in React?

	* In ReactJS, the props are a type of object where the value of attributes of a tag is stored.

	* The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. 

	* Basically, these props components are read-only components.

16. What is prop drilling in React?

	* In the React ecosystem, it common to divide an application into multiple components to make it more modular and reusable.

	* As the component hierarchy grows, the challenge of passing data and state between components that are not directly nested arises, known as “prop drilling”.

17. What is React Hooks?

	* Hooks are a new addition in React 16.8.

	* They let you use state and other React features without writing a class.

18. What is React Hooks list?
	
	* useState
	
	* useEffect
	
	* useSelector
	
	* useDispatch
	
	* useReducer
	
	* useContext
	
	* useParams
	
	* useSearchparams

19. What are the different ways to style a React component?

	 Ther are Three Types oof styles in React Component:

	 *Inline style

	 *Internal Style
	 
	 *External Style

	Inline style:
	
		<p style={{FontSize:"1rem"}}>Hello World</p>

	Internal style:
	
		let styles={
		  	  FontSize:"1rem"
			}
		<p style={styles}>Hello World</p>

	External style:
	
	import './style.css'
		
		p{
          
           font-size:"1 rem"
		  
		  }

20. How do you handle events in React?

	We can handle events by passing a function as a prop to an element like <button> . Event handlers must be passed, not called! onClick={handleClick} , not onClick={handleClick()} . We can define an event handler function separately or inline.


21. How can you update the State of a component?

		Class Component :
 
	class Home extends React.Component{
		constructor(){
		  super()
		this.state={
			     name:"priyanka"	
			   }
		}
	const handle=()=>{
			this.setstate({name:"Abi"})
		}
	  render(){
		return(
			<div>
			   <h1>{this.state.name}</h1>
			   <button onClick={handle}>Click</button>
			</div>
		       )
   		  }
		}
	export default Home
        
                Functional Component

	import {useState} from 'react'
	const Home =()=>{
		const [name.setName]=useState("Priyanka")
		
	  return(
                  <div>
                     <h1>{name}</h1>
		     <button onClick={()=>setName("Abi")}>
		  </div>
		)
	    }
	export default Home

22. What is React Router?

	* React Router is a JavaScript framework that lets us handle client and server-side routing in React applications.

	* It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page.

	* It also allows us to use browser history features while preserving the right application view.

23. How to use of BrowserRouter?
	
	import Home from './home.js'
	import {BrowserRouting,Routes,Route} from 'react-router-dom'
	
	const Routing_Router =()=>{
		return(<div>
	
	<BrowserRouter>
	<Routes>
	
	<Route path="/" elements = {<home/>}  />
	
	</Routes>
	</BrowserRouter> 
     
     </div>)
	
	}

	export default Routing_Router

24. How to use of Routes & Links?

	* <Link> is used to set the URL and keep track of browsing history.

	* Anytime we link to an internal path, we will use <Link> instead of <a href=""> .

	* The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

25. What is use of useParams & useSearchParams?

	* useParams, returns an object containing the current route's filled in dynamic parameters.

	* useSearchParams, returns a read-only version of the URLSearchParams interface, which includes utility methods for reading the URL's query string.

26. What is React context? How to createContext?

	* React Context is a method to pass props from parent to child components, by storing the props in a store and using these props from the store by child components without actually passing them manually at each level of the component tree.

	import {createContext} from 'react'
	
	const Globalstate = createContext()

	export default Globalstate
     	
27. What is use of Provider & Dispatch method?
	
	Provider:
	
	* The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.

	* Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app's component tree inside of it.

	Dispatch:

	* Dispatch Methods are the load balancing algorithms that determine how client requests are distributed between servers in a farm.

	* AppDirector receives requests for service from clients and decides to which server to direct each request.

28. What is Read in Context values?

	* Contexts of reading are all the elements that influence how we read in different situations.

	* The context includes:

			 * the setting
			 
			 * the text 
			 
			 * the purpose for reading.

29. How we can pass props from Child to Parent?

	Function Component:
	
 parent.js

	import React from "react";
	import Child from "./Child";
	
	const Parent = ()=>{
		
		let name = "Stark"
		
		let handler = () =>{
    			
    			
		        
		          	}
	return(<div>
            
            <Child Handler = {handler}/>
        	
        </div>)
         

         }

export default Parent

  child.js
  
    import React from "react"

	const Child = (props)=>{

    return(<div>
            
            <p>{props.name}</p>
            
            <button onClick={()=>props.Handler> Click the Button </button>
        
        </div>)
         

         }

export default Child

30. How we can pass props from Parent to Child?

	Function Component:

  parent.js
	
	import React from "react"
	import Child from './Child.js'
	

	Const Parent = () =>{
		
		let name = "Tony"
	
	return(<div>
		
		    <Child names = {name} />
		
		 </div>)
        
           }

	export default Parent

  child.js
	
	const Child = (props)=>{
		
		return(<div>
			
			<h1>{props.names}</h1>

			</div>)	
	
	      }

	export default Child


  ------------------------------------------ Redux Flow-----------------------------------------------------------

Slice.js  

        import {createSlice} from "@reduxjx/toolkit" 

       export const CartSlice = ()=>({

        	name : "Tony"

    initialstate : {

           names : "Stark" 

    }

        reducers : {
        
         Handle : (state,action)=>{
         	state.name = action.payload
         }
 

        }
 
        })

    export default CartSlice.reducer
    export const {Handle} = CartSlice.actions

Store.js

       
       import {configureStore} from "@reduxjx/toolkit"
       import {CartSlice} from "./Slice.js"

       const store = ()=>{

          reducer : {

          	Datas : CartSlice
           
           }

                 }

   export default store

App.js   

       
        import React from "react"
        import store from "./Store.js"
        import {Provider} from "router-dom"
        import Routing_Router from "./Routing.js"

         const app = ()=>{

            return(<div>

             <Provider store = {store} >
             
             <Rounting_Router />

             </Provider>
              
            	</div>)

         }

         export default app

Routing.js 

       
        import {BrowserRouter,Routes,Route} from "./react-router-dom"        
        import home from "./Home.js"


        const Routing_Router = ()=>{

           return(<div>

            <BrowserRouter>
            <Routes>
            
            <Route path = "/" elements = { <home />}  />

            </Routes>
            </BrowserRouter>


           	</div>)


        }

        export default Routing_Router

Home.js        

         import React from "react"
         import {useSelector} from "react"

         const home = ()=>{

         
         let name = useSelector(({Datas}) =>datas)	 
         
         	 return(<div>

              <h1>{name}</h1>
            
         	 </div>)
         }

         export default home