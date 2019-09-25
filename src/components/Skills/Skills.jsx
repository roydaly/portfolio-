import React from 'react';
import './Skills.css';
import skillsImg from './skills2.jpg';
import js from '../../../src/icons/js-square-brands.svg';
import ts from '../../../src/icons/typescript-icon.svg';
import react from '../../../src/icons/react-brands.svg';
import node from '../../../src/icons/node-js-brands.svg';
import express from '../../../src/icons/expressjs.svg';
import html from '../../../src/icons/html5-brands.svg';
import css from '../../../src/icons/css3-alt-brands.svg';
import sql from '../../../src/icons/postgresql-icon.svg';
import sequelize from '../../../src/icons/sequelize-icon.svg';
import mongodb from '../../../src/icons/mongodb-icon.svg';
import mongoose from '../../../src/icons/mongoose.png';
import python from '../../../src/icons/python-brands.svg';
import django from '../../../src/icons/django-icon.svg';

function Skills()  {
     
        return (
            <div className="container">
                <img src={skillsImg} alt="Skills" style={{backgroundSize: "cover", width:"100%", height:"auto"}}/>;
            <div className="skill-icons">
             <img className="skill-icons-img" src={js} alt="JavaScript" />Javascript  
             <img className="skill-icons-img" src={ts} alt="TypeScript" />Typescript  
             <img className="skill-icons-img" src={react} alt="React" />React.js 
             <img className="skill-icons-img" src={node} alt="Node" />Node.js 
             <img className="skill-icons-img" src={express} alt="Express" />Express.js 
             <img className="skill-icons-img" src={html} alt="Html" />HTML5
             <br></br>
             <img className="skill-icons-img" src={css} alt="Css" />CSS3 
             <img className="skill-icons-img" src={sql} alt="Sql" />PostgresSQL 
             <img className="skill-icons-img" src={sequelize} alt="Sequelize" />Sequelize.js 
             <img className="skill-icons-img" src={mongodb} alt="Mongodb" />MongoDB 
             <img className="skill-icons-img" src={mongoose} alt="Mongoose" />Mongoose.js 
             <img className="skill-icons-img" src={python} alt="Python" />Python 
             <img className="skill-icons-img" src={django} alt="Django" />Django
             </div>
            </div>
        )
    
}

export default Skills;