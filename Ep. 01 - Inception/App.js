const parent = React.createElement('div', {id: "parent"}, 
    React.createElement('div', {id: "child"},
        React.createElement('h1', {id: "heading"}, "Hello World from React!!!!!!!")

));
              
ReactDOM.render(parent, document.getElementById('root'));
        
        
            