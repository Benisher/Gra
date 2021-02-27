 var square00 = document.getElementById('square00');
	var square10 = document.getElementById('square10');
	var square20 = document.getElementById('square20');

	var square01 = document.getElementById('square01');
	var square11 = document.getElementById('square11');
	var square21 = document.getElementById('square21');

	var square02 = document.getElementById('square02');
	var square12 = document.getElementById('square12');
	var square22 = document.getElementById('square22');


	square00.setAttribute('onclick', 'reply_click(this.id)');
	square10.setAttribute('onclick', 'reply_click(this.id)');
	square20.setAttribute('onclick', 'reply_click(this.id)');


	square01.setAttribute('onclick', 'reply_click(this.id)');
	square11.setAttribute('onclick', 'reply_click(this.id)');
	square21.setAttribute('onclick', 'reply_click(this.id)');

	
	square02.setAttribute('onclick', 'reply_click(this.id)');
	square12.setAttribute('onclick', 'reply_click(this.id)');
	square22.setAttribute('onclick', 'reply_click(this.id)');

	
	var row1 = [square00, square10, square20];
	var row2 = [square01, square11, square21];
	var row3 = [square02, square12, square22];
	var col1 = [square00, square01, square02];
	var col2 = [square10, square11, square12];
	var col3 = [square20, square21, square22];
	var tlbr = [square00, square11, square22];
	var trbl = [square20, square11, square02];
	var winners = [row1, row2, row3, col1, col2, col3, tlbr, trbl];



	var turn = 0;
	var reply_click = function(clicked_id){
		
		var id = document.getElementById(clicked_id);
		if(id.innerHTML === 'O'){
		
			return;
			
		}else if(id.innerHTML === 'X'){
		
			return;
			
		}
		
		var p1 = 'X';
		var p2 = 'O';
		if(turn === 0 || turn === 2 || turn === 4 || turn === 6 || turn === 8){
		
			id.innerHTML = p1;
			
		} else if(turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9){
		
			id.innerHTML = p2;
			
		}
		
		turn++; 
		
		
		if(row1[0].innerHTML === 'X' && row1[1].innerHTML === 'X' && row1[2].innerHTML === 'X'){
		
			for(var i = 0; i < row1.length; i++){
				row1[i].setAttribute('class', 'winner');
			}
			
			alert('X wygrał!');
			
			window.location.reload(true);
		}
		
		if(row1[0].innerHTML === 'O' && row1[1].innerHTML === 'O' && row1[2].innerHTML === 'O'){
		
			for(var i = 0; i < row1.length; i++){
				row1[i].setAttribute('class', 'winner');
			}
			
			alert('O  wygrało!');
			
			window.location.reload(true);
			
		}
		
		
		if(row2[0].innerHTML === 'X' && row2[1].innerHTML === 'X' && row2[2].innerHTML === 'X'){
		
			for(var i = 0; i < row2.length; i++){
				row2[i].setAttribute('class', 'winner');
			}
			
			alert('X wygrał!');
			
			window.location.reload(true);
			
		}
		
		if(row2[0].innerHTML === 'O' && row2[1].innerHTML === 'O' && row2[2].innerHTML === 'O'){
		
			for(var i = 0; i < row2.length; i++){
				row2[i].setAttribute('class', 'winner');
			}
			
			alert('O wygrało!');
			
			window.location.reload(true);
			
		}
		
		
		if(row3[0].innerHTML === 'X' && row3[1].innerHTML === 'X' && row3[2].innerHTML === 'X'){
		
			for(var i = 0; i < row3.length; i++){
				row3[i].setAttribute('class', 'winner');
			}
			
			alert('X wygrał!');
			
			window.location.reload(true);
			
		}
		
		if(row3[0].innerHTML === 'O' && row3[1].innerHTML === 'O' && row3[2].innerHTML === 'O'){
		
			for(var i = 0; i < row3.length; i++){
				row3[i].setAttribute('class', 'winner');
			}
			
			alert('O wygrało!');
			
			window.location.reload(true);
			
		}
		
		
		if(col1[0].innerHTML === 'X' && col1[1].innerHTML === 'X' && col1[2].innerHTML === 'X'){
		
			for(var i = 0; i < col1.length; i++){
				col1[i].setAttribute('class', 'winner');
			}
			
			alert('X wygrał!');
			
			window.location.reload(true);
			
		}
		
		if(col1[0].innerHTML === 'O' && col1[1].innerHTML === 'O' && col1[2].innerHTML === 'O'){
		
			for(var i = 0; i < col1.length; i++){
				col1[i].setAttribute('class', 'winner');
			}
			
			alert('O wygrało!');
			
			window.location.reload(true);
			
		}
		
		
		if(col2[0].innerHTML === 'X' && col2[1].innerHTML === 'X' && col2[2].innerHTML === 'X'){
		
			for(var i = 0; i < col2.length; i++){
				col2[i].setAttribute('class', 'winner');
			}
			
			alert('X wygrał!');
			
		window.location.reload(true);
			
		}
		
		if(col2[0].innerHTML === 'O' && col2[1].innerHTML === 'O' && col2[2].innerHTML === 'O'){
		
			for(var i = 0; i < col2.length; i++){
				col2[i].setAttribute('class', 'winner');
			}
			
			alert('O wygrało!');
			
			window.location.reload(true);
			
		}
		
		
		if(col3[0].innerHTML === 'X' && col3[1].innerHTML === 'X' && col3[2].innerHTML === 'X'){
		
			for(var i = 0; i < col3.length; i++){
				col3[i].setAttribute('class', 'winner');
			}
		
			alert('X wygrał!');
			
			window.location.reload(true);
			
		}; 
		
		if(col3[0].innerHTML === 'O' && col3[1].innerHTML === 'O' && col3[2].innerHTML === 'O'){
		
			for(var i = 0; i < col3.length; i++){
				col3[i].setAttribute('class', 'winner');
			}
			
			alert('O wygrało!');
			
			window.location.reload(true);
			
		};

		
		if(tlbr[0].innerHTML === 'X' && tlbr[1].innerHTML === 'X' && tlbr[2].innerHTML === 'X'){
		
			for(var i = 0; i < row1.length; i++){
				tlbr[i].setAttribute('class', 'winner');
			}
			
			alert('X wygrał!');
			
			window.location.reload(true);
			
		}; 
		
		if(tlbr[0].innerHTML === 'O' && tlbr[1].innerHTML === 'O' && tlbr[2].innerHTML === 'O'){
		
			for(var i = 0; i < tlbr.length; i++){
				tlbr[i].setAttribute('class', 'winner');
			}
			
			alert('O wygrało!');
			
			window.location.reload(true);
		
		};
		
		
		if(trbl[0].innerHTML === 'X' && trbl[1].innerHTML === 'X' && trbl[2].innerHTML === 'X'){
			for(var i = 0; i < trbl.length; i++){
				trbl[i].setAttribute('class', 'winner');
			}
			
			alert('X wygrał!');
			
			window.location.reload(true);
			
		}; 
		
		if(trbl[0].innerHTML === 'O' && trbl[1].innerHTML === 'O' && trbl[2].innerHTML === 'O'){
		
			for(var i = 0; i < trbl.length; i++){
				trbl[i].setAttribute('class', 'winner');
			}
			
			alert('O wygrało!');
			
			window.location.reload(true);
			
		};

		if(turn>=9){alert('Koniec gry...Jeszcze raz'),window.location.reload(true);};
	};
