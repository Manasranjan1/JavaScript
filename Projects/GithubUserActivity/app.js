const username = process.argv[2]

if (!username) {
    console.log("Please provide a Github username")
    process.exit(1);

}

console.log(`Username entered : ${username}`)


async function getActivity(username) {

    const url = `https://api.github.com/users/${username}/events`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("User not found")
        }

        const data = await response.json();


        return data;

    } catch (error) {
        console.log("Error", error.message);
        process.exit(1);
    }
}

// const data = getActivity(username);


function displayActivity(events) {
    if (!events.length) {
        console.log("No recent activity found");
        return;
    }
    const recentEvents = events.slice(0, 10);


    for (let event of recentEvents) {
        switch (event.type) {
            case "PushEvent":
                const commits = event.payload?.commits?.length;
                if (commits) {
                    console.log(`-pushed ${commits} to repo ${event.repo.name}`);
                } else {
                    console.log(`-pushed into repo ${event.repo.name}`);
                } break;

            case "IssuesEvent":
                console.log(`opened an issue in ${event.repo.name}`);
                break;

            case "WatchEvent":
                console.log(`- Starred ${event.repo.name}`);
                break;

            case "ForkEvent":
                console.log(`- Forked ${event.repo.name}`);
                break;

            case "CreateEvent":
                console.log(`- Created ${event.payload.ref_type} in ${event.repo.name}`);
                break;

            default:
                console.log(`- ${event.type} in ${event.repo.name}`);
        }
    }


}

async function main() {
        const events = await getActivity(username);
        displayActivity(events);
    }

    main();