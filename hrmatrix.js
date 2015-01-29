var HrMatrix = function(content, config){
	//init config
	config = config || {};

	//Erros
	var ERROR_WRONG_TYPE = "Content must be a string or a function!",
		ERROR_KEY = "Key is not defined!",
		ERROR_SUBKEY = "Subkey is not defined!",
		ERROR_VALUE = "value is not defined!";

	if(typeof content === "function"){
		this.content = content
						.toString()
						.replace(/(^function\s*\(\)\s*\{\s*\/\*)([\s\S]*)(\*\/\s*\})/g, function(){
							return arguments[2];
						});
	}else if(typeof content === "string"){
		this.content = content
	}else{
		throw new Error();
	}

	
	this.lineSeperator = config.lineSeperator || '|';
	this.lineEnd = config.lineEnd || "\n";

	//init private
	var _columns = [],
		_rows = [],
		_that = this;
	

	var _removeEmptyLines = function(lines){

		var i = 0,
			len = lines.length,
			output = [];

		for(; i < len; i++){
			if(lines[i].trim() != ""){
				output.push(lines[i]);
			}
		}

		return output;
	}

	var _parse = function(content){

		var lines = _removeEmptyLines(_that.content.split(_that.lineEnd)),
			lineLen = lines.length,
			i = 1,
			matrix = {};

		var columns = lines[0].split(_that.lineSeperator),
			columnsLen = columns.length,
			y = 1;

		for(; y < columnsLen; y++){

			_columns.push(columns[y].trim());
		}
		
		for(; i < lineLen; i++){

			var parts = lines[i].split(_that.lineSeperator),
				name = parts[0].trim(),
				rowsLen = parts.length,
				row = {};

			for(y = 1; y < rowsLen; y++){
				row[_columns[y - 1].trim()] = parts[y].trim();
			}

			matrix[name] = row;
		}

		return matrix;
	}

	this.matrix = _parse(this.content)

}

HrMatrix.prototype = {
	get : function(key, subkey){
		var undefined;
		if(key !== undefined){
			if(subkey !== undefined){
				console.log(key, this.matrix, this.matrix[key])
				return this.matrix[key][subkey]
			}else{
				return this.matrix[key];
			}
		}
		return this.matrix;
	},
	set : function(key, subkey, value){
		var undefined;
		if(key === undefined){
			throw new Error(ERROR_KEY);
		}
		if(subkey === undefined){
			throw new Error(ERROR_SUBKEY);
		}
		if(value === undefined){
			throw new Error(ERROR_SUBKEY);
		}
		this.matrix[key][subkey] = value;
		return this;
	}
}