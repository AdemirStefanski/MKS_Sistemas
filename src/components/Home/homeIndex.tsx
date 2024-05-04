import { useEffect, useState } from "react";
import { Container } from "./homeStyles";
import ItemComponent from "../itemComponent/itemConponentsIndex";
import axios from "axios";

function Home() {
  interface Items {
    id: number;
    photo: string;
    name: string;
    brand: string;
    description: string;
    price: string;
  }

  const [items, setItems] = useState<Items[]>([]);

  const url =
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

  //hook que irá carregar o resultado da API toda vez que a página for carregada;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setItems(res.data.products))
      .catch((err) => console.log(err));
  }, []);


  //função para padronizar a variável "price" ao padrão brasileiro(com ponto separando os milhares e caso se trabalhe com casas decimais usar vírgula);
  function formatNumber(n:any) {
    let t = [];
    let p:any;
    let ts:any;
    let dp:any;
    
    //caso precise usar casas decimais trocar o valor de "p" para "2";
    if (typeof p  == 'undefined') p  = 0;
    if (typeof ts == 'undefined') ts = '.';
    if (typeof dp == 'undefined') dp = ',';
  
    // Get number and decimal part of n
    n = Number(n).toFixed(p).split('.');
  
    
    for (var iLen = n[0].length, i = iLen? iLen % 3 || 3 : 0, j = 0; i <= iLen; i+=3) {
      t.push(n[0].substring(j, i));
      j = i;
    }
    
    return t.join(ts) + (n[1]? dp + n[1] : '');
  }
  

  return (
    <Container>
      {items.map((item) => (
        <ItemComponent
          id={item.id}
          photo={item.photo}
          name={item.name}
          description={item.description}
          price={formatNumber(item.price)}
        />
      ))}
    </Container>
  );
}

interface item {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}



export default Home;
