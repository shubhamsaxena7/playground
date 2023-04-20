export default {

		getSelectOptions: (data, labelKey, valueKey) => {  
		// creates a deduplicated array of SelectOptions from data 
		let dupValues = data.map(row => {return {'label':row[labelKey], 'value':row[valueKey]}});
		let output = {};
		dupValues.forEach(option => {output[option.label] = option});
		let outputProps = Object.getOwnPropertyNames(output);
		// duplicate labels get overwritten with the last value
		let options = outputProps.map(prop => output[prop]);
		return _.sortBy(options, 'value')
	},
	
	getUserLocation: async () => {
		appsmith.geolocation.getCurrentPosition()
	}
	
}