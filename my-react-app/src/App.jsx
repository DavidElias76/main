// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cat from './cat'
import Navbar from './navbar'
import {Name, NameWithout, NameVariable, NameObject, ObjectRestParameters, Parent, ChildrenComponent, CarInfo} from './prop'
import DeveloperCard from './developerCard'
import MyList from './MyList'
import {Expressions, Goal, Car, GoalNew} from './expressions'
import Fruit from './statements'
import App from './App-Card'
import {CarComponent, Vehicle, VehicleDetails, Header, Mounting, GetDerivedState, ShouldChangeComponent, GetSpanShot} from './class'
import {Football, FootballPitch, HandleClick} from './events'
import {MyForm, MyFormValue, MyFormSubmit, MyTextAreaForm, MySelectForm, MultipleForms,MyFormSelectObject, CheckBoxesInputs} from './forms'
import {Modal, MyApp, PortalButton} from "./portals"
// portalAppButton
import { SuspenseApp, SuspenseComponent } from './suspense'
import { CssModules } from './css Modules/cssModule'

// handling multiple inputs in a form
import { FormInputs, FormInputs2, CheckBoxesInputs1, CheckBoxesInputs2, RadioButtonsInputs }  from'./Forms2'

import {ModalComponent, AppComponent, AppButton} from './portals -2'

import {StyledComponents_1, StyledComponents_2, StyledComponents_3} from './styledComponents'

// Raect router
import {RouterApp, RouterApp2, RouterApp3, RouterApp4} from './React Router'

import {SearchBar} from './React Transitions'

// react high order function that take a component as an argument and return a new component with features
import {GreetingWithoutBorder, GreetingWithBorder} from "./ReactHOC";

// import {MyHeader, MyHeaderColor} from "./css Modules/React Saas"

// react Hooks
import {ReactHooks, MyCar} from './ReactHooks'

import {Timer, Timer2, Counter, CounterClear} from './ReactUseEffect'

import {Component1, UserComponent} from "./ReactUseContext"

import { UseRefComponent, UserRefComponent2, UserComponent3, UncontrolledForm , Example} from './ReactuseRef'

// the usereducer HOOK 
import {ReducerComponent, ReducerComponent2} from './ReactUserReducer'

// THE USECALLBACK hOOK

// import {DevSimplified} from './ReactUseCallback'

// ListComponent
// WithoutCallbackExample

import {MemoComponent, CountComponent} from './ReactUseMemo'

// import {HomeComponent, HomeComponent2} from './ReactCustomHooks'

import {ProfileComponent} from './ReactUseState'

// React FreeCodeCamp Project
import {FruitComponent} from './FreeCodeCamps-Projects/FruitApp'
import {OTPGenerator} from './FreeCodeCamps-Projects/OTPGenerator'

import {ActionComponent} from './ReactUseActionState'

// using the useActionState in react
import {FormComponent} from './ReactFormActionState'

// import {LayoutEffectComponent} from './ReactUseLayoutEffect'

// simple form applocation fro freecodecamp
import SimpleApplicationForm from './FreeCodeCamps-Projects/SimpleApplicationForm'


