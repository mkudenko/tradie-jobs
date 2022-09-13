# Tradie Jobs app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements & installation

Node v16.

### `nvm use`
### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Development notes

### Assumptions

* No authentication required
* All jobs are hardcoded
* Job status can be changed from any to any
* All dates are local
* UUID is used for jobs and notes IDs
* Job notes are sorted by creation date, latest first
* Updating the note updates the creation date.

### State management

The application uses [Recoil](https://recoiljs.org/).

### Tests

After completing the functionality, I added a few components tests. See `/src/components/__tests__`.

The app will need more tests:
* Showing/hiding the job details
* Showing/hiding the note edit form
* Updating the job status
* Saving notes
* Filtering

### Other

All state change operations are handled in `useJobsRepository.tsx`.\
Such decoupling allows to easily add any other storage mechanism, for example a backend API.\
The components' logic won't need to change, aside from adding `async/await` where needed.

Jobs sorting not implemented, but would follow the same logic as with filtering - via Recoil state.

