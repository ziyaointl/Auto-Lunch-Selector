var choices = ["Burger King", "烤鸭", "排骨", "把子肉", "McDonalds", "Subway", "九州便当", "统一银座", "吉野家", "谷夫子包子"];

function getLunch() {
	var index = Math.floor(Math.random() * choices.length);
	document.getElementById("lunch").innerHTML = choices[index];
}