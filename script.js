
var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scorecard = document.getElementById('scorecard');
var quizBox = document.getElementById('questionBox');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

var app={

			questions:[
							{q:'ECOMOG stands for?', options:['Economic community of monitoring group', 'Ecowas monitoring group', 'Ecowas mobility group', 'None of the above'],answer:2},
	 

							{q:'What is the capital of Adamawa ?', options:['Yola', 'FCT', 'Makurdi', 'Bauchi'],answer:1},

							{q:'Who is American president ?', options:['Boris Johnson', 'Mohammed Buhari', 'Trudeau', 'Donald Trump'],answer:4},
						
							{q:'what is the Square of 4 ?', options:['10', '256', '16', '124'],answer:3},

							{q:'what is the Square Root of 25 ?', options:['255', '125', '15', '5'],answer:4}
				],

				index:0,
				load:function(){
							if(this.index<=this.questions.length-1){
							quizBox.innerHTML = this.index+1+"."+this.questions[this.index].q;
							op1.innerHTML = this.questions[this.index].options[0];
							op2.innerHTML = this.questions[this.index].options[1];
							op3.innerHTML = this.questions[this.index].options[2];
							op4.innerHTML = this.questions[this.index].options[3];
							this.scorecard();
						}
						else{
							quizBox.innerHTML = "Quiz Over!"
							op1.style.display="none";
							op2.style.display="none";
							op3.style.display="none";
							op4.style.display="none";
							btn.style.display="none"
						}
				},
				next:function(){
					this.index++;
					this.load();
				},
				check:function(ele){

					var id=ele.id.split('');

					if (id[id.length - 1] == this.questions[this.index].answer){
					this.score++;			
						ele.className = "correct";
						ele.innerHTML = "correct";
						this.scorecard();
					}
					else{
						ele.className="wrong";
						ele.innerHTML="wrong";
					}
				},
				notClickAble:function(){
					for ( let i = 0; i < ul.children.length; i++ ){
						
						ul.children[i].style.pointerEvents="none";

					}
				},

				clickAble:function(){
					for ( let i = 0; i < ul.children.length;i++ ){
						ul.children[i].style.pointerEvents="auto";
						ul.children[i].style.backgroundColor="";
					}
				},
				score:0,
				scorecard: function(){
					scorecard.innerHTML = this.questions.length+"/"+this.score;
				}



	 }

	 			window.onload = app.load();

	 			function button(ele){
	 				app.check(ele);
	 				app.notClickAble();
	 			}

	 			function next(){
	 				app.next();
	 				app.clickAble();
	 			}