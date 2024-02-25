var listaFilmes = ['https://1.bp.blogspot.com/-SWt9furxjhU/WD4cHIz_g3I/AAAAAAAB3R0/DCU7KcT8Kykcof5I8IYFiMiPNodwH6AkgCLcB/s1600/Capit%25C3%25A3o%2BFant%25C3%25A1stico.jpg', 'https://live.staticflickr.com/3327/3428645998_e6a6775888_z.jpg', 'https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg', 'https://m.media-amazon.com/images/I/81Z6-ieAIyL.jpg', 'https://viureview.com.br/images/filmes8/La-la-land.jpg', 'https://static.rogerebert.com/uploads/movie/movie_poster/the-bridges-of-madison-county-1995/large_czRuGEx9Yhnh6nApirTLPToxHNu.jpg', 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg', 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg', 'https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Amsterdam_%282022_film%29.jpg/220px-Amsterdam_%282022_film%29.jpg', "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg", "https://images.uncyc.org/pt/thumb/b/bf/Carsforeign.jpg/300px-Carsforeign.jpg", "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg", "https://upload.wikimedia.org/wikipedia/pt/8/8d/Monster_House.jpg", "https://upload.wikimedia.org/wikipedia/pt/a/a1/How_I_Met_Your_Mother_DVD-8.jpg", "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg"];

var nomeFilmes = ['Capitão Fantástico', 'Kill Bill 1', 'Estrelas além do tempo', 'O grande hotel Budapeste', 'La La Land', 'As pontes de Madison', 'Soul', 'Bastardos Inglórios', 'A viagem de Chihiro', 'Amsterdam',' Aranhaverso', 'Carros 1', 'Batman Cavaleiro das Trevas', 'Casa Monstro', 'How i meet your mother', 'The Office'];

var listaTrailers = ['https://www.youtube.com/watch?v=YgRo_taGWPg&pp=ygUUY2FwaXTDo28gZmFudMOhc3RpY28%3D', 'https://www.youtube.com/watch?v=7kSuas6mRpk&pp=ygURa2lsbCBiaWxsIHRyYWlsZXI%3D', 'https://www.youtube.com/watch?v=wx3PVtrU-Os&pp=ygUXZXN0cmVsYXMgYWzDqW0gZG8gdGVtcG8%3D', 'https://www.youtube.com/watch?v=TCWF0BxbyG0&pp=ygUYTyBncmFuZGUgaG90ZWwgQnVkYXBlc3Rl', 'https://www.youtube.com/watch?v=waTDxRZ93Qc&pp=ygUKTGEgTGEgTGFuZA%3D%3D', 'https://www.youtube.com/watch?v=z_GOQhCTwFk&pp=ygUUQXMgcG9udGVzIGRlIE1hZGlzb24%3D', 'https://www.youtube.com/watch?v=hWBxoH4-4yw&pp=ygUEc291bA%3D%3D', 'https://www.youtube.com/watch?v=jzVBxHJiUn4&pp=ygUUQmFzdGFyZG9zIEluZ2zDs3Jpb3M%3D', 'https://www.youtube.com/watch?v=mqSo-5Xlq_Y&pp=ygURdmlhZ2VtIGRlIGNoaWhpcm8%3D', 'https://www.youtube.com/watch?v=RLBuMdYN4Ds&pp=ygURYW1zdGVyZGFtIHRyYWlsZXI%3D', ' https://www.youtube.com/watch?v=SS6ABPkfmBE&pp=ygUTYXJhbmhhdmVyc28gdHJhaWxlcg%3D%3D', 'https://www.youtube.com/watch?v=ez2TDPp8mwg&pp=ygUJY2Fycm9zIDEg', 'https://www.youtube.com/watch?v=M-Wv0fTr86I&list=PLF5SJy_9NMqQYIlPA6nkXSzc9xR_-elje', ' https://www.youtube.com/watch?v=SePKoxe1iTk&pp=ygUMY2FzYSBtb25zdHJv', 'https://www.youtube.com/watch?v=ERo0OK21rPw&pp=ygUVaG93IGkgbWV0IHlvdXIgbW90aGVy', ' https://www.youtube.com/watch?v=gO8N3L_aERg&pp=ygUKdGhlIG9mZmljZQ%3D%3D'];

document.write('<div class="container_todosFilmes">')
var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeFilmes[i] +'</p>');
        document.write('<a href="'+ listaTrailers[i] +'" target="_blank">Assistir Trailer</a>');
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')