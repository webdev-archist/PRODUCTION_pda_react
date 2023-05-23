import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {carousel} from "../../assets/carousel.js"
// console.log(carousel)



//carousel simple: https://react-slick.neostack.com/
//carousel npm: https://www.npmjs.com/package/react-responsive-carousel
// 40 carousels comp: https://reactjsexample.com/tag/carousel/
// 14 carousels comp: https://alvarotrigo.com/blog/react-carousels/
// carousel comp: https://coreui.io/react/docs/components/carousel/
// carousel: https://www.gaji.jp/blog/2022/10/28/11858/
// spinner,bugger,carousel,countup,markdown: https://qiita.com/baby-degu/items/e183b20dd20b20920e00




export default class Carousel extends Component {
    
    constructor(){
        super()
        this.state={
            h3: "TROUVER UN TITRE"
        }
    }
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            adaptiveHeight: true
        }
        , random_indexes = []
        , myLoader = ({ src, width, quality }) => {
            return `${src}?w=${width}&q=${quality || 75}`
        }

        for (let index = 0; index < 10; index++) 
            // random_indexes[index] = Math.ceil(Math.random()*carousel.length-1)
            random_indexes[index] = index
        console.log("TROUVER UN MOYEN D'AFFICHER DES IMAGES ALÉATOIRES DANS LE CAROUSEL")


        
        return <>
            <h3 className="carousel">{this.state.h3}</h3>
            <section className="carousel">
                <Slider {...settings}>
                    <figure>
                        <h3>Un teste</h3>
                        <Link href="">lien ici</Link>
                    </figure>
                    {/* {this.setState({h2:carousel[0][1]})} */}
                {random_indexes.map((item,i) => <figure key={"carousel"+i}>
                    {/* {console.log(item)} */}
                    <Image
                        loader={myLoader}
                        src={"/img/"+carousel[item][0]}
                        alt={" "+carousel[item][1]}
                        width={200}                                    height={200}
                    />
                    <figcaption>{carousel[item][1]}</figcaption>
                </figure>)}
                </Slider>
            </section>
        </>
    }
}




