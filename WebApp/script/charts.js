Chart.defaults.global.responsive = true;

var traffic = document.getElementById('trafficChart');
var trafficChart = new Chart(traffic, {
	type: 'line',
	data: {
		labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
		datasets:[{
			label: 'Traffic',
			data: [
				750,
				1250,
				1000,
				1500,
				2000,
				1500,
				1750,
				1250,
				1750,
				2250,
				1750,
				2250
			],
			backgroundColor: 'rgba(226,227,246,0.5)',
			borderColor:'#b5b7e9',
			borderWidth: 2,
			lineTension: 0,
			pointRadius: 8,
			pointBorderWidth: 3,
			pointBackgroundColor: '#fbfbfb'
		}]
	},
	options: {
		aspectRatio: 2.5,
		scales: {
			yAxes: [{
				ticks:{
					beginAtZero: true
				}
			}],
		},
		legend: {
			display: false
		},
		layout: {
			padding: 15
		}
	}
});

var daily = document.getElementById('dailyTrafficChart');
var dailyChart = new Chart(daily, {
	type: 'bar',
	data: {
		labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		datasets: [{
			data: [
				75,
				100,
				175,
				125,
				225,
				200,
				100
			],
			backgroundColor: '#7377bf'
		}]
	},
	options: {
		aspectRatio: 2.5,
		scales:{
			yAxes: [{
				ticks:{
					beginAtZero: true
				}
			}]
		},
		legend: {
			display: false
		},
		layout: {
			padding: 10
		}
	}
});

var mobile = document.getElementById('mobileUsersChart');
var mobileChart = new Chart(mobile, {
	type: 'doughnut',
	data: {
		labels: ['Desktop', 'Tablets', 'Phones'],
		datasets: [{
			data: [
				70,
				15,
				15
			],
			backgroundColor: [
				'#7377bf',
				'#81c98f',
				'#74b1bf'
			],
			weight: 10
		}]
	},
	options: {
		aspectRatio: 2.5,
		legend: {
			position: 'right'
		},
		layout: {
			padding: 10
		}
	}
});
