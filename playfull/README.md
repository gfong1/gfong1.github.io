# PlayFull Static Website

TODO - some small things left for dev team:
- I opted to not implement the restaurant contact form just for today because I didn't think it was a high priority for tech stars - spent more time polishing
- Mobile version is somewhat none existant because of lack of designs and time crunch
- Also fading in effect couldn't be implemented/debugged in the time, pieces of my attempts can be find in the main.js file
- PlayFull Business section on landing does not have stacked images of laptop/playpad

To deploy:
Add the following lines to the nginx conf in server listening on 80
```
location / {
    root /opt/New-Website/views;
    index landing.html;
    rewrite ^(/.+)\.html$ $1;
    try_files $uri.html $uri/ =404;
}

location /webstatic/ {
    alias /opt/New-Website/public/;
}
``` 
