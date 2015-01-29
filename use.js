var matrix = new HrMatrix(function(){/*
	
			| rock	| paper	| scissor	
	rock	|	0	|	-	|	+
	paper	|	+	|	0	|	-
	scissor	|	-	|	+	|	0


*/});


console.log("matrix:", JSON.stringify(matrix.get()));

console.log("test:", matrix.get('rock', 'paper'))