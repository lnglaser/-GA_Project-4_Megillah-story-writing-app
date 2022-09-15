# GA Project 4 - Megillah, a Story-Writing app

### By: Leon Glaser

[LinkedIn](https://www.linkedin.com/in/leon-glaser-02645322/) | 
[Twitter](https://twitter.com/sirescapist) |
[GitHub](https://github.com/lnglaser)
[GitHub](https://github.com/lnglaser)

***

### ***Description***

#### **Based on a message board-based writing exercise/game, the aim of this app is to allow a user to open a thread that begins a story, and other people can jump in to continue it. The game is typically played with rules governing who can post and when (i.e. the last person to post must either wait a fixed amount of time, or until another user adds to the story.) Features governing posting permissions will be added during development.**

**MVP: A user can start a thread, and contribute to an existing thread.**

[Trello board](https://trello.com/b/1J8khnrO/ga-project-4-megillah)

***
### ***Technologies***
* JavaScript
* Vue
* PostgreSQL


***
### ***Getting Started***
1. Build Models
    * User
    * Scroll
    * Chapter

2. Define routes
    * CRUD on Chapter
    * CRUD on Scroll
    * CRUD on User (?)

3. Determine specific components
***
### ***Screenshots***

..

#### ***ERD***
![Megillah ERD](imageAssets/Project 4 - Megillah ERD & CHD-ERD (1).jpg)

#### ***CHD***
![Megillah CHD](imageAssets/Project 4 - Megillah ERD & CHD-CHD (1).jpg)
***
### ***Future Updates***
- [ ] Implementing frontend user Features
- [ ] Adding authentication for users
- [ ] Restricting adding to thread based on contributor order (previous user must wait until new user adds, or a certain amount of time has passed)
- [ ] Timing out edit function on entries (edit function will be removed from scrolls/chapters after a certain amount of time)
- [ ] Allow users extra controls on threads they started (approving chapter additions, setting timers)
- [ ] Styling