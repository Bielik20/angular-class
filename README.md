# Angular Class

It is based on [Tour Of Heroes (tutorial)](https://angular.io/docs/ts/latest/tutorial/) 
and done using [angular-cli](https://github.com/angular/angular-cli) 
supported by information included in [Angular 2 Tutorial](https://www.sitepoint.com/angular-2-tutorial/) 
and [The Ultimate Angular CLI Reference Guide](https://www.sitepoint.com/ultimate-angular-cli-reference/?utm_source=sitepoint&utm_medium=relatedinline&utm_term=&utm_campaign=relatedauthor)

## Configuration of Environment 

First sign up on [codeanywhere](https://codeanywhere.com)

Create new container **Blank (Blank Development Stack) [Ubuntu 14.04]**

To manage different node versions [nvm](https://github.com/creationix/nvm) is used. To install it paste this command in terminal then reopen terminal:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

To install correct version of node and angular-cli use these commands:
```
nvm install 7.7.3
nvm use 7.7.3
npm install -g @angular/cli@1.0.0-rc.4
```

Clone this repository and enter it with these commands:
```
git clone https://github.com/Bielik20/angular-class
cd angular-class
```

Now you will need to install all project dependencies that are listed in package.json. You will do this only once and it may take some time (up to 10 minutes):
```
npm install
```

To start server run:
```
ng serve --port 8080 --live-reload-port 8082 --host 0.0.0.0
```
The server should be running now "webpack: Compiled successfully". It can be accessed by clicking under a link of you contrainer with specified port, e.g. `http://port-8080.angular-test-wasniewskimikolaj952950.codeanyapp.com/heroes`. Note that your will be slightly different. Another thing to keep in mind is that your website won't automaticaly refresh after introducing change to the code, so you will have to do this manually (but it is not required to run `ng serve` again).

## Using CLI

Angular CLI helps to generate files and start server. For the purpose of this class you will need following commands:

- `ng g cl <Name>` To create class
- `ng g c <Name>` To create component
- `ng g s <Name>` To create service
- `ng server --port 8080 --live-reload-port 8082 --host 0.0.0.0` To start server. On normal (not web environment) `ng serve` would suffice

It is important to understand that CLI won't allways generate everything that is necessary. As you go through the tasks pay attention what is being generated by CLI, and what is already included in "app.module.ts".

## Tasks

### Initial Tasks:
- Examine Project
   - whole content of "/src/app" excluding "_guards" (for now)
   - src/styles.scss (optional)
- Add Quest model (use your imagination), service, component
- Examine what has been generated by CLI (very important step)
   - it should be displayed in console which files has been added and which modified/updated
- Add some quests to in-memory-data.service
- Add link in navigation menu and set up routes

### Adding quests
- Make so that every hero has a list of quests (one-to-many relation)
- Update in-memory-data.service to make heroes have quests
- Update hero-detail component so the heroes quests are displayed

### Authorization
- Make use of auth.guard, examine it and draw conculsions
- Create user model (username, password)
- Create login component that will accept any username and password and store it in a way auth.guard can use it (hint: localStorage)
- edit routes so only login page is accessible by anonymous users

### Registration
- Add additional fields to user model (e.g. email)
- Create register component (allow creating and editing user)
- Create user service
- Make it so created user is stored in in-memory-data.service
- Edit login service so it validates if user actually exists and password matches. Preferably do it with authentication.service

### Final Touch
- Add links in navigation menu to login and registration page:
   - if user is already logged in, display his or her name as a link to edit user properties, and a link to log out
   - else display login and register links
- This element should be encapsulated in component

## Hint

There is a solid chance that somewhere on this GitHub account there is a repository that consists clues how to complete some of these tasks.