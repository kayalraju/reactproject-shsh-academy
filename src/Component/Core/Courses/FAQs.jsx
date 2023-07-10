import React from 'react'

const FAQs = () => {
  return (
    <>
      <section id="faq" class="faq section-bg">
     <div class="container" data-aos="fade-up">

       <div class="section-title">
         <h2>Frequently Asked Questions</h2>
       </div>

       <div class="faq-list">
         <ul>
           <li data-aos="fade-up">
             <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">How do we run React app which have no Node Modules? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
             <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
               <p>
               To run a React app that does not have the node_modules folder, you will need to reinstall the dependencies specified in the package.json file. <strong>npm install</strong> This command will read the package.json file and install all the dependencies listed under the "dependencies" section. It will create a new node_modules folder in your project directory and populate it with the necessary packages.
               </p>
             </div>
           </li>

           <li data-aos="fade-up" data-aos-delay="100">
             <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-2" class="collapsed">How NPM know which package have to be downloaded? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
             <div id="faq-list-2" class="collapse" data-parent=".faq-list">
               <p>
               When you run the npm install command, npm looks for a package.json file in the current directory. The package.json file contains a list of dependencies and their versions required for your application to run.
Inside the package.json file, there are two sections relevant to dependency management: "dependencies" and "devDependencies". The "dependencies" section lists the packages required for the application to run in a production environment, while the "devDependencies" section lists packages only required for development purposes.               </p>
             </div>
           </li>

           <li data-aos="fade-up" data-aos-delay="200">
             <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-3" class="collapsed">What is Array and Object? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
             <div id="faq-list-3" class="collapse" data-parent=".faq-list">
               <p>
               An array is an ordered collection of elements of the same type. It is a linear data structure that allows you to store multiple values in a single variable. Each element in an array is identified by an index, starting from zero. Arrays are commonly used when you have a fixed number of elements and need to access them by their index. Arrays in JavaScript are denoted using square brackets []. An object is an unordered collection of key-value pairs. It is a more flexible data structure that allows you to store different types of values and access them using their associated keys. Objects are commonly used when you need to represent complex entities with properties and behaviors. In JavaScript, objects are denoted using curly braces.               </p>
             </div>
           </li>

           <li data-aos="fade-up" data-aos-delay="300">
             <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-4" class="collapsed">What is controlled and uncontrolled component? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
             <div id="faq-list-4" class="collapse" data-parent=".faq-list">
               <p>
               In a controlled component, the form input's value is controlled by React state. The state value is explicitly set and updated by React, and changes in the input are handled through event handlers. When the input value changes, the event handler updates the state, which in turn updates the value displayed in the input field. This allows React to have full control over the input's value and enables synchronization between the component's state and the input value.<br />In an uncontrolled component, the form input's value is managed by the HTML DOM itself, rather than being controlled by React state. The value is accessed using a ref or other means after the form is submitted or when needed. Uncontrolled components are useful when you don't need to track the input's value in real-time or perform validation while the user is typing.               </p>
             </div>
           </li>

           <li data-aos="fade-up" data-aos-delay="400">
             <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-5" class="collapsed">Props and State? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
             <div id="faq-list-5" class="collapse" data-parent=".faq-list">
               <p>
               Props are read-only data that are passed from a parent component to a child component. They allow a parent component to provide data and configuration to its child components. Props are used for communication between components and are typically used to render dynamic content and customize the behavior of child components.<br />State represents the internal data and state of a component. Unlike props, state is managed and controlled by the component itself and can be modified over time. State is used to store and manage data that may change during the component's lifecycle. When the state is updated, React will automatically re-render the component to reflect the updated state.               </p>
             </div>
           </li>

         </ul>
       </div>

     </div>
   </section>
    </>
  )
}

export default FAQs
