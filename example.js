const url = ""; // https://example.com
const username = "";
const password = "";

async function init() {

	const { Moodle } = await import("moodle-scrape");
	const moodle = new Moodle(url);

	console.time('-- login() time')
	const cookies = await moodle.login(username, password);
	console.timeEnd('-- login() time')

	if(!cookies) {
		return console.log("ERROR: Login failed.");
	}

	console.time('-- getInfo() time')
	const user = await moodle.getInfo();
	console.timeEnd('-- getInfo() time')

	if(!user) {
		return console.log("ERROR: No user found.");
	}

	console.log('\nName: ' + user.name);
	console.log('\nCourses:\n - ' + user.courses.join("\n - "));
	if(user.tasks) {
		console.log('\nTasks:\n' + user.tasks.map(task => {
			return ` - ${task.course}\n   ${task.name} ${task.deadline}\n   ${task.description}`
		}).join("\n"));
	}
}

init();