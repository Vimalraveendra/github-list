# Github-List.

React to run the project.

1.Clone this repo.

2.cd github-list.

3.Run yarn install.

4.Run yarn start.

# Answers

.The thoughts and considerations I had while implementing the task.

1. First I thought to create the task using react, later on I can move to redux, so that I created a boilerplate using the create-react-app task-list.

2. For rendering all these list items I required one page component, one state component for holding the states of items & five presentational components for rendering.

3.For rendering an input element to search for repositories by name, a searchField component is required.Based on what ever the user typed in the inputSearchField sends a request to the GitHub repository server and fetches the appropriate repositories & render it.

4. In order to Caching the results of every search need to use a redux-cache library, So it will help us to not make an API request if the result are already stored.

5. Rendering a list with row items ,a state repository component is required for holding the state of the component, a functional repository list component for iterating through the list items that we got from the repository component after the fetch api call to the GitHub repository. In order to render row items Repository items component is required.

6.Required a throttle or debounce library inside the repository component, so that do not fire the request as soon user types.Using debounce basically triggers when you take your hands off the keyboard. It guarantees that a function is only executed a single time.So it helps us from keep firing the function once user types in.

7. Pagination component is required for implementing pagination, So for that ,set the initial state current page to one and pagesPerPost to 5.Based on the currentPage & pagesPerPost, we can calculate the currentPost per page using the slice method on the list items

8.Implemented desc sorting by every field , using keywords like sort & order= desc inside the fetch url .We got the sorted array list object items.

9.Github component is required for the GitHub authentication mechanism ,for that required an input field for typing in the name of GitHub holder & a button . Once the user copies the name displayed in the row & paste it on the input field & hit the GitHub button.It checks the id in the list items and user id matches or not .If it matches the row of repository of logged in user highlight.

# CheckList

1. Render a list with rows containing "repository ID", "title", "owner", "stars" and "created at" timestamp.- [x]

2. Render an input element to search for repositories by name.- [x]

3.Cache the results of every search (or have a limit) - do not make an API request if the results are already stored.- [x]

4.Do not fire requests as long as the user is typing - use throttle or debounce.- [x]

5.Implement pagination (locally, not by using API queries).[x]

6.Add ability to control number of rows rendered per page (5 - default/10/15/20).[x]

7.Implement ASC/DESC sorting by every field.[x]

8. Add GitHub authentication mechanism (eg: Log in with GitHub button) and highlight the row of repository of the logged-in user - please note that some users have 2FA enabled.[x]
