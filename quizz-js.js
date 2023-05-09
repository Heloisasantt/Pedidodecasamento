let perguntas = [
{
    titulo: 'Como meu irmão chama?',
    alternativas: ['Andre', 'Lucas', 'Pedro', 'Alexandre'],
    correta: 1
},

{
    titulo: 'Qual minha cor favorita?',
    alternativas: ['Verde', 'roxo', 'azul', 'rosa'],
    correta: 0
},

{
    titulo: 'Top 2 da minha lista de comidas prediletas',
    alternativas: ['Parmegiana', 'Japa', 'Strogonoff', 'Pizza'],
    correta: 2
},

{
    titulo: 'Qual é nosso apelido carinhoso',
    alternativas: ['Amor', 'Vida', 'Ponsha', 'Baby'],
    correta: 2
},

{
    titulo: 'Qual meu doce favorito',
    alternativas: ['Pudim', 'Beijinho', 'Bolo de chocolate', 'Brigadeiro'],
    correta: 3
},

{
    titulo: 'Qual era o apelido do Theo',
    alternativas: ['Pleto', 'Totonete', 'Teteo', 'Telbaldo'],
    correta: 1
},

{
    titulo: 'Eu tenhos quantas namoradas',
    alternativas: ['0', '100', '1', '10'],
    correta: 2
},

{
    titulo: 'Qual meu time do coração?',
    alternativas: ['Atlético MG', 'Corinthian', 'Cruzeiro', 'Flamengo'],
    correta: 2
},

{
    titulo: 'O que já tirei do meu corpo?',
    alternativas: ['Siso', 'Apêndice', 'Amígdalas', 'Pênis'],
    correta: 2
},

{
    titulo: 'Qual a parte do seu corpo eu mais gosto',
    alternativas: ['Pe', 'Bunda', 'Teta', 'Voce todinha'],
    correta: 3
},

{
    titulo: 'Pronta para a pergunta mais importante?!',
    alternativas: ['Sim', 'Não', 'Talvez', '-'],
    correta: 0
},


]

let app = {
    start: function(){
        this.Atualpos = 0;
        this.Totalpontos = 0;
        this.Erros = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },

    mostraquestao: function(q){
        this.qatual = q;
        //mostrando titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        //mostrando alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element, index){
            element.textContent = q.alternativas[index];
        })
    },

    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correto");
            this.Totalpontos++;
        }else{
            console.log("Errado");
            this.Erros++;
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },

    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            if(this.Totalpontos == 11){
                location.href = "duwdwm.html";
            }else{
                alert(`Tente novamente! Você errou um total de: ${this.Erros}`);
                location.href = "quizz.html";
            }
        }
    },

    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        if(this.Totalpontos >= 9)
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    }

}
app.start();