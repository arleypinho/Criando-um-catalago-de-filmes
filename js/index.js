
/*

Declarando Manualmente

var filme4 = "https://static.stealthelook.com.br/wp-content/uploads/2022/09/novos-filmes-que-eu-mal-posso-esperar-para-ver-esse-ano-avatar-the-way-of-the-water-20220908180112.jpg";

var filme5 = "https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F42078.jpg%3Ft%3D20230730131751";

var filme6 = "https://capas-p.imagemfilmes.com.br/164908_000_p.jpg";

var filme7 = "https://br.web.img3.acsta.net/c_310_420/pictures/23/05/16/22/53/0156803.jpg"

var filme8 = "https://cinemaisarte.com.br/wp-content/uploads/2021/12/3298637.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg"

var filme9 = "https://cinema10.com.br/upload/filmes/filmes_12015_guardioes-da-galaxia-vol-3.jpg"



Colocando Manualmente na posição do array

listafilmes[0] = "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg";
listafilmes[1] = "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/Venom_2018.jpg/250px-Venom_2018.jpg";
listafilmes[2] = "https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG";
listafilmes[3] = "https://static.stealthelook.com.br/wp-content/uploads/2022/09/novos-filmes-que-eu-mal-posso-esperar-para-ver-esse-ano-avatar-the-way-of-the-water-20220908180112.jpg";

 document.write('<img src=' + listafilmes[0] + '>');

*/


var listafilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/Venom_2018.jpg/250px-Venom_2018.jpg",
    "https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG",
    "https://static.stealthelook.com.br/wp-content/uploads/2022/09/novos-filmes-que-eu-mal-posso-esperar-para-ver-esse-ano-avatar-the-way-of-the-water-20220908180112.jpg",
    "https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F42078.jpg%3Ft%3D20230730131751",
    "https://capas-p.imagemfilmes.com.br/164908_000_p.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/23/05/16/22/53/0156803.jpg",
    "https://cinemaisarte.com.br/wp-content/uploads/2021/12/3298637.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg",
    "https://cinema10.com.br/upload/filmes/filmes_12015_guardioes-da-galaxia-vol-3.jpg"

];


for(var i = 0; i <= listafilmes.length; i++){
    document.write('<img src=' + listafilmes[i] + '>');
}


 




