import React, { Suspense , lazy } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import("./Math").then(math=>{
    console.log(math.add(1,2))
})
const Greeting = lazy(()=>import('./Greeting'));
const Mock = lazy(()=>import('./Mock'));

export default class Code extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/greeting" element={<Greeting />} />
                            <Route path="/mock" element={<Mock />} />
                        </Routes>
                    </Suspense>
                </Router>
            </div>
        )
    }
}