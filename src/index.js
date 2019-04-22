import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';


// components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';


const App= () => {
    return (
       <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Home</Link><br/>
                    <Link to="/posts">Posts</Link><br/>
                    <Link to={{
                        pathname:'/profile',
                        // hash:'#Boris',
                        // search: '?profile=true'
                    }}>Profile</Link><br/>
                    <hr/>
                </header>
                    <Route path="/" exact component={Home}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/profile" component={Profile}/>
            </div>
       </BrowserRouter>
    )
} 

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)