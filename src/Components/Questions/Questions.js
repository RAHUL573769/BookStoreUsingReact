import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1>1.How does react works?</h1>
            <p>React is mainly a JavaScript library .It is mainly used for making user interfaces.It is an open source, component based front end library mainly responsible for view layer of the application.React works on basis of componenets.React is made of multiple components ,each responsible for rendering small,re
usable piece of HTML components.Components can be nested within other components ,to allow complex applications to be built out of simple building blocks.A component maintains an internal state.To create a react project we use the command npx-create-react-app myapp.React can also be used in the browser,because of its design it can also be used in the server with Node.js.React uses declarative paradigm that makes it easier to debug and run our code.
</p>
            <h1>2.Difference between props and state?</h1>
            <p>Props are immutable,States is mutable.Props are used for communicating between components in a react file,States are used for rendering dynamic changes with the componenet.Props make componenets reusable,States cannot make componenets reusable.Props can be accessed by child componenet,States cannot  be acceseed by child component.Props canot change inside a component,State can change inside a Component. 
</p>
        </div>
    );
};

export default Questions;