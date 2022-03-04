const { getLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require('../../models/launches.model')


function httpGetAllLaunches(req, res) {
    return res.status(200).json(getLaunches());
}

function httpAddNewLaunch(req, res) {
    try {
        const launch = req.body;

        if (!launch.mission || !launch.rocket || !launch.target || !launch.launchDate) {
            return res.status(400).json({
                err: 'Missing required launch details...'
            })
        }
        launch.launchDate = new Date(launch.launchDate)

        if (isNaN(launch.launchDate)) {
            return res.status(400).json({ err: 'Invalid launch date' })
        }
        addNewLaunch(launch);
        return res.status(201).json(launch);
    }
    catch (err) {
        return res.status(401).json({ error: "Unable to add launch." })
    }
}



function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);

    if (!existsLaunchWithId(launchId)) {
        return res.status(404).json({
            error: "Launch not found",
        });
    }

    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted);
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}