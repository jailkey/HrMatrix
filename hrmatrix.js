var HrMatrix = function(content, config){
	//init config
	config = config || {};
	this.content = content;
	this.lineSeperator = config.lineSeperator || '|';
	this.lineEnd = config.lineEnd || '\n';

	//init private
	var _columns = [],
		_rows = [],
		_that = this;
	
	var _trim = function(value){

		return value;
	}

	var _removeEmptyLines = function(lines){

		var i = 0,
			len = lines.length,
			output = [];

		for(; i < len; i++){
			if(_trim(lines[i]) != ""){
				output.push(lines[i]);
			}
		}

		return output;
	}

	var _parse = function(content){

		var lines = _removeEmptyLines(_that.content.split(config.lineEnd)),
			lineLen = lines.length,
			i = 1;

		var rows = lines[0].split(_that.lineSeperator),
			rowsLen = lines.length,
			y = 1;
			
		for(; y < rowsLen; y++){
			that.rows.push(_trim(rows[y]));
		}

		for(; i < lineLen; i++){

		}
	}

	this.matrix = _parse(content)

}

HrMatrix.prototype = {
	get : function(key, subkey){

	},
	set : function(key, subkey, value){

	}
}