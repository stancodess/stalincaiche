import React, { useEffect, useState } from 'react';
//import fetchRepos from '../../libs/fetchRepos';
//import repos from '../data/repos';
import Repo from './repo';

export default () => { 

    const [ repos, setRepos ]           = useState([]);
    const [ reposCount, setReposCount ] = useState([]);

    async function fetchRepos() {
        const response = await fetch("https://api.github.com/users/stancodess/repos");
        let myRepos = await response.json();

        setReposCount(myRepos.length)


        sessionStorage.setItem( "repos", JSON.stringify(myRepos) );

        setRepos(myRepos);
    }
    useEffect( () => {

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);

            setReposCount(myRepos.length);

            myRepos = myRepos.slice(1,13);
            return setRepos(myRepos);
        }
        fetchRepos();

    },[])

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
                <p className="">Coloboración y contribución de código</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map(( repo )=>{
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/stancodess" className="btn" target="_blank" rel="noopener noreferrer"> Ver más en GitHub ({ reposCount })</a>
            </div>
        </div>
    )
};