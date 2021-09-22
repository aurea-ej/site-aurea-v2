import { React, useEffect, useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/database";
import firebaseConfig from '../../FirebaseConfig.js'

import aviaoAureaVertical from '../../imgs/aviaoAurea.png'

import './style.scss';

export default function InfoCourses() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    const [dataBlog, setDataBlog] = useState([{}])
    const [dataBlogExists, setDataBlogExists] = useState(false)

    useEffect(() => {

        if(!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

            var firebaseRef = firebase.database().ref('posts/');
            firebaseRef.on('value', (snapshot) => {

            if (snapshot.exists()) {

                setDataBlogExists(true)
                var data = snapshot.val()
                var temp = Object.keys(data).map((key) => data[key])
                setDataBlog(temp.reverse())

            }

            else {

                setDataBlogExists(false)

            }
        })

    }, []);

    if (dataBlogExists) {

        return (

            <section id='Blog' >

                <Header />

                <main id='mainBlog'>

                    <h1>Bem-vindos ao Blog Aureano 💛 </h1> <h3>v0.1 Beta</h3>

                    {dataBlog.map((item)=> (

                        <div className='postDiv' >

                            <h3>{item.title}</h3>
                            <h5>{item.desc}</h5>
                            <img src={item.imageUrl} />

                            <div className="paragraphPost">
                                {
                                    Array(item.paragraphs).map((item)=>(

                                        <div style={{width: "100%"}}>
                                            <p>{item}</p>
                                        </div>

                                    ))
                                }
                            </div>

                            {/* <p>{item.content}</p> */}
                            <div className='postAuthor' >
                                <span>Escrito por: {item.author}</span>
                            </div>

                        </div>

                    ))}

                </main>
                
                <Footer />

            </section>
        )
        
    }else{
        
        return (

            <div id='Blog' style={{backgroundColor: "#000"}}>

                <Header />

                <main id='mainBlog'>

                    <div className= 'testeee' >

                        <div className='caminhoAviao' >

                            <img src={aviaoAureaVertical} />

                        </div>

                        <div className='warning' >

                            <p>Carregando </p>

                        </div>

                    </div>

                    <div className= 'sendToLinkedin' >

                        <p>Enquanto isso, acesse nosso <a href = 'https://www.linkedin.com/company/aureaej/posts/?feedView=all' target='_blank' >Linkedin</a> e veja os últimos posts</p>

                    </div>
                    
                </main>
                
                <Footer />

            </div>

        )
    }

}