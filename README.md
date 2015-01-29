# HrMatrix
Human readable Matrix

With HrMatrix you can create a JavaScript matrix in a human readable way.


### install
```html
<script src="hrmatrix.js" type="text/javascript"></script>
```


### create a matrix
```javascript

var matrix = new HrMatrix(`
	
			| rock	| paper	| scissor	
	rock	|	0	|	-	|	+
	paper	|	+	|	0	|	-
	scissor	|	-	|	+	|	0


`);

```

or if you use ES < 6

```javascript

var matrix = new HrMatrix(function(){/*
	
			| rock	| paper	| scissor	
	rock	|	0	|	-	|	+
	paper	|	+	|	0	|	-
	scissor	|	-	|	+	|	0


*/});

```

### use it

```javascript

var theMatrix = matrix.get();

```
theMatrix now includes a two dimensional list like this:
```
	{
		"rock" : {
			"rock" : "0",
			"paper" : "-",
			"scissor" : "+" 
		},
		"paper" : { 
			"rock" : "+",
			"paper" : "0",
			"scissor" : "-"
		},
		"scissor" : {
			"rock" : "-",
			"paper" : "+",
			"scissor" : "0"
		}
	}

```

if you want a row set the first key:

```javascript

var matrixRow = matrix.get('rock');

```

the result is:

```
	"rock" : {
		"rock" : "0",
		"paper" : "-",
		"scissor" : "+" 
	}
```

If you want only one result use:
```javascript

var result = matrix.get('rock', 'paper');

```






