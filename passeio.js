var i, j, tabuleiro, inicial, colunas, linhas, cavalo, lado, casas, ps, historico, certeza=false;

function inserir(){
    document.getElementById("colunas").value=8;
    document.getElementById("linhas").value=8;
    document.getElementById("inicial").value="a1";
    tabuleiro = document.getElementById("tabuleiro");
}

function coder(n){
    return String.fromCharCode(n+96);
}

function valid(col, lin){
    var x, y, cod;
    cod = document.getElementById("inicial").value;
    y = cod.slice(1);
    x = cod.slice(0,1);
    x = x.toLowerCase();
    x = x.charCodeAt(0) - 96;

    if(!((x>0 && x<=col) && (y>0 && y<=lin))){
        cod=0;
        confirm("Coordenada inválida.");
    }
    
    return cod;
}

function maximo(tam){
    if(tam>26){
        tam=0;
        confirm("Tamanho máximo: 26 casas.");
    }

    return tam;
}

function build(){
    colunas = parseInt(maximo(document.getElementById("colunas").value));
    linhas = parseInt(maximo(document.getElementById("linhas").value));
    inicial = valid(colunas, linhas);

    if(colunas*linhas>=144 && inicial!=0){
        certeza = confirm("Quantidades altas de casas podem fritar o seu navegador, tem certeza que deseja continuar?");
    }
    else if(inicial!=0){
        certeza = true;
    }

    if(inicial!=0 && certeza==true){
        tabuleiro.innerHTML="";
        for(i=linhas;i>0;i--){
            tabuleiro.innerHTML+="<div>";
            for(j=0;j<colunas;j++){
                if((i%2==0 && j%2==0) || (i%2==1 && j%2==1)){
                    tabuleiro.innerHTML+="<div id='"+(coder(j+1))+(i)+"' class='square'><div class='p'>"+(coder(j+1))+(i)+"</div></div>";
                }
                else{
                    tabuleiro.innerHTML+="<div id='"+(coder(j+1))+(i)+"' class='square darker'><div class='p'>"+(coder(j+1))+(i)+"</div></div>";
                }
            }
            tabuleiro.innerHTML+="</div>";
        }

        if(colunas > linhas){
            lado = Math.floor(600/colunas);
        }
        else{
            lado = Math.floor(600/linhas);
        }
        lado-=2;

        casas = document.getElementsByClassName("square");
        for(i=0;i<casas.length;i++){
            casas[i].style.height=lado+"px";
            casas[i].style.width=lado+"px";
        }

        ps = document.getElementsByClassName("p");
        for(i=0;i<ps.length;i++){
            ps[i].style.fontSize=lado*0.7+"px";
        }
        
        document.getElementById(inicial).innerHTML+="<img id='cavalo' class='img' src='imgs/cavalo.png' alt='peça cavalo do xadrez'>";
        
        cavalo = document.getElementById("cavalo");
        cavalo.style.height = Math.floor(lado*0.8)+"px";
        cavalo.style.margin = Math.floor((lado-Math.floor(lado*0.8))/2)+"px";
    }
}

function calcular(){
    
}