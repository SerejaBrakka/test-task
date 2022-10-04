import React from "react";
import classes from "./Card.module.css";
import Like from "./Like";

let data = [
  {
    id: 1,
    img: "https://get.wallhere.com/photo/landscape-lake-water-nature-reflection-sky-clouds-national-park-valley-wilderness-Alps-cloud-tree-autumn-mountain-reservoir-1920x1080-px-loch-mountainous-landforms-landform-mountain-range-518341.jpg",
    date: "21 сентября 2022",
    header: "Lorem ipsum dolor sit amet consectetur",

    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium tempora natus, excepturi consequatur ratione iure velit sed cupiditate repudiandae itaque dolorum est deleniti quaerat facere in delectus rerum deserunt! Aperiam doloribus quod adipisci fuga. Nobis molestias ducimus non ut natus optio maiores excepturi voluptatum, inventore sapiente. Laborum velit deleniti numquam, natus at praesentium doloribus. Quam fugit maxime repudiandae quaerat perspiciatis voluptatibus natus maiores accusantium odit ut quasi aut laudantium, iure beatae libero reprehenderit dignissimos totam molestias quidem quod est? Cupiditate nobis minus laborum nam architecto eaque, aliquam maiores recusandae, pariatur eum suscipit officiis dolorum, eos delectus deleniti dolores cum",
  },
  {
    id: 2,
    img: "https://get.wallhere.com/photo/1920x1200-px-building-city-cityscape-Gold-Coast-1270905.jpg",
    date: "15 сентября 2022",
    header: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",

    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium tempora natus, excepturi consequatur ratione iure velit sed cupiditate repudiandae itaque dolorum est deleniti quaerat facere in delectus rerum deserunt! Aperiam doloribus quod adipisci fuga. Nobis molestias ducimus non ut natus optio maiores excepturi voluptatum, inventore sapiente. Laborum velit deleniti numquam, natus at praesentium doloribus. Quam fugit maxime repudiandae quaerat perspiciatis voluptatibus natus maiores accusantium odit ut quasi aut laudantium, iure beatae libero reprehenderit dignissimos totam molestias quidem quod est? Cupiditate nobis minus laborum nam architecto eaque, aliquam maiores recusandae, pariatur eum suscipit officiis dolorum, eos delectus deleniti dolores cum",
  },
  {
    id: 3,
    img: "https://ae04.alicdn.com/kf/H9d6f808ce2c640c3808164a0e8857f93g.jpg",
    date: "10 сентября 2022",
    header: "Lorem ipsum dolor sit amet, consectetur adipisicing",

    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium tempora natus, excepturi consequatur ratione iure velit sed cupiditate repudiandae itaque dolorum est deleniti quaerat facere in delectus rerum deserunt! Aperiam doloribus quod adipisci fuga. Nobis molestias ducimus non ut natus optio maiores excepturi voluptatum, inventore sapiente. Laborum velit deleniti numquam, natus at praesentium doloribus. Quam fugit maxime repudiandae quaerat perspiciatis voluptatibus natus maiores accusantium odit ut quasi aut laudantium, iure beatae libero reprehenderit dignissimos totam molestias quidem quod est? Cupiditate nobis minus laborum nam architecto eaque, aliquam maiores recusandae, pariatur eum suscipit officiis dolorum, eos delectus deleniti dolores cum",
  },
  {
    id: 4,
    img: "https://get.wallhere.com/photo/1920x1200-px-building-city-cityscape-Gold-Coast-1270905.jpg",
    date: "15 сентября 2022",
    header: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",

    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium tempora natus, excepturi consequatur ratione iure velit sed cupiditate repudiandae itaque dolorum est deleniti quaerat facere in delectus rerum deserunt! Aperiam doloribus quod adipisci fuga. Nobis molestias ducimus non ut natus optio maiores excepturi voluptatum, inventore sapiente. Laborum velit deleniti numquam, natus at praesentium doloribus. Quam fugit maxime repudiandae quaerat perspiciatis voluptatibus natus maiores accusantium odit ut quasi aut laudantium, iure beatae libero reprehenderit dignissimos totam molestias quidem quod est? Cupiditate nobis minus laborum nam architecto eaque, aliquam maiores recusandae, pariatur eum suscipit officiis dolorum, eos delectus deleniti dolores cum",
  },
];

const Card = () => {
  let cards = data.map((e) => (
    <div key={e.id} className={classes.card}>
      <img src={e.img} className={classes.img}></img>
      <p className={classes.date}>{e.date}</p>
      <h2 className={classes.header}>{e.header}</h2>
      <div className={classes.down}>
        <Like name={"Like"} description={e.description} />
      </div>
    </div>
  ));
  return <div className={classes.cards}>{cards}</div>;
};

export default Card;
