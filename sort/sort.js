	//sorthings functions 
	const bar = document.querySelectorAll('.bar');
	const sort = document.querySelector('.btn-sort');
	const generate = document.querySelector('.generate');
	const barr = [];
	
	//bubble sort
	let timeSpeedBubble = 1;
	//selection
	let timeSpeedSelection = 80;
	//quick
	
	//heap sort
	let heapifyTime = 0;
	let heapTime = 0;
	let timeSpeedHeap = 75;
	let timeSpeedHeap2 = 110;
	let timeSpeedHeap3 = timeSpeedHeap2 * 50;
	
	//nav functions
	const sortLists = document.querySelectorAll('.sort-list');
	
	//add event listener
	let lastSort = 0;
		//set bubble sort as default
	sortLists[lastSort].classList.add('sort-list-active');
	
	sortLists.forEach((sl, index) => {
		sl.addEventListener('click', () => {
			sl.classList.add('sort-list-active');
			generateBars();
			resetLoadingBar();
			resetVariables();
			removeClass(lastSort);
			lastSort = index;
		});
	});
	
	function removeClass (sortIndex) {
		sortLists[sortIndex].classList.remove('sort-list-active');
	}
	
	generateBars();
	//reset variables
	function resetVariables(){
		//for quick
		quickTime = 0;
		//for heap
		heapifyTime = 0;
		heapTime = 0;
	}
	//generate bars event listener
	generate.addEventListener('click', () => {
		generateBars();
		resetLoadingBar();
		resetVariables();
	});
	//NAV CLICKED/sort event listener
	sort.addEventListener('click', () => {
		if(lastSort == 0){
			bubbleSort(barr);
			loadingBarBubble();
		}
		if(lastSort == 1){
			selectionSort(barr);
			loadingBarSelection();
		}
		if(lastSort == 2){
			
		}
		if(lastSort == 3){
			heapSort(barr);
		}
	});
	
	//generate bar function
	function generateBars(){
		bar.forEach((bar) => barr.pop());
		bar.forEach((bar) => {
			let height = Math.floor(Math.random() * 500);
			bar.style.height = `${height}px`;
			barr.push(height);
		});
	}
	
	//loading bar
	const loadingBar = document.querySelector('.loading-bar');
	
	function loadingBarBubble(){
		for(let i = 0; i < barr.length + 1; i++){
			setTimeout(() => {
				loadingBar.style.width = `${i * 10}px`;
			}, ((barr.length-1) * timeSpeedBubble) * i);
		}
	}
	
	function loadingBarSelection(){
		for(let i = 0; i < barr.length + 1; i++){
			setTimeout(() => {
				loadingBar.style.width = `${i * 10}px`;
			}, timeSpeedSelection * i);
		}
	}
	
	function loadingBarQuick(){
		for(let i = 0; i < barr.length + 1; i++){
			setTimeout(() => {
				loadingBar.style.width = `${i * 10}px`;
			}, timeSpeedQuick + 30 * i);
		}
	}
	
	function resetLoadingBar(){
		loadingBar.style.width = '0px';
	}
	
	//SORTINGS
	//bubble
	function bubbleSort(arr){
		for(let i = 0; i<arr.length; i++){
			let k = 0;
			let j = 1;
			setTimeout(() => {
				for(let l=0; l<arr.length -1; l++){		
					setTimeout(() => {				
						if(arr[j] < arr[k]){
							let temp = arr[k];
							arr[k] = arr[j];
							arr[j] = temp;
							bar[k].style.height = `${arr[k]}px`;
							bar[j].style.height = `${arr[j]}px`;
							bar[l].style.backgroundColor = '#458cff';
							setTimeout(() => {
							bar[l].style.backgroundColor = 'lightblue';
							}, timeSpeedBubble * l);
						}
						k++;
						j++;	
					}, timeSpeedBubble * l);
				}
			}, ((arr.length-1) * timeSpeedBubble) * i);
			
		}	
	}
	//selection
	function selectionSort(arr){
		for(let i = 0; i < arr.length - 1; i++){
			setTimeout(() => {
				let min = arr[i];
				let temp;
				let k;
				
				for(let j = i + 1; j < arr.length; j++){
					if(arr[j] < min){
						min = arr[j];
						k = j;
					}
					
				}
				if(arr[i] > min){
					temp = arr[i];
					arr[i] = min;
					arr[k] = temp;
					bar[i].style.height = `${arr[i]}px`;
					bar[k].style.height = `${arr[k]}px`;
					bar[i].style.backgroundColor = `#458cff`;
					bar[k].style.backgroundColor = `#458cff`;
					setTimeout(() => {
						bar[i].style.backgroundColor = `lightblue`;
						bar[k].style.backgroundColor = `lightblue`;		
					}, timeSpeedSelection);
					
				}
				
			}, timeSpeedSelection * i);
		}
	}
	//[4, 0, 2, 5, 7, 8, 1, 3, 6, 9];
	//[4, 0, 2, 5, 6, 8, 1, 3, 7, 9];
	//[4, 0, 2, 5, 6, 3, 1, 8, 7, 9];
	
	//[4, 0, 2, 1, 3, 6, 5, 8, 7, 9]; i = 5;
	
	//[1, 0, 2, 4, 3, 6, 5, 8, 7, 9]; i = 3;
	
	//[0, 1, 2, 4, 3, 6, 5, 8, 7, 9];
	const arr = [4, 9, 2, 5, 7, 8, 1, 3, 6, 0];
	//quicky sort
	function quickSort(arr, left, right){
		let index;
		if(arr.length > 1){
			index = partition(arr, left, right);
			if(left < index - 1){
				quickSort(arr, left, index - 1)
			}
			
			if(index < right){
				quickSort(arr, index, right)
			}
		}
		
		return arr;
	}
	
	function partition(arr, left, right){
		let pivot = arr[Math.floor((right + left) / 2)],
			i = left,
			j = right;
			
		while(i <= j){
			while(arr[i] < pivot){
				i++;
			}
			
			while(arr[j] > pivot){
				j--;
			}
			
			if(i <= j){
				//swap
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				i++;
				j--;
			}
		}
		
		return i;
	}	

	let sortedArr = quickSort(arr, 0, arr.length - 1);
	console.log(sortedArr);
	//heap sort
	function heapSort(arr){
		
		let n = arr.length;
		
		for(let i = Math.floor(n / 2 - 1); i >= 0; i--){
			heapify(arr, n, i);
		}
		setTimeout(() => {
			for(let i = n - 1; i >= 0; i--){
				setTimeout(() => {
					heapifyTime = 0;
					let temp = arr[0];
					arr[0] = arr[i];
					arr[i] = temp;
					console.log(arr[0]);
					console.log(arr[i]);
					bar[i].style.height = `${arr[i]}px`;
					bar[0].style.height = `${arr[0]}px`;
					bar[i].style.backgroundColor = `#458cff`;
					setTimeout(() => {
					bar[i].style.backgroundColor = `lightblue`;
					}, timeSpeedHeap2);
					heapify(arr, i, 0);
				}, timeSpeedHeap2 * heapTime);						
				heapTime++;
			}
		}, timeSpeedHeap3);
	}
	
	function heapify(arr, n, i){
		
		let largest = i;
		let l = 2 * i + 1;
		let r = 2 * i + 2;
		
		setTimeout(() => {
		bar[i].style.backgroundColor = `#458cff`;
			setTimeout(() => {
				bar[i].style.backgroundColor = `lightblue`;
			}, timeSpeedHeap);
				
		}, timeSpeedHeap * heapifyTime);
		
		if(l < n && arr[l] > arr[largest]){
			largest = l;
		}
		
		if(r < n && arr[r] > arr[largest]){
			largest  = r;
		}
		
		if(largest != i){
			let swap = arr[i];
				arr[i] = arr[largest];
				arr[largest] = swap;
			setTimeout(() => {
				bar[i].style.height = `${arr[i]}px`;
				bar[largest].style.height = `${arr[largest]}px`;
				bar[i].style.backgroundColor = `#458cff`;
				bar[largest].style.backgroundColor = `#458cff`;
				setTimeout(() => {
					bar[i].style.backgroundColor = `lightblue`;
					bar[largest].style.backgroundColor = `lightblue`;
				}, timeSpeedHeap);
			}, timeSpeedHeap * heapifyTime);
			heapifyTime++;
			heapify(arr, n, largest);
		}
	}
	