// the greetings component containing other components such as cat and navBar
// this is where the main structure of an app is located.
function Greetings(){

  const name  = "John Doe"

  // developer card object to be used in the developerCard.jsx
  const developerObj = {
        name: "Alice",
        age: 30,
        country: "USA"
      }

      // React props
      
      let x = [1964, 1965, 1966];
      let y = {name: "Ford", model: "Mustang"};
      
      // object props
      
      const carInfo = {
        name: "Ford",
        model: "Mustang",
        color: "red",
        year: 1969
      };

    return (
      <>
      <div className='div1'>
        <h1 className='title'>Hello, {name}!</h1>
      </div>

      <div className='div1'>
        <h2 className='intro'>Welcome to the app!</h2>
        <p className='paragraph'>This is a simple React application.</p>
      </div>

      <Cat /> {/* returning the Cat component */}

      {/* the react fragments are used tp waro element in the  */}
      <Navbar /> {/* returning the Navbar component */}

      {/* props can be used with object destructuring and without object destructuring */}

      <Name name = "David" /> {/* added a prop name that will be displayed in the Name component */}

      {/* we have the ability to reuse the child component several times and pass in different names each time: */}
      <Name name="Naomi" />
      <Name name="Tom" />
      <Name name="Jessica" />
      <Name name="Oliver" />

      {/* create an developerCard component and use spred syntax*/}
      <div className='card'>
        <DeveloperCard {...developerObj} /> 
      </div>

      {/* react map function to display a list of fruits */}
      <MyList />

      {/* React Expressions */}

      {/* the button changes color based on the isActive state whether true or false */}
      <Expressions isActive={true} />
      <Expressions isActive={false} />

      {/* statements */}

      {/* choose bet the true and false values */}
      <Fruit isLogedIn={false} />
      <Fruit isLogedIn={true} />

      {/* building a profile card on freecodecamp  - using the profileCard.jsx and App-Card.jsx components */}
      {/* also called component inside component */}

      <App />

      {/* creating a class component in class.jsx and rendering it */}

      <CarComponent />
      <Vehicle model="Tesla" />
      <VehicleDetails />
      <Header favcol="green" />
      <Mounting />
      <GetDerivedState favcol="purple" />
      <ShouldChangeComponent />
      <GetSpanShot />

      <h2 className='text'>Using the prop continuation</h2>

      {/* prop component passing difference arguments */}

      <NameWithout name = "David" brand="Ford" model="Mustang" color="red" />

      {/* passing an object and array as arguments  */}
      <NameVariable years = {x} car = {y} />

      {/* react object destructuring */}
      <NameObject brand = "Ford" model = "Mustang" color = "red"/>

      <ObjectRestParameters color="red" brand="Ford" model="Mustang" year={2020} />

      {/* react prop children - wrapper components */}
      <Parent />
      <ChildrenComponent />

      {/* The Object props */}
      <CarInfo carInfo={carInfo} />
      
      {/* React Events - football component */}
      <Football />
      <FootballPitch />
      <HandleClick />

      {/* React conditionals */}
      {/* choose bet true and false */}

      {/* <Goal isGoal={true} /> */}
      <Goal isGoal={false} />
      <Car brand="BMW" />
      <GoalNew isGoal={true} />

      {/* React Forms */}
      <MyForm />
      <MyFormValue />
      <MyFormSubmit />
      <MyTextAreaForm />
      <MySelectForm />
      <MultipleForms />
      <MyFormSelectObject />
      <CheckBoxesInputs />

      {/* React Portal - React Portals provide a way to render HTML outside the parent component's DOM hierarchy. */}

      {/* <MyChild />  */}

      <Modal />
      <MyApp />
      <PortalButton />
      {/* <PortalAppButton /> */}

      {/* React Suspense */}
      <SuspenseApp />
      <SuspenseComponent />

      {/* React Css Modules */}

      <CssModules />

      {/* React Forms - Multiple Inputs */}
      <FormInputs />
      <FormInputs2 />
      <CheckBoxesInputs1 /> 
      <CheckBoxesInputs2 />
      <RadioButtonsInputs />

      {/* portal recap */}
      <ModalComponent/>
      <AppComponent />
      <AppButton />

      {/* styled components - Allows you to write css directly to javsacript code  */}
      <StyledComponents_1 />
      <StyledComponents_2 />
      {/* <StyledComponents_3 /> */}
      {/* <StyledComponents_4 /> */}

      {/* React Router */}

      <RouterApp />
      <RouterApp2 />
      <RouterApp3 />
      <RouterApp4 />

      {/* react transitions */}

      <SearchBar />

      {/* react High order functions */}
      <GreetingWithoutBorder name= "John" /> 
      <GreetingWithBorder name = "Jane" />;

      {/* react saas - install the necessary package to render this component */}
      {/* <MyHeader /> 
      <MyHeaderColor /> */}

      {/* React Hooks */}
      <ReactHooks />
      <MyCar />

      {/* React useEffect - allows you to perform side effects in your code */}
      <Timer />
      <Timer2 />
      <Counter />
      <CounterClear />

      {/* React useContext allow you to pass variable value / state to other child components and prevents the prop drilling  */}
      <Component1 /> 
      <UserComponent />


      {/* react UseRef - allows you to persist/ retain values btw renders */}

      <UseRefComponent />
      <UserRefComponent2 />
      <UserComponent3 />
      <UncontrolledForm />
      <Example />

      {/* React useReduer  */}

      <ReducerComponent />
      <ReducerComponent2 />

      {/* React useCallback Hook */}

      {/* <WithoutCallbackExample /> */}
      {/* <DevSimplified /> */}
      {/* <ListComponent /> */}

      {/* React useMemo */}
      <MemoComponent />
      <CountComponent />

      {/* React Custom Hooks */}
      
      {/* <HomeComponent />  */}
      {/* <HomeComponent2 /> */}

      {/* freecodecamp */}
      <ProfileComponent />
      <FruitComponent />
      <OTPGenerator />

      {/* React Action State Hook */}
      <ActionComponent />

      <FormComponent />

      {/* React useLayout */}

      {/* <LayoutEffectComponent /> */}

      <SimpleApplicationForm />

      </>

    )
}

export default Greetings;
