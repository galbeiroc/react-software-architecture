## Software Architecture
The study of the broader structure, organization, and patterns of a development project--
Primarily the ones that impact developer productivity over time.

* Design software that fits the contraints and required uses
* Will be constantly changing througout its lifetime

1. Server-side Rendering
2. State Management
3. Data Loading
4. Code Splitting


### Server-Side Rendering (SSR)
* In the normal flow of a React application, the client's browser makes a request to the server and loads *index.html* file. That *index.html*
file then tells the browser to load our React scripts.

* When our server is the one that renders our React code to HTML instead of the user's broswer.

|                               Client-Side Rendering CSR                                             |                           Server-Side Rendering SSR                      |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Renders app to HTML in the user's browser                                                           | Renders app to HTML on the server.                                       |
| Loads *index.html* from server, loads JS bundle from server, runs bundle, displays app, loads data. | Runs JS bundle, loads data, creates HTML document, sends to client side. |
| Less strain on the server, but genenally slower user experience.                                    | Faster user experience and better for SEO, but more strain on server.    |



### State Management
How an application handles the data needs of its components, with regards to loading, storing, persisting, and sharing this data.

1. useState hook
2. Context
3. Recoil
4. Redux
5. MobX

##### Your state management tools and techniques depend on:
* The size and complexity of your application
* How many components need to share that data
* The unique strengths and weaknesses of each

#### Different Sizes of State
* "Small" state
  1. useState
  2. Context
* "Medium" state
  1. Recoil
* "Large" state
  1. Redux
  2. MobX

###### recoil
Recoil has two pilars atom and selectors

### Monoliths
All the code for the project is included in a single codebase, which generally has to be modified
and deployed all at once.

* Simple at first
* Usually the default for new projects
* Ideal for very small teams working on short-term
* Can become unmanageable if you're not careful

### Multi-repo
The project's code is seperated into multiple codebases, each of which can usually be worked on and deployed independently.

* Add some overhead for setup
* Make the deployment process more complex
* Allow independent versioning of different parts
* Generally better for companies with fairly isolated teams

### Monorepos
Monorepos are mix of monoliths and multi-repos. They keep all the code in the same codebases but organize it so each piece is largely independent.

* Include many of the same benefits ass multi-repos, except that code is technically kept in the same repo.

