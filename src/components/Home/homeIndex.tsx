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


  //função para modificar a variável "price" a um padrão do Real(com ponto separando os milhares e caso se trabalhe com casas decimais usar vírgula);
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

// const items = [
//   {
//     "id": 1,
//     "name": "Iphone 11 128 GB",
//     "brand": "Apple",
//     "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
//     "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
//     "price": "5000.00",
//     "createdAt": "2023-10-30T16:25:01.093Z",
//     "updatedAt": "2023-10-30T16:25:01.093Z"
//   },
//   {
//     "id": 2,
//     "name": "AirPods",
//     "brand": "Apple",
//     "description": "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
//     "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
//     "price": "1200.00",
//     "createdAt": "2023-10-30T16:25:01.093Z",
//     "updatedAt": "2023-10-30T16:25:01.093Z"
//   },
//   {
//     "id": 3,
//     "name": "Macbook Air",
//     "brand": "Apple",
//     "description": "Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.",
//     "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp",
//     "price": "8200.00",
//     "createdAt": "2023-10-30T16:25:01.093Z",
//     "updatedAt": "2023-10-30T16:25:01.093Z"
//   },
//   {
//     "id": 4,
//     "name": "iPhone 12 64 GB",
//     "brand": "Apple",
//     "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
//     "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp",
//     "price": "6500.00",
//     "createdAt": "2023-10-30T16:25:01.093Z",
//     "updatedAt": "2023-10-30T16:25:01.093Z"
//   },
//   {
//     "id": 5,
//     "name": "Apple Watch Series 7",
//     "brand": "Apple",
//     "description": "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
//     "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
//     "price": "3200.00",
//     "createdAt": "2023-10-30T16:25:01.093Z",
//     "updatedAt": "2023-10-30T16:25:01.093Z"
//   },
//   {
//     "id": 6,
//     "name": "iPad",
//     "brand": "Apple",
//     "description": "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
//     "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
//     "price": "4200.00",
//     "createdAt": "2023-10-30T16:25:01.093Z",
//     "updatedAt": "2023-10-30T16:25:01.093Z"
//   },
//   {
//     "id": 7,
//     "name": "Headset Cloud Revolver",
//     "brand": "HyperX",
//     "description": "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
//     "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
//     "price": "1000.00",
//     "createdAt": "2023-10-30T16:25:01.093Z",
//     "updatedAt": "2023-10-30T16:25:01.093Z"
//   },
//   {
//     "id": 8,
//     "name": "Headset Cloud Stinger",
//     "brand": "HyperX",
//     "description": "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
//     "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
//     "price": "600.00",
//     "createdAt": "2023-10-30T16:25:01.093Z",
//     "updatedAt": "2023-10-30T16:25:01.093Z"
//   }
// ]

// function Home() {
//   return (
//     <Container>
//       {items.map((item) => (
//         <ItemComponent item={item} />

//       ))}
//     </Container>
//   )
// }

export default Home;